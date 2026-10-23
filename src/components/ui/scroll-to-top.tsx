"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowIcon } from "@/components/ui/button";

// How far down the page before the button appears — roughly one viewport,
// so it shows up once there's somewhere meaningful to scroll back from.
const SHOW_AFTER_PX = 560;

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > SHOW_AFTER_PX);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleClick() {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  }

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-40 sm:bottom-8 sm:right-8">
      <AnimatePresence>
        {visible && (
          <motion.button
            type="button"
            onClick={handleClick}
            aria-label="Scroll to top"
            data-cursor-hover
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 bg-ink text-paper shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-colors hover:border-accent hover:text-accent"
          >
            <ArrowIcon className="-rotate-90" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
