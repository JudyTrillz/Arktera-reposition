// Source of truth: MD/assessment-form.md
// Types, option datasets, initial state, and per-stage validation for the
// Free Business Growth Assessment form.

export type Option = {
  value: string;
  label: string;
  description?: string;
};

export type AssessmentFormData = {
  // Stage 1 — Business Profile
  firstName: string;
  lastName: string;
  email: string;
  businessName: string;
  website: string;
  socialLinks: string[];
  industry: string;
  services: string;
  cityRegion: string;
  country: string;
  teamSize: string;
  businessAge: string;

  // Stage 2 — Business Objectives
  objectives: string[];
  objectiveOther: string;

  // Stage 3 — Business Challenges
  challenges: string[];
  challengeOther: string;
  mainChallengeDetail: string;
  challengeTimeframe: string;
  challengeImpact: string;

  // Stage 4 — Business Performance and Additional Context
  monthlyInquiries: string;
  monthlyNewClients: string;
  revenueChange: string;
  revenueCurrency: string;
  revenueRange: string;
  revenueOtherEstimate: string;
  trackedMetrics: string[];
  trackedMetricsOther: string;
  trackingTools: string[];
  trackingToolsOther: string;
  mainResult: string;
  additionalContext: string;
};

export const initialAssessmentData: AssessmentFormData = {
  firstName: "",
  lastName: "",
  email: "",
  businessName: "",
  website: "",
  socialLinks: [""],
  industry: "",
  services: "",
  cityRegion: "",
  country: "",
  teamSize: "",
  businessAge: "",

  objectives: [],
  objectiveOther: "",

  challenges: [],
  challengeOther: "",
  mainChallengeDetail: "",
  challengeTimeframe: "",
  challengeImpact: "",

  monthlyInquiries: "",
  monthlyNewClients: "",
  revenueChange: "",
  revenueCurrency: "",
  revenueRange: "",
  revenueOtherEstimate: "",
  trackedMetrics: [],
  trackedMetricsOther: "",
  trackingTools: [],
  trackingToolsOther: "",
  mainResult: "",
  additionalContext: "",
};

export const industryOptions: Option[] = [
  { value: "healthcare-dental", label: "Healthcare or Dental Clinic" },
  { value: "consulting-advisory", label: "Consulting or Advisory Practice" },
  {
    value: "professional-b2b",
    label: "Professional or B2B Services (Legal, Accounting, Consulting)",
  },
  {
    value: "specialized-contractor",
    label: "Specialized Contractor or Commercial Service Provider",
  },
  { value: "other-service", label: "Other Service-Based Business" },
];

export const teamSizeOptions: Option[] = [
  { value: "just-me", label: "Just me" },
  { value: "2-9", label: "2 to 9 team members" },
  { value: "10-49", label: "10 to 49 team members" },
  { value: "50-plus", label: "50 or more team members" },
];

export const businessAgeOptions: Option[] = [
  { value: "under-1", label: "Less than 1 year" },
  { value: "1-3", label: "1 to 3 years" },
  { value: "4-7", label: "4 to 7 years" },
  { value: "8-plus", label: "8 years or more" },
];

export const objectiveOptions: Option[] = [
  {
    value: "attract-qualified-clients",
    label: "Attract More Qualified Clients",
    description: "Reach more potential clients who are a good fit for our services.",
  },
  {
    value: "generate-more-inquiries",
    label: "Generate More Inquiries",
    description: "Increase the number of people expressing interest in our services.",
  },
  {
    value: "improve-sales-conversion",
    label: "Improve Sales Conversion",
    description: "Turn more inquiries and sales opportunities into paying clients.",
  },
  {
    value: "increase-revenue",
    label: "Increase Revenue",
    description: "Grow revenue or make it more consistent and predictable.",
  },
  {
    value: "improve-profitability",
    label: "Improve Profitability",
    description: "Protect profit margins and improve the financial return from our services.",
  },
  {
    value: "improve-pricing",
    label: "Improve Pricing",
    description:
      "Ensure our prices reflect the value, costs, and resources involved in delivering our services.",
  },
  {
    value: "improve-operational-efficiency",
    label: "Improve Operational Efficiency",
    description: "Reduce inefficiencies, unnecessary costs, and avoidable delays in our operations.",
  },
  {
    value: "increase-delivery-capacity",
    label: "Increase Delivery Capacity",
    description: "Handle more business without compromising service quality or overburdening the team.",
  },
  {
    value: "improve-client-retention",
    label: "Improve Client Retention",
    description: "Encourage more existing clients to return for additional services or engagements.",
  },
  {
    value: "generate-more-referrals",
    label: "Generate More Referrals",
    description: "Turn satisfied clients and business relationships into more referral opportunities.",
  },
  {
    value: "improve-processes-systems",
    label: "Improve Business Processes and Systems",
    description:
      "Establish more effective processes for managing inquiries, sales, client relationships, or service delivery.",
  },
  {
    value: "understand-performance-limits",
    label: "Understand What Is Limiting Business Performance",
    description: "Gain a clearer understanding of what is preventing the business from achieving its goals.",
  },
  {
    value: "other",
    label: "Other",
    description: "Describe the business outcome you want to achieve.",
  },
];

