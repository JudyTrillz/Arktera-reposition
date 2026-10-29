import { Reveal } from "@/components/ui/reveal";

const ITEMS = [
  {
    number: "01",
    title: "What You'll Share",
    body: (
      <>
        Answer a few questions about your business, goals, challenges, and
        performance. It takes{" "}
        <strong className="font-semibold text-ink">5 to 10 minutes</strong>,
        and most questions are multiple choice. Estimates are fine, and
        sharing your monthly revenue is{" "}
        <strong className="font-semibold text-ink">optional</strong>.
      </>
    ),
  },
  {
    number: "02",
    title: "What Happens Next",
    body: (
      <>
        We&apos;ll confirm we&apos;ve received your answers within{" "}
        <strong className="font-semibold text-ink">1 business day</strong>.
        Within{" "}
        <strong className="font-semibold text-ink">3 business days</strong>,
        we&apos;ll send you a short written summary of what we found. If
        you&apos;d like to talk it through, you can book a call afterwards.
        There&apos;s{" "}
        <strong className="font-semibold text-ink">no obligation</strong>.
      </>
    ),
  },
  {
    number: "03",
    title: "What You'll Get",
    body: (
      <>
        A summary of the{" "}
        <strong className="font-semibold text-ink">one to three areas</strong>{" "}
        that may be limiting your revenue, the reasons based on your answers,
        and a suggested next step. It is based on the information you supply,
        so it shows where to look closer. It is{" "}
        <strong className="font-semibold text-ink">
          not a full audit or a confirmed diagnosis
        </strong>
        .
      </>
    ),
  },
];

export function WhatToExpect() {
  return (
    <section id="what-to-expect" className="bg-paper py-20 text-ink sm:py-28">
      <div className="container-arktera">
        <Reveal className="max-w-2xl">
          <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-accent">
            What to Expect
          </p>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,2.6vw+1rem,2.8rem)] leading-[1.08] tracking-tight text-ink text-balance">
            The Free Business Growth Assessment helps us understand your
            business before we recommend anything.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3 lg:mt-16">
          {ITEMS.map((item, i) => (
            <Reveal
              key={item.number}
              delay={i * 0.08}
              className="group relative isolate h-full overflow-hidden rounded-2xl border border-ink/10 bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ink/15 hover:shadow-[0_28px_56px_-28px_rgba(10,10,12,0.3)] sm:p-8"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 -top-4 select-none font-display text-[5.5rem] leading-none text-ink/[0.045] transition-colors duration-300 group-hover:text-ink/[0.08]"
              >
                {item.number}
              </span>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(55% 45% at 12% 0%, rgba(255,59,48,0.08), transparent 70%)",
                }}
              />
              <span className="relative font-display text-sm text-accent">
                {item.number}
              </span>
              <p className="relative mt-3 font-display text-lg text-ink">
                {item.title}
              </p>
              <p className="relative mt-2.5 text-[0.92rem] leading-relaxed text-ink/60">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 text-center">
          <p className="font-display text-xl text-ink">
            Ready? Complete the four stages below to get started.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
