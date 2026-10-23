"use client";

import { useRef } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { ArrowIcon } from "@/components/ui/button";
import { InsightsGateway } from "@/components/illustrations/insights-gateway";

export function Insights() {
  const markRef = useRef<HTMLDivElement>(null);

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = markRef.current;
    if (!el) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.06;
    const y = (e.clientY - r.top - r.height / 2) * 0.06;
    el.style.transform = `translate(${x}px, ${y}px)`;
  }
  function onLeave() {
    if (markRef.current) markRef.current.style.transform = "translate(0,0)";
  }

  return (
    <section id="insights" className="bg-paper py-24 text-ink sm:py-32">
      <div className="container-arktera">
        <div
          className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10"
          onPointerMove={onMove}
          onPointerLeave={onLeave}
        >
          <Reveal>
            <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-accent">
              Insights
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.1rem,2.8vw+1rem,3.4rem)] leading-[1.08] tracking-tight text-ink text-balance">
              Better business decisions start with the right questions.
            </h2>
            <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-ink/60">
              Why are enquiries failing to turn into sales? Where exactly is
              your business losing revenue? And what should you fix before
              investing more in growth? We share practical analysis on
              revenue systems, conversion strategy, pricing, and operational
              efficiency to help you identify what&apos;s holding your
              business back, evaluate your options, and understand what to
              fix next.
            </p>
            <Link
              href="/insights"
              data-cursor-hover
              className="group mt-7 inline-flex items-center gap-1.5 font-sans text-[1.02rem] font-semibold text-ink"
            >
              Access Our Insights
              <ArrowIcon className="text-ink" />
            </Link>
          </Reveal>

          <Reveal delay={0.15} className="relative mx-auto flex w-full max-w-md items-center justify-center">
            <div
              ref={markRef}
              className="w-full transition-transform duration-200 ease-out"
            >
              <InsightsGateway />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
