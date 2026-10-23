"use client";

import { useEffect, useRef, useState } from "react";
import {
  AlertTriangle,
  Handshake,
  Lightbulb,
  Megaphone,
  PartyPopper,
  PauseCircle,
  TrendingUp,
  Workflow,
} from "lucide-react";
import { debounce } from "@/lib/debounce";

// ---------------------------------------------------------------------------
// The interdependence math — the whole point of this illustration. Revenue
// is a product of the three levers, not an average, so one weak link caps
// everything downstream of it no matter how strong the others are.
// ---------------------------------------------------------------------------
const BREAK_THRESHOLD = 40; // below this, the engine visibly slows/cracks
const LOW = 40;
const HIGH = 70;

type Lever = "marketing" | "offer" | "sales";

type Insight = {
  key: string;
  tone: "warning" | "success" | "idle" | "neutral";
  title: string;
  body: string;
  Icon: typeof AlertTriangle;
};

function getInsight(marketing: number, offer: number, sales: number): Insight {
  const allHigh = marketing >= HIGH && offer >= HIGH && sales >= HIGH;
  const allLow = marketing < LOW && offer < LOW && sales < LOW;
  const leaking = marketing >= HIGH && (offer < LOW || sales < LOW);

  if (leaking) {
    return {
      key: "leak",
      tone: "warning",
      title: "Leak Detected",
      body: "You're spending to attract prospects, but a weak sales process or an unclear offer is losing them before they convert.",
      Icon: AlertTriangle,
    };
  }
  if (allHigh) {
    return {
      key: "synergy",
      tone: "success",
      title: "Synergy Achieved",
      body: "Your revenue engine is aligned end to end and scaling efficiently.",
      Icon: PartyPopper,
    };
  }
  if (allLow) {
    return {
      key: "idle",
      tone: "idle",
      title: "Idle Engine",
      body: "Increase your baseline marketing and clarity to trigger growth.",
      Icon: PauseCircle,
    };
  }
  return {
    key: "building",
    tone: "neutral",
    title: "Building Momentum",
    body: "Balance all three levers — a gain in one is capped by whichever is weakest.",
    Icon: TrendingUp,
  };
}

const LEVERS: { id: Lever; label: string; Icon: typeof Megaphone }[] = [
  { id: "marketing", label: "Marketing Output", Icon: Megaphone },
  { id: "offer", label: "Offer Clarity", Icon: Lightbulb },
  { id: "sales", label: "Sales Efficiency", Icon: Handshake },
];

// Gate colors pull from the approved brand palette only — no new colors —
// so the "neon" effect stays on-brand instead of inventing a new accent.
// Exported so other sections (e.g. the six-stage system below this
// illustration) can visually tie their own Demand/Trust/Conversion
// labels back to these exact Marketing/Offer/Sales colors.
export const GATE_COLOR: Record<Lever, string> = {
  marketing: "#ff3b30", // --color-accent
  offer: "#d4a95e", // --color-gold
  sales: "#ff8a7a", // --color-accent-soft
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  cleared: Lever[]; // which gates it has already passed
  dead: boolean;
  r: number;
};

type Flash = { x: number; y: number; life: number; color: string };

