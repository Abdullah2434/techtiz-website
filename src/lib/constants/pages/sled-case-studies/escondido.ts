export const ESCONDIDO_CASE_STUDY = {
  slug: "escondido",
  crumb: "City of Escondido",
  deadline: "2026-06-18T14:00:00-07:00",
  seo: {
    title:
      "City of Escondido · Geotechnical & Special Inspection (RFP No. 26-19) | Techtiz SLED",
    description:
      "Pre-bid brief: City of Escondido RFP No. 26-19, As-needed Geotechnical and Special Inspection Services. Techtiz is the prime's NDA-first technology and back-office subcontractor. Never agency-facing.",
    ogImage: "/assets/escondido-arch.png",
    canonicalPath: "/us-sled/case-studies/escondido/",
  },
  hero: {
    eyebrow: {
      live: "Pre-bid brief · Live RFP · Under NDA",
      past: "Pre-bid brief · Closed · Under NDA",
    },
    h1: 'A prime\'s pre-bid brief for <span class="accent">Escondido RFP No. 26-19.</span>',
    body: "City of Escondido, as-needed geotechnical and special inspection services for the Utilities CIP. The prime owns the field, Techtiz builds the paperwork engine.",
    livePill: "Live · closes Jun 18, 2 PM PDT",
    pastPill: "Closed · selection complete",
    heroBg: "/assets/escondido-arch.png",
    logo: "/assets/escondido-logo.png",
    logoAlt: "City of Escondido",
    identity: {
      awardingBody: "City of Escondido",
      jurisdiction: "California",
      statusLive: "Responding under NDA",
      statusPast: "Engagement closed",
    },
    ctas: [
      {
        label: "Start an NDA conversation",
        href: "/us-sled/contact/",
        variant: "ghost-dark" as const,
        beam: true,
      },
      {
        label: "All engagement examples",
        href: "/us-sled/case-studies/",
        variant: "cyan" as const,
        beam: false,
      },
    ],
  },
  facts: [
    {
      key: "Solicitation",
      value: "RFP No. 26-19",
      sub: "As-needed, task-order",
    },
    {
      key: "Scope",
      value: "Utilities CIP",
      sub: "Geotech & special inspection",
    },
    { key: "Instrument cap", value: "NTE $100,000", sub: "Across four years" },
    {
      key: "Techtiz role",
      value: "Back-office",
      sub: "NDA-first, never agency-facing",
    },
  ],
  keyDates: {
    eyebrow: "Schedule of events",
    heading: "One hard close, no cure.",
    body: "A single proposal email to Randy Manns, cc Cricket Lichtenfels, by the deadline. Late electronic submissions are not accepted and there is no cure.",
    events: [
      {
        date: "May 21, 2026",
        label: "Published",
        detail: "RFP No. 26-19 released",
      },
      { date: "Jun 12, 2026", label: "Questions due", detail: "2:00 PM PDT" },
      {
        date: "Jun 15, 2026",
        label: "Answers posted",
        detail: "City responds to questions",
      },
      {
        date: "Jun 18, 2026",
        label: "Proposals due, 2 PM PDT",
        detail: "Single email. No late acceptance",
        hard: true,
      },
      {
        date: "Jun 22 to 26",
        label: "Staff review",
        detail: "City evaluates proposals",
      },
      {
        date: "~Jul 10, 2026",
        label: "Award",
        detail: "Council or designee approves",
      },
    ],
    foot: {
      prefix: "Best value, not low price. The clock is ",
      live: "running",
      past: "stopped",
      suffix: ".",
    },
  },
  awardModel: {
    eyebrow: "The award model",
    heading: "As-needed, multiple-award, no guaranteed minimum.",
    body: "The City may select one firm or split work across two. A single task order's $100,000 can be divided between two consultants. Funding is fiscal-year based and subject to annual appropriation.",
    rows: [
      {
        label: "Structure",
        value:
          "<strong>Non-exclusive, task-order based.</strong> One or more consultants at the City's discretion, with no guaranteed minimum volume.",
      },
      {
        label: "The instrument",
        value:
          "A single agreement is <strong>not-to-exceed $100,000, and that ceiling covers all four years.</strong> It is a cap on one instrument, not on the relationship.",
      },
      {
        label: "The real prize",
        value:
          "The on-call relationship: an initial term through July 31, 2027, plus <strong>three optional one-year extensions through July 2030.</strong>",
      },
      {
        label: "Rates",
        value:
          "Fixed for the term once submitted. There is no adjustment mechanism without a written amendment.",
      },
    ],
  },
  taskAllocation: {
    eyebrow: "Task allocation",
    heading: "What a remote back-office can build, and what stays on-site.",
    body: "The boundary that makes a compliant subcontractor model work on a licensed field-services contract.",
    legalBar: {
      icon: "scale",
      html: "<strong>Two bars, both honest.</strong> A practical and regulatory bar: field tasks need on-site, California-licensed, ICC-certified, nuclear-gauge-authorized staff under CBC Chapter 17, DIR, and IRCA, so an offshore team cannot perform them at all. A contractual gate: the anti-assignment and personnel-lock clauses require prior written City consent before any subcontracting, and City-provided materials become City property immediately.",
    },
    canColumn: {
      icon: "globe",
      title: "Remote back-office subcontractor",
      subtitle: "Under NDA and written consent",
      items: [
        "Draft the Executive Summary narrative for the prime's review",
        "Compile and format the five-project reference table from prime records",
        "Format key-personnel resumes to the Attachment A categories",
        "Build the rate-schedule template, all four components pre-labeled",
        "Prepare the Noncollusion Declaration fields for the prime to sign",
        "Assemble the final proposal document for the prime to review and email",
        "After award, draft RFI technical responses for the PE to certify",
        "Compile and format daily reports from prime-collected field data",
        "Format lab and field test reports for the PM to submit",
        "Draft invoices for the prime to submit",
      ],
      techtizSlot:
        "<strong>Techtiz operates only in this column,</strong> behind the prime, under NDA and written consent.",
    },
    primeColumn: {
      icon: "hard-hat",
      title: "US prime only",
      subtitle: "On-site, licensed, signed",
      items: [
        "All on-site field recommendations and construction-meeting attendance",
        "Special inspection of reinforced concrete",
        "Trench backfill and compaction testing",
        "Real-time deficiency notification",
        "PE review and certification of every result",
        "Signing and submitting the Noncollusion Declaration",
        "Submitting all reports and invoices to the City",
        "Custody of City as-builts, records, and raw lab data",
      ],
    },
    hardLimit: {
      icon: "lock",
      html: "<strong>Gates, stated plainly.</strong> A signed NDA before any City document moves. No storage of City materials on servers outside the United States without written City consent. The offshore role is a written subcontract to the US prime, with City consent obtained before any work is assigned. Pre-award support is the default lane, any post-award involvement is administrative and non-field only.",
    },
  },
  differentiator: {
    icon: "file-check-2",
    tag: "Scope · The differentiator",
    quote:
      "The daily report and RFI responses are liability-grade construction-administration records, not courtesy updates.",
    sub: "Under Attachment A, the C.5 daily report and C.2 RFI responses are what the City's construction manager uses to track compaction data, document contractor performance, and mitigate claims. A credible bid treats the documentation as the deliverable it is.",
    liveNote:
      "This documentation backbone is exactly what Techtiz compiles and formats behind the prime, after the field data is collected and certified.",
  },
  failureTabs: {
    eyebrow: "Where bids fail",
    heading: "Seven ways a strong firm loses this one.",
    body: "None is about engineering skill. Each is a procurement or contract trap.",
    tabs: [
      {
        num: "01",
        label: "Communication",
        pill: "Rejection",
        icon: "volume-x",
        title: "Single-channel communication",
        secref: "Before award",
        trap: {
          label: "The rule",
          text: "No contact with any City employee other than Randy Manns, with cc to Cricket Lichtenfels, before award.",
        },
        fix: {
          label: "If you miss it",
          text: "Contacting anyone else is grounds for rejection. Route every question through the one channel.",
        },
      },
      {
        num: "02",
        label: "Email subject",
        pill: "Nonresponsive",
        icon: "mail",
        title: "The email subject must match verbatim",
        secref: "Submission",
        trap: {
          label: "The rule",
          text: "The proposal email subject line must read exactly as specified, character for character.",
        },
        fix: {
          label: "If you miss it",
          text: "A subject line that does not match is nonresponsive. Copy it, do not retype it.",
        },
      },
      {
        num: "03",
        label: "One on-time email",
        pill: "No cure",
        icon: "send",
        title: "One on-time email, no split",
        secref: "Submission",
        trap: {
          label: "The rule",
          text: "A single proposal email to Randy Manns, cc Cricket Lichtenfels, by 2:00 PM PDT on June 18.",
        },
        fix: {
          label: "If you miss it",
          text: "A late or split-email submission is not accepted, with no cure process. Send early.",
        },
      },
      {
        num: "04",
        label: "20-page limit",
        pill: "Defective",
        icon: "file-x",
        title: "The 20-page limit",
        secref: "Proposal format",
        trap: {
          label: "The rule",
          text: "The proposal is capped at 20 pages.",
        },
        fix: {
          label: "If you miss it",
          text: "Exceeding it is a defective submission. Trim resumes and references to fit the cap.",
        },
      },
      {
        num: "05",
        label: "Noncollusion",
        pill: "Disqualifier",
        icon: "file-signature",
        title: "The Noncollusion Declaration",
        secref: "Exhibit 2",
        trap: {
          label: "The rule",
          text: "Exhibit 2 must be signed under penalty of perjury. DIR registration is required for the prime and any subs.",
        },
        fix: {
          label: "If you miss it",
          text: "An omitted or unsigned declaration disqualifies the proposal.",
        },
      },
      {
        num: "06",
        label: "Contract exception",
        pill: "Deemed accept",
        icon: "file-pen-line",
        title: "Exceptions to the City agreement",
        secref: "Form Consulting Agreement",
        trap: {
          label: "The rule",
          text: "Submitting certifies no exception unless you clearly identify each one. Proposing your own contract form is barred. Personnel are locked, no junior staff on senior tasks.",
        },
        fix: {
          label: "If you miss it",
          text: "An unflagged exception is deemed acceptance of all terms. Itemize, or accept.",
        },
      },
      {
        num: "07",
        label: "26-19 vs 26-13",
        pill: "Read it all",
        icon: "search-check",
        title: "26-19 versus 26-13",
        secref: "A read-it-all tell",
        trap: {
          label: "The rule",
          text: "The cover, title, and Noncollusion Declaration read 26-19. Every running page header reads 26-13, a typo in the source.",
        },
        fix: {
          label: "If you miss it",
          text: "The governing number is <strong>26-19.</strong> Use it on the email subject and every form. Spotting the discrepancy shows you read the whole document.",
        },
      },
    ],
  },
  evaluation: {
    eyebrow: "How scoring works",
    heading: "Best value, not low price.",
    body: "Seventy percent of the score is qualifications, experience, and references. Cost is only fifteen. The City also reserves a discretionary, unweighted interview right.",
    variant: "bars" as const,
    cardTitle: "Scoring weights, out of 100",
    bars: [
      { label: "Key Personnel qualifications", pct: 25 },
      { label: "Relevant project experience", pct: 25 },
      { label: "Company qualifications & experience", pct: 20 },
      { label: "References", pct: 15 },
      { label: "Cost reasonableness of rate schedule", pct: 15 },
    ],
  },
  pricing: {
    eyebrow: "Value & pricing",
    heading: "A rate-schedule competition, fixed for the term.",
    body: "Time and materials, not a lump sum. Rates lock once submitted. The field technician and special inspector rates are the variable that most affects the win, since those roles are used most. Tender Insight estimates.",
    scenarios: [
      {
        tier: "Low",
        value: "$75",
        unit: "/ hr field tech",
        detail: "Special inspector $80, PE $145.",
      },
      {
        tier: "Mid",
        value: "$85",
        unit: "/ hr field tech",
        detail: "Special inspector $90, PE $160, PM $175.",
        recommended: true,
        pill: "Recommended",
      },
      {
        tier: "High",
        value: "$100",
        unit: "/ hr field tech",
        detail: "Special inspector $110, PE $185.",
      },
    ],
    footnotes: [
      {
        icon: "info",
        html: "Mid is the recommended posture because <strong>cost carries only 15 percent.</strong> Pricing the most-used roles competitively matters more than shaving the PE rate.",
      },
    ],
  },
  securityGrid: {
    eyebrow: "Compliance frameworks",
    heading: "The statutes the contract pulls in.",
    items: [
      {
        icon: "gavel",
        title: "California law, SD venue",
        desc: "San Diego County courts. Government Claims Act applies.",
      },
      {
        icon: "hard-hat",
        title: "Prevailing wages & DIR",
        desc: "Labor Code 1720, 1770; DIR registration under 1725.5.",
      },
      {
        icon: "badge-check",
        title: "IRCA",
        desc: "Work-authorization compliance for all staff.",
      },
      {
        icon: "building",
        title: "CBC Chapter 17",
        desc: "Governs special inspection on this work.",
      },
      {
        icon: "droplets",
        title: "RWQCB storm-water permit",
        desc: "Order R9-2013-0001, through the indemnification clause.",
      },
      {
        icon: "tags",
        title: "Buyer's NIGP codes",
        desc: "92546, 92550, 92532, 95826, 91275.",
      },
    ],
  },
  agency: {
    eyebrow: "Agency context",
    heading: "Who is buying, and why.",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/e/e5/Mark_Skovorodko_Photography_-_Escondido_City_Hall.jpg",
    photoAlt: "Escondido City Hall",
    body: "The City of Escondido is an incorporated Council-Manager city in North County, San Diego County, incorporated 1888. The Utilities Department runs the capital program this RFP supports, across water, wastewater, recycled water, and stormwater infrastructure.",
    stats: [
      { value: "~151,000", label: "Residents, public-source estimate" },
      { value: "4th", label: "Most populous in San Diego County" },
    ],
    attribution:
      "Escondido City Hall. Photo: Mark Skovorodko, CC BY-SA 4.0, via Wikimedia Commons.",
  },
  competingField: {
    eyebrow: "The competing field",
    heading: "47 primes mapped, a long tail of boutiques.",
    body: "From the prime-contractor database. A handful of national firms anchor the field, but most of the bench is mid-market and boutique shops that compete on fit. Figures are public-source estimates for partner targeting.",
    stats: [
      { value: "47", label: "Firms mapped to the solicitation" },
      {
        value: "16",
        valueSuffix: "/ 31",
        label: "Highly / partially relevant",
      },
      { value: "5", label: "California-based primes" },
      { value: "~$8.7", valueSuffix: "B", label: "Combined estimated revenue" },
    ],
    bar: {
      segments: [
        { tier: "nat", width: 21 },
        { tier: "mid", width: 45 },
        { tier: "bout", width: 34 },
      ],
      legends: [
        {
          tier: "nat",
          count: "10",
          label: "national, $100M+, where the revenue concentrates",
        },
        { tier: "mid", count: "21", label: "mid-market, $10M to $100M" },
        { tier: "bout", count: "16", label: "boutique, under $10M" },
      ],
    },
    liveFootnote: {
      icon: "folder-lock",
      html: "The named company-level map, contacts, and relevance scoring are in the <strong>full document pack.</strong> Ask us for it under NDA.",
    },
  },
  strategicQuestions: {
    eyebrow: "Before June 12",
    heading: "Four questions worth filing.",
    body: "Questions the prime should consider, through the one channel. Techtiz never contacts the City.",
    liveOnly: true,
    questions: [
      {
        num: "Question 01",
        title: "How are resumes counted against the 20-page limit?",
        body: "Page-limit treatment of resumes and appendices changes how the package is built.",
      },
      {
        num: "Question 02",
        title: "Is a two-firm prime and sub arrangement acceptable?",
        body: "The split-award language hints at it. Confirm before structuring the team.",
      },
      {
        num: "Question 03",
        title: "Does DIR registration apply to inspection services here?",
        body: "Clarify the prevailing-wage and DIR scope for this specific work.",
      },
      {
        num: "Question 04",
        title: "Is a debrief available to unsuccessful proposers?",
        body: "Useful for the next pursuit, and a legitimate pre-bid ask.",
      },
    ],
  },
  techtizApproach: {
    eyebrow: "How Techtiz fits",
    heading: "The paperwork engine, behind your firm.",
    body: "Techtiz builds the documentation. The prime owns the field, the agency relationship, and every signature. We never contact the City.",
    liveOnly: true,
    cards: [
      {
        title: "NDA before any data",
        body: "A mutual NDA and written City consent before a single City document moves.",
      },
      {
        title: "Pre-award package",
        body: "Executive summary, references, resumes, and rate schedule, assembled for your review.",
      },
      {
        title: "Post-award paperwork",
        body: "RFI drafts, daily reports, and test-report formatting, after your licensed staff certify.",
      },
      {
        title: "Your firm owns the field",
        body: "All on-site work, certification, signatures, and City communication stay with the prime.",
      },
    ],
    lockedNote:
      "Prime name, engagement value, and City data stay under NDA. Techtiz never contacts the City.",
  },
  cta: {
    eyebrow: {
      live: "Bidding RFP No. 26-19? The window is open.",
      past: "Have a live SLED pursuit?",
    },
    heading: {
      live: "Request the full RFP-decode pack.",
      past: "We can build the package for your next pursuit.",
    },
    body: "A US partner manager replies within one business day, under a mutual NDA, never agency-facing. Your firm holds the field, the certifications, and the City relationship.",
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
} as const;
