# PLG Growth Case Study: Healthcare SaaS Website + Signup Flow Redesign

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
- Competitor comparison grid showing where single-purpose tools fall short
- G2 social proof (#25 on G2, real healthcare customer logos, testimonials as proof breaks)
- Role-targeted value props for Ops, Compliance, IT, and Front Desk
- Dual conversion paths (free trial + demo request) with consistent CTA ordering

### 2. Onboarding Flow (Signup -> Activation)
**[Live demo](https://joleneann.github.io/healthcare-plg/signup-flow.html)**

5-screen self-serve activation journey demonstrating:
- Progressive segmentation (industry -> role -> team size -> title)
- JTBD routing to recommended module path
- Live mockup previews before commitment
- Hands-on sandbox with real-looking data (psychological ownership)
- Work-email gate positioned *after* value delivery, not before
- Inline PLG strategy annotations ("Strategy Notes" toggle)

---

## Methodology

- **Competitive research:** mapped gaps across cloud fax, document processing, and unified comms categories
- **CXL landing page optimization:** applied to hero, social proof, and CTA architecture
- **Jobs-to-be-Done segmentation:** segmentation questions routed to high-fit module recommendations
- **Sandbox-first activation:** users touch a real workflow before giving work email
- **Post-value monetization:** work-email gate and upgrade nudges appear after the "aha moment"
- **Role-based value props:** Ops, Compliance, IT, Front Desk each get a tailored pitch

---

## Stack

Plain HTML/CSS - no build step, no framework. Tailwind via CDN. All Google Fonts. Zero proprietary CDN dependencies.

---

> **Note:** Docflow is a fictional brand created for this case study. The strategic thinking, funnel architecture, and UX patterns are the deliverable - the brand is just the vehicle.
