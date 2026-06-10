import { SITE } from "../site";

export const PROCUREMENT_VEHICLES_SEO = {
  title: "Procurement Vehicles | Subcontract via your prime's contract | Techtiz",
  description:
    "How Techtiz joins U.S. SLED pursuits: NASPO ValuePoint, GSA MAS, state master agreements, direct subcontract, cooperatives, and open RFP/RFQ support—always as a named subcontractor under your procurement vehicle.",
  canonicalPath: "/us-sled/procurement-vehicles/",
  ogImage: "/assets/capitol.png",
} as const;

export const PROCUREMENT_VEHICLES_HERO = {
  eyebrow: "U.S. SLED · Procurement vehicles",
  heading: 'Easy to put on <span class="accent">your contract.</span>',
  body: "We work through your existing vehicles—never as prime, never direct to agency. Tell us how the agency buys and we'll structure the teaming agreement and subcontract paperwork to fit your master agreement and task-order structure.",
  ctas: [
    {
      label: "Start an NDA conversation",
      href: "/us-sled/contact/",
      variant: "cta" as const,
    },
    {
      label: "How we partner →",
      href: "/us-sled/how-we-partner/",
      variant: "ghost-dark" as const,
    },
  ],
} as const;

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
    note: "Via your prime's state vehicles",
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
    note: "Pre-award volumes under teaming letter",
  },
] as const;

export const VEHICLES_SECTION = {
  eyebrow: "Procurement Vehicles",
  heading: "Easy to put on contract.",
  sub: "We work through your existing vehicles. Tell us how the agency buys and we'll structure the teaming agreement to fit.",
  emailPrompt: "Don't see your vehicle?",
} as const;

export const REGISTRATION_STRIP = {
  eyebrow: "Procurement & registration",
  items: [
    {
      label: "NAICS Codes",
      value: "541511 · 541512 · 541519",
      caption: "Custom programming · systems design · other computer-related",
    },
    {
      label: "NIGP Codes",
      value: "918-46 · 918-00",
      caption: "Software development · technology services",
    },
    {
      label: "Insurance & flow-down",
      value: "Prime-routed",
      caption: "Subcontract under your master agreement · FAR/DFARS flow-down accepted",
    },
  ],
} as const;

export const SUBCONTRACT_MODEL = {
  eyebrow: "Subcontract-only",
  heading: "Your vehicle. Your contract. We never face the agency.",
  sub: "The prime is always the named contractor on the procurement vehicle and the only voice to the agency. Techtiz appears on the teaming letter and subcontract—white-labeled on every deliverable.",
  cards: [
    {
      heading: "We work on your contract.",
      body: "Subcontract under your master agreement. Insurance routes through you. IP per your standard NDA. We adapt to your delivery model—you don't adapt to ours.",
    },
    {
      heading: "We never go around you.",
      body: "Our model depends on being the partner that makes your delivery stronger, not the firm that walks past you into procurement. We engage only through a prime. No exceptions.",
    },
    {
      heading: "Paperwork closes in days, not months.",
      body: "Scoped statement of work, teaming letter draft, and named-resume options after the capability conversation. Subcontract paperwork typically closes within 7 to 14 days for most vehicles. Pre-award engagements: teaming letter precedes the SOW.",
    },
  ],
} as const;

export const CONTRACT_TYPE_MAPPING = {
  eyebrow: "Task-order structure",
  heading: "How delivery models map to your contract type.",
  sub: "We scope and price to the structure your contracts team already uses on the vehicle—we do not ask agencies to buy commercial packaging.",
  rows: [
    {
      delivery: "Fixed scope / defined deliverables",
      vehicle: "FFP or CPFF task orders",
      reference: "FAR 16.2 · 52.232-7",
    },
    {
      delivery: "Time & materials / staff augmentation",
      vehicle: "T&M or CPIF",
      reference: "FAR 52.232-3",
    },
    {
      delivery: "Embedded squad / ongoing capacity",
      vehicle: "IDIQ · BPA · MAC",
      reference: "FAR 16.504",
    },
  ],
} as const;

export const PRE_AWARD_NOTE = {
  eyebrow: "Pre-award & post-award",
  heading: "Same vehicle. Two modes under one teaming letter.",
  body: "Pre-award: technical volumes, compliance matrices, LOE input, orals demos, and past-performance packaging under teaming letter and NDA. Post-award: named engineering surge, white-label delivery, and IV&V response support under your PM. Either mode, the prime stays the face to the agency.",
  linkLabel: "See the full engagement sequence",
  linkHref: "/us-sled/how-we-partner/",
} as const;

export const PROCUREMENT_BOUNDARY = {
  eyebrow: "Who we are not",
  heading: "Not a procurement intelligence firm.",
  body: "Techtiz is a technical implementation subcontractor for U.S. SLED primes. We do not sell access to public RFPs, anonymized tenders, or procurement subscription data—that lane is operated by Deltek GovWin, Bloomberg Government, and dedicated U.S. capture-consulting firms. Strategic analysis of evaluation criteria happens under NDA with a prime in the room, never as public commentary on named solicitations.",
  linkLabel: "Capability boundaries on the Backbone page",
  linkHref: "/us-sled/capabilities/",
} as const;

export const VEHICLES_CTA = {
  eyebrow: "Vehicle not listed?",
  heading: `Email ${SITE.email.sled} with how the agency buys.`,
  body: "Capture managers and BD leads: include the procurement vehicle, engagement type, and timing in the first email. A U.S. partner manager replies within one business day with a mutual NDA template and a 30-minute calendar slot.",
} as const;
