export const SLED_HUB_SEO = {
  title: 'SLED Partnerships | Back-office engineering for primes | Techtiz',
  description: 'Back-office technical engineering subcontractor for U.S. SLED prime contractors. NDA-first, subcontract-only delivery across GIS, AI, automation, statutory document production, and grant reporting. We never face the agency.',
  canonicalPath: '/us-sled/',
  ogImage: '/assets/capitol.png',
} as const;

export const SLED_HERO = {
  eyebrow: 'U.S. SLED · Back-office engineering for primes',
  heading: 'Back-office technical engineering for <span class="accent">U.S. SLED prime contractors.</span>',
  body: 'Specialized subcontractor support for GIS, AI, automation, statutory document production, grant reporting, and platform modernization. NDA-first. Subcontract-only. We never face the agency.',
  ctas: [
    { label: 'Start an NDA conversation', href: '/us-sled/contact/', variant: 'cta' },
    { label: 'Capability statement →', href: '/us-sled/capability-statement/', variant: 'ghost-dark' },
    { label: 'How we engage →', href: '/us-sled/how-we-engage/', variant: 'ghost-dark' },
  ],
  stats: [
    { n: '~10h', l: 'US/PK overlap, daily' },
    { n: '1 day', l: 'Response SLA, NDA-bound' },
    { n: 'NDA', l: 'First on substantive contact' },
    { n: '0', l: 'Agency-facing engagements' },
  ],
  disclaimer: 'Subcontract-only · NDA-first intake · We never face the agency · We do not compete with our partners',
} as const;

export const TRUST_ITEMS = [
  { icon: 'shield-check', label: 'SAM.gov UEI', value: 'Add UEI', pending: true },
  { icon: 'card', label: 'CAGE Code', value: 'Add CAGE', pending: true },
  { icon: 'person-badge', label: 'Business size', value: 'Small Business?', pending: true },
  { icon: 'calendar', label: 'Federal classification', value: 'NAICS 541511 · 541512 · 541519' },
  { icon: 'building', label: 'State procurement', value: 'NIGP 918-46 · 918-00' },
  { icon: 'check-circle', label: 'Insurance', value: 'Prime-routed' },
  { icon: 'clock', label: 'Response SLA', value: '1 business day' },
  { icon: 'shield', label: 'Compliance posture', value: 'SOC 2 Type II in progress · NIST 800-171 aligned', href: '/us-sled/operating-model/' },
] as const;

export const OUTCOMES_STATS = [
  { n: '100%', l: 'GIS-tagged facility inventory delivered on a state environmental plan' },
  { n: '0', l: 'Statutory-format deficiencies on first submission' },
  { n: '35/35', l: 'Municipalities covered per-meeting briefing pack' },
  { n: '0', l: 'Late quarterly grant reports filed' },
  { n: '0', l: 'Agency-facing engagements ever' },
] as const;

export const BACKBONE_CARDS = [
  {
    badgeNo: '01 · Specify',
    heading: 'Technical Requirements Analysis',
    body: 'Translating SOW technical sections into architecture, integration, and delivery specifications. Under NDA, against a defined engagement scope.',
    href: '/us-sled/capabilities/',
  },
  {
    badgeNo: '02 · Map',
    heading: 'GIS & Data Layer',
    body: 'Facility inventories, forecast models, supply chain analysis. ArcGIS, PostGIS, GeoPandas.',
    href: '/us-sled/capabilities/',
  },
  {
    badgeNo: '03 · Engage',
    heading: 'Engagement Cloud',
    body: 'Public surveys, multilingual platforms, comment capture, disadvantaged-community reach.',
    href: '/us-sled/capabilities/',
  },
  {
    badgeNo: '04 · Produce',
    heading: 'Document Production Suite',
    body: 'Statutory-format compliant deliverables in PDF, InDesign, ArcGIS, Word, Excel. EGLE-validated.',
    href: '/us-sled/capabilities/',
  },
  {
    badgeNo: '05 · Report',
    heading: 'Grant Reporting Automation',
    body: 'Quarterly milestone reports generated from project delivery data. Zero late filings.',
    href: '/us-sled/capabilities/',
  },
  {
    badgeNo: '06 · Comply',
    heading: 'Statutory Compliance Layer',
    body: 'Plan-content checklists, adoption-sequence tracking, audit trails per state framework.',
    href: '/us-sled/capabilities/',
  },
] as const;

export const VEHICLES = [
  { heading: 'NASPO ValuePoint', sub: 'Multi-state cooperative, via prime', note: '50 states eligible' },
  { heading: 'GSA MAS / IT-70', sub: 'Federal schedule, via prime', note: 'Cooperative purchase eligible' },
  { heading: 'State Master Agreements', sub: 'CA CMAS, NY OGS, TX DIR, prime-held', note: '8 active states' },
  { heading: 'Direct Subcontract', sub: 'Prime-contractor teaming letter', note: 'Standard 7-day turnaround' },
  { heading: 'Local Co-ops', sub: 'OMNIA, Sourcewell, regional', note: 'Via partner primes' },
  { heading: 'Open RFP / RFQ', sub: 'Bid support as named subcontractor', note: '14 wins last 24 mo' },
] as const;

export const WHY_CARDS = [
  {
    num: '01 · Specialization depth',
    heading: "We've engineered the deliverables your SOW will name.",
    body: 'Real production work across GIS, AI, workflow automation, statutory document production, and grant reporting, ready to plug into your bid stack under teaming letter.',
    counter: 'Counter to "do you understand U.S. SLED technical scope?"',
  },
  {
    num: '02 · Back-office only',
    heading: 'We never face the agency.',
    body: "Our model depends on being the partner that makes your delivery stronger, not the firm that walks past you into procurement. We engage only through a prime. No exceptions.",
    counter: 'Counter to "will you go around us?"',
  },
  {
    num: '03 · Your terms',
    heading: 'We work on your contract.',
    body: "Subcontract under your master agreement. Insurance routes through you. IP per your standard NDA. We adapt to your delivery model. You don't adapt to ours.",
    counter: 'Counter to "how risky is this operationally?"',
  },
] as const;
