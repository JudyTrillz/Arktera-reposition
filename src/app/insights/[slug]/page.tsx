import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ArticleHero } from "@/components/sections/insights/article-hero";
import { ArticleSidebar } from "@/components/sections/insights/article-sidebar";
import { RelatedInsights } from "@/components/sections/insights/related-insights";
import { FinalCta } from "@/components/sections/final-cta";
import { ArticleBody } from "@/components/insights/article-body";
import { insightArticles } from "@/lib/insights";
import { insightContent } from "@/content/insights";
import { pageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insightArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = insightArticles.find((a) => a.slug === slug);
  if (!article) return {};
  return pageMetadata({
    title: article.title,
    description: article.metaDescription,
    path: `/insights/${article.slug}`,
    type: "article",
  });
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = insightArticles.find((a) => a.slug === slug);
  const entry = insightContent[slug];

  if (!article || !entry) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <ArticleHero article={article} />

        <section className="bg-paper py-16 text-ink sm:py-24">
          <div className="container-arktera">
            <div className="grid gap-14 lg:grid-cols-[1fr_20rem]">
              <article className="min-w-0 max-w-3xl">
                <ArticleBody content={entry.content} charts={entry.charts} />
              </article>
              <ArticleSidebar />
            </div>
          </div>
        </section>

        <RelatedInsights current={article} />

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
