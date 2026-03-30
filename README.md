# PLG Growth Case Study: Docflow

Full-funnel PLG execution for a fictional HIPAA-compliant healthcare workflow platform. Working prototypes with inline strategy annotations - not slide decks, not wireframes. Every design decision maps to a conversion principle, a competitive insight, or a specific PLG pattern.

North-star KPI: **Revenue per Visitor** (conversion rate x ACV x PLG-driven expansion).

---

## The Problem

Healthcare runs on documents, but the tools that handle them are fragmented. Cloud fax vendors stop at delivery. Communication platforms stop at the inbox. Document processing tools extract data but don't act on it. The result: a patchwork of 3-5 single-purpose tools with no unified workflow, no clear ownership at each step, and no single audit trail.

After mapping six direct competitors (Consensus Cloud/eFax, Documo, Retarus, Updox, Klara, Doximity), one gap stood out: **no platform combines cloud fax, AI document classification, workflow orchestration, secure messaging, e-signature, and forms in one system.** Every competitor owns a slice. None own the pipeline from document receipt to action completion.

That gap is the strategic foundation for everything in this repo.

---

## The Solution

**Docflow** is a unified healthcare workflow orchestration platform. The core thesis: documents in healthcare are not static files - they are the starting point of workflows. The platform turns document receipt into automated, accountable action across four layers:

1. **Intake** - Fax, forms, secure upload, email
2. **Intelligence** - AI classification, data extraction, OCR
3. **Orchestration** - Rules engine, routing, ownership assignment
4. **Action** - E-signature, secure messaging, SMS, AI agents

---

## Artifacts

### 1. Marketing Website (Visit to Signup)

**[Live demo](https://joleneann.github.io/healthcare-plg/)**

A 13-section conversion page built on CXL landing page optimization principles and AmpleMarket's structural patterns. The information hierarchy follows a deliberate rhythm: feature section, then testimonial as "proof break," then feature section - so every claim is validated before the next one is introduced.

**Section architecture and the PLG rationale behind each:**

| Section | What It Does | Why It Exists |
|---|---|---|
| **Hero** | Centered headline + dual CTAs (free trial + demo request) + trust signals (G2 rating, HIPAA/SOC 2 badges) + product preview | CXL: first screenful must independently grab attention, reinforce motivation, and provide a conversion path. 100% of visitors see this - treat it as a standalone mini-page |
| **Logo bar** | Scrolling marquee of healthcare customer logos (HCA, CVS, McKesson, J&J, AbbVie, Alliance, AIC, Planned Parenthood) | Social proof acceleration - reduces emotional friction before feature content begins |
| **Testimonial #1** | Quote from VP Operations about replacing three systems | CXL proof break: validates hero claims with social proof before diving into features |
| **Platform capabilities** | Tabbed accordion (eFax / Document Processing / Secure Comms / eSign) with live UI previews per tab | AmpleMarket-inspired pattern: vertical stacked tabs on left, content panel on right. Progressive disclosure reduces cognitive load from 4 products to 1 active view. Each tab has an outcome headline, not a feature list |
| **Testimonial #2** | Quote from Medical Director about document routing | Validates the platform capabilities just shown |
| **Workflow pipeline** | Animated horizontal flow: Received, Classified, Routed, Actioned - with connecting lines and traveling dot animation | The core differentiator visualization. Shows the unified flow that no competitor offers. Echoes the "from received to resolved" messaging |
| **Comparison grid** | Capability checklist: Cloud Fax Tools vs. Communication Platforms vs. Document Processing vs. Docflow | Answers "why not just use what we already have?" without naming specific competitors. Docflow is the only column with every checkmark |
| **G2 social proof** | #25 on G2 ("Salesforce is #61"), 4.8/5 from 7,253 reviews, metric cards (10M+ docs/month, 52s delivery, 100% HIPAA audit pass) | Concrete proof, not vague claims. The Salesforce comparison reframes scale expectations |
| **Role-based value props** | 4 cards: Operations, Compliance, IT & Integration, Front Desk - each with role-specific headline, description, and key features | Segment-specific messaging so each persona sees themselves in the product. Maps to JD responsibility: "define and optimize journeys by segment" |
| **Testimonial #3** | Quote from Director of Digital Transformation | Final trust reinforcement before conversion ask |
| **Final CTA** | Dark block with display headline, dual CTAs, trust badges | AmpleMarket pattern: visual contrast creates "new page" feel. Mirrors hero CTAs for consistency (CXL: reduces cognitive friction) |

**CTA strategy:** Only 2 hard-sell sections (hero + final CTA). Three testimonial breaks provide soft proof throughout. Middle sections build understanding without pushing. Per CXL: every section earns the next scroll.

---

### 2. Onboarding Flow (Signup to Activation)

**[Live demo](https://joleneann.github.io/healthcare-plg/signup-flow.html)**

A 6-screen self-serve activation journey. Each screen has a "Strategy Notes" toggle that reveals the PLG rationale behind every design decision. The flow demonstrates sandbox-first activation, post-value monetization, and JTBD-driven routing.

**Screen-by-screen breakdown:**

| Screen | Name | What Happens | PLG Principle |
|---|---|---|---|
| **1** | Choose | User selects a problem (document delivery, processing, communication, signatures). Selection routes to the matching product module | **Jobs-to-be-Done routing.** Reduces cognitive load from 4 products to 1 recommended path. If the user completed segmentation, we auto-recommend based on industry + role (25-40% higher first-action completion per Chameleon/Appcues research) |
| **2** | Try | Persistent product sidebar with sandbox placeholder + demo video per module. Users can switch between products without leaving the page | **Sandbox-first activation.** Users see and interact with the product before giving any personal information. Two engagement modes: hands-on sandbox or passive video. The sidebar enables cross-sell discovery |
| **3** | Sign Up | Post-value email gate with Google/Microsoft SSO buttons + email/password form. HIPAA, SOC 2, and G2 trust badges | **Post-value email gate.** Email is asked after sandbox interaction, not before. Conversion is 3x higher after the user has experienced value. SSO buttons serve dual purpose: convenience + enterprise detection (a @largeclinic.org Microsoft login is a PQL signal) |
| **4** | Profile | Progressive 5-question segmentation: industry, role, team size, title, attribution. All questions visible on one screen with pill-style selection | **Progressive profiling.** Multi-step cascading flows convert 86% higher (HubSpot) and reduce completion time 20-40% (NNGroup). Industry + role power module recommendation. Company size + title power PQL scoring. Attribution closes the marketing ROI loop |
| **5** | Dashboard | Personalized next steps (segment-driven), Docflow Products sidebar with active/tried badges, social proof ("Teams like yours"), work-email CTA for sandbox users | **Activation loop + expansion.** Next steps create the second activation event. Product sidebar shows depth - unexplored modules create cross-sell desire. Trial countdown creates urgency without a hard paywall |

---

## Stack

Single HTML files, all styles inline. Tailwind CSS via CDN. Google Fonts (Plus Jakarta Sans, Inter, JetBrains Mono). No build step, no framework, no proprietary CDN dependencies.

---

> **Note:** Docflow is a fictional brand created for this case study. The strategic thinking, competitive research, funnel architecture, and UX patterns are the deliverable - the brand is the vehicle.
