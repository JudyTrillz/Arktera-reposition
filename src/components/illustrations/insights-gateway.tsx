import { revenueStages } from "@/lib/revenue-system";

// Reuses the site's own six-stage questions — the same copy that drives the
// Revenue Systems page — so this graphic isn't inventing new talking
// points, just visualizing the ones Arktera already asks.
const STREAM = revenueStages.map((s) => ({ id: s.id, text: s.question, tag: s.name }));

// Every node shares one 36s loop and one identical keyframe definition
// (see .insight-node in globals.css), each occupying an equal, exclusive
// 6s slice of it via a negative delay spaced one slice apart. That's what
// keeps this a clean single-file ticker — exactly one question visible at
// a time — rather than several overlapping and blurring into each other.
const LOOP_SECONDS = 36;
const COUNT = STREAM.length;
const SLOT = LOOP_SECONDS / COUNT;

// A purely decorative, ambient motion graphic — pure CSS keyframe loop, no
// JS per frame. The real content (the same questions, in prose) sits beside
// it, so this is hidden from assistive tech.
export function InsightsGateway() {
  return (
    <div
      aria-hidden="true"
      className="relative isolate h-[26rem] w-full overflow-hidden rounded-[2rem] border border-paper/10 bg-ink sm:h-[30rem]"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 45% at 50% 50%, rgba(255,59,48,0.08), transparent 75%)",
        }}
      />

      {/* faint vertical guide the questions travel along */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-paper/10 to-transparent" />

      {/* the illuminated Analysis Line */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-1/2 h-px -translate-y-1/2"
        style={{
          background: "linear-gradient(90deg, transparent, var(--color-accent) 50%, transparent)",
          boxShadow: "0 0 16px 1px rgba(255,59,48,0.55)",
        }}
      />
      <p className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-accent/60 sm:left-8">
        Analysis Line
      </p>

      {/* edge fades so nodes dissolve rather than clip at top/bottom */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink to-transparent" />

      {STREAM.map((node, i) => {
        const timing = { animationDuration: `${LOOP_SECONDS}s`, animationDelay: `${-(i * SLOT)}s` };
        return (
          <div
            key={node.id}
            className="insight-node absolute left-1/2 top-1/2 w-[min(88%,23rem)] text-center"
            style={timing}
          >
            <p className="font-sans text-[1.3rem] font-medium leading-snug tracking-tight text-balance sm:text-[1.55rem]">
              {node.text}
            </p>
            <span
              className="insight-tag mt-3 inline-block font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-accent"
              style={timing}
            >
              [{node.tag}]
            </span>
          </div>
        );
      })}
    </div>
  );
}
