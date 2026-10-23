"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { stageDetails, type StageDetail } from "@/lib/revenue-systems-detail";

function StageRow({
  stage,
  index,
  open,
  onToggle,
}: {
  stage: StageDetail;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <Reveal delay={index * 0.05} className="border-t border-paper/10 first:border-t-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        data-cursor-hover
        className="flex w-full items-center justify-between gap-6 py-7 text-left sm:py-8"
      >
        <span className="flex items-baseline gap-4 sm:gap-6">
          <span className="font-display text-sm text-accent sm:text-base">{stage.number}</span>
          <span className="font-display text-lg leading-snug text-paper sm:text-2xl">
            {stage.title}
          </span>
        </span>
        <span
          aria-hidden="true"
          className={`relative grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-colors duration-300 ${
            open ? "border-accent text-accent" : "border-paper/25 text-paper/50"
          }`}
        >
          <span
            className={`absolute h-px w-3.5 bg-current transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
          <span
            className={`absolute h-3.5 w-px bg-current transition-transform duration-300 ${
              open ? "rotate-90 scale-0" : ""
            }`}
          />
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-400 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="grid gap-8 pb-10 pl-0 sm:grid-cols-2 sm:pb-12 sm:pl-[3.5rem]">
            <div>
              <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-paper/45">
                What This Stage Should Achieve
              </p>
              <p className="mt-2.5 text-[0.96rem] leading-relaxed text-paper/70">
                {stage.achieve}
              </p>

              <p className="mt-6 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-paper/45">
                Commercial Impact
              </p>
              <p className="mt-2.5 text-[0.96rem] leading-relaxed text-paper/70">
                {stage.impact}
              </p>
            </div>
            <div>
              <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-paper/45">
                Where It Can Break Down
              </p>
              <ul className="mt-2.5 flex flex-col gap-2">
                {stage.breakdown.map((line) => (
                  <li key={line} className="flex gap-2.5 text-[0.96rem] leading-relaxed text-paper/70">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {line}
                  </li>
                ))}
              </ul>

              <p className="mt-6 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-paper/45">
                What May Need to Improve
              </p>
              <p className="mt-2.5 text-[0.96rem] leading-relaxed text-paper/70">
                {stage.improve}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function ExploreStages() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="explore-stages" className="bg-ink py-24 text-paper sm:py-32">
      <div className="container-arktera">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-accent">
            Explore the Six Stages
          </p>
          <h2 className="mt-5 font-display text-[clamp(2rem,2.6vw+1rem,3.2rem)] leading-[1.08] tracking-tight text-paper text-balance">
            Explore the six stages of your revenue system.
          </h2>
          <p className="mt-6 text-[1.02rem] leading-relaxed text-paper/60">
            Every stage has a distinct role in business performance.
            Select a stage to see where problems emerge, how they affect
            the rest of your business, and what may need to change.
          </p>
        </Reveal>

        <div className="mt-14 border-b border-paper/10 lg:mt-20">
          {stageDetails.map((stage, i) => (
            <StageRow
              key={stage.number}
              stage={stage}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <Reveal className="mx-auto mt-16 max-w-3xl lg:mt-20">
          <p className="text-[1.02rem] leading-relaxed text-paper/60">
            These examples illustrate where problems may emerge, not a
            diagnosis of your business. A weakness at one stage can affect
            other parts of the revenue system, and the same problem can
            affect businesses differently depending on their operating
            model, resources, and priorities.
          </p>
          <p className="mt-5 font-display text-xl text-paper">
            The objective is not to implement every possible improvement.
            It is to identify which changes address the problems that
            matter most.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