export const OBJECTIVES_MAX = 3;

export const challengeOptions: Option[] = [
  {
    value: "not-enough-qualified-inquiries",
    label: "Not Enough Qualified Inquiries",
    description: "We are not receiving enough inquiries from people who are a good fit for our services.",
  },
  {
    value: "inconsistent-inquiry-volume",
    label: "Inconsistent Inquiry Volume",
    description: "The number of inquiries fluctuates, making it difficult to plan or predict demand.",
  },
  {
    value: "too-many-unqualified-inquiries",
    label: "Too Many Unqualified Inquiries",
    description: "We receive inquiries, but many are not a good fit for our services, pricing, or requirements.",
  },
  {
    value: "inquiries-not-turning-into-clients",
    label: "Inquiries Are Not Turning into Clients",
    description: "People express interest in our services, but too few become paying clients.",
  },
  {
    value: "slow-inconsistent-follow-up",
    label: "Slow or Inconsistent Follow-Up",
    description: "We struggle to respond promptly, follow up consistently, or keep potential clients engaged.",
  },
  {
    value: "sales-opportunities-lost",
    label: "Sales Opportunities Are Being Lost",
    description: "Potential clients lose interest, delay decisions, choose alternatives, or disappear before committing.",
  },
  {
    value: "revenue-too-low-unpredictable",
    label: "Revenue Is Too Low or Unpredictable",
    description: "Revenue is below our expectations or varies too much to plan confidently.",
  },
  {
    value: "profit-margins-under-pressure",
    label: "Profit Margins Are Under Pressure",
    description:
      "Costs, pricing, discounts, or the resources required to deliver our services are affecting profitability.",
  },
  {
    value: "prices-may-not-reflect-value",
    label: "Our Prices May Not Reflect the Value or Cost of Delivery",
    description:
      "We are uncertain whether our pricing adequately accounts for the value we provide and the cost of delivering our services.",
  },
  {
    value: "existing-clients-rarely-return",
    label: "Existing Clients Rarely Return",
    description: "We struggle to generate repeat business or additional engagements from existing clients.",
  },
  {
    value: "too-few-referrals",
    label: "Too Few Referrals",
    description: "We receive fewer referrals than we would like from satisfied clients or business relationships.",
  },
  {
    value: "client-payments-delayed",
    label: "Client Payments Are Delayed",
    description: "Late payments or outstanding invoices make it difficult to manage cash flow.",
  },
  {
    value: "delivery-inefficient-hard-to-scale",
    label: "Service Delivery Is Inefficient or Difficult to Scale",
    description:
      "Our processes, workload, or available capacity make it difficult to serve clients efficiently or handle more business.",
  },
  {
    value: "lack-reliable-performance-data",
    label: "We Lack Reliable Business Performance Data",
    description:
      "We struggle to measure or understand performance across inquiries, sales, revenue, profitability, or client retention.",
  },
  {
    value: "processes-too-manual-disconnected",
    label: "Our Business Processes Are Too Manual or Disconnected",
    description: "We rely on manual work, scattered information, or disconnected tools to manage important business activities.",
  },
  {
    value: "other",
    label: "Other",
    description: "We are experiencing a challenge not listed above.",
  },
  {
    value: "not-sure",
    label: "I'm Not Sure What the Main Challenge Is",
    description: "I know we need to improve business performance, but I am not yet sure what is holding us back.",
  },
];

export const CHALLENGES_MAX = 5;

export const challengeTimeframeOptions: Option[] = [
  { value: "past-month", label: "Within the past month" },
  { value: "1-3-months", label: "1 to 3 months ago" },
  { value: "4-6-months", label: "4 to 6 months ago" },
  { value: "more-than-6-months", label: "More than 6 months ago" },
  { value: "ongoing", label: "It has been an ongoing issue for as long as I can remember" },
  { value: "not-sure", label: "I'm not sure" },
];

