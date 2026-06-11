export const HOW_WE_ENGAGE_SEO = {
  title:
    "How We Partner · Engagement & procurement for U.S. primes | Techtiz SLED",
  description:
    "How Techtiz partners with U.S. SLED primes: an NDA-first three-step engagement sequence, the teaming-letter non-negotiables, the procurement vehicles we land on, and how a prime adds us as a subcontractor in days.",
  canonicalPath: "/us-sled/how-we-partner/",
  ogImage: "/assets/capitol.png",
} as const;

export const HOW_WE_ENGAGE_HERO = {
  eyebrow: "U.S. SLED · How we partner",
  heading: 'How a subcontract <span class="accent">comes together.</span>',
  body: "From first email to staffed in days. NDA on first contact, subcontract-only, never agency-facing. The structured relationship is the only way in.",
  ctas: [
    {
      label: "Start an NDA conversation",
      href: "/us-sled/contact/",
      variant: "ghost-light" as const,
      beam: true,
    },
    {
      label: "See capabilities & compliance",
      href: "/us-sled/capabilities/",
      variant: "cta" as const,
    },
  ],
} as const;

export const SEQUENCE_SECTION = {
  eyebrow: "The sequence",
  heading: "Three steps. Predictable timing. The same playbook every time.",
  body: "The sequence is itself the credibility signal. Capture and BD leads at U.S. primes know the rhythm; we hold to it.",
} as const;

export const SEQUENCE_STEPS = [
  {
    n: "01",
    icon: "handshake",
    heading: "Introduction",
    when: "Day 1 to 5",
    body: "An intro from a capture manager or BD lead at a U.S. prime. A US-based partner manager replies within one business day with a mutual NDA and a calendar slot.",
    tools: ["Mutual NDA", "Calendar slot"],
  },
  {
    n: "02",
    icon: "messages-square",
    heading: "Capability conversation",
    when: "Week 1 to 2",
    body: "A 30 to 60 minute call under NDA. You describe the engagement and vehicle; we describe the team shape, contracting structure, and operating-model pack.",
    tools: ["Team shape", "Operating-model pack"],
  },
  {
    n: "03",
    icon: "signature",
    heading: "Scoped subcontract",
    when: "Week 2 to 4",
    body: "We deliver a scoped SOW, a teaming-letter draft, and named-resume options mapped to your LCATs. Paperwork closes in 7 to 14 days for most vehicles.",
    tools: ["SOW + teaming letter", "IP & white-label"],
  },
] as const;

export const NON_NEGOTIABLES_SECTION = {
  eyebrow: "Locked in the teaming letter",
  heading: "Five non-negotiables, in writing.",
  body: "These appear in the teaming-letter draft we send in Step 3. They are not negotiable; they are how the practice operates and why a prime can hand us sensitive scope.",
  stamp: "Teaming-letter clauses",
} as const;

export const NON_NEGOTIABLES = [
  {
    n: "01",
    icon: "eye-off",
    heading: "You stay the only voice to the agency",
    body: "Never in agency-facing emails, calls, or deliverables. No co-logos. We never contact agencies directly.",
  },
  {
    n: "02",
    icon: "badge",
    heading: "Subcontract-only. We never bid as prime",
    body: "Direct-to-agency proposals are out of scope. We don't bid against our partners.",
  },
  {
    n: "03",
    icon: "pen-line",
    heading: "Your brand on every artifact",
    body: "Code, docs, runbooks, and dashboards ship under your brand. IP licensed to you for the period of performance.",
  },
  {
    n: "04",
    icon: "shield-check",
    heading: "Compliance posture, kept",
    body: "We work inside your authorization boundary, with proactive disclosure for your flow-down file.",
  },
  {
    n: "05",
    icon: "git-merge",
    heading: "Prime PM owns the relationship",
    body: "Status, escalations, and change requests flow through your PM. Weekly burndowns go to you.",
  },
] as const;

export const COVERAGE_SECTION = {
  eyebrow: "Procurement vehicles",
  heading: "Easy to put on contract.",
  body: "We never hold the prime contract, you do. Techtiz lands on your paper as a subcontractor through whichever vehicle your pursuit already runs on. Cooperative purchasing extends that reach without a fresh competition.",
  mapLegend: [
    { label: "Served via primes", tone: "served" as const },
    { label: "Reachable on request", tone: "muted" as const },
  ],
} as const;

