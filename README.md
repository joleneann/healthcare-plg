# Amplify: PLG Growth Execution Artifacts

Interactive prototypes built for the **Head of PLG Growth** role at [Amplify](https://www.amplify.xyz/). Two artifacts covering the full self-serve funnel: visit → signup → segment → activate → convert → expand.

---

## Artifact 1: Marketing Website Redesign

**[View Live →](https://joleneann.github.io/amplify-plg/)**

A conversion-optimized landing page designed to turn healthcare traffic into trial signups. Every section earns the next scroll, with two conversion points (hero + footer) and trust signals woven throughout.

### What it demonstrates

| JD Responsibility | How It Shows |
|---|---|
| Website entry points & landing pages | Inline email capture in hero (one field, one button: reduces friction vs. separate signup page) |
| Increase revenue per visitor | Every section has a conversion or trust-building job; CTA consistency between hero and footer reduces cognitive friction |
| Identify and remove friction | Progressive disclosure via accordion tabs, social proof placed immediately after every major claim |
| User journeys by segment | Role-based value props section (Operations, Compliance, IT, Front Desk) with tailored messaging per buyer |
| A/B and multivariate tests | Modular section architecture makes each block independently testable |

### Section-by-section strategy

1. **Hero**: "Healthcare runs on documents. Amplify runs the workflow." Echoes Amplify's thesis that documents are operational inputs, not static files. Inline email capture inspired by high-converting SaaS patterns
2. **Logo Bar**: Greyscale scrolling marquee. Establishes credibility before any feature claims
3. **Testimonial #1**: Specific metric (40% prior auth turnaround reduction) validates the hero's promise
4. **Platform Capabilities**: Accordion tabs mirroring Amplify's 4 product pillars (Fax, Automate, Engage, Collect) with real product screenshots
5. **Testimonial #2**: Reinforces unified platform message with a workflow-specific quote
6. **Workflow Pipeline**: 6-step visual (Received → Classified → Routed → Approved → Archived → Audited). No competitor can show this end-to-end flow
7. **Comparison Grid**: Category-based positioning (not competitor names). Amplify is the only column with checkmarks across all capabilities
8. **G2 Social Proof**: #35 out of 7,225 products on G2. Third-party validation without self-promotion
9. **Role-Based Cards**: 4 interactive cards with segment-specific value props. Demonstrates buyer-aware messaging
10. **Testimonial #3**: Final trust reinforcement before the conversion ask
11. **Footer CTA**: Mirrors hero form. Consistency between first and last CTA reduces cognitive friction

---

## Artifact 2: PLG Signup Flow (5 Screens)

**[View Live →](https://joleneann.github.io/amplify-plg/signup-flow.html)**

A fully interactive, 5-screen prototype covering the complete self-serve journey from visitor to activated, segmented user. SSO-first layout, inline validation, trust badges, state persistence, accessibility, and loading states: all functional.

### What it demonstrates

| JD Responsibility | How It Shows |
|---|---|
| Own end-to-end PLG performance | 5-screen flow: signup → segment → activate → convert → expand |
| Trial vs direct signup flows | Screen 1: SSO-first design, free trial, no credit card, personal email accepted |
| Account creation & onboarding | Screens 1–2: SSO + validated signup form, state persistence, progressive segmentation |
| Activation and aha moments | Screen 4: sandbox with <2s time-to-value across 6 modules |
| User journeys by segment | Screen 2 segmentation powers personalized module recommendations |
| Reduce friction | SSO-first signup, inline validation, sessionStorage persistence, sandbox mode, skip options, dual-path CTAs |
| Expansion revenue | Screen 3 tabs + Screen 5 sidebar drive cross-module awareness |
| A/B and multivariate tests | Specific test hypotheses for every screen (documented in strategy notes) |
| Increase revenue per visitor | Every screen optimizes conversion with measurable PLG loops |

### Screen-by-screen strategy

**Screen 1: Sign Up:** SSO-first form (Google/Microsoft buttons above email fields). HIPAA, SOC 2, and G2 trust badges at the point of commitment. Inline validation on blur. Personal email accepted to reduce friction for solo practitioners.

**Screen 2: Your Work:** 4-question progressive segmentation (Industry → Role → Team size → Title). Powers auto-recommendation on Screen 3 for a 30–50% activation lift. Company size + Title feeds PQL scoring for sales-assist.

**Screen 3: Try Amplify:** Jobs-to-be-done module selection with product previews and social proof stats. Dual-path CTAs: "Try in Sandbox" for evaluators, "Set up with work email" for committed users. Tab layout is a deliberate cross-sell surface.

**Screen 4: Preview Mode:** Module-specific sandbox with randomized healthcare data (patient names, fax IDs, insurance info). Animated progress with varied timing (1.5–2.3s) prevents the experience from feeling scripted. Cross-sell teasers in results (e.g., fax result links to Automate).

**Screen 5: Explore:** Trial dashboard with personalized next steps, platform sidebar tracking tried/untried modules, and attribution capture ("How did you find us?") as a low-friction post-value ask.

### Key PLG loops

- **SSO-first** removes the #1 enterprise signup barrier
- **Personal email → work email** post-activation (3x higher capture rate)
- **Segmentation → auto-recommendation** drives 30–50% activation lift
- **Time-to-value in <2 seconds** via sandbox mode predicts 90-day retention
- **Cross-sell surfaces** at every touchpoint (tabs, result teasers, sidebar)
- **Session persistence** via sessionStorage: no progress lost on refresh

---

*Built by Jolene Fernandes*
