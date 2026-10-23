"use client";

import { motion, useReducedMotion } from "motion/react";

// Decorative only: visualizes "took a different route" as an expected path
// that breaks off, and an alternate route that draws itself in toward a
// pulsing destination marker. Not a navigation control, so it stays
// aria-hidden — the real links live in the surrounding page content.
export function RouteDiagram({ className }: { className?: string }) {
  const reduced = useReducedMotion();

  return (
    <svg
      viewBox="0 0 480 200"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M16 108 H206"
        stroke="rgb(247 245 241 / 0.22)"
        strokeWidth="1.5"
        strokeDasharray="3 7"
        strokeLinecap="round"
      />
      <g stroke="rgb(247 245 241 / 0.4)" strokeWidth="1.5" strokeLinecap="round">
        <path d="M212 101 L222 115" />
        <path d="M222 101 L212 115" />
      </g>
      <motion.path
        d="M228 108 C 300 108 296 36 400 36"
        stroke="var(--color-accent)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={
          reduced
            ? { duration: 0 }
            : { duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }
        }
      />
      <motion.circle
        cx="400"
        cy="36"
        r="5"
        fill="var(--color-accent)"
        className="animate-pulse-soft"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={
          reduced ? { duration: 0 } : { duration: 0.5, delay: 1.9 }
        }
      />
    </svg>
  );
}
