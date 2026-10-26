# ARKTERA SYSTEMS

## Website Design and Technical Implementation Guide

**Purpose:** Guide the design and implementation of the Arktera Systems website.

**Primary responsibility:** Create a distinctive, professional, responsive, interactive, and maintainable website that communicates Arktera's business positioning clearly and supports its commercial objectives.

This document defines the brand identity, design principles, technical direction, creative boundaries, and implementation standards. It does not contain the website's copy.

---

# 1. Project Context

## What Arktera Systems Is

Arktera Systems is a revenue systems company that helps service businesses identify and fix the problems holding back revenue.

Arktera approaches business growth by examining how different parts of a business work together, identifying constraints that may be limiting performance, and determining which improvements deserve attention.

The company does not assume that every business needs more marketing, a new website, a CRM, automation, or a more aggressive sales process.

The business problem determines the appropriate solution.

The guiding principle is:

**The business comes first. The solution follows.**

## What the Website Must Achieve

Build a website that helps business owners:

* Understand what Arktera does and the business problems it addresses.
* Recognize potential constraints affecting revenue, profitability, conversion, retention, and operational efficiency.
* Understand Arktera's approach to business growth.
* Explore its revenue systems framework.
* Access useful business insights.
* Take appropriate next steps, particularly through the Free Business Growth Assessment.
* Develop confidence in Arktera through clarity, thoughtful presentation, and commercially relevant explanations.

The website must not feel like a generic marketing agency template or an unnecessarily complicated web application.

It should be a purpose-built business website with carefully selected interactive elements.

---

# 2. Source of Truth and Reference Materials

Before designing or writing implementation code, inspect the available project files and reference materials.

These may include:

* Approved Markdown files containing website copy.
* Website structure and content organization.
* Brand and design reference files.
* Logo files and logo concepts.
* Font files and typography references.
* Inspiration images, screenshots, and example websites.
* Technical instructions and implementation requirements.

## Authority of Each Source

Use the approved Markdown files as the source of truth for website copy and approved content structure.

Use the brand and design guide as the source of truth for brand colors, typography, visual principles, and creative boundaries.

Use the inspiration materials to understand the desired visual direction, layout possibilities, interactions, composition, and overall quality.

Use technical instructions to guide the implementation architecture, development process, and project constraints.

Inspiration materials are references, not templates to copy blindly. Extract the useful design principles and adapt them to Arktera's identity and objectives.

## When Information Is Missing or Conflicting

**Do not guess when a decision could materially affect the project.**

If you encounter:

* Conflicting instructions.
* Missing content.
* Unclear page structure.
* Inconsistent brand references.
* An ambiguous interaction requirement.
* A technical decision with significant consequences.
* A proposed design that appears to require changing approved copy.
* A feature that requires unavailable data, external services, credentials, or paid integrations.

Pause the affected work and ask a concise, specific question.

Explain the conflict, identify the available options where useful, and recommend a solution with a brief justification.

Do not silently rewrite approved content, invent business facts, or override an explicit instruction.

For minor implementation decisions that do not affect the brand, content, business objectives, or technical architecture, use sound professional judgment and continue.

If a referenced file is missing or inaccessible, report that clearly. Do not claim to have reviewed materials you cannot access.

---

# 3. Brand Personality

The website should communicate five qualities.

### Analytical

Arktera examines business performance, processes, relationships, and constraints.

Use clear information architecture, structured visual explanations, and purposeful diagrams.

### Commercially Aware

The website should connect business concepts to practical concerns such as revenue, profit, client acquisition, conversion, retention, costs, and operational efficiency.

### Modern

Use contemporary typography, polished layouts, thoughtful interactions, and restrained animation.

Avoid imitating generic SaaS dashboards or technology startup websites.

### Confident

Communicate competence through precision, clarity, and consistency.

Avoid unnecessary visual drama, exaggerated claims, and decorative complexity.

### Human

Make complex business ideas understandable and approachable.

The website should feel professional without becoming cold, intimidating, or excessively corporate.

---

# 4. Brand Colors

The following palette is approved for Arktera Systems.

Treat these values as the source of truth. Do not replace them with unrelated colors without approval.

## Core Brand Palette

