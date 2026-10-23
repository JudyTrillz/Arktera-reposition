import { ComparisonBars } from "@/components/insights/charts/comparison-bars";

export const charts = {
  cashflow: (
    <ComparisonBars
      title="Expected vs. actual cash this month"
      items={[
        { label: "Expected customer receipts", value: 8000, display: "US$8,000", sublabel: "₦10.8 million" },
        { label: "Cash actually available by the date needed", value: 5000, display: "US$5,000", sublabel: "₦6.75 million", accent: true },
        { label: "Planned operating outflows", value: 6000, display: "US$6,000", sublabel: "₦8.1 million" },
      ]}
      caption="US$3,000 arrived late, leaving a US$1,000 potential shortfall against planned outflows — illustrative figures, not a forecast."
    />
  ),
};

export const content = `
A business can make a sale, deliver the work, send the invoice, and still struggle to pay its own bills.

The problem is timing. Revenue may have been earned, but until the customer pays, that money is not available to cover salaries, suppliers, rent, operating expenses, or the costs of taking on new work.

This is why late payments deserve more attention than a routine reminder from the accounts department. They can expose weaknesses in payment terms, invoicing, customer selection, internal processes, and cash-flow planning.

The goal is not simply to chase customers harder. It is to understand why money is arriving late, how the delays affect the business, and what can be changed to reduce the pressure.

## Why Late Payments Can Become a Growth Problem

Late payments affect more than the balance shown on an invoice report. They can constrain the decisions a business is able to make.

Research published by the UK government in July 2025 estimated that late payments cost the UK economy almost £11 billion annually. The research also estimated that more than 1.5 million businesses were affected each year and that affected businesses were owed approximately £26 billion at any given time. These are UK-wide estimates, not figures for Nigeria or every business market. However, they illustrate the scale that payment delays can reach in a developed business economy.

A 2025 study of 102 small and medium-sized enterprises in Cape Coast, Ghana, also found that delayed payments were a significant concern among the businesses surveyed. Most respondents reported receiving payments 60 to 90 days after invoicing, despite commonly offering 30-day credit terms. Because the study was limited to a specific location and sample, its findings should not be treated as a national estimate for Ghana, Nigeria, or other markets.

The broader lesson is relevant to service businesses: **when customers pay later than expected, the business may have to finance the gap between completing work and receiving the money owed.**

That gap can create several problems:

* **Operating pressure:** The business may have difficulty covering wages, rent, utilities, or supplier invoices while waiting for customers to pay.
* **Restricted capacity:** Money tied up in unpaid invoices may limit the business's ability to purchase materials, pay subcontractors, or accept additional projects.
* **More administrative work:** Staff must spend time checking invoice status, contacting customers, resolving disputes, and updating records.
* **Greater financial exposure:** The longer an invoice remains unpaid, the longer the business carries the risk that the customer may delay further or fail to pay.
* **Slower investment:** Planned spending on equipment, marketing, technology, or staff may need to be postponed because cash is not available when required.

Late payment does not automatically mean a business is unprofitable. It means the timing of cash inflows may be out of step with the timing of cash outflows. That mismatch can become serious even when the business is recording sales and reporting a profit.

## Revenue Is Not the Same as Cash Received

One of the most important distinctions in business finance is the difference between earning revenue and collecting payment.

Consider a service business that completes a project worth **US$2,000 (₦2.7 million)** and invoices the customer under 30-day payment terms.

The business has completed the work and raised the invoice. But if the customer does not pay until 60 days later, the business waits an additional 30 days beyond the agreed term for the money.

During that period, the business may still need to pay its employees, suppliers, subcontractors, and other operating costs.

The invoice represents money owed to the business. It is not yet money in the bank.

### An illustrative cash-flow example

Suppose a business has the following monthly figures:

| Item                                                    |                   Amount |
| ----------------------------------------------------------- | --------------------------: |
| Monthly operating cash outflows                         |  US$6,000 (₦8.1 million) |
| Expected customer receipts                              | US$8,000 (₦10.8 million) |
| Customer payments delayed beyond the expected date      | US$3,000 (₦4.05 million) |
| Cash available from those receipts by the expected date | US$5,000 (₦6.75 million) |
| Potential shortfall against planned outflows            | US$1,000 (₦1.35 million) |

{{chart:cashflow}}

In this simplified example, the business expects US$8,000 in customer receipts but receives only US$5,000 by the date it needs the money. If its planned cash outflows are US$6,000, it faces a potential US$1,000 shortfall.

The delayed US$3,000 has not necessarily been lost. It may still be collected later. But the business cannot use it to pay today's bills.

*The figures are illustrative, not an industry benchmark or a forecast. The naira equivalents use the reference rate specified for these examples, US$1 = ₦1,350, dated 14 October 2026. Actual exchange rates vary, and the figures should not be used as guaranteed transaction rates.*

The practical question is not simply, "How much money do customers owe us?"

It is also, "How much cash are we likely to receive, and when will it arrive compared with the payments we must make?"

## Four Questions to Ask When Payments Are Late

Before changing payment terms or introducing new collection procedures, identify where the problem is occurring.

### 1. Are Customers Paying Later Than the Agreed Terms?

Start by comparing each invoice's due date with its actual payment date.

If customers are consistently paying after the agreed deadline, the business needs to understand how widespread the delay is and whether it is concentrated among particular customers.

For example, a business may discover that most customers pay within the agreed period, while a small number of large accounts regularly pay 30 or 60 days late. That situation calls for a different response from one in which almost every customer pays late.

Review:

* Total outstanding invoices.
* The amount already past due.
* How many days each overdue invoice has remained unpaid.
* Which customers account for the largest outstanding balances.
* Whether the same customers repeatedly pay late.

A useful starting point is an **accounts receivable ageing report**, which groups unpaid invoices according to how long they have been outstanding. Common categories include current, 1–30 days overdue, 31–60 days overdue, 61–90 days overdue, and more than 90 days overdue. Businesses should adapt the categories to their payment terms and reporting needs.

The purpose is to identify the pattern, not merely produce another spreadsheet.

### 2. Are Invoices Being Sent Correctly and Promptly?

Not every payment delay begins with a customer deliberately paying late.

An invoice may be sent days after work is completed. It may contain incorrect details, omit a purchase order number, use the wrong billing contact, or lack supporting documents required by the customer's finance department.

These problems can delay approval and payment, even when the customer intends to pay.

Review the process from completed work to payment:

1. Is the invoice issued as soon as the agreed billing trigger is reached?
2. Does it contain the correct customer, amount, payment terms, and required references?
3. Has it reached the person or department responsible for processing it?
4. Does the business know whether the invoice has been received and accepted?
5. Is there a clear process for resolving disputes or requests for corrections?

If invoices are frequently disputed or returned for correction, sending more reminders will not fix the underlying problem.

The process itself needs attention.

### 3. Are Payment Terms Suitable for the Business?

A business may agree to payment terms that make a sale easier to secure but create cash-flow pressure later.

For example, a service provider might be required to pay for materials and subcontractors before starting a project, while the customer is permitted to pay 60 days after completion.

The provider is effectively financing part of the project until the customer pays.

This arrangement may be manageable for a business with sufficient cash reserves. It may be risky for a business that depends on each project payment to fund the next one.

Review whether the terms reflect the actual cost and timing of delivery.

Depending on the type of service and the agreement, possible options include:

* Requiring a deposit before work begins.
* Using milestone-based payments for longer projects.
* Billing at agreed stages rather than waiting until all work is complete.
* Agreeing on clear payment deadlines before work starts.
* Setting credit limits or reviewing terms for customers with repeated payment problems.
* Requiring approval for additional work that changes the original cost or schedule.

These options will not suit every business or customer relationship. Deposits and milestone payments must be commercially reasonable, clearly documented, and consistent with applicable contractual and legal requirements.

The aim is not to make payment terms unnecessarily difficult. It is to avoid accepting obligations that the business cannot comfortably finance.

### 4. Is the Business Following Up Consistently?

A payment process should not depend entirely on someone remembering to check an invoice.

When responsibility is unclear, an invoice may remain overdue for weeks before anyone contacts the customer. The customer may have overlooked it, be waiting for internal approval, or have a genuine dispute that has not been resolved.

A practical follow-up process defines:

* Who checks invoice status.
* When the customer is contacted before or after the due date.
* How the contact and the customer's response are recorded.
* Who resolves disputes.
* When an overdue account is escalated.
* Who decides whether further work should continue while a material balance remains unpaid.

A reminder schedule should reflect the business's payment terms, customer relationships, contract conditions, and the seriousness of the overdue balance. There is no single schedule that is right for every business.

Communication should remain professional and documented. If the customer disputes an invoice, the business should establish the reason and work toward a resolution rather than treating every delay as simple refusal to pay.

## Measure the Payment Problem Before Choosing a Solution

Once the business understands the process, it needs a small set of measures that reveal whether the situation is improving.

| Measure                     | What it helps you understand                                      |
| -------------------------------- | ------------------------------------------------------------------- |
| Total accounts receivable   | How much money customers still owe                                |
| Overdue accounts receivable | How much of that money has passed its due date                    |
| Average collection time     | How long the business typically takes to collect payment          |
| Invoice dispute rate        | How often invoices are challenged or returned for correction      |
| On-time payment rate        | What proportion of invoices are paid by the agreed date           |
| Cash-flow forecast accuracy | Whether expected receipts and payments are occurring when planned |
| Time spent chasing payments | How much staff time the collection process consumes               |

Average collection time can be useful, but it should not be interpreted in isolation. It may be affected by sales growth, seasonal patterns, customer mix, and payment terms. Compare the measure over time and alongside the business's actual contractual terms.

For many service businesses, the most useful first step is simpler: create a reliable list of outstanding invoices, their due dates, the next action required, and the person responsible.

That gives the business a practical view of the problem before it invests in more software or introduces a more complicated process.

## What Can a Business Do to Reduce Payment Delays?

The right response depends on the cause. Start with the process that is creating the delay rather than introducing every possible solution at once.

### Establish clear payment expectations

Explain the price, billing milestones, payment deadline, accepted payment methods, and process for raising a dispute before work begins.

Avoid relying on informal assumptions about when the customer will pay. Record the agreed terms and make sure both parties understand them.

### Invoice promptly and accurately

Set a clear trigger for issuing invoices and assign responsibility for completing the task. Use a consistent invoice checklist to reduce missing information and avoidable corrections.

Where customers require purchase orders, acceptance documents, or other supporting information, identify those requirements before the invoice is due to be issued.

### Make payment easier to complete

Provide accurate payment instructions and make it clear who the customer should contact with questions. If a customer reports a problem, respond promptly and keep a record of the resolution.

The objective is to remove unnecessary friction while maintaining appropriate financial controls.

### Use reminders and escalation rules

Schedule invoice reviews and reminders so that overdue balances do not depend on memory. Define when an account should be escalated and who has authority to make decisions about disputed invoices or additional work.

Automation may help with reminders, recordkeeping, and reporting, but only after the underlying process is clear. Automating a confusing process can make the confusion happen faster.

### Plan for the timing gap

Even with a good payment process, some delays will occur. Build a cash-flow forecast that compares expected receipts with the timing of essential payments.

The forecast should distinguish money already received from money expected but not yet collected. It should also account for uncertainty, including customers who have a history of paying late.

Where possible, maintain an appropriate cash buffer and avoid committing all expected receipts to expenses before the money arrives.

If a shortfall is likely, address it early. Depending on the circumstances, the business may need to adjust spending, renegotiate supplier timing, arrange suitable financing, or review whether a new project can be delivered without placing existing obligations at risk. Financing has costs and conditions, so it should not be treated as an automatic solution to a recurring collection problem.

## Do Not Confuse Faster Collections With Higher Profit

Improving collections can make cash available sooner, but it does not automatically make the underlying business more profitable.

If a customer owes US$5,000 (₦6.75 million), collecting that amount may improve the cash position. It does not create US$5,000 of new revenue at the point of collection if the revenue was already recognised.

Similarly, a business may collect invoices faster and still struggle because its prices are too low, its delivery costs are too high, or its payment obligations arrive before customer receipts.

That distinction matters.

A payment delay may be the main problem, or it may be one part of a wider issue involving pricing, contract design, delivery costs, customer selection, and cash-flow planning.

The business should investigate the evidence before deciding which problem to fix first.

## A Practical Review You Can Start This Week

Set aside time to review the current position using actual business records.

**Step 1: List all unpaid invoices.**
Record the customer, invoice amount, invoice date, due date, amount outstanding, and current status.

**Step 2: Identify the overdue balances.**
Group invoices by how long they have been overdue. Highlight large balances and repeat delays.

**Step 3: Find the reason for each significant delay.**
Record whether the invoice has not been received, is awaiting approval, contains an error, is disputed, or is simply unpaid after the due date. Do not assume the cause without checking.

**Step 4: Assign the next action.**
Give each material overdue invoice an owner, a specific next step, and a review date.

**Step 5: Compare expected receipts with upcoming payments.**
Use realistic collection dates rather than assuming every overdue invoice will be paid immediately.

**Step 6: Look for recurring causes.**
If the same errors, customers, terms, or handoff problems keep appearing, investigate the process behind them.

**Step 7: Review whether the changes work.**
Track overdue balances, collection timing, disputes, and time spent chasing payment. Use the results to decide what to adjust next.

This review does not require a complicated financial system. A well-maintained spreadsheet may be enough for a small business with a manageable number of invoices. More complex operations may need accounting software, a CRM, or workflow automation, depending on where the records and responsibilities sit.

The technology should support the process, not substitute for it.

## The Bigger Question: Where Is Cash Getting Stuck?

Late payments can look like an accounts problem while revealing a wider business constraint.

Perhaps invoices are sent too late. Perhaps customers do not understand the terms. Perhaps the business accepts projects that require more upfront funding than it can provide. Perhaps responsibility for follow-up is unclear. Or perhaps the business is growing in sales without planning for the working capital required to deliver that growth.

Each situation calls for a different response.

The objective is not simply to send more reminders or pressure every customer to pay sooner. It is to identify where cash is getting stuck, understand why, and improve the process without damaging valuable customer relationships or creating new operational problems.

**Arktera helps service businesses find and fix the problems that are holding back revenue.** Through a Free Business Growth Assessment, we can begin exploring the business goals, processes, and constraints that may be affecting performance. The assessment is a starting point for understanding where to investigate, not a promise that every issue will be diagnosed or resolved in one step.
`;
