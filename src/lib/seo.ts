import type { Metadata } from "next";

// Same canonical origin as metadataBase in layout.tsx — kept as a literal
// here too since metadataBase isn't readable from a plain helper function.
export const siteUrl = "https://arkterasystems.com";

/**
 * Builds a page's full Metadata object — title, description, canonical URL,
 * and matching Open Graph / Twitter fields — so a social share of any page
 * shows that page's own title and description instead of silently
 * inheriting the homepage's (the root layout's openGraph/twitter only
 * describe the homepage; Next doesn't derive them from a page's own
 * `title`/`description` automatically).
 */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
}: {
  /** Short page title — gets the " | Arktera Systems" suffix for <title>
   * via the layout's template, and is suffixed the same way here for
   * openGraph/twitter, which don't pick up that template on their own. */
  title: string;
  description: string;
  /** Path from the site root, e.g. "/about" (no trailing slash). */
  path: string;
  type?: "website" | "article";
}): Metadata {
  const url = `${siteUrl}${path}`;
  const fullTitle = `${title} | Arktera Systems`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      type,
    },
    twitter: {
      title: fullTitle,
      description,
    },
  };
}
