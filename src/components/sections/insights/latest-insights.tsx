import { Reveal } from "@/components/ui/reveal";
import { InsightCard } from "@/components/ui/insight-card";
import { getLatestInsights } from "@/lib/insights";

export function LatestInsights() {
  const latest = getLatestInsights(3);

  return (
    <section id="latest-insights" className="bg-paper py-24 text-ink sm:py-32">
      <div className="container-arktera">
        <Reveal className="max-w-2xl">
          <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-accent">
            Latest Insights
          </p>
          <h2 className="mt-5 font-display text-[clamp(2rem,2.6vw+1rem,3.2rem)] leading-[1.08] tracking-tight text-ink text-balance">
            Our newest thinking on where performance breaks down.
          </h2>
          <p className="mt-6 text-[1.02rem] leading-relaxed text-ink/60">
            Fresh analysis on the constraints we see most often in service
            businesses, and what to examine before you spend, hire, or
            change anything else.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
          {latest.map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.08}>
              <InsightCard article={article} tone="paper" index={i} className="h-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
