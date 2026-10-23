"use client";

import { Constellation } from "@/components/canvas/constellation";
import { SplitHeadline } from "@/components/ui/split-headline";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { assessmentHref } from "@/lib/site-config";

export function RevSysHero() {
  return (
    <section
      id="rev-sys-hero"
      className="relative isolate flex min-h-[90svh] flex-col justify-center overflow-clip bg-ink pt-20"
    >
      <Constellation className="absolute inset-0 -z-10 h-full w-full" density={0.0001} />
      <div className="grain -z-10" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(50% 45% at 85% 15%, rgba(255,59,48,0.12), transparent 70%)",
        }}
      />

      <div className="container-arktera py-16">
        <Breadcrumbs items={[{ label: "Revenue Systems" }]} />

        <p className="mb-7 font-sans text-[0.8rem] font-medium uppercase tracking-[0.25em] text-paper/45">
          The Arktera Revenue System
        </p>

        <SplitHeadline
          as="h1"
          trigger="mount"
          text="Build a Stronger System for Generating Revenue."
          className="max-w-4xl font-display text-[clamp(2.3rem,4.8vw+0.4rem,4.8rem)] leading-[1.06] tracking-tight text-paper text-balance"
        />

        <div className="mt-8 max-w-2xl space-y-5 text-[1.05rem] leading-relaxed text-paper/65">
          <p>
            Your business&apos;s results depend on more than marketing or
            sales alone. How you attract prospects, build trust, convert
            inquiries, deliver services, retain clients, and generate
            referrals all influence your commercial performance.
          </p>
          <p>
            Arktera helps you understand how these parts work together,
            identify what&apos;s holding your business back, and implement
            the changes needed to strengthen your revenue system.
          </p>
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
          <Button href={assessmentHref} tone="dark" variant="solid">
            Get Your Free Business Growth Assessment
          </Button>
          <a
            href="#six-stages"
            data-cursor-hover
            className="group inline-flex items-center gap-2 font-sans text-[0.95rem] font-medium text-paper/70 transition-colors hover:text-paper"
          >
            Explore the Six Stages
            <span className="inline-block transition-transform duration-300 group-hover:translate-y-1">
              &darr;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
