export const SLED_HUB_SEO = {
  title: "SLED Partnerships | Back-office engineering for primes | Techtiz",
  description:
    "Back-office technical engineering subcontractor for U.S. SLED prime contractors. NDA-first, subcontract-only delivery across GIS, AI, automation, statutory document production, and grant reporting. We never face the agency.",
  canonicalPath: "/us-sled/",
  ogImage: "/assets/capitol.png",
} as const;

export const SLED_HERO = {
  eyebrow: "U.S. SLED · Back-office engineering for primes",
  heading:
    'Back-office technical engineering for <span class="accent">U.S. SLED prime contractors.</span>',
  body: "Specialized subcontractor support for GIS, AI, automation, statutory document production, grant reporting, and platform modernization. NDA-first. Subcontract-only. We never face the agency.",
  ctas: [
    {
      label: "Start an NDA conversation",
      href: "/us-sled/contact/",
      variant: "cta",
    },
    {
      label: "Capability statement →",
      href: "/us-sled/capability-statement/",
      variant: "ghost-dark",
    },
    {
      label: "How we engage →",
      href: "/us-sled/how-we-engage/",
      variant: "ghost-dark",
    },
  ],
  stats: [
    { n: "~10h", l: "US/PK overlap, daily" },
    { n: "1 day", l: "Response SLA, NDA-bound" },
    { n: "NDA", l: "First on substantive contact" },
    { n: "0", l: "Agency-facing engagements" },
  ],
  disclaimer:
    "Subcontract-only · NDA-first intake · We never face the agency · We do not compete with our partners",
} as const;

export const TRUST_ITEMS = [
  {
    icon: "calendar",
    label: "Federal classification",
    value: "NAICS 541511 · 541512 · 541519",
  },
  {
    icon: "building",
    label: "State procurement",
    value: "NIGP 918-46 · 918-00",
  },
  { icon: "check-circle", label: "Insurance", value: "Prime-routed" },
  { icon: "clock", label: "Response SLA", value: "1 business day" },
] as const;

export const OUTCOMES_STATS = [
  {
    n: "100%",
    l: "GIS-tagged facility inventory delivered on a state environmental plan",
  },
  { n: "0", l: "Statutory-format deficiencies on first submission" },
  { n: "35/35", l: "Municipalities covered per-meeting briefing pack" },
  { n: "0", l: "Late quarterly grant reports filed" },
  { n: "0", l: "Agency-facing engagements ever" },
] as const;

export const BACKBONE_CARDS = [
  {
    badgeNo: "01 · Specify",
    heading: "Technical Requirements Analysis",
    body: "Translating SOW technical sections into architecture, integration, and delivery specifications. Under NDA, against a defined engagement scope.",
    href: "/us-sled/capabilities/",
  },
  {
    badgeNo: "02 · Map",
    heading: "GIS & Data Layer",
    body: "Facility inventories, forecast models, supply chain analysis. ArcGIS, PostGIS, GeoPandas.",
    href: "/us-sled/capabilities/",
  },
  {
    badgeNo: "03 · Engage",
    heading: "Engagement Cloud",
    body: "Public surveys, multilingual platforms, comment capture, disadvantaged-community reach.",
    href: "/us-sled/capabilities/",
  },
  {
    badgeNo: "04 · Produce",
    heading: "Document Production Suite",
    body: "Statutory-format compliant deliverables in PDF, InDesign, ArcGIS, Word, Excel. EGLE-validated.",
    href: "/us-sled/capabilities/",
  },
  {
    badgeNo: "05 · Report",
    heading: "Grant Reporting Automation",
    body: "Quarterly milestone reports generated from project delivery data. Zero late filings.",
    href: "/us-sled/capabilities/",
  },
  {
    badgeNo: "06 · Comply",
    heading: "Statutory Compliance Layer",
    body: "Plan-content checklists, adoption-sequence tracking, audit trails per state framework.",
    href: "/us-sled/capabilities/",
  },
] as const;

export const VEHICLES = [
  {
    heading: "NASPO ValuePoint",
    sub: "Multi-state cooperative, via prime",
    note: "50 states eligible",
  },
  {
    heading: "GSA MAS / IT-70",
    sub: "Federal schedule, via prime",
    note: "Cooperative purchase eligible",
  },
  {
    heading: "State Master Agreements",
    sub: "CA CMAS, NY OGS, TX DIR, prime-held",
    note: "8 active states",
  },
  {
    heading: "Direct Subcontract",
    sub: "Prime-contractor teaming letter",
    note: "Standard 7-day turnaround",
  },
  {
    heading: "Local Co-ops",
    sub: "OMNIA, Sourcewell, regional",
    note: "Via partner primes",
  },
  {
    heading: "Open RFP / RFQ",
    sub: "Bid support as named subcontractor",
    note: "14 wins last 24 mo",
  },
] as const;

