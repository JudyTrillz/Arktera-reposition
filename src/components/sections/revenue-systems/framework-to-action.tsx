"use client";

import { useRef } from "react";
import { Reveal } from "@/components/ui/reveal";
import { ArrowIcon } from "@/components/ui/button";
import { actionCases } from "@/lib/revenue-systems-detail";

export function FrameworkToAction() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollBy(dir: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : 400;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  }

  return (
    <section id="framework-to-action" className="bg-ink py-24 text-paper sm:py-32">
      <div className="container-arktera">
        <Reveal className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-accent">
              How the Framework Becomes Action
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,2.6vw+1rem,3.2rem)] leading-[1.08] tracking-tight text-paper text-balance">
              From revenue challenges to the right solutions.
            </h2>
            <p className="mt-6 text-[1.02rem] leading-relaxed text-paper/60">
              Depending on the problem, the work may involve marketing,
              copywriting, website development, sales processes, CRM
              systems, automation, or operational improvements.
            </p>
            <p className="mt-2 font-sans text-lg font-semibold text-paper">
              The business problem determines the solution, not the
              service we want to sell.
            </p>
          </div>

          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous case"
              data-cursor-hover
              className="grid h-11 w-11 place-items-center rounded-full border border-paper/20 text-paper transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowIcon className="rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next case"
              data-cursor-hover
              className="grid h-11 w-11 place-items-center rounded-full border border-paper/20 text-paper transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowIcon />
            </button>
          </div>
        </Reveal>

        <div
          ref={scrollerRef}
          className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 lg:mt-20 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {actionCases.map((c) => (
            <div
              key={c.caseNumber}
              data-card
              className="flex w-[85vw] shrink-0 snap-start flex-col rounded-[1.5rem] border border-paper/15 bg-paper/[0.03] p-8 sm:w-[30rem] sm:p-10"
            >
              <span className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-accent">
                Case {c.caseNumber}
              </span>
              <p className="mt-3 font-display text-xl leading-snug text-paper sm:text-2xl">
                {c.title}
              </p>

              <div className="mt-7 flex flex-col gap-6">
                <div>
                  <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-paper/40">
                    Where We Look
                  </p>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-paper/75">{c.where}</p>
                </div>
                <div>
                  <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-paper/40">
                    What We Investigate
                  </p>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-paper/65">
                    {c.investigate}
                  </p>
                </div>
                <div>
                  <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-paper/40">
                    What We May Implement
                  </p>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-paper/65">
                    {c.implement}
                  </p>
                </div>
                <div className="mt-auto border-t border-paper/10 pt-5">
                  <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-accent">
                    The Objective
                  </p>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-paper/80">
                    {c.objective}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Reveal className="mt-14 max-w-3xl lg:mt-16">
          <p className="text-[1.02rem] leading-relaxed text-paper/60">
            These examples illustrate how Arktera connects revenue-system
            analysis to practical interventions. They are not fixed
            packages or assumptions about what your business needs. A
            similar business problem can have different underlying causes
            &mdash; that&apos;s why we examine the relevant processes and
            evaluate the available evidence before determining which
            changes are justified.
          </p>
          <p className="mt-5 font-display text-xl text-paper">
            We don&apos;t begin with a predetermined service. We begin with
            the business problem and work towards the solution that makes
            sense.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