export const COVERAGE_CHIPS = [
  { name: "NASPO ValuePoint", meta: "50 states" },
  { name: "GSA MAS / IT-70", meta: "via prime" },
  { name: "State Masters", meta: "CMAS · OGS · DIR" },
  { name: "Direct Subcontract", meta: "7-day" },
  { name: "Local Co-ops", meta: "OMNIA · Sourcewell" },
  { name: "Open RFP / RFQ", meta: "bid support" },
] as const;

export const VEHICLES_BENTO_SECTION = {
  eyebrow: "Six paths onto your contract",
  heading: "Each is a way for a prime to add us as a sub.",
  body: "We help your contracts team pick the cleanest route for the pursuit, then conform to it. No vehicle of our own to reconcile.",
} as const;

export const VEHICLES_BENTO = [
  {
    icon: "network",
    meta: "50 states + territories",
    heading: "NASPO ValuePoint",
    body: "The multi-state cooperative most SLED buyers already use. Your prime adds our scope under its participating-addendum award.",
    stack: "No new competition needed",
    stackBold: true,
    dark: false,
  },
  {
    icon: "building-2",
    meta: "Via prime SIN",
    heading: "GSA MAS / IT-70",
    body: "For primes with a GSA Multiple Award Schedule, we deliver as a subcontractor under your SIN.",
    stack: "awarded rates",
    stackPrefix: "LCATs mapped to",
  },
  {
    icon: "signature",
    meta: "CMAS · OGS · DIR",
    heading: "State Master Agreements",
    body: "CMAS (CA), OGS (NY), DIR (TX), and equivalents. We slot in as named technical staff against the relevant categories.",
    stack: "+ more",
    stackPrefix: "Statewide masters",
  },
  {
    icon: "handshake",
    meta: "7-day turnaround",
    heading: "Direct Subcontract",
    body: "The fastest path. A teaming letter and scoped SOW under your existing master agreement.",
    stack: "7 to 14 days",
    stackPrefix: "Closes in",
  },
  {
    icon: "users-round",
    meta: "OMNIA · Sourcewell",
    heading: "Local Cooperatives",
    body: "Co-ops let cities, counties, and districts buy off an existing award. We deliver under the awarded prime.",
    stack: "Regional co-ops",
  },
  {
    icon: "file-search",
    meta: "Pre-award support",
    heading: "Open RFP / RFQ",
    body: "No vehicle yet? We support your bid: technical volume, compliance matrix, orals demo, then deliver as your named sub on award.",
    stack: "Bid support",
    stackPrefix: "",
    stackSuffix: " to award",
  },
] as const;

export const REGISTRATION_STRIP = {
  eyebrow: "Registration & codes",
  items: [
    {
      icon: "badge-check",
      label: "SAM.gov",
      value: "Registration in progress",
      caption: "EIN 2022-001086178 · technical subcontractor",
    },
    {
      icon: "calendar-days",
      label: "NAICS Codes",
      value: "541511 · 541512 · 541519 · 541611 · 541990",
      caption:
        "Programming · Systems Design · IT Services · Mgmt & Technical Consulting",
    },
    {
      icon: "landmark",
      label: "NIGP Codes",
      value: "918-46 · 918-00 · 920-29 · 920-04",
      caption: "IT Consulting · IT Services · Software Dev · App Services",
    },
  ],
} as const;

export const START_SECTION = {
  eyebrow: "Start the sequence",
  heading: "Step 01 is one email.",
  body: "From a capture manager, BD lead, or program manager at a U.S. prime. One business day later, a US-based partner manager replies with the NDA and a calendar slot. Not sure which vehicle fits? Send the solicitation and we'll recommend the cleanest path.",
  ctaLabel: "Start an NDA conversation",
  ctaHref: "/us-sled/contact/",
  checklistHeading: "What to include in the first email",
} as const;

export const FIRST_EMAIL_CHECKLIST = [
  "Your prime firm name and your role",
  "Engagement type (pre-award, post-award, capability)",
  "Technical surface area at a high level",
  "The master agreement or vehicle you hold, if any",
  "Timing: active engagement, within 30 days, or pipeline",
] as const;
