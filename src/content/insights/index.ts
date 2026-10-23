import type { ReactNode } from "react";
import * as beforeYouSpendMoreOnMarketing from "./before-you-spend-more-on-marketing";
import * as websiteTrafficNoInquiries from "./website-traffic-no-inquiries";
import * as whyBusinessesLoseSalesAfterTheFirstInquiry from "./why-businesses-lose-sales-after-the-first-inquiry";
import * as revenueGrowingProfitIsnt from "./revenue-growing-profit-isnt";
import * as howToPriceYourServices from "./how-to-price-your-services";
import * as moreSalesLessProfit from "./more-sales-less-profit";
import * as diagnoseAWeakSalesPipeline from "./diagnose-a-weak-sales-pipeline";
import * as crmVsSpreadsheet from "./crm-vs-spreadsheet";
import * as costOfALostSalesOpportunity from "./cost-of-a-lost-sales-opportunity";
import * as whyCustomerRetentionMatters from "./why-customer-retention-matters";
import * as buildAFollowUpSystem from "./build-a-follow-up-system";
import * as latePaymentsConstrainGrowth from "./late-payments-constrain-growth";

export const insightContent: Record<string, { content: string; charts?: Record<string, ReactNode> }> = {
  "before-you-spend-more-on-marketing": beforeYouSpendMoreOnMarketing,
  "website-traffic-no-inquiries": websiteTrafficNoInquiries,
  "why-businesses-lose-sales-after-the-first-inquiry": whyBusinessesLoseSalesAfterTheFirstInquiry,
  "revenue-growing-profit-isnt": revenueGrowingProfitIsnt,
  "how-to-price-your-services": howToPriceYourServices,
  "more-sales-less-profit": moreSalesLessProfit,
  "diagnose-a-weak-sales-pipeline": diagnoseAWeakSalesPipeline,
  "crm-vs-spreadsheet": crmVsSpreadsheet,
  "cost-of-a-lost-sales-opportunity": costOfALostSalesOpportunity,
  "why-customer-retention-matters": whyCustomerRetentionMatters,
  "build-a-follow-up-system": buildAFollowUpSystem,
  "late-payments-constrain-growth": latePaymentsConstrainGrowth,
};
