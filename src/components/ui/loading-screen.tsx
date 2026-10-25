"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { LogoMark } from "@/components/ui/logo-mark";

const SESSION_KEY = "arktera-intro-shown";

const EASE = [0.16, 1, 0.3, 1] as const;

// How long the spinner spins before it hands off to the logo, how long the
// logo then holds on its own before the tagline rises in under it, and how
// long that reveal takes — together these are the "entrance" the hold/exit
// timing below is measured against.
const SPINNER_MS = 850;
const LOGO_HOLD_MS = 750;
const TEXT_REVEAL_MS = 500;

// Keeps the splash up at least this long after its own entrance finishes,
// so the brand moment never flashes past before anyone can register it —
// but caps how long a slow page load can hold it, so a weak connection
// never leaves a visitor staring at a loader far longer than that moment
// is worth.
const MIN_HOLD_MS = 450;
const MAX_WAIT_MS = 1800;

type Phase = "spinner" | "logo" | "text";

function Spinner() {
  return (
    <span
      className="block h-12 w-12 animate-spin rounded-full border-[3px] border-paper/15 border-t-gold"
      aria-hidden="true"
    />
  );
}

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
  const [phase, setPhase] = useState<Phase>("spinner");

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

    let clearPhaseTimers: (() => void) | undefined;
    if (reduced) {
      // Skip straight to the settled state — no spin, no staged reveal.
      setPhase("text");
    } else {
      const toLogo = window.setTimeout(() => setPhase("logo"), SPINNER_MS);
      const toText = window.setTimeout(
        () => setPhase("text"),
        SPINNER_MS + LOGO_HOLD_MS,
      );
      clearPhaseTimers = () => {
        window.clearTimeout(toLogo);
        window.clearTimeout(toText);
      };
    }

    const entranceDuration = reduced ? 0 : SPINNER_MS + LOGO_HOLD_MS + TEXT_REVEAL_MS;
    const start = Date.now();

    function scheduleReveal() {
      const elapsed = Date.now() - start;
      const wait = Math.max(0, entranceDuration + MIN_HOLD_MS - elapsed);
      window.setTimeout(() => setExiting(true), wait);
    }

    let cleanupLoad: (() => void) | undefined;
    if (document.readyState === "complete") {
      scheduleReveal();
    } else {
      window.addEventListener("load", scheduleReveal, { once: true });
      const fallback = window.setTimeout(scheduleReveal, MAX_WAIT_MS);
      cleanupLoad = () => {
        window.removeEventListener("load", scheduleReveal);
        window.clearTimeout(fallback);
      };
    }

    return () => {
      clearPhaseTimers?.();
      cleanupLoad?.();
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
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-ink"
          aria-hidden="true"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            layout
            className="flex items-center justify-center"
            transition={{ duration: 0.45, ease: EASE }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {phase === "spinner" ? (
                <motion.div
                  key="spinner"
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.3, ease: EASE }}
                >
                  <Spinner />
                </motion.div>
              ) : (
                <motion.div
                  key="logo"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, ease: EASE }}
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
              )}
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={
              phase === "text"
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, y: 18, filter: "blur(8px)" }
            }
            transition={{ duration: 0.55, ease: EASE }}
            className="absolute bottom-14 font-sans text-[0.72rem] font-medium uppercase tracking-[0.3em] text-paper/50"
          >
            Revenue System for Service Businesses
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
