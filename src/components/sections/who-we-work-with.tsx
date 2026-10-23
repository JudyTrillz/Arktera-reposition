"use client";

import { useRef } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Button, ArrowIcon } from "@/components/ui/button";
import { audienceItems } from "@/lib/revenue-system";
import { assessmentHref } from "@/lib/site-config";

const images = ["/images/healthcare.jpg", "/images/consulting.jpg", "/images/professional.jpg", "/images/contractors.jpg"];

export function WhoWeWorkWith() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollBy(dir: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : 400;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  }

  return (
    <section id="who-we-work-with" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="container-arktera">
        <Reveal className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-accent">
              Who We Work With
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.1rem,2.8vw+1rem,3.4rem)] leading-[1.08] tracking-tight text-paper text-balance">
              Built for service businesses ready to grow with greater
              predictability.
            </h2>
            <p className="mt-6 text-[1.02rem] leading-relaxed text-paper/60">
              Every service business has its own challenges, but many face
              the same underlying problems: attracting the right customers,
              converting enquiries into sales, protecting profit margins,
              and building lasting customer relationships.
            </p>
          </div>

          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous"
              data-cursor-hover
              className="grid h-11 w-11 place-items-center rounded-full border border-paper/20 text-paper transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowIcon className="rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next"
              data-cursor-hover
              className="grid h-11 w-11 place-items-center rounded-full border border-paper/20 text-paper transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowIcon />
            </button>
          </div>
        </Reveal>
      </div>

      <div
        ref={scrollerRef}
        className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 pl-[clamp(1.25rem,4vw,4rem)] pr-6 [scrollbar-width:none] lg:mt-20 [&::-webkit-scrollbar]:hidden"
      >
        {audienceItems.map((item, i) => (
          <div
            key={item.name}
            data-card
            className="group relative aspect-[4/5] w-[78vw] shrink-0 snap-start overflow-hidden rounded-[1.25rem] sm:w-[48vw] lg:w-[28vw]"
          >
            <div className="duotone absolute inset-0">
              <Image
                src={images[i]}
                alt={item.name}
                fill
                sizes="(min-width: 1024px) 28vw, (min-width: 640px) 48vw, 78vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 z-[3] p-7 sm:p-8">
              <span className="font-display text-sm text-accent-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 font-display text-xl leading-snug text-paper sm:text-2xl">
                {item.name}
              </p>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-paper/70">
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="container-arktera mt-14 flex flex-col items-center gap-6 border-t border-paper/10 pt-12 text-center lg:mt-16">
        <div>
          <p className="font-display text-xl text-paper sm:text-2xl">
            Different businesses. Different challenges. The right
            solutions.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-[0.98rem] leading-relaxed text-paper/55">
            We don&apos;t assume every business needs more marketing,
            another tool, or a complete operational overhaul. We start by
            understanding your business goals, examining where
            opportunities or profit may be slipping away, and identifying
            the changes most likely to address the underlying problem.
          </p>
        </div>
        <Button href={assessmentHref} tone="dark" variant="solid">
          Get a Free Assessment
        </Button>
      </div>
    </section>
  );
}
