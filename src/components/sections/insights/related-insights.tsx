import { Reveal } from "@/components/ui/reveal";
import { InsightCard } from "@/components/ui/insight-card";
import { insightArticles, type InsightArticle } from "@/lib/insights";

export function RelatedInsights({ current }: { current: InsightArticle }) {
  const sameCategory = insightArticles.filter(
    (a) => a.slug !== current.slug && a.category === current.category,
  );
  const others = insightArticles.filter(
    (a) => a.slug !== current.slug && a.category !== current.category,
  );
  const related = [...sameCategory, ...others].slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="bg-ink py-20 text-paper sm:py-28">
      <div className="container-arktera">
        <Reveal className="max-w-2xl">
          <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-accent">
            Keep Reading
          </p>
          <h2 className="mt-5 font-display text-[clamp(1.8rem,2.4vw+1rem,2.6rem)] leading-[1.1] tracking-tight text-paper text-balance">
            More insights on fixing what&apos;s holding back revenue.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.08}>
              <InsightCard article={article} tone="ink" index={i} className="h-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
