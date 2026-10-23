import { ComparisonBars } from "@/components/insights/charts/comparison-bars";

export const charts = {
  revenue: (
    <ComparisonBars
      title="What a US$2,000 lost opportunity was really worth"
      items={[
        { label: "Quoted revenue", value: 2000, display: "US$2,000", sublabel: "₦2,700,000" },
        {
          label: "Potential contribution",
          value: 800,
          display: "US$800",
          sublabel: "after US$1,200 delivery cost",
          accent: true,
        },
      ]}
      caption="The quoted fee is not the amount actually at stake — delivery costs still have to come out of it."
    />
  ),
};

export const content = `
A prospect requests a quotation, discusses their needs, and appears interested in your service. Your business invests time in the conversation, prepares a proposal, and follows up.

Then the prospect goes quiet, chooses another provider, postpones the decision, or decides not to proceed.

The opportunity disappears from the pipeline, and the business moves on to the next one.

But what did that lost opportunity actually cost?

Many businesses estimate the answer by adding up the potential value of every sale they did not win. That can make the problem appear larger than it is, because not every prospect would have purchased, and not every sale would have generated the same level of profit.

A more useful approach is to separate the possible revenue, the contribution the sale could have generated, the cost of pursuing the opportunity, and the extent to which the loss might have been preventable.

**The purpose of calculating lost-opportunity cost is not to turn every lost prospect into a financial loss on paper. It is to understand where the sales process may be wasting resources and where improvements could create measurable value.**

## What Is the Cost of a Lost Sales Opportunity?

A lost sales opportunity is a potential sale that does not proceed to a purchase within the relevant sales process.

The reasons vary. A prospect may choose a competitor, decide the service is unnecessary, lack the budget, postpone the decision, or discover that the offering is not a suitable fit.

The financial implications can include several different components:

* **Potential revenue:** The amount the business might have invoiced if the sale had occurred.
* **Potential contribution:** The revenue remaining after the relevant variable or direct costs of delivering the service.
* **Acquisition and sales costs:** The money and resources spent attracting, qualifying, and pursuing the opportunity.
* **Opportunity cost:** The productive time that could have been used for other activities.
* **Potential future value:** Additional contribution that a successful customer relationship might have generated, where there is credible evidence to estimate it.

These components should not be added together indiscriminately. Some overlap, and some are uncertain.

For example, if a business calculates potential contribution after direct delivery costs, it should not subtract those same delivery costs again when estimating the economic impact.

Likewise, the potential lifetime value of a customer should not be treated as guaranteed revenue. It depends on assumptions about repeat purchases, retention, margins, and future behaviour.

The first step is to decide which question the business needs to answer.

If the question is, "How much revenue did we fail to win?", estimate potential revenue.

If the question is, "How much economic value might the sale have generated?", estimate contribution and account for relevant additional costs.

If the question is, "Where should we improve our sales process?", examine the causes of lost opportunities and the cost of pursuing them.

## Step 1: Estimate the Potential Revenue

Start with the value of the proposed sale.

For a business that sells a clearly priced service, this may be the quoted fee. For recurring services, it may be the expected contract value over a defined period.

Suppose a consulting firm loses a proposed engagement worth US$2,000 (₦2,700,000). The potential revenue associated with the opportunity is US$2,000 (₦2,700,000).

That figure is useful, but it does not mean the business has lost US$2,000 (₦2,700,000) in profit.

The engagement would have required time and resources to deliver. The prospect might also have rejected the proposal regardless of what the business did.

The quoted amount represents the potential revenue attached to the opportunity, not the amount the business can assume it would have kept.

For a recurring contract, be clear about the period being measured. A contract worth US$1,000 (₦1,350,000) per month could have a value of US$12,000 (₦16,200,000) over twelve months if it remained active for the entire year. But the full twelve-month amount is not guaranteed merely because the prospect expressed interest.

Use a defined and realistic period rather than choosing whichever figure makes the opportunity appear largest.

## Step 2: Calculate the Contribution the Sale Could Have Generated

Revenue is not the same as contribution.

To estimate contribution, subtract the relevant direct or variable costs required to deliver the service from its selling price.

Consider a service business that quotes US$2,000 (₦2,700,000) for a project and estimates that direct delivery costs would be US$1,200 (₦1,620,000).

The potential contribution would be:

| Item                            |                Amount |
| ---------------------------------- | ----------------------: |
| Potential project revenue       | US$2,000 (₦2,700,000) |
| Estimated direct delivery costs | US$1,200 (₦1,620,000) |
| Potential contribution          |   US$800 (₦1,080,000) |

*Currency note: Naira equivalents use the illustrative reference rate of US$1 = ₦1,350, dated 14 October 2026, as specified for these examples. Exchange rates vary by source, transaction type, and date. These conversions are illustrative, not guaranteed transaction rates.*

{{chart:revenue}}

The estimated contribution is US$800 (₦1,080,000), not US$2,000 (₦2,700,000).

It is also not necessarily net profit. The business may still need to cover fixed operating expenses and other costs not included in the direct delivery estimate.

This distinction matters when assessing sales performance. A business that loses a high-value but low-contribution project may have a different commercial problem from one that repeatedly loses profitable engagements.

It is also possible that a sale should not have been pursued at the quoted price. If the work would have generated inadequate contribution or consumed capacity needed for more profitable projects, winning the sale might not have improved the business.

The goal is not to win every opportunity. It is to win suitable opportunities on commercially sound terms.

## Step 3: Account for the Cost of Pursuing the Opportunity

A lost opportunity can consume resources even when no sale occurs.

The business may have paid for advertising, spent time qualifying the prospect, held meetings, prepared a proposal, arranged a site visit, or involved technical staff in estimating the work.

Some of these costs are shared across multiple prospects. Others are specific to an individual opportunity.

For a practical estimate, begin with the costs that can reasonably be attributed to the opportunity.

For example:

| Sales activity                                         | Illustrative cost |
| ----------------------------------------------------------- | ------------------: |
| Allocated acquisition cost                             |  US$80 (₦108,000) |
| Staff time spent qualifying and discussing the project |   US$60 (₦81,000) |
| Proposal preparation and technical review              | US$100 (₦135,000) |
| Total estimated pursuit cost                           | US$240 (₦324,000) |

These figures are illustrative. The business would need to estimate its own acquisition costs and the economic cost of staff time.

The total of US$240 (₦324,000) is the estimated cost of pursuing the opportunity, not an additional amount of lost revenue.

The business should not automatically add it to the potential contribution and label the result "lost profit." That would mix different concepts.

Instead, the pursuit cost answers a separate question: how much resource did the business invest in trying to win this opportunity?

If the same type of opportunity is repeatedly lost after extensive proposal work, the business may need to investigate qualification, pricing, proposal effort, or the buying process.

## Step 4: Estimate the Impact Across Multiple Opportunities

A single lost sale does not always reveal a pattern. Reviewing a group of opportunities can help the business understand the scale of the problem.

Suppose a service business records 20 lost opportunities during a defined period. Each had an estimated average potential contribution of US$500 (₦675,000).

The combined potential contribution attached to those opportunities would be US$10,000 (₦13,500,000).

That is a useful measure of the potential economic value associated with the lost opportunities. But it is not a reliable estimate of the contribution the business could actually have recovered.

Some prospects may never have purchased. Others may have been unsuitable, unable to afford the service, or unlikely to proceed regardless of follow-up.

The business therefore needs to investigate the reasons for the losses and estimate what proportion, if any, may have been preventable.

For example, suppose the business has credible evidence that a recurring follow-up problem affected a subset of lost opportunities. It should focus its analysis on that subset rather than assume that every lost opportunity could have been recovered.

The question becomes:

**How much contribution might the business reasonably recover by correcting a specific, evidenced problem?**

That is a more useful basis for deciding whether a sales-process improvement is worth pursuing.

## Step 5: Distinguish Preventable Losses from Normal Sales Losses

Not every lost opportunity signals a failure.

A prospect may choose another provider because that provider offers a service that better fits their requirements. A customer may postpone a project because its priorities have changed. A business may disqualify an opportunity because the prospect is not a suitable fit.

These are normal outcomes in a sales process.

The more useful task is to identify recurring losses associated with problems the business can reasonably influence.

Examples include:

* Qualified inquiries that receive no response.
* Proposals sent without confirming the prospect's needs.
* Opportunities that stall because nobody owns the next action.
* Repeated objections that the business has not investigated.
* Prospects attracted by an offer that does not match the service actually delivered.
* Excessive time spent preparing proposals for poorly qualified opportunities.

Record the reason for each loss where possible. If the reason is unknown, mark it as unknown rather than inventing an explanation.

Then review the patterns.

If many opportunities are lost because the service is unsuitable, the business may need better targeting or qualification. If prospects repeatedly withdraw after receiving proposals, the business may need to examine the offer, scope, pricing, or how value is communicated. If follow-ups are missed, ownership and process discipline may be the relevant issue.

The cause should determine the intervention.

## A Worked Example: What Might a Sales Improvement Be Worth?

Consider a service business that reviews 40 lost opportunities.

Its records suggest that a subset of 10 qualified opportunities were not followed up consistently. Each had an estimated potential contribution of US$600 (₦810,000).

The combined potential contribution associated with those ten opportunities is US$6,000 (₦8,100,000).

However, the business should not assume it could recover the full amount.

Suppose, for planning purposes only, the business estimates that a targeted follow-up improvement might recover two of those ten opportunities. If each recovered sale generated the estimated contribution of US$600 (₦810,000), the potential contribution recovered would be US$1,200 (₦1,620,000).

*That is an illustrative scenario, not a forecast or a measured recovery rate.*

The business would need to validate whether the original losses were genuinely related to follow-up, whether the prospects remain viable, whether the contribution estimates are realistic, and what it would cost to implement and maintain the improvement.

If the change requires additional staff time or software, those costs should be considered separately when evaluating the economics.

The value of this exercise is that it links a specific business problem to a measurable hypothesis. Rather than investing in a broad sales transformation, the business can test whether a focused intervention improves outcomes.

## How to Build a Lost-Opportunity Review

A spreadsheet may be sufficient to start. Record each lost opportunity using a consistent set of fields:

| Field                         | Why it matters                                                           |
| --------------------------------- | ------------------------------------------------------------------------ |
| Opportunity value             | Estimates the potential revenue attached to the sale                     |
| Estimated contribution        | Shows the potential value after relevant direct delivery costs           |
| Acquisition source            | Helps compare the commercial outcomes of different channels              |
| Sales stage at loss           | Identifies where opportunities tend to stop progressing                  |
| Recorded loss reason          | Helps identify recurring problems                                        |
| Pursuit cost, where available | Estimates the resources spent trying to win the opportunity              |
| Follow-up history             | Helps establish whether the sales process was followed                   |
| Potential next action         | Identifies whether further investigation or a targeted test is justified |

Keep the definitions consistent. For example, do not record one opportunity's full multi-year contract value while recording another's first-month revenue without making the difference explicit.

Also avoid treating every estimate as a fact. If delivery costs, pursuit costs, or reasons for loss are uncertain, record that uncertainty.

Review the information periodically, looking for patterns across acquisition channels, service types, customer segments, and pipeline stages. Small samples may be useful for generating questions, but they may not support strong conclusions.

## What Should You Fix First?

The largest opportunity by quoted value is not necessarily the best place to start.

A high-value prospect may have been unlikely to buy. A smaller opportunity may reveal a recurring process problem affecting many sales.

Prioritise issues using four considerations:

1. **Frequency:** How often does the problem occur?
2. **Commercial impact:** What contribution or resources may be affected?
3. **Preventability:** Is there credible evidence that the business can influence the outcome?
4. **Cost of correction:** What time, money, and operational effort would a solution require?

For example, improving follow-up consistency may be a sensible test if records show that qualified prospects regularly receive no follow-up. But buying a CRM would not automatically be justified if the same problem could be solved with clearer responsibility and a simple task-review process.

Likewise, lowering prices may not recover lost opportunities if prospects are uncertain about the service's value or if the offering is unsuitable for their needs.

Do not choose an intervention merely because it is easy to implement or because it is the tool the business already wants to buy. Choose it because the evidence supports the problem being addressed.

## The Goal Is Better Sales Decisions, Not Inflated Loss Estimates

Calculating the cost of lost sales opportunities can help a business understand what it is missing, but the figures must be interpreted carefully.

Potential revenue is not guaranteed revenue. Potential contribution is not net profit. The combined value of lost opportunities is not the amount a business can necessarily recover. And a prospect who did not buy is not automatically evidence that the sales process failed.

The most useful analysis connects the financial value of an opportunity with the reason it was lost and the likelihood that a specific improvement could change the outcome.

Start with reliable records. Separate revenue from contribution. Estimate the cost of pursuing opportunities where practical. Identify recurring, potentially preventable problems. Then test focused improvements and measure what changes.

At Arktera Systems, the business problem determines the intervention. If your business is losing qualified opportunities, the first step is to understand where and why those opportunities are being lost before deciding whether the answer lies in marketing, qualification, follow-up, sales processes, or another part of the revenue system.

The Free Business Growth Assessment is a starting point for exploring the challenges affecting business performance and identifying what may need closer investigation.
`;
