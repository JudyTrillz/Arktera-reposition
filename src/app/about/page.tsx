import { pageMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AboutHero } from "@/components/sections/about/hero";
import { GrowthProblem } from "@/components/sections/about/growth-problem";
import { Philosophy } from "@/components/sections/about/philosophy";
import { HowWeThink } from "@/components/sections/about/how-we-think";
import { OurApproach } from "@/components/sections/about/our-approach";
import { WhoWeAimToHelp } from "@/components/sections/about/who-we-aim-to-help";
import { FoundersPerspective } from "@/components/sections/about/founders-perspective";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Arktera Systems diagnoses the constraints holding back revenue and designs practical solutions that strengthen commercial performance for service businesses.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <AboutHero />
        <GrowthProblem />
        <Philosophy />
        <HowWeThink />
        <OurApproach />
        <WhoWeAimToHelp />
        <FoundersPerspective />
        <FinalCta
          headline="Ready to take a closer look at your business?"
          body={
            <>
              Before investing in another marketing tactic, technology
              tool, or growth initiative, take a step back and examine
              where your business stands. Start with our{" "}
              <strong className="font-semibold text-paper">
                Free Business Growth Assessment
              </strong>{" "}
              to discuss your business goals, explore the challenges
              you&apos;re facing, and identify where further analysis may
              help you make better decisions about what to improve.
            </>
          }
          ctaLabel="Get Your Free Business Growth Assessment"
        />
      </main>
      <SiteFooter />
    </>
  );
}
