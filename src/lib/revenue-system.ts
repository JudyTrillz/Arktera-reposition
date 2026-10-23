// Source of truth: MD/Home.md — "4. The Arktera Revenue System"
export type RevenueStage = {
  id: string;
  number: string;
  name: string;
  question: string;
  body: string;
  leak: string;
};

export const revenueStages: RevenueStage[] = [
  {
    id: "demand",
    number: "01",
    name: "Demand",
    question: "Are the right people finding you?",
    body: "If potential customers aren't discovering your business, you may struggle to generate enough enquiries and sales.",
    leak: "Poor visibility, weak targeting, or marketing that attracts attention but few suitable buyers.",
  },
  {
    id: "trust",
    number: "02",
    name: "Trust",
    question: "Do they have a reason to choose you?",
    body: "People need to understand what you offer, why it matters, and why they should trust your business.",
    leak: "Unclear offers, weak proof, or unanswered concerns that make potential customers hesitate.",
  },
  {
    id: "conversion",
    number: "03",
    name: "Conversion",
    question: "Are enquiries turning into paying customers?",
    body: "Interest alone doesn't generate revenue. Your follow-up, sales process, and booking experience all influence whether an enquiry becomes a sale.",
    leak: "Missed enquiries, slow responses, inconsistent follow-up, or a difficult path to purchase.",
  },
  {
    id: "delivery",
    number: "04",
    name: "Delivery",
    question: "Can you deliver well and protect your profit?",
    body: "Winning customers is only part of the job. Your pricing, costs, capacity, and processes determine how well your business serves them and what it keeps.",
    leak: "Underpricing, wasted resources, delivery bottlenecks, or costs that eat into margins.",
  },
  {
    id: "retention",
    number: "05",
    name: "Retention",
    question: "Do customers have a reason to return?",
    body: "A good customer relationship shouldn't end at the first sale. The right experience and follow-up can create opportunities for repeat business.",
    leak: "Poor aftercare, inconsistent communication, or no process for encouraging customers to return.",
  },
  {
    id: "referral",
    number: "06",
    name: "Referral",
    question: "Are satisfied customers bringing others to you?",
    body: "Happy customers can become a valuable source of new business when you make it easy for them to recommend you.",
    leak: "Missed opportunities to request reviews, ask for introductions, or build relationships with repeat referrers.",
  },
];

// Source of truth: MD/Home.md — "5. What Arktera Does"
export type ProcessStep = {
  number: string;
  name: string;
  title: string;
  body: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    name: "Assess",
    title: "Establish Where Your Business Stands.",
    body: "We clarify your business goals, review your current customer journey, and examine available performance data to establish a baseline for evaluating results.",
  },
  {
    number: "02",
    name: "Diagnose",
    title: "Find What's Costing You Opportunities.",
    body: "We investigate how your business operates to identify where potential customers are being lost, sales opportunities are slipping away, or costs are eating into profit.",
  },
  {
    number: "03",
    name: "Design",
    title: "Choose the Right Solution.",
    body: "We develop a practical plan around your business goals, priorities, and resources, focusing first on the problems that matter most.",
  },
  {
    number: "04",
    name: "Build",
    title: "Put the Right Solution into Action.",
    body: "We help implement the changes your business needs, whether that means improving your website, attracting better prospects, strengthening your sales process, automating follow-up, or making your operations more efficient.",
  },
  {
    number: "05",
    name: "Measure",
    title: "Know What's Improving and What Needs to Change.",
    body: "We track the measures that matter to your business, evaluate the results, and identify where further improvements may be needed.",
  },
];

// Source of truth: MD/Home.md — "2. The Problem"
export type ProblemItem = {
  question: string;
  answer: string;
  stageRef: string;
};

export const problemItems: ProblemItem[] = [
  {
    question: "Not getting enough customers?",
    answer: "You may need more demand or better visibility.",
    stageRef: "01 — Demand",
  },
  {
    question: "Getting enquiries but few sales?",
    answer: "Your offer, follow-up, or sales process may be holding you back.",
    stageRef: "02–03 — Trust / Conversion",
  },
  {
    question: "Making sales but keeping too little profit?",
    answer: "Pricing, costs, or delivery may be the problem.",
    stageRef: "04 — Delivery",
  },
  {
    question: "Winning customers who never return?",
    answer: "Your retention and follow-up systems may need work.",
    stageRef: "05 — Retention",
  },
];

// Source of truth: MD/Home.md — "3. Why Arktera"
export type WhyItem = {
  number: string;
  title: string;
  body: string;
};

export const whyItems: WhyItem[] = [
  {
    number: "01",
    title: "See the Whole Picture",
    body: "We connect marketing, sales, pricing, service delivery, and customer retention to understand what's affecting your bottom line.",
  },
  {
    number: "02",
    title: "Fix the Right Problem",
    body: "We find where your business is losing opportunities, wasting resources, or struggling to grow before recommending the right solution.",
  },
  {
    number: "03",
    title: "Turn Plans Into Action",
    body: "We help implement the changes your business needs, then measure what's improving and what needs more work.",
  },
];

// Source of truth: MD/Home.md — "6. Who We Work With"
export type AudienceItem = {
  name: string;
  body: string;
};

export const audienceItems: AudienceItem[] = [
  {
    name: "Healthcare and Dental Clinics",
    body: "Attract the right patients, turn more enquiries into appointments, and strengthen patient retention.",
  },
  {
    name: "Consulting and Advisory Practices",
    body: "Generate qualified opportunities, improve discovery and sales conversations, and win more high-value client engagements.",
  },
  {
    name: "Professional and B2B Services (Legal, Accounting, IT)",
    body: "Communicate your value clearly, differentiate your firm from competitors, win better-fit clients, and strengthen your ability to command appropriate fees.",
  },
  {
    name: "Specialized Contractors and Commercial Service Providers",
    body: "Generate more valuable enquiries, improve response and follow-up, win more suitable contracts, and create opportunities for repeat business.",
  },
];
