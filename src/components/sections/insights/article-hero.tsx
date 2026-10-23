"use client";

import { Constellation } from "@/components/canvas/constellation";
import { SplitHeadline } from "@/components/ui/split-headline";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import type { InsightArticle } from "@/lib/insights";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function ArticleHero({ article }: { article: InsightArticle }) {
  return (
    <section
      id="article-hero"
      className="relative isolate flex min-h-[58svh] flex-col justify-center overflow-clip bg-ink pt-20"
    >
      <Constellation className="absolute inset-0 -z-10 h-full w-full" density={0.00008} accentRatio={0.1} />
      <div className="grain -z-10" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background: "radial-gradient(50% 50% at 85% 15%, rgba(255,59,48,0.1), transparent 70%)",
        }}
      />

      <div className="container-arktera py-16">
        <Breadcrumbs
          items={[
            { label: "Insights", href: "/insights" },
            { label: article.category },
          ]}
        />

        <p className="mb-5 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-accent">
          {article.category}
        </p>

        <SplitHeadline
          as="h1"
          trigger="mount"
          text={article.title}
          className="max-w-4xl font-display text-[clamp(2rem,3.6vw+0.4rem,3.6rem)] leading-[1.08] tracking-tight text-paper text-balance"
        />

        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 font-sans text-[0.9rem] text-paper/50">
          <span>{formatDate(article.date)}</span>
          <span aria-hidden="true">&middot;</span>
          <span>{article.readTime}</span>
        </div>
      </div>
    </section>
  );
}
