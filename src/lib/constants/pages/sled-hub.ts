import { SITE } from "../site";

export const SLED_HUB_SEO = {
  title: "U.S. SLED · Back-office engineering for primes | Techtiz",
  description:
    "AI engineering behind your SLED prime contract. Back-office, white-label, NDA-first. We never face the agency.",
  canonicalPath: "/us-sled/",
  ogImage: "/assets/hero-capitol.png",
} as const;

export const SLED_HERO = {
  eyebrow: "U.S. SLED · Subcontractor to primes",
  heading:
    'AI engineering behind your <span class="accent">SLED prime contract.</span>',
  body: "Back-office, white-label, NDA-first. We never face the agency.",
  ctas: [
    {
      label: "Start an NDA conversation",
      href: "/us-sled/contact/",
      variant: "ghost-dark",
      showArrow: false,
      beam: true,
    },
    {
      label: "How we engage",
      href: "/us-sled/how-we-engage/",
      variant: "cta",
      showArrow: false,
    },
  ],
} as const;

export const TRUST_BADGES = [
  { label: "SAM.gov registration in progress", beam: true },
  { label: "WCAG 2.2 AA" },
  { label: "Section 508 / VPAT" },
  { label: "NIST 800-171 / CMMC" },
  { label: "CJIS · HIPAA · Pub 1075" },
  {
    label: "NAICS 541511 · 541512 · 541519 · 541611 · 541990",
    naics: true,
  },
] as const;

export const PAST_PERFORMANCE_STRIPE = {
  label: "Active engagements",
  body: "Active subcontractor support for U.S. SLED prime contractors under NDA. Agency references and CPARS-style performance narratives available upon executed teaming agreement.",
} as const;

export const OUTCOMES_STATS = [
  {
    n: "Live",
    l: "Subcontract delivery on state vehicles via Tier 1 primes",
  },
  {
    n: "NDA",
    l: "References and CPARS-style narratives under teaming agreement",
  },
  { n: "0", l: "Agency-facing engagements—subcontract-only model" },
  { n: "1 day", l: `Teaming inquiry response at ${SITE.email.sled}` },
  {
    n: "100%",
    l: "White-label artifacts under your prime brand",
  },
] as const;

export type SledBackboneCard = {
  meta: string;
  heading: string;
  detail: string;
  stackHtml: string;
  icon:
    | "map"
    | "messages-square"
    | "file-stack"
    | "chart-column"
    | "scale"
    | "ruler";
  dark?: boolean;
};

export const SLED_BACKBONE = {
  eyebrow: "The backbone",
  heading: "The platform you plug into.",
  linkLabel: "See the full capability matrix",
  linkHref: "/us-sled/capabilities/",
  cards: [
    {
      meta: "01 · MAP",
      heading: "Geospatial intelligence",
      detail: "GIS layers, spatial joins, and statutory map production.",
      stackHtml: "<b>ArcGIS</b> · <b>PostGIS</b> · GeoPandas · Mapbox",
      icon: "map",
      dark: true,
    },
    {
      meta: "02 · ENGAGE",
      heading: "Engagement cloud",
      detail: "Multilingual surveys, comment capture, and outreach.",
      stackHtml: "surveys · i18n · capture",
      icon: "messages-square",
    },
    {
      meta: "03 · PRODUCE",
      heading: "Document suite",
      detail: "Accessible, statutory-format document production at scale.",
      stackHtml: "<b>PDF/UA</b> · InDesign",
      icon: "file-stack",
    },
    {
      meta: "04 · REPORT",
      heading: "Grant reporting",
      detail: "Automated milestone and reconciliation pipelines.",
      stackHtml: "<b>n8n</b> · Make",
      icon: "chart-column",
    },
    {
      meta: "05 · COMPLY",
      heading: "Statutory layer",
      detail: "Audit trails and controls inside your authorization boundary.",
      stackHtml: "audit trails · CJIS · Pub 1075",
      icon: "scale",
    },
    {
      meta: "06 · SPECIFY",
      heading: "Requirements",
      detail: "SOW technical sections translated into delivery specs.",
      stackHtml: "SOW to specs",
      icon: "ruler",
    },
  ],
} as const satisfies {
  eyebrow: string;
  heading: string;
  linkLabel: string;
  linkHref: string;
  cards: readonly SledBackboneCard[];
};

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

