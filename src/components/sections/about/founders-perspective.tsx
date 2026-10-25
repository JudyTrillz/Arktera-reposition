import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export function FoundersPerspective() {
  return (
    <section
      id="founders-perspective"
      className="relative isolate overflow-clip bg-ink py-28 text-paper sm:py-36">
      <div className="grain -z-10" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(45% 50% at 50% 0%, rgba(255,59,48,0.08), transparent 70%)",
        }}
      />

      <div className="container-arktera">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-accent">
            Founder&apos;s Perspective
          </p>
          <h2 className="mt-5 font-display text-[clamp(2rem,2.8vw+1rem,3.2rem)] leading-[1.08] tracking-tight text-paper text-balance">
            A better way to solve business growth problems.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-y-16 lg:mt-20 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-x-16">
          {/* Portrait */}
          <Reveal className="lg:sticky lg:top-32">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-5 -z-10 rounded-[2.5rem] opacity-80 blur-2xl"
                style={{
                  background:
                    "radial-gradient(60% 60% at 55% 40%, rgba(255,59,48,0.25), transparent 72%)",
                }}
              />

              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-paper/15">
                <Image
                  src="/images/founder.png"
                  alt="Judy Odiakose, Founder of Arktera Systems"
                  fill
                  sizes="(min-width: 1024px) 38vw, 90vw"
                  className="object-cover"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                <p className="pointer-events-none absolute left-5 top-5 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-paper/70">
                  Founder
                </p>
              </div>

              {/* Credential card, overlapping the portrait's bottom edge */}
              <div className="relative z-10 mx-5 -mt-10 rounded-2xl border border-paper/15 bg-ink/85 px-5 py-4 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.6)] backdrop-blur-md sm:mx-6">
                <p className="font-display text-xl leading-none text-paper">
                  Judy Odiakose
                </p>
                <p className="mt-1.5 text-[0.82rem] text-paper/55">
                  Founder, Arktera Systems
                </p>
              </div>
            </div>
          </Reveal>

          {/* Quote */}
          <div>
            <Reveal delay={0.1} className="relative">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-1 -top-8 select-none font-display text-[6rem] leading-none text-accent/20 sm:-top-10 sm:text-[7.5rem]">
                &ldquo;
              </span>
              <div className="relative space-y-5 text-[1.05rem] leading-relaxed text-paper/70">
                <p>
                  I started Arktera Systems with a simple observation: businesses often
                  invest in websites, SEO, advertising, lead generation, and other
                  services separately, without fully understanding how those investments
                  work together to generate results.
                </p>
                <p>
                  The problem isn&apos;t necessarily the services themselves. It&apos;s
                  what happens when a business invests in a solution before understanding
                  what is actually holding it back.
                </p>
                <p>
                  A website may attract visitors without generating inquiries. Advertising
                  may bring in leads that never become customers. More inquiries may
                  create little additional value if the sales process is weak or follow-up
                  is inconsistent.
                </p>
                <p>
                  These problems cannot always be solved by adding another service. They
                  require a closer look at how the business attracts prospects, builds
                  trust, converts opportunities, and manages the customer relationship.
                </p>
                <p>
                  My work across copywriting, website and web application development, and
                  customer journey implementation has reinforced the importance of
                  connecting strategy with execution. I want Arktera systems to help
                  businesses look beyond individual activities, understand how their
                  systems work together, and make better decisions about what to improve.
                </p>
              </div>
            </Reveal>

            <Reveal
              delay={0.15}
              className="mt-10 rounded-2xl border border-paper/15 bg-paper/[0.04] px-6 py-6 sm:px-8 sm:py-7">
              <p className="font-display text-xl leading-snug text-paper text-balance sm:text-2xl">
                The goal is not to sell businesses more services. It is to help them
                understand what they need, why they need it, and how the right changes can
                improve business performance.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
