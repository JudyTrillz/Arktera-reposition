"use client";

import { motion } from "motion/react";
import clsx from "clsx";

export function SendIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={clsx("h-4 w-4 shrink-0", className)}
      aria-hidden="true">
      <path
        d="M21 3 3 10.5l7.5 3L13.5 21 21 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M10.5 13.5 21 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

// A faint "ghost" plane repeatedly loops just behind the solid one, phase-shifted,
// so the pair reads as a short comet trail — motion contained inside the icon's own
// footprint rather than flying off across the screen.
const flightKeyframes = { x: [-1, 11, -1], y: [1, -5, 1], rotate: [-6, 8, -6] };

function SendingIcon() {
  return (
    <span
      className="relative inline-flex h-4 w-4 shrink-0 items-center justify-center"
      aria-hidden="true">
      <motion.span
        className="absolute"
        animate={{ ...flightKeyframes, opacity: [0.12, 0.4, 0.12] }}
        transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut", delay: 0.22 }}>
        <SendIcon />
      </motion.span>
      <motion.span
        className="absolute"
        animate={{ ...flightKeyframes, opacity: [1, 1, 0] }}
        transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}>
        <SendIcon />
      </motion.span>
    </span>
  );
}

function SendingDots() {
  return (
    <span className="inline-flex items-center gap-0.5" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1 w-1 rounded-full bg-current"
          animate={{ opacity: [0.25, 1, 0.25], y: [0, -2, 0] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
        />
      ))}
    </span>
  );
}

/**
 * Drop-in children for a submit `<button>` (the button needs the `group`
 * class for the idle icon's hover slide to work). Swaps between a static
 * send icon and a small in-place "flying" animation with pulsing dots —
 * all contained within the button, no page-level overlay.
 */
export function SubmitButtonContent({
  submitting,
  idleLabel,
  submittingLabel,
}: {
  submitting: boolean;
  idleLabel: string;
  submittingLabel: string;
}) {
  if (submitting) {
    return (
      <>
        <SendingIcon />
        {submittingLabel}
        <SendingDots />
      </>
    );
  }

  return (
    <>
      {idleLabel}
      <SendIcon className="transition-transform duration-300 ease-out group-hover:translate-x-1" />
    </>
  );
}
