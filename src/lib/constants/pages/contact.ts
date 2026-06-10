export const CONTACT_SEO = {
  title: 'Talk to us about a subcontract role | U.S. SLED Intake | Techtiz',
  description: 'Talk to Techtiz about a U.S. SLED subcontract role. Prime-focused intake form with a one-business-day response commitment and a mutual NDA on first substantive contact.',
  canonicalPath: '/us-sled/contact/',
  ogImage: '/assets/capitol.png',
} as const;

export const CONTACT_HERO = {
  eyebrow: 'U.S. SLED · Contact',
  heading: 'Talk to us about a <span class="accent">subcontract role.</span>',
  body: 'For capture managers, BD leads, and PMs at U.S. primes. We reply within one business day with a mutual NDA and a 30-minute slot. No materials shared before the NDA.',
} as const;

export const SLA_ITEMS = [
  'Reply within 1 business day',
  'NDA on first substantive contact',
  'Subcontract under your terms',
  'Zero agency-facing engagements',
] as const;

export const WHAT_HAPPENS_NEXT = [
  {
    n: '01',
    timing: 'Within 1 business day',
    text: 'We confirm receipt and reply with a mutual NDA template and a calendar slot for the capability conversation.',
  },
  {
    n: '02',
    timing: 'Week 1 to 2 · under NDA',
    text: '30 to 60 minute capability conversation. You describe the engagement; we describe the team shape and contracting structure.',
  },
  {
    n: '03',
    timing: 'Week 2 to 4',
    text: "If the engagement fits, we deliver a scoped statement of work, teaming letter draft, and named-resume options for your contracts team.",
  },
] as const;

export const INTENT_OPTIONS = [
  {
    value: 'post-award',
    label: 'Post-award delivery support',
    desc: 'Active engagement. Engineers, sprints, KT, integration work under your master subcontract.',
  },
  {
    value: 'pre-award',
    label: 'Pre-award proposal support (under NDA)',
    desc: 'Teaming letter in place or imminent. Technical volume, compliance matrix, demo builds, past-performance packaging.',
  },
  {
    value: 'capability',
    label: 'Capability conversation',
    desc: 'No active bid. NDA-first introduction, capability overview, future pipeline alignment.',
  },
  {
    value: 'question',
    label: 'Specific question',
    desc: 'Compliance, integration, GIS, AI, or workflow question on an existing engagement.',
  },
] as const;

export const ROLE_OPTIONS = [
  'Capture Manager',
  'BD / Partnerships Lead',
  'Project Manager',
  'Capture Strategist',
  'Other',
] as const;

export const VEHICLE_OPTIONS = [
  'Not yet determined',
  'NASPO ValuePoint',
  'GSA MAS / IT-70',
  'State Master Agreement',
  'Direct Subcontract',
  'Local Co-op',
  'Other',
] as const;

export const TIMING_OPTIONS = [
  'Not yet determined',
  'Active engagement — immediate',
  'Within 30 days',
  'Within 90 days',
  'Pipeline / future',
] as const;

export const CEILING_OPTIONS = [
  'Prefer not to say',
  'Under $250K',
  '$250K – $1M',
  '$1M – $5M',
  '$5M – $25M',
  'Over $25M',
] as const;

export const CLEARANCE_OPTIONS = [
  'None / Public Trust',
  'Secret',
  'Top Secret / SCI',
  'Not yet determined',
] as const;
