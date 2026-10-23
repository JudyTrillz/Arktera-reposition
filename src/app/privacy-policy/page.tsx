import { pageMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LegalHero } from "@/components/sections/legal/legal-hero";
import { LegalToc } from "@/components/sections/legal/legal-toc";
import { ArticleBody } from "@/components/insights/article-body";
import { FinalCta } from "@/components/sections/final-cta";
import { legalUpdatedAt, extractLegalSections } from "@/lib/legal";
import { content } from "@/content/legal/privacy-policy";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Arktera Systems collects, uses, stores, and protects personal information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const sections = extractLegalSections(content);

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <LegalHero
          title="Privacy Policy"
          intro="How Arktera Systems collects, uses, stores, and protects personal information."
          updatedIso={legalUpdatedAt.privacyPolicy}
        />

        <section className="bg-paper py-16 text-ink sm:py-24">
          <div className="container-arktera">
            <div className="grid gap-14 lg:grid-cols-[1fr_18rem]">
              <article className="min-w-0 max-w-3xl">
                <ArticleBody content={content} />
              </article>
              <LegalToc sections={sections} />
            </div>
          </div>
        </section>

        <FinalCta
          headline="Questions about your information?"
          body="If you want to understand how we handle your data, or you'd like to make a privacy request, send us a message and we'll respond within one business day."
          ctaLabel="Contact Arktera"
          ctaHref="/contact"
        />
      </main>
      <SiteFooter />
    </>
  );
}
