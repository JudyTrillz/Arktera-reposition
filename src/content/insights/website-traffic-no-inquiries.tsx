import { ComparisonBars } from "@/components/insights/charts/comparison-bars";

export const charts = {
  comparison: (
    <ComparisonBars
      title="Visitor-to-inquiry rate, same 1,500 visits"
      items={[
        { label: "Inquiries today", value: 0.8, display: "0.8%", sublabel: "12 inquiries" },
        {
          label: "If the conversion problem were fixed",
          value: 1.2,
          display: "1.2%",
          sublabel: "18 inquiries",
          accent: true,
        },
      ]}
      caption="Illustrative figures, not a prediction — a 0.4 percentage-point rise is a 50% relative improvement, but not automatically a 50% revenue increase."
    />
  ),
};

export const content = `
Your website is getting visitors. Your analytics show people arriving from search engines, social media, advertising, or other sources.

But the inquiries aren't coming in.

Few people complete your contact form. Consultation bookings remain low. Quote requests are inconsistent. And despite investing time or money into attracting visitors, your website produces little evidence of new business opportunities.

The obvious response is to get more traffic.

But what if the problem isn't the number of people visiting your website? What if the right people are arriving but cannot find a compelling reason to contact you, don't trust what they see, or encounter unnecessary friction when trying to take the next step?

Before investing in more traffic or commissioning a website redesign, investigate how your website turns visits into meaningful business opportunities.

## Traffic Is an Activity. Inquiries Are an Outcome.

Website traffic tells you that people are visiting. It doesn't tell you whether those visitors are suitable prospects, understand your offer, trust your business, or intend to buy.

Imagine a consultancy attracting 2,000 website visits a month but receiving very few qualified inquiries.

There are several possible explanations.

The website may attract people looking for free information rather than professional services. Its messaging may describe what the consultancy does without explaining why a prospective client should care. Visitors may be uncertain about the firm's experience or suitability. Alternatively, the website may make it difficult to book a consultation or submit an inquiry.

Each possibility points to a different investigation.

Buying more traffic before understanding the problem could increase website visits without producing a meaningful improvement in commercial results.

**The first question isn't how to attract more visitors. It's why the visitors you already attract aren't taking the next step.**

## What Should a Business Measure?

Google Analytics supports measuring meaningful actions, such as lead-form submissions, as key events. This allows a business to examine actions that matter to its objectives rather than relying exclusively on visitor counts.

For a service business, relevant actions might include:

* Submitting an inquiry form.
* Booking a consultation.
* Requesting a quote.
* Calling the business from the website, where call tracking is available.
* Starting a relevant conversation through an appropriate contact channel.

The right measurement depends on how customers engage with the business.

A dental clinic may care about appointment requests. A consultancy may measure qualified discovery-call bookings. A contractor may focus on quote requests that lead to suitable projects.

These actions are not equally valuable, and not every inquiry becomes a sale. Where practical, track what happens after the initial conversion so you can distinguish raw inquiries from qualified opportunities and paying clients.

Without that context, a website can appear successful because it generates many form submissions even when few of those inquiries are relevant.

## Five Reasons Your Website May Be Getting Traffic but Few Inquiries

### 1. You're Attracting the Wrong Visitors

A website can attract substantial traffic without reaching enough people who need the services it offers.

For example, a consultancy publishing general educational content may attract students, job seekers, and people looking for free templates. Those visitors may be valuable to its audience, but they may not be prospective clients.

Likewise, an advertising campaign can generate clicks from people who are curious about an offer but have little intention or ability to purchase it.

Before changing the website, examine where visitors come from and what they appear to be looking for.

Ask:

* Which channels and search queries bring visitors to the website?
* Are those visitors in the markets and locations the business serves?
* Does the landing page match the message or promise that attracted them?
* Which sources generate meaningful inquiries rather than just visits?
* Are you attracting people who need the service and are suitable prospects?

**What to examine:** Traffic by channel, landing-page performance, relevant search queries, location data where appropriate, and inquiry rates by traffic source.

If the wrong people are arriving, the solution may involve better targeting, more relevant content, changes to campaign messaging, or a clearer definition of the intended audience.

A website redesign may do little to solve a problem that begins before visitors reach the page.

### 2. Your Offer Is Unclear or Unconvincing

Visitors need to understand what your business offers, who it helps, and why the service may be relevant to them.

Yet some websites focus heavily on describing the company, listing services, or presenting technical capabilities without clearly explaining the value to the buyer.

Consider the difference between these messages:

*We provide integrated digital solutions for growing businesses.*

And:

*We help service businesses identify what's preventing website inquiries from turning into sales and determine what to improve next.*

The first describes a broad capability. The second communicates a more specific problem and the outcome the business is trying to support.

An offer can also be unclear because it tries to appeal to too many audiences at once, uses unfamiliar language, or asks visitors to take an action before they understand the value of doing so.

Ask:

* Can a first-time visitor understand what the business does?
* Is it clear who the service is intended for?
* Does the messaging address a problem the visitor recognizes?
* Is the value of the service explained in terms the buyer understands?
* Does the page give visitors enough information to judge whether the service is suitable?

**What to examine:** Landing-page messaging, headline clarity, alignment between the offer and the intended audience, and the actions visitors take after arriving on the page.

If the offer is unclear, improve the message before assuming you need a different website design.

### 3. Visitors Don't Have Enough Reason to Trust You

Even when visitors understand your offer, they may hesitate to make contact.

Hiring a service provider can involve financial risk, uncertainty about quality, and concerns about whether the provider can deliver what it promises.

A website that makes broad claims without supporting evidence may leave visitors with unanswered questions.

Depending on the business, useful trust signals may include:

* Relevant case studies.
* Specific examples of work completed.
* Genuine client testimonials or reviews.
* Clear explanations of the process.
* Relevant qualifications, experience, or credentials.
* Transparent descriptions of services and expectations.
* Answers to common questions about price, suitability, or delivery.

The right evidence depends on what the buyer needs to know. A professional consultancy may need to demonstrate relevant expertise and explain how engagements work. A local service provider may benefit from genuine customer reviews, clear service-area information, and evidence of completed work.

Trust signals should be accurate and verifiable. Invented testimonials, unsupported performance claims, or irrelevant badges can undermine credibility rather than strengthen it.

Ask:

* What concerns might prevent a suitable prospect from making contact?
* Does the website answer those concerns?
* Is the evidence relevant to the service being offered?
* Can visitors verify important claims?
* Are the business's limitations and expectations communicated clearly?

**What to examine:** The proof presented on important landing pages, the questions visitors ask before buying, and the points where suitable prospects disengage.

If visitors cannot establish whether your business is credible and suitable, sending more of them to the same page may not resolve the problem.

### 4. The Website Makes Taking Action Too Difficult

Sometimes, visitors understand the offer and trust the business but still fail to make an inquiry because the next step is inconvenient or confusing.

The contact button may be difficult to find. The form may ask for unnecessary information. The booking process may be unclear. A mobile visitor may struggle to use the page. Or a form may fail without making the problem obvious.

These issues can be easy to overlook because the website may appear to work perfectly when viewed by its owner.

Test the experience as a prospective client would.

Ask:

* Is the primary action easy to identify?
* Does the button explain what happens next?
* Can visitors complete the form comfortably on a mobile device?
* Are the requested details necessary at this stage?
* Do form errors explain how to correct the problem?
* Does the confirmation message tell visitors what happens after submission?
* Can someone contact the business through an alternative appropriate channel?

**What to examine:** Form-start and form-completion rates where measurable, errors during submission, mobile usability, booking completion, and whether the website reliably records successful inquiries.

Do not assume that every abandoned form is caused by poor design. Some visitors change their minds, discover the service isn't suitable, or decide they aren't ready to proceed. The goal is to identify avoidable friction and determine whether it materially affects the business.

The priority is to make the next step clear, relevant, and reasonably easy to complete.

### 5. You're Not Measuring the Right Things

Sometimes, the problem is not the website itself. It's that the business cannot reliably determine what visitors are doing.

A website may record page views but fail to track successful form submissions. A click on a contact button may be counted as a conversion even when the visitor never completes the inquiry. Alternatively, inquiries may arrive through calls, email, or messaging channels that are not connected to the website's reporting.

In these circumstances, decisions are being made using incomplete information.

Start by defining what counts as a meaningful conversion for your business.

Then verify that the relevant action is measured correctly. If submitting a contact form is important, test the entire process and confirm that successful submissions appear in your analytics. If prospects use several contact channels, establish a practical way to record those inquiries and connect them to subsequent outcomes where possible.

Ask:

* Are successful inquiries recorded accurately?
* Are clicks being confused with completed actions?
* Can you distinguish qualified inquiries from irrelevant submissions?
* Can you identify the source of an inquiry when the available data permits?
* Do you know which inquiries eventually become clients?

**What to examine:** Analytics event configuration, successful form submissions, conversion definitions, inquiry records, and the connection between marketing sources and business outcomes.

Accurate measurement will not automatically improve conversion. It gives you a more reliable basis for identifying the problem and deciding what to test next.

## A Practical Example: Finding the Weak Point

Consider a hypothetical professional services website that receives 1,500 visits in a month and generates 12 inquiries.

Its visitor-to-inquiry rate is:

**12 ÷ 1,500 × 100 = 0.8%**

That figure alone does not tell us whether the website is performing poorly.

We would need to understand the source and relevance of the traffic, the type of service being offered, the intended audience, the conversion action being measured, and how the website contributes to the wider sales process.

Suppose further investigation shows that a large share of visits comes from people searching for information unrelated to the firm's paid services.

In that case, improving audience targeting and aligning landing-page content with the intended buyer may deserve attention before redesigning the contact form.

Now imagine the opposite situation: the website attracts relevant visitors, its offer is clear, and visitors engage with the service pages, but many start an inquiry form and fail to complete it.

That would justify a closer examination of the form, the information requested, technical errors, and the mobile experience.

The same headline metric can point to very different problems.

For illustration, if the website later generated 18 inquiries from the same 1,500 visits, the visitor-to-inquiry rate would rise to 1.2%. That is an increase of 0.4 percentage points, or 50% relative to the original rate.

{{chart:comparison}}

However, this would not automatically mean revenue had increased by 50%. The commercial impact would depend on the quality of those inquiries, the proportion that became clients, the value of the engagements, and the cost of delivering the services.

*These figures are illustrative, not industry benchmarks or expected results.*

## How to Decide What to Fix First

Once you've identified possible problems, avoid changing the entire website at once.

Use a simple process.

**1. Establish the baseline.**

Record relevant traffic, inquiries, qualified inquiries, and subsequent sales where the data is available. Check that the measures are defined consistently.

**2. Identify the strongest evidence of a problem.**

Look for patterns in traffic sources, landing-page performance, user behaviour, inquiry records, or feedback from prospects. Treat unexplained gaps as questions to investigate, not proof of a particular cause.

**3. Choose a targeted intervention.**

Depending on the evidence, this might involve adjusting audience targeting, clarifying the offer, adding relevant proof, simplifying a form, improving mobile usability, or correcting analytics.

**4. Measure what happens next.**

Compare results against the baseline over a suitable period. Account for changes in traffic quality, seasonality, campaign mix, and other factors that could affect the outcome.

**5. Refine the approach.**

If the change doesn't improve the intended measure, investigate why. The original explanation may have been incomplete, the intervention may have been ineffective, or another constraint may be limiting results.

The goal is not to make the website look better by default. It is to improve its ability to help suitable prospects understand the offer, take the next step, and enter a sales process that can serve them effectively.

## When Should You Redesign the Website?

A redesign may be appropriate when the existing website has substantial usability limitations, cannot support the business's requirements, creates persistent technical problems, or no longer represents the offer accurately.

But redesigning the website should not be the automatic response to low inquiry volume.

If the main issue is irrelevant traffic, the business may need to improve targeting. If visitors do not understand the offer, messaging may need attention. If inquiries are lost after submission, the sales process may be the constraint. And if conversions are not being measured correctly, the first task is to fix the measurement system.

A new design cannot automatically solve problems that originate elsewhere.

**Identify the constraint first. Then decide whether the website needs a targeted improvement, a broader redesign, or no major change at all.**

## Turn Website Traffic into Better Business Decisions

A website should do more than attract visitors. It should help suitable prospects understand your offer, establish confidence in your business, and take an appropriate next step.

When inquiries are low, the answer is not always more traffic, more content, or a new design.

The important questions are whether the right people are visiting, whether the offer gives them a reason to act, whether the experience supports that action, and whether the business can measure what happens afterward.

At Arktera Systems, we examine how website performance connects with demand, trust, conversion, and the wider revenue system. The aim is to understand what may be limiting results before recommending the changes your business needs.

**Start with a Free Business Growth Assessment.**

Discuss your business goals, explain what you're experiencing, and explore where a closer examination may help you make better decisions about your website and wider revenue system.

You don't need to know the cause before you begin. Start with the problem. The next step is to establish what the evidence tells you and what deserves further investigation.
`;
