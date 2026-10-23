import { ComparisonBars } from "@/components/insights/charts/comparison-bars";

export const charts = {
  discount: (
    <ComparisonBars
      title="Contribution per sale, before and after a 10% discount"
      items={[
        { label: "Full price — US$200", value: 80, display: "US$80", sublabel: "contribution" },
        { label: "Discounted 10% — US$180", value: 60, display: "US$60", sublabel: "contribution", accent: true },
      ]}
      caption="A 10% price cut produced a 25% drop in contribution — delivery cost stayed fixed at US$120 either way."
    />
  ),
};

export const content = `
How much should you charge for your services?

For many business owners, the answer comes from a mixture of experience, competitor research, customer expectations, and intuition.

You might check what other businesses charge, estimate how long the work will take, and choose a price that feels reasonable. If a prospect objects, you may consider reducing the price to win the business.

These approaches can provide useful information, but they become risky when they replace a clear pricing process.

A price that attracts customers may not cover the cost of delivering the work. A price that protects your margin may be difficult to justify if customers cannot understand the value. And a price copied from a competitor may be unsuitable for a business with different costs, capabilities, or customers.

**The goal is not simply to charge more. It is to set a price that customers can understand, the market can support, and the business can sustain.**

Here is how to approach that decision.

*Currency note: Naira equivalents throughout this article use an illustrative reference rate of US$1 = ₦1,350, dated 14 October 2026, as specified for these examples. Exchange rates vary by source, transaction type, and date. These conversions are illustrative, not guaranteed transaction rates. Verify the applicable rate before using the figures for financial decisions.*

## 1. Stop Treating Your Competitors' Prices as Your Pricing Strategy

Competitor research can help you understand the alternatives available to your customers. It cannot tell you exactly what your business should charge.

Consider two businesses offering website development.

One uses a standardized process, has a clearly defined scope, and can complete most projects efficiently. The other provides extensive consultation, custom integrations, copywriting, and ongoing support.

Even if both businesses describe their offer as website development, they may be selling substantially different services.

Their costs, delivery processes, risks, and customer outcomes may differ.

Matching the lower price simply because another provider charges it could leave one business with insufficient margin. Charging significantly more without explaining the difference could make the offer difficult to evaluate.

Instead, investigate three things:

* **The offer:** What exactly is included, and what is excluded?
* **The economics:** What does it cost your business to deliver the work?
* **The buyer's decision:** What alternatives is the customer considering, and what matters when choosing between them?

Compare services that are genuinely comparable. A headline price alone rarely reveals the full scope, delivery quality, support, or commercial terms behind an offer.

Competitor research should help you understand the market, not dictate your price.

## 2. Calculate What It Actually Costs to Deliver Your Service

Before deciding what to charge, establish the cost of fulfilling the work.

For a service business, relevant costs may include:

* Staff time spent delivering the service
* Payments to freelancers or subcontractors
* Materials, licences, or third-party tools used for a project
* Travel and other delivery expenses
* Payment processing fees
* Rework and additional effort caused by the scope of the engagement

The appropriate classification depends on the business. Some costs change with each project, while others remain relatively stable over a period.

You also need to account for the wider costs of operating the business, such as administration, rent, software subscriptions, insurance, and management time.

Suppose a consultant estimates that a project requires 20 hours of work. If the actual delivery repeatedly takes 32 hours, the original estimate understates the resources required.

The quoted price may appear profitable on paper while the real return is much lower.

**What to investigate:**

1. How much time does the service actually require?
2. Which direct costs are incurred for each engagement?
3. What additional work regularly falls outside the original scope?
4. Which operating expenses must the business cover?
5. How much capacity does the service consume?

Use actual delivery records where possible, rather than relying exclusively on estimates.

The US Small Business Administration's break-even guidance explains why businesses need to account for fixed costs, variable costs, and the contribution generated by each sale when evaluating pricing decisions. The precise calculations should be adapted to the business's actual cost structure.

## 3. Understand the Difference Between Markup and Margin

This distinction matters because confusing the two can result in prices that are lower than intended.

Imagine that delivering a service costs **US$100 (₦135,000)**.

If you add a 30% markup, the calculation is:

US$100 × 1.30 = **US$130 (₦175,500)**.

The resulting contribution before other business expenses is **US$30 (₦40,500)**.

But that contribution represents approximately 23.1% of the selling price, not 30%.

The reason is that markup is calculated relative to cost, while margin is calculated relative to selling price.

If you want a 30% gross margin on a service with a direct delivery cost of US$100 (₦135,000), the calculation is different:

**Price = Direct cost ÷ (1 − Target gross margin)**

Therefore:

US$100 ÷ (1 − 0.30) = approximately **US$142.86 (₦192,861)**.

At that price, the difference between the selling price and the direct cost is approximately US$42.86 (₦57,861), which is 30% of the selling price.

*These figures are illustrative. They assume the stated direct cost is complete and do not mean that a 30% margin is appropriate for every business.*

More importantly, gross margin is not the same as net profit margin. The business still needs to cover relevant operating expenses and other applicable costs.

Use the margin you actually need as a planning input, not a percentage copied from another company.

## 4. Consider What the Customer Is Really Buying

A service is rarely valuable to a customer simply because it requires a certain number of hours to deliver.

Customers may be paying for expertise, convenience, reduced risk, better execution, saved time, or an outcome they cannot easily achieve themselves.

Research published in the *Journal of Product & Brand Management* examined willingness to pay for professional services using two consumer surveys, with samples of 488 and 479 respondents. The research found that behavioural factors, including customers' confidence in their own ability and their perceptions of the service provider's outcome, were relevant to willingness to pay.

The study does not establish what every customer will pay today. It does, however, support an important principle: **the customer's assessment of the service matters alongside its financial price.**

Consider a business that offers CRM implementation.

One provider may describe the offer as setting up a CRM platform. Another may explain how the work will help the client organise inquiries, assign follow-up responsibility, and track opportunities that might otherwise be overlooked.

The second description connects the work to a business problem. That can help the buyer understand why the service may be useful.

But better positioning does not automatically justify any price. The provider still needs to demonstrate credible capabilities, define the scope, and explain what the customer can reasonably expect.

To assess customer value, investigate:

* What problem is the customer trying to solve?
* What happens if the problem remains unresolved?
* What alternatives can the customer realistically choose?
* What does the customer expect the service to improve?
* How much uncertainty or risk remains after considering your offer?
* What evidence supports the outcome you describe?

Do not invent financial benefits to justify a higher price. If you cannot demonstrate a specific financial return, explain the service's scope, purpose, and realistic benefits without promising an outcome you cannot substantiate.

## 5. Test Your Price Against the Market

A price can cover your costs and still fail commercially if customers do not see enough value in the offer or if suitable alternatives are more attractive.

This is why pricing requires market evidence as well as financial calculations.

Start with conversations with qualified prospects and existing customers. Ask what they are trying to achieve, which alternatives they have considered, what matters most in their decision, and what concerns they have about your offer.

Pay attention to actual behaviour, not just compliments or hypothetical answers.

Useful evidence includes:

* Which offers receive serious consideration?
* How often do qualified prospects object to the price?
* What reasons do prospects give for declining?
* Which alternatives do they compare with your offer?
* Do customers understand the difference between your service and lower-priced alternatives?
* How do acceptance rates differ across relevant customer groups or offers?

A lost sale does not automatically mean the price is too high. The prospect may not understand the offer, may not trust the provider, may have a different priority, or may not be an appropriate customer.

Likewise, a high acceptance rate does not prove that the price is optimal. You may be charging less than customers would reasonably accept, or attracting work that is not profitable to deliver.

Interpret pricing evidence alongside the full sales process and the economics of the service.

## 6. Be Careful with Discounts

Discounting can help win business, but it should be treated as a commercial decision rather than an automatic response to resistance.

Suppose a service sells for **US$200 (₦270,000)** and has a direct delivery cost of **US$120 (₦162,000)**.

Before other expenses, the contribution from the sale is:

US$200 − US$120 = **US$80 (₦108,000)**.

Now suppose the business reduces the price by 10%, to **US$180 (₦243,000)**, while the delivery cost remains US$120 (₦162,000).

The contribution becomes:

US$180 − US$120 = **US$60 (₦81,000)**.

The price has fallen by 10%, but the contribution per sale has fallen by 25%.

{{chart:discount}}

To generate the same total contribution as before, the business would need to complete more sales.

At the original price, five sales generate **US$400 (₦540,000)** in contribution.

At the discounted price, generating that same contribution requires approximately 6.67 sales. In practical terms, the business would need seven sales to exceed the original contribution from five sales.

*This comparison assumes the delivery cost remains constant per sale and excludes other operating expenses. It is an illustration, not a forecast.*

The commercial implication is straightforward: a discount may require additional sales and delivery capacity just to recover the contribution given up.

Before discounting, ask:

* Is the prospect objecting to the price or to the value they perceive?
* Can the scope be adjusted to fit the available budget?
* Would a different package better match the customer's needs?
* Is the discount tied to a legitimate commercial condition?
* Will the sale still contribute enough to cover the business's costs?
* Can the business deliver the additional volume without reducing quality?

Sometimes the right response is to revise the scope rather than reduce the price for the same amount of work.

If the requested price makes the engagement commercially unviable, declining the work may be more sensible than accepting it at a loss.

## 7. Define the Scope Before You Quote

Unclear scope can undermine even a well-calculated price.

A business may quote for a specific deliverable, only to discover that the customer expects additional meetings, revisions, integrations, reporting, or ongoing support.

If these expectations are not addressed, the provider may absorb the extra work or face a difficult conversation about additional charges.

Before issuing a quote, clarify:

* The work to be completed
* The deliverables the customer will receive
* The information or access the customer must provide
* The expected timeline and dependencies
* The number of revisions or changes included
* The support provided after delivery
* The conditions that require additional fees

This is especially important for services where the work can expand as new requirements emerge.

Clear scope protects both parties. The customer knows what is being purchased, and the provider has a more reliable basis for estimating costs and delivery capacity.

A transparent proposal also makes price comparisons more meaningful because customers can evaluate what each provider is actually offering.

## 8. A Practical Framework for Setting Your Price

Use this sequence when pricing a new service or reviewing an existing one.

**Step 1: Define the offer.**

Specify the problem the service addresses, the work involved, the deliverables, and the boundaries of the engagement.

**Step 2: Estimate the full delivery cost.**

Include realistic labour, third-party expenses, materials, and other costs associated with fulfilling the work. Use historical delivery records where available.

**Step 3: Establish the financial requirement.**

Determine the contribution the service needs to generate and how it supports the business's wider operating costs and profit objectives.

**Step 4: Review comparable market alternatives.**

Compare the scope, expertise, delivery model, support, and commercial terms of relevant alternatives. Avoid treating a competitor's advertised price as proof of what your business should charge.

**Step 5: Assess customer value and buying behaviour.**

Investigate the customer's problem, desired outcome, alternatives, concerns, and reasons for choosing or rejecting the offer.

**Step 6: Set a proposed price and test the assumptions.**

Check whether the price covers the relevant costs, contributes toward the financial objective, and is defensible given the offer and market evidence.

**Step 7: Track what happens after the price is introduced.**

Record quotes, acceptance rates, reasons for lost opportunities, discounts, actual delivery hours, and the contribution generated by completed work.

Review these results over time. A price should not be judged only by whether it wins a sale; it should also be judged by the commercial quality of the work it attracts.

## When Should You Raise Your Prices?

A price review may be appropriate when delivery costs increase, the scope of work expands, the business's capabilities change, or market evidence suggests the current offer and price no longer fit.

However, a price increase is not always the right answer.

If the service is unprofitable because it takes too long to deliver, improving the process may be necessary. If prospects consistently misunderstand the offer, clearer positioning may help. If customers require a smaller engagement, a more appropriate package may be the answer.

If the business cannot explain its costs or contribution, better measurement should come before a major pricing decision.

The question is not simply whether your prices are high enough.

It is whether the offer, price, delivery model, and customer expectations work together commercially.

## Price for a Business You Can Sustain

Pricing is not a one-time guess. It is a decision that should be informed by delivery costs, financial objectives, customer value, market alternatives, and actual buying behaviour.

When those factors are considered together, a business is better equipped to avoid unnecessary discounting, recognise unprofitable work, and make deliberate decisions about which services and customers to pursue.

At Arktera Systems, the right intervention depends on the business problem. A pricing challenge may call for clearer offers, better-defined scope, improved delivery processes, stronger positioning, or more reliable financial measurement. The solution should follow the evidence rather than assume that every business needs to charge more.

If you are unsure whether your current offers, sales processes, and delivery model support your business goals, a **Free Business Growth Assessment** can be a starting point for discussing the challenges and identifying what may need closer investigation.

It is a preliminary assessment, not a full financial audit or a guarantee of a particular result.
`;
