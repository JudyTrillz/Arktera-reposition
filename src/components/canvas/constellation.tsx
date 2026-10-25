"use client";

import { useEffect, useRef } from "react";
import { debounce } from "@/lib/debounce";

type Props = {
  className?: string;
  density?: number;
  accentRatio?: number;
  interactive?: boolean;
};

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  accent: boolean;
};

export function Constellation({
  className,
  density = 0.00009,
  accentRatio = 0.12,
  interactive = true,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
    let nodes: Node[] = [];
    let mouse = { x: -9999, y: -9999 };
    let raf = 0;
    let visible = true;
    let lastTs: number | null = null;

    function resize() {
      const rect = container!.getBoundingClientRect();
      const prevW = W;
      W = rect.width;
      H = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.round(W * dpr);
      canvas!.height = Math.round(H * dpr);
      canvas!.style.width = W + "px";
      canvas!.style.height = H + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Mobile browsers resize the viewport height (not width) as their
      // address bar shows/hides mid-scroll. Regenerating every node from
      // scratch on that resize made the whole field visibly jump/reset for
      // no layout reason — only regenerate when the width actually changed
      // (or on first run); otherwise just keep the existing nodes and clamp
      // them into the new height.
      if (prevW === 0 || Math.round(prevW) !== Math.round(W)) {
        const count = Math.round(W * H * density);
        nodes = Array.from({ length: count }, () => ({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
          r: Math.random() * 1.4 + 0.6,
          accent: Math.random() < accentRatio,
        }));
      } else {
        for (const n of nodes) {
          n.y = Math.min(n.y, H);
        }
      }
    }

    function step(ts: number) {
      // vx/vy are tuned per-frame at an assumed 60fps. Without this, a
      // device that can't sustain 60fps for this canvas (easily the case on
      // mid-range mobile GPUs, especially with everything else happening in
      // the hero) renders fewer of these increments per second and the
      // whole field visibly drifts slower — not because mobile was meant to
      // be slower, just because it's rendering fewer frames. Scaling by real
      // elapsed time keeps the field moving at its intended speed regardless
      // of achieved frame rate; at a true 60fps (desktop today) this factor
      // is ~1, so desktop's motion is unchanged. Clamped like
      // revenue-engine.tsx's canvas to avoid a large jump after the tab was
      // backgrounded.
      if (lastTs == null) lastTs = ts;
      const dt = Math.min(48, ts - lastTs);
      lastTs = ts;
      const dtScale = dt / (1000 / 60);

      ctx!.clearRect(0, 0, W, H);
      const linkDist = Math.min(150, Math.max(90, W * 0.09));

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        if (!reduced) {
          n.x += n.vx * dtScale;
          n.y += n.vy * dtScale;
          if (n.x < 0 || n.x > W) n.vx *= -1;
          if (n.y < 0 || n.y > H) n.vy *= -1;

          if (interactive) {
            const dx = mouse.x - n.x;
            const dy = mouse.y - n.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < 14000) {
              const f = (14000 - d2) / 14000;
              n.x -= dx * f * 0.012;
              n.y -= dy * f * 0.012;
            }
          }
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDist) {
            const o = (1 - dist / linkDist) * 0.22;
            ctx!.strokeStyle = `rgba(247,245,241,${o})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fillStyle = n.accent ? "rgba(255,59,48,0.85)" : "rgba(247,245,241,0.55)";
        ctx!.fill();
      }

      if (!reduced && visible) raf = requestAnimationFrame(step);
    }

    const onMove = (e: PointerEvent) => {
      const rect = canvas!.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => {
      mouse = { x: -9999, y: -9999 };
    };

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0].isIntersecting;
        if (visible && !reduced) {
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
    if (interactive) {
      window.addEventListener("pointermove", onMove);
      canvas.addEventListener("pointerleave", onLeave);
    }

    // `window.resize` only fires when the browser window itself changes
    // size, not when this container's own size changes for another reason
    // (a web font swapping in, an image above it finishing load). Those
    // reflows are slower and more common on mobile, and without this the
    // canvas — and its particle count, sized from W*H at resize time — can
    // stay wrong for the hero's actual final layout.
    const ro = new ResizeObserver(debouncedResize);
    ro.observe(container);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("resize", debouncedResize);
      if (interactive) {
        window.removeEventListener("pointermove", onMove);
        canvas.removeEventListener("pointerleave", onLeave);
      }
    };
  }, [density, accentRatio, interactive]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
