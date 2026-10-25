"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { gsap } from "@/lib/gsap";

// ---------------------------------------------------------------------------
// Immersive Capability Showcase
// ---------------------------------------------------------------------------
// A pinned, horizontally scrubbed showcase on desktop — one capability panel
// at a time fills the viewport while large parallax offsets sweep the
// neighboring panels and background orbs in and out of frame. Below 1024px
// the pin, the horizontal track, and the parallax are all replaced outright
// with a plain vertical stack that only ever nudges 28px on entry — never a
// scaled-down copy of the desktop timeline, because a scaled-down pin+scrub
// still inherits the two things that make pinned scrubbing unreliable on a
// phone: pinned-height math (which the dynamic address bar keeps
// invalidating) and continuous scroll-tied layout reads. Removing pin+scrub
// removes both, not just the distances.
//
// Mechanics are deliberately modeled on this codebase's own existing pinned
// section (RevenueSystem, src/components/sections/revenue-system.tsx): ONE
// scrubbed tween drives the pin and the horizontal track position, and that
// same tween's `onUpdate` drives every other scroll-reactive value (card
// parallax, orb drift) via `quickSetter`s instead of separate competing
// ScrollTrigger instances on the same trigger element.
//
// Division of responsibility (so GSAP and Motion never touch the same
// transform on the same element):
//   - GSAP  -> the OUTER panel's scroll-driven x/y/scale (ambient motion,
//              driven by ScrollTrigger progress, never by user input).
//   - Motion -> the INNER card's hover/tap micro-interaction scale+tilt
//              (driven by pointer/touch input, never by scroll).
// Because these are two different DOM nodes (outer panel vs inner card),
// their `transform` outputs compose instead of one engine clobbering the
// other's writes.
// ---------------------------------------------------------------------------

type Capability = {
  id: string;
  tag: string;
  title: string;
  body: string;
};

const CAPABILITIES: Capability[] = [
  {
    id: "discover",
    tag: "01 — Discover",
    title: "See the whole system, not one metric.",
    body: "We map demand, trust, conversion, delivery, and retention as one connected pipeline before touching a single tactic.",
  },
  {
    id: "diagnose",
    tag: "02 — Diagnose",
    title: "Find the constraint, not a symptom.",
    body: "Every business has a weakest link capping everything downstream of it — we isolate exactly where revenue is actually being lost.",
  },
  {
    id: "design",
    tag: "03 — Design",
    title: "Build the fix for your constraint.",
    body: "Solutions are scoped to the specific stage that's leaking, not a generic playbook applied everywhere at once.",
  },
  {
    id: "deliver",
    tag: "04 — Deliver",
    title: "Implement it, then measure it.",
    body: "We help put the change into practice and track its effect on the number that mattered in the first place.",
  },
];

const PANEL_COUNT = CAPABILITIES.length;

// Desktop parallax distances — broad, cinematic spatial movement. Deliberately
// large because the section is pinned: the viewport is the only thing on
// screen, so there's room for it without ever causing page-level overflow.
const DESKTOP_SWEEP_X = 140;
const DESKTOP_SWEEP_Y = 48;
const ORB_SWEEP = 180;

// Mobile entry nudge — bounded to the 20–40px range so a card already inside
// its own padded container can never visually clip or force horizontal
// overflow, regardless of how narrow the viewport is.
const MOBILE_NUDGE_Y = 28;