export const challengeImpactOptions: Option[] = [
  {
    value: "low",
    label: "Low Impact",
    description: "The issues are noticeable but are not significantly affecting our business goals.",
  },
  {
    value: "moderate",
    label: "Moderate Impact",
    description: "The issues are slowing progress or making performance less predictable.",
  },
  {
    value: "high",
    label: "High Impact",
    description: "The issues are significantly affecting revenue, profitability, client acquisition, or operations.",
  },
  {
    value: "critical",
    label: "Critical Impact",
    description: "The issues are putting substantial pressure on our ability to operate or meet important business obligations.",
  },
  {
    value: "not-sure",
    label: "I'm Not Sure",
    description: "I need help understanding the extent of the impact.",
  },
];

export const inquiryVolumeOptions: Option[] = [
  { value: "0-5", label: "0 to 5" },
  { value: "6-15", label: "6 to 15" },
  { value: "16-30", label: "16 to 30" },
  { value: "31-50", label: "31 to 50" },
  { value: "51-100", label: "51 to 100" },
  { value: "100-plus", label: "More than 100" },
  { value: "varies", label: "It varies too much to estimate" },
  { value: "not-tracked", label: "We do not track this" },
  { value: "not-sure", label: "I'm not sure" },
];

export const newClientOptions: Option[] = [
  { value: "0", label: "0" },
  { value: "1-2", label: "1 to 2" },
  { value: "3-5", label: "3 to 5" },
  { value: "6-10", label: "6 to 10" },
  { value: "11-20", label: "11 to 20" },
  { value: "20-plus", label: "More than 20" },
  { value: "varies", label: "It varies too much to estimate" },
  { value: "not-tracked", label: "We do not track this" },
  { value: "not-sure", label: "I'm not sure" },
];

export const revenueChangeOptions: Option[] = [
  { value: "increased-significantly", label: "Increased significantly" },
  { value: "increased-slightly", label: "Increased slightly" },
  { value: "stayed-same", label: "Stayed roughly the same" },
  { value: "decreased-slightly", label: "Decreased slightly" },
  { value: "decreased-significantly", label: "Decreased significantly" },
  { value: "fluctuated", label: "Fluctuated without a clear direction" },
  { value: "not-tracked", label: "We do not track revenue consistently" },
  { value: "not-sure", label: "I'm not sure" },
];

export const revenueCurrencyOptions: Option[] = [
  { value: "NGN", label: "Nigerian naira (NGN)" },
  { value: "USD", label: "US dollars (USD)" },
  { value: "OTHER", label: "Other currency" },
];

// Illustrative bands — configure for the intended markets before launch.
export const revenueRangesByCurrency: Record<string, Option[]> = {
  USD: [
    { value: "under-1k", label: "Under $1,000" },
    { value: "1k-5k", label: "$1,000 – $5,000" },
    { value: "5k-15k", label: "$5,001 – $15,000" },
    { value: "15k-50k", label: "$15,001 – $50,000" },
    { value: "50k-150k", label: "$50,001 – $150,000" },
    { value: "above-150k", label: "Above $150,000" },
    { value: "varies", label: "Revenue varies too much to estimate" },
    { value: "prefer-not-to-say", label: "Prefer not to say" },
  ],
  NGN: [
    { value: "under-1m", label: "Under ₦1,000,000" },
    { value: "1m-5m", label: "₦1,000,000 – ₦5,000,000" },
    { value: "5m-15m", label: "₦5,000,001 – ₦15,000,000" },
    { value: "15m-50m", label: "₦15,000,001 – ₦50,000,000" },
    { value: "50m-150m", label: "₦50,000,001 – ₦150,000,000" },
    { value: "above-150m", label: "Above ₦150,000,000" },
    { value: "varies", label: "Revenue varies too much to estimate" },
    { value: "prefer-not-to-say", label: "Prefer not to say" },
  ],
};

export const trackedMetricOptions: Option[] = [
  { value: "inquiries-leads", label: "Number of inquiries or leads" },
  { value: "new-clients", label: "Number of new clients" },
  { value: "conversion", label: "Inquiry-to-client conversion" },
  { value: "revenue", label: "Revenue" },
  { value: "profit-margins", label: "Profit or profit margins" },
  { value: "marketing-spend", label: "Marketing spend and results" },
  { value: "retention", label: "Repeat business or client retention" },
  { value: "referrals", label: "Referrals" },
  { value: "acquisition-cost", label: "Client acquisition costs" },
  { value: "delivery-cost", label: "Service delivery costs" },
  { value: "payment-delays", label: "Outstanding invoices or payment delays" },
  { value: "other", label: "We track other metrics" },
  { value: "none", label: "We do not regularly track business performance" },
  { value: "not-sure", label: "I'm not sure" },
];

