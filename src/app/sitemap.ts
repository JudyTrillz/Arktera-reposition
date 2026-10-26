import type { MetadataRoute } from "next";
import { insightArticles } from "@/lib/insights";
import { legalUpdatedAt } from "@/lib/legal";

// Same canonical origin as metadataBase in layout.tsx — kept as a literal
// here too since Next's metadata file conventions (sitemap.ts/robots.ts)
// don't read metadataBase themselves.
const baseUrl = "https://www.arkterasystems.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/revenue-systems`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/assessment`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(`${legalUpdatedAt.termsOfService}T00:00:00Z`),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(`${legalUpdatedAt.privacyPolicy}T00:00:00Z`),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // One entry per article — pulled from the same data the Insights pages
  // render from, so a new article in insightArticles shows up here with no
  // further changes needed.
  const articleRoutes: MetadataRoute.Sitemap = insightArticles.map((article) => ({
    url: `${baseUrl}/insights/${article.slug}`,
    lastModified: new Date(`${article.date}T00:00:00Z`),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...articleRoutes];
}
