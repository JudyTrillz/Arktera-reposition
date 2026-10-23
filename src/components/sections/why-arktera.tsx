"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { Reveal } from "@/components/ui/reveal";
import { SplitHeadline } from "@/components/ui/split-headline";
import { Button } from "@/components/ui/button";
import { whyItems } from "@/lib/revenue-system";
import { assessmentHref } from "@/lib/site-config";

export function WhyArktera() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: el.closest("section"),
            start: "top bottom",
            end: "bottom top",
            scrub: 0.3,
          },
        },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="why-arktera" className="relative isolate overflow-clip bg-ink py-28 sm:py-36">
      <div ref={imgRef} className="duotone absolute -top-24 -bottom-24 inset-x-0 -z-10">
        <Image
          src="/images/moody-desk.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority={false}
          loading="lazy"
        />
      </div>
      <div className="grain -z-10" aria-hidden="true" />

      <div className="container-arktera">
        <Reveal className="max-w-3xl">
          <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-accent">
            Why Arktera
          </p>
          <SplitHeadline
            as="h2"
            text="Your business is connected. Your revenue systems should be too."
            className="mt-5 font-display text-[clamp(2.2rem,3.4vw+1rem,3.8rem)] leading-[1.08] tracking-tight text-paper text-balance"
          />
          <p className="mt-7 max-w-xl text-[1.08rem] leading-relaxed text-paper/70">
            More marketing won&apos;t fix every revenue problem. If leads go
            unanswered, sales slip away, or operational problems eat into
            your profits, spending more to attract customers before finding
            the cause can make things worse.
          </p>
          <p className="mt-5 font-sans text-lg font-semibold text-paper">
            Arktera identifies what&apos;s holding you back before deciding
            what to fix.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-10 border-t border-paper/15 pt-12 sm:grid-cols-3 lg:mt-28">
          {whyItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <span className="font-display text-sm text-accent">
                {item.number}
              </span>
              <p className="mt-3 font-display text-xl text-paper">
                {item.title}
              </p>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-paper/60">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between lg:mt-20">
          <p className="max-w-lg font-display text-xl leading-snug text-paper text-balance sm:text-2xl">
            We don&apos;t start with what we want to sell you. We start with
            what your business actually needs to grow.
          </p>
          <Button href={assessmentHref} tone="dark" variant="solid">
            Get a Free Assessment
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
