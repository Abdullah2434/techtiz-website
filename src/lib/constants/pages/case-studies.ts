export const CASE_STUDIES_SEO = {
  title: 'Engagement Examples | U.S. SLED Subcontractor Engagements | Techtiz',
  description: 'Delivered subcontractor engagements for U.S. SLED primes, summarized at the engagement-type level. Most SLED work stays under NDA; partner names withheld unless we have explicit written permission.',
  canonicalPath: '/us-sled/case-studies/',
  ogImage: '/assets/capitol.png',
} as const;

export const CASE_STUDIES_HERO = {
  eyebrow: 'U.S. SLED · Engagement examples',
  heading: 'Delivered subcontractor <span class="accent">engagements.</span>',
  body: 'Technical work completed for U.S. prime contractors under subcontract and NDA. Engagements summarized at the engagement-type level; partner names withheld unless we have explicit written permission to publish them.',
} as const;

export const TRUST_ITEMS = [
  'Subcontract-only',
  'NDA on first contact',
  'Zero agency-facing engagements',
] as const;

export const ENGAGEMENT_CARDS = [
  {
    badge: 'Delivered',
    anon: 'Anonymized · NDA',
    heading: 'GIS facility inventory & forecast model for a state environmental plan',
    meta: ['GIS & Data', 'Environmental', 'Statutory submission'],
    rows: [
      { lbl: 'Engagement', val: 'Subcontracted technical workstream for the GIS, data-pipeline, and statutory-document portions of a county-level Materials Management Plan adopted under a state environmental framework.' },
      { lbl: 'Prime', val: 'National environmental consulting firm holding the master contract with the county.' },
      { lbl: 'Shipped', val: 'Facility-level inventory pipeline (PostGIS + GeoPandas), 20-year capacity forecast model, statutory document production package, EGLE-format-validated submission.' },
      { lbl: 'Outcome', val: '<strong>Submitted on the prime\'s schedule, zero format deficiencies on first submission, adopted at scheduled hearing.</strong>' },
    ],
    vehicle: 'Direct subcontract under prime\'s master agreement',
  },
  {
    badge: 'Delivered',
    anon: 'Anonymized · NDA',
    heading: 'Accessibility remediation engineering for a statewide service portal',
    meta: ['WCAG 2.2 AA', 'Engineering', 'Portal modernization'],
    rows: [
      { lbl: 'Engagement', val: 'Engineering workstream covering remediation of an existing constituent service portal against WCAG 2.2 AA, including component-library refactor, PDF/UA tooling, and automated regression suite.' },
      { lbl: 'Prime', val: 'Mid-size systems integrator holding the modernization contract with the state agency.' },
      { lbl: 'Shipped', val: 'Accessible component library, screen-reader test harness (NVDA / VoiceOver), PDF/UA conversion pipeline, plain-language editing of 1,200+ pages of statutory content.' },
      { lbl: 'Outcome', val: '<strong>All P0/P1 axe-detected findings closed; passed third-party manual audit on first run.</strong>' },
    ],
    vehicle: 'State Master Agreement, prime-held',
  },
  {
    badge: 'Delivered',
    anon: 'Anonymized · NDA',
    heading: 'Permitting platform integration & data migration',
    meta: ['Platform modernization', 'Integration', 'Data migration'],
    rows: [
      { lbl: 'Engagement', val: 'Integration and data-migration workstream for a state permitting platform modernization. Wrapped a legacy mainframe with a service layer; migrated 14 years of permit records into the new platform.' },
      { lbl: 'Prime', val: 'Tier-1 systems integrator delivering the platform under a multi-year contract.' },
      { lbl: 'Shipped', val: 'REST service layer over legacy mainframe, ETL pipeline (Airbyte + dbt) for record migration, audit trail and reconciliation reporting, IV&V response packages.' },
      { lbl: 'Outcome', val: '<strong>Phase 2 cutover hit milestone date; reconciliation reports closed with zero unexplained variance.</strong>' },
    ],
    vehicle: 'NASPO ValuePoint, via prime',
  },
  {
    badge: 'Delivered',
    anon: 'Anonymized · NDA',
    heading: 'Multilingual public engagement platform for a regional plan',
    meta: ['Public engagement', 'Multilingual', 'Regional plan'],
    rows: [
      { lbl: 'Engagement', val: 'Public-facing engagement platform supporting a 35-municipality regional plan: comment capture, multilingual surveys, hearing presentation packs, and disadvantaged-community outreach instrumentation.' },
      { lbl: 'Prime', val: 'Regional planning consultancy under contract to the lead municipality.' },
      { lbl: 'Shipped', val: 'Custom survey platform with full i18n stack (English, Spanish, Arabic), comment intake and triage workflow, hearing-pack generator, equity dashboard.' },
      { lbl: 'Outcome', val: '<strong>All 35 municipalities covered in the per-meeting briefing pack; statutory comment-period requirements met across every jurisdiction.</strong>' },
    ],
    vehicle: "Direct subcontract under prime's master agreement",
  },
  {
    badge: 'Delivered',
    anon: 'Anonymized · NDA',
    heading: 'Grant-reporting automation for a federal-state pass-through',
    meta: ['Grants', 'Automation', 'Federal-state'],
    rows: [
      { lbl: 'Engagement', val: 'Reporting automation workstream covering quarterly milestone reporting and federal-state reconciliation for a multi-year pass-through grant program serving tribal and rural districts.' },
      { lbl: 'Prime', val: 'Regional consultancy holding the program-management contract for the grant administrator.' },
      { lbl: 'Shipped', val: 'Reporting pipeline (n8n + custom Python), reconciliation engine against project delivery data, federal-format report generators, deadline alerting and audit trail.' },
      { lbl: 'Outcome', val: '<strong>Zero late quarterly filings across the engagement period; audit-trail artifacts accepted by federal program officer without follow-up.</strong>' },
    ],
    vehicle: "Direct subcontract under prime's master agreement",
  },
  {
    badge: 'Delivered',
    anon: 'Anonymized · NDA',
    heading: 'Compliance & adoption-sequence tracking for a multi-county program',
    meta: ['Compliance', 'Dashboarding', 'Audit trail'],
    rows: [
      { lbl: 'Engagement', val: 'Operational dashboarding and audit-trail workstream tracking statutory comment periods, public hearings, board adoptions, and submission deadlines across a multi-county program.' },
      { lbl: 'Prime', val: 'Environmental consulting prime delivering the multi-county program-management contract.' },
      { lbl: 'Shipped', val: 'Adoption-sequence tracker (PostgreSQL + Metabase), deadline alerting service, statute-citation validation engine, immutable records export for FOIA requests.' },
      { lbl: 'Outcome', val: '<strong>All counties adopted on schedule; FOIA-ready records export delivered to the prime within 24 hours of request.</strong>' },
    ],
    vehicle: "Direct subcontract under prime's master agreement",
  },
] as const;

export const CONFIDENTIALITY_ROWS = [
  {
    heading: 'RFP numbers and agency names',
    body: 'are withheld unless we have explicit written permission from the prime to publish them.',
  },
  {
    heading: 'Proposal content, evaluation matrices, and scoring breakdowns',
    body: 'are never republished in public form. Those belong to the prime and the procuring agency.',
  },
  {
    heading: 'Analyses of active solicitations',
    body: 'are not published. We analyze RFPs only against a formally scoped engagement with a prime, under NDA, against a defined deliverable.',
  },
  {
    heading: 'Reference conversations',
    body: 'with the named prime contractor on any of these engagements are available on request, with an NDA in place and the prime\'s consent.',
  },
] as const;
