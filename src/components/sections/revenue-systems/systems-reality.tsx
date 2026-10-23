"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { systemsRealitySymptoms } from "@/lib/revenue-systems-detail";

function SymptomRow({
  item,
  index,
  open,
  onToggle,
}: {
  item: (typeof systemsRealitySymptoms)[number];
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <Reveal delay={index * 0.06} className="border-t border-ink/10 first:border-t-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        data-cursor-hover
        className="flex w-full items-center justify-between gap-6 py-7 text-left sm:py-8"
      >
        <span className="flex items-baseline gap-4 sm:gap-6">
          <span className="font-display text-sm text-accent sm:text-base">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-display text-xl leading-snug text-ink sm:text-2xl">
            {item.question}
          </span>
        </span>
        <span
          aria-hidden="true"
          className={`relative grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-colors duration-300 ${
            open ? "border-accent text-accent" : "border-ink/25 text-ink/50"
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
          <p className="max-w-xl pb-8 pl-[2.75rem] text-[1.02rem] leading-relaxed text-ink/60 sm:pb-9 sm:pl-[3.5rem]">
            {item.answer}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export function SystemsReality() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="systems-reality" className="bg-paper py-24 text-ink sm:py-32">
      <div className="container-arktera">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-accent">
              The Systems Reality
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,2.6vw+1rem,3.2rem)] leading-[1.08] tracking-tight text-ink text-balance">
              Better results require more than fixing one part of your
              business.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col justify-end gap-4 text-[1.02rem] leading-relaxed text-ink/60">
            <p>
              Your business doesn&apos;t generate revenue through one
              activity alone. More prospects won&apos;t help if they
              don&apos;t become sales. More sales won&apos;t improve your
              bottom line if delivery costs consume your margins.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-10 max-w-3xl font-sans text-xl font-semibold text-ink lg:mt-14">
          When one part of your business underperforms, the impact can
          extend far beyond that area.
        </Reveal>

        <Reveal delay={0.15} className="mt-16 lg:mt-20">
          <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-accent">
            Where Might Your Business Be Losing Opportunities?
          </p>
          <p className="mt-2 text-sm text-ink/45">
            Select a question to see where the answer may lie.
          </p>
        </Reveal>

        <div className="mt-6 border-b border-ink/10">
          {systemsRealitySymptoms.map((item, i) => (
            <SymptomRow
              key={item.question}
              item={item}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <Reveal className="mt-14 max-w-3xl lg:mt-16">
          <p className="text-[1.02rem] leading-relaxed text-ink/60">
            These are possible explanations, not diagnoses. The visible
            symptom doesn&apos;t always reveal the underlying cause.
          </p>
          <p className="mt-4 font-display text-xl text-ink">
            The goal is to find where the problem starts, understand what
            it affects, and determine what needs to change.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