function useFinePointer() {
  // Hover should only ever be offered to devices that have a real hovering
  // pointer. Without this check, `whileHover` on a touch device applies (and
  // then never fully clears) on tap — the classic "sticky hover" bug, since
  // touchscreens have no pointer-leave event to tell Motion the hover ended.
  // Default false matches server output; flips after mount so SSR and the
  // first client render agree (avoids a hydration mismatch from reading
  // matchMedia during render) — same intentional two-pass pattern used by
  // CustomCursor elsewhere in this codebase.
  const [canHover, setCanHover] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- see above
    setCanHover(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setCanHover(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return canHover;
}

export function ImmersiveShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const orbARef = useRef<HTMLDivElement>(null);
  const orbBRef = useRef<HTMLDivElement>(null);
  const canHover = useFinePointer();

  // Mirrors RevenueSystem's own pattern: the pinned horizontal layout is a
  // genuinely different structure on desktop, not a CSS-only breakpoint, so
  // it's tracked as real state (measured on mount + resize) rather than left
  // for Tailwind's `lg:` classes to sort out at animation-setup time, which
  // is exactly the measurement race that left this pinned section's track
  // un-translated and its panels permanently clipped outside the viewport
  // during development of this component.
  const [isDesktop, setIsDesktop] = useState(false);
  const [panelWidth, setPanelWidth] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    function measure() {
      setPanelWidth(section!.clientWidth);
      setIsDesktop(window.innerWidth >= 1024);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const simpleLayout = !isDesktop;

  useEffect(() => {
    if (simpleLayout) return;
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const cards = cardRefs.current.filter((el): el is HTMLDivElement => !!el);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      gsap.set(cards, { x: 0, y: 0, opacity: 1, scale: 1 });
      gsap.set([orbARef.current, orbBRef.current], { x: 0, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const distance = () => track.scrollWidth - section.clientWidth;

      // quickSetters avoid a full gsap.set() property parse on every single
      // scroll tick — the one DOM write this component makes per frame per
      // element, same efficiency rationale as revenue-leak.tsx's SVG writes.
      const cardX = cards.map((c) => gsap.quickSetter(c, "x", "px"));
      const cardY = cards.map((c) => gsap.quickSetter(c, "y", "px"));
      const cardOpacity = cards.map((c) => gsap.quickSetter(c, "opacity"));
      const cardScale = cards.map((c) => gsap.quickSetter(c, "scale"));
      const orbAX = orbARef.current && gsap.quickSetter(orbARef.current, "x", "px");
      const orbAY = orbARef.current && gsap.quickSetter(orbARef.current, "y", "px");
      const orbBX = orbBRef.current && gsap.quickSetter(orbBRef.current, "x", "px");
      const orbBY = orbBRef.current && gsap.quickSetter(orbBRef.current, "y", "px");

      function applyProgress(progress: number) {
        const activeIndex = progress * (PANEL_COUNT - 1);
        cards.forEach((_, i) => {
          const delta = gsap.utils.clamp(-1, 1, i - activeIndex);
          cardX[i](delta * DESKTOP_SWEEP_X);
          cardY[i](Math.abs(delta) * DESKTOP_SWEEP_Y);
          cardOpacity[i](1 - Math.abs(delta) * 0.75);
          cardScale[i](1 - Math.abs(delta) * 0.08);
        });
        orbAX?.(-ORB_SWEEP + progress * ORB_SWEEP * 2);
        orbAY?.(-ORB_SWEEP / 2 + progress * ORB_SWEEP);
        orbBX?.(ORB_SWEEP - progress * ORB_SWEEP * 2);
        orbBY?.(ORB_SWEEP / 2 - progress * ORB_SWEEP);
      }

      applyProgress(0);

      // Single scrubbed tween owns both the pin and the horizontal track
      // position — the same shape RevenueSystem already uses successfully.
      // Every other reactive value above is driven from ITS `onUpdate`
      // rather than a second timeline on the same trigger, which is what
      // left the pin transform frozen at its end value during development.
      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => applyProgress(self.progress),
        },
      });
    }, section);

    return () => ctx.revert();
  }, [simpleLayout]);

  useEffect(() => {
    if (!simpleLayout) return;
    const cards = cardRefs.current.filter((el): el is HTMLDivElement => !!el);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      gsap.set(cards, { y: 0, opacity: 1 });
      return;
    }

    // --- Mobile: no pin, no scrub, bounded one-shot reveals -----------------
    // Each card gets its own lightweight ScrollTrigger: `once: true` means it
    // fires and detaches rather than recomputing progress on every scroll
    // tick, so a dynamic address-bar resize mid-scroll has nothing left to
    // recalculate against for cards already revealed.
    const ctx = gsap.context(() => {
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: MOBILE_NUDGE_Y, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 90%", once: true },
          },
        );
      });
    });

    return () => ctx.revert();
  }, [simpleLayout]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-ink py-24 text-paper sm:py-32"
      style={simpleLayout ? undefined : { height: "100svh" }}
    >
      {/* Parallax background layer — GSAP-driven only, never touched by Motion. */}
      <div
        ref={orbARef}
        aria-hidden="true"
        className="pointer-events-none absolute left-[10%] top-[20%] -z-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl will-change-transform"
      />
      <div
        ref={orbBRef}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[15%] right-[10%] -z-10 h-72 w-72 rounded-full bg-gold/15 blur-3xl will-change-transform"
      />

      {simpleLayout && (
        <div className="container-arktera">
          <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-accent">
            How It Works
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-[clamp(2.1rem,2.8vw+1rem,3.4rem)] leading-[1.08] tracking-tight text-balance">
            One system, four capabilities.
          </h2>
        </div>
      )}

      <div
        ref={trackRef}
        className={simpleLayout ? "mt-14 flex flex-col gap-6 px-6 sm:px-12" : "flex h-full w-max"}
      >
        {!simpleLayout && (
          <div
            className="flex h-full shrink-0 flex-col justify-center px-[7vw]"
            style={panelWidth ? { width: panelWidth } : undefined}
          >
            <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-accent">
              How It Works
            </p>
            <h2 className="mt-5 max-w-xl font-display text-[clamp(2.2rem,4vw+1rem,4.2rem)] leading-[1.05] tracking-tight text-balance">
              One system, four capabilities.
            </h2>
            <p className="mt-6 max-w-md text-[1rem] leading-relaxed text-paper/60">
              Scroll to move through how Arktera turns a revenue problem into a
              measured fix.
            </p>
          </div>
        )}

        {CAPABILITIES.map((item, i) => (
          <div
            key={item.id}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className={
              simpleLayout
                ? "transform-gpu"
                : "flex h-full shrink-0 transform-gpu flex-col justify-center px-[7vw] will-change-transform"
            }
            style={!simpleLayout && panelWidth ? { width: panelWidth } : undefined}
          >
            {/* Motion owns this element's transform exclusively — hover/tap
                only, never scroll. `canHover` gates `whileHover` so touch
                devices only ever get `whileTap`, with nothing left to get
                stuck mid-hover after the finger lifts. */}
            <motion.div
              data-cursor-hover
              className="transform-gpu rounded-3xl border border-paper/10 bg-surface p-8 sm:p-10"
              whileTap={{ scale: 0.97 }}
              {...(canHover
                ? { whileHover: { scale: 1.02, borderColor: "rgba(255,59,48,0.4)" } }
                : {})}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              <span className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-accent">
                {item.tag}
              </span>
              <h3 className="mt-4 font-display text-2xl leading-snug text-paper sm:text-3xl">
                {item.title}
              </h3>
              <p className="mt-3 max-w-sm text-[1rem] leading-relaxed text-paper/60">
                {item.body}
              </p>
            </motion.div>
          </div>
        ))}
      </div>

      {!simpleLayout && (
        <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center gap-2.5">
          {Array.from({ length: PANEL_COUNT }).map((_, i) => (
            <span key={i} className="h-1.5 w-1.5 rounded-full bg-paper/25" />
          ))}
        </div>
      )}
    </section>
  );
}
