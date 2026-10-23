"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";

type Spark = {
  id: number;
  originX: number;
  originY: number;
  dx: number;
  dy: number;
};

// Cadence of the launch loop — slow enough to read as individual sparks,
// fast enough that the stream feels continuous for the length of a request.
const SPAWN_INTERVAL_MS = 650;
const FLIGHT_DURATION_S = 0.9;

// Where the toast stack renders (see ToastProvider): centered near the top
// on narrow viewports, pinned top-right from `sm` up. Mirrored here so the
// arrow actually arrives where the toast is about to appear.
function getTarget() {
  const narrow = window.innerWidth < 640;
  return {
    x: narrow ? window.innerWidth / 2 : window.innerWidth - 56,
    y: 36,
  };
}

/**
 * Renders, via portal, a faint arrow that repeatedly launches from
 * `anchorRef` toward the toast corner and fades out mid-flight — a loading
 * cue for actions that end in a toast (form submits).
 */
export function SendFlyAnimation({
  active,
  anchorRef,
}: {
  active: boolean;
  anchorRef: RefObject<HTMLElement | null>;
}) {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    if (!active) return;

    function spawn() {
      const anchor = anchorRef.current?.getBoundingClientRect();
      if (!anchor) return;

      const originX = anchor.right - 18;
      const originY = anchor.top + anchor.height / 2 - 7;
      const target = getTarget();
      const id = ++idRef.current;

      setSparks((prev) => [
        ...prev,
        { id, originX, originY, dx: target.x - originX, dy: target.y - originY },
      ]);
      setTimeout(() => {
        setSparks((prev) => prev.filter((spark) => spark.id !== id));
      }, FLIGHT_DURATION_S * 1000 + 100);
    }

    const kickoff = setTimeout(spawn, 0);
    const interval = setInterval(spawn, SPAWN_INTERVAL_MS);
    return () => {
      clearTimeout(kickoff);
      clearInterval(interval);
    };
  }, [active, anchorRef]);

  if (sparks.length === 0 || typeof document === "undefined") return null;

  return createPortal(
    <div className="pointer-events-none fixed inset-0 z-[250]" aria-hidden="true">
      <AnimatePresence>
        {sparks.map((spark) => (
          <motion.svg
            key={spark.id}
            viewBox="0 0 16 16"
            fill="none"
            className="absolute left-0 top-0 h-4 w-4 text-accent"
            initial={{ x: spark.originX, y: spark.originY, opacity: 0, scale: 0.8, rotate: -6 }}
            animate={{
              x: [spark.originX, spark.originX + spark.dx * 0.4, spark.originX + spark.dx],
              y: [spark.originY, spark.originY + spark.dy * 0.6, spark.originY + spark.dy],
              opacity: [0, 0.75, 0],
              scale: [0.8, 0.95, 0.4],
              rotate: [-6, 4, 10],
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: FLIGHT_DURATION_S, ease: [0.3, 0, 0.55, 1] }}
          >
            <path
              d="M3 8h10M8.5 3.5 13 8l-4.5 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        ))}
      </AnimatePresence>
    </div>,
    document.body,
  );
}
