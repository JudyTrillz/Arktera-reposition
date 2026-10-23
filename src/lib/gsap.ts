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
}

export { gsap, ScrollTrigger };