export const WHY_CARDS = [
  {
    num: "01 · Specialization depth",
    heading: "We've engineered the deliverables your SOW will name.",
    body: "Real production work across GIS, AI, workflow automation, statutory document production, and grant reporting, ready to plug into your bid stack under teaming letter.",
    counter: 'Counter to "do you understand U.S. SLED technical scope?"',
  },
  {
    num: "02 · Back-office only",
    heading: "We never face the agency.",
    body: "Our model depends on being the partner that makes your delivery stronger, not the firm that walks past you into procurement. We engage only through a prime. No exceptions.",
    counter: 'Counter to "will you go around us?"',
  },
  {
    num: "03 · Your terms",
    heading: "We work on your contract.",
    body: "Subcontract under your master agreement. Insurance routes through you. IP per your standard NDA. We adapt to your delivery model. You don't adapt to ours.",
    counter: 'Counter to "how risky is this operationally?"',
  },
] as const;

export const WHO_WE_ARE_NOT = {
  label: "Who we are not",
  body: "Techtiz is not a procurement intelligence firm. We are a technical implementation subcontractor for U.S. SLED primes. For RFP intelligence, our partners use Deltek GovWin and Bloomberg Government.",
} as const;

export const TWO_STAGES = {
  eyebrow: "Two engagement modes. One contract structure.",
  heading:
    "Engage us pre-award, post-award, or both, the prime always stays the face to the agency.",
  sub: "Under teaming letter and NDA. Pre-award, we draft proposal volumes and build demo systems for your evaluation panel. Post-award, we deliver the technical workstream. Either way, white-labeled.",
  tabs: [
    { id: "pre", label: "Pre-Award Proposal Support" },
    { id: "post", label: "Post-Award Delivery" },
  ],
  pre: {
    tag: "Phase 01 · Pre-Award (under teaming letter + NDA)",
    heading:
      "Load the technical volume. Build the demo. Package past performance.",
    pain: '"17 days to submission. Your architect is on another pursuit. Technical volume, compliance matrix, and orals demo all need owners."',
    role: "Proposal-support services under teaming letter",
    services: [
      {
        n: "01",
        icon: "edit",
        heading: "Technical volume writing",
        body: "Solution architecture, approach, and methodology sections drafted to your outline and style guide.",
      },
      {
        n: "02",
        icon: "check-square",
        heading: "Compliance matrix preparation",
        body: "Line-by-line traceability against the SOW, every statutory requirement mapped to a proposal section, owner, and evidence.",
      },
      {
        n: "03",
        icon: "trending",
        heading: "LOE & pricing input",
        body: "Bottom-up labor estimates with optimistic/likely/pessimistic ranges. Direct-to-pricing model handoff.",
      },
      {
        n: "04",
        icon: "monitor",
        heading: "Demo & POC builds for orals",
        body: "Working prototypes the evaluation panel can click, not slideware. Built in 2-3 weeks, ready for orals.",
      },
      {
        n: "05",
        icon: "book",
        heading: "Past-performance packaging",
        body: "Citation writeups, CPARS-equivalent narratives, and reference letters, in your prime-branded templates.",
      },
      {
        n: "06",
        icon: "users",
        heading: "Key personnel resume tailoring",
        body: "Resume edits, role mapping, and LCAT alignment for proposed staff (yours or ours, named on your roster).",
      },
    ],
  },
  post: {
    tag: "Phase 02 · Post-Award",
    heading: "Deliver the technical workstream, under your name.",
    pain: '"Kickoff Monday. You need senior engineers in seats, a sprint cadence the agency PM trusts, and zero compliance findings. Bench is thin, ramp-up is tight."',
    role: "Back-office delivery · white-label",
    services: [
      {
        n: "01",
        icon: "users",
        heading: "Senior engineering surge",
        body: "Named, vetted engineers, not generic resumes. Cleared resources available; team scaling 2-20 FTEs.",
      },
      {
        n: "02",
        icon: "eye-off",
        heading: "White-label delivery",
        body: "All artifacts, code, comms, docs, demos, carry your prime brand. We never appear in agency-facing channels.",
      },
      {
        n: "03",
        icon: "calendar",
        heading: "Sprint delivery under your PM",
        body: "We slot into your cadence, your tooling, your Definition of Done. Weekly burndown reports to your PM only.",
      },
      {
        n: "04",
        icon: "shield",
        heading: "Compliance posture maintained",
        body: "CJIS, HIPAA, IRS Pub 1075, StateRAMP-aligned controls applied to our work, inside your authorization boundary.",
      },
      {
        n: "05",
        icon: "file",
        heading: "Documentation & KT",
        body: "Living architecture docs, runbooks, and ATO artifacts. KT package delivered before each milestone close.",
      },
      {
        n: "06",
        icon: "alert",
        heading: "IV&V response support",
        body: "Findings remediation, audit responses, and CAP narratives, turned in your templates within SLA.",
      },
    ],
  },
} as const;

