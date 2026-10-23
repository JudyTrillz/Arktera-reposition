"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { industryItems } from "@/lib/revenue-systems-detail";

export function IndustryAlignment() {
  const [active, setActive] = useState(0);
  const industry = industryItems[active];

  return (
    <section id="industry-alignment" className="bg-paper py-24 text-ink sm:py-32">
      <div className="container-arktera">
        <Reveal className="max-w-2xl">
          <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-accent">
            Industry Alignment
          </p>
          <h2 className="mt-5 font-display text-[clamp(2rem,2.6vw+1rem,3.2rem)] leading-[1.08] tracking-tight text-ink text-balance">
            Different industries. Different revenue challenges.
          </h2>
          <p className="mt-6 text-[1.02rem] leading-relaxed text-ink/60">
            The challenges that limit business performance vary by
            industry, business model, and stage of growth.
          </p>
          <p className="mt-2 font-sans text-lg font-semibold text-ink">
            The framework stays consistent. The solutions do not.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-16 grid gap-2 overflow-hidden rounded-[1.5rem] border border-ink/10 lg:mt-20 lg:grid-cols-[0.75fr_1.25fr] lg:gap-0">
          <nav aria-label="Industries" className="flex flex-col divide-y divide-ink/10 lg:border-r lg:border-ink/10">
            {industryItems.map((item, i) => {
              const isActive = i === active;
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  data-cursor-hover
                  className={`group flex items-center justify-between gap-4 px-6 py-7 text-left transition-colors duration-300 sm:px-8 ${
                    isActive ? "bg-ink" : "hover:bg-ink/5"
                  }`}
                >
                  <span
                    className={`font-display text-lg leading-snug sm:text-xl ${
                      isActive ? "text-paper" : "text-ink"
                    }`}
                  >
                    {item.name}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 font-display text-sm transition-colors ${
                      isActive ? "text-accent" : "text-ink/25 group-hover:text-ink/50"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </nav>

          <div className="p-8 sm:p-12">
            <p className="font-display text-xl leading-snug text-ink sm:text-2xl">
              {industry.title}
            </p>

            <p className="mt-6 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-accent">
              The Common Breakdown
            </p>
            <p className="mt-2.5 max-w-xl text-[0.98rem] leading-relaxed text-ink/60">
              {industry.breakdown}
            </p>

            <p className="mt-6 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-accent">
              What We Examine
            </p>
            <p className="mt-2.5 max-w-xl text-[0.98rem] leading-relaxed text-ink/60">
              {industry.examine}
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-16 max-w-3xl lg:mt-20">
          <p className="text-[1.02rem] leading-relaxed text-ink/60">
            These examples illustrate potential problem areas, not
            assumptions about your business. Arktera starts by
            understanding your commercial goals, operating realities, and
            current challenges.
          </p>
          <p className="mt-4 font-display text-xl text-ink">
            We then determine which areas require closer investigation and
            which changes are appropriate for your business, resources,
            and priorities.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
