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
      label: "How we partner →",
      href: "/us-sled/how-we-partner/",
      variant: "filled",
      showArrow: false,
    },
  ],
  stats: [
    { n: "~10h", l: "US/PK overlap, daily" },
    { n: "1 day", l: "Response SLA, NDA-bound" },
    { n: "NDA", l: "First on substantive contact" },
    { n: "0", l: "Agency-facing engagements" },
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

export const HUB_TRUST_ITEMS = [
  {
    icon: "calendar",
    label: "Federal classification",
    value: "NAICS 541511 · 541512",
  },
  {
    icon: "building",
    label: "State procurement",
    value: "NIGP 918-46 · 918-00",
  },
  { icon: "check-circle", label: "Insurance", value: "Prime-routed" },
  { icon: "clock", label: "Response SLA", value: "1 business day" },
] as const;

export const PAST_PERFORMANCE_STRIPE = {
  label: "Active engagements",
  body: "Active subcontractor support for U.S. SLED prime contractors under NDA. Agency references and CPARS-style performance narratives available upon executed teaming agreement.",
} as const;

export const SLED_FEATURED_CLIENTS_SECTION = {
  heading: "Active engagement jurisdictions",
} as const;

export const SLED_FEATURED_CLIENTS = [
  {
    name: "University of Wyoming",
    image: "/assets/sled-case-studies/uwyo/logo.png",
  },
  {
    name: "Town of Erie, Colorado",
    image: "/assets/sled-case-studies/erie/logo.png",
  },
  {
    name: "Broome County, New York",
    image: "/assets/sled-case-studies/broome/logo.png",
  },
  {
    name: "West Metro Fire Rescue",
    image: "/assets/sled-case-studies/west-metro/logo.png",
  },
  {
    name: "Town of Parker",
    image: "/assets/sled-case-studies/parker/logo.png",
  },
  {
    name: "City of Berkley",
    image: "/assets/sled-case-studies/berkley/logo.png",
  },
  {
    name: "OCM BOCES",
    image: "/assets/sled-case-studies/ocmboces/logo.png",
  },
  {
    name: "County of Westchester",
    image: "/assets/sled-case-studies/westchester/logo.png",
  },
  {
    name: "Wayne RESA",
    image: "/assets/sled-case-studies/wayne/logo.png",
  },
  {
    name: "Adams County, Colorado",
    image: "/assets/sled-case-studies/adams/logo.png",
  },
  {
    name: "City of Holland",
    image: "/assets/sled-case-studies/holland/logo.png",
  },
  {
    name: "Miami Dade College",
    image: "/assets/sled-case-studies/mdc/logo.png",
  },
  {
    name: "Altadena Libraries",
    image: "/assets/sled-case-studies/altadena/logo.png",
  },
  {
    name: "City of Escondido",
    image: "/assets/sled-case-studies/escondido/logo.png",
  },
] as const;

export type SledOutcomeStat = {
  label: string;
  value?: string;
  tickerTo?: number;
  suffix?: string;
};

export const SLED_OUTCOMES = {
  eyebrow: "Outcomes that matter to primes",
  heading: "What changes when Techtiz is on your team.",
  stats: [
    {
      label:
        "GIS-tagged facility inventory delivered on a state environmental plan",
      tickerTo: 100,
      suffix: "%",
    },
    {
      label: "Statutory-format deficiencies on first submission",
      value: "0",
    },
    {
      label: "Municipalities covered per-meeting briefing pack",
      tickerTo: 35,
      suffix: "/35",
    },
    {
      label: "Late quarterly grant reports filed",
      value: "0",
    },
    {
      label: "Agency-facing engagements ever",
      value: "0",
    },
  ],
} as const satisfies {
  eyebrow: string;
  heading: string;
  stats: readonly SledOutcomeStat[];
};

export type SledProofMetric = {
  label: string;
  value?: string;
  variant?: "green" | "cyan";
  tickerTo?: number;
  tickerPrefix?: string;
  tickerSuffix?: string;
};

export type SledProofSlide = {
  left:
    | {
        kind: "portal";
        imageSrc: string;
        imageAlt: string;
        url: string;
        caption: string;
      }
    | {
        kind: "nda";
        caption: string;
      };
  state: string;
  status: { kind: "completed" | "nda"; label: string };
  title: string;
  subtitle: string;
  metrics: readonly SledProofMetric[];
  tags: readonly string[];
  locked: readonly string[];
};

export const SLED_PROOF = {
  eyebrow: "Engagement insights · under NDA",
  heading: "Proof a prime can ",
  headingAccent: "verify.",
  linkHref: "/us-sled/case-studies/",
  linkLabel: "All engagement examples",
  slides: [
    {
      left: {
        kind: "portal",
        imageSrc: "/assets/portal-ui.png",
        imageAlt: "Government portal interface screenshot",
        url: "portal.co.gov",
        caption:
          "Subcontract delivery for a portal serving ~300k residents, under the prime's brand.",
      },
      state: "CO",
      status: { kind: "completed", label: "Completed" },
      title: "Government portal redesign",
      subtitle: "WCAG 2.2 AA",
      metrics: [
        { label: "A/AA failures at launch", tickerTo: 0, variant: "green" },
        { label: "Pages migrated", tickerTo: 100, tickerSuffix: "%" },
        {
          label: "Residents served",
          tickerTo: 300,
          tickerPrefix: "~",
          tickerSuffix: "k",
        },
        { label: "Value (prime-held)", value: "$250–300k" },
      ],
      tags: ["WordPress", "WCAG 2.2 AA", "PDF/UA", "Leaflet", "Figma"],
      locked: [
        "Agency reference under teaming agreement",
        "CPARS narrative on request",
      ],
    },
    {
      left: {
        kind: "nda",
        caption:
          "Ongoing accounting, audit-prep, and statutory reporting for a California special district, under teaming agreement.",
      },
      state: "CA",
      status: { kind: "nda", label: "RFP · responding" },
      title: "Library district finance modernization",
      subtitle: "Accounting & financial consulting",
      metrics: [
        { label: "Annual budget operated", value: "$3.9M" },
        { label: "Residents served", tickerTo: 43, tickerSuffix: "k" },
        {
          label: "Cash-flow projection model",
          tickerTo: 10,
          tickerSuffix: "-yr",
        },
        {
          label: "Engagement value (under NDA)",
          value: "NDA",
          variant: "cyan",
        },
      ],
      tags: [
        "GAAP close",
        "CFD bond",
        "OPEB",
        "PERS",
        "1099 / W-9",
        "Budget-to-Actual",
      ],
      locked: [
        "Scope, LOE & pricing under NDA",
        "District name & references on request",
      ],
    },
  ],
} as const satisfies {
  eyebrow: string;
  heading: string;
  headingAccent: string;
  linkHref: string;
  linkLabel: string;
  slides: readonly SledProofSlide[];
};

export const SLED_VEHICLES = {
  eyebrow: "Procurement vehicles",
  heading: "Easy to put on contract.",
  linkHref: "/us-sled/how-we-engage/",
  linkLabel: "How to put us on contract",
  mapAriaLabel:
    "Dotted map of the United States showing state and local coverage via primes",
  mapLegend: [
    { label: "Served via primes", variant: "served" },
    { label: "Reachable on request", variant: "reachable" },
  ],
  chips: [
    { name: "NASPO ValuePoint", meta: "50 states" },
    { name: "GSA MAS / IT-70", meta: "via prime" },
    { name: "State Masters", meta: "CMAS · OGS · DIR" },
    { name: "Direct Subcontract", meta: "7-day" },
    { name: "Local Co-ops", meta: "OMNIA · Sourcewell" },
    { name: "Open RFP / RFQ", meta: "bid support" },
  ],
} as const;

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
      dark: false,
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

export const SLED_WHY_TECHTIZ = {
  eyebrow: "Why Techtiz",
  heading: "Three answers to three questions every prime asks.",
  cards: [
    {
      num: "01 · Specialization depth",
      heading: "We've engineered the deliverables your SOW will name.",
      body: "Production work across GIS, AI, automation, statutory document production, and grant reporting, ready to plug into your bid stack.",
      counter: '"Do you understand U.S. SLED technical scope?"',
    },
    {
      num: "02 · Back-office only",
      heading: "We never face the agency.",
      body: "Our model depends on making your delivery stronger, not walking past you into procurement. We engage only through a prime. No exceptions.",
      counter: '"Will you go around us?"',
    },
    {
      num: "03 · Your terms",
      heading: "We work on your contract.",
      body: "Subcontract under your master agreement. Insurance routes through you. IP per your standard NDA. You don't adapt to us.",
      counter: '"How risky is this operationally?"',
    },
  ],
} as const;

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

export const SLED_OPERATING_PRINCIPLES = {
  eyebrow: "Operating principles",
  heading: "How we work behind a prime.",
  items: [
    {
      heading: "Only voice to the agency",
      body: 'No co-logos, no "powered by."',
    },
    {
      heading: "Your brand, every artifact",
      body: "Code, docs, dashboards, all yours.",
    },
    {
      heading: "Compliance posture kept",
      body: "Inside your authorization boundary.",
    },
    {
      heading: "Your PM owns it",
      body: "You decide what surfaces upstream.",
    },
  ],
} as const;

export type SledSpecializationItem = {
  num: string;
  icon: "map-pin" | "accessibility" | "server" | "users" | "chart-column";
  title: string;
  body: string;
  tools: readonly string[];
};

export const SLED_SPECIALIZATIONS = {
  eyebrow: "Specializations",
  heading: "The technical domains we engineer in.",
  items: [
    {
      num: "01",
      icon: "map-pin",
      title: "Materials & environmental data",
      body: "Facility inventories, capacity forecast models, multi-source spatial joins, statutory-format document production.",
      tools: ["ArcGIS", "PostGIS", "GeoPandas"],
    },
    {
      num: "02",
      icon: "accessibility",
      title: "Accessibility remediation",
      body: "WCAG 2.2 AA refactors, PDF/UA pipelines, screen-reader regression suites, plain-language editing at portal scale.",
      tools: ["axe", "NVDA / VoiceOver", "PDF/UA"],
    },
    {
      num: "03",
      icon: "server",
      title: "Permitting & licensing systems",
      body: "Service layers over legacy mainframes, record-migration ETL, reconciliation reporting, FOIA export tooling.",
      tools: ["Airbyte", "dbt", "PostgreSQL"],
    },
    {
      num: "04",
      icon: "users",
      title: "Public engagement platforms",
      body: "Multilingual surveys, comment triage workflows, hearing-pack generators, equity dashboards.",
      tools: ["i18next", "Twilio", "SendGrid"],
    },
    {
      num: "05",
      icon: "chart-column",
      title: "Grant reporting automation",
      body: "Quarterly milestone pipelines, federal-state reconciliation engines, deadline alerting, audit-trail artifacts.",
      tools: ["n8n", "Make", "Metabase"],
    },
  ],
  cta: {
    textHtml:
      "A specialization not listed? <b>We'll map our team to your SOW.</b>",
    linkLabel: "Start an NDA conversation",
    linkHref: "/us-sled/contact/",
  },
} as const satisfies {
  eyebrow: string;
  heading: string;
  items: readonly SledSpecializationItem[];
  cta: {
    textHtml: string;
    linkLabel: string;
    linkHref: string;
  };
};

export const SLED_HUB_INQUIRY = {
  aside: {
    eyebrow: "Partner with us",
    heading: "NDA first. Subcontract second.",
    headingAccent: "White-label always.",
    body: "For capture managers, BD leads, and PMs at U.S. primes. A US partner manager replies within one business day, no public materials, no agency contact.",
    bullets: [
      "Reply within 1 business day from a US partner manager",
      "Mutual NDA template + a 30-minute calendar slot",
      "Everything stays behind your brand, always",
    ],
    imageSrc: "/assets/dotmap-brand.png",
    imageAlt: "Techtiz product dashboard mockup",
  },
  needOptions: [
    {
      value: "Pre-award proposal support",
      label: "Pre-award proposal support",
      defaultOn: true,
    },
    {
      value: "Post-award delivery",
      label: "Post-award delivery",
      defaultOn: false,
    },
    {
      value: "Both / not sure yet",
      label: "Both / not sure",
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
  ],
  descLabel: "Engagement phase, scope, timing",
  descPlaceholder: "Tell us about the pursuit or active contract…",
  submitLabel: "Send inquiry",
  reassure:
    "Our U.S. partner manager replies within one business day. Mutual NDA available before any details are shared.",
  success: {
    heading: "Inquiry received.",
    body: `Thank you for reaching out. Our U.S.-based partner manager will reply within one business day from ${SITE.email.sled} with a mutual NDA template and a calendar slot.`,
    resetLabel: "Start another inquiry",
  },
} as const;