export const ONSHORE = {
  eyebrow: "Delivery model",
  heading: "Onshore PM-led. Offshore-engineered. Prime-controlled, end to end.",
  sub: "US-based partner manager runs the engagement. Senior engineers in Lahore build the work. Agency sees the prime; the prime sees one accountable contact.",
  clock: {
    label: "24-hour delivery clock",
    heading:
      "~10 hours of timezone overlap, same-day responses, overnight progress.",
    pkBar: "PK ENG · 11A-8P PKT",
    usBar: "US PM · 9A-6P ET",
    leftNote: "← Lahore picks up overnight",
    overlap: "~10h overlap",
    rightNote: "US wraps the day →",
  },
  concerns: [
    {
      num: "Concern 01",
      icon: "sun",
      heading: "Follow-the-sun delivery without the 3 a.m. Slack pings.",
      pain: "offshore vendors that bury PMs in async messages, gap on handoffs, stall on US-hours blockers.",
      fix: "US engagement manager owns daily standup. Lahore picks up overnight. ~10 hours of US/PK overlap, same-day responses.",
    },
    {
      num: "Concern 02",
      icon: "lock",
      heading: "NDA-bound from the first 30-minute call.",
      pain: "capture leads who can't share the RFP or past-performance set until paperwork clears.",
      fix: "Mutual NDA ready to sign before the discovery call. Sensitive details stay in encrypted channels with audit trails.",
    },
    {
      num: "Concern 03",
      icon: "file-lock",
      heading: "IP assigned to you on day one.",
      pain: 'subcontractors who keep ownership of "reusable components" and license them back, complicating government IP rights.',
      fix: "Period-of-performance IP assignment baked into the teaming letter. Code and artifacts belong to the prime.",
    },
    {
      num: "Concern 04",
      icon: "user-check",
      heading: "Named seniors. No bait-and-switch.",
      pain: "principal engineers on the proposal, junior engineers on delivery. CPARS pain that shows up at year-end review.",
      fix: "Resumes you propose are the engineers who execute. Substitutions only with prime + agency approval.",
    },
  ],
} as const;

export const OPERATING_PRINCIPLES = {
  eyebrow: "Operating Principles",
  heading: "How we work behind a prime.",
  body: "Four non-negotiables that govern every engagement. Signed into our teaming letter so there's no ambiguity.",
  badge: "Locked in teaming letter",
  items: [
    {
      num: "01",
      icon: "eye-off",
      heading: "You stay the only voice to the agency.",
      body: 'Never in agency-facing emails, calls, or deliverables. No co-logos, no "powered by" footers. If the agency asks who built it, the answer is your name.',
    },
    {
      num: "02",
      icon: "edit",
      heading: "Your brand on every artifact.",
      body: "Code, docs, decks, runbooks, and dashboards ship under your prime brand. Internal IP licensed to you for the period of performance.",
    },
    {
      num: "03",
      icon: "shield",
      heading: "Compliance posture, kept.",
      body: "We operate inside your authorization boundary. CJIS, HIPAA, IRS Pub 1075, StateRAMP-aligned controls applied to our work. Audit-ready artifacts on demand.",
    },
    {
      num: "04",
      icon: "network",
      heading: "Prime PM owns the relationship.",
      body: "Status, escalations, and change requests flow through your PM. Weekly burndowns to you, never to the agency. You decide what to surface upstream.",
    },
  ],
} as const;

export const OUTCOMES = {
  eyebrow: "Outcomes that matter to primes",
  heading: "What changes when Techtiz is on your team.",
} as const;

export const BACKBONE = {
  eyebrow: "The Techtiz SLED Backbone",
  heading: "The platform you plug into.",
  sub: "Six capabilities, one stack. Built for the RFP work no off-the-shelf product covers cleanly.",
  linkLabel: "Full capability matrix",
  linkHref: "/us-sled/capabilities/",
} as const;

