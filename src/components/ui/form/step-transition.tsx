"use client";

import type { ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";

const variants = {
  enter: (direction: 1 | -1) => ({
    opacity: 0,
    x: direction > 0 ? 28 : -28,
  }),
  center: { opacity: 1, x: 0 },
  exit: (direction: 1 | -1) => ({
    opacity: 0,
    x: direction > 0 ? -28 : 28,
  }),
};

type StepTransitionProps = {
  stepKey: string | number;
  direction: 1 | -1;
  children: ReactNode;
};

export function StepTransition({ stepKey, direction, children }: StepTransitionProps) {
  return (
    <AnimatePresence mode="wait" custom={direction} initial={false}>
      <motion.div
        key={stepKey}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
