# PLG Growth Case Study: Healthcare SaaS Website + Signup Flow Design

This is a demonstration of how I approach PLG redesign for a regulated healthcare SaaS product. Fully functional prototype built in HTML/CSS.

---

## What This Is

A hands-on PLG execution case study for **Docflow**, a fictional HIPAA-compliant healthcare workflow orchestration platform. The repo contains working prototypes, not slide decks. Every design decision is annotated with the PLG strategy behind it.

The north-star metric throughout: **Revenue per Visitor** (conversion rate x ACV x PLG-driven expansion).

---

## Artifacts

### 1. Marketing Website (Visit -> Signup)
**[Live demo](https://joleneann.github.io/healthcare-plg/)**

Top-of-funnel conversion page demonstrating:
- Tabbed platform demos with live UI previews (eFax / Document Processing / Secure Communications / eSign)
- Animated workflow pipeline: Received -> Classified -> Routed -> Actioned -> Archived -> Audited
- Scrolling logo bar with real healthcare customer logos
- Competitor comparison grid showing where single-purpose tools fall short
- G2 social proof (#25 on G2, testimonials as proof breaks)
- Role-targeted value props for Ops, Compliance, IT, and Front Desk
- Dual conversion paths (free trial + demo request) with consistent CTA ordering

### 2. Onboarding Flow (Signup -> Activation)
**[Live demo](https://joleneann.github.io/healthcare-plg/signup-flow.html)**

5-screen self-serve activation journey demonstrating:
- **Screen 1 - Choose:** Routes users to chosen product module
- **Screen 2 - Try:** Persistent product sidebar with sandbox + video layout per module
- **Screen 3 - Sign Up:** Post-value email gate with SSO (Google/Microsoft) for enterprise detection
- **Screen 4 - Profile:** Progressive 5-question segmentation (industry, role, team size, title, attribution) - all visible on one screen
- **Screen 5 - Dashboard:** Personalized next steps, Docflow Products cross-sell sidebar, social proof
- Inline PLG strategy annotations on every screen ("Strategy Notes" toggle)


## Stack

Plain HTML/CSS - no build step, no framework. Tailwind via CDN. All Google Fonts. Zero proprietary CDN dependencies.

---

> **Note:** Docflow is a fictional brand created for this case study. The strategic thinking, funnel architecture, and UX patterns are the deliverable - the brand is just the vehicle.
