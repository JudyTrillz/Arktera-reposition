"use client";

import { Constellation } from "@/components/canvas/constellation";
import { SplitHeadline } from "@/components/ui/split-headline";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export function InsightsHero() {
  return (
    <section
      id="insights-hero"
      className="relative isolate flex min-h-[80svh] flex-col justify-center overflow-clip bg-ink pt-20"
    >
      <Constellation className="absolute inset-0 -z-10 h-full w-full" density={0.0001} />
      <div className="grain -z-10" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(55% 45% at 85% 10%, rgba(255,59,48,0.12), transparent 70%)",
        }}
      />

      <div className="container-arktera py-16">
        <Breadcrumbs items={[{ label: "Insights" }]} />

        <p className="mb-7 font-sans text-[0.8rem] font-medium uppercase tracking-[0.25em] text-paper/45">
          Arktera Insights
        </p>

        <SplitHeadline
          as="h1"
          trigger="mount"
          text="Better Questions. Clearer Insights. Smarter Business Decisions."
          className="max-w-4xl font-display text-[clamp(2.2rem,4.6vw+0.4rem,4.6rem)] leading-[1.06] tracking-tight text-paper text-balance"
        />

        <div className="mt-8 max-w-2xl space-y-5 text-[1.05rem] leading-relaxed text-paper/65">
          <p>
            Explore practical analysis on revenue performance, customer
            conversion, profitability, and operational efficiency.
          </p>
          <p>
            Understand the constraints affecting business performance,
            examine their underlying causes, and discover where targeted
            improvements can make a meaningful commercial difference.
          </p>
        </div>

        <div className="mt-9">
          <a
            href="#latest-insights"
            data-cursor-hover
            className="group inline-flex items-center gap-2 font-sans text-[1.02rem] font-semibold text-paper transition-colors hover:text-accent"
          >
            Explore the Insights
            <span className="inline-block transition-transform duration-300 group-hover:translate-y-1">
              &darr;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