| Name               | Hex       | Role                                                                      |
| ------------------ | --------- | ------------------------------------------------------------------------- |
| Arktera Navy       | `#02122B` | Primary brand color, dark-theme foundation, headings on light backgrounds |
| Arktera Near-White | `#FDFFFC` | Light-theme foundation and text on dark surfaces                          |
| Arktera Red        | `#F82929` | Signature brand accent                                                    |
| Slate Blue-Gray    | `#8FA3B8` | Supporting details and secondary emphasis                                 |

## Supporting Interface Palette

| Name                  | Hex       | Role                                                                               |
| --------------------- | --------- | ---------------------------------------------------------------------------------- |
| Soft Light Background | `#F3F5F8` | Alternate light sections and subtle surface separation                             |
| Dark Surface          | `#0B1B33` | Cards and raised surfaces in dark mode                                             |
| Darker Red            | `#B91F2A` | Red-based text and controls on light backgrounds where stronger contrast is needed |
| Soft Red              | `#FF6B6B` | Red-based highlights against dark surfaces                                         |

Additional neutral shades may be introduced for borders, separators, disabled states, and other interface needs. They must complement the approved palette.

## Color Usage

* Navy establishes the visual foundation.
* Near-white provides space, contrast, and readability.
* Red creates emphasis and brand recognition.
* Blue-gray supports hierarchy and secondary information.
* Supporting colors improve usability and accessibility.

Red should be distinctive without dominating every section.

Do not use the signature red indiscriminately for all buttons, links, headings, and diagrams.

Do not use color alone to communicate status, warnings, errors, or business problems.

## Light Theme

Use these as the primary starting values:

* Main background: `#FDFFFC`
* Alternate background: `#F3F5F8`
* Primary text: `#02122B`
* Primary brand surfaces: `#02122B`
* Supporting details: `#8FA3B8`
* Brand accent: `#F82929`
* Accessible red for text or controls on light backgrounds: `#B91F2A`

The light theme should feel spacious, clear, polished, and editorial.

## Dark Theme

Use these as the primary starting values:

* Main background: `#02122B`
* Raised surfaces: `#0B1B33`
* Primary text: `#FDFFFC`
* Supporting details: appropriately tested light blue-gray shades
* Brand accent: `#F82929`
* Softer red highlights: `#FF6B6B`

The dark theme should feel deliberate, refined, and focused.

Do not simply invert the light theme. Use theme-specific surface, text, and supporting colors where needed while preserving the same brand identity.

## Accessibility

Aim to meet WCAG AA contrast requirements:

* At least 4.5:1 for normal text.
* At least 3:1 for large text.
* At least 3:1 for relevant essential graphical elements and interface boundaries.

Test the actual color combinations used in the interface.

Pay particular attention to red buttons, small text, focus indicators, borders, muted labels, chart annotations, and disabled states.

If a combination fails, adjust the specific interface treatment using the approved supporting colors or propose a suitable alternative for approval.

---

# 5. Typography

The approved typography system is:

| Typeface | Purpose                          |
| -------- | -------------------------------- |
| Switzer  | Main headings                    |
| Satoshi  | Subheadings and card titles      |
| Inter    | Body text and interface elements |

## Switzer

Use for page titles, major section headings, hero headlines, and other high-priority statements.

## Satoshi

Use for subsection headings, card titles, supporting statements, and secondary headings.

## Inter

Use for paragraphs, articles, forms, navigation, buttons, labels, captions, and data-heavy interface elements.

## Typography Standards

Establish a consistent typographic hierarchy through size, weight, line height, spacing, and content width.

Use large headlines strategically. Avoid making every section oversized or visually loud.

Prioritize readability across desktop, tablet, and mobile.

Verify font availability, licensing, and webfont loading requirements before implementation. If the intended font files are unavailable, report the issue and recommend an appropriate fallback rather than silently substituting unrelated typefaces.

---

# 6. Creative Direction

Develop a distinctive visual identity that makes Arktera recognizable without compromising usability, clarity, performance, or commercial relevance.

Explore visual approaches such as:

* Editorial layouts.
* Structured grids and asymmetrical compositions.
* Purposeful negative space.
* Layered visual systems.
* Interactive diagrams.
* Data visualizations.
* Refined borders and surface treatments.
* Carefully controlled gradients.
* Responsive card compositions.
* Subtle motion and transitions.
* Interactive explanations of business concepts.

These are possibilities, not mandatory components.

Choose the visual approach that best serves each page.

Do not use every design trend at once.

