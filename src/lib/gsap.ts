"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  // Mobile browsers resize the viewport as their address bar shows/hides
  // mid-scroll. Without this, that resize makes ScrollTrigger recalculate
  // trigger positions at the wrong moment, which is the usual cause of
  // scroll-triggered animations never firing (or pinned sections glitching)
  // on real phones despite working fine in desktop testing.
  ScrollTrigger.config({ ignoreMobileResize: true });

  // Every ScrollTrigger start/end position is computed from each element's
  // on-screen position at the moment it's created. If that happens before
  // web fonts swap in or images finish loading — both slower on mobile —
  // the page is still shorter/shaped differently than its final layout, so
  // trigger points end up calculated against stale positions and some
  // reveals never fire where expected. One refresh once everything has
  // genuinely settled corrects every trigger on the page in one pass.
  const refreshAll = () => ScrollTrigger.refresh();
  if (document.readyState === "complete") {
    refreshAll();
  } else {
    window.addEventListener("load", refreshAll, { once: true });
  }
  if ("fonts" in document) {
    document.fonts.ready.then(refreshAll);
  }
}

export { gsap, ScrollTrigger };
