"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { LogoMark } from "@/components/ui/logo-mark";

const SESSION_KEY = "arktera-intro-shown";
// Keeps the splash up at least this long after its own entrance finishes,
// so the brand moment never flashes past before anyone can register it —
// but caps how long a slow page load can hold it, so a weak connection
// never leaves a visitor staring at a loader far longer than that moment
// is worth.
const MIN_HOLD_MS = 450;
const MAX_WAIT_MS = 1800;

// useLayoutEffect on the server only logs a warning and does nothing — this
// swaps to the (harmless, non-blocking) useEffect there, while keeping the
// real synchronous, pre-paint useLayoutEffect on the client, which is what
// makes the sessionStorage check below able to skip the overlay for a
// returning-in-session visitor without it ever flashing on screen first.
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function LoadingScreen() {
  // Starts true so the very first paint — server-rendered, before any JS
  // has run — already shows the overlay for a genuine first-time visit
  // instead of a brief flash of the real page underneath. The layout
  // effect below then corrects this synchronously, before that first
  // paint, for anyone who's already seen it this session.
  const [shouldShow, setShouldShow] = useState(true);
  const [exiting, setExiting] = useState(false);

  useIsomorphicLayoutEffect(() => {
    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      // Private browsing / storage blocked — treat as first-time rather
      // than throw; worst case the splash can reappear on a later visit.
    }
    if (alreadyShown) setShouldShow(false);
  }, []);

  useEffect(() => {
    if (!shouldShow) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const entranceDuration = reduced ? 0 : 650;
    const start = Date.now();

    function scheduleReveal() {
      const elapsed = Date.now() - start;
      const wait = Math.max(0, entranceDuration + MIN_HOLD_MS - elapsed);
      window.setTimeout(() => setExiting(true), wait);
    }

    if (document.readyState === "complete") {
      scheduleReveal();
      return;
    }
    window.addEventListener("load", scheduleReveal, { once: true });
    const fallback = window.setTimeout(scheduleReveal, MAX_WAIT_MS);
    return () => {
      window.removeEventListener("load", scheduleReveal);
      window.clearTimeout(fallback);
    };
  }, [shouldShow]);

  function handleExitComplete() {
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // Same private-browsing fallback as above — nothing to persist to.
    }
  }

  if (!shouldShow) return null;

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-4 bg-ink"
          aria-hidden="true"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-3"
          >
            <LogoMark className="h-14 w-auto" />
            <div className="flex flex-col items-center leading-none">
              <span className="font-display text-2xl tracking-tight text-paper">
                Arktera
              </span>
              <span className="mt-1 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
                Systems
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