Avoid generic consulting templates, random stock imagery, repetitive card grids, decorative dashboards, excessive glassmorphism, unnecessary gradients, and effects that make the website feel like a collection of unrelated designs.

The website should have a coherent visual identity rather than look like a template populated with different content.

---

# 7. Interaction and Animation Philosophy

The guiding principle is:

**Every prominent visual should explain something, demonstrate something, or help the visitor make a decision.**

The website should be meaningfully interactive, but it must not become complicated merely to demonstrate technical capability.

## Appropriate Interaction Opportunities

Explore opportunities for:

* Interactive revenue-system diagrams.
* Selectable explanations of business processes.
* Revenue opportunity calculators.
* Interactive client journey illustrations.
* Visual comparisons of business performance scenarios.
* Expandable explanations of potential revenue constraints.
* Subtle scroll-based reveals and section transitions.
* Responsive navigation and content exploration.
* Interactive elements that help visitors understand business concepts.

These are examples, not a requirement to build every feature.

Review the approved content and inspiration materials before deciding which interactions deserve implementation.

## Interaction Requirements

Every interaction must have a clear purpose.

* Make clickable and adjustable elements discoverable.
* Ensure interactions work with keyboard, touch, and pointer input.
* Do not rely on hover alone to reveal essential information.
* Keep important explanations accessible without requiring interaction wherever practical.
* Provide clear focus, active, loading, success, error, and disabled states where relevant.
* Respect reduced-motion preferences.
* Keep animations smooth and restrained.
* Avoid unnecessary animation libraries and continuous motion.
* Do not allow animation to interfere with reading, navigation, or form completion.

## Calculators and Business Visualizations

Calculations must use correct formulas.

Make assumptions and limitations visible.

Label projections as illustrative estimates rather than guaranteed outcomes.

Do not imply that a mathematical scenario proves that a particular business can achieve the result.

When showing potential business constraints, distinguish an observed symptom from a confirmed diagnosis.

---

# 8. Technical Stack

Use the following stack unless a material technical constraint makes a different approach necessary.

| Layer           | Preferred technology        |
| --------------- | --------------------------- |
| Framework       | Next.js with App Router     |
| Language        | TypeScript                  |
| UI              | React                       |
| Styling         | Tailwind CSS and custom CSS |
| Animation       | Motion                      |
| Content         | Markdown or MDX             |
| Version control | Git and GitHub              |
| Hosting         | Vercel                      |

Use compatible, stable releases and verify current installation instructions and framework compatibility before implementation.

Do not use an outdated tutorial or blindly copy deprecated APIs.

## Next.js and React

Use Next.js for routing, reusable layouts, metadata, rendering, and future expansion.

Use React components for interactive elements that genuinely require client-side behavior.

Prefer server-rendered or statically generated content when appropriate. Do not make every page a client-side application without a clear reason.

## Tailwind CSS and Custom CSS

Tailwind should support efficient layout development and responsive styling.

It must not restrict the visual direction.

Use custom CSS, CSS variables, advanced selectors, keyframes, gradients, transforms, and other appropriate CSS capabilities when they produce a better result.

Do not force every component into a generic set of utility-class patterns.

## Motion

Use Motion for suitable animations, transitions, interactive components, and coordinated movement.

Use native CSS for simpler effects where it is sufficient.

Do not introduce unnecessary animation dependencies or animate every element.

## Content Architecture

Initially, use Markdown or MDX files for approved page content and articles, provided the requirements remain manageable.

Keep content separate from presentation wherever practical.

Create a consistent content model for articles, including appropriate metadata.

Do not introduce a database or headless CMS until a clear requirement justifies it.

If a future content management requirement emerges, explain the options and trade-offs before making the architecture more complex.

## Version Control

Use Git and GitHub to track changes, preserve working versions, and support recovery.

Create meaningful commits at important checkpoints.

Do not overwrite the only working copy of a file without preserving a recoverable version.

---

# 9. URL Architecture

Public URLs must be clean, professional, readable, and independent of source filenames.

The site must not expose file extensions such as `.html`, `.htm`, or `.tsx` in its public URLs.

Examples of the intended structure:

* `/`
* `/about`
* `/revenue-systems`
* `/insights`
* `/insights/article-slug`
* `/contact`
* `/assessment`

These examples establish the URL style, not an instruction to invent additional pages.

## URL Rules

