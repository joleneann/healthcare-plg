import { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType, ShadingType,
  PageNumber, TabStopType, TabStopPosition } from 'docx';
import fs from 'fs';

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
        paragraph: { spacing: { before: 280, after: 120 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: FONT, color: DARK },
        paragraph: { spacing: { before: 200, after: 80 }, outlineLevel: 2 } },
    ]
  },
  numbering: {
    config: [
      { reference: "bullets",
        levels: [{ level: 0, format: "bullet", text: "\u2022", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
    ]
  },
  sections: [{
    properties: {
      page: { size: { width: 12240, height: 15840 }, margin: { top: 1260, right: 1260, bottom: 1260, left: 1260 } }
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          children: [new TextRun({ text: "Docflow PLG Signup Flow: Loom Narration Outline", font: FONT, size: 16, color: MUTED })],
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
        children: [new TextRun({ text: "Docflow PLG Signup Flow", bold: true, size: 40, color: DARK })]
      }),
      new Paragraph({
        spacing: { after: 300 },
        children: [new TextRun({ text: "Loom narration cue sheet (updated). Artifact #2 of 2 (website + signup flow). Five screens covering the full journey from visitor to activated, segmented user. Reflects SSO-first layout, inline validation, trust badge placement, state persistence, accessibility, and loading states.", italics: true, size: 22, color: SECONDARY })]
      }),

      // ─── OPENING ───
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Opening (30 sec)")] }),
      bullet("The website (Artifact #1) acquires visitors. This signup flow (Artifact #2) converts them into activated users. Together they cover the full PLG funnel: visit \u2192 signup \u2192 segment \u2192 activate \u2192 convert \u2192 expand."),
      bullet("Fully interactive prototype, 5 screens. Product-preview driven: users see real Docflow UI before committing. \u201CStrategy Notes\u201D toggle reveals growth reasoning inline."),

      // ─── SCREEN 1 ───
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Screen 1: Sign Up")] }),
      bullet("Split layout. Left: headline (\u201CFrom received to resolved. One platform.\u201D), value prop, \u201CNo credit card required\u201D badge. Right: glass card form leading with Google/Microsoft SSO buttons at top, \u201Cor continue with email\u201D divider, then name (autofocused), email, password (live strength bar with inline requirements). \u201CGet Started Free\u201D CTA with loading spinner on submit."),
      bullet("SSO-first design. Google and Microsoft buttons are the first interaction in the form card, not buried below email fields. For healthcare/legal orgs where Microsoft SSO is often mandatory, this is the path of least resistance. Enterprise domain detection via SSO triggers PQL scoring for sales-assist."),
      bullet("Trust signals at the point of commitment. HIPAA, SOC 2, and G2 4.8/5 badges sit directly below the CTA inside the form card\u2014where trust anxiety peaks. Terms of Service and Privacy Policy are linked inline. For HIPAA-compliant SaaS, these are both a legal requirement and a conversion lever."),
      bullet("Inline form validation on blur: specific error messages per field (e.g., \u201CPlease enter a valid email address\u201D), password minimum enforcement, and progression is blocked until all fields pass. State persists to sessionStorage\u2014accidental refresh or tab close won\u2019t lose progress."),
      bullet("Email, not work email. Personal email reduces friction for solo practitioners and small clinics. Work email is captured post-activation (Screen 4) when conversion is 3x higher."),
      bulletBold("JD: ", "Account creation + onboarding, trial vs direct signup flows, reduce friction across the user journey."),

      // ─── SCREEN 2 ───
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Screen 2: Your Work")] }),
      bullet("Five pill-based questions with progressive disclosure: Industry \u2192 Role \u2192 Team size \u2192 Title \u2192 \u201CHow did you find us?\u201D Each answer fills a progress pill and updates an accessible progress bar (role=\u201Cprogressbar\u201D with aria-valuenow). \u201CSkip for now\u201D never blocks. All selections persist to sessionStorage\u2014refreshing restores exactly where the user left off."),
      bullet("Industry + Role powers module auto-recommendation on Screen 3 (30\u201350% activation lift). Company size + Title feeds PQL scoring. Attribution (\u201CHow did you find us?\u201D) is the most overlooked but highest-ROI data point for channel optimization. If skipped, these questions resurface at the work email transition."),
      bulletBold("JD: ", "User journeys by segment, identify activation events that predict long-term revenue."),

      // ─── SCREEN 3 ───
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Screen 3: Try Docflow")] }),
      bullet("Headline: \u201CWhat workflow do you want to improve?\u201D Jobs-to-be-done pills (Send & receive documents, Collect signatures, Automate processing, Message securely, Patient intake, API) auto-select the recommended module based on Screen 2 answers."),
      bullet("Accessible tab interface (role=\u201Ctablist\u201D/\u201Ctab\u201D/\u201Ctabpanel\u201D with aria-selected and keyboard navigation) on left, large product preview right (matching a proven product page pattern). Product screenshots for Fax, Automate, Engage, Collect. CSS mockups for E-Signature and API. Each preview includes a description and two CTAs: \u201CTry it now\u201D (sandbox path) and \u201CSet up with work email \u2192\u201D (direct path for committed users)."),
      bullet("The tab layout is a deliberate cross-sell surface. Users who browse 2+ modules have higher expansion revenue. Dual-path CTAs serve both evaluators and committed users without friction."),
      bulletBold("JD: ", "Activation and aha moments, expansion revenue, user journeys by segment."),

      // ─── SCREEN 4 ───
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Screen 4: Sandbox")] }),
      bullet("Split layout: left is a module-specific sandbox form, right is a placeholder demo video. All 6 modules have deep, realistic sandboxes with healthcare-specific data:"),
      bullet("Fax: sandbox number, recipient dropdown (St. James, Quest, Mercy General), document picker, label, routing, cover page. E-Signature: template picker, document preview with signature fields, signer config. Automate: workflow template (Referral/Prior Auth/Lab), pipeline diagram, AI extraction config. Engage: channel selector (Chat/SMS/Email), recipient, patient context, message composer. Collect: form template picker, field customizer, delivery method (SMS/Email/QR). API: credentials, language tabs (cURL/Python/Node/Java), action selector, syntax-highlighted code."),
      bullet("Clicking the action button triggers a 1.8-second animated progress sequence, then reveals an in-place result: delivery report with audit trail, timing stat, and module-specific cross-sell teaser (e.g., fax result shows \u201CAI detected Patient Referral. See how Automate handles this \u2192\u201D)."),
      bullet("Time-to-value is the #1 predictor of trial conversion. The 1.8s timer makes the speed promise tangible. Each module has a tailored activation event. The demo video reduces cognitive load."),
      bulletBold("JD: ", "Activation and aha moments, reduce friction, increase revenue per visitor through experimentation."),

      // ─── WORK EMAIL TRANSITION ───
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Work Email Transition")] }),
      bullet("After sandbox completion: \u201CReady to go live?\u201D card with work email input, organization auto-detect, and checkbox: \u201CThis is also my work email\u201D (for small clinics where personal = work). Benefits list: real fax numbers, team invitations, EHR integration, 14-day full trial."),
      bullet("If the user skipped Screen 2, the segmentation questions reappear here as compact pill rows under an expandable \u201CHelp us improve\u201D section. Data collection happens at the highest-commitment moment, not at the gate. \u201CSkip for now\u201D always available."),

      // ─── SCREEN 5 ───
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Screen 5: Explore")] }),
      bullet("Trial banner: \u201C14 days of full access. Every module. Every feature. No limits.\u201D Personalized next steps (3 cards based on module chosen). Platform sidebar shows all modules with \u201CActive,\u201D \u201CTried \u2713,\u201D or \u201CTry it \u2192\u201D status. Clicking \u201CTry it \u2192\u201D navigates back to Screen 3 with that module pre-selected."),
      bullet("If the user hasn\u2019t added a work email yet, a prominent \u201CReady to go live?\u201D CTA replaces the quick actions panel with inline email input and benefits list."),
      bulletBold("JD: ", "Monetization/nudges (trial countdown), expansion revenue (platform sidebar + cross-module browsing)."),

      // ─── PLG LOOPS ───
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("PLG Loops")] }),

      bulletBold("SSO-first conversion (Screen 1): ", "Google/Microsoft buttons lead the form card\u2014above email fields. For enterprise healthcare/legal users where SSO is mandatory, this removes the #1 signup barrier. Enterprise domain detection triggers PQL scoring for sales-assist."),
      bulletBold("Trust at the point of commitment (Screen 1): ", "HIPAA, SOC 2, and G2 4.8/5 badges placed directly below the CTA inside the form card\u2014not on a separate panel. Terms of Service and Privacy Policy linked inline. Trust signals near the submit button lift form completion 5\u201312%."),
      bulletBold("Validation + state persistence (Screen 1): ", "Inline validation on blur prevents silent failures. sessionStorage persistence across all screens prevents accidental data loss. beforeunload warning guards mid-flow navigation."),
      bulletBold("Personal email \u2192 work email (Screens 1 \u2192 4): ", "Low barrier at signup, work email captured post-activation when value is proven."),
      bulletBold("Segmentation \u2192 personalization (Screen 2 \u2192 3): ", "Industry + Role auto-recommends the right module. 30\u201350% activation lift."),
      bulletBold("PQL scoring (Screen 2): ", "Company size + Title feeds lead qualification. Enterprise prospects route to sales."),
      bulletBold("Skip recovery (Screen 2 \u2192 4): ", "Skipped questions resurface at work email transition. Data is never lost."),
      bulletBold("JTBD routing (Screen 3): ", "Problem-based pills reduce 6 choices to 1 recommended path."),
      bulletBold("Cross-sell awareness (Screen 3): ", "Tab layout shows all modules. Browsing 2+ predicts expansion revenue."),
      bulletBold("Dual-path (Screen 3): ", "\u201CTry in Sandbox\u201D for evaluators, \u201CSet up with work email\u201D for committed users."),
      bulletBold("Time-to-value (Screen 4): ", "1.8s timer reinforces speed promise. Predicts 90-day retention."),
      bulletBold("Ownership (Screen 4): ", "User configures real inputs (recipient, document, label). Psychological investment."),
      bulletBold("Cross-sell teaser (Screen 4): ", "AI insight in fax result links to Automate. Engage result links to E-Signature."),
      bulletBold("Trial urgency (Screen 5): ", "14 days + unlimited features. Soft urgency without a hard wall."),
      bulletBold("Platform expansion (Screen 5): ", "Sidebar tracks tried/untried modules. \u201CTry it \u2192\u201D drives cross-module activation."),

      // ─── JD MAPPING TABLE ───
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("JD Mapping")] }),
      createMappingTable(),

      // ─── CLOSING ───
      new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 280 }, children: [new TextRun("What I\u2019d Measure and Test")] }),
      bullet("Signup completion rate (target: >60%). SSO vs. email signup split. Validation error frequency by field. Segmentation completion vs. skip rate (target: >50% completion). Module selection distribution and correlation with segmentation. Sandbox activation rate (target: >80%). Time from signup to sandbox completion (target: <90 seconds). Session restore rate (users who refresh and continue)."),
      bullet("First A/B tests: SSO buttons above vs. beside email form, personal vs. work email at signup, 3 vs. 5 segmentation questions, auto-selected module vs. user choice, sandbox with vs. without demo video, work email ask timing (post-sandbox vs. post-explore), trust badges near CTA vs. in left panel."),

      new Paragraph({ spacing: { before: 200 } }),
      new Paragraph({
        spacing: { before: 80, after: 80 },
        children: [
          new TextRun({ text: "The website ", color: SECONDARY }),
          new TextRun({ text: "acquires", bold: true, color: DARK }),
          new TextRun({ text: ". This signup flow ", color: SECONDARY }),
          new TextRun({ text: "segments, activates, and converts", bold: true, color: DARK }),
          new TextRun({ text: ". Two artifacts, one complete PLG funnel.", color: SECONDARY }),
        ]
      }),

    ]
  }]
});

