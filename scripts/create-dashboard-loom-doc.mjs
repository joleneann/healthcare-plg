import { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType, ShadingType,
  PageNumber, TabStopType, TabStopPosition } from 'docx';
import fs from 'fs';

// ── Shared styles ──
const FONT = "Arial";
const PURPLE = "0F6FDE";
const DARK = "0B0F1A";
const SECONDARY = "4A5578";
const MUTED = "8B95B0";

const doc = new Document({
  styles: {
    default: { document: { run: { font: FONT, size: 22, color: DARK } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 36, bold: true, font: FONT, color: DARK },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: FONT, color: PURPLE },
        paragraph: { spacing: { before: 320, after: 160 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: FONT, color: DARK },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 2 } },
    ]
  },
  numbering: {
    config: [
      { reference: "bullets",
        levels: [{ level: 0, format: "bullet", text: "\u2022", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "bullets2",
        levels: [{ level: 0, format: "bullet", text: "\u2013", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 1080, hanging: 360 } } } }] },
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          children: [
            new TextRun({ text: "Docflow Dashboard: Loom Narration Outline", font: FONT, size: 16, color: MUTED }),
          ],
          border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: "E0DCD6", space: 8 } }
        })]
      })
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          children: [
            new TextRun({ text: "Jolene Fernandes", font: FONT, size: 16, color: MUTED }),
            new TextRun({ text: "\tPage ", font: FONT, size: 16, color: MUTED }),
            new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 16, color: MUTED }),
          ],
          tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
          border: { top: { style: BorderStyle.SINGLE, size: 4, color: "E0DCD6", space: 8 } }
        })]
      })
    },
    children: [

      // ─── TITLE ───
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun({ text: "Docflow Dashboard: Loom Narration Outline", bold: true, size: 40, color: DARK })]
      }),
      new Paragraph({
        spacing: { after: 400 },
        children: [new TextRun({ text: "A state-by-state cue sheet for walking Adam through the PLG dashboard design, strategy, and growth logic.", italics: true, size: 22, color: SECONDARY })]
      }),

      // ─── OPENING ───
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Opening (30 sec)")] }),

      bullet("The website (Artifact #1) shows I can acquire users. This dashboard (Artifact #2) shows I can activate and monetize them."),
      bullet("This is not a static mockup. It\u2019s an interactive prototype with 4 states representing the full user lifecycle \u2014 from first signup to hitting the paywall."),
      bullet("The state switcher at the top lets you click through each stage: New User \u2192 Active Trial \u2192 Approaching Limit \u2192 Limit Reached."),
      bullet("Design uses Docflow\u2019s brand colors and typography from docflow.io. Blue (#0F6FDE) is the primary accent color. Cool gray background (#F5F7FA) matches the website."),
      bullet("The left navigation shows the full Docflow platform (Fax, Automate, Engage, Collect) \u2014 fax is the wedge product for the free trial, but users see the broader vision from Day 1."),

      // ─── STATE 1 ───
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("State 1: New User / Onboarding")] }),
      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("What\u2019s on screen")] }),
      bullet("Welcome banner: \u201CWelcome to Docflow, Jolene.\u201D Personalized, warm, clear next step."),
      bullet("Activation checklist with 4 steps: Send your first fax, Upload & send a document, Invite a team member, Create a routing rule."),
      bullet("Progress bar: 0/4 complete. Visual momentum \u2014 users want to fill the bar."),
      bullet("Empty fax activity table with illustrated empty state: \u201CNo faxes yet.\u201D Encouraging, not empty."),
      bullet("Sidebar usage: 0/100 faxes, 7 days remaining in trial."),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("PLG logic")] }),
      bullet("Checklists increase activation 2\u20133x vs. empty dashboards (Reforge, Chameleon research). An empty dashboard says \u201Cnothing to see.\u201D A checklist says \u201Chere\u2019s what to do.\u201D"),
      bullet("Each step maps to a behavior that predicts long-term retention: sending a fax (core value delivery), inviting a teammate (collaboration = stickiness), setting up routing (workflow depth = switching cost)."),
      bullet("The first step (\u201CSend your first fax\u201D) gets a pulse animation to guide attention to the highest-value action."),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("JD mapping")] }),
      bulletBold("Account creation and onboarding", " \u2014 this IS the onboarding flow."),
      bulletBold("Activation and \u201Caha\u201D moments", " \u2014 the first fax delivery confirmation is the aha moment. The checklist guides users there."),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Adam\u2019s belief")] }),
      new Paragraph({
        spacing: { before: 80, after: 200 },
        indent: { left: 720 },
        children: [
          new TextRun({ text: "\u201CWhat matters is not just receiving the document. It\u2019s what happens next.\u201D", italics: true, color: PURPLE }),
          new TextRun({ text: " \u2014 The checklist turns signup into action. The user doesn\u2019t just land on a dashboard; they\u2019re guided to their first workflow outcome.", color: SECONDARY }),
        ]
      }),

      // ─── STATE 2 ───
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("State 2: Active Trial (57/100 faxes, Day 4)")] }),
      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("What\u2019s on screen")] }),
      bullet("4 stats cards: HIPAA Mode (active, BAA signed, audit logs), Delivery rate (91%, 52 delivered / 3 failed / 2 pending), Security (AES-256, access controls, 7-year retention), Exceptions (3 items needing action)."),
      bullet("Fax activity table with 6 rows of realistic healthcare data: Treatment Plan, Prior Auth, Lab Results, Referral, Prescription, Payment."),
      bullet("\u201CNeeds Action\u201D filter badge (3) draws the eye to unresolved items."),
      bullet("Sidebar: 57/100 usage, 4 days remaining, Quick Actions grid, team roster (4 members with roles)."),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("PLG logic")] }),
      bullet("The \u201CNeeds Action\u201D filter and Exceptions panel create a daily engagement loop. Users come back because there\u2019s always something to resolve \u2014 a failed fax to retry, a pending response to follow up on, missing pages to upload."),
      bullet("The exception triage pattern (Fix / Assign / Upload) converts passive viewers into active participants. Every return visit deepens the habit."),
      bullet("Healthcare-specific purpose tags (Treatment Plan, Prior Auth, Lab Results) demonstrate domain depth. This is not a generic fax dashboard."),
      bullet("The left nav shows Automate (AI), Engage (SMS), Collect (E-Sign) alongside Fax. This is deliberate: the user sees the full platform from Day 1, creating expansion desire during the trial even though only Fax is active."),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("JD mapping")] }),
      bulletBold("User journeys by segment", " \u2014 the table shows different fax purposes (treatment plans, prior auth, lab results) which map to different healthcare roles and workflows."),
      bulletBold("Identify activation events that predict long-term revenue", " \u2014 sending faxes, resolving exceptions, inviting team members are all activation signals."),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Adam\u2019s belief")] }),
      new Paragraph({
        spacing: { before: 80, after: 200 },
        indent: { left: 720 },
        children: [
          new TextRun({ text: "\u201CHealthcare doesn\u2019t just need faster workflows. It needs workflows with clear ownership, especially at the edges where exceptions happen.\u201D", italics: true, color: PURPLE }),
          new TextRun({ text: " \u2014 The Exceptions panel and owner assignment (Owner: You, Owner: R. Patel) embody this directly. Every fax has a clear owner.", color: SECONDARY }),
        ]
      }),

      // ─── STATE 3 ───
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("State 3: Approaching Limit (92/100 faxes, Day 5)")] }),
      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("What\u2019s on screen")] }),
      bullet("Purple upgrade banner: \u201CYou\u2019ve used 92 of 100 faxes. Upgrade to Pro for unlimited faxes, AI document classification, secure messaging, and advanced routing.\u201D"),
      bullet("\u201CCompare Plans\u201D CTA button + \u201CDismiss\u201D option."),
      bullet("Usage bar turns amber at 92/100. Sidebar shows: \u201C8 faxes remaining \u00B7 2 days left in trial.\u201D"),
      bullet("Team section shows: \u201C4/4 members used. Upgrade for more.\u201D"),
      bullet("Export section shows: \u201CUpgrade for scheduled & custom exports.\u201D"),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("PLG logic")] }),
      bullet("Nudge at 90%, not 100%. Users who see the wall coming convert 40% better than those who hit it cold (ProfitWell research on usage-based pricing)."),
      bullet("The upgrade message frames value expansion (\u201Cunlimited faxes, AI classification, secure messaging\u201D), not restriction (\u201Cyou\u2019re running out\u201D). Critically, it teases platform features (Automate, Engage) that the free trial doesn\u2019t include \u2014 creating expansion desire."),
      bullet("The dismiss option respects user autonomy. Forced urgency backfires \u2014 users who feel pressured churn faster than those who choose to upgrade on their own timeline."),
      bullet("Multiple upgrade surface areas (banner, team limit, export gating) are contextual and distributed, not a single intrusive modal. Each nudge appears at the moment of relevant friction."),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("JD mapping")] }),
      bulletBold("Monetization, paywalls, nudges, and upgrades", " \u2014 this IS the nudge system. Multiple touchpoints, contextual timing, respectful tone."),
      bulletBold("Increase revenue per visitor through continuous experimentation", " \u2014 the 90% threshold, banner copy, and CTA placement are all testable. I would A/B test: nudge at 80% vs. 90%, banner copy variants, and CTA color/position."),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Adam\u2019s belief")] }),
      new Paragraph({
        spacing: { before: 80, after: 200 },
        indent: { left: 720 },
        children: [
          new TextRun({ text: "\u201CHuman when judgment matters. Automation when speed matters.\u201D", italics: true, color: PURPLE }),
          new TextRun({ text: " \u2014 The system automates the nudge timing (at 90%), but the human decides when to upgrade. The dismiss button is the handoff between automation and judgment.", color: SECONDARY }),
        ]
      }),

      // ─── STATE 4 ───
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("State 4: Limit Reached / Paywall (100/100 faxes)")] }),
      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("What\u2019s on screen")] }),
      bullet("Limit reached banner: \u201CYou\u2019ve reached your trial limit. 100/100 faxes used.\u201D"),
      bullet("\u201CUpgrade Now\u201D primary CTA + \u201CPay per fax\u201D secondary option ($0.50/fax)."),
      bullet("In-context plan comparison: Free Trial (current, grayed out) vs. Pro ($149/mo, recommended, highlighted with purple glow) vs. Enterprise (custom, contact sales)."),
      bullet("Send Fax button is disabled in the header."),
      bullet("Fax activity table is dimmed and labeled \u201CViewing only \u2014 sending disabled.\u201D Existing data remains fully accessible."),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("PLG logic")] }),
      bullet("Hard walls churn users. We disable creation but preserve full access to existing data \u2014 this maintains the habit loop while creating urgency. The user can still view delivery logs, manage their team, and see their workflow history. The investment they\u2019ve built keeps them tethered."),
      bullet("The \u201Cpay per fax\u201D option ($0.50) is a deliberate soft escape. It captures users who have immediate need (\u201CI just need to send one more prior auth today\u201D) but aren\u2019t ready to commit to a monthly plan. It generates revenue AND keeps them in-product until the next billing cycle."),
      bullet("Plan comparison appears in-context, not behind a separate pricing page. Reducing the number of clicks to upgrade reduces friction. The Pro plan is visually highlighted as \u201CRecommended\u201D with a border and badge."),
      bullet("The pricing reflects the full Docflow platform, not just fax. Pro ($149) includes Automate (AI) and Engage (SMS). Enterprise adds Collect (E-sign, forms), workflow orchestration, and EHR integrations. This is platform pricing, not commodity fax pricing \u2014 it shows I think about the full product vision."),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("JD mapping")] }),
      bulletBold("Pricing page strategy, packaging, and experimentation", " \u2014 the in-context plan comparison IS the pricing strategy. Tier design, feature gating, and visual hierarchy are all deliberate."),
      bulletBold("Trial vs direct signup flows", " \u2014 this is the trial terminus. The design question: what happens when the trial ends? This answers it with graceful degradation, not a hard wall."),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Adam\u2019s belief")] }),
      new Paragraph({
        spacing: { before: 80, after: 200 },
        indent: { left: 720 },
        children: [
          new TextRun({ text: "\u201CDocuments become actions.\u201D", italics: true, color: PURPLE }),
          new TextRun({ text: " \u2014 Even at the limit, the user can still view their delivery history, see tracking statuses, and manage their workflow. The data they\u2019ve built \u2014 57 fax records, 4 team members, routing rules \u2014 is their investment. Deleting it would be hostile. Preserving it creates the switching cost that drives conversion.", color: SECONDARY }),
        ]
      }),

      // ─── STRATEGY NOTES ───
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("The \u201CStrategy Notes\u201D Toggle")] }),
      bullet("The \u201CStrategy Notes\u201D button in the top-right reveals PLG reasoning annotations directly on the dashboard, inline with the UI."),
      bullet("Each annotation explains the growth logic behind the design decision: why the checklist exists, why the nudge fires at 90%, why the paywall preserves access."),
      bullet("This transforms the artifact from \u201CI built a dashboard\u201D into \u201CI designed a growth system and here\u2019s my reasoning.\u201D"),

      // ─── LEFT NAV ───
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Left Navigation: Platform Vision")] }),
      bullet("Fax is the active product (highlighted in the nav). This is the wedge product for the 7-day trial."),
      bullet("Automate (AI), Engage (SMS), and Collect (E-Sign) are visible in the nav but not active. This is a deliberate PLG choice:"),
      subbullet("Showing the full platform from Day 1 creates expansion desire. The user thinks: \u201CI\u2019m using Fax, but I could also automate document classification, send secure messages, and collect e-signatures.\u201D"),
      subbullet("This maps directly to the JD\u2019s \u201Cuser journeys by segment\u201D \u2014 an operations manager might activate Fax first, then expand to Automate. A compliance officer might start with Audit Logs, then expand to Engage."),
      bullet("Workspace section (Routing Rules, Team, Audit Logs, Settings) shows operational depth. This is not a toy \u2014 it\u2019s a real platform."),

      // ─── CLOSING ───
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Closing Remarks (30 sec)")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("How the JD maps to this dashboard")] }),

      // JD Mapping Table
      createMappingTable(),

      new Paragraph({ spacing: { before: 200 } }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("What I\u2019d measure and test next")] }),
      bullet("Activation rate: % of trial users who complete all 4 checklist steps within 48 hours."),
      bullet("Time-to-first-fax: how quickly new users send their first fax (target: under 5 minutes)."),
      bullet("Nudge-to-upgrade conversion: % who upgrade after seeing the 90% banner vs. those who dismiss it."),
      bullet("Paywall conversion: % who upgrade vs. pay-per-fax vs. churn at 100/100. Is the pay-per-fax option cannibalizing plan upgrades, or is it capturing users who would otherwise leave?"),
      bullet("A/B tests I\u2019d run first: nudge threshold (80% vs. 90%), upgrade banner copy (value-framing vs. scarcity-framing), Pro pricing ($99 vs. $149 vs. $199), whether the pay-per-fax option cannibalizes plan upgrades, and whether teasing Automate/Engage features in the nudge increases or decreases conversion."),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("The full picture")] }),
      new Paragraph({
        spacing: { before: 120, after: 120 },
        children: [
          new TextRun({ text: "The website ", color: SECONDARY }),
          new TextRun({ text: "acquires", bold: true, color: DARK }),
          new TextRun({ text: " users. The dashboard ", color: SECONDARY }),
          new TextRun({ text: "activates and monetizes", bold: true, color: DARK }),
          new TextRun({ text: " them. Together, they demonstrate ownership of the full PLG funnel: visit \u2192 signup \u2192 activate \u2192 convert \u2192 expand. That\u2019s what this role is.", color: SECONDARY }),
        ]
      }),

    ]
  }]
});

