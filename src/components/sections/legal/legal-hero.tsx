"use client";

import { Constellation } from "@/components/canvas/constellation";
import { SplitHeadline } from "@/components/ui/split-headline";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { formatLegalDate } from "@/lib/legal";

type LegalHeroProps = {
  title: string;
  intro: string;
  updatedIso: string;
};

export function LegalHero({ title, intro, updatedIso }: LegalHeroProps) {
  return (
    <section className="relative isolate flex min-h-[50svh] flex-col justify-center overflow-clip bg-ink pt-20">
      <Constellation
        className="absolute inset-0 -z-10 h-full w-full"
        density={0.00007}
        accentRatio={0.1}
        interactive={false}
      />
      <div className="grain -z-10" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background: "radial-gradient(50% 50% at 85% 15%, rgba(255,59,48,0.1), transparent 70%)",
        }}
      />

      <div className="container-arktera py-16">
        <Breadcrumbs items={[{ label: title }]} />

        <p className="mb-5 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-accent">
          Legal
        </p>

        <SplitHeadline
          as="h1"
          trigger="mount"
          text={title}
          className="max-w-3xl font-display text-[clamp(2.2rem,3.6vw+0.4rem,3.8rem)] leading-[1.08] tracking-tight text-paper text-balance"
        />

        <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-paper/65">{intro}</p>

        <p className="mt-7 font-sans text-[0.9rem] text-paper/50">
          Last updated: {formatLegalDate(updatedIso)}
        </p>
      </div>
    </section>
  );
}
