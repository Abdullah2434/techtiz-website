export const HOW_WE_ENGAGE_SEO = {
  title: 'How We Engage | NDA-first subcontractor engagements | Techtiz',
  description: 'How Techtiz engages U.S. SLED primes: a three-step NDA-first sequence — introduction, capability conversation under NDA, and a scoped subcontract — plus our teaming-letter non-negotiables.',
  canonicalPath: '/us-sled/how-we-engage/',
  ogImage: '/assets/capitol.png',
} as const;

export const HOW_WE_ENGAGE_HERO = {
  eyebrow: 'U.S. SLED · How we engage',
  heading: 'How a subcontract <span class="accent">engagement begins.</span>',
  body: 'Three steps from first email to scoped work. NDA on first substantive contact. No exceptions. No public materials are exchanged before paperwork is signed.',
} as const;

export const SEQUENCE_STEPS = [
  {
    n: '01',
    when: 'Day 1 to 5',
    heading: 'Introduction',
    body: 'Email or LinkedIn introduction from a capture manager, BD lead, or program manager at a U.S. prime. Within one business day, a Techtiz partner manager replies with a mutual NDA template and a 30-minute calendar slot. The reply is from a US-based contact, not an offshore inbox.',
    detailLabel: "What's exchanged",
    details: [
      'Mutual NDA template (we sign yours or send ours)',
      'Calendar invite for the capability conversation',
      'One-page Techtiz operating-principles summary',
      'Nothing else until the NDA is signed',
    ],
  },
  {
    n: '02',
    when: 'Week 1 to 2',
    heading: 'Capability conversation under NDA',
    body: '30 to 60 minute call once the NDA is in place. The prime describes the engagement type, the procurement vehicle, the timeline, and any sensitive context. Techtiz describes which Backbone capabilities apply, the team shape, the contracting structure, and any pre-existing engagements that touch the same technical domain.',
    detailLabel: "What's discussed",
    details: [
      'Engagement type (pre-award, post-award, capability)',
      'Technical surface area and team shape',
      'Procurement vehicle and contracting structure',
      'Timeline, named-resume availability, references',
    ],
  },
  {
    n: '03',
    when: 'Week 2 to 4',
    heading: 'Scoped subcontract conversation',
    body: "If the engagement fits, Techtiz delivers a scoped statement of work, teaming letter draft, and named-resume options. The prime's contracts team takes it from there. Subcontract paperwork closes within 7 to 14 days for most vehicles. For active pre-award engagements, the teaming letter precedes the SOW.",
    detailLabel: "What's delivered",
    details: [
      'Scoped statement of work (or teaming letter for pre-award)',
      'Named-resume options aligned to LCAT requirements',
      'Period-of-performance IP assignment language',
      'White-label clause for all artifacts',
    ],
  },
] as const;

export const BOUNDARY_CARDS = [
  {
    heading: 'We do not solicit RFPs from the open market.',
    body: 'No public CTA inviting unsolicited RFP submissions. No catalog of anonymized RFP analyses published as marketing material. The structured-relationship sequence is the only entry point.',
  },
  {
    heading: 'We do not analyze RFPs we have not been formally engaged on.',
    body: 'Strategic analysis of evaluation criteria, statutory requirements, or scoring matrices happens against a defined engagement scope, under NDA, with a prime in the room. Never as public commentary on named, active solicitations.',
  },
  {
    heading: 'We do not bid as prime.',
    body: 'Subcontract-only. Direct-to-agency proposals are out of scope. The prime is always the named contractor on the procurement vehicle and the only voice to the agency.',
  },
  {
    heading: 'We do not contact agencies directly.',
    body: "Every engagement routes through a U.S. prime under a master subcontract. We do not appear in agency-facing emails, calls, deliverables, or co-logo footers. If the agency asks who built it, the answer is the prime's name.",
  },
] as const;

export const PRINCIPLES = [
  {
    heading: 'You stay the only voice to the agency.',
    body: 'Never in agency-facing emails, calls, or deliverables. No co-logos, no "powered by" footers.',
  },
  {
    heading: 'Your brand on every artifact.',
    body: 'Code, docs, decks, runbooks, and dashboards ship under your prime brand. IP licensed to you for the period of performance.',
  },
  {
    heading: 'Compliance posture, kept.',
    body: 'We operate inside your authorization boundary. CJIS, HIPAA, IRS Pub 1075, StateRAMP-aligned controls applied to our work.',
  },
  {
    heading: 'Prime PM owns the relationship.',
    body: 'Status, escalations, and change requests flow through your PM. Weekly burndowns to you, never to the agency.',
  },
] as const;

export const FIRST_EMAIL_CHECKLIST = [
  'Your prime firm name and your role',
  'Engagement type (pre-award, post-award, capability)',
  'Technical surface area at a high level',
  'Timing — active engagement, within 30 days, or pipeline',
  'Whether a procurement vehicle is in mind',
] as const;
