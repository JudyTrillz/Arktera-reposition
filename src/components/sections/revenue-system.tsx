"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { revenueStages } from "@/lib/revenue-system";
import { Button } from "@/components/ui/button";
import { assessmentHref } from "@/lib/site-config";

const PANEL_COUNT = revenueStages.length + 2; // intro + 6 stages + closing

export function RevenueSystem() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  // Default matches server output; flips after mount so SSR and the first
  // client render agree (avoids a hydration mismatch from reading matchMedia
  // during render).
  const [reduced, setReduced] = useState(false);
  const [active, setActive] = useState(0);
  // `w-screen` (100vw) includes the scrollbar gutter on desktop browsers,
  // so a panel sized with it is wider than what's actually visible —
  // across eight panels that adds up to real horizontal overflow. Measuring
  // the section's own clientWidth (scrollbar excluded) keeps every panel
  // exactly as wide as the content area really is.
  const [panelWidth, setPanelWidth] = useState<number | null>(null);
  // Pin + horizontal-scrub is a desktop-only interaction: on real mobile
  // browsers the dynamic toolbar resizes the viewport mid-scroll, which
  // throws off the pin's distance math, and touch scroll doesn't drive a
  // scrubbed pin the way wheel scroll does. Below `lg` (matches the site's
  // other mobile/desktop breakpoint), fall back to the same simple
  // vertical-stack layout already used for prefers-reduced-motion.
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Intentional two-pass hydration: this value only exists on the client,
    // so it must be read after mount rather than during the lazy initial render.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- see above
      setReduced(true);
    }
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    function measure() {
      setPanelWidth(section!.clientWidth);
      setIsDesktop(window.innerWidth >= 1024);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const simpleLayout = reduced || !isDesktop;

  useEffect(() => {
    if (simpleLayout) return;
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const distance = () => track.scrollWidth - section.clientWidth;
      const st = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            setActive(Math.min(PANEL_COUNT - 1, Math.round(self.progress * (PANEL_COUNT - 1))));
          },
        },
      });
      return () => {
        st.scrollTrigger?.kill();
      };
    }, section);

    return () => ctx.revert();
  }, [simpleLayout]);

  const panelBase =
    "flex h-full shrink-0 flex-col justify-center px-[7vw] sm:px-[9vw]";

  return (
    <section
      ref={sectionRef}
      id="revenue-system"
      className="relative overflow-hidden bg-ink"
      style={simpleLayout ? undefined : { height: "100svh" }}
    >
      <div className="grain -z-10" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(55% 60% at 50% 50%, rgba(143,120,80,0.08), transparent 70%)",
        }}
      />

      <div
        ref={trackRef}
        className={
          simpleLayout
            ? "flex w-full flex-col"
            : "flex h-full w-max flex-row"
        }
      >
        {/* Panel 0 — intro */}
        <div
          className={simpleLayout ? "flex flex-col justify-center px-6 py-24 sm:px-12" : `${panelBase} w-screen`}
          style={simpleLayout || !panelWidth ? undefined : { width: panelWidth }}
        >
          <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-accent">
            The Arktera Revenue System
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-[clamp(2.2rem,4vw+1rem,4.2rem)] leading-[1.05] tracking-tight text-paper text-balance">
            Revenue is won or lost at six stages.
          </h2>
          <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-paper/65">
            Your business can lose revenue before a customer buys, while
            you&apos;re serving them, or after the sale. Each stage presents
            opportunities to win customers, protect profit, and build
            lasting relationships &mdash; a weakness in one area can limit
            the results of the entire business.
          </p>
          {!simpleLayout && (
            <p className="mt-10 font-sans text-sm font-medium uppercase tracking-[0.2em] text-paper/35">
              Scroll to explore the six stages &rarr;
            </p>
          )}
        </div>

        {/* Panels 1–6 — the six stages */}
        {revenueStages.map((stage, i) => (
          <div
            key={stage.id}
            className={simpleLayout ? "flex flex-col justify-center border-t border-paper/10 px-6 py-24 sm:px-12" : `${panelBase} w-screen`}
            style={simpleLayout || !panelWidth ? undefined : { width: panelWidth }}
          >
            <div className="flex items-start gap-6 sm:gap-10">
              <span className="font-display text-6xl leading-none text-paper/15 sm:text-8xl">
                {stage.number}
              </span>
              <div className="pt-2 sm:pt-4">
                <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-accent">
                  {stage.name}
                </p>
                <h3 className="mt-3 max-w-xl font-display text-[clamp(1.8rem,2.8vw+0.8rem,3.1rem)] leading-[1.1] text-paper text-balance">
                  {stage.question}
                </h3>
                <p className="mt-4 max-w-lg text-[1rem] leading-relaxed text-paper/65">
                  {stage.body}
                </p>
                <p className="mt-4 max-w-lg text-[0.92rem] leading-relaxed text-paper/40">
                  <span className="font-sans font-semibold text-paper/60">
                    Where revenue gets lost:{" "}
                  </span>
                  {stage.leak}
                </p>
              </div>
            </div>
            <span className="mt-10 font-display text-sm text-paper/30 sm:ml-[6.5rem]">
              {i + 1} / {revenueStages.length}
            </span>
          </div>
        ))}

        {/* Closing panel */}
        <div
          className={simpleLayout ? "flex flex-col justify-center border-t border-paper/10 px-6 py-24 text-center sm:px-12" : `${panelBase} w-screen items-center text-center`}
          style={simpleLayout || !panelWidth ? undefined : { width: panelWidth }}
        >
          <p className="mx-auto max-w-2xl font-display text-[clamp(1.9rem,3vw+1rem,3.2rem)] leading-[1.1] text-paper text-balance">
            Find out what&apos;s holding your business back.
          </p>
          <p className="mx-auto mt-5 max-w-xl text-[1rem] leading-relaxed text-paper/60">
            Our free assessment examines all six stages to help identify
            where your business may be losing opportunities, wasting
            resources, or missing room to grow.
          </p>
          <div className="mt-9">
            <Button href={assessmentHref} tone="dark" variant="solid">
              Get a Free Assessment
            </Button>
          </div>
        </div>
      </div>

      {!simpleLayout && (
        <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center gap-2.5">
          {Array.from({ length: PANEL_COUNT }).map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-accent" : "w-1.5 bg-paper/25"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
