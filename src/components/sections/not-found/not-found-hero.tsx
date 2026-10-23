"use client";

import Link from "next/link";
import { Constellation } from "@/components/canvas/constellation";
import { SplitHeadline } from "@/components/ui/split-headline";
import { Reveal } from "@/components/ui/reveal";
import { Button, ArrowIcon } from "@/components/ui/button";
import { RouteDiagram } from "@/components/sections/not-found/route-diagram";
import { assessmentHref } from "@/lib/site-config";

export function NotFoundHero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col items-center justify-center overflow-clip bg-ink pt-20 text-center">
      <Constellation className="absolute inset-0 -z-10 h-full w-full" density={0.00011} />
      <div className="grain -z-10" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 100%, rgba(10,10,12,0.9), transparent 70%), radial-gradient(45% 40% at 85% 0%, rgba(255,59,48,0.12), transparent 70%)",
        }}
      />

      <div className="container-arktera flex flex-col items-center py-16">
        <RouteDiagram className="h-28 w-full max-w-md sm:h-36 sm:max-w-lg" />

        <span
          data-text="404"
          className="glitch-404 -mt-2 font-display text-[clamp(5rem,16vw,10rem)] leading-none tracking-tight text-paper"
        >
          404
        </span>

        <SplitHeadline
          as="h1"
          trigger="mount"
          text="Looks Like This Page Took a Different Route."
          className="mt-6 max-w-2xl font-display text-[clamp(1.8rem,3.6vw+0.4rem,3rem)] leading-[1.1] tracking-tight text-paper text-balance"
        />

        <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-paper/65">
          The page you&apos;re looking for may have moved, been renamed, or
          no longer exists. Let&apos;s get you back to the right place.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
          <Button href={assessmentHref} tone="dark" variant="solid">
            Start Your Free Business Growth Assessment
          </Button>
          <Button href="/" tone="dark" variant="outline">
            Return to Homepage
          </Button>
        </div>

        <Reveal delay={0.2} className="mt-20 w-full max-w-lg border-t border-paper/10 pt-10">
          <p className="font-display text-xl tracking-tight text-paper">
            Still Looking for Something?
          </p>
          <p className="mx-auto mt-3 max-w-md text-[0.95rem] leading-relaxed text-paper/55">
            Explore Arktera&apos;s revenue systems, practical business
            insights, and strategies for identifying what&apos;s holding
            back your business growth.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <Link
              href="/revenue-systems"
              data-cursor-hover
              className="group inline-flex items-center gap-1.5 font-sans text-[0.92rem] font-medium text-paper/70 transition-colors hover:text-paper"
            >
              Explore Revenue Systems
              <ArrowIcon className="text-current" />
            </Link>
            <Link
              href="/insights"
              data-cursor-hover
              className="group inline-flex items-center gap-1.5 font-sans text-[0.92rem] font-medium text-paper/70 transition-colors hover:text-paper"
            >
              Browse Insights
              <ArrowIcon className="text-current" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
