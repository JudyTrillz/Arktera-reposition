"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { processSteps } from "@/lib/revenue-system";
import { assessmentHref } from "@/lib/site-config";

export function Approach() {
  const [active, setActive] = useState(0);
  const stepsRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const numberWrapRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);

  // The sticky number should always reflect whichever step currently sits
  // at its own vertical position, not a fixed viewport fraction — fixed
  // fractions desync as soon as a step's body copy runs longer or shorter
  // than its neighbors. So on every scroll tick we re-measure where the
  // number actually sits and pick the last step whose heading has reached
  // that line, which keeps old content on screen until it's genuinely been
  // overtaken rather than switching the instant the next block appears.
  useEffect(() => {
    const steps = stepsRef.current;
    if (!steps) return;

    function updateActive() {
      if (window.innerWidth < 1024) return;
      const anchor = numberWrapRef.current;
      const referenceY = anchor
        ? anchor.getBoundingClientRect().top + anchor.offsetHeight / 2
        : window.innerHeight * 0.4;

      let next = 0;
      for (let i = 0; i < stepRefs.current.length; i++) {
        const el = stepRefs.current[i];
        if (!el) continue;
        if (el.getBoundingClientRect().top <= referenceY) next = i;
      }
      setActive((prev) => (prev === next ? prev : next));
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: steps,
        start: "top bottom",
        end: "bottom top",
        onUpdate: updateActive,
        onRefresh: updateActive,
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const el = numberRef.current;
    const label = labelRef.current;
    if (!el || !label) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const targets = [el, label];
    gsap.killTweensOf(targets);
    gsap.fromTo(
      targets,
      { yPercent: 22, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 0.45, ease: "power3.out", stagger: 0.04 },
    );
  }, [active]);

  return (
    <section id="approach" className="bg-paper py-24 text-ink sm:py-32">
      <div className="container-arktera">
        <Reveal className="max-w-2xl">
          <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-accent">
            What Arktera Does
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.1rem,2.8vw+1rem,3.4rem)] leading-[1.08] tracking-tight text-ink text-balance">
            Find the problem. Fix what matters. Improve your results.
          </h2>
          <p className="mt-6 text-[1.02rem] leading-relaxed text-ink/60">
            Every service business wants to attract the right customers,
            convert more opportunities into sales, protect profit margins,
            and reduce wasted time and resources. Yet when commercial
            results fall short, another marketing tactic or technology
            investment may not address the underlying problem.
          </p>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-ink/60">
            Arktera assesses your current position, diagnoses the underlying
            problems, designs practical solutions, helps implement the
            necessary changes, and measures their impact on your business.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-10 lg:mt-28 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
          <div ref={numberWrapRef} className="hidden lg:sticky lg:top-32 lg:block lg:h-fit">
            <div className="overflow-hidden">
              <span
                ref={numberRef}
                className="block font-display text-[clamp(5.5rem,7vw,9rem)] leading-[0.85] text-ink/90"
              >
                {processSteps[active].number}
              </span>
            </div>
            <div className="mt-2 overflow-hidden">
              <p
                ref={labelRef}
                className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-accent"
              >
                {processSteps[active].name}
              </p>
            </div>
            <div className="mt-8 flex gap-1.5">
              {processSteps.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                    i <= active ? "bg-accent" : "bg-ink/10"
                  }`}
                />
              ))}
            </div>
          </div>

          <div ref={stepsRef} className="flex flex-col">
            {processSteps.map((step, i) => (
              <div
                key={step.number}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                id={step.name.toLowerCase()}
                className="border-t border-ink/10 py-12 first:border-t-0 sm:py-16"
              >
                <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-accent lg:hidden">
                  {step.number} &mdash; {step.name}
                </p>
                <p className="mt-2 font-display text-2xl leading-snug text-ink sm:text-3xl lg:mt-0">
                  {step.title}
                </p>
                <p className="mt-3 max-w-xl text-[1rem] leading-relaxed text-ink/60">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Reveal className="mt-16 flex flex-col items-center gap-6 border-t border-ink/10 pt-12 text-center lg:mt-20">
          <p className="max-w-2xl font-display text-xl leading-snug text-ink text-balance sm:text-2xl">
            Your business goals come first. The solution follows.
          </p>
          <Button href={assessmentHref} tone="light" variant="solid">
            Get a Free Assessment
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