export const trackingToolOptions: Option[] = [
  { value: "spreadsheets", label: "Spreadsheets" },
  { value: "crm", label: "CRM or sales management software" },
  { value: "accounting-software", label: "Accounting or financial software" },
  { value: "analytics-tools", label: "Website or marketing analytics tools" },
  { value: "agency-reports", label: "Reports provided by an external agency or consultant" },
  { value: "manual-records", label: "Manual records, notebooks, or separate documents" },
  { value: "combination", label: "We use a combination of tools" },
  { value: "no-process", label: "We do not have a consistent tracking process" },
  { value: "other", label: "Other" },
  { value: "not-sure", label: "I'm not sure" },
];

export type StageIndex = 0 | 1 | 2 | 3;

export const STAGE_META: { title: string; shortLabel: string }[] = [
  { title: "Business Profile", shortLabel: "Profile" },
  { title: "Business Objectives", shortLabel: "Objectives" },
  { title: "Business Challenges", shortLabel: "Challenges" },
  { title: "Performance & Context", shortLabel: "Performance" },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_RE = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/i;

export function validateStage(stage: StageIndex, data: AssessmentFormData): Record<string, string> {
  const errors: Record<string, string> = {};

  if (stage === 0) {
    if (!data.firstName.trim()) errors.firstName = "First name is required.";
    if (!data.lastName.trim()) errors.lastName = "Last name is required.";
    if (!data.email.trim()) errors.email = "Business email address is required.";
    else if (!EMAIL_RE.test(data.email.trim())) errors.email = "Enter a valid email address.";
    if (!data.businessName.trim()) errors.businessName = "Business name is required.";
    if (data.website.trim() && !URL_RE.test(data.website.trim())) {
      errors.website = "Enter a valid website URL.";
    }
    if (!data.industry) errors.industry = "Select the industry your business operates in.";
    if (!data.services.trim()) errors.services = "Briefly describe what your business provides.";
    if (!data.cityRegion.trim()) errors.cityRegion = "City, state, or region is required.";
    if (!data.country.trim()) errors.country = "Country is required.";
    if (!data.teamSize) errors.teamSize = "Select how many people work in your business.";
    if (!data.businessAge) errors.businessAge = "Select how long your business has been operating.";
  }

  if (stage === 1) {
    if (data.objectives.length === 0) {
      errors.objectives = "Select at least one objective (up to three).";
    } else if (data.objectives.length > OBJECTIVES_MAX) {
      errors.objectives = `Select no more than ${OBJECTIVES_MAX} objectives.`;
    }
    if (data.objectives.includes("other") && !data.objectiveOther.trim()) {
      errors.objectiveOther = "Describe the outcome you want to achieve.";
    }
  }

  if (stage === 2) {
    if (data.challenges.length === 0) {
      errors.challenges = "Select at least one challenge (up to five).";
    } else if (data.challenges.length > CHALLENGES_MAX) {
      errors.challenges = `Select no more than ${CHALLENGES_MAX} challenges.`;
    }
    if (data.challenges.includes("other") && !data.challengeOther.trim()) {
      errors.challengeOther = "Briefly describe the challenge.";
    }
    if (!data.challengeTimeframe) errors.challengeTimeframe = "Let us know when you first noticed these challenges.";
    if (!data.challengeImpact) errors.challengeImpact = "Select how much these challenges are affecting your business.";
  }

  if (stage === 3) {
    if (!data.monthlyInquiries) errors.monthlyInquiries = "Select an estimate of monthly inquiries.";
    if (!data.monthlyNewClients) errors.monthlyNewClients = "Select an estimate of new clients per month.";
    if (!data.revenueChange) errors.revenueChange = "Select how your revenue has changed.";
    if (data.revenueCurrency === "OTHER" && data.revenueRange === "" && !data.revenueOtherEstimate.trim()) {
      // optional field — no error required.
    }
    if ((data.revenueCurrency === "NGN" || data.revenueCurrency === "USD") && data.revenueCurrency && !data.revenueRange) {
      errors.revenueRange = "Select the range closest to your monthly revenue, or leave the currency unselected to skip.";
    }
    if (data.trackedMetrics.length === 0) {
      errors.trackedMetrics = "Select the performance data your business currently tracks.";
    }
    if (data.trackedMetrics.includes("other") && !data.trackedMetricsOther.trim()) {
      errors.trackedMetricsOther = "Let us know which other metrics you track.";
    }
    if (data.trackingTools.length === 0) {
      errors.trackingTools = "Select how your business records and reviews performance.";
    }
    if (data.trackingTools.includes("other") && !data.trackingToolsOther.trim()) {
      errors.trackingToolsOther = "Let us know which tools or methods you use.";
    }
    if (!data.mainResult.trim()) {
      errors.mainResult = "Describe the main result you want to achieve.";
    }
  }

  return errors;
}

export function isStageValid(stage: StageIndex, data: AssessmentFormData): boolean {
  return Object.keys(validateStage(stage, data)).length === 0;
}