export const SPECIALIZATIONS = {
  eyebrow: "Specializations we go deep on",
  heading: "The technical domains we engineer in.",
  sub: "Five surface areas where we keep specialized engineers, tooling, and statutory-format expertise on hand. Plug-in ready under a prime's master subcontract.",
  linkLabel: "Delivered engagement examples",
  linkHref: "/us-sled/case-studies/",
  cards: [
    {
      num: "01",
      icon: "map-pin",
      heading: "Materials & environmental data platforms",
      body: "Facility inventories, capacity forecast models, multi-source spatial joins, and statutory-format document production for environmental plans adopted under state framework guidance.",
      tools: ["ArcGIS", "PostGIS", "GeoPandas", "EGLE-format tooling"],
    },
    {
      num: "02",
      icon: "globe",
      heading: "Accessibility remediation engineering",
      body: "WCAG 2.2 AA component-library refactors, PDF/UA conversion pipelines, screen-reader regression suites, plain-language editing of statutory content at portal scale.",
      tools: ["axe DevTools", "NVDA / VoiceOver", "PDF/UA", "Pandoc"],
    },
    {
      num: "03",
      icon: "calendar-grid",
      heading: "Permitting & licensing system modernization",
      body: "Service-layer wrappers over legacy mainframes, ETL pipelines for record migration, reconciliation reporting, IV&V response packages, audit-trail and FOIA export tooling.",
      tools: ["Airbyte", "dbt", "PostgreSQL", "Supabase"],
    },
    {
      num: "04",
      icon: "users",
      heading: "Public engagement platform engineering",
      body: "Multilingual survey platforms, comment-capture and triage workflows, hearing-pack generators, disadvantaged-community outreach instrumentation, equity dashboards.",
      tools: ["i18next", "Twilio", "SendGrid", "Custom survey"],
    },
    {
      num: "05",
      icon: "bar-chart",
      heading: "Grant reporting automation",
      body: "Quarterly milestone reporting pipelines, federal-state reconciliation engines, deadline alerting, audit-trail artifacts, format generators for pass-through programs.",
      tools: ["n8n", "Make.com", "Workday Adaptive", "Metabase"],
    },
  ],
  cta: {
    heading: "A specialization not listed?",
    body: "If your pursuit sits adjacent to one of these surface areas, the capability is likely covered. Start with a 30-minute NDA-first conversation; we'll map our team shape to your SOW.",
    linkLabel: "Start an NDA conversation",
    linkHref: "/us-sled/contact/",
  },
} as const;

export const VEHICLES_SECTION = {
  eyebrow: "Procurement Vehicles",
  heading: "Easy to put on contract.",
  sub: "We work through your existing vehicles. Tell us how the agency buys and we'll structure the teaming agreement to fit.",
  emailPrompt: "Don't see your vehicle?",
} as const;

export const WHY_SECTION = {
  eyebrow: "Why Techtiz",
  heading: "Three answers to three questions every prime asks.",
} as const;

export const HUB_INQUIRY = {
  aside: {
    eyebrow: "Partner with us",
    heading: "NDA first. Subcontract second. White-label always.",
    body: "Capture managers, BD leads, and program managers at U.S. primes: a US partner manager replies within one business day with a mutual NDA template and a 30-minute calendar slot. No public materials exchanged before the NDA is signed.",
    bullets: [
      "One business day response",
      "Mutual NDA on first contact",
      "Teaming letter template included",
      "White-label clause built-in",
    ],
  },
  needOptions: [
    {
      id: "pre",
      label: "Pre-Award Proposal Support",
      desc: "Under NDA + teaming letter",
      defaultOn: true,
    },
    {
      id: "post",
      label: "Post-Award Delivery",
      desc: "Engineers, sprints, KT",
      defaultOn: false,
    },
  ],
  vehicleOptions: [
    "NASPO ValuePoint",
    "GSA MAS / IT-70",
    "State Master Agreement",
    "Direct Subcontract",
    "Local Co-op",
    "Open RFP / RFQ",
    "Other",
  ],
  ndaNote:
    "By submitting, you agree to a mutual NDA on first substantive contact.",
  submitLabel: "Send Inquiry",
  success: {
    heading: "Your inquiry is ready to send.",
    body: "Your email client should have opened a pre-filled message to sled@techtiz.co. If it didn't, email that address directly — we reply within one business day with a mutual NDA template.",
    resetLabel: "Start another inquiry",
  },
} as const;
