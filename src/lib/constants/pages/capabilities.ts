export const CAPABILITIES_SEO = {
  title: "SLED Capabilities | The Techtiz SLED Backbone | Techtiz",
  description:
    "SLED technical capabilities for U.S. prime contractors: engineering backbone, GIS, statutory documents, AI automation, NIST 800-171 alignment, and clear subcontract delivery boundaries.",
  canonicalPath: "/us-sled/capabilities/",
  ogImage: "/assets/capitol.png",
} as const;

export const CAPABILITIES_HERO = {
  eyebrow: "Capabilities of the Techtiz SLED Backbone",
  heading: 'What we <span class="accent">bring on day one.</span>',
  body: "A reference page a prime can scan in two minutes to confirm Techtiz can plug into the bid stack.",
  ctas: [
    {
      label: "Download capability statement",
      href: "/us-sled/capability-statement/",
      variant: "cta" as const,
    },
    {
      label: "Start an NDA conversation",
      href: "/us-sled/contact/",
      variant: "ghost-light" as const,
    },
  ],
} as const;

export const PROCUREMENT_STRIP = {
  eyebrow: "Procurement & registration",
  items: [
    {
      label: "NAICS Codes",
      value: "541511 · 541512",
      caption: "Custom Computer Programming · Computer Systems Design",
      icon: "card",
    },
    {
      label: "NIGP Codes",
      value: "918-46 · 918-00",
      caption: "Software Development · Technology",
      icon: "building",
    },
    {
      label: "Insurance",
      value: "Per engagement",
      caption: "Routed through prime master agreement",
      icon: "shield",
    },
  ],
} as const;

export const FRAMEWORKS_SECTION = {
  eyebrow: "Compliance frameworks",
  heading: "What a prime compliance officer is looking for.",
  body: "Specific framework claims with status, scope, and target dates. We don't list controls we can't substantiate. Where a framework is in-progress, the target is on the page.",
  linkLabel: "See the full operating model and architecture",
  linkHref: "/us-sled/operating-model/",
} as const;

export const COMPLIANCE_FRAMEWORKS = [
  {
    name: "SOC 2 Type II",
    status: "In progress",
    statusClass: "ip",
    what: "<strong>Operational cybersecurity controls.</strong> Independent audit of access, change management, monitoring, and incident response across a 6–12 month observation window.",
    targetLabel: "Target",
    target: "Q4 2026 · Bridge letter on request",
  },
  {
    name: "CJIS Security Policy",
    status: "Posture",
    statusClass: "po",
    what: "<strong>Required for LE, court, and dispatch work.</strong> Fingerprinted, background-checked U.S. personnel on U.S. soil for any CJI touch. Offshore plane never touches CJI.",
    targetLabel: "Evidence",
    target: "Personnel attestations to the prime's CJIS coordinator",
  },
  {
    name: "StateRAMP / TX-RAMP",
    status: "Aligned",
    statusClass: "al",
    what: "<strong>StateRAMP-aware cloud architecture.</strong> We design inside the prime's authorization boundary using controls that map cleanly to StateRAMP and TX-RAMP categorization.",
    targetLabel: "Scope",
    target: "Architecture, SSP narrative, 3PAO response support",
  },
  {
    name: "Section 508 / VPAT",
    status: "Applied",
    statusClass: "ap",
    what: "<strong>Required for all government digital interfaces.</strong> WCAG 2.2 AA validation, screen-reader regression, PDF/UA conversion, plain-language editing. VPAT 2.5 ITI authored per surface.",
    targetLabel: "Deliverable",
    target: "Signed VPAT ships with every scoped engagement",
  },
  {
    name: "NIST 800-171 / CMMC",
    status: "Aligned",
    statusClass: "al",
    what: "<strong>Baseline for primes serving federal customers.</strong> 110-control baseline implemented across access, audit, configuration, incident response, and media protection.",
    targetLabel: "Posture",
    target: "Self-assessment · SSP & POAM maintained · CMMC Level 2 alignment",
  },
  {
    name: "HIPAA · IRS Pub 1075",
    status: "Posture",
    statusClass: "po",
    what: "<strong>For healthcare, eligibility, and tax-data work.</strong> BAA executed as sub under prime BAA. FTI and PHI handled by U.S. personnel on U.S. soil per Pub 1075 §9.3.",
    targetLabel: "Onshore-only",
    target: "for any PHI / FTI / agency PII touch",
  },
] as const;

