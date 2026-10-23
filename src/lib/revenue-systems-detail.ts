// Source of truth: MD/Revenue systems page.md

export type StageDetail = {
  number: string;
  name: string;
  tagline: string; // short wheel label, section 3
  title: string; // section 4 subheading
  achieve: string;
  breakdown: string[];
  impact: string;
  improve: string;
};

export const stageDetails: StageDetail[] = [
  {
    number: "01",
    name: "Demand",
    tagline: "Attract the Right Prospects.",
    title: "Attract the Right Prospects",
    achieve:
      "Make your business visible to suitable prospects who need your services and have a reason to consider your offer.",
    breakdown: [
      "Low visibility among your intended audience.",
      "Marketing that attracts attention but few qualified inquiries.",
      "Overreliance on a single source of new business.",
      "Poor alignment between your marketing message and your target audience.",
    ],
    impact:
      "Marketing resources may generate little qualified demand, increasing the cost of acquiring clients and leaving your business dependent on inconsistent sources of new opportunities.",
    improve:
      "Audience targeting, positioning, local visibility, search performance, marketing channels, or the relevance of your offer to prospective buyers.",
  },
  {
    number: "02",
    name: "Trust",
    tagline: "Give Prospects a Reason to Choose You.",
    title: "Give Prospects a Reason to Choose You",
    achieve:
      "Help prospective clients understand your value, recognize your credibility, and feel confident taking the next step.",
    breakdown: [
      "An unclear or undifferentiated offer.",
      "Insufficient evidence of expertise or results.",
      "Unanswered questions about price, quality, or suitability.",
      "A website or sales message that creates confusion rather than confidence.",
    ],
    impact:
      "Interested prospects may hesitate, compare alternatives, or leave without making an inquiry. Your business can lose opportunities even when it reaches the right audience.",
    improve:
      "Offer clarity, positioning, messaging, case studies, testimonials, website experience, or how you address prospective clients' concerns.",
  },
  {
    number: "03",
    name: "Conversion",
    tagline: "Turn Opportunities into Sales.",
    title: "Turn Opportunities into Sales",
    achieve:
      "Move suitable prospects from initial interest to a purchase, booking, signed engagement, or other meaningful commercial commitment.",
    breakdown: [
      "Inquiries left unanswered or handled too slowly.",
      "Inconsistent follow-up.",
      "A confusing booking or purchasing process.",
      "Sales conversations that fail to communicate value or address objections.",
    ],
    impact:
      "Qualified opportunities can go cold, sales efforts go unrewarded, and revenue is lost that might otherwise have been generated from existing demand. Weak tracking can also make it difficult to identify where sales are being lost.",
    improve:
      "Inquiry handling, response times, follow-up sequences, qualification, sales conversations, booking processes, or the steps between initial contact and commitment.",
  },
  {
    number: "04",
    name: "Delivery",
    tagline: "Deliver Value and Protect Profitability.",
    title: "Deliver Value and Protect Profitability",
    achieve:
      "Deliver services effectively while managing the resources, costs, and capacity required to serve clients profitably.",
    breakdown: [
      "Pricing that doesn't adequately account for delivery costs.",
      "Excessive rework or inefficient processes.",
      "Capacity constraints that limit service quality or growth.",
      "Projects or engagements that consume more time and resources than expected.",
    ],
    impact:
      "Revenue may increase without a corresponding improvement in profit. Rising costs, wasted capacity, and delivery inefficiencies can erode margins and restrict your ability to serve additional clients.",
    improve:
      "Pricing and packaging, cost visibility, workflow design, resource allocation, capacity planning, quality control, or operational efficiency.",
  },
  {
    number: "05",
    name: "Retention",
    tagline: "Build Lasting Client Relationships.",
    title: "Build Lasting Client Relationships",
    achieve:
      "Create reasons for clients to return, continue working with your business, or purchase additional suitable services.",
    breakdown: [
      "Little communication after the initial sale.",
      "Inconsistent service experiences.",
      "No process for identifying repeat-business opportunities.",
      "Unresolved client concerns that weaken the relationship.",
    ],
    impact:
      "Your business may lose repeat revenue and become more dependent on continually acquiring new clients to sustain growth. Valuable client relationships can end before their full commercial potential is realized.",
    improve:
      "Client onboarding, service experience, aftercare, communication, feedback collection, follow-up systems, or relevant repeat-purchase offers.",
  },
  {
    number: "06",
    name: "Referral",
    tagline: "Turn Client Satisfaction into New Opportunities.",
    title: "Turn Client Satisfaction into New Opportunities",
    achieve:
      "Make it easier for satisfied clients to recommend your business and introduce suitable new prospects.",
    breakdown: [
      "Few requests for reviews or recommendations.",
      "No clear process for encouraging referrals.",
      "Client satisfaction that never translates into advocacy.",
      "Limited relationships with partners or other referral sources.",
    ],
    impact:
      "Your business may miss opportunities to generate qualified prospects through existing relationships, strengthen its reputation, and reduce reliance on paid marketing or other acquisition channels.",
    improve:
      "Review requests, referral processes, client communication, partner relationships, or ways to recognize and encourage appropriate recommendations.",
  },
];

// Section 2 — The Systems Reality
export type SymptomItem = {
  question: string;
  answer: string;
};

