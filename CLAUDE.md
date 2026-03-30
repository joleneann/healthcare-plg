# CLAUDE.md — Docflow PLG Case Study Artifacts

## Project Context
**GitHub:** https://github.com/joleneann/healthcare-plg

This repo is a **PLG Growth case study** demonstrating full-funnel strategy for a fictional healthcare SaaS product called **Docflow** — a HIPAA-compliant healthcare workflow orchestration platform. These artifacts demonstrate hands-on PLG execution — not slide decks, but working prototypes that show how to move the funnel.

**North-star KPI:** Revenue per Visitor (conversion + ACV + PLG-driven expansion)

## Artifacts

### 1. `index.html` — Marketing Website (Awareness → Signup)
Top-of-funnel conversion page. Owns: website entry points, role-based segmentation, social proof, product education.
- **Hero** with email capture → **Tabbed product demos** (Fax / Automate / Engage / Collect) → **Workflow pipeline visualization** → **Role-based value props** (Ops, Compliance, IT, Front Desk) → **G2 social proof** → **Final CTA**
- PLG concepts: progressive disclosure, role self-selection, visual product demos, persistent CTAs, scroll-reveal engagement

### 2. `signup-flow.html` — Onboarding Flow (Signup → Activation)
5-screen self-serve journey. Owns: trial/signup flows, onboarding, activation, "aha" moments, segment-specific journeys.
- **Screen 1:** Sign Up (split hero + form)
- **Screen 2:** Segmentation (industry → role → team size → title, progressive reveal)
- **Screen 3:** Module Discovery (JTBD tabs → live mockup previews, recommended path)
- **Screen 4:** Sandbox (hands-on fax compose with real-looking data, delivery confirmation)
- **Screen 5:** Explore (trial banner, next steps checklist, cross-sell)
- PLG concepts: JTBD routing, smart recommendations, sandbox activation, work-email gate post-value, psychological ownership

### 3. `dashboard.html` — Product Dashboard (if present)
Post-activation retention and expansion surface.

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Docflow Brand System
All artifacts must look like they belong to a consistent, professional healthcare SaaS product.

### Colors (custom — never use default Tailwind palette)
- Blue core: `#0F6FDE` — primary action color
- Blue light: `#5BA3F5` — accents, gradients
- Blue glow: `rgba(15, 111, 222, 0.2)` — shadows, hover states
- Blue subtle: `rgba(15, 111, 222, 0.06)` — backgrounds
- Light theme base: `#F5F7FA` (signup-flow), Dark theme base: `#0A1628` (index)
- Text primary: `#0B0F1A`, Text secondary: `#4A5578`, Text muted: `#8B95B0`

### Typography (all Google Fonts — zero external CDN dependency)
- **Display/headings:** Plus Jakarta Sans 700/800 — tight tracking (-0.03em to -0.04em)
- **Body:** Inter 400/500/600
- **Mono/labels:** JetBrains Mono 400 — uppercase tracking-widest for badges
- Never use the same font for headings and body.

### Font Loading
```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
```

### Tailwind fontFamily config
```js
fontFamily: {
  display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
  body: ['"Inter"', 'system-ui', 'sans-serif'],
  mono: ['"JetBrains Mono"', 'monospace'],
}
```

### Visual Language
- **Shadows:** Layered, blue-tinted at low opacity (e.g., `0 1px 3px rgba(15,111,222,0.04), 0 6px 16px rgba(0,0,0,0.04)`)
- **Glass cards:** `background:rgba(255,255,255,0.78); backdrop-filter:blur(16px)`
- **Gradients:** Layered radial gradients with SVG noise grain overlay at 3% opacity
- **Animations:** Only `transform` and `opacity`. Spring-style easing: `cubic-bezier(0.34, 1.56, 0.64, 1)`. Never `transition-all`.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Depth system:** base → elevated → floating surfaces, not flat

### Known Tailwind Pitfall
**Do not use `text-base` class** — it conflicts with the custom `base` color token in the Tailwind config (signup-flow). Use `text-[1rem]` instead for 16px font size.

## Brand Assets
- `illustrations/` — role illustrations (operations.svg, compliance.svg, it-integration.svg, front-desk.svg), G2 logo, demo image
- `HIPAA Compliance (Free Layer).png` — compliance badge
- Always use `https://placehold.co/WIDTHxHEIGHT` for product screenshots (no proprietary CDN assets)

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Do not improve or add to the design.
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `node scripts/serve.mjs` (serves the project root at `http://localhost:3000`)
- `serve.mjs` lives in the project root. Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- Puppeteer is installed at `C:/Users/nateh/AppData/Local/Temp/puppeteer-test/`. Chrome cache is at `C:/Users/nateh/.cache/puppeteer/`.
- **Always screenshot from localhost:** `node scripts/screenshot.mjs http://localhost:3000`
- Screenshots save to `./temporary screenshots/screenshot-N.png` (auto-incremented).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → `screenshot-N-label.png`
- After screenshotting, read the PNG with the Read tool to visually compare.
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows

## Output Defaults
- Single HTML file per artifact, all styles inline, unless user says otherwise
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Mobile-first responsive

## PLG Strategy Context
When building or modifying artifacts, align with these PLG responsibilities:
- **Funnel ownership:** visit → signup → activation → paid → expansion
- **Segmentation:** API users/developers, partners/resellers, business (non-healthcare) users, healthcare verticals
- **Activation:** Identify events that predict long-term revenue; sandbox experiences create psychological ownership
- **Experimentation:** A/B and multivariate test readiness in flows and messaging
- **Monetization:** Paywalls, nudges, upgrades, work-email gates positioned post-value-delivery
- **Strategy tips:** Each artifact includes inline PLG strategy annotations explaining the "why" behind UX decisions

## Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
- Do not invent brand colors — use the Docflow palette above
