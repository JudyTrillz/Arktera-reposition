import { Reveal } from "@/components/ui/reveal";

const SECTORS = [
  {
    name: "Healthcare and Dental Clinics",
    body: "Improve the journey from initial inquiry to booked appointment, strengthen patient follow-up, and create more opportunities for patient retention.",
    icon: (
      <path
        d="M9 4c-2.5 0-4.5 2-4.5 4.8 0 3.6 2.4 6 2.4 9.4 0 1.6 1 2.3 1.9 2.3 1.1 0 1.6-.9 1.9-2.5l.6-3.3a1.7 1.7 0 0 1 3.4 0l.6 3.3c.3 1.6.8 2.5 1.9 2.5.9 0 1.9-.7 1.9-2.3 0-3.4 2.4-5.8 2.4-9.4C20.5 6 18.5 4 16 4c-1.3 0-2.2.5-3 1.3C12.2 4.5 11.3 4 9 4Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    name: "Consulting and Advisory Practices",
    body: "Attract qualified prospects, improve the conversion of sales conversations into engagements, and build a stronger foundation for winning suitable clients.",
    icon: (
      <path
        d="M7 16.5 4 19v-3.6A4 4 0 0 1 2.5 12v-4A3.5 3.5 0 0 1 6 4.5h8A3.5 3.5 0 0 1 17.5 8v1M9.5 19.5H17l3 2.5v-3.1a3.5 3.5 0 0 0 1.5-2.9v-3A3.5 3.5 0 0 0 18 9h-5a3.5 3.5 0 0 0-3.5 3.5v3.5a3.5 3.5 0 0 0 3.5 3.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    name: "Professional and B2B Services",
    body: "Communicate your firm's value more clearly, differentiate your services, attract better-fit clients, and strengthen your ability to charge fees that reflect the value you deliver.",
    icon: (
      <path
        d="M12 3v18M7 21h10M5 7l-3 6a3 3 0 0 0 6 0l-3-6Zm14 0-3 6a3 3 0 0 0 6 0l-3-6ZM5 7h14M12 3 8.5 7h7L12 3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    name: "Specialized Contractors and Commercial Service Providers",
    body: "Improve inquiry handling and follow-up, pursue better-fit projects and contracts, and identify opportunities to protect margins and generate repeat business.",
    icon: (
      <path
        d="m14.5 6.5 3-3a4 4 0 0 1 5 5l-3 3M9.5 17.5l-3 3a4 4 0 0 1-5-5l3-3m2-2 8 8M7 9l8 8M4.5 19.5l1-1M15.5 4.5l1-1m-9 9L4 16M16 8l3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
];

export function WhoWeAimToHelp() {
  return (
    <section id="who-we-aim-to-help" className="bg-paper py-24 text-ink sm:py-32">
      <div className="container-arktera">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-accent">
              Who We Aim to Help
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,2.6vw+1rem,3.2rem)] leading-[1.08] tracking-tight text-ink text-balance">
              Built for service businesses ready to improve performance.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col justify-end gap-4 text-[1.02rem] leading-relaxed text-ink/60">
            <p>
              Arktera works with service businesses that want to understand
              what&apos;s holding back their revenue, strengthen commercial
              performance, and make better decisions about where to invest
              their resources.
            </p>
            <p>
              Although service businesses operate differently, many face
              similar commercial challenges: attracting suitable prospects,
              converting opportunities into sales, protecting
              profitability, and building lasting client relationships.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-14 font-sans text-lg font-semibold text-ink lg:mt-20">
          We work with service businesses across sectors including:
        </Reveal>

        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-2">
          {SECTORS.map((s, i) => (
            <Reveal
              key={s.name}
              delay={i * 0.08}
              className="flex gap-5 bg-paper p-7 sm:p-9"
            >
              <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0 text-accent" aria-hidden="true">
                {s.icon}
              </svg>
              <div>
                <p className="font-display text-lg leading-snug text-ink">{s.name}</p>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/60">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 max-w-3xl lg:mt-20">
          <p className="text-[1.02rem] leading-relaxed text-ink/60">
            Our work begins with understanding the business, its goals, and
            the constraints affecting performance. We then identify where
            improvements may deliver the greatest commercial value and
            determine which changes are appropriate for the company&apos;s
            resources, priorities, and operating realities.
          </p>
          <p className="mt-5 font-display text-xl text-ink">
            Different industries. Different challenges. A business-specific
            approach to improving performance.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
