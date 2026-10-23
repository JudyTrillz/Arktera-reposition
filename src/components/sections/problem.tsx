"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { RevenueLeakDiagram } from "@/components/illustrations/revenue-leak";
import { problemItems } from "@/lib/revenue-system";
import { assessmentHref } from "@/lib/site-config";

function FocusRow({
  item,
  index,
}: {
  item: (typeof problemItems)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // The blur+opacity "focus wave" is scrubbed to scroll position, which
    // means it recomputes a CSS filter on every scroll tick — expensive on
    // mobile GPUs, and not worth it on small screens where only one row is
    // ever in view anyway. Desktop keeps the full effect; mobile and
    // reduced-motion just show the row at full opacity with no filter.
    const mm = gsap.matchMedia();
    mm.add(
      {
        isDesktop: "(min-width: 1024px)",
        reduced: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { isDesktop, reduced } = context.conditions as {
          isDesktop: boolean;
          reduced: boolean;
        };

        if (reduced || !isDesktop) {
          gsap.set(el, { opacity: 1, filter: "none" });
          return;
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.3,
          },
        });
        tl.fromTo(
          el,
          { opacity: 0.3, filter: "blur(3px)" },
          { opacity: 1, filter: "blur(0px)", ease: "none", duration: 0.5 },
        ).to(el, { opacity: 0.3, filter: "blur(3px)", ease: "none", duration: 0.5 });

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-[3.5rem_1fr] items-start gap-x-6 gap-y-3 border-t border-ink/10 py-10 sm:grid-cols-[6rem_1fr] sm:gap-x-10 sm:py-14"
    >
      <span className="font-display text-4xl leading-none text-ink/25 sm:text-6xl">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="min-w-0">
        <span className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-accent">
          Stage {item.stageRef}
        </span>
        <p className="mt-2 max-w-2xl font-display text-[1.5rem] leading-[1.15] text-ink sm:text-[2.1rem]">
          {item.question}
        </p>
        <p className="mt-3 max-w-md text-[1.02rem] leading-relaxed text-ink/55">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export function Problem() {
  const rowsRef = useRef<HTMLDivElement>(null);

  return (
    <section id="problem" className="bg-paper py-24 text-ink sm:py-32">
      <div className="container-arktera">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-accent">
              The Problem
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.1rem,2.8vw+1rem,3.4rem)] leading-[1.08] tracking-tight text-ink text-balance">
              The problem you&apos;re fixing may not be the problem you have.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col justify-end">
            <p className="font-sans text-xl font-medium text-ink">
              More leads. More sales. More customers. More profit.
            </p>
            <p className="mt-3 max-w-lg text-[1.02rem] leading-relaxed text-ink/55">
              Every business wants better results. But when growth stalls,
              the obvious problem isn&apos;t always the real one.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-[7rem_1fr] lg:gap-6">
          <div className="hidden lg:sticky lg:top-32 lg:block lg:h-[24rem]">
            <RevenueLeakDiagram rowsRef={rowsRef} />
          </div>

          <div ref={rowsRef} className="border-b border-ink/10">
            {problemItems.map((item, i) => (
              <FocusRow key={item.question} item={item} index={i} />
            ))}
          </div>
        </div>

        <Reveal className="mt-14 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between lg:mt-16">
          <div>
            <p className="font-display text-2xl text-ink">
              Don&apos;t guess. Find the cause.
            </p>
            <p className="mt-2 max-w-md text-[0.98rem] leading-relaxed text-ink/55">
              Arktera identifies what&apos;s holding back your revenue and
              helps you fix the right problem.
            </p>
          </div>
          <Button href={assessmentHref} tone="light" variant="solid">
            Get a Free Assessment
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
