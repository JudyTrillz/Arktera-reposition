import { Reveal } from "@/components/ui/reveal";

const ITEMS = [
  {
    number: "01",
    title: "What You'll Share",
    body: "Answer questions about your business, growth objectives, current challenges, and performance. Estimates are fine where exact figures aren't available, and sharing your monthly revenue is optional.",
  },
  {
    number: "02",
    title: "What Happens Next",
    body: "We'll review your responses and use them to prepare for a more focused conversation about your business and the areas that may need attention. You'll get a response from us within 1 business day.",
  },
  {
    number: "03",
    title: "What You'll Get",
    body: "A clearer starting point for understanding your business challenges and deciding what deserves closer attention. A confirmed diagnosis or specific recommendations may require further discussion and investigation.",
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

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-3 lg:mt-16">
          {ITEMS.map((item, i) => (
            <Reveal key={item.number} delay={i * 0.08} className="bg-paper p-7 sm:p-8">
              <span className="font-display text-sm text-accent">{item.number}</span>
              <p className="mt-3 font-display text-lg text-ink">{item.title}</p>
              <p className="mt-2.5 text-[0.92rem] leading-relaxed text-ink/60">{item.body}</p>
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
