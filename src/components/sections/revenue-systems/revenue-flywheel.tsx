"use client";

import { useState } from "react";
import {
  AlertTriangle,
  Handshake,
  Lightbulb,
  Megaphone,
  Package,
  Repeat,
  Share2,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { stageDetails } from "@/lib/revenue-systems-detail";

const COUNT = stageDetails.length;
const RADIUS = 40;
const TWO_PI = Math.PI * 2;

function angleFor(i: number) {
  return (i / COUNT) * TWO_PI - Math.PI / 2;
}

function pointAt(angle: number, radius: number) {
  return { x: 50 + radius * Math.cos(angle), y: 50 + radius * Math.sin(angle) };
}

// The short action verb for each stage — not already in stageDetails, which
// carries the fuller "title"/"achieve" copy used elsewhere on this page.
const ACTIONS = [
  "Attract Prospects",
  "Earn Trust",
  "Turn Opportunities into Sales",
  "Deliver Services",
  "Retain Clients",
  "Generate Referrals",
];

const ICONS = [Megaphone, Lightbulb, Handshake, Package, Repeat, Share2];

// A realistic, imperfect starting state — not all-healthy — so the
// bottleneck effect and all three status tiers are visible immediately.
const DEFAULT_HEALTH = [82, 68, 74, 45, 58, 28];

const HEALTHY_AT = 65;
const CRITICAL_BELOW = 35;

// Three tiers, three brand-approved colors only — no new hues. Healthy uses
// the softer rose so a healthy wheel doesn't read as "alarm red"; amber
// reuses the existing gold token; critical escalates to the full-strength
// accent red.
type Tier = "healthy" | "amber" | "critical";

function tierOf(value: number): Tier {
  if (value >= HEALTHY_AT) return "healthy";
  if (value >= CRITICAL_BELOW) return "amber";
  return "critical";
}

const TIER_COLOR: Record<Tier, string> = {
  healthy: "#ff8a7a", // --color-accent-soft
  amber: "#d4a95e", // --color-gold
  critical: "#ff3b30", // --color-accent
};

const TIER_LABEL: Record<Tier, string> = {
  healthy: "Healthy",
  amber: "Needs Attention",
  critical: "Critical",
};

export function RevenueFlywheel() {
  const [active, setActive] = useState(0);
  const [health, setHealth] = useState<number[]>(DEFAULT_HEALTH);

  const avg = health.reduce((a, b) => a + b, 0) / COUNT;
  const weakest = Math.min(...health);
  const weakestIndex = health.indexOf(weakest);
  // Bottleneck formula: the average effort across all six stages, scaled
  // down by how weak the single weakest stage is — a low score anywhere
  // drags the whole loop's output down with it, not just its own stage.
  const performance = Math.round(avg * (weakest / 100));

  const stage = stageDetails[active];
  const activeValue = health[active];
  const activeTier = tierOf(activeValue);
  const activeColor = TIER_COLOR[activeTier];

  // Slower lap as system performance drops — a healthy engine turns briskly
  // (~14s/lap), a badly bottlenecked one barely turns at all (~74s/lap).
  const spinSeconds = 14 + (100 - performance) * 0.6;
  const overallColor = TIER_COLOR[tierOf(performance)];

  function setActiveHealth(v: number) {
    setHealth((prev) => prev.map((h, i) => (i === active ? v : h)));
  }

  const circumference = TWO_PI * RADIUS;
  const segLen = circumference / COUNT;
  const gap = segLen * 0.16;
  const dash = segLen - gap;

  return (
    <section id="six-stages" className="relative isolate overflow-clip bg-ink py-24 text-paper sm:py-32">
      <div className="grain -z-10" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background: "radial-gradient(55% 55% at 50% 45%, rgba(143,120,80,0.07), transparent 70%)",
        }}
      />

      <div className="container-arktera">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          {/* LEFT — framework intro */}
          <Reveal>
            <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-accent">
              The Six Stages of the Arktera Revenue System
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,2.6vw+1rem,3.2rem)] leading-[1.08] tracking-tight text-paper text-balance">
              One connected system. Six areas to improve.
            </h2>
            <p className="mt-6 text-[1.02rem] leading-relaxed text-paper/60">
              A stronger revenue system starts with understanding how your
              business attracts prospects, earns their trust, converts
              opportunities, delivers services, retains clients, and
              generates referrals &mdash; each stage feeding into the next.
            </p>
            <p className="mt-5 text-[1.02rem] leading-relaxed text-paper/60">
              These stages are connected, not isolated. Improving one area
              can strengthen the others, while an unresolved weakness can
              limit the value of your wider efforts.
            </p>

            <div className="mt-8 rounded-2xl border border-paper/15 bg-paper/[0.04] px-6 py-5">
              <p className="font-display text-[1.3rem] leading-snug text-paper">
                The objective isn&apos;t to optimize every stage
                independently. It&apos;s to understand how they work
                together as one connected loop.
              </p>
            </div>
          </Reveal>

          {/* RIGHT — interactive flywheel */}
          <Reveal delay={0.15}>
            <div className="relative mx-auto aspect-square w-full max-w-[26rem]">
              {/* Orbiting marker — speed reflects overall system performance */}
              <div
                className="absolute inset-0"
                style={{ animation: `spin-flywheel ${spinSeconds}s linear infinite` }}
                aria-hidden="true"
              >
                <div
                  className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    top: `${50 - RADIUS}%`,
                    background: overallColor,
                    boxShadow: `0 0 14px 4px ${overallColor}99`,
                  }}
                />
              </div>

              {/* The ring — six arcs, one per stage, colored by health tier */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
                <circle cx="50" cy="50" r={RADIUS} fill="none" stroke="rgba(247,245,241,0.1)" strokeWidth="1" />
                {stageDetails.map((s, i) => {
                  const tier = tierOf(health[i]);
                  const isActive = i === active;
                  return (
                    <circle
                      key={s.number}
                      cx="50"
                      cy="50"
                      r={RADIUS}
                      fill="none"
                      stroke={TIER_COLOR[tier]}
                      strokeWidth={isActive ? 4.5 : 3}
                      strokeLinecap="round"
                      strokeDasharray={`${dash} ${circumference - dash}`}
                      strokeDashoffset={-(i * segLen + gap / 2)}
                      opacity={tier === "critical" ? 0.55 : isActive ? 1 : 0.7}
                      style={{ transition: "opacity 0.4s ease, stroke-width 0.3s ease" }}
                    />
                  );
                })}
              </svg>

              {/* Center display — updates to the selected stage's goal */}
              <div className="pointer-events-none absolute inset-0 grid place-items-center px-6">
                <div className="max-w-[10rem] text-center" aria-live="polite">
                  <p className="font-display text-sm text-accent sm:text-base">{stage.number}</p>
                  <p
                    key={stage.number}
                    className="caption-in mt-1 font-display text-lg leading-snug text-paper sm:text-xl"
                  >
                    {stage.tagline}
                  </p>
                  <p
                    key={`val-${stage.number}`}
                    className="caption-in mt-2 font-display text-2xl tabular-nums"
                    style={{ color: activeColor }}
                  >
                    {activeValue}%
                  </p>
                </div>
              </div>

              {/* Six clickable stage segments */}
              {stageDetails.map((s, i) => {
                const p = pointAt(angleFor(i), RADIUS);
                const isActive = i === active;
                const tier = tierOf(health[i]);
                const color = TIER_COLOR[tier];
                const Icon = ICONS[i];
                return (
                  <div
                    key={s.number}
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${p.x}%`, top: `${p.y}%` }}
                  >
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-pressed={isActive}
                      data-cursor-hover
                      className="relative flex w-16 flex-col items-center gap-0.5 rounded-xl border bg-ink/70 px-2 py-2 text-center backdrop-blur-sm transition-all duration-300 sm:w-20 sm:gap-1 sm:px-2.5 sm:py-2.5"
                      style={{
                        borderColor: isActive ? color : "rgba(247,245,241,0.15)",
                        boxShadow: isActive ? `0 0 0 5px ${color}1f, 0 0 22px -4px ${color}99` : "none",
                      }}
                    >
                      {tier === "critical" && (
                        <AlertTriangle
                          className="absolute -right-1.5 -top-1.5 h-3.5 w-3.5"
                          style={{ color: TIER_COLOR.critical }}
                          strokeWidth={2.5}
                          aria-hidden="true"
                        />
                      )}
                      <Icon
                        className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
                        style={{ color: isActive ? color : "rgba(247,245,241,0.45)" }}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                      <span
                        className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.06em] sm:text-[0.68rem]"
                        style={{ color: isActive ? "var(--color-paper)" : "rgba(247,245,241,0.6)" }}
                      >
                        {s.name}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Controls — active stage goal, health slider, system performance */}
            <div className="mt-8 rounded-2xl border border-paper/15 bg-paper/[0.04] px-6 py-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent">
                    {stage.number} &mdash; {stage.name}
                  </p>
                  <p className="mt-1 text-[0.95rem] font-semibold text-paper">{ACTIONS[active]}</p>
                  <p className="mt-1 max-w-sm text-[0.85rem] leading-relaxed text-paper/55">{stage.achieve}</p>
                </div>
                <span
                  className="shrink-0 rounded-full border px-2.5 py-1 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.1em]"
                  style={{ borderColor: `${activeColor}66`, color: activeColor }}
                >
                  {TIER_LABEL[activeTier]}
                </span>
              </div>

              <input
                type="range"
                min={0}
                max={100}
                value={activeValue}
                onChange={(e) => setActiveHealth(Number(e.target.value))}
                aria-label={`${stage.name} health`}
                className="engine-slider mt-5 w-full"
                style={{ "--thumb-color": activeColor } as React.CSSProperties}
              />

              <div className="mt-6 border-t border-paper/10 pt-5">
                <div className="flex items-baseline justify-between">
                  <span className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-paper/45">
                    System Performance
                  </span>
                  <span className="font-display text-2xl" style={{ color: overallColor }}>
                    {performance}%
                  </span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-paper/10">
                  <div
                    className="h-full rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${performance}%`, background: overallColor }}
                  />
                </div>
                <p className="mt-2 text-[0.78rem] text-paper/40">
                  Bottlenecked by {stageDetails[weakestIndex].name}, currently {weakest}%.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
