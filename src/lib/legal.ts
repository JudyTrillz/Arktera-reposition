import { slugify } from "@/lib/slugify";

// Single source of truth for each legal document's revision date. Bump the
// ISO date here when the copy changes — every rendered date derives from it,
// so nothing is ever hand-typed as a formatted string.
export const legalUpdatedAt = {
  termsOfService: "2026-10-19",
  privacyPolicy: "2026-10-19",
} as const;

export function formatLegalDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    timeZone: "UTC",
  });
}

export type LegalSection = { id: string; title: string };

// Walks the raw markdown source for "## " headings (skipping "### ") so the
// on-page table of contents always matches the document's actual sections.
export function extractLegalSections(markdown: string): LegalSection[] {
  return markdown
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => /^##(?!#)\s+/.test(line))
    .map((line) => {
      const title = line.replace(/^##(?!#)\s+/, "").trim();
      return { id: slugify(title), title };
    });
}