// ── Helpers ──
function bullet(text) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { before: 40, after: 40 },
    children: [new TextRun({ text, size: 21, color: DARK })]
  });
}
function bulletBold(boldPart, rest) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { before: 40, after: 40 },
    children: [
      new TextRun({ text: boldPart, bold: true, size: 21, color: DARK }),
      new TextRun({ text: rest, size: 21, color: DARK }),
    ]
  });
}
function createMappingTable() {
  const border = { style: BorderStyle.SINGLE, size: 1, color: "E0DCD6" };
  const borders = { top: border, bottom: border, left: border, right: border };
  const headerShading = { fill: "F5F7FA", type: ShadingType.CLEAR };
  const rows = [
    ["JD Responsibility", "Where It Shows"],
    ["Own end-to-end PLG performance", "5-screen flow: signup \u2192 segment \u2192 activate \u2192 convert \u2192 expand"],
    ["Trial vs direct signup flows", "Screen 1: SSO-first design, free trial, no credit card, personal email accepted"],
    ["Account creation and onboarding", "Screens 1-2: SSO + validated signup form, state persistence, progressive segmentation"],
    ["Activation and aha moments", "Screen 4: sandbox with 1.8s time-to-value across 6 modules"],
    ["User journeys by segment", "Screen 2 segmentation powers personalized recommendations"],
    ["Reduce friction", "SSO-first signup, inline validation, sessionStorage persistence, sandbox mode, skip options, dual-path CTAs"],
    ["Expansion revenue", "Screen 3 tabs + Screen 5 sidebar drive cross-module awareness"],
    ["A/B and multivariate tests", "Specific test ideas for every screen in closing section"],
    ["Increase revenue per visitor", "Every screen optimizes conversion with measurable PLG loops"],
  ];
  return new Table({
    width: { size: 9720, type: WidthType.DXA },
    columnWidths: [3800, 5920],
    rows: rows.map((row, i) => new TableRow({
      children: row.map((cell, j) => new TableCell({
        borders,
        width: { size: j === 0 ? 3800 : 5920, type: WidthType.DXA },
        shading: i === 0 ? headerShading : undefined,
        margins: { top: 60, bottom: 60, left: 100, right: 100 },
        children: [new Paragraph({
          children: [new TextRun({
            text: cell, bold: i === 0, size: i === 0 ? 20 : 20,
            color: i === 0 ? PURPLE : DARK, font: FONT,
          })]
        })]
      }))
    }))
  });
}

// ── Generate ──
const buffer = await Packer.toBuffer(doc);
const filename = "Docflow PLG Signup Flow - Loom Narration Outline.docx";
try {
  fs.writeFileSync(filename, buffer);
  console.log("Created: " + filename);
} catch (e) {
  const alt = "Docflow PLG Signup Flow - Loom Narration Outline (updated).docx";
  fs.writeFileSync(alt, buffer);
  console.log("Original locked, created: " + alt);
}
