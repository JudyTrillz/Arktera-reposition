import type { ReactNode } from "react";
import { slugify } from "@/lib/slugify";

type Align = "left" | "right" | "center";

type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "pullquote"; text: string }
  | { type: "note"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; header: string[]; align: Align[]; rows: string[][] }
  | { type: "chart"; id: string };

function parseAlign(sep: string): Align {
  const s = sep.trim();
  const left = s.startsWith(":");
  const right = s.endsWith(":");
  if (left && right) return "center";
  if (right) return "right";
  return "left";
}

function splitTableRow(line: string): string[] {
  const trimmed = line.trim().replace(/^\|/, "").replace(/\|$/, "");
  return trimmed.split("|").map((c) => c.trim());
}

function parseBlocks(markdown: string): Block[] {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed === "") {
      i++;
      continue;
    }

    const chartMatch = trimmed.match(/^\{\{chart:([\w-]+)\}\}$/);
    if (chartMatch) {
      blocks.push({ type: "chart", id: chartMatch[1] });
      i++;
      continue;
    }

    if (trimmed.startsWith("### ")) {
      blocks.push({ type: "h3", text: trimmed.slice(4).trim() });
      i++;
      continue;
    }
    if (trimmed.startsWith("## ")) {
      blocks.push({ type: "h2", text: trimmed.slice(3).trim() });
      i++;
      continue;
    }
    if (trimmed.startsWith("# ")) {
      blocks.push({ type: "h2", text: trimmed.slice(2).trim() });
      i++;
      continue;
    }

    if (trimmed.startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i].trim());
        i++;
      }
      const header = splitTableRow(tableLines[0]);
      const sepCells = tableLines[1] ? splitTableRow(tableLines[1]) : [];
      const align: Align[] = header.map((_, idx) => (sepCells[idx] ? parseAlign(sepCells[idx]) : "left"));
      const rows = tableLines.slice(2).map(splitTableRow);
      blocks.push({ type: "table", header, align, rows });
      continue;
    }

    if (/^[*-]\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^[*-]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[*-]\s+/, ""));
        i++;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ""));
        i++;
      }
      blocks.push({ type: "ol", items });
      continue;
    }

    // Paragraph: consume until blank line or next special line.
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].trim().startsWith("#") &&
      !lines[i].trim().startsWith("|") &&
      !/^[*-]\s+/.test(lines[i].trim()) &&
      !/^\d+\.\s+/.test(lines[i].trim()) &&
      !/^\{\{chart:[\w-]+\}\}$/.test(lines[i].trim())
    ) {
      paraLines.push(lines[i].trim());
      i++;
    }
    const text = paraLines.join(" ");

    const isPureBold = /^\*\*[^*]+\*\*$/.test(text);
    const isPureItalic = /^\*[^*].*[^*]\*$/.test(text) && !text.startsWith("**");

    if (isPureBold && text.length > 90) {
      blocks.push({ type: "pullquote", text: text.slice(2, -2) });
    } else if (isPureItalic) {
      blocks.push({ type: "note", text: text.slice(1, -1) });
    } else {
      blocks.push({ type: "p", text });
    }
  }

  return blocks;
}

function renderBoldItalic(text: string, keyPrefix: string): ReactNode[] {
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  const parts = text.split(regex).filter((p) => p !== "");
  return parts.map((part, idx) => {
    const key = `${keyPrefix}-${idx}`;
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={key} className="font-semibold text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={key}>{part.slice(1, -1)}</em>;
    }
    return <span key={key}>{part}</span>;
  });
}

function renderInline(text: string, keyPrefix = "i"): ReactNode[] {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let idx = 0;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(...renderBoldItalic(text.slice(lastIndex, match.index), `${keyPrefix}-pre-${idx}`));
    }
    const isExternal = /^https?:\/\//.test(match[2]);
    nodes.push(
      <a
        key={`${keyPrefix}-link-${idx}`}
        href={match[2]}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="text-ink underline decoration-accent/40 decoration-2 underline-offset-2 transition-colors hover:text-accent hover:decoration-accent"
      >
        {renderBoldItalic(match[1], `${keyPrefix}-linktext-${idx}`)}
      </a>,
    );
    lastIndex = match.index + match[0].length;
    idx++;
  }
  if (lastIndex < text.length) {
    nodes.push(...renderBoldItalic(text.slice(lastIndex), `${keyPrefix}-rest`));
  }
  return nodes;
}

function Table({ header, align, rows }: { header: string[]; align: Align[]; rows: string[][] }) {
  const alignClass = (a: Align) => (a === "right" ? "text-right" : a === "center" ? "text-center" : "text-left");
  return (
    <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-ink/10">
      <table className="w-full min-w-[32rem] border-collapse font-sans text-[0.9rem]">
        <thead>
          <tr className="border-b border-ink/10 bg-ink/[0.03]">
            {header.map((cell, i) => (
              <th
                key={i}
                className={`px-5 py-3.5 font-semibold text-ink ${alignClass(align[i])}`}
              >
                {renderInline(cell, `th-${i}`)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-b border-ink/8 last:border-b-0">
              {row.map((cell, ci) => (
                <td key={ci} className={`px-5 py-3.5 text-ink/70 ${alignClass(align[ci])}`}>
                  {renderInline(cell, `td-${ri}-${ci}`)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

type ArticleBodyProps = {
  content: string;
  charts?: Record<string, ReactNode>;
};

export function ArticleBody({ content, charts }: ArticleBodyProps) {
  const blocks = parseBlocks(content);

  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, i) => {
        const key = `block-${i}`;
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={key}
                id={slugify(block.text)}
                className="mt-6 scroll-mt-28 font-display text-[clamp(1.5rem,2vw+1rem,2.1rem)] leading-[1.15] tracking-tight text-ink text-balance"
              >
                {renderInline(block.text, key)}
              </h2>
            );
          case "h3":
            return (
              <h3 key={key} className="mt-4 font-display text-[1.3rem] leading-[1.2] text-ink">
                {renderInline(block.text, key)}
              </h3>
            );
          case "pullquote":
            return (
              <p
                key={key}
                className="my-2 border-l-2 border-accent py-1 pl-5 font-display text-[1.35rem] leading-[1.35] text-ink text-balance sm:text-[1.5rem]"
              >
                {renderInline(block.text, key)}
              </p>
            );
          case "note":
            return (
              <p key={key} className="text-[0.88rem] italic leading-relaxed text-ink/45">
                {renderInline(block.text, key)}
              </p>
            );
          case "p":
            return (
              <p key={key} className="text-[1.02rem] leading-relaxed text-ink/70">
                {renderInline(block.text, key)}
              </p>
            );
          case "ul":
            return (
              <ul key={key} className="flex flex-col gap-2.5">
                {block.items.map((item, ii) => (
                  <li key={ii} className="flex gap-3 text-[1.02rem] leading-relaxed text-ink/70">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{renderInline(item, `${key}-${ii}`)}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={key} className="flex flex-col gap-2.5">
                {block.items.map((item, ii) => (
                  <li key={ii} className="flex gap-3 text-[1.02rem] leading-relaxed text-ink/70">
                    <span className="mt-0.5 shrink-0 font-display text-sm text-accent">
                      {String(ii + 1).padStart(2, "0")}
                    </span>
                    <span>{renderInline(item, `${key}-${ii}`)}</span>
                  </li>
                ))}
              </ol>
            );
          case "table":
            return <Table key={key} header={block.header} align={block.align} rows={block.rows} />;
          case "chart":
            return <div key={key}>{charts?.[block.id] ?? null}</div>;
          default:
            return null;
        }
      })}
    </div>
  );
}
