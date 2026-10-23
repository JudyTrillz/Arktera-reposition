"use client";

import { Constellation } from "@/components/canvas/constellation";
import { SplitHeadline } from "@/components/ui/split-headline";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export function ContactHero() {
  return (
    <section
      id="contact-hero"
      className="relative isolate flex min-h-[52svh] flex-col justify-center overflow-clip bg-ink pt-20"
    >
      <Constellation
        className="absolute inset-0 -z-10 h-full w-full"
        density={0.00008}
        accentRatio={0.1}
      />
      <div className="grain -z-10" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(50% 50% at 20% 20%, rgba(255,59,48,0.1), transparent 70%)",
        }}
      />

      <div className="container-arktera py-16">
        <Breadcrumbs items={[{ label: "Contact" }]} />

        <SplitHeadline
          as="h1"
          trigger="mount"
          text="Let's Talk About Your Business."
          className="max-w-3xl font-display text-[clamp(2.1rem,4.2vw+0.4rem,4rem)] leading-[1.08] tracking-tight text-paper text-balance"
        />

        <div className="mt-8 max-w-2xl space-y-5 text-[1.05rem] leading-relaxed text-paper/65">
          <p>
            Have a question about Arktera, our approach, or how we work?
            Exploring a potential project or collaboration? Or trying to
            understand how we might help your business?
          </p>
          <p>We&apos;re happy to hear from you.</p>
          <p className="font-sans text-lg font-medium text-paper">
            Tell us what you&apos;d like to discuss, and we&apos;ll take it
            from there.
          </p>
        </div>
      </div>
    </section>
  );
}
