"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function ResumeBanner({
  onDismiss,
  onStartOver,
}: {
  onDismiss: () => void;
  onStartOver: () => void;
}) {
  const [confirming, setConfirming] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        role="status"
        aria-live="polite"
        initial={{ opacity: 0, y: -12, height: 0 }}
        animate={{ opacity: 1, y: 0, height: "auto" }}
        exit={{ opacity: 0, y: -12, height: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8 overflow-hidden rounded-2xl border border-accent/25 bg-accent/[0.06] px-5 py-4 sm:px-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent" aria-hidden="true">
              <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
                <path d="M8 4v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="8" cy="8" r="6.3" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
            <p className="font-sans text-[0.92rem] text-ink">
              <strong className="font-semibold">Welcome back.</strong> We&apos;ve restored your progress so you can continue where you left off.
            </p>
          </div>

          {confirming ? (
            <div className="flex items-center gap-3">
              <span className="font-sans text-[0.85rem] text-ink/60">Start over?</span>
              <button
                type="button"
                onClick={onStartOver}
                data-cursor-hover
                className="font-sans text-[0.85rem] font-semibold text-accent hover:text-ink"
              >
                Yes, start over
              </button>
              <button
                type="button"
                onClick={() => setConfirming(false)}
                data-cursor-hover
                className="font-sans text-[0.85rem] font-medium text-ink/50 hover:text-ink"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setConfirming(true)}
                data-cursor-hover
                className="font-sans text-[0.85rem] font-medium text-ink/60 underline decoration-ink/25 underline-offset-4 hover:text-ink"
              >
                Start over instead
              </button>
              <button
                type="button"
                onClick={onDismiss}
                aria-label="Dismiss"
                data-cursor-hover
                className="text-ink/40 hover:text-ink"
              >
                &times;
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
