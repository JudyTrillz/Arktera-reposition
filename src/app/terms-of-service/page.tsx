import { pageMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LegalHero } from "@/components/sections/legal/legal-hero";
import { LegalToc } from "@/components/sections/legal/legal-toc";
import { ArticleBody } from "@/components/insights/article-body";
import { FinalCta } from "@/components/sections/final-cta";
import { legalUpdatedAt, extractLegalSections } from "@/lib/legal";
import { content } from "@/content/legal/terms-of-service";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "The terms governing use of the Arktera Systems website and engagement with our services.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  const sections = extractLegalSections(content);

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <LegalHero
          title="Terms of Service"
          intro="The terms governing use of the Arktera Systems website and engagement with our services."
          updatedIso={legalUpdatedAt.termsOfService}
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
          headline="Questions about how we work?"
          body="If anything in these Terms is unclear, or you want to understand how a potential engagement would work, send us a message and we'll respond within one business day."
          ctaLabel="Contact Arktera"
          ctaHref="/contact"
        />
      </main>
      <SiteFooter />
    </>
  );
}
