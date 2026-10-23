import Link from "next/link";
import clsx from "clsx";
import { Clock } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { InsightCard } from "@/components/ui/insight-card";
import { ArrowIcon } from "@/components/ui/button";
import { getFeaturedInsights, type InsightArticle } from "@/lib/insights";
import { CATEGORY_META } from "@/lib/insight-category-meta";

function FeaturedListItem({ article, index }: { article: InsightArticle; index: number }) {
  const meta = CATEGORY_META[article.category];
  return (
    <Link
      href={`/insights/${article.slug}`}
      data-cursor-hover
      className="group relative flex gap-5 overflow-hidden rounded-2xl border border-paper/10 bg-paper/[0.03] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-paper/20 hover:bg-paper/[0.05]"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 -right-2 select-none font-display text-[5rem] leading-none text-paper/[0.04] transition-colors duration-300 group-hover:text-paper/[0.07]"
      >
        {String(index).padStart(2, "0")}
      </span>

      <span
        className="relative mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border"
        style={{ borderColor: `${meta.color}4d`, color: meta.color }}
      >
        <meta.Icon className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
      </span>

      <div className="relative min-w-0 flex-1">
        <span className="font-sans text-[0.64rem] font-semibold uppercase tracking-[0.12em]" style={{ color: meta.color }}>
          {article.category}
        </span>
        <h3 className="mt-1.5 font-display text-[1.1rem] leading-[1.2] text-paper text-balance transition-colors group-hover:text-accent sm:text-[1.2rem]">
          {article.title}
        </h3>
        <p className="mt-2.5 text-[0.9rem] leading-relaxed text-paper/60">
          {article.excerpt}
        </p>

        <div className="relative mt-5 flex items-center justify-between gap-3 border-t border-paper/10 pt-4">
          <span className="flex items-center gap-1.5 font-sans text-[0.8rem] text-paper/45">
            <Clock className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
            {article.readTime}
          </span>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-paper/20 text-paper transition-colors duration-300 group-hover:border-accent group-hover:bg-accent">
            <ArrowIcon className="h-3.5 w-3.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function FeaturedInsights() {
  const [lead, ...rest] = getFeaturedInsights();
  if (!lead) return null;

  return (
    <section id="featured-insights" className="bg-ink py-24 text-paper sm:py-32">
      <div className="container-arktera">
        <Reveal className="max-w-2xl">
          <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-accent">
            Featured Insights
          </p>
          <h2 className="mt-5 font-display text-[clamp(2rem,2.6vw+1rem,3.2rem)] leading-[1.08] tracking-tight text-paper text-balance">
            Start here if you&apos;re not sure where the problem begins.
          </h2>
          <p className="mt-6 text-[1.02rem] leading-relaxed text-paper/60">
            A few pieces worth reading first. Together, they cover the
            questions business owners ask most often before deciding what
            to fix.
          </p>
        </Reveal>

        <div className={clsx("mt-14 grid gap-6 lg:mt-20", rest.length > 0 && "lg:grid-cols-[1.3fr_1fr]")}>
          <Reveal>
            <InsightCard article={lead} tone="ink" large featured index={0} className="h-full min-h-[26rem]" />
          </Reveal>

          {rest.length > 0 && (
            <div className="flex flex-col gap-6">
              {rest.map((article, i) => (
                <Reveal key={article.slug} delay={0.1 + i * 0.08} className="flex-1">
                  <FeaturedListItem article={article} index={i + 1} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
