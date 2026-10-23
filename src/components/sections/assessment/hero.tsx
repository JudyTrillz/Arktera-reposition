"use client";

import { Constellation } from "@/components/canvas/constellation";
import { SplitHeadline } from "@/components/ui/split-headline";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export function AssessmentHero() {
  return (
    <section
      id="assessment-hero"
      className="relative isolate flex min-h-[74svh] flex-col justify-center overflow-clip bg-ink pt-20"
    >
      <Constellation className="absolute inset-0 -z-10 h-full w-full" density={0.0001} accentRatio={0.14} />
      <div className="grain -z-10" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(55% 45% at 80% 15%, rgba(255,59,48,0.12), transparent 70%)",
        }}
      />

      <div className="container-arktera py-16">
        <Breadcrumbs items={[{ label: "Free Assessment" }]} />

        <p className="mb-7 font-sans text-[0.8rem] font-medium uppercase tracking-[0.25em] text-paper/45">
          Free Business Growth Assessment
        </p>

        <SplitHeadline
          as="h1"
          trigger="mount"
          text="Know What's Holding Your Business Back and Where to Focus Next."
          className="max-w-4xl font-display text-[clamp(2.2rem,4.4vw+0.4rem,4.4rem)] leading-[1.06] tracking-tight text-paper text-balance"
        />

        <div className="mt-8 max-w-2xl space-y-5 text-[1.05rem] leading-relaxed text-paper/65">
          <p>
            When revenue stalls, profit margins shrink, or potential clients
            fail to become paying clients, the obvious solution isn&apos;t
            always the right one.
          </p>
          <p>
            Arktera helps you examine your business performance, identify the
            challenges that may be limiting growth, and understand where to
            focus your attention before committing more time and money to a
            solution.
          </p>
          <p className="font-sans text-lg font-medium text-paper">
            Identify potential revenue leaks, uncover the business
            constraints that need closer attention, and determine where to
            focus your efforts to improve performance and protect
            profitability.
          </p>
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
          <a
            href="#assessment-form"
            data-cursor-hover
            className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-paper px-8 font-sans text-[0.95rem] font-medium text-ink transition-colors duration-300 ease-out hover:bg-accent hover:text-paper"
          >
            Start Your Free Business Growth Assessment
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </a>
          <a
            href="#what-to-expect"
            data-cursor-hover
            className="group inline-flex items-center gap-2 font-sans text-[0.95rem] font-medium text-paper/70 transition-colors hover:text-paper"
          >
            Not sure what information you&apos;ll need?
            <span className="inline-block transition-transform duration-300 group-hover:translate-y-1">&darr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
