export const WAYNE_CASE_STUDY = {
  slug: "wayne",
  crumb: "Wayne RESA",
  deadline: "2026-07-01T12:00:00-04:00",
  seo: {
    title:
      "Wayne RESA · Assessment Data Management System (WRESA-47-2026-2027-04) | Techtiz SLED",
    description:
      "Pre-bid brief: Wayne RESA Assessment Data Management System, RFP WRESA-47-2026-2027-04. Techtiz is the prime's NDA-first remote integration and proposal back-office subcontractor. Never agency-facing.",
    ogImage: "/assets/wayne-resa-building.jpg",
  },
  hero: {
    eyebrowLive: "Pre-bid brief · Live RFP · Under NDA",
    eyebrowPast: "Pre-bid brief · Closed · Under NDA",
    h1: 'A prime\'s pre-bid brief for <span class="accent">WRESA-47-2026-2027-04.</span>',
    body: "Wayne RESA, Michigan, a cloud-hosted Assessment Data Management System for 33 districts and about 97 academies, more than 260,000 students. One best-value award, one US prime, Techtiz builds the integration and back-office engine behind it.",
    livePill: "Live · closes Jul 1, 12 PM EDT",
    pastPill: "Closed · selection complete",
    heroBg: "/assets/wayne-resa-building.jpg",
    logo: "/assets/wayne-resa-logo.png",
    logoAlt: "Wayne RESA",
    identity: {
      awardingBody: {
        label: "Awarding body",
        value: "Wayne RESA",
      },
      jurisdiction: {
        label: "Jurisdiction",
        value: "Wayne County, Michigan",
      },
      statusLive: "Responding under NDA",
      statusPast: "Engagement closed",
    },
    ctas: [
      {
        label: "Start an NDA conversation",
        href: "/us-sled/contact/",
        variant: "ghost-dark",
        beam: true,
      },
      {
        label: "All engagement examples",
        href: "/us-sled/case-studies/",
        variant: "cyan",
        beam: false,
      },
    ],
  },
  facts: [
    {
      key: "Solicitation",
      value: "WRESA-47-2026-2027-04",
      small: "Formal RFP, best value",
    },
    {
      key: "Scope",
      value: "Assessment Data Mgmt",
      small: "Cloud SaaS, 33 districts",
    },
    {
      key: "Award",
      value: "100-point best value",
      small: "CoPro+ Master Agreement",
    },
    {
      key: "Techtiz role",
      value: "Back-office",
      small: "NDA-first, never agency-facing",
    },
  ],
  keyDates: {
    modHead: {
      eyebrow: "Schedule of events",
      h2: "One Eastern-Time deadline, no remedy for late.",
      p: "A formal, portal-only RFP. Written questions go to one address by June 12. Anything arriving after 12:00 p.m. Eastern on July 1 is rejected, and a Central, Mountain, or Pacific bidder submitting at local noon is 1 to 3 hours late.",
    },
    events: [
      {
        date: "May 27, 2026",
        label: "Issued",
        detail: "RFP released, reference 0000425789",
      },
      {
        date: "Jun 10, 2026",
        label: "Pre-proposal meeting",
        detail: "Virtual, strongly encouraged",
      },
      {
        date: "Jun 12, 2026",
        label: "Questions due, 12 noon ET",
        detail: "To purchasing@resa.net only",
      },
      {
        date: "Jun 19, 2026",
        label: "Q&A & addenda",
        detail: "Released to the portal",
      },
      {
        date: "Jul 1, 2026",
        label: "Proposals due, 12 PM ET",
        detail: "Portal only. No mail, no email. No cure for late",
        hard: true,
      },
      {
        date: "~Oct 29, 2026",
        label: "Validity",
        detail: "Proposals firm at least 120 days",
      },
    ],
    foot: {
      live: "35 days from issue to close. Go-live targeted July 2027. Today the clock is running.",
      past: "35 days from issue to close. Go-live targeted July 2027. Today the clock is stopped.",
    },
  },
  differentiator: {
    icon: "git-merge",
    tag: "Scope · The differentiator",
    quote:
      "Documented MISTAR integration is the single clearest separator in the 40-point technical factor.",
    sub: "MISTAR is the Wayne RESA-supported primary SIS. PowerSchool is secondary and district-supported only. The 24-hour bi-directional sync, permission mirroring within 24 hours, and the API push to MISTAR Gradebook are MUST requirements. A bid that shows the MISTAR data flows in a diagram, or a credible architecture plus a Michigan reference, beats a brochure that only names products. The security stack is the second hook: US-only hosting, SOC 2 Type II or ISO 27001, AES-256 at rest, TLS 1.2 or higher in transit, district data ownership, and certified destruction within 30 days.",
    liveNote:
      "Techtiz builds and tests the MISTAR and benchmark integrations on synthetic data and hands the prime a documented, verifiable integration path.",
  },
  failureTabs: {
    modHead: {
      eyebrow: "Where bids fail",
      h2: "Ten ways a strong firm scores zero.",
      p: "None is about engineering quality. Each is a disqualifier or a scored trap in a K-12 data procurement.",
      eyebrowAccent: true,
    },
    tabs: [
      {
        num: "01",
        tab: "Familial Disclosure",
        pill: "Instant DQ",
        icon: "file-x",
        title: "Missing Familial Relationship Disclosure",
        secref: "MCL 380.1267 · notarized",
        trapLabel: "The rule",
        trap: "A notarized Familial Relationship Disclosure is mandatory. It must address any family relationship between the bidder's owners or employees and Wayne RESA Board members or Superintendent Dr. Daveda J. Colbert.",
        fixLabel: "If you miss it",
        fix: "Missing it means the bid is not accepted. It is not waivable and is an instant disqualification. Make it checklist item 1.",
      },
      {
        num: "02",
        tab: "Iran cert notary",
        pill: "Voidable",
        icon: "stamp",
        title: "Unnotarized Iran Economic Sanctions certification",
        secref: "Section 2.3",
        trapLabel: "The rule",
        trap: "The Iran Economic Sanctions Act certification must be signed and notarized, with the notary seal visible in the scan.",
        fixLabel: "If you miss it",
        fix: "An unsigned, unnotarized, or seal-cropped scan fails the certification. Verify the seal renders in the PDF before upload.",
      },
      {
        num: "03",
        tab: "Email or mail",
        pill: "Rejected",
        icon: "mail-x",
        title: "Email or mail submission",
        secref: "Section 3.5",
        trapLabel: "The rule",
        trap: "Submission is electronic only through the Wayne RESA portal. US mail and every other delivery method are rejected.",
        fixLabel: "If you miss it",
        fix: "A mailed or emailed proposal is not considered. Build to the portal, and upload a full day early.",
      },
      {
        num: "04",
        tab: "Eastern Time",
        pill: "No cure",
        icon: "timer-off",
        title: "Eastern Time, late is dead",
        secref: "Jul 1, 12 PM ET",
        trapLabel: "The rule",
        trap: "The deadline is 12:00 p.m. Eastern Time. There is no remedy for a late proposal.",
        fixLabel: "If you miss it",
        fix: "A Central, Mountain, or Pacific bidder submitting at local noon submits 1 to 3 hours late. Convert the clock and submit early.",
      },
      {
        num: "05",
        tab: "References",
        pill: "Non-responsive",
        icon: "users",
        title: "Thin or stale references",
        secref: "Section 2.2 · pass/fail gate",
        trapLabel: "The rule",
        trap: "A pass/fail gate before scoring requires at least 3 years of assessment data management experience within the last 5 years, verified through references.",
        fixLabel: "If you miss it",
        fix: "Fewer than 3 qualifying references, or references that predate 2021, make the proposal non-responsive and eliminate it before scoring. Use K-12 or RESA/ISD references, Michigan if possible.",
      },
      {
        num: "06",
        tab: "CoPro+ 2% fee",
        pill: "Non-responsive",
        icon: "percent",
        title: "Pricing that omits the 2% CoPro+ fee",
        secref: "Attachment A",
        trapLabel: "The rule",
        trap: "The 2% CoPro+ administrative fee must be built into every price line, not listed separately. Sales and federal excise tax are excluded because Wayne RESA is tax-exempt.",
        fixLabel: "If you miss it",
        fix: "Pricing that adds the fee as a separate item, or that includes tax, reads as non-responsive. Build the 2% into each line and quote net 30.",
      },
      {
        num: "07",
        tab: "FOIA marking",
        pill: "NDA",
        icon: "lock",
        title: "A public-records exposure most bidders mishandle",
        secref: "FOIA · Locked",
        trapLabel: "The rule",
        trap: "Michigan FOIA governs every submitted document, and a blanket confidentiality marking is disregarded. How you mark trade secrets decides what becomes public after award.",
        fixLabel: "If you miss it",
        fix: "The exact marking approach that protects pricing methodology and architecture is in the full pack.",
      },
      {
        num: "08",
        tab: "Blank boxes",
        pill: "Zero score",
        icon: "square-dashed",
        title: "Blank Proposer Response Boxes or Appendix A",
        secref: "Sections 1.3.1 to 1.9.2",
        trapLabel: "The rule",
        trap: "Every Proposer Response Box must be answered, and the Appendix A regional map covering 10 Michigan regions must be completed.",
        fixLabel: "If you miss it",
        fix: "A blank or vague box, or a blank regional map, scores zero on that item. Answer every box with specifics.",
      },
      {
        num: "09",
        tab: "Non-US hosting",
        pill: "Pass-fail",
        icon: "server-off",
        title: "Non-US hosting or a missing certificate",
        secref: "Section 1.3.2C · pass/fail",
        trapLabel: "The rule",
        trap: "All data must be hosted on US-based servers, with a current SOC 2 Type II and/or ISO 27001, AES-256 at rest, and TLS 1.2 or higher in transit.",
        fixLabel: "If you miss it",
        fix: "A non-US-hosted platform or a missing or expired certificate fails the gate outright. Confirm hosting and certificate dates before you bid.",
      },
      {
        num: "10",
        tab: "Terms exceptions",
        pill: "NDA",
        icon: "lock",
        title: "The governing-contract trap worth 15 points",
        secref: "Terms · Locked",
        trapLabel: "The rule",
        trap: "The binding terms live in an external document outside the RFP body, and 15 of 100 points ride on adherence to it. Undisclosed exceptions cost on that factor.",
        fixLabel: "If you miss it",
        fix: "Which document governs, where it sits, and how to flag exceptions safely are in the full pack.",
      },
    ],
  },
  competingField: {
    modHead: {
      eyebrow: "The competing field",
      h2: "47 primes mapped, a long tail of boutiques.",
      p: "From the prime-contractor database. The revenue concentrates in a few national firms, but most of the bench is small, and the in-state field is thin. Figures are public-source estimates for partner targeting, not verified financials.",
    },
    stats: [
      {
        n: "47",
        l: "Firms mapped to the solicitation",
      },
      {
        n: "16",
        nSmall: " / 31",
        l: "Highly / partially relevant",
      },
      {
        n: "3 (NDA)",
        l: "Michigan-based primes",
      },
      {
        n: "~$8.65",
        nSmall: "B",
        l: "Combined estimated revenue",
      },
    ],
    bar: {
      segments: [
        { pct: 11, tier: "nat" },
        { pct: 17, tier: "mid" },
        { pct: 72, tier: "bout" },
      ],
      legends: [
        {
          count: "5",
          label: "national, $500M+, where the revenue concentrates",
          tier: "nat",
        },
        {
          count: "8",
          label: "mid-market, $50M to $500M",
          tier: "mid",
        },
        {
          count: "34",
          label: "boutique, under $50M",
          tier: "bout",
        },
      ],
    },
    notes: [
      {
        icon: "triangle-alert",
        html: '<span>The largest primes by estimate are <span class="redact">Snowflake, Apex Systems, and Public Consulting Group,</span> with <span class="redact">PowerSchool and Instructure</span> leading the education-specific set. </span>',
      },
    ],
    liveFootnote: {
      icon: "folder-lock",
      html: "<span>The 5 Michigan-based primes, the full named map, and the relevance scoring across all 47 firms are in the <strong>full document pack.</strong> Ask us for it under NDA.</span>",
    },
  },
  taskAllocation: {
    modHead: {
      eyebrow: "Task allocation",
      h2: "What a remote team can build, and what stays onshore.",
      p: "The boundary that makes a compliant subcontractor model work on a K-12 student-data procurement.",
    },
    legalBar: {
      icon: "scale",
      html: "<strong>Contractual and data-residency, not a licensing bar.</strong> All data must sit on US servers (Section 1.3.2C.1, pass/fail), FERPA and Michigan student-data-privacy law govern every live record, the awarded vendor must be the prime, and a signed FERPA-compliant data use agreement or NDA must be in place before any data work. Offshore teams use synthetic or anonymized data only and never touch live student PII. US-based personnel cover the SLA and any live-data handling.",
    },
    canColumn: {
      icon: "globe",
      title: "Remote technology & back-office subcontractor",
      subtitle: "Synthetic or anonymized data only",
      items: [
        "Platform initial configuration",
        "MISTAR and PowerSchool SIS integration code development",
        "Benchmark provider API integration code, NWEA, Renaissance, i-Ready, Acadience",
        "Dashboard and report template design and build",
        "MTSS configuration and automated IRIP setup",
        "Training material preparation and documentation",
        "QA and testing on synthetic data",
        "Executive summary and proposal drafting support",
      ],
      techtizSlot: {
        icon: "zap",
        html: "<strong>Techtiz operates only in this column,</strong> behind the prime, under NDA, on synthetic data, and never touches the agency or a live student record.",
      },
    },
    primeColumn: {
      icon: "building-2",
      title: "US prime or on-site US only",
      subtitle: "Live PII, SLA, agency-facing",
      items: [
        "Live student PII and assessment-score data",
        "Data migration of live student records",
        "On-site Wayne County training delivery, Section 1.3.2A.2.c",
        "Live system administration and SLA support",
        "Background-check coordination and CHRI data handling",
        "All communication with Wayne RESA",
      ],
    },
    hardLimit: {
      icon: "lock",
      html: "<strong>Gates, stated plainly.</strong> A FERPA-compliant data use agreement or NDA that references FERPA, Michigan student-data-privacy law, and breach notification must be signed before any data moves. Live student PII, record migration, on-site training, live administration, and all agency contact stay with the US prime. Background checks for campus-access personnel run $75 per CHRI record, paid by the contractor.",
    },
  },
  awardModel: {
    modHead: {
      eyebrow: "The award model",
      h2: "Best value on 100 points, then a statewide cooperative.",
      p: "Not a roster or a pool. Wayne RESA scores proposals against a 100-point scheme and the result becomes a cooperative Master Agreement other Michigan entities can piggyback on.",
    },
    rows: [
      {
        label: "Structure",
        value:
          "<strong>Best-value award on 100 points.</strong> Wayne RESA may make one total award, one award per section, multiple awards, or a combination.",
      },
      {
        label: "Cooperative",
        value:
          "The result is a statewide <strong>CoPro+ Master Agreement</strong> marketed through PPIM. Other Michigan public entities, nonprofits, and schools may piggyback under MCL 124.504. A <strong>2% CoPro+ fee</strong> applies to all sales volume, remitted quarterly.",
      },
      {
        label: "Contingency",
        value:
          "<strong>Board funding approval is required.</strong> No approval, no award, regardless of score.",
      },
      {
        label: "Term",
        value:
          "<strong>3-year base</strong> plus two 1-year renewals, exercisable individually or together. Start targeted August 2026, full go-live July 2027.",
      },
    ],
    footnote: {
      icon: "zap",
      html: "<span>Techtiz scopes the technical build and the back-office workstream so the prime can price a statewide-scalable platform without standing up an offshore team from scratch.</span>",
      liveOnly: true,
    },
  },
  evaluation: {
    modHead: {
      eyebrow: "How scoring works",
      h2: "Four scored factors, 100 points, and a gate before any of them.",
      p: "A pass/fail experience gate runs first: at least 3 years in assessment data management within the last 5 years, verified through references. Miss it and the proposal is eliminated before scoring.",
    },
    estFlag: "Scored factors, 100 points, Section 3.8",
    bars: [
      {
        num: "01",
        label: "Technical scope & solution quality",
        value: 40,
        width: 40,
      },
      {
        num: "02",
        label: "Pricing",
        value: 25,
        width: 25,
      },
      {
        num: "03",
        label: "References",
        value: 20,
        width: 20,
      },
      {
        num: "04",
        label: "Terms & conditions adherence",
        value: 15,
        width: 15,
      },
    ],
    note: "The winning moves: <strong>technical,</strong> prove every MUST with specifics and name MISTAR; <strong>pricing,</strong> complete all six Attachment A categories with tiered per-student pricing and a stated volume threshold, 2% fee built in; <strong>references,</strong> 3 K-12 or RESA/ISD references dated 2021 or later, Michigan if possible; <strong>terms,</strong> accept the governing CoPro+ document and submit only genuine, reasoned exceptions. Wayne RESA may also use clarifications, a deficiency report, oral presentation, site visit, a BAFO round, or negotiation (Section 3.9); failure to appear at a scheduled presentation or site visit may mean rejection.",
  },
  capabilityGrid: {
    modHead: {
      eyebrow: "Full scope",
      h2: "The deliverable set, mapped heading-for-heading.",
      p: "A cloud-hosted SaaS platform that centralizes assessment data for 33 districts and about 97 PSAs, integrates with the SIS, connects to the Michigan Data Hub and benchmark providers, runs MTSS, and reports to districts and the board.",
    },
    items: [
      {
        icon: "git-merge",
        num: "01 · The hook",
        title: "MISTAR & PowerSchool SIS integration",
        desc: "24-hour bi-directional sync of rosters, demographics, enrollment, attendance, behavior, and permissions, plus an API push to MISTAR Gradebook. MISTAR is RESA-supported and primary.",
        star: true,
      },
      {
        icon: "network",
        num: "02",
        title: "Michigan Data Hub",
        desc: "Connection to the statewide hub for interoperable district data exchange.",
      },
      {
        icon: "target",
        num: "03",
        title: "Benchmark integrations",
        desc: "NWEA MAP, Renaissance Star, i-Ready, Acadience at minimum 24-hour sync during testing windows, plus CSV import for legacy data.",
      },
      {
        icon: "database",
        num: "04",
        title: "Longitudinal data warehouse",
        desc: "Multi-year student assessment history with SSO and kiosk mode for online testing.",
      },
      {
        icon: "layers",
        num: "05",
        title: "MTSS framework",
        desc: "Tier tracking, progress monitoring, and intervention-fidelity measurement across the tiers.",
      },
      {
        icon: "file-pen-line",
        num: "06",
        title: "Automated IRIP drafting",
        desc: "Individual Reading Improvement Plans generated from the data, with customizable forms and fields.",
      },
      {
        icon: "siren",
        num: "07",
        title: "Early-warning ABCs",
        desc: "Attendance, behavior, and course-performance indicators with watchlists.",
      },
      {
        icon: "layout-dashboard",
        num: "08",
        title: "Interactive dashboards",
        desc: "Point-and-click demographic filtering, standard and custom reporting.",
      },
      {
        icon: "file-output",
        num: "09",
        title: "ESSA & IDEA exports",
        desc: "State and federal reporting exports built in.",
      },
      {
        icon: "bar-chart-3",
        num: "10",
        title: "Reporting cadence",
        desc: "Quarterly usage reports to Wayne RESA and the ISD, annual audit-log reports.",
      },
      {
        icon: "graduation-cap",
        num: "11",
        title: "Training & support",
        desc: "Role-differentiated training and ongoing technical support, with on-site Wayne County delivery onshore.",
      },
    ],
  },
  pricing: {
    modHead: {
      eyebrow: "Value & pricing",
      h2: "Six pricing categories, one variable that moves the number.",
      p: "No budget is stated. Pricing is Attachment A across six categories, and the per-student annual subscription is the driver. High-volume and tiered pricing is evaluated more favorably. The ranges below are pre-bid estimates derived from scope, not buyer figures.",
    },
    scopeChips: [
      { num: "I", label: "Subscription, per-student annual" },
      { num: "II", label: "Implementation & configuration, fixed fee" },
      { num: "III", label: "Training & technical support" },
      { num: "IV", label: "Reporting & analytics" },
      { num: "V", label: "Optional modules, including Item Bank" },
      { num: "VI", label: "Pricing assumptions & volume discounts" },
    ],
    scenarios: [
      {
        tier: "Low",
        value: "$1.17M",
        valueSmall: "3-yr base",
        desc: "$1.50 per student per year, Wayne County only.",
      },
      {
        tier: "Mid / recommended",
        value: "$1.35M+",
        desc: "Bottom-up estimate near $2.25 per student per year with statewide ramp.",
        mid: true,
        pill: "Base case",
      },
      {
        tier: "High",
        value: "$2.73M+",
        valueSmall: "3-yr base",
        desc: "$3.50 per student per year, full item bank, premium support, 50%+ statewide adoption in years 2 and 3.",
      },
    ],
    footnotes: [
      {
        icon: "info",
        html: "All totals reflect the 3-year base term and must include the 2% CoPro+ fee in every line. Tax is excluded, net 30 terms, price assurance is lowest available pricing for the term.",
      },
      {
        icon: "zap",
        html: "Techtiz models the per-student tiers and the cost build so the prime enters with an 8 to 12% Best and Final Offer buffer intact.",
        liveOnly: true,
      },
    ],
  },
  securityGrid: {
    modHead: {
      eyebrow: "Security gates & frameworks",
      h2: "The MUST gates and the law the contract pulls in.",
      p: "The Section 1.3.2C security gates are pass/fail. The governing contract terms sit outside the RFP body in the CoPro+ document. NIGP is buyer-stated; NAICS is inferred.",
    },
    items: [
      {
        icon: "server",
        title: "US-hosted servers only",
        desc: "Pass/fail. A non-US-hosted platform fails the gate outright.",
        star: true,
      },
      {
        icon: "shield",
        title: "FERPA & Michigan student privacy",
        desc: "Governs every live student record; a data use agreement is required.",
      },
      {
        icon: "lock",
        title: "Encryption",
        desc: "AES-256 at rest recommended, TLS 1.2 or higher in transit.",
      },
      {
        icon: "badge-check",
        title: "SOC 2 Type II & ISO 27001",
        desc: "A current certificate is required; an expired one fails the gate.",
      },
      {
        icon: "database-backup",
        title: "District data ownership",
        desc: "Full CSV export plus certified destruction within 30 days of termination.",
      },
      {
        icon: "file-search",
        title: "Michigan FOIA",
        desc: "1976 PA 442. Blanket confidentiality markings are disregarded.",
      },
      {
        icon: "handshake",
        title: "MCL 124.504 cooperative",
        desc: "The piggyback framework for the statewide CoPro+ Master Agreement.",
      },
      {
        icon: "activity",
        title: "99.99% uptime SLA",
        desc: "4-hour critical response, 1-business-day non-critical, deficiencies fixed in 5 business days.",
      },
      {
        icon: "tag",
        title: "NIGP 92000 / NAICS 611710",
        desc: "Buyer codes for the award. NAICS is buyer-inferred, confirm before submission.",
      },
    ],
  },
  strategicQuestions: {
    modHead: {
      eyebrow: "Before June 12",
      h2: "Four questions worth filing.",
      p: "Questions the prime should consider, in writing, to purchasing@resa.net only. Techtiz never contacts Wayne RESA.",
    },
    questions: [
      {
        num: "Question 01",
        title: "Is a MISTAR sandbox or test environment available pre-award?",
        desc: "A test instance lets the integration be proven on synthetic data and turns the 40-point technical factor from a claim into a demonstration.",
      },
      {
        num: "Question 02",
        title:
          "What student count should pricing assume, and are tiers expected?",
        desc: "The per-student subscription is the price driver. The exact enrollment basis and any volume tiers shape every Attachment A line.",
      },
      {
        num: "Question 03",
        title: "Is NAICS 611710 confirmed for this award?",
        desc: "The code is buyer-inferred. Confirming it avoids a registration or set-aside mismatch at submission.",
      },
      {
        num: "Question 04",
        title: "Will Wayne RESA use oral presentations or a site visit?",
        desc: "Section 3.9 allows them, and failure to appear can mean rejection. Knowing the plan shapes the team and the schedule.",
      },
    ],
    liveOnly: true,
  },
  agency: {
    modHead: {
      eyebrow: "Agency context",
      h2: "Who is buying, and who scores it.",
      p: "",
    },
    photo: "/assets/wayne-resa-logo.png",
    photoAlt: "Wayne RESA",
    body: "Wayne RESA is the Wayne County Regional Educational Service Agency, the largest of 56 RESAs in Michigan, governed by a board elected by the 33 county district boards it serves under Superintendent <strong>Dr. Daveda J. Colbert.</strong> Procurement runs through one office. <strong>Stacey Shaw, purchasing@resa.net,</strong> is the sole point of contact and signer. Contact with any other Wayne RESA personnel may result in disqualification.",
    stats: [
      {
        n: "33",
        l: "Districts served, ~97 academies",
      },
      {
        n: "260,000+",
        l: "Students covered",
      },
      {
        n: "92000",
        l: "NIGP data & software services",
      },
    ],
    attribution:
      "Wayne RESA, Wayne County Regional Educational Service Agency, Detroit, Michigan.",
  },
  response: {
    modHead: {
      eyebrow: "The submission",
      h2: "Eight certifications, all mandatory, plus the priced forms.",
      p: "Each Section 2.3 certification is required. Two are notarized. Miss one and the proposal is incomplete before it is scored.",
    },
    chips: [
      { num: "01", text: "Debarment / Suspension" },
      {
        num: "02",
        text: "Nondiscrimination, federal and state-assisted programs",
      },
      { num: "03", text: "Assurance regarding access to records" },
      { num: "04", text: "Iran Economic Sanctions Act, notarized" },
      { num: "05", text: "Familial Relationship Disclosure, notarized" },
      { num: "06", text: "Certificate of Independent Price Determination" },
      { num: "07", text: "Lobbying disclosure / certification" },
      { num: "08", text: "U.S. DOE Non-Discrimination Assurance" },
      {
        num: "+",
        text: "Attachment A pricing, Response Boxes, Appendix A map",
      },
    ],
  },
  techtizApproach: {
    modHead: {
      eyebrow: "How Techtiz fits",
      h2: "The integration and back-office engine, behind your firm.",
      p: "Techtiz drafts the technical content and builds the integrations in synthetic environments. The prime owns the award, the agency relationship, the US-hosted production system, and every word said to Wayne RESA.",
    },
    cards: [
      {
        title: "NDA before any data",
        desc: "A FERPA-compliant data use agreement or NDA that names Wayne RESA and this solicitation, before a single document moves.",
      },
      {
        title: "MISTAR & benchmark build",
        desc: "Integration code, dashboards, MTSS and IRIP configuration, and the compliance matrix, built and tested on synthetic data.",
      },
      {
        title: "Proposal & pricing support",
        desc: "The technical narrative, the six Attachment A categories, and the per-student tier model, drafted for your review.",
      },
      {
        title: "Your firm owns the contract",
        desc: "The award, US-hosted production, live student data, on-site training, the SLA, and the agency relationship all stay with the prime.",
      },
    ],
    lockedNote:
      "Prime name, engagement value, and live student data stay under NDA. Techtiz never contacts Wayne RESA.",
    liveOnly: true,
  },
  cta: {
    live: {
      eyebrow: "Bidding WRESA-47-2026-2027-04? The window is open.",
      h2: "Request the full pre-bid document pack.",
      body: "The RFP decode, the MISTAR and benchmark integration plan, the Attachment A pricing model, the compliance matrix, and the 47-firm prime database. A US partner manager replies within one business day, under a mutual NDA, never agency-facing.",
      buttons: [
        {
          label: "Start an NDA conversation",
          href: "/us-sled/contact/",
          variant: "cyan",
        },
        {
          label: "See capabilities & compliance",
          href: "/us-sled/capabilities/",
          variant: "ghost",
        },
      ],
    },
    past: {
      eyebrow: "Have a live SLED pursuit?",
      h2: "We can build the package for your next pursuit.",
      body: "Techtiz supported a bid on a Michigan K-12 assessment-data procurement. The prime, the exact scope, and the pricing stay under NDA. A US partner manager replies within one business day, never agency-facing.",
      buttons: [
        {
          label: "Start an NDA conversation",
          href: "/us-sled/contact/",
          variant: "cyan",
        },
        {
          label: "See capabilities & compliance",
          href: "/us-sled/capabilities/",
          variant: "ghost",
        },
      ],
    },
  },
} as const;
