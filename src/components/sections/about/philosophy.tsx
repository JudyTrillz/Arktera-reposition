"use client";

import { Constellation } from "@/components/canvas/constellation";
import { Reveal } from "@/components/ui/reveal";
import { SplitHeadline } from "@/components/ui/split-headline";

export function Philosophy() {
  return (
    <section id="philosophy" className="relative isolate overflow-clip bg-ink py-28 sm:py-36">
      <Constellation
        className="absolute inset-0 -z-10 h-full w-full"
        density={0.00007}
        accentRatio={0.08}
        interactive={false}
      />
      <div className="grain -z-10" aria-hidden="true" />

      <div className="container-arktera">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-accent">
            Our Philosophy
          </p>
          <SplitHeadline
            as="h2"
            text="The business comes first. The solution follows."
            className="mx-auto mt-6 font-display text-[clamp(2.4rem,4.4vw+1rem,4.8rem)] leading-[1.05] tracking-tight text-paper text-balance"
          />

          <Reveal delay={0.15} className="mx-auto mt-10 max-w-2xl space-y-5 text-[1.05rem] leading-relaxed text-paper/65">
            <p>
              Effective commercial improvement requires rigorous diagnosis,
              clear priorities, and decisions grounded in business
              realities.
            </p>
            <p>
              Every service business operates with distinct revenue goals,
              capacity constraints, and financial resources. A solution that
              addresses one business&apos;s bottleneck may be unnecessary or
              counterproductive in another. That&apos;s why we never assume
              your business needs more marketing, another technology tool,
              or a complete operational overhaul.
            </p>
            <p>
              We assess the factors affecting performance, evaluate their
              commercial impact using the available evidence, and determine
              where intervention is justified. We then design practical
              solutions around your business priorities, financial
              resources, implementation timeline, and capacity to execute.
            </p>
          </Reveal>

          <Reveal delay={0.25} className="mx-auto mt-12 max-w-2xl border-t border-paper/15 pt-10">
            <p className="font-display text-xl leading-snug text-paper text-balance sm:text-2xl">
              We don&apos;t shape your business around a service we want to
              sell. We engineer the solution around the problem that needs
              to be solved.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
