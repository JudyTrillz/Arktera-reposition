"use client";

import { useEffect, useRef, type RefObject } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { problemItems } from "@/lib/revenue-system";

type RevenueLeakDiagramProps = {
  rowsRef: RefObject<HTMLDivElement | null>;
};

const TOP = 14;
const BOTTOM = 386;
const COUNT = problemItems.length;

function nodeY(i: number) {
  return TOP + (i / (COUNT - 1)) * (BOTTOM - TOP);
}

// A vertical pipe standing in for the customer-to-revenue journey. Progress
// is a continuous value (0..COUNT-1) driven directly by scroll position via
// a scrubbed ScrollTrigger — the fill, the travelling pulse, and each leak's
// opacity are written straight to the DOM every scroll tick, so the story
// advances with the scroll itself rather than snapping between stops.
export function RevenueLeakDiagram({ rowsRef }: RevenueLeakDiagramProps) {
  const fillRef = useRef<SVGLineElement>(null);
  const pulseRef = useRef<SVGCircleElement>(null);
  const leakRefs = useRef<(SVGGElement | null)[]>([]);
  const overlayRefs = useRef<(SVGCircleElement | null)[]>([]);

  useEffect(() => {
    const rows = rowsRef.current;
    if (!rows) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function applyProgress(progress: number) {
      const y = TOP + (progress / (COUNT - 1)) * (BOTTOM - TOP);
      fillRef.current?.setAttribute("y2", String(y));
      pulseRef.current?.setAttribute("cy", String(y));

      for (let i = 0; i < COUNT; i++) {
        const closeness = Math.max(0, 1 - Math.abs(progress - i));
        const leak = leakRefs.current[i];
        if (leak) leak.style.opacity = String(closeness);
        const overlay = overlayRefs.current[i];
        if (overlay) overlay.style.opacity = String(closeness);
      }
    }

    if (reduced) {
      applyProgress(0);
      return;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: rows,
        start: "top center",
        end: "bottom center",
        scrub: 0.3,
        onUpdate: (self) => applyProgress(self.progress * (COUNT - 1)),
      });
    });

    return () => ctx.revert();
  }, [rowsRef]);

  return (
    <svg viewBox="0 0 120 400" className="h-full w-full" aria-hidden="true">
      <line
        x1="60"
        y1={TOP - 8}
        x2="60"
        y2={BOTTOM + 8}
        stroke="currentColor"
        className="text-ink/10"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        ref={fillRef}
        x1="60"
        y1={TOP - 8}
        x2="60"
        y2={TOP}
        stroke="var(--color-accent)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="5 4"
        opacity="0.35"
        className="animate-flow-dash"
      />
      <circle
        ref={pulseRef}
        cx="60"
        cy={TOP}
        r="2.6"
        fill="var(--color-accent)"
        className="drop-shadow-[0_0_5px_rgba(255,59,48,0.85)]"
      />

      {problemItems.map((item, i) => {
        const y = nodeY(i);
        return (
          <g key={item.question} transform={`translate(60 ${y})`}>
            <g
              ref={(el) => {
                leakRefs.current[i] = el;
              }}
              style={{ opacity: i === 0 ? 1 : 0 }}
            >
              <circle r="15" fill="var(--color-accent)" opacity="0.12" />
              <path
                d="M-7 -4 L-1 2 L-8 7"
                stroke="var(--color-accent)"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <circle cx="-5" cy="8" r="2.1" fill="var(--color-accent)" className="origin-center animate-drip-1" />
              <circle cx="-9" cy="8" r="1.5" fill="var(--color-accent)" className="origin-center animate-drip-2" />
              <circle cx="-2" cy="8" r="1.3" fill="var(--color-accent)" className="origin-center animate-drip-3" />
            </g>
            <circle r="6.5" strokeWidth="1.4" className="fill-paper stroke-ink/30" />
            <circle
              ref={(el) => {
                overlayRefs.current[i] = el;
              }}
              r="6.5"
              strokeWidth="1.4"
              className="fill-accent stroke-none"
              style={{ opacity: i === 0 ? 1 : 0 }}
            />
          </g>
        );
      })}
    </svg>
  );
}
