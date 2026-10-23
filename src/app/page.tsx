import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { WhyArktera } from "@/components/sections/why-arktera";
import { RevenueSystem } from "@/components/sections/revenue-system";
import { Approach } from "@/components/sections/approach";
import { WhoWeWorkWith } from "@/components/sections/who-we-work-with";
import { Insights } from "@/components/sections/insights";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <Problem />
        <WhyArktera />
        <RevenueSystem />
        <Approach />
        <WhoWeWorkWith />
        <Insights />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
