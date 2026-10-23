import { Reveal } from "@/components/ui/reveal";

const STEPS = [
  {
    number: "01",
    name: "Assess",
    title: "Establish Where Your Business Stands.",
    body: "We clarify your immediate business goals, map your current customer journey, and review available performance data to establish a baseline for evaluating your business's results.",
  },
  {
    number: "02",
    name: "Diagnose",
    title: "Identify What Is Limiting Performance.",
    body: "We investigate the relevant business processes and underlying constraints to identify where opportunities may be lost, what is affecting performance, and where changes are justified.",
  },
  {
    number: "03",
    name: "Design",
    title: "Determine the Right Solution.",
    body: "We develop a practical plan around your business objectives, priorities, financial resources, and operational capacity to implement the required changes.",
  },
  {
    number: "04",
    name: "Build",
    title: "Turn the Plan into Action.",
    body: "We help implement the changes your business needs, whether that involves improving marketing and sales processes, strengthening customer follow-up, introducing automation, refining service delivery, or addressing other identified constraints.",
  },
  {
    number: "05",
    name: "Measure",
    title: "Evaluate Progress and Refine the Approach.",
    body: "We assess relevant performance indicators to understand what is improving, what remains unresolved, and where further adjustments may be needed to strengthen business performance and protect profitability.",
  },
];

export function OurApproach() {
  return (
    <section id="approach" className="bg-ink py-24 text-paper sm:py-32">
      <div className="container-arktera">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-accent">
            Our Approach: How We Work
          </p>
          <h2 className="mt-5 font-display text-[clamp(2rem,2.6vw+1rem,3.2rem)] leading-[1.08] tracking-tight text-paper text-balance">
            From assessment to measurable improvement.
          </h2>
          <p className="mt-6 text-[1.02rem] leading-relaxed text-paper/60">
            Achieving better business results starts with establishing
            where your business stands, identifying what is limiting
            performance, and determining what needs to change. Arktera
            follows a structured five-stage approach that connects your
            business goals to practical action &mdash; each stage builds on
            the preceding one.
          </p>
        </div>

        <div className="relative mt-20 lg:mt-28">
          <div
            aria-hidden="true"
            className="absolute left-5 top-2 bottom-2 w-px bg-paper/15 lg:left-1/2 lg:-translate-x-1/2"
          />
          <div className="flex flex-col gap-14 lg:gap-20">
            {STEPS.map((step, i) => {
              const alignRight = i % 2 === 1;
              return (
                <Reveal key={step.number} delay={i * 0.06} className="relative">
                  <div className="grid grid-cols-[2.5rem_1fr] gap-x-6 lg:grid-cols-[1fr_3rem_1fr] lg:gap-x-10">
                    <span
                      className={`relative z-10 col-start-1 row-start-1 grid h-10 w-10 place-items-center rounded-full border border-accent bg-ink font-sans text-xs font-bold text-accent lg:col-start-2 lg:mx-auto`}
                    >
                      {step.number}
                    </span>

                    <div
                      className={`col-start-2 row-start-1 ${
                        alignRight
                          ? "lg:col-start-1 lg:row-start-1 lg:text-right"
                          : "lg:col-start-3 lg:row-start-1 lg:text-left"
                      }`}
                    >
                      <p className="font-sans text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-accent">
                        {step.name}
                      </p>
                      <p className="mt-2 font-display text-xl leading-snug text-paper sm:text-2xl">
                        {step.title}
                      </p>
                      <p
                        className={`mt-2.5 max-w-md text-[0.96rem] leading-relaxed text-paper/60 ${
                          alignRight ? "lg:ml-auto" : "lg:mr-auto"
                        }`}
                      >
                        {step.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal className="mx-auto mt-16 max-w-2xl border-t border-paper/15 pt-12 text-center lg:mt-24">
          <p className="font-display text-xl leading-snug text-paper text-balance sm:text-2xl">
            Every stage serves a clear purpose. Every intervention is
            guided by your business goals.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