export type SledModelDeliverable = {
  num: string;
  icon:
    | "file-text"
    | "list-checks"
    | "monitor-play"
    | "calculator"
    | "award"
    | "id-card"
    | "users-round"
    | "tag"
    | "shield-check";
  heading: string;
  body: string;
};

export type SledModelMode = {
  quoteLabel: string;
  quote: string;
  quoteFoot: string;
  quoteFootIcon: "file-pen-line" | "rocket";
  quoteTone: "pain" | "win";
  deliverables: readonly SledModelDeliverable[];
  moreDeliverables?: {
    summary: string;
    items: readonly SledModelDeliverable[];
  };
};

export const SLED_MODEL = {
  eyebrow: "The model",
  heading: "Onshore PM. Offshore engineering.",
  headingAccent: "One prime-controlled team.",
  sub: "Engage us pre-award, post-award, or both. Under teaming letter and NDA, the prime always stays the face to the agency.",
  tablistLabel: "Engagement mode",
  tabs: [
    { id: "pre", label: "Pre-award" },
    { id: "post", label: "Post-award" },
  ],
  pre: {
    quoteLabel: "The pain",
    quote:
      "17 days to submission, architect on another pursuit, volume and matrix need owners.",
    quoteFoot: "Pre-award · under teaming letter + NDA",
    quoteFootIcon: "file-pen-line",
    quoteTone: "pain",
    deliverables: [
      {
        num: "01",
        icon: "file-text",
        heading: "Technical volume",
        body: "Architecture and approach, your outline.",
      },
      {
        num: "02",
        icon: "list-checks",
        heading: "Compliance matrix",
        body: "Line-by-line SOW traceability.",
      },
      {
        num: "03",
        icon: "monitor-play",
        heading: "Orals demo",
        body: "Clickable POC in 2 to 3 weeks.",
      },
    ],
    moreDeliverables: {
      summary: "Three more deliverables",
      items: [
        {
          num: "04",
          icon: "calculator",
          heading: "LOE & pricing",
          body: "Bottom-up labor estimates with rationale.",
        },
        {
          num: "05",
          icon: "award",
          heading: "Past performance",
          body: "Tailored write-ups to the SOW.",
        },
        {
          num: "06",
          icon: "id-card",
          heading: "Key personnel",
          body: "Named seniors, resumes, letters.",
        },
      ],
    },
  },
  post: {
    quoteLabel: "The win",
    quote:
      "Kickoff Monday. Senior engineers in seats, a cadence the agency PM trusts, zero findings.",
    quoteFoot: "Post-award · inside your authorization boundary",
    quoteFootIcon: "rocket",
    quoteTone: "win",
    deliverables: [
      {
        num: "01",
        icon: "users-round",
        heading: "Engineering surge",
        body: "Named seniors, 2 to 20 FTEs.",
      },
      {
        num: "02",
        icon: "tag",
        heading: "White-label delivery",
        body: "Everything under your brand.",
      },
      {
        num: "03",
        icon: "shield-check",
        heading: "Compliance kept",
        body: "Inside your authorization boundary.",
      },
    ],
  },
} as const satisfies {
  eyebrow: string;
  heading: string;
  headingAccent: string;
  sub: string;
  tablistLabel: string;
  tabs: readonly { id: string; label: string }[];
  pre: SledModelMode;
  post: SledModelMode;
};

export type SledDeliveryConcern = {
  icon: "sun" | "lock" | "file-lock" | "user-round-check";
  tabNum: string;
  tabLabel: string;
  heading: string;
  trap: string;
  fix: string;
};

