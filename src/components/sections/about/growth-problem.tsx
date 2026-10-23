import { Reveal } from "@/components/ui/reveal";

const SCENARIOS = [
  "If inquiries aren't converting into sales, generating more prospects may only increase the number of missed opportunities.",
  "If sales are growing but margins remain weak, winning more clients could place additional pressure on an inefficient operation.",
  "And if clients don't return, continually pursuing new business can become an expensive cycle.",
];

export function GrowthProblem() {
  return (
    <section id="growth-problem" className="bg-paper py-24 text-ink sm:py-32">
      <div className="container-arktera">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-accent">
              The Growth Problem
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,2.6vw+1rem,3.2rem)] leading-[1.08] tracking-tight text-ink text-balance">
              The wrong fix can cost you more than the original problem.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col justify-end gap-4">
            <p className="text-[1.02rem] leading-relaxed text-ink/60">
              When growth slows, the instinct is often to do more: increase
              marketing spend, try another tactic, or introduce another
              tool. But more activity doesn&apos;t necessarily produce
              better commercial results.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col gap-px overflow-hidden rounded-2xl bg-ink/10 lg:mt-20">
          {SCENARIOS.map((line, i) => (
            <Reveal
              key={line}
              delay={i * 0.1}
              className="flex gap-6 bg-paper px-6 py-8 sm:px-10 sm:py-10"
            >
              <span
                aria-hidden="true"
                className="mt-2 h-px w-8 shrink-0 self-start bg-accent sm:mt-3 sm:w-12"
              />
              <p className="max-w-2xl font-display text-[1.25rem] leading-[1.3] text-ink sm:text-[1.6rem]">
                {line}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 max-w-3xl lg:mt-20">
          <p className="font-sans text-xl font-semibold text-ink">
            The constraint may be in your offer, sales process, pricing,
            delivery, or retention.
          </p>
          <p className="mt-3 text-[1.02rem] leading-relaxed text-ink/60">
            Each requires a different response, and treating the wrong
            problem can waste resources without improving performance.
            Before committing more time, money, or effort, you need to
            identify the bottleneck limiting your business and determine
            what needs to change.
          </p>
          <p className="mt-6 font-display text-2xl text-ink">
            Growth starts with diagnosing the problem, not simply doing
            more.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