export const CAPABILITY_MATRIX = [
  {
    name: "Regulatory & Statutory Compliance",
    what: "Plan-content checklists, statute-citation validation, adoption-sequence tracking against state framework guidance.",
    tools:
      "Custom rule engines · Statutory framework libraries · EGLE guidance maps",
  },
  {
    name: "GIS & Data Pipelines",
    what: "Facility inventories, forecast models, supply chain analysis, parcel data, multi-source spatial joins.",
    tools: "ArcGIS · PostGIS · GeoPandas · Mapbox · Leaflet",
  },
  {
    name: "Public Engagement Technology",
    what: "Multilingual surveys, comment capture, disadvantaged-community reach, hearing presentation packs.",
    tools:
      "Custom survey platforms · Accessibility tooling · i18n stacks · Plain-language pipelines",
  },
  {
    name: "Grant Reporting Automation",
    what: "Quarterly milestone reports auto-generated, reconciliation against delivery data, federal-state report alignment.",
    tools: "Make.com · n8n · Custom reporting pipelines · Workday Adaptive",
  },
  {
    name: "Document Production & Format Compliance",
    what: "Statutory-format compliant deliverables in PDF, InDesign, ArcGIS, Word, Excel. PDF/UA accessibility built in.",
    tools: "Adobe Creative Suite · Microsoft Office · PDF/UA tooling · LaTeX",
  },
  {
    name: "Accessibility & Equity",
    what: "WCAG 2.2 AA validation, multilingual content, disadvantaged-community engagement, plain-language editing.",
    tools:
      "axe DevTools · Screen-reader testing (NVDA, VoiceOver) · Plain-language style guides",
  },
  {
    name: "Adoption Sequence Tracking",
    what: "Statutory comment periods, public hearings, board adoption, EGLE submission, deadline alerting.",
    tools:
      "Project management instrumentation · Notion · Linear · Custom deadline alerting",
  },
  {
    name: "Audit Trail & Records Management",
    what: "Every delivery action timestamped, attributable, exportable for FOIA and state public-records requests.",
    tools:
      "Custom audit logging · Structured records export · S3 immutable storage",
  },
] as const;

export const TECH_STACK = [
  {
    heading: "GIS",
    subLabel: "Spatial & data",
    tools: [
      "ArcGIS Pro",
      "ArcGIS Online",
      "PostGIS",
      "GeoPandas",
      "Mapbox",
      "Leaflet",
      "QGIS",
      "Turf.js",
    ],
  },
  {
    heading: "Engagement & Automation",
    subLabel: "Public-facing workflows",
    tools: [
      "Make.com",
      "n8n",
      "Zapier",
      "Custom survey platforms",
      "SurveyMonkey API",
      "Twilio",
      "SendGrid",
      "i18next",
    ],
  },
  {
    heading: "Docs & Publishing",
    subLabel: "Statutory-format deliverables",
    tools: [
      "Adobe InDesign",
      "Adobe Acrobat Pro",
      "Microsoft Office",
      "PDF/UA",
      "LaTeX",
      "Pandoc",
      "Word XML",
    ],
  },
  {
    heading: "Data & Reporting",
    subLabel: "Audit, grant, compliance",
    tools: [
      "PostgreSQL",
      "Supabase",
      "Metabase",
      "DuckDB",
      "dbt",
      "Airbyte",
      "Workday Adaptive",
      "S3",
    ],
  },
] as const;

export const BOUNDARIES = [
  {
    heading: "Fieldwork",
    body: "Site visits, in-person stakeholder facilitation, on-site meeting moderation. We support remotely; the prime owns the physical room.",
  },
  {
    heading: "Legal drafting",
    body: "Legal counsel for statutory interpretation must come from the prime or a separate sub. We follow the legal opinion; we don't issue it.",
  },
  {
    heading: "Prime contractor role",
    body: "We don't bid against our partners. Subcontract-only. Direct-to-agency engagements are out of scope.",
  },
  {
    heading: "Direct-to-agency engagements",
    body: "Every engagement routes through a U.S. prime under a master subcontract. NDAs and IP through prime templates.",
  },
  {
    heading: "Off-the-shelf product replacement",
    body: "We don't compete with Tyler, Granicus, CivicPlus, OpenGov, GovPilot or other GovTech product companies. When a prime needs a product, we recommend the right one. We're the subcontractor that ships the custom piece the off-the-shelf platform doesn't cover.",
  },
  {
    heading: "Procurement intelligence / capture-consulting analyst services",
    body: "We do not sell access to public RFPs, anonymized tenders, or procurement subscription data. That lane is operated by Deltek GovWin, Bloomberg Government, and dedicated U.S. capture-consulting firms with analyst teams and regulatory structures. We are a technical implementation subcontractor that supports primes inside structured engagements.",
  },
] as const;

export const ENGAGE_STEPS = [
  {
    n: "01",
    heading: "Introduction",
    body: "Email or LinkedIn from a capture manager, BD lead, or program manager at a U.S. prime. Within one business day, a Techtiz partner manager replies with a mutual NDA template and a calendar slot.",
    when: "Day 1 to 5",
  },
  {
    n: "02",
    heading: "Capability conversation under NDA",
    body: "30 to 60 minute call. The prime describes the engagement type, the procurement vehicle, and any sensitive context. We describe which Backbone capabilities apply, the team shape, and the contracting structure.",
    when: "Week 1 to 2",
  },
  {
    n: "03",
    heading: "Scoped subcontract conversation",
    body: "If the engagement fits, we deliver a scoped statement of work, teaming letter draft, and named-resume options. Your contracts team takes it from there. Subcontract paperwork closes within 7 to 14 days for most vehicles.",
    when: "Week 2 to 4",
  },
] as const;
