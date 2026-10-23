"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { InsightCard } from "@/components/ui/insight-card";
import { insightArticles, insightCategories } from "@/lib/insights";

const ALL = "All Insights" as const;
type Filter = typeof ALL | (typeof insightCategories)[number];

export function ExploreInsights() {
  const [active, setActive] = useState<Filter>(ALL);
  const filtered =
    active === ALL
      ? insightArticles
      : insightArticles.filter((a) => a.category === active);

  return (
    <section id="explore-insights" className="bg-paper py-24 text-ink sm:py-32">
      <div className="container-arktera">
        <Reveal className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-accent">
              Explore All Insights
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,2.6vw+1rem,3.2rem)] leading-[1.08] tracking-tight text-ink text-balance">
              Browse by the problem you&apos;re trying to solve.
            </h2>
            <p className="mt-6 text-[1.02rem] leading-relaxed text-ink/60">
              Every article examines a specific constraint along the
              revenue system. Filter by category to find the analysis most
              relevant to what you&apos;re experiencing.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-3 lg:mt-14" role="group" aria-label="Filter insights by category">
          {[ALL, ...insightCategories].map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                aria-pressed={isActive}
                data-cursor-hover
                className={`rounded-full border px-5 py-2.5 font-sans text-[0.85rem] font-medium transition-colors duration-300 ${
                  isActive
                    ? "border-ink bg-ink text-paper"
                    : "border-ink/15 text-ink/60 hover:border-ink/40 hover:text-ink"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <p className="mt-6 font-sans text-[0.85rem] text-ink/40">
          Showing {filtered.length} of {insightArticles.length} insights
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article, i) => (
            <InsightCard key={article.slug} article={article} tone="paper" index={i} className="h-full" />
          ))}
        </div>
      </div>
    </section>
  );
}