* Use lowercase paths.
* Separate words with hyphens.
* Avoid unnecessary nested paths.
* Use stable, descriptive slugs.
* Keep article URLs consistent.
* Generate appropriate canonical URLs and a sitemap.
* Avoid duplicate routes for the same content.
* Preserve existing public URLs if they have already been published or indexed.
* Configure redirects if an established URL must change.
* Do not expose implementation filenames in the public URL.

Use Next.js routing conventions to produce clean paths.

The underlying source files may use names such as `page.tsx`; those filenames must not become part of the public URL.

---

# 10. Responsive Design

Design for desktop, tablet, and mobile from the beginning.

Do not simply shrink a desktop composition to fit a smaller screen.

Reconsider layout, hierarchy, spacing, controls, and interactions for each viewport.

Requirements:

* Navigation must remain easy to use.
* Typography must remain readable.
* Forms must be comfortable to complete.
* Buttons and interactive targets must be touch-friendly.
* Diagrams must adapt to smaller screens without losing meaning.
* Calculators must remain usable on mobile.
* Decorative elements must not obstruct important content.
* Avoid horizontal overflow.
* Test both themes across representative viewport sizes.

The final design should feel intentional on mobile, not like a reduced desktop layout.

---

# 11. Accessibility

Accessibility is part of the design and implementation, not a final cosmetic check.

Use:

* Semantic HTML.
* Clear heading hierarchy.
* Keyboard navigation.
* Visible focus indicators.
* Accessible form labels and error messages.
* Meaningful alternative text.
* Appropriate accessible names for controls.
* Sufficient contrast.
* Reduced-motion support.
* Accessible menus and dialogs.
* Appropriate status announcements for dynamic updates.

Use color, text, icons, and structure together to communicate important information.

Do not sacrifice accessibility for visual effects.

---

# 12. Performance and Technical Quality

The website must be visually sophisticated without becoming unnecessarily heavy.

Prioritize:

* Optimized image formats and dimensions.
* Appropriate font loading.
* Minimal unnecessary client-side JavaScript.
* Efficient rendering.
* Lazy loading where appropriate.
* Smooth scrolling and interaction.
* Avoiding layout shifts.
* Sensible use of animation.
* Appropriate caching and rendering strategies.
* Fast access to the main page content.
* Performance on ordinary mobile devices and slower connections.

Avoid oversized background videos, unnecessary third-party scripts, excessive dependencies, and large animations that do not contribute meaningful value.

Verify production performance rather than relying only on a local development preview.

---

# 13. SEO and Discoverability

Implement a sound technical foundation for search visibility.

Include:

* Appropriate page titles and meta descriptions.
* Semantic page structure.
* Canonical URLs where appropriate.
* A valid sitemap.
* A sensible robots configuration.
* Descriptive article slugs.
* Appropriate social sharing metadata.
* Internal links between relevant pages and insights.
* Structured data only where accurate and applicable.

Do not invent business details, reviews, ratings, testimonials, or structured-data claims.

SEO implementation must preserve the approved content and brand positioning.

---

# 14. Forms and External Integrations

Forms must be treated as functional business systems, not merely visual components.

Design for:

* Clear labels.
* Appropriate required and optional fields.
* Input validation.
* Useful error messages.
* Accessible success states.
* Protection against spam and abusive submissions.
* Secure handling of submitted information.
* Appropriate storage and notification.
* Privacy and data-retention considerations.

Do not assume that a front-end form alone delivers submissions to Arktera.

Before implementing a form, establish how its data will be received, stored, reviewed, and protected.

Do not invent API keys, credentials, service accounts, booking integrations, or backend capabilities.

If a feature requires an external service, paid plan, API, or additional configuration, identify the dependency and ask for clarification when needed.

Avoid introducing databases, authentication, or complex backend infrastructure without a clear business requirement.

---

# 15. Light and Dark Themes

Both light and dark themes must be considered throughout the design process.

Use the approved brand palette with appropriate theme-specific surface, text, and accent treatments.

If a theme switcher is implemented:

* Make it easy to find and use.
* Ensure it updates the complete interface consistently.
* Maintain readable text and accessible controls.
* Avoid abrupt flashes or jarring transitions.
* Respect the visitor's preference where appropriate.
* Define deliberate first-visit behavior.

Test the entire website in both themes, including:

