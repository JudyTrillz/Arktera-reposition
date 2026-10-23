"use client";

import type { ReactNode } from "react";
import { Constellation } from "@/components/canvas/constellation";
import { Reveal } from "@/components/ui/reveal";
import { SplitHeadline } from "@/components/ui/split-headline";
import { Button } from "@/components/ui/button";
import { assessmentHref } from "@/lib/site-config";

type FinalCtaProps = {
  headline?: string;
  body?: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
};

export function FinalCta({
  headline = "Ready to find what's holding your business back?",
  body = "You don't have to keep guessing why growth has stalled, where valuable opportunities are being lost, or what you should improve to get better results. Start with a clearer picture of your business, understand where improvements may create the greatest commercial value, and take the first step towards a more effective revenue system.",
  ctaLabel = "Get a Free Assessment",
  ctaHref = assessmentHref,
}: FinalCtaProps) {
  return (
    <section
      id="get-started"
      className="relative isolate overflow-clip bg-ink py-32 sm:py-44"
    >
      <Constellation
        className="absolute inset-0 -z-10 h-full w-full"
        density={0.00016}
        accentRatio={0.22}
      />
      <div className="grain -z-10" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(55% 60% at 50% 50%, rgba(255,59,48,0.1), transparent 70%)",
        }}
      />

      <div className="container-arktera">
        <div className="mx-auto max-w-3xl text-center">
          <SplitHeadline
            as="h2"
            text={headline}
            className="font-display text-[clamp(2.4rem,4vw+1rem,4.4rem)] leading-[1.05] tracking-tight text-paper text-balance"
          />
          <Reveal delay={0.15}>
            <p className="mx-auto mt-7 max-w-2xl text-[1.05rem] leading-relaxed text-paper/65">
              {body}
            </p>
            <div className="mt-10">
              <Button href={ctaHref} tone="dark" variant="solid">
                {ctaLabel}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
