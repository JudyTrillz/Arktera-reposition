import { pageMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AssessmentHero } from "@/components/sections/assessment/hero";
import { WhatToExpect } from "@/components/sections/assessment/what-to-expect";
import { AssessmentForm } from "@/components/sections/assessment/assessment-form";

export const metadata = pageMetadata({
  title: "Free Business Growth Assessment",
  description:
    "Know what's holding your business back. Complete Arktera's Free Business Growth Assessment to share your goals and challenges for a focused conversation.",
  path: "/business-growth-assessment",
});

export default function BusinessGrowthAssessmentPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <AssessmentHero />
        <WhatToExpect />
        <AssessmentForm />
      </main>
      <SiteFooter />
    </>
  );
}
