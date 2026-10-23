import { FunnelChart } from "@/components/insights/charts/funnel-chart";

export const charts = {
  funnel: (
    <FunnelChart
      title="Where the 100 inquiries actually went"
      unitLabel=""
      stages={[
        { label: "Inquiries received in the month", value: 100 },
        { label: "Became qualified sales opportunities", value: 60 },
        { label: "Became paying clients", value: 15 },
      ]}
      caption="Illustrative figures, not industry benchmarks — the inquiry-to-client conversion rate here is 15%."
    />
  ),
};

export const content = `
When a business struggles to generate enough sales, the instinct is often to do more marketing.

Increase the advertising budget. Publish more content. Improve search visibility. Try another platform. Hire someone to generate leads.

Sometimes, these are the right decisions. But they can also be expensive responses to a problem that has not been properly identified.

What if your marketing attracts qualified prospects, but your website fails to convince them to make an inquiry? What if inquiries are coming in, but your team responds too slowly? Or what if sales are happening, but the cost of acquiring and serving clients leaves too little profit?

Each situation requires a different response.

Before investing more in marketing, examine how your business turns attention into revenue, where opportunities may be getting lost, and which problem deserves attention first.

## Why More Marketing May Not Solve the Problem

Marketing is only one part of the process through which a business generates revenue.

A prospect must discover your business, understand your offer, consider you a credible option, take the next step, and eventually decide to buy. After the sale, your pricing, delivery costs, ability to retain clients, and capacity to generate referrals influence the commercial value of that relationship.

A weakness anywhere along this path can limit the return from your wider efforts.

Imagine a consultancy investing in advertising to attract more prospects. The campaign generates inquiries, but the team takes several days to respond. Some prospects move on before a conversation even begins.

Increasing the advertising budget may generate more inquiries, but it will not automatically resolve the response problem. It could simply send more prospects into a process that is already losing opportunities.

The first task is not to assume that marketing is failing. It is to establish what happens after the money is spent.

## What the Research Tells Us

The challenge of generating sales is not limited to one country or industry.

The Federal Reserve Banks' 2026 Report on Employer Firms identified reaching customers and growing sales as the most commonly reported operational challenge among surveyed US small employer firms. Rising costs were the most commonly reported financial challenge.

Separately, Intuit's 2025 Small Business Advertising Trends Report surveyed 1,006 business owners and marketing leaders. Only 25% said they could always measure the return on their advertising spending, while 47% said they could usually measure it.

These findings do not mean businesses should stop advertising, nor do they prove that poor measurement causes weak sales. They do, however, highlight two important questions:

* Are your marketing efforts generating the commercial results your business needs?
* Can you identify which activities contribute to those results?

If you cannot answer these questions with reasonable confidence, increasing spending before investigating performance can make it harder to distinguish a demand problem from a conversion or profitability problem.

## The Six Areas to Examine Before Increasing Your Budget

### 1. Demand: Are You Reaching the Right Prospects?

Marketing activity is not the same as qualified demand.

A campaign may generate impressions, website visits, clicks, or social media engagement without reaching enough people who genuinely need your services, can afford them, or are ready to consider buying.

Start by asking:

* Who is the campaign intended to reach?
* Are the inquiries coming from prospects who fit your target client profile?
* Do prospects understand what you offer?
* Which channels are producing suitable opportunities rather than just activity?

For a dental clinic, a large number of inquiries may have limited value if most are seeking services the clinic does not provide. For a B2B consultancy, website traffic may look encouraging but remain commercially weak if visitors are not decision-makers or potential buyers.

**What to examine:** Qualified inquiries by channel, the proportion of inquiries that fit your target client profile, and the cost of generating those qualified inquiries.

If you are not attracting enough suitable prospects, demand generation may genuinely need improvement. But confirm that the problem is the volume or quality of demand before assuming the budget is too small.

### 2. Trust: Are Prospects Taking the Next Step?

People may visit your website, view your offer, or engage with your content without contacting your business.

The problem may be that prospects do not understand what makes your service relevant to them. They may have unanswered concerns about price, quality, experience, or suitability. They may also encounter a confusing website, an unclear call to action, or an unnecessarily difficult booking or inquiry process.

Ask:

* Do visitors understand what you offer and who it is for?
* Is the next step clear?
* Is there enough relevant information to help them make a decision?
* Can they contact you easily on the devices they use?
* Are meaningful actions being measured accurately?

**What to examine:** The proportion of relevant website visitors who submit an inquiry, book a consultation, request a quote, or complete another meaningful action.

Google Analytics supports tracking important actions, such as lead-form submissions, as key events. This can help businesses move beyond counting visits to measuring actions that matter to their objectives.

However, a low website conversion rate does not automatically prove that the website design is the problem. Traffic quality, offer relevance, pricing, and market conditions may also influence results.

**The priority is to identify what prevents suitable prospects from taking the next step, rather than redesigning the website or increasing traffic by default.**

### 3. Conversion: Are Inquiries Turning into Clients?

Generating an inquiry is not the same as winning a client.

Once someone contacts your business, the quality of the subsequent process matters. Prospects may receive delayed responses, inconsistent follow-up, unclear explanations, or no obvious next step.

Some may be unsuitable prospects. Others may be interested but need more information before making a decision.

Review what happens after each inquiry:

* How long does it take to respond?
* Is responsibility for responding clearly assigned?
* Are inquiries qualified consistently?
* Does each suitable prospect have a clear next step?
* Are follow-up activities recorded and completed?
* Do you know why opportunities are won or lost?

**What to examine:** Response time, the proportion of inquiries successfully contacted, the proportion of qualified inquiries that progress to a booking or sales conversation, and the proportion that become paying clients.

These measures help distinguish between a shortage of inquiries and a problem converting existing opportunities.

If a business receives enough qualified inquiries but few become sales, buying more leads may be premature. The business should first investigate the reasons for the low conversion rate.

That does not mean every lost sale can be recovered. Some prospects will never be a suitable fit, and others will choose a competitor for legitimate reasons. The objective is to identify avoidable losses, not to assume every lost opportunity was recoverable.

### 4. Delivery: Are Your Sales Producing Healthy Margins?

A business can increase sales without improving its financial position.

Consider a service provider that attracts more clients by offering substantial discounts. Sales volume rises, but the additional delivery work, staff time, software, subcontracting, and other costs consume much of the additional revenue.

The same problem can arise when a business acquires clients at a high cost but earns too little from each engagement to justify that expense.

Investigate:

* How much revenue does a typical engagement generate?
* What direct costs are required to deliver it?
* How much does it cost to acquire a client, where this can be measured reliably?
* How much staff time does each engagement require?
* Which services or client groups are yielding the healthiest margins?
* Are capacity constraints or inefficient processes increasing delivery costs?

**What to examine:** Revenue per engagement, contribution margin, customer acquisition cost where it can be measured reliably, estimated versus actual delivery hours, and the resources required to deliver each service.

Be careful not to confuse revenue with profit or cash flow. They answer different questions. A sale may be recorded as revenue before payment is collected, and a high-revenue engagement may still be commercially unattractive if its costs are excessive.

If the real constraint is weak pricing or inefficient delivery, increasing marketing activity could bring in more work without solving the financial problem.

### 5. Retention: Are Clients Returning?

Winning a client is not necessarily the end of the commercial relationship.

Depending on the service and business model, clients may need ongoing support, periodic maintenance, additional engagements, follow-up appointments, or other services over time. If the relationship ends immediately after the first transaction, the business may be missing legitimate opportunities to serve those clients again.

Investigate:

* Do clients return when they have a relevant need?
* Is there a consistent process for post-service communication?
* Are clients satisfied with the experience they receive?
* Are follow-up responsibilities clearly assigned?
* Do you understand why clients return, discontinue service, or choose another provider?

**What to examine:** Repeat-purchase rate, returning-client revenue, retention or churn for recurring-service models, and feedback or follow-up completion rates where relevant.

The appropriate measure depends on the business. A subscription company may monitor churn monthly, while a specialist consultancy may evaluate repeat engagements over a longer period. A one-time service may have limited natural repeat-purchase potential.

The objective is not to force repeat purchases where they do not make sense. It is to understand whether the business is maintaining valuable client relationships and providing appropriate opportunities for continued service.

### 6. Referral: Are Satisfied Clients Generating New Opportunities?

Satisfied clients can become a source of new business when they recommend your services, introduce suitable prospects, or share their experiences with others.

But satisfaction does not automatically produce referrals. Clients may be happy with your work without thinking to recommend you, knowing how to do so, or recognizing when someone in their network needs your services.

Consider:

* Do satisfied clients recommend your business?
* Do you make it easy for clients to leave honest reviews or share feedback?
* Is there an appropriate process for requesting introductions or recommendations?
* Do professional relationships or partnerships generate qualified opportunities?
* Can you identify which new opportunities originate from referrals?

**What to examine:** The number of qualified referral inquiries, the proportion of new clients acquired through referrals, referral-to-client conversion, and revenue attributable to referral opportunities where tracking is practical.

Referral activity should be evaluated in context. Some service businesses depend heavily on personal recommendations, while others rely more on search, partnerships, outbound sales, or paid acquisition. A low referral rate is not automatically a problem if other channels are performing effectively.

The key is to determine whether referrals represent a realistic growth opportunity for your business and whether satisfied clients have a clear, appropriate way to recommend your services.

## A Simple Example: Where Might the Revenue Be Getting Lost?

Consider a hypothetical service business that receives 100 inquiries in a month.

Of those inquiries, 60 become qualified sales opportunities. Fifteen of those opportunities become paying clients.

Its inquiry-to-client conversion rate is therefore 15%.

{{chart:funnel}}

Now suppose the business investigates its records and discovers that some suitable prospects are not being contacted promptly, while others receive no consistent follow-up. The business decides to improve response handling and track the outcome over the following months.

The goal is to determine whether these changes improve conversion, not to assume they will.

For illustration, if the business eventually converts 18 of every 100 comparable inquiries, its inquiry-to-client conversion rate would rise from 15% to 18%, a three-percentage-point increase.

That is a relative increase of 20% in the conversion rate, but it is not automatically a 20% increase in revenue or profit. The financial result depends on customer value, delivery costs, capacity, and whether the inquiries are comparable in quality.

The example shows why measuring the existing process matters. Before paying for more inquiries, a business may learn something valuable by understanding what happens to the opportunities it already receives.

*These figures are illustrative, not industry benchmarks or a prediction of what your business should achieve.*

## How to Decide What to Fix First

Once you have examined the six areas, resist the temptation to fix everything at once.

For each suspected problem, consider four questions.

**1. How much commercial value could be affected?**

Estimate the revenue, costs, time, or opportunities associated with the problem. Use your own business data where possible.

**2. How strong is the evidence?**

Distinguish a measured problem from an assumption. If the data is incomplete, identify what you need to measure before making a larger investment.

**3. How practical is the intervention?**

Consider implementation costs, staff time, available resources, and operational capacity.

**4. How will you know whether the change worked?**

Choose a baseline measure and define what you will monitor after the change. Avoid relying on a single metric if it could improve while the wider business outcome worsens.

A useful starting point is to prioritize problems that have meaningful commercial consequences, reasonable evidence behind them, and a practical path to investigation or improvement.

The highest-priority problem is not always the easiest one to fix. But it should be a problem worth understanding before committing more resources.

## So, Should You Increase Your Marketing Budget?

Sometimes, yes.

If your business is reaching the right audience, converting suitable prospects effectively, delivering its services profitably, and measuring results with reasonable confidence, additional investment may be justified.

But if you do not know whether the main constraint is demand, trust, conversion, delivery, retention, or referrals, increasing spending is a decision made with incomplete information.

The better approach is to establish a baseline, examine the journey from marketing activity to commercial results, and investigate the most consequential gaps.

That gives you a stronger basis for deciding whether to spend more, improve an existing process, change your offer, strengthen follow-up, improve delivery efficiency, or address a problem elsewhere in the business.

## Find the Problem Before You Fund the Next Fix

Marketing is an important part of business growth, but it cannot compensate for every weakness in the wider revenue system.

The aim is not to reduce spending automatically or assume your marketing is the problem. It is to understand what your business needs before deciding where to invest next.

At Arktera Systems, we look at how demand, trust, conversion, delivery, retention, and referrals work together to influence commercial performance. We help service businesses examine their goals and challenges, identify where further investigation is needed, and determine which improvements may be appropriate to their operating realities.

**Start with a Free Business Growth Assessment.**

Use the assessment to discuss your business goals, explain the challenges you're facing, and explore where a closer examination of your revenue system may help you make better decisions about what to improve.

You don't need to arrive with a diagnosis. Start with the problem you're experiencing. The next step is to establish what is happening, what remains unclear, and whether further analysis is warranted.
`;
