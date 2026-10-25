"use client";

import { Constellation } from "@/components/canvas/constellation";
import { SplitHeadline } from "@/components/ui/split-headline";
import { Button, ArrowIcon } from "@/components/ui/button";
import { assessmentHref, scheduleAssessmentHref } from "@/lib/site-config";

const MARQUEE_ITEMS = [
  "Revenue Diagnostics",
  "Demand",
  "Trust",
  "Conversion",
  "Delivery",
  "Retention",
  "Referral",
  "Find The Leak",
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] flex-col overflow-clip bg-ink pt-20"
    >
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

      <div className="container-arktera flex flex-1 flex-col justify-center py-16">
        <p className="mb-7 font-sans text-[0.8rem] font-medium uppercase tracking-[0.25em] text-paper/45">
          Revenue Systems for Service Businesses
        </p>

        <SplitHeadline
          as="h1"
          trigger="mount"
          text="Find What's Holding Back Your Revenue. Fix It. Grow Your Business."
          className="max-w-5xl font-display text-[clamp(2.4rem,5.4vw+0.4rem,5.6rem)] font-normal leading-[1.04] tracking-tight text-paper text-balance"
        />

        <p className="mt-8 max-w-xl text-[1.08rem] leading-relaxed text-paper/65 line-fade-in">
          Arktera Systems helps service businesses uncover and fix the
          problems stopping them from getting more customers, winning more
          sales, and growing revenue. We find the cause, design the
          solution, and help put it into action.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
          <Button href={assessmentHref} tone="dark" variant="solid">
            Get A Free Revenue Assessment
          </Button>
          <Button href={scheduleAssessmentHref} tone="dark" variant="outline">
            Schedule a Free Revenue Assessment
          </Button>
        </div>

        <a
          href="#problem"
          data-cursor-hover
          className="group mt-8 inline-flex w-fit items-center gap-1.5 font-sans text-[0.92rem] font-medium text-paper/60 transition-colors hover:text-paper"
        >
          See how Arktera works
          <ArrowIcon className="text-current" />
        </a>
      </div>

      <div className="relative overflow-hidden border-t border-paper/10 py-5">
        {/* Two identical copies back to back, sized by their own content
            (`w-max`) rather than a `width: 200%` of the parent split into
            two `width: 50%` halves. That nested-percentage version depends
            on two separate percentage resolutions lining up exactly right,
            which is fragile across mobile rendering engines — on at least
            one real device the two copies ended up overlapping at the same
            position instead of sitting side by side. `translateX(-50%)` in
            the keyframe still works the same way here: the CSS spec
            resolves a transform's percentage against the element's OWN
            rendered width, and since both copies are identical, half of
            this track's intrinsic width is always exactly one copy's
            width — so the loop is seamless without needing an explicit
            width on either level. */}
        <div className="flex w-max animate-marquee">
          {[0, 1].map((dup) => (
            <div key={dup} aria-hidden={dup === 1} className="flex shrink-0 items-center">
              {MARQUEE_ITEMS.map((item, i) => (
                <span
                  key={`${dup}-${i}`}
                  className="flex shrink-0 items-center gap-6 whitespace-nowrap px-6 font-display text-xl text-paper/35"
                >
                  {item}
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
