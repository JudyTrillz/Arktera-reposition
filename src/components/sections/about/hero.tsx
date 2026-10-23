"use client";

import { Constellation } from "@/components/canvas/constellation";
import { SplitHeadline } from "@/components/ui/split-headline";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export function AboutHero() {
  return (
    <section
      id="about-hero"
      className="relative isolate flex min-h-[86svh] flex-col justify-center overflow-clip bg-ink pt-20"
    >
      <Constellation className="absolute inset-0 -z-10 h-full w-full" density={0.0001} />
      <div className="grain -z-10" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(55% 45% at 15% 10%, rgba(255,59,48,0.1), transparent 70%)",
        }}
      />

      <div className="container-arktera py-16">
        <Breadcrumbs items={[{ label: "About" }]} />

        <p className="mb-7 font-sans text-[0.8rem] font-medium uppercase tracking-[0.25em] text-paper/45">
          About Arktera
        </p>

        <SplitHeadline
          as="h1"
          trigger="mount"
          text="Revenue Systems. Built Around Your Business Goals."
          className="max-w-4xl font-display text-[clamp(2.2rem,4.6vw+0.4rem,4.6rem)] leading-[1.06] tracking-tight text-paper text-balance"
        />

        <div className="mt-8 max-w-2xl space-y-5 text-[1.05rem] leading-relaxed text-paper/65">
          <p>
            Arktera Systems diagnoses the constraints holding back revenue
            and engineers practical solutions that strengthen commercial
            performance across service businesses.
          </p>
          <p>
            We go beyond isolated marketing tactics to connect demand
            generation, sales, service delivery, and customer retention into
            a more effective revenue system. The focus is clear: address the
            problems limiting performance, protect profitability, and build
            stronger foundations for growth.
          </p>
        </div>

        <div className="mt-9">
          <Button href="#approach" tone="dark" variant="solid">
            Explore Our Approach
          </Button>
        </div>
      </div>
    </section>
  );
}
