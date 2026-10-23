import Link from "next/link";
import { Handshake, Lightbulb, Megaphone, Package, Repeat, Share2 } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { ArrowIcon } from "@/components/ui/button";
import { GATE_COLOR, RevenueEngine } from "@/components/illustrations/revenue-engine";
import { revenueStages } from "@/lib/revenue-system";

// The engine above only models the first three stages (Marketing, Offer,
// Sales). This maps each of the six system stages to an icon, and — for
// the three the engine already shows — the exact color used for its gate,
// so the list below reads as a direct continuation of the illustration.
const STAGE_META: Record<string, { Icon: typeof Megaphone; engineColor?: string }> = {
  demand: { Icon: Megaphone, engineColor: GATE_COLOR.marketing },
  trust: { Icon: Lightbulb, engineColor: GATE_COLOR.offer },
  conversion: { Icon: Handshake, engineColor: GATE_COLOR.sales },
  delivery: { Icon: Package },
  retention: { Icon: Repeat },
  referral: { Icon: Share2 },
};

export function HowWeThink() {
  return (
    <section id="how-we-think" className="bg-paper py-24 text-ink sm:py-32">
      <div className="container-arktera">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-accent">
              How We Think About Growth
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,2.6vw+1rem,3.2rem)] leading-[1.08] tracking-tight text-ink text-balance">
              Revenue doesn&apos;t operate in silos.
            </h2>
          </Reveal>

          <Reveal
            delay={0.1}
            className="flex flex-col justify-end gap-4 text-[1.02rem] leading-relaxed text-ink/60">
            <p>
              Revenue performance depends on how well the different parts of your business
              work together. Marketing can attract the right prospects, but if your offer
              is unclear or your sales process is weak, those prospects may never become
              clients.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-14 lg:mt-20">
          <RevenueEngine />
        </Reveal>

        <Reveal delay={0.2} className="mt-16 lg:mt-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-xl space-y-5 text-[1.02rem] leading-relaxed text-ink/60">
              <p>
                Strong sales can bring in more business, but inefficient service delivery,
                poor pricing, or limited capacity can undermine profitability. And when
                the client relationship ends after the first sale, opportunities for
                repeat business and referrals can be lost.
              </p>

              <div className="rounded-2xl border border-ink/10 bg-ink/[0.03] px-6 py-5">
                <p className="font-display text-[1.3rem] leading-snug text-ink">
                  A weakness in one area can restrict the results achieved elsewhere —
                  while improvements across connected functions support stronger overall
                  performance.
                </p>
              </div>

              <p>
                That&apos;s why we look beyond individual activities to understand how
                your business generates demand, builds trust, converts opportunities,
                delivers services, retains clients, and generates referrals. Each stage
                presents opportunities to strengthen commercial performance.
              </p>
              <p>
                The objective isn&apos;t to optimize every activity in isolation.
                It&apos;s to identify how the parts of your business interact and where
                improvements can make the greatest commercial difference.
              </p>
            </div>

            <div>
              <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-accent">
                The Complete System
              </p>
              <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-ink/55">
                The engine above models Marketing, Offer, and Sales, the first three
                stages. The same interdependence carries through all six.
              </p>

              <ol className="mt-6 space-y-2.5">
                {revenueStages.map((stage) => {
                  const meta = STAGE_META[stage.id];
                  const inEngine = Boolean(meta.engineColor);
                  return (
                    <li
                      key={stage.id}
                      className="flex items-center gap-4 rounded-xl border px-4 py-3"
                      style={{
                        borderColor: inEngine
                          ? `${meta.engineColor}40`
                          : "var(--color-line-light)",
                        background: inEngine ? `${meta.engineColor}0d` : "transparent",
                      }}>
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                        style={{
                          color: inEngine ? meta.engineColor : "rgb(10 10 12 / 0.35)",
                          background: inEngine
                            ? `${meta.engineColor}1a`
                            : "rgb(10 10 12 / 0.05)",
                        }}>
                        <meta.Icon className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                      </span>
                      <p className="min-w-0 flex-1 font-sans text-[0.95rem] font-semibold text-ink">
                        {stage.number} — {stage.name}
                      </p>
                      {inEngine && (
                        <span
                          className="shrink-0 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.12em]"
                          style={{ color: meta.engineColor }}>
                          In the engine
                        </span>
                      )}
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25} className="mt-8">
          <Link
            href="/revenue-systems"
            className="group inline-flex items-center gap-1.5 font-sans text-[1.02rem] font-semibold text-ink">
            See the Full Revenue System
            <ArrowIcon className="text-ink" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