export function RevenueEngine() {
  const [marketing, setMarketing] = useState(82);
  const [offer, setOffer] = useState(28);
  const [sales, setSales] = useState(68);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const valuesRef = useRef({ marketing, offer, sales, output: 0 });
  const poolEnergyRef = useRef(0);

  const output = Math.round((marketing / 100) * (offer / 100) * (sales / 100) * 100);
  const bottleneck = Math.min(marketing, offer, sales);
  const insight = getInsight(marketing, offer, sales);

  useEffect(() => {
    // The rAF loop below reads this ref every frame instead of closing over
    // `output`/the slider state directly, so it always animates against the
    // current values without needing to restart the loop on every change.
    valuesRef.current = { marketing, offer, sales, output };
  }, [marketing, offer, sales, output]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const container = canvas.parentElement;
    if (!container) return;

    let W = 0;
    let H = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: Particle[] = [];
    let flashes: Flash[] = [];
    let raf = 0;
    let visible = true;
    let spawnAcc = 0;
    let lastTs: number | null = null;
    let dashOffset = 0;

    // Gate x-positions as a fraction of width, and which lever each one
    // gates. "marketing" isn't a pass-through gate (it controls the spawn
    // rate at the inlet) but we still mark it for the visual node + label.
    const gateX: Record<Lever, number> = { marketing: 0.08, offer: 0.42, sales: 0.76 };
    const inletX = -0.04; // spawn just off-canvas so particles visibly enter and cross the Marketing gate
    const poolX = 0.96;

    function resize() {
      const rect = container!.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.round(W * dpr);
      canvas!.height = Math.round(H * dpr);
      canvas!.style.width = `${W}px`;
      canvas!.style.height = `${H}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function drawGate(lever: Lever, value: number) {
      const x = W * gateX[lever];
      const cracked = value < BREAK_THRESHOLD;
      const color = GATE_COLOR[lever];
      const h = H * 0.56 * (0.35 + 0.65 * (value / 100));
      const y0 = H / 2 - h / 2;
      const y1 = H / 2 + h / 2;

      ctx!.save();
      ctx!.globalAlpha = cracked ? 0.35 : 0.9;
      ctx!.strokeStyle = color;
      ctx!.lineWidth = 3;
      ctx!.shadowColor = color;
      ctx!.shadowBlur = cracked ? 4 : 16;
      ctx!.lineCap = "round";
      ctx!.beginPath();
      if (cracked) {
        // A visibly broken gate: two short jagged segments with a gap.
        const mid = (y0 + y1) / 2;
        ctx!.moveTo(x, y0);
        ctx!.lineTo(x + 4, y0 + h * 0.3);
        ctx!.lineTo(x - 3, mid - h * 0.08);
        ctx!.moveTo(x - 3, mid + h * 0.08);
        ctx!.lineTo(x + 4, y1 - h * 0.3);
        ctx!.lineTo(x, y1);
      } else {
        ctx!.moveTo(x, y0);
        ctx!.lineTo(x, y1);
      }
      ctx!.stroke();
      ctx!.restore();
    }

    function drawPool(energy: number) {
      const x = W * poolX;
      const r = 10 + energy * 22;
      const grad = ctx!.createRadialGradient(x, H / 2, 0, x, H / 2, r);
      grad.addColorStop(0, `rgba(255,59,48,${0.55 + energy * 0.4})`);
      grad.addColorStop(1, "rgba(255,59,48,0)");
      ctx!.save();
      ctx!.fillStyle = grad;
      ctx!.beginPath();
      ctx!.arc(x, H / 2, r, 0, Math.PI * 2);
      ctx!.fill();
      ctx!.restore();
    }

    function drawFlash(f: Flash) {
      const radius = 4 + (1 - f.life) * 14;
      ctx!.save();
      ctx!.globalAlpha = f.life * 0.8;
      ctx!.strokeStyle = f.color;
      ctx!.lineWidth = 2;
      ctx!.beginPath();
      ctx!.arc(f.x, f.y, radius, 0, Math.PI * 2);
      ctx!.stroke();
      ctx!.restore();
    }

    function step(ts: number) {
      if (lastTs == null) lastTs = ts;
      const dt = Math.min(48, ts - lastTs);
      lastTs = ts;

      if (visible) {
        const v = valuesRef.current;
        const weakest = Math.min(v.marketing, v.offer, v.sales);
        const strained = weakest < BREAK_THRESHOLD;
        const speedMul = strained ? 0.4 : 1;

        ctx!.clearRect(0, 0, W, H);

        // Base rail — a moving dash pattern so the left-to-right direction
        // of the whole pipeline reads at a glance, even between particles.
        ctx!.save();
        ctx!.strokeStyle = "rgba(247,245,241,0.14)";
        ctx!.lineWidth = 1.5;
        if (!reduced) {
          dashOffset -= dt * 0.03 * speedMul;
          ctx!.setLineDash([5, 7]);
          ctx!.lineDashOffset = dashOffset;
        }
        ctx!.beginPath();
        ctx!.moveTo(0, H / 2);
        ctx!.lineTo(W * poolX, H / 2);
        ctx!.stroke();
        ctx!.restore();

        drawGate("marketing", v.marketing);
        drawGate("offer", v.offer);
        drawGate("sales", v.sales);

        if (!reduced) {
          poolEnergyRef.current +=
            ((v.output / 100) * speedMul - poolEnergyRef.current) * 0.04;
        }
        drawPool(reduced ? v.output / 100 : poolEnergyRef.current);

        if (!reduced) {
          // Spawn rate scales with Marketing — this is the only thing
          // Marketing controls: how many particles enter, not whether they
          // pass through it.
          const spawnRate = 0.003 + (v.marketing / 100) * 0.02;
          spawnAcc += dt * spawnRate;
          while (spawnAcc >= 1 && particles.length < 160) {
            spawnAcc -= 1;
            particles.push({
              x: W * inletX,
              y: H / 2 + (Math.random() - 0.5) * (H * 0.3),
              vx: (0.26 + Math.random() * 0.12) * speedMul,
              cleared: [],
              dead: false,
              r: 2 + Math.random() * 1.2,
            });
          }

          for (const p of particles) {
            p.x += p.vx * dt;
            p.y += Math.sin((p.x + p.y) * 0.02) * 0.04 * dt * speedMul;

            (["offer", "sales"] as const).forEach((lever) => {
              const gx = W * gateX[lever];
              if (!p.cleared.includes(lever) && p.x >= gx) {
                p.cleared.push(lever);
                const chance = v[lever] / 100;
                if (Math.random() > chance) {
                  p.dead = true;
                  flashes.push({
                    x: gx,
                    y: p.y,
                    life: 1,
                    color: "rgba(247,245,241,0.5)",
                  });
                } else {
                  flashes.push({ x: gx, y: p.y, life: 1, color: GATE_COLOR[lever] });
                }
              }
            });

            if (p.x >= W * poolX) p.dead = true;
          }
          particles = particles.filter((p) => !p.dead);

          flashes.forEach((f) => (f.life -= dt * 0.006));
          flashes = flashes.filter((f) => f.life > 0);

          for (const p of particles) {
            ctx!.save();
            ctx!.globalAlpha = 0.95;
            ctx!.fillStyle = GATE_COLOR.marketing;
            ctx!.shadowColor = GATE_COLOR.marketing;
            ctx!.shadowBlur = 9;
            ctx!.beginPath();
            ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx!.fill();
            ctx!.restore();
          }

          for (const f of flashes) drawFlash(f);
        }
      }

      // The loop keeps running even when motion is reduced — the frame
      // itself has no continuous motion in that case (dash scroll, particle
      // flow, and the pool's eased approach are all skipped above), but it
      // still needs to redraw whenever the sliders change the gate heights
      // and pool size; otherwise the canvas freezes on whatever values were
      // current the one time it last rendered.
      if (visible) raf = requestAnimationFrame(step);
    }

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
        if (visible) {
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(step);
        }
      },
      { threshold: 0 },
    );

    const debouncedResize = debounce(resize, 150);

    resize();
    step(performance.now());
    io.observe(container);
    window.addEventListener("resize", debouncedResize);

    // `window.resize` only fires when the browser window itself changes
    // size, not when this container's own size changes for another reason
    // (a web font swapping in, an image above it finishing load). Those
    // reflows are slower and more common on mobile, and without this the
    // canvas can stay sized for a layout that no longer matches.
    const ro = new ResizeObserver(debouncedResize);
    ro.observe(container);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("resize", debouncedResize);
    };
    // Slider values are read fresh from valuesRef every frame, so the loop
    // never needs to restart when they change.
  }, []);

  const toneClasses: Record<Insight["tone"], string> = {
    warning: "border-accent/40 bg-accent/10 text-paper",
    success: "border-accent/40 bg-accent/10 text-paper",
    idle: "border-paper/15 bg-paper/5 text-paper/70",
    neutral: "border-paper/15 bg-paper/5 text-paper/80",
  };

  return (
    <div className="relative isolate overflow-hidden rounded-[2rem] border border-paper/10 bg-ink p-6 sm:p-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 85% 20%, rgba(255,59,48,0.14), transparent 70%), radial-gradient(50% 40% at 10% 90%, rgba(212,169,94,0.1), transparent 70%)",
        }}
      />

      <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-accent">
        Interactive Revenue Engine
      </p>
      <p className="mt-2 max-w-xl text-[0.95rem] leading-relaxed text-paper/55">
        Move each lever and watch the engine respond — revenue is a product of all three,
        not an average of them.
      </p>

      <div className="mt-8 grid gap-10 lg:grid-cols-[0.95fr_1.3fr] lg:items-center lg:gap-12">
        <div className="flex flex-col gap-7">
          {LEVERS.map(({ id, label, Icon }) => {
            const value = id === "marketing" ? marketing : id === "offer" ? offer : sales;
            const setValue =
              id === "marketing" ? setMarketing : id === "offer" ? setOffer : setSales;
            const low = value < BREAK_THRESHOLD;
            return (
              <div key={id}>
                <div className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2 font-sans text-[0.85rem] font-semibold text-paper/85">
                    <Icon
                      className="h-4 w-4 shrink-0"
                      style={{ color: GATE_COLOR[id] }}
                      strokeWidth={2}
                    />
                    {label}
                  </span>
                  <span
                    className="font-display text-lg tabular-nums"
                    style={{ color: low ? "rgba(247,245,241,0.45)" : GATE_COLOR[id] }}>
                    {value}%
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={value}
                  onChange={(e) => setValue(Number(e.target.value))}
                  aria-label={label}
                  className="engine-slider mt-3 w-full"
                  style={{ "--thumb-color": GATE_COLOR[id] } as React.CSSProperties}
                />
              </div>
            );
          })}

          <div className="mt-2 border-t border-paper/10 pt-6">
            <div className="flex items-baseline justify-between">
              <span className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-paper/45">
                Revenue Output
              </span>
              <span className="font-display text-3xl text-accent">{output}%</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-paper/10">
              <div
                className="h-full rounded-full bg-accent transition-all duration-300 ease-out"
                style={{ width: `${output}%` }}
              />
            </div>
            <p className="mt-2 text-[0.78rem] text-paper/40">
              Capped by your weakest lever, currently {bottleneck}%.
            </p>
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-start gap-3 rounded-2xl border border-paper/15 bg-paper/[0.04] px-5 py-4">
            <Workflow className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={2} />
            <div>
              <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent">
                How to read this
              </p>
              <p className="mt-1.5 text-[0.92rem] leading-relaxed text-paper/70">
                Each dot is a prospect. It enters at{" "}
                <span className="font-semibold" style={{ color: GATE_COLOR.marketing }}>
                  Marketing
                </span>
                , then must clear the{" "}
                <span className="font-semibold" style={{ color: GATE_COLOR.offer }}>
                  Offer
                </span>{" "}
                and{" "}
                <span className="font-semibold" style={{ color: GATE_COLOR.sales }}>
                  Sales
                </span>{" "}
                gates to reach <span className="font-semibold text-accent">Revenue</span>.
                A gate glows when a prospect gets through and flashes grey when one is
                lost there.
              </p>
            </div>
          </div>
          <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-paper/10 bg-ink/60 sm:h-64">
            <canvas
              ref={canvasRef}
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-between px-[8%] font-sans text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-paper/35 sm:px-[6%]">
              <span>Marketing</span>
              <span>Offer</span>
              <span>Sales</span>
              <span className="text-accent/70">Revenue</span>
            </div>
          </div>

          <div
            key={insight.key}
            className={`caption-in mt-6 flex items-start gap-3 rounded-2xl border px-5 py-4 ${toneClasses[insight.tone]}`}>
            <insight.Icon
              className="mt-0.5 h-5 w-5 shrink-0 text-accent"
              strokeWidth={2}
            />
            <div>
              <p className="font-display text-base leading-snug">{insight.title}</p>
              <p className="mt-1 text-[0.88rem] leading-relaxed text-paper/60">
                {insight.body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
