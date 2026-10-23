"use client";

import Link from "next/link";
import clsx from "clsx";
import { Clock, Sparkles } from "lucide-react";
import { ArrowIcon } from "@/components/ui/button";
import type { InsightArticle } from "@/lib/insights";
import { CATEGORY_META } from "@/lib/insight-category-meta";

type InsightCardProps = {
  article: InsightArticle;
  tone?: "paper" | "ink";
  large?: boolean;
  featured?: boolean;
  /** Renders a large ghost number bled off the card's top-right corner. */
  index?: number;
  className?: string;
};

export function InsightCard({
  article,
  tone = "paper",
  large = false,
  featured = false,
  index,
  className,
}: InsightCardProps) {
  const isPaper = tone === "paper";
  const meta = CATEGORY_META[article.category];

  return (
    <Link
      href={`/insights/${article.slug}`}
      data-cursor-hover
      className={clsx(
        "group relative isolate flex h-full flex-col justify-between overflow-hidden rounded-2xl border p-7 transition-all duration-300 sm:p-8",
        isPaper
          ? "border-ink/10 bg-paper hover:-translate-y-1 hover:border-ink/15 hover:shadow-[0_28px_56px_-28px_rgba(10,10,12,0.3)]"
          : "border-paper/10 bg-paper/[0.03] hover:-translate-y-1 hover:border-paper/20 hover:bg-paper/[0.05]",
        className,
      )}
    >
      {typeof index === "number" && (
        <span
          aria-hidden="true"
          className={clsx(
            "pointer-events-none absolute -right-1 -top-3 select-none font-display leading-none transition-colors duration-300",
            large ? "text-[8.5rem]" : "text-[5.5rem]",
            isPaper ? "text-ink/[0.045] group-hover:text-ink/[0.07]" : "text-paper/[0.05] group-hover:text-paper/[0.08]",
          )}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      )}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(55% 45% at 12% 0%, ${meta.color}17, transparent 70%)` }}
      />

      <div className="relative">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-sans text-[0.66rem] font-semibold uppercase tracking-[0.1em]"
            style={{ borderColor: `${meta.color}4d`, color: meta.color }}
          >
            <meta.Icon className="h-3 w-3" strokeWidth={2.5} aria-hidden="true" />
            {article.category}
          </span>
          {featured && (
            <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 font-sans text-[0.6rem] font-bold uppercase tracking-[0.1em] text-paper">
              <Sparkles className="h-2.5 w-2.5" strokeWidth={2.5} aria-hidden="true" />
              Featured
            </span>
          )}
        </div>

        <h3
          className={clsx(
            "mt-5 font-display leading-[1.2] text-balance transition-colors",
            large ? "text-[1.5rem] sm:text-[1.9rem]" : "text-[1.15rem] sm:text-[1.3rem]",
            isPaper ? "text-ink" : "text-paper",
          )}
        >
          {article.title}
        </h3>
        <p
          className={clsx(
            "mt-3 text-[0.95rem] leading-relaxed",
            large ? "max-w-xl" : "",
            isPaper ? "text-ink/60" : "text-paper/65",
          )}
        >
          {article.excerpt}
        </p>
      </div>

      <div
        className={clsx(
          "relative mt-7 flex items-center justify-between gap-3 border-t pt-5",
          isPaper ? "border-ink/10" : "border-paper/10",
        )}
      >
        <span
          className={clsx(
            "flex items-center gap-1.5 font-sans text-[0.82rem]",
            isPaper ? "text-ink/50" : "text-paper/50",
          )}
        >
          <Clock className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
          {article.readTime}
        </span>
        <span
          className={clsx(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
            isPaper
              ? "border-ink/15 text-ink group-hover:border-ink group-hover:bg-ink group-hover:text-paper"
              : "border-paper/20 text-paper group-hover:border-accent group-hover:bg-accent",
          )}
        >
          <ArrowIcon className="h-4 w-4 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