export const systemsRealitySymptoms: SymptomItem[] = [
  {
    question: "Getting website traffic but few inquiries?",
    answer:
      "Your offer, messaging, or website experience may be failing to turn visitors into potential buyers.",
  },
  {
    question: "Receiving inquiries but winning few sales?",
    answer:
      "Slow responses, weak follow-up, or an unclear value proposition may be costing you sales.",
  },
  {
    question: "Generating sales but struggling with profit?",
    answer:
      "Your pricing, delivery costs, or operational processes may be eating into your margins.",
  },
  {
    question: "Winning clients but getting little repeat business?",
    answer:
      "Gaps in client experience, communication, or follow-up may be limiting repeat sales.",
  },
  {
    question: "Serving satisfied clients but receiving few referrals?",
    answer:
      "You may be missing opportunities to encourage recommendations, request reviews, and generate new business through existing relationships.",
  },
];

// Section 5 — Industry Alignment
export type IndustryItem = {
  name: string;
  title: string;
  breakdown: string;
  examine: string;
};

export const industryItems: IndustryItem[] = [
  {
    name: "Healthcare and Dental Clinics",
    title: "Turn More Patient Inquiries into Appointments and Lasting Relationships.",
    breakdown:
      "Clinics may attract patient inquiries but struggle to convert them into bookings, manage follow-up consistently, or encourage patients to return.",
    examine:
      "We examine the patient journey, from how prospective patients discover and evaluate the practice to how inquiries are handled, appointments are secured, and ongoing patient relationships are maintained.",
  },
  {
    name: "Consulting and Advisory Practices",
    title: "Build a Stronger Path from Expertise to Client Engagements.",
    breakdown:
      "Consultants may have valuable expertise but struggle to communicate their value clearly, generate qualified opportunities, or convert discovery conversations into client engagements.",
    examine:
      "We examine how the practice positions its expertise, attracts suitable prospects, builds client confidence, manages the sales process, and creates opportunities for continued client relationships.",
  },
  {
    name: "Professional and B2B Services",
    title: "Win Better-Fit Clients and Strengthen Commercial Performance.",
    breakdown:
      "Professional service firms may struggle to differentiate their offers, win suitable clients, or protect profit margins as projects and client engagements become more complex.",
    examine:
      "We examine how the firm attracts and qualifies opportunities, communicates its value and pricing, converts prospects, manages service delivery, and identifies opportunities to improve profitability and client retention.",
  },
  {
    name: "Specialized Contractors and Commercial Service Providers",
    title: "Win Suitable Projects and Protect the Value of Every Engagement.",
    breakdown:
      "Contractors and commercial service providers may generate inquiries without consistently winning suitable projects, responding to quoting opportunities promptly, or maintaining healthy margins during delivery.",
    examine:
      "We examine lead handling, quoting processes, follow-up, project selection, delivery efficiency, and opportunities to generate repeat contracts.",
  },
];

// Section 6 — How the Framework Becomes Action
export type ActionCase = {
  caseNumber: string;
  title: string;
  where: string;
  investigate: string;
  implement: string;
  objective: string;
};

export const actionCases: ActionCase[] = [
  {
    caseNumber: "01",
    title: "When Website Visitors Aren't Becoming Inquiries",
    where: "Demand and Trust.",
    investigate:
      "We examine how your business attracts visitors, communicates its value, establishes credibility, and guides prospective clients towards taking action. We also consider whether the website experience and available performance data reveal barriers to conversion.",
    implement:
      "Depending on the findings, improvements could involve clearer messaging, stronger offers, conversion-focused copywriting, website enhancements, or better conversion tracking.",
    objective:
      "Help the right visitors understand your value and make it easier for suitable prospects to take the next step.",
  },
  {
    caseNumber: "02",
    title: "When Inquiries Aren't Becoming Sales",
    where: "Trust and Conversion.",
    investigate:
      "We examine how inquiries are handled, how quickly prospects receive responses, how follow-up is managed, and what happens between initial interest and a purchasing decision.",
    implement:
      "The appropriate response could involve refining the sales process, improving inquiry handling, configuring a CRM, introducing follow-up automation, or addressing gaps in the offer or sales conversation.",
    objective:
      "Reduce avoidable losses between initial interest and a genuine sales opportunity.",
  },
  {
    caseNumber: "03",
    title: "When Revenue Grows but Profitability Remains Weak",
    where: "Delivery, with particular attention to pricing, costs, and capacity.",
    investigate:
      "We examine how services are priced and delivered, where time and resources are being consumed, and whether operational constraints are affecting margins or limiting the business's ability to serve clients effectively.",
    implement:
      "Depending on the findings, improvements could involve reviewing pricing and service packages, redesigning workflows, reducing unnecessary manual work, introducing appropriate automation, or improving capacity planning.",
    objective:
      "Help the business make better decisions about how it delivers value, uses resources, and protects profitability.",
  },
  {
    caseNumber: "04",
    title: "When Clients Don't Return or Generate Referrals",
    where: "Retention and Referral.",
    investigate:
      "We examine the client experience, communication after the initial sale, opportunities for repeat engagement, and how satisfied clients are encouraged to recommend the business.",
    implement:
      "Potential improvements include client onboarding, aftercare and follow-up processes, relevant repeat-service offers, feedback collection, review requests, or structured referral processes.",
    objective:
      "Strengthen client relationships and create better opportunities for repeat business and referrals.",
  },
];