export const SLED_DELIVERY = {
  eyebrow: "Delivery model",
  heading: "Onshore PM-led.",
  headingLine2: "Offshore-engineered.",
  sub: "US partner manager runs the engagement. Senior engineers in Lahore build the work. The agency sees the prime; the prime sees one accountable contact.",
  tablistLabel: "Common concerns",
  clock: {
    label: "24-hour delivery clock",
    heading: "~10 hours of overlap, same-day responses, overnight progress.",
    ruler: ["12a", "3a", "6a", "9a", "12p", "3p", "6p", "9p", "12a"] as const,
    overlapTag: "~10h overlap",
    pkBar: "PK ENG · 11A–8P PKT",
    usBar: "US PM · 9A–6P ET",
    leftNote: "← Lahore picks up overnight",
    rightNote: "US wraps the day →",
  },
  concerns: [
    {
      icon: "sun",
      tabNum: "01",
      tabLabel: "Follow-the-sun",
      heading: "Follow-the-sun, no 3 a.m. pings",
      trap: "Offshore vendors bury PMs in async pings and stall on US-hours blockers.",
      fix: "US manager owns the daily standup; Lahore picks up overnight for same-day responses.",
    },
    {
      icon: "lock",
      tabNum: "02",
      tabLabel: "NDA-bound",
      heading: "NDA-bound from the first call",
      trap: "Capture leads can't share the RFP or past-performance set until paperwork clears.",
      fix: "Mutual NDA ready to sign before discovery; sensitive details stay in audited channels.",
    },
    {
      icon: "file-lock",
      tabNum: "03",
      tabLabel: "IP on day one",
      heading: "IP assigned to you on day one",
      trap: 'Vendors keep "reusable components" and license them back, complicating government IP rights.',
      fix: "Period-of-performance IP assignment baked into the teaming letter. Code is the prime's.",
    },
    {
      icon: "user-round-check",
      tabNum: "04",
      tabLabel: "Named seniors",
      heading: "Named seniors, no bait-and-switch",
      trap: "Principals on the proposal, juniors on delivery, CPARS pain at year-end review.",
      fix: "The resumes you propose are the engineers who execute. Substitutions need prime approval.",
    },
  ],
} as const satisfies {
  eyebrow: string;
  heading: string;
  headingLine2: string;
  sub: string;
  tablistLabel: string;
  clock: {
    label: string;
    heading: string;
    ruler: readonly string[];
    overlapTag: string;
    pkBar: string;
    usBar: string;
    leftNote: string;
    rightNote: string;
  };
  concerns: readonly SledDeliveryConcern[];
};

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
  sub: "Metrics and agency references are shared under executed teaming agreement never published in violation of prime NDAs.",
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
      tools: ["ArcGIS", "PostGIS", "GeoPandas", "State plan formats"],
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
      body: "Service layer wrappers over legacy mainframes, ETL pipelines for record migration, reconciliation reporting, IV&V response packages, audit-trail and FOIA export tooling.",
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

export const WHY_SECTION = {
  eyebrow: "Why Techtiz",
  heading: "Three answers to three questions every prime asks.",
} as const;

export const HUB_INQUIRY = {
  aside: {
    eyebrow: "Partner with us",
    heading: "NDA first. Subcontract second. White-label always.",
    body: `Capture managers, BD leads, and program managers at U.S. primes: email ${SITE.email.sled} or use this form. A U.S. partner manager replies within one business day with a mutual NDA template and a 30-minute calendar slot. No public materials exchanged before the NDA is signed.`,
    bullets: [
      `${SITE.email.sled} · ${SITE.responseSla.sled}`,
      "Mutual NDA on first contact",
      "Teaming letter template included",
      "Background-check-ready · CUI-aware delivery",
    ],
  },
  form: {
    rfpLabel: "RFP / RFQ / solicitation #",
    rfpPlaceholder: "e.g. RFP-2026-0142 (pre-award)",
    ndaLabel: "NDA status",
    ndaPlaceholder: "Select…",
    ndaOptions: ["Not started", "In progress", "Executed teaming agreement"],
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
    heading: "Inquiry received.",
    body: `Thank you for reaching out. Our U.S.-based partner manager will reply within one business day from ${SITE.email.sled} with a mutual NDA template and a calendar slot.`,
    resetLabel: "Start another inquiry",
  },
} as const;
