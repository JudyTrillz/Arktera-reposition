// Source of truth: MD/Insights.md — article cards (category, title, excerpt, read time)
export type InsightCategory =
  | "Fixing Revenue Leaks"
  | "Protecting Profit Margins"
  | "Improving Pipeline Conversion"
  | "Strengthening Client Retention";

export const insightCategories: InsightCategory[] = [
  "Fixing Revenue Leaks",
  "Protecting Profit Margins",
  "Improving Pipeline Conversion",
  "Strengthening Client Retention",
];

export type InsightArticle = {
  slug: string;
  category: InsightCategory;
  title: string;
  excerpt: string;
  /** Short (~150-char) summary for the <meta description>/OG tags — the
   * card-display `excerpt` above runs 200-300 chars, too long for a search
   * snippet, so this is a separate, deliberately terser field rather than
   * a truncation of approved on-page copy. */
  metaDescription: string;
  readTime: string;
  date: string;
  featured?: boolean;
};

export const insightArticles: InsightArticle[] = [
  {
    slug: "before-you-spend-more-on-marketing",
    category: "Fixing Revenue Leaks",
    title:
      "Before You Spend More on Marketing, Find Out Where Your Revenue Is Leaking",
    excerpt:
      "More marketing doesn't always mean more revenue. Discover how to examine the journey from marketing spend to qualified inquiries, sales, and profit, identify where opportunities may be getting lost, and determine what to investigate before investing more.",
    metaDescription:
      "More marketing doesn't always mean more revenue. Learn how to trace the journey from spend to sales and find out where opportunities are being lost.",
    readTime: "6 Min Read",
    date: "2026-07-29",
    featured: true,
  },
  {
    slug: "website-traffic-no-inquiries",
    category: "Fixing Revenue Leaks",
    title:
      "Getting Website Traffic but No Inquiries? How to Find the Conversion Problem",
    excerpt:
      "Your website attracts visitors, but few take the next step. Discover how to investigate traffic quality, offer clarity, trust, user experience, and conversion tracking to find out why visitors aren't becoming qualified inquiries.",
    metaDescription:
      "Your website attracts visitors, but few inquire. Learn how to investigate traffic quality, offer clarity, trust, and UX to find the real conversion problem.",
    readTime: "6 Min Read",
    date: "2026-08-26",
  },
  {
    slug: "why-businesses-lose-sales-after-the-first-inquiry",
    category: "Fixing Revenue Leaks",
    title: "Why Businesses Lose Sales After the First Inquiry",
    excerpt:
      "Inquiries are coming in, but too few become clients. Discover how delayed responses, inconsistent follow-up, weak qualification, and unclear next steps can undermine sales, and learn what to measure before spending more to generate leads.",
    metaDescription:
      "Inquiries are coming in, but too few become clients. See how delayed responses, weak follow-up, and unclear next steps can quietly undermine your sales.",
    readTime: "6 Min Read",
    date: "2026-09-23",
  },
  {
    slug: "revenue-growing-profit-isnt",
    category: "Protecting Profit Margins",
    title: "Revenue Is Growing, but Profit Isn't: What Should You Investigate?",
    excerpt:
      "Revenue growth doesn't always mean healthier profits. Learn how to examine margins, pricing, delivery costs, and operating expenses to understand why a business may be selling more without keeping more.",
    metaDescription:
      "Revenue growth doesn't always mean healthier profits. Learn how to examine margins, pricing, and delivery costs to find out why you're keeping less.",
    readTime: "6 Min Read",
    date: "2026-08-05",
  },
  {
    slug: "how-to-price-your-services",
    category: "Protecting Profit Margins",
    title: "How to Price Your Services Without Guessing or Undercutting Yourself",
    excerpt:
      "Your prices need to make sense for both your business and your customers. Learn how to assess delivery costs, profit requirements, market alternatives, and customer value before setting or changing your service prices.",
    metaDescription:
      "Your prices need to work for your business and your customers. Learn how to assess costs, profit needs, and value before setting your service prices.",
    readTime: "6 Min Read",
    date: "2026-09-02",
  },
  {
    slug: "more-sales-less-profit",
    category: "Protecting Profit Margins",
    title: "More Sales, Less Profit: The Hidden Economics of Service Delivery",
    excerpt:
      "More sales can mean more work without more profit. Learn how rising delivery costs, rework, scope creep, and inefficient processes can weaken profitability, and what to measure to identify where the problem lies.",
    metaDescription:
      "More sales can mean more work without more profit. Learn how rising delivery costs, rework, and scope creep quietly weaken profitability.",
    readTime: "6 Min Read",
    date: "2026-09-30",
  },
  {
    slug: "diagnose-a-weak-sales-pipeline",
    category: "Improving Pipeline Conversion",
    title: "How to Diagnose a Weak Sales Pipeline Before Buying More Leads",
    excerpt:
      "An inconsistent sales pipeline doesn't always mean you need more leads. Learn how to examine prospect quality, qualification, follow-up, conversion rates, and stalled opportunities to identify what's holding sales back before increasing your marketing spend.",
    metaDescription:
      "An inconsistent pipeline doesn't always mean you need more leads. Learn how to diagnose weak qualification, follow-up, and stalled opportunities first.",
    readTime: "7 Min Read",
    date: "2026-08-12",
    featured: true,
  },
  {
    slug: "crm-vs-spreadsheet",
    category: "Improving Pipeline Conversion",
    title: "CRM vs Spreadsheet: When Does a Business Actually Need a CRM?",
    excerpt:
      "A spreadsheet may be enough to manage your customers and sales pipeline, until missed follow-ups, scattered records, and manual reporting begin costing you opportunities. Learn how to recognise when your business needs a CRM, when a spreadsheet is still sufficient, and what to consider before switching.",
    metaDescription:
      "A spreadsheet can work, until missed follow-ups and scattered records start costing you deals. Learn when your business actually needs a CRM.",
    readTime: "7 Min Read",
    date: "2026-09-09",
  },
  {
    slug: "cost-of-a-lost-sales-opportunity",
    category: "Improving Pipeline Conversion",
    title: "How to Calculate the Cost of a Lost Sales Opportunity",
    excerpt:
      "Every lost opportunity has a potential business cost, but the value of a prospect is not the same as lost profit. Learn how to estimate missed revenue, calculate the contribution a sale could have generated, and identify which sales problems deserve attention first.",
    metaDescription:
      "Every lost opportunity has a cost, but a prospect's value isn't the same as lost profit. Learn how to calculate it and prioritize sales problems.",
    readTime: "7 Min Read",
    date: "2026-10-14",
  },
  {
    slug: "why-customer-retention-matters",
    category: "Strengthening Client Retention",
    title: "Why Customer Retention Matters More Than Just Winning the Next Sale",
    excerpt:
      "Winning new customers matters, but what happens after the first sale? Learn how to evaluate repeat business, understand why customers stop buying, and identify opportunities to strengthen customer relationships without sacrificing profitability.",
    metaDescription:
      "Winning new customers matters, but what happens after the first sale? Learn why customers stop buying and how to strengthen retention without cutting profit.",
    readTime: "7 Min Read",
    date: "2026-08-19",
    featured: true,
  },
  {
    slug: "build-a-follow-up-system",
    category: "Strengthening Client Retention",
    title: "How to Build a Follow-Up System That Generates Repeat Business",
    excerpt:
      "Customers can forget, become busy, or simply move on after a purchase. Learn how to create a practical follow-up system that keeps communication relevant, identifies opportunities for repeat business, and helps your team maintain customer relationships without relying on memory.",
    metaDescription:
      "Customers forget, get busy, or move on after a purchase. Learn how to build a practical follow-up system that does not rely on memory.",
    readTime: "7 Min Read",
    date: "2026-09-16",
  },
  {
    slug: "late-payments-constrain-growth",
    category: "Strengthening Client Retention",
    title:
      "Late Payments Are More Than an Accounting Problem: How They Constrain Growth",
    excerpt:
      "Late payments can leave a business short of the cash needed to pay suppliers, cover operating costs, or take on new work. Learn how to examine payment delays, identify weaknesses in your payment process, and improve cash-flow management without confusing revenue with money actually received.",
    metaDescription:
      "Late payments can leave you short of cash for suppliers, costs, and new work. Learn how to diagnose payment delays and improve cash-flow management.",
    readTime: "7 Min Read",
    date: "2026-10-07",
  },
];

export function getLatestInsights(count = 3): InsightArticle[] {
  return [...insightArticles]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, count);
}

export function getFeaturedInsights(): InsightArticle[] {
  return insightArticles.filter((a) => a.featured);
}