// ── Helper functions ──

function bullet(text) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { before: 60, after: 60 },
    children: [new TextRun({ text, size: 22, color: DARK })]
  });
}

function subbullet(text) {
  return new Paragraph({
    numbering: { reference: "bullets2", level: 0 },
    spacing: { before: 40, after: 40 },
    children: [new TextRun({ text, size: 21, color: SECONDARY })]
  });
}

function bulletBold(boldPart, rest) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { before: 60, after: 60 },
    children: [
      new TextRun({ text: boldPart, bold: true, size: 22, color: DARK }),
      new TextRun({ text: rest, size: 22, color: DARK }),
    ]
  });
}

function createMappingTable() {
  const border = { style: BorderStyle.SINGLE, size: 1, color: "E0DCD6" };
  const borders = { top: border, bottom: border, left: border, right: border };
  const headerShading = { fill: "F5F7FA", type: ShadingType.CLEAR };

  const rows = [
    ["JD Responsibility", "Where It Shows in the Dashboard"],
    ["\u201COwn end-to-end PLG performance\u201D", "4-state lifecycle covers signup \u2192 activation \u2192 paid \u2192 expansion"],
    ["\u201CTrial vs direct signup flows\u201D", "State 1 shows the trial onboarding flow with activation checklist"],
    ["\u201CAccount creation and onboarding\u201D", "Activation checklist with 4 guided steps and progress tracking"],
    ["\u201CActivation and aha moments\u201D", "First fax sent = aha moment. Delivery confirmation = value realized"],
    ["\u201CMonetization, paywalls, nudges\u201D", "States 3 & 4: pre-paywall nudge at 90%, graceful degradation at 100%"],
    ["\u201CPricing page strategy\u201D", "In-context plan comparison (Free / Pro / Enterprise) at the paywall"],
    ["\u201CA/B and multivariate tests\u201D", "Closing section: specific test ideas for nudge timing, copy, pricing"],
    ["\u201CIdentify activation events\u201D", "Checklist steps = activation events that predict retention"],
  ];

  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [4000, 5360],
    rows: rows.map((row, i) => new TableRow({
      children: row.map((cell, j) => new TableCell({
        borders,
        width: { size: j === 0 ? 4000 : 5360, type: WidthType.DXA },
        shading: i === 0 ? headerShading : undefined,
        margins: { top: 80, bottom: 80, left: 120, right: 120 },
        children: [new Paragraph({
          children: [new TextRun({
            text: cell,
            bold: i === 0,
            size: i === 0 ? 20 : 21,
            color: i === 0 ? PURPLE : DARK,
            font: FONT,
          })]
        })]
      }))
    }))
  });
}

// ── Generate ──
const buffer = await Packer.toBuffer(doc);
const filename = "Docflow Dashboard - Loom Narration Outline.docx";
try {
  fs.writeFileSync(filename, buffer);
  console.log("Created: " + filename);
} catch (e) {
  const alt = "Docflow Dashboard - Loom Narration Outline (updated).docx";
  fs.writeFileSync(alt, buffer);
  console.log("Original locked, created: " + alt);
}
