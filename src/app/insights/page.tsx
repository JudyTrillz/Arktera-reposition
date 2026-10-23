import { pageMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { InsightsHero } from "@/components/sections/insights/hero";
import { LatestInsights } from "@/components/sections/insights/latest-insights";
import { FeaturedInsights } from "@/components/sections/insights/featured-insights";
import { ExploreInsights } from "@/components/sections/insights/explore-insights";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata = pageMetadata({
  title: "Insights",
  description:
    "Practical analysis on revenue performance, conversion, profitability, and operational efficiency, helping service businesses find out what to fix next.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <InsightsHero />
        <LatestInsights />
        <FeaturedInsights />
        <ExploreInsights />
        <FinalCta
          headline="Not sure which problem to investigate first?"
          body="Reading the right article is a start, not a diagnosis. Start with a Free Business Growth Assessment to discuss your business goals, explain the challenges you're facing, and identify where further analysis may help you make better decisions about what to improve."
          ctaLabel="Get Your Free Business Growth Assessment"
        />
      </main>
      <SiteFooter />
    </>
  );
}
