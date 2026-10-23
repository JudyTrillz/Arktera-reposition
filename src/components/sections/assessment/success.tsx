"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

function CheckIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-14 w-14" aria-hidden="true">
      <circle cx="24" cy="24" r="22" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.4" />
      <path
        d="M15 24.5l6 6L33 18"
        stroke="var(--color-accent)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AssessmentSuccess() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      role="status"
      aria-live="polite"
      className="mx-auto max-w-xl rounded-[1.75rem] border border-ink/10 px-8 py-16 text-center sm:px-14 sm:py-20"
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <CheckIcon />
        </motion.div>
        <h2 className="mt-7 font-display text-[clamp(1.9rem,3vw+1rem,2.6rem)] leading-[1.1] tracking-tight text-ink text-balance">
          Assessment Submitted Successfully!
        </h2>
        <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-ink/60">
          Thank you for sharing your business information with Arktera. We&apos;ve
          received your assessment and will review your responses to better
          understand your goals, challenges, and current business performance.
        </p>
        <div className="mt-7 w-full rounded-2xl bg-ink/[0.03] p-6 text-left">
          <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-accent">
            What Happens Next?
          </p>
          <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink/65">
            You can expect a response from us within{" "}
            <strong className="font-semibold text-ink">one business day</strong>.
            We&apos;ll use your responses to prepare for a more focused
            conversation about your business and the areas that may need
            further attention.
          </p>
        </div>
        <p className="mt-6 text-[0.98rem] text-ink/60">
          We look forward to learning more about your business.
        </p>
        <div className="mt-8 border-t border-ink/10 pt-6">
          <p className="font-display text-lg text-ink">Arktera Systems</p>
          <p className="mt-1 text-[0.9rem] italic text-ink/50">
            The business comes first. The solution follows.
          </p>
        </div>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" tone="light" variant="outline">
            Return Home
          </Button>
          <Button href="/insights" tone="light" variant="outline">
            Explore Insights
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
