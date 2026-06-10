export const ADAMS_CASE_STUDY = {
  slug: 'adams',
  crumb: 'Adams County, CO',
  deadline: '2026-06-22T15:00:00-06:00',
  seo: {
    title: 'Adams County · Cloud-Based Budgeting System (RFI-RZA-2026.560) | Techtiz SLED',
    description:
      'Pre-bid brief: Adams County, Colorado RFI-RZA-2026.560, Cloud-Based Budgeting System. A Request for Information, no award or contract. Techtiz is the prime\'s NDA-first remote engineering and proposal back-office subcontractor. Never agency-facing.',
    ogImage: '/assets/adams-hero.jpg',
  },
  hero: {
    eyebrow: {
      live: 'Pre-bid brief · Live RFI · Under NDA',
      past: 'Pre-bid brief · Closed · Under NDA',
    },
    h1: 'A prime\'s pre-bid brief for <span class="accent">Adams County RFI-RZA-2026.560.</span>',
    body: 'Adams County, Colorado, a cloud-based budgeting platform across the full budget lifecycle. This is a Request for Information, no award and no contract. Techtiz writes the response and builds the platform behind a US prime who owns the agency relationship.',
    livePill: 'Live · responses close Jun 22, 3 PM MT',
    pastPill: 'Closed · response window ended',
    heroBg: '/assets/adams-hero.jpg',
    logo: '/assets/adams-logo.png',
    logoAlt: 'Adams County, Colorado',
    identity: {
      awardingBody: { label: 'Awarding body', value: 'Adams County' },
      jurisdiction: { label: 'Jurisdiction', value: 'Colorado' },
      status: {
        label: 'Status',
        live: 'Responding under NDA',
        past: 'Engagement closed',
      },
    },
    ctas: [
      { label: 'Start an NDA conversation', href: '/us-sled/contact/', variant: 'ghost-dark' as const },
      { label: 'All engagement examples', href: '/us-sled/case-studies/', variant: 'cyan' as const },
    ],
  },
  facts: [
    {
      key: 'Solicitation',
      value: 'RFI-RZA-2026.560',
      small: 'Request for Information',
    },
    {
      key: 'Scope',
      value: 'Cloud budgeting platform',
      small: 'Full budget lifecycle',
    },
    {
      key: 'Stage',
      value: 'No award',
      small: 'Information-gathering only',
    },
    {
      key: 'Techtiz role',
      value: 'Back-office',
      small: 'NDA-first, never agency-facing',
    },
  ],
  keyDates: {
    modHead: {
      eyebrow: 'Schedule of events',
      heading: 'One response deadline, no late entries.',
      body: 'A formal RFI. Written questions go to the contact by June 12. Responses are accepted electronically only, through the platform, and anything after 3:00 PM MT on June 22 is not accepted.',
    },
    events: [
      {
        date: 'May 28, 2026',
        label: 'Issued',
        detail: 'Published on the platform, 12:39 PM EDT',
        hard: false,
      },
      {
        date: 'Jun 12, 2026',
        label: 'Questions due, 5 PM MDT',
        detail: 'By email to Rebekah Zamora-Arroyo',
        hard: false,
      },
      {
        date: 'Jun 22, 2026',
        label: 'Responses due, 3 PM MT',
        detail: 'Electronic only via ccionline.org. No late entries',
        hard: true,
        tag: { live: 'Live', past: 'Closed' },
      },
      {
        date: 'After Jun 22',
        label: 'Possible RFP',
        detail: 'A future RFP may follow, not guaranteed, subject to County budget approval',
        hard: false,
      },
    ],
    foot: {
      prefix: '25 days from issue to response, tight for an RFI of this scope. Today the clock is ',
      live: 'running',
      past: 'stopped',
      suffix: '.',
    },
  },
  awardModel: {
    modHead: {
      eyebrow: 'The RFI-to-RFP pathway',
      heading: 'No award here. The prize is shaping the RFP that may follow.',
      body: 'This is information-gathering. Reading it any other way wastes effort or anchors a future bid badly.',
    },
    rows: [
      {
        label: 'What this is',
        valueHtml:
          '<strong>A Request for Information, not an IFB or RFP.</strong> No award is made, no contract is signed, and no pricing is binding. Responses gather market input.',
      },
      {
        label: 'What may follow',
        valueHtml:
          'A future RFP is <strong>possible but not guaranteed,</strong> and any RFP would carry its own County budget approval and a separate competitive process.',
      },
      {
        label: 'Why respond well',
        valueHtml:
          'The County has <strong>not decided between an enterprise platform and a specialist tool.</strong> A clear, county-specific response shapes the eventual RFP scope and makes the responder a known quantity before the committee assembles.',
      },
      {
        label: 'How to submit',
        valueHtml:
          'Electronic only, through the ccionline.org platform, in a two-envelope format: <strong>Envelope 1 Identity and Proposal, Envelope 2 Pricing.</strong> The contracting entity for any future contract is Adams County through the Board of County Commissioners.',
      },
    ],
  },
  differentiator: {
    icon: 'git-merge',
    tag: 'Scope · The differentiator',
    quote:
      'ERP integration is the most technically specific clause in this RFI, and the County\'s ERP is not named.',
    sub: 'Three data flows define the fit: actuals pulled near real time for budget-to-actual, chart of accounts periodically, and position data event-driven. Identifying the County\'s ERP before responding is the largest single advantage available; comparable Colorado counties run Tyler, SAP, or Oracle environments. The close second is the 10-year CIP and long-range planning horizon, which narrows the real field well below the 55-plus downloaders, because many platforms stop at a 5-year window. Domain understanding shows by naming the ERP concretely, not by checking a feature box.',
    liveNote:
      'This integration and data-engineering work is exactly what Techtiz builds behind the prime, in vendor-hosted or synthetic environments, never against county systems.',
  },
  taskAllocation: {
    modHead: {
      eyebrow: 'Task allocation',
      heading: 'What a remote engineering team can build, and what stays onshore.',
      body: 'The boundary that keeps a subcontractor model clean on a public-sector data engagement.',
    },
    legalBar: {
      icon: 'scale',
      html: '<strong>Practical, not statutory.</strong> This RFI contains no offshore restriction and no NDA requirement, which is expected for an information-gathering document. The gates here are forward-looking. County IT will not grant offshore access to internal systems, any work involving county data is handled by the US prime or US-based team members, and the prime owns the relationship under a mutual NDA. At the RFI stage almost no county data is in play, so the offshore lane is wide. The gates bind once county data and ERP access enter at the RFP and contract stage.',
    },
    canColumn: {
      icon: 'globe',
      title: 'Remote engineering & back-office subcontractor',
      subtitle: 'Pre-production, no county data',
      items: [
        'Read and index the full RFI',
        'Draft the response sections that map each capability area to a platform feature',
        'Research the County\'s unnamed ERP through public records and vendor rosters',
        'Develop the indicative pricing range with low, mid, and high scenarios and flagged assumptions',
        'Prepare comparable county-government reference summaries from the prime\'s own client data',
        'Draft the SSO description naming identity providers and protocols, SAML 2.0, OAuth 2.0, OpenID Connect',
        'Prepare the demonstration environment on vendor-hosted or synthetic data',
        'Build and configure the platform against synthetic or vendor-hosted environments',
      ],
    },
    primeColumn: {
      icon: 'building-2',
      title: 'US prime only',
      subtitle: 'Onshore, accountable, county data',
      items: [
        'Any access to the County ERP environment',
        'Any handling of county financial data',
        'Direct communication with Adams County',
        'Signing and submitting the response on the platform',
        'Holding any future contract as prime',
      ],
    },
    techtizSlot:
      '<strong>Techtiz operates only in this column,</strong> behind the prime, under a mutual NDA, never touching county systems or county data.',
    hardLimit: {
      icon: 'lock',
      html: '<strong>Gates, stated plainly.</strong> A mutual NDA covers the RFI contents, the internal pricing and strategy, and the analytical work product, with a term of at least three years, governed by the law of the prime\'s state of incorporation, not offshore law. No offshore access to county systems or county-proprietary data at any stage. The prime reviews and submits all client-facing material.',
    },
  },
  failureTabs: {
    modHead: {
      eyebrow: 'Where responses fail',
      eyebrowAccent: true,
      heading: 'Nothing here is disqualifying. Each one quietly costs the future RFP.',
      body: 'An RFI has no scoring, so none of these is pass or fail. They are the moves that get remembered when the RFP committee assembles.',
    },
    tabs: [
      {
        num: '01',
        pill: 'Misread',
        icon: 'file-question',
        title: 'Treating the RFI as a binding proposal',
        secref: 'RFI nature',
        trap: 'Responding as if this were an RFP, with firm commitments and over-built detail, mistakes information-gathering for a competition.',
        fix: 'Over-investing as if an RFP were guaranteed burns effort. Calibrate the response to shape the RFP, not to win a contract that does not exist yet.',
        trapLabel: 'The miss',
        fixLabel: 'The cost',
      },
      {
        num: '02',
        pill: 'Anchors low',
        icon: 'receipt-text',
        title: 'Attaching a hard price in Envelope 2',
        secref: 'Pricing',
        trap: 'Envelope 2 is labeled lump sum, but the RFI says no pricing is binding. A firm number sets an anchor.',
        fix: 'A hard price anchors you low for the eventual RFP. Submit an indicative range with explicit non-binding language instead.',
        trapLabel: 'The miss',
        fixLabel: 'The cost',
      },
      {
        num: '03',
        pill: 'Core control',
        icon: 'key-round',
        title: 'Burying SSO as a simple requirement',
        secref: 'Security control',
        trap: 'County IT treats Single Sign-On as a core security control, not a checkbox.',
        fix: 'A one-line SSO mention reads as weak security posture. Name the identity providers and protocols, SAML 2.0, OAuth 2.0, and OpenID Connect.',
        trapLabel: 'The miss',
        fixLabel: 'The cost',
      },
      {
        num: '04',
        pill: 'Misses the hook',
        icon: 'unplug',
        title: 'Failing to name or credibly address the ERP',
        secref: 'The hook',
        trap: 'ERP integration is the most technically specific clause, and the County\'s ERP is unnamed.',
        fix: 'A response that ignores the ERP looks generic. Research it through public records, then speak to the three data flows concretely.',
        trapLabel: 'The miss',
        fixLabel: 'The cost',
      },
      {
        num: '05',
        pill: 'Overstated',
        icon: 'chart-no-axes-combined',
        title: 'Overstating the 10-year CIP capability',
        secref: 'Capability',
        trap: 'Claiming a 10-year CIP and long-range planning horizon the platform cannot actually deliver.',
        fix: 'Overpromises get remembered at the RFP stage. Confirm the 10-year horizon with a specific capability, or scope it honestly.',
        trapLabel: 'The miss',
        fixLabel: 'The cost',
      },
      {
        num: '06',
        pill: 'Self-defeating',
        icon: 'eye-off',
        title: 'Marking the whole response confidential',
        secref: 'Data use',
        trap: 'Responses are non-confidential unless specifically and narrowly marked, and the County may use ideas to shape the RFP.',
        fix: 'A blanket confidentiality mark can be ignored and signals distrust. Limit proprietary marking to what demonstrates capability.',
        trapLabel: 'The miss',
        fixLabel: 'The cost',
      },
      {
        num: '07',
        pill: 'Register early',
        icon: 'timer-off',
        title: 'Missing a deadline or registering too late',
        secref: 'Jun 12 & Jun 22',
        trap: 'Questions close June 12 at 5 PM MDT. Responses are electronic only and close June 22 at 3 PM MT, with no late entries.',
        fix: 'Register on ccionline.org early enough to submit well before the deadline. A platform problem on the last day is not a valid excuse.',
        trapLabel: 'The miss',
        fixLabel: 'The cost',
      },
      {
        num: '08',
        pill: 'Read carefully',
        icon: 'mail-warning',
        title: 'The contact email is printed two ways',
        secref: 'Read carefully',
        trap: 'The cover sheet gives <strong>rzamora-arroyo@adamscountyco.gov</strong> (hyphenated). Section 2 drops the hyphen. A careless reader emails the wrong address.',
        fix: 'The hyphenated cover-sheet form governs. Use rzamora-arroyo@adamscountyco.gov. The unhyphenated version is a typo in the source.',
        trapLabel: 'The tell',
        fixLabel: 'The fix',
      },
    ],
  },
  emphasis: {
    modHead: {
      eyebrow: 'Where emphasis lands',
      heading: 'No formal scoring, but emphasis is readable.',
      body: 'An RFI carries no weights and no award. The split below is the Collab P analyst estimate of where a strong response should concentrate, not an Adams County criterion. Eligibility is simply qualified organizations with experience in public-sector budgeting software, and there are no pass-or-fail gates.',
    },
    estFlag:
      'Collab P analyst estimate of emphasis, not an Adams County criterion',
    bars: [
      { num: '01', label: 'System capability coverage', pct: 35 },
      { num: '02', label: 'ERP integration & technical fit', pct: 25 },
      { num: '03', label: 'Public-sector experience', pct: 20 },
      { num: '04', label: 'Implementation approach', pct: 12 },
      { num: '05', label: 'Pricing structure', pct: 8 },
    ],
    note: 'These percentages are an internal framing aid, not official weights. Where this estimate and the RFI differ, the RFI governs. The RFI itself states no scoring and makes no award.',
  },
  capabilityGrid: {
    modHead: {
      eyebrow: 'Full scope',
      heading: 'The full budget lifecycle, end to end.',
      body: 'The platform covers eight capability areas. ERP integration is the technical hook the whole response turns on.',
    },
    items: [
      {
        icon: 'file-spreadsheet',
        num: '01',
        title: 'Operating budget development',
        desc: 'Department request entry, multi-year actuals pull, county-wide rollup without spreadsheet consolidation, versioning, and in-platform leadership review.',
      },
      {
        icon: 'users',
        num: '02',
        title: 'Personnel & position budgeting',
        desc: 'Salary and benefits modeling across years, step and cost-of-living changes, new-position costs, funded-versus-unfunded status, cross-fund allocation.',
      },
      {
        icon: 'building',
        num: '03 · 10-year horizon',
        title: 'Capital & CIP planning',
        desc: 'Project entry, prioritization, multi-year carryforward and reappropriation, operating-impact capture, and a 10-year CIP outlook with visualization.',
      },
      {
        icon: 'git-compare',
        num: '04 · 10-year horizon',
        title: 'Scenario planning & forecasting',
        desc: 'What-if modeling, side-by-side scenario comparison, and 10-year long-range forecasting of operating budgets, personnel, capital, and fund balances.',
      },
      {
        icon: 'git-pull-request-arrow',
        num: '05',
        title: 'Mid-year & off-cycle adjustments',
        desc: 'Structured submission, routing, and approval, with a clear one-time versus ongoing distinction.',
      },
      {
        icon: 'bar-chart-3',
        num: '06',
        title: 'Reporting & dashboards',
        desc: 'Budget-to-actual, variance, drill-down, dashboards, and a public-facing adopted-budget and capital-plan view.',
      },
      {
        icon: 'plug',
        num: '07 · The hook',
        title: 'ERP integration',
        desc: 'Pull actual expenditure data, chart of accounts, and position data from the County\'s ERP, reducing manual entry. The ERP is not named.',
        star: true,
      },
      {
        icon: 'key-round',
        num: '08',
        title: 'Single Sign-On',
        desc: 'Organizational credentials via SAML 2.0, OAuth 2.0, and OpenID Connect. County IT treats SSO as a core security control.',
      },
    ],
  },
  pricing: {
    modHead: {
      eyebrow: 'Value & pricing',
      heading: 'SaaS plus implementation, and one variable moves the future number.',
      body: 'No budget is stated, and no pricing is binding. The ranges below are Collab P pre-bid estimates derived from scope, not county figures. ERP integration cost is the variable that most affects a future win.',
    },
    scenarios: [
      {
        tier: 'Low',
        value: '$280-380k',
        valueSmall: ' impl',
        desc: 'Plus about $70k per year SaaS. Assumes a pre-built ERP connector and light customization.',
        highlight: false,
      },
      {
        tier: 'Mid / most likely',
        pill: 'Base case',
        value: '$400-510k',
        valueSmall: ' impl',
        desc: 'Plus about $100k per year SaaS. Custom ERP integration, multi-year data migration, training for 50 to 100 county users.',
        highlight: true,
      },
      {
        tier: 'High',
        value: '$550-720k',
        valueSmall: ' impl',
        desc: 'Plus about $140k per year SaaS. Legacy decommission, a non-standard ERP, phased rollout, and heavy change management.',
        highlight: false,
      },
    ],
    footnotes: [
      {
        icon: 'info',
        html: 'The key variable is <strong>ERP integration cost.</strong> A certified connector to the County\'s actual ERP drops that line from roughly $30,000-plus toward near zero, a swing worth more than any other efficiency. All figures are Collab P estimates, not county figures.',
      },
      {
        icon: 'mail',
        html: 'Envelope 2 is labeled lump sum, but submit an <strong>indicative range with explicit non-binding language.</strong> Do not attach a firm number; a hard price anchors the eventual RFP.',
      },
      {
        icon: 'folder-lock',
        html: 'Techtiz back-office pricing is scoped per engagement after NDA and is not part of the public solicitation intelligence.',
        liveOnly: true,
      },
    ],
  },
  securityGrid: {
    modHead: {
      eyebrow: 'Security & standards',
      heading: 'The security and standards a Colorado county expects.',
      body: 'Industry-standard security and public-sector data management, in the language county IT reads. Governing law is Colorado; any future RFP would likely cite Title 29 and County purchasing regulations.',
    },
    items: [
      {
        icon: 'badge-check',
        title: 'SOC 2 Type II',
        desc: 'The control-attestation baseline for a hosted public-sector platform.',
      },
      {
        icon: 'accessibility',
        title: 'WCAG 2.1 AA',
        desc: 'Accessibility for the admin console and the public-facing budget view.',
      },
      {
        icon: 'lock-keyhole',
        title: 'AES-256 & TLS 1.2+',
        desc: 'Encryption at rest and in transit across the platform.',
      },
      {
        icon: 'server',
        title: 'US-based hosting',
        desc: 'A hosting preference that matters to a Colorado county buyer.',
      },
      {
        icon: 'key-round',
        title: 'SSO via SAML / OAuth / OIDC',
        desc: 'Single Sign-On on organizational credentials, treated as a core control.',
      },
      {
        icon: 'scroll-text',
        title: 'Audit logging',
        desc: 'Full audit trail for budget changes, approvals, and adjustments.',
      },
      {
        icon: 'database-backup',
        title: 'Backup & recovery',
        desc: 'Data retention, backup, and recovery commitments described in the response.',
      },
      {
        icon: 'gavel',
        title: 'Colorado law, Adams County venue',
        desc: 'Colorado Revised Statutes Title 29 and County purchasing rules, venue in Adams County District Court. The municipal default; no code is cited in the RFI itself.',
      },
    ],
  },
  agency: {
    modHead: {
      eyebrow: 'Agency context',
      heading: 'Who is buying, and who scores it.',
    },
    photo: '/assets/adams-hero.jpg',
    photoAlt: 'Adams County Government Center, Brighton, Colorado',
    bodyHtml:
      'Adams County is a county government in the Denver metropolitan area, county seat Brighton, founded 1901. It buys through the Board of County Commissioners, with the Finance Department\'s Purchasing Division as the issuing office. <strong>Rebekah Zamora-Arroyo, Contract Specialist II,</strong> is the named contact and signer. The RFI gathers market input on a cloud budgeting platform; no award is made from it.',
    stats: [
      { n: '~519,572', l: 'Residents, 2020 census' },
      { n: 'Brighton', l: 'County seat, Denver metro' },
      { n: '94629', l: 'NIGP budgeting services' },
    ],
    attribution:
      'Adams County Government Center, Brighton, Colorado. Photo via the County. Population figures are public-source estimates.',
  },
  competingField: {
    modHead: {
      eyebrow: 'The competing field',
      heading: '34 primes mapped, a handful of global platforms carry the revenue.',
      body: 'From the prime-contractor database. A few enterprise vendors dominate the revenue total at parent-company scale, but the field runs long and the in-state presence is real. Figures are public-source estimates for partner targeting.',
    },
    stats: [
      { n: '34', l: 'Firms mapped to the RFI' },
      { n: '19', nSuffix: ' / 14', l: 'Highly / partially relevant' },
      { n: '7', l: 'Colorado-based primes' },
      { n: '~$407', nSuffix: 'B', l: 'Combined est. revenue' },
    ],
    barSegments: [
      { pct: 31, tier: 'nat' as const },
      { pct: 25, tier: 'large' as const },
      { pct: 34, tier: 'mid' as const },
      { pct: 10, tier: 'bout' as const },
    ],
    legends: [
      { tier: 'nat' as const, count: '10', label: 'national / global, $1B+' },
      { tier: 'large' as const, count: '8', label: 'large, $100M to $1B' },
      { tier: 'mid' as const, count: '11', label: 'mid-market, $10M to $100M' },
      { tier: 'bout' as const, count: '3', label: 'boutique, under $10M' },
    ],
    notes: [
      {
        icon: 'triangle-alert',
        html: 'The <strong>$407B total is dominated by parent-company revenue,</strong> not budgeting-line revenue: Microsoft Dynamics 365 about $280B, Oracle about $57B, SAP America about $42B, Workday about $9B, and Carahsoft about $8B. Read it as scale, not as money chasing this work.',
      },
      {
        icon: 'users',
        html: 'More than <strong>55 organizations downloaded the RFI within hours,</strong> from enterprise ERP vendors to specialist government-budget platforms, consultancies, and regional Colorado firms. The County has not chosen between an enterprise platform and a specialist tool, which is exactly why a clear, county-specific response can shape the RFP.',
      },
    ],
    liveFootnote: {
      icon: 'folder-lock',
      html: 'The 7 Colorado-based primes, the full named map, and the relevance scoring are in the <strong>full document pack.</strong> Ask us for it under NDA.',
    },
  },
  response: {
    modHead: {
      eyebrow: 'The response',
      heading: 'Eight things the RFI asks every response to cover.',
      body: 'Map the response heading-for-heading to these. The pricing structure is high-level and non-binding at this stage.',
    },
    scopeChips: [
      { num: '01', label: 'Public-sector budgeting experience' },
      { num: '02', label: 'System overview mapped to the stated capabilities' },
      { num: '03', label: 'Implementation & training approach' },
      { num: '04', label: 'High-level pricing structure, indicative and non-binding' },
      { num: '05', label: 'Similar-client examples' },
      { num: '06', label: 'Unique strengths' },
      { num: '07', label: 'SSO description' },
      { num: '08', label: 'Any other helpful information' },
    ],
  },
  strategicQuestions: {
    modHead: {
      eyebrow: 'Before June 12',
      heading: 'Six questions worth raising.',
      body: 'Questions the prime should consider, in writing, by the June 12 deadline. Keep them constructive and market-informing. Techtiz never contacts the County.',
    },
    questions: [
      {
        num: 'Question 01',
        title: 'Which ERP does the County run?',
        body: 'The unnamed ERP defines the single most technically specific clause and the biggest pricing variable.',
      },
      {
        num: 'Question 02',
        title: 'Is there a dedicated budgeting application today, and what are its limits?',
        body: 'What is being replaced shapes the migration and the implementation approach.',
      },
      {
        num: 'Question 03',
        title: 'How many departments and users?',
        body: 'User count drives both the SaaS line and the training program size.',
      },
      {
        num: 'Question 04',
        title: 'Phased implementation or full cutover?',
        body: 'The rollout model changes the timeline, the risk profile, and the change-management cost.',
      },
      {
        num: 'Question 05',
        title: 'Is legacy data cleanup or migration in scope?',
        body: 'Multi-year historical migration is a major cost driver worth scoping early.',
      },
      {
        num: 'Question 06',
        title: 'Enterprise platform or specialist tool?',
        body: 'The County is undecided. A constructive question here helps shape the RFP without overstepping.',
      },
    ],
  },
  techtizApproach: {
    modHead: {
      eyebrow: 'How Techtiz fits',
      heading: 'The response engine and the build, behind your firm.',
      body: 'Techtiz writes the response and builds the platform in vendor-hosted or synthetic environments. The prime owns the ERP access, the county data, the submission, and every word said to the County.',
    },
    cards: [
      {
        title: 'Mutual NDA first',
        body: 'An NDA covering the RFI contents, the internal pricing and strategy, and the work product, for at least three years.',
      },
      {
        title: 'Draft the RFI response',
        body: 'Each capability area mapped to a platform feature, the ERP researched from public records, the pricing range built with flagged assumptions.',
      },
      {
        title: 'Build in safe environments',
        body: 'The demonstration environment and platform configuration on vendor-hosted or synthetic data, never against county systems.',
      },
      {
        title: 'Your firm owns the relationship',
        body: 'ERP access, county data, the platform submission, and any future contract all stay with the prime.',
      },
    ],
    lockedNote:
      'Prime name and engagement scope stay under NDA. Techtiz never accesses county systems, the county ERP, or county financial data, and never contacts the County.',
  },
  cta: {
    live: {
      eyebrow: 'Responding to RFI-RZA-2026.560? The window is open.',
      heading: 'Request the full RFI-decode pack.',
      body: 'Tender Insight, Tender Abstract, Summary of Procurement, the Statement of Work, and the U.S. primes database. A US partner manager replies within one business day, under a mutual NDA, never agency-facing.',
    },
    past: {
      eyebrow: 'Have a live SLED pursuit?',
      heading: 'We can build the response package for your next pursuit.',
      body: 'Techtiz supported a response on a Colorado county cloud-budgeting RFI. The prime and the exact scope stay under NDA. A US partner manager replies within one business day, never agency-facing.',
    },
    buttons: [
      { label: 'Start an NDA conversation', href: '/us-sled/contact/', variant: 'cyan' as const },
      { label: 'See capabilities & compliance', href: '/us-sled/capabilities/', variant: 'ghost' as const },
    ],
  },
} as const;
