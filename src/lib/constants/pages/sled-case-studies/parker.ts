export const PARKER_CASE_STUDY = {
  slug: "parker",
  crumb: "Town of Parker",
  deadline: "2026-06-19T10:00:00-06:00",
  seo: {
    title:
      "Town of Parker · Community Development Technology (RFI 26-011) | Techtiz SLED",
    description:
      "Pre-bid brief: Town of Parker, Colorado RFI 26-011, Community Development Technology. An RFI, no award. Techtiz is the prime's NDA-first technology and technical-writing subcontractor for the response workbook. Never agency-facing.",
    ogImage: "/assets/sled-case-studies/parker/hero.png",
  },
  hero: {
    eyebrowLive: "Pre-bid brief · Live RFI · Under NDA",
    eyebrowPast: "Pre-bid brief · Closed · Under NDA",
    h1: 'A prime\'s pre-bid brief for <span class="accent">Parker RFI 26-011.</span>',
    body: "Town of Parker, Colorado, a Request for Information on Community Development Technology. No award comes from this RFI. It shapes the future RFP, and a complete response workbook now is how a prime earns the invitation. Techtiz builds the workbook engine behind the prime.",
    livePill: "Live · closes Jun 19, 10 AM MT",
    pastPill: "Closed · responses in review",
    heroBg: "/assets/sled-case-studies/parker/hero.png",
    logo: "/assets/sled-case-studies/parker/logo.png",
    logoAlt: "Town of Parker",
    identity: {
      awardingBody: {
        label: "Awarding body",
        value: "Town of Parker",
      },
      jurisdiction: {
        label: "Jurisdiction",
        value: "Douglas County, Colorado",
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
      value: "RFI 26-011",
      small: "Information only, no award",
    },
    {
      key: "Scope",
      value: "Community Dev tech",
      small: "Six areas, six-tab workbook",
    },
    {
      key: "First reader",
      value: "BerryDunn",
      small: "Consulting advisor, gating review",
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
      h2: "One Mountain-time deadline, portal only.",
      p: "Questions go through the Euna portal Q&A by June 12, with no phone or email. Responses are due June 19 at 10:00 a.m. Mountain time, portal only, with no late submissions accepted.",
    },
    events: [
      {
        date: "May 22, 2026",
        label: "Published",
        detail: "RFI issued, portal version Jun 1",
      },
      {
        date: "Jun 12, 2026",
        label: "Questions due, 10 AM MT",
        detail: "Euna portal Q&A only. No phone, no email",
      },
      {
        date: "No conference",
        label: "No pre-bid meeting",
        detail: "None scheduled for this RFI",
      },
      {
        date: "Jun 19, 2026",
        label: "Responses due, 10 AM MT",
        detail: "Portal only. No late submissions",
        hard: true,
        tagLive: "Live",
        tagPast: "Closed",
      },
    ],
    foot: {
      live: "The solicitation reads \u201cMST,\u201d but June 19 falls in Mountain Daylight Time. Confirm the exact cutoff through the portal Q&A.",
      past: "28 days from publication to close. The clock is stopped.",
    },
  },
  awardModel: {
    modHead: {
      eyebrow: "The procurement stage",
      h2: "This RFI awards nothing. It shapes what comes next.",
      p: "No contract, no reimbursement, no prequalification. Responding is neither required for nor a guarantee of future participation. The value is positioning for the RFP the RFI will shape.",
    },
    rows: [
      {
        label: "Stage 1, now",
        value:
          "<strong>RFI 26-011, information only.</strong> Vendors complete the six-tab workbook. No award, no roster, no shortlist commitment.",
      },
      {
        label: "Stage 2",
        value:
          "<strong>BerryDunn synthesis.</strong> The consulting advisor reviews and synthesizes responses before they reach Town leadership.",
      },
      {
        label: "Stage 3",
        value:
          "<strong>The future RFP,</strong> the real competition, scoped partly by what the RFI responses reveal.",
      },
      {
        label: "Stage 4",
        value:
          "<strong>Contract,</strong> awarded from the RFP, not from this RFI.",
      },
    ],
  },
  differentiator: {
    icon: "users",
    tag: "The differentiator · Two-stage read",
    quote:
      "BerryDunn reads first, and the workbook comment fields are the scored narrative.",
    sub: "A consulting advisor, not Town staff, is the first reader and synthesizes responses before they reach Town leadership. A row marked with a bare F/G/P/R/T indicator and no comment is indistinguishable from a competitor's. The comment fields are where a vendor proves it read and understood how the response will be judged. Two domain signals reinforce it: addressing the Colorado Privacy Act proactively in the Tab 5 cybersecurity response, and aligning any StateRAMP, FedRAMP Moderate, or SOC 2 Type II certification to Colorado OIT standards. Neither is a stated RFI requirement; both read as sophistication markers.",
    liveNote:
      "Techtiz drafts the comment narratives across all six tabs, mapped to the prime's product, for the prime's subject-matter experts to validate.",
  },
  failureTabs: {
    modHead: {
      eyebrow: "Where responses fail",
      h2: "Eleven ways a strong vendor self-eliminates.",
      p: "None is about product quality. Each is a portal, packaging, or positioning trap that drops a response out of contention before the future RFP.",
      eyebrowAccent: true,
    },
    tabs: [
      {
        num: "01",
        tab: "Binding quote",
        pill: "DQ risk",
        icon: "receipt-text",
        title: "Binding price quotes instead of estimates",
        secref: "Tab 4",
        trapLabel: "The rule",
        trap: "This is an RFI. Tab 4 figures are indicative low and high estimates, not bids. The RFI prohibits binding quotes.",
        fixLabel: "If you miss it",
        fix: "A binding quote can disqualify a vendor from this and future procurement. Label every Tab 4 figure an indicative estimate for planning only.",
      },
      {
        num: "02",
        tab: "Email questions",
        pill: "Not answered",
        icon: "timer-off",
        title: "Emailing questions instead of the portal",
        secref: "Jun 19, 10 AM MT",
        trapLabel: "The rule",
        trap: "Questions are accepted only through the Euna portal Q&A. Email questions to the contracting officer are not answered.",
        fixLabel: "If you miss it",
        fix: "An emailed question carries no weight and appears nowhere on the record. File every question in the portal before the deadline.",
      },
      {
        num: "03",
        tab: "Unofficial workbook",
        pill: "Not official",
        icon: "lock",
        title: "A workbook from an unofficial source",
        secref: "CO-Town of Parker RFI Workbook-EAM.xlsx",
        trapLabel: "The decision",
        trap: "Only the Euna portal version of the workbook is official. Third-party aggregator copies may lack updates.",
        fixLabel: "Why it matters",
        fix: "A response built on an unofficial file can be non-conforming. Work from the portal version only.",
      },
      {
        num: "04",
        tab: "Blank Tab 2",
        pill: "Unassessable",
        icon: "lock",
        title: "Blank Tab 2 comments for P, R, or T",
        secref: "GT.1 to GT.36",
        trapLabel: "The decision",
        trap: "Every Partial, Reporting, or Third-party indicator needs narrative. BerryDunn cannot assess a bare letter.",
        fixLabel: "Why it matters",
        fix: "A blank comment makes the capability unassessable and reads as a gap. Write narrative for every P, R, and T.",
      },
      {
        num: "05",
        tab: "Six systems",
        pill: "All required",
        icon: "file-spreadsheet",
        title: "Not addressing all six legacy systems",
        secref: "Tab 6",
        trapLabel: "The rule",
        trap: "Tab 6 needs a disposition recommendation for each of Beehive, FASTER, Laserfiche, RoadAI, SmartForce, and Sprocket.",
        fixLabel: "If you miss it",
        fix: "Skipping a system leaves the future-environment picture incomplete. Give every one a recommendation with rationale.",
      },
      {
        num: "06",
        tab: "NDA",
        pill: "NDA",
        icon: "rows-3",
        title: "The capability-claim move BerryDunn will verify",
        secref: "NDA",
        trapLabel: "The rule",
        trap: "A vendor with an existing tie to the gating reviewer carries a potential organizational conflict of interest that can shadow the future RFP.",
        fixLabel: "If you miss it",
        fix: "A vendor with an existing tie to the gating reviewer carries a potential organizational conflict of interest that can shadow the future RFP.",
      },
      {
        num: "07",
        tab: "Late upload",
        pill: "Not accepted",
        icon: "timer-off",
        title: "Submitting after the deadline",
        secref: "Jun 19, 10 AM MT",
        trapLabel: "The rule",
        trap: "Late responses are not accepted under any circumstances. The portal closes at 10:00 a.m. Mountain time.",
        fixLabel: "If you miss it",
        fix: "Submit by June 18 and capture the portal confirmation. Confirm the cutoff against the portal clock, the text reads MST while June 19 falls in Mountain Daylight Time.",
      },
      {
        num: "08",
        tab: "Locked file",
        pill: "Every cell",
        icon: "file-lock-2",
        title: "Locking or password-protecting the workbook",
        secref: "File integrity",
        trapLabel: "The rule",
        trap: "The Town needs every cell readable. A locked or password-protected workbook blocks the review.",
        fixLabel: "If you miss it",
        fix: "A protected file can be set aside. Submit the workbook fully unlocked.",
      },
      {
        num: "09",
        tab: "NDA",
        pill: "NDA",
        icon: "lock",
        title: "An advisor-relationship exposure to manage ",
        secref: "NDA",
        trapLabel: "The rule",
        trap: "A vendor with an existing tie to the gating reviewer carries a potential organizational conflict of interest that can shadow the future RFP.",
        fixLabel: "If you miss it",
        fix: "A vendor with an existing tie to the gating reviewer carries a potential organizational conflict of interest that can shadow the future RFP.",
      },
      {
        num: "10",
        tab: "Portal proof",
        pill: "Submit early",
        icon: "bell-ring",
        title: "Monitor the portal for proof",
        secref: "Through Jun 19",
        trapLabel: "The rule",
        trap: "The Town posts Q&A and any updates to the portal, and the submission confirmation is the only proof of a timely upload.",
        fixLabel: "If you miss it",
        fix: "Check the portal through June 19 and save the upload confirmation.",
      },
    ],
  },
  competingField: {
    modHead: {
      eyebrow: "The competing field",
      h2: "23 primes mapped, in-state firms in the mix.",
      p: "From the prime-contractor database. The database carries no revenue figures, every revenue and headcount cell is a research placeholder, so no combined total can be computed. Named firms below are listed by market recognition only, not by any revenue estimate. Public-source mapping for subcontractor targeting.",
    },
    stats: [
      {
        n: "23",
        l: "Firms mapped to the RFI",
      },
      {
        n: "10",
        nSmall: " / 5",
        l: "Highly / partially relevant",
      },
      {
        n: "3 (NDA)",
        l: "Colorado in-state primes",
      },
      {
        n: "n/a",
        l: "Revenue, not in database",
      },
    ],
    notes: [
      {
        icon: "triangle-alert",
        html: '<span>The most recognizable names by market presence are <span class="redact">Tyler Technologies, Gartner, Caspio, and SDI Presence,</span> recognition only, the database carries no revenue.</span>',
      },
    ],
    liveFootnote: {
      icon: "folder-lock",
      html: "<span>The 5 Colorado in-state primes, the full named map, and the relevance tiers across all 23 firms are in the <strong>full document pack.</strong> Ask us for it under NDA.</span>",
    },
  },
  taskAllocation: {
    modHead: {
      eyebrow: "Task allocation",
      h2: "What a remote team drafts, and what stays with the prime.",
      p: "The boundary that makes a compliant subcontractor model work on an information-response workbook.",
    },
    legalBar: {
      icon: "scale",
      html: "<strong>Contractual and confidentiality-driven, not a statutory bar.</strong> This is software and IT consulting work, not sealed or licensed professional work. The RFI imposes no data-residency clause and requires no NDA of its own. The limits are prudential: a standard NDA between the US prime and the support team covers restricted use of Town data, non-disclosure of proprietary response content, and return or destruction on completion. The prime owns final accuracy, all product claims, the portal account, and the submission.",
    },
    canColumn: {
      icon: "globe",
      title: "Remote technology & back-office subcontractor",
      subtitle: "Workbook drafting, no portal account",
      items: [
        "Read and decode the full workbook and the 190+ Tab 2 requirements",
        "Draft all narrative comment fields, the primary deliverable",
        "Draft the Tab 2 F/G/P/R/T indicators with the prime's SME input",
        "Draft Tab 3 phasing and timeline for the prime's PM to validate",
        "Build the Tab 4 cost-model structure and support the pricing analysis",
        "Draft Tab 5 responses for the prime's accuracy review",
        "Draft Tab 6 recommendations on the 14 systems for the prime's SMEs",
        "Draft portal Q&A questions and package the workbook for upload",
      ],
      techtizSlot: {
        icon: "zap",
        html: "<strong>Techtiz operates only in this column,</strong> behind the prime, under NDA, and never touches the agency, BerryDunn, or the portal account.",
      },
    },
    primeColumn: {
      icon: "building-2",
      title: "US prime only",
      subtitle: "Accountability, claims, the submission",
      items: [
        "Final accuracy review and sign-off on every product capability claim",
        "Ownership of proprietary product pricing and the binding decision",
        "The Euna portal account and the submission act",
        "All contact with Charles Ellis and the BerryDunn review team",
        "Validation of every reference client and authority to bind the vendor",
      ],
    },
    hardLimit: {
      icon: "lock",
      html: "<strong>Gates, stated plainly.</strong> A signed NDA must be in place before any Town operational data or proprietary response content moves to Techtiz. Town statistics and workbook drafts are used only for response preparation and returned or destroyed on completion. Proprietary product pricing is handled US-side only. No Town systems data exists at the RFI stage; a future contract may add Colorado data-governance and Colorado Privacy Act requirements.",
    },
  },
  capabilityGrid: {
    modHead: {
      eyebrow: "Scope & the workbook",
      h2: "Three functional areas, one six-tab workbook.",
      p: "The response is the CO-Town of Parker RFI Workbook, six tabs, with Tab 2 alone carrying more than 190 functional requirements across roughly 200 rows.",
    },
    items: [
      {
        icon: "list-checks",
        num: "Area 1 · Tab 1-2",
        title: "Modules",
        desc: "Respond 1 native, 2 third-party, or 3 not provided for each of EAM, Work Orders, and Inspection and Inventory, with comments.",
      },
      {
        icon: "shield-check",
        num: "Area 2 · Tab 1-2",
        title: "Functionality, GT.1 to GT.36",
        desc: "F/G/P/R/T indicators with narrative for every P, R, and T. The GT.10 to GT.17 security block is the most evaluable section.",
      },
      {
        icon: "route",
        num: "Area 3 · Tab 1-2",
        title: "Implementation",
        desc: "Professional-services model, Town team roles, work-effort split, and phase durations with low and high estimates.",
      },
      {
        icon: "calculator",
        num: "Area 4 · Tab 1-2",
        title: "Cost worksheet",
        desc: "Indicative low and high estimates across all categories including recurring SaaS, clearly labeled as estimates.",
      },
      {
        icon: "file-text",
        num: "Area 5 · Tab 1-2",
        title: "Informational questions",
        desc: "EAM experience, data migration, cybersecurity, licensing, and Colorado local-government references.",
      },
      {
        icon: "recycle",
        num: "Area 6",
        title: "Future systems environment",
        desc: "A disposition recommendation for each of the six named legacy systems, with rationale.",
        star: true,
      },
    ],
  },
  pricing: {
    modHead: {
      eyebrow: "Value model",
      h2: "The Town's eventual project, in three scenarios.",
      p: "The Town stated no budget. The SaaS ranges below are independent pre-bid estimates derived from scope, not Town figures, and the Tab 4 workbook figures must stay non-binding. The single variable that moves where the Town lands is the scope of TRAKiT historical data migration.",
    },
    scenarios: [
      {
        tier: "Low",
        value: "$180k",
        valueSmall: "+ $95k/yr",
        desc: "Migrate active records only, retain TRAKiT as a read-only archive.",
      },
      {
        tier: "Mid",
        value: "$320k",
        valueSmall: "+ $145k/yr",
        desc: "Partial historical migration with a phased cutover.",
        mid: true,
        pill: "Base case",
      },
      {
        tier: "High",
        value: "$520k",
        valueSmall: "+ $210k/yr",
        desc: "Full historical migration of all TRAKiT records into the new platform.",
      },
    ],
    footnotes: [
      {
        icon: "info",
        html: "All figures are pre-bid planning estimates, not Town or vendor numbers. One-time plus recurring annual SaaS. The TRAKiT migration decision, migrate all versus retain as archive, is what swings the scenario.",
      },
      {
        icon: "folder-lock",
        html: "Techtiz back-office pricing is scoped per engagement after NDA and is not part of the public RFI intelligence.",
        liveOnly: true,
      },
    ],
  },
  securityGrid: {
    modHead: {
      eyebrow: "Current estate & integration",
      h2: "Six named systems, plus GIS, spreadsheets, and paper.",
      p: "Tab 6 asks for a replace, retain, or integrate recommendation on every current system. TRAKiT is the migration source and the largest variable; Esri ArcGIS is the integration anchor.",
    },
    items: [
      {
        icon: "hard-hat",
        title: "Beehive",
        desc: "Public Works work orders and asset tracking, the core system an EAM platform would absorb.",
        star: true,
      },
      {
        icon: "truck",
        title: "FASTER",
        desc: "Fleet management.",
      },
      {
        icon: "file-check-2",
        title: "Laserfiche",
        desc: "Document management to integrate or retain.",
      },
      {
        icon: "construction",
        title: "RoadAI",
        desc: "Pavement-condition assessment.",
      },
      {
        icon: "shield",
        title: "SmartForce",
        desc: "Police equipment tracking.",
      },
      {
        icon: "wrench",
        title: "Sprocket & more",
        desc: "Facilities maintenance, plus GIS tools, Caselle, spreadsheets, and paper processes.",
      },
    ],
  },
  strategicQuestions: {
    modHead: {
      eyebrow: "Before June 12",
      h2: "Four questions worth filing.",
      p: "Questions the prime should file through the Euna portal Q&A. Techtiz never contacts the Town or BerryDunn.",
    },
    questions: [
      {
        num: "Question 01",
        title: "Are T responses with a named integration partner acceptable?",
        body: "Confirming that a Third-party indicator with a named partner is acceptable shapes how honestly the Tab 2 capabilities can be presented.",
      },
      {
        num: "Question 02",
        title: "Does a data dictionary or export exist from Beehive or FASTER?",
        body: "The migration methodology in Tab 5 depends on what conversion source data is available from the two core systems.",
        locked: true,
      },
      {
        num: "Question 03",
        title: "Must Tab 6 address all six systems or only EAM-relevant ones?",
        body: "Scoping the disposition analysis correctly avoids both an incomplete answer and wasted effort.",
      },
      {
        num: "Question 04",
        title: "Is general SaaS pricing acceptable in Tab 4?",
        body: "Confirming the expected granularity keeps the indicative cost estimate responsive without crossing into a binding quote.",
        locked: true,
      },
    ],
    liveOnly: true,
  },
  agency: {
    modHead: {
      eyebrow: "Agency context",
      h2: "Who is buying, and who reads it first.",
      p: "",
    },
    photo: "/assets/sled-case-studies/parker/hero.png",
    photoAlt: "Welcome to the Town of Parker, Colorado",
    body: "The Town of Parker is a home-rule municipality in Douglas County, Colorado, founded 1864. Procurement runs through the Finance Department under <strong>Charles Ellis, Chief Procurement Officer,</strong> the named contact and signer. The Town retained <strong>BerryDunn as its consulting advisor,</strong> and BerryDunn reviews and synthesizes vendor responses before they reach Town leadership, which makes it the first and gating reader.",
    attribution: "Welcome sign, Town of Parker, Colorado.",
    stats: [
      {
        n: "72,147",
        l: "Residents, per the RFI",
      },
      {
        n: "$328.5M",
        l: "2025 total budget",
      },
      {
        n: "Est. 1864",
        l: "Douglas County, CO",
      },
    ],
  },
  techtizApproach: {
    modHead: {
      eyebrow: "How Techtiz fits",
      h2: "The workbook engine, behind your firm.",
      p: "Techtiz reads the full workbook and drafts the narrative for your subject-matter experts to validate. The prime owns every product claim, the proprietary pricing, the portal account, and all contact with the Town and BerryDunn.",
    },
    cards: [
      {
        title: "NDA before any data",
        desc: "A mutual NDA covering restricted use of Town data and non-disclosure of proprietary content, before a single draft moves.",
      },
      {
        title: "Draft all six tabs",
        desc: "The module mapping, the GT.1 to GT.36 functionality and narrative, the implementation phasing, the indicative cost model, and the six-system disposition.",
      },
      {
        title: "Validate & package",
        desc: "Your SMEs validate every claim; Techtiz formats the workbook to XLSX and prepares it for portal upload.",
      },
      {
        title: "Your firm owns the response",
        desc: "Product claims, proprietary pricing, the Euna account, the submission, and all agency and BerryDunn contact stay with the prime.",
      },
    ],
    lockedNote:
      "Prime name, engagement value, and proprietary content stay under NDA. Techtiz never contacts the Town or BerryDunn.",
    liveOnly: true,
  },
  cta: {
    live: {
      eyebrow: "Responding to RFI 26-011? The window is open.",
      h2: "Request the full RFI-decode pack.",
      body: "The decoded six-tab workbook guide, the 190+ requirement read, the Tab 4 cost-model structure, the Tab 6 system assessment, and the 23-firm field map. A US partner manager replies within one business day, under a mutual NDA, never agency-facing.",
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
      body: "Techtiz supported a response to a Colorado municipal community-development technology RFI. The prime, the exact scope, and the workbook content stay under NDA. A US partner manager replies within one business day, never agency-facing.",
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