* Navigation.
* Hero sections.
* Cards.
* Diagrams.
* Calculators.
* Articles.
* Forms.
* Buttons.
* Focus indicators.
* Footer.
* Loading and error states.

Do not approve the theme system after testing only the homepage hero.

---

# 16. Preserve Content and Business Integrity

The approved Markdown files and project references define what Arktera communicates.

Do not rewrite, shorten, expand, correct, or replace approved copy without permission.

Do not invent:

* Testimonials.
* Client logos.
* Case studies.
* Business results.
* Certifications.
* Credentials.
* Client success statistics.
* Unsupported performance claims.

Do not turn Arktera into a generic marketing agency or a software company simply because the design contains interactive tools.

Do not force every business problem into a marketing funnel.

Some business constraints may relate to demand, trust, conversion, delivery, retention, referrals, pricing, profitability, or operations. Others may require further investigation before an appropriate solution can be identified.

The design should communicate that flexibility without making unsupported claims.

If approved content appears to conflict with a design requirement, pause and ask rather than changing the content silently.

---

# 17. Creative Freedom

Claude is encouraged to make thoughtful design decisions and propose original solutions.

You have creative freedom over:

* Layouts and compositions.
* Visual hierarchy.
* Section transitions.
* Interactive diagrams.
* Supporting graphics.
* Animation and motion.
* Responsive arrangements.
* Custom CSS effects.
* Interactive explanations.
* Component design.
* Ways to make complex business concepts easier to understand.

Do not interpret this guide as a rigid template.

The objective is not to make every page follow the same layout. The objective is to create a coherent brand experience in which each page uses the presentation best suited to its purpose.

However, creative freedom does not authorize changes to approved copy, brand colors, page structure, business claims, or major technical decisions.

If a proposed creative idea would require changing one of those elements, ask for approval first.

---

# 18. Controlled Implementation Process

Do not attempt to generate the entire website in one unreviewed operation.

Work in clearly defined phases.

For each phase:

1. Inspect the relevant project files and requirements.
2. Identify missing information or conflicts that need clarification.
3. State the intended scope and expected outcome.
4. Implement only the agreed scope.
5. Review the result against the design guide and reference materials.
6. Test relevant responsive layouts, interactions, and accessibility.
7. Run appropriate technical checks.
8. Summarize what was completed, what remains, and any known limitations.
9. Wait for review and approval before proceeding to the next major phase.

Keep changes organized and recoverable.

Do not silently expand the scope of a phase.

If an important dependency blocks progress, explain it before building workarounds that could create future maintenance problems.

---

# 19. Definition of Done

The website should be considered ready for review only when the relevant implementation phase meets its requirements.

Evaluate:

### Brand fidelity

The approved colors, typography, and visual identity are applied consistently.

### Visual quality

The design feels polished, intentional, distinctive, and coherent.

### Content fidelity

Approved copy and structure are preserved.

### Commercial clarity

Visitors can understand Arktera's purpose and identify appropriate next steps.

### Interaction quality

Interactive elements work correctly and genuinely improve understanding or usability.

### Responsiveness

The experience works across representative desktop, tablet, and mobile layouts.

### Accessibility

Content, navigation, controls, and interactions are usable through supported input methods and have appropriate contrast.

### Performance

Pages load efficiently and interactions remain responsive.

### Technical integrity

Routes, links, forms, and required integrations behave correctly.

### Maintainability

The project uses a clear component structure, organized design tokens, consistent content models, and recoverable version control.

### Deployment readiness

The production build succeeds, critical routes work, and important functionality has been tested.

Do not claim a feature is complete if it has only been visually mocked up.

Distinguish between implemented, tested, configured, and still requiring external setup.

---

# 20. Final Instructions

Before beginning implementation, inspect the available Markdown files, design references, inspiration materials, and relevant project instructions.

Use them together to understand what Arktera is building and the experience it intends to create.

Follow the approved brand palette and typography.

Use the specified technical stack unless a material constraint justifies an alternative.

Create a distinctive, responsive website with purposeful interactivity and refined animations.

Preserve approved copy and content structure.

Use clean public URLs without file extensions.

Prioritize maintainability, accessibility, performance, and commercial usefulness.

Ask concise questions whenever important information is missing, instructions conflict, or a decision could materially change the project's direction.

Use professional judgment for minor implementation details that do not require approval.

**Be creative in presentation. Be precise about the business. Build deliberately, test thoroughly, and never silently override the approved direction.**
