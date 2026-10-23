import { pageMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RevSysHero } from "@/components/sections/revenue-systems/hero";
import { SystemsReality } from "@/components/sections/revenue-systems/systems-reality";
import { RevenueFlywheel } from "@/components/sections/revenue-systems/revenue-flywheel";
import { ExploreStages } from "@/components/sections/revenue-systems/explore-stages";
import { IndustryAlignment } from "@/components/sections/revenue-systems/industry-alignment";
import { FrameworkToAction } from "@/components/sections/revenue-systems/framework-to-action";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata = pageMetadata({
  title: "The Revenue System",
  description:
    "See how demand, trust, conversion, delivery, retention, and referral work together, and identify what's holding your revenue system back.",
  path: "/revenue-systems",
});

export default function RevenueSystemsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <RevSysHero />
        <SystemsReality />
        <RevenueFlywheel />
        <ExploreStages />
        <IndustryAlignment />
        <FrameworkToAction />
        <FinalCta
          headline="Ready to strengthen your revenue system?"
          body="You don't have to guess which parts of your business need attention or where to focus your next improvement efforts. Start with a Free Business Growth Assessment to discuss your business goals, explore the challenges you're facing, and consider where further analysis may help you make better decisions about what to improve."
          ctaLabel="Get Your Free Business Growth Assessment"
        />
      </main>
      <SiteFooter />
    </>
  );
}
