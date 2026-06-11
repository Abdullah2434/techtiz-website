export const ALTADENA_CASE_STUDY = {
  slug: "altadena",
  crumb: "Altadena Library District",
  deadline: "2026-06-26T17:00:00-07:00",
  seo: {
    title:
      "Altadena Library District · Accounting Services (RFP No. 31) | Techtiz SLED",
    description:
      "Pre-bid brief: Altadena Library District RFP No. 31, Accounting and Financial Consulting Services. Techtiz is the prime CPA firm's NDA-first technology and back-office production subcontractor. Never agency-facing.",
    ogImage: "/assets/sled-case-studies/altadena/hero.png",
    canonicalPath: "/us-sled/case-studies/altadena/",
  },
  hero: {
    eyebrow: {
      live: "Pre-bid brief · Live RFP · Under NDA",
      past: "Pre-bid brief · Closed · Under NDA",
    },
    h1: 'A prime CPA firm\'s pre-bid brief for <span class="accent">Altadena RFP No. 31.</span>',
    body: "Altadena Library District, Accounting and Financial Consulting Services. One vendor, three years, the District's outsourced finance function.",
    livePill: "Live · closes Jun 26, 5 PM PT",
    pastPill: "Closed · selection complete",
    heroBg: "/assets/sled-case-studies/altadena/hero.png",
    logo: "/assets/sled-case-studies/altadena/logo.png",
    logoAlt: "Altadena Libraries",
    identity: {
      awardingBody: "Altadena Library District",
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
    { key: "Solicitation", value: "RFP No. 31", sub: "Single-vendor award" },
    { key: "District", value: "$3.9M budget", sub: "About 43,000 residents" },
    { key: "Term", value: "3 years + 2 options", sub: "5-year outer term" },
    {
      key: "Techtiz role",
      value: "Back-office",
      sub: "NDA-first, never agency-facing",
    },
  ],
  competingField: {
    eyebrow: "The competing field",
    heading: "A boutique California public-sector race.",
    body: "From the bidder database. The two national firms can outspend the field, but the bench is small, local CPA shops that win on District-specific understanding. Public-source estimates for partner targeting.",
    stats: [
      { value: "28", label: "Firms mapped to the solicitation" },
      { value: "12", label: "Highly relevant, 7 partially relevant" },
      { value: "8", label: "California-based primes" },
      {
        value: "~$2.7",
        valueSuffix: "B",
        label: "Combined revenue, mostly two national firms",
      },
    ],
    bar: {
      segments: [
        { tier: "nat", width: 10 },
        { tier: "mid", width: 15 },
        { tier: "bout", width: 75 },
      ],
      legends: [
        {
          tier: "nat",
          count: "2",
          label: "national, $100M+ (Baker Tilly ~$1.8B, Eide Bailly ~$761M)",
        },
        { tier: "mid", count: "3", label: "mid-market, $10M to $100M" },
        { tier: "bout", count: "15", label: "boutique, under $10M" },
      ],
    },
  },
  awardModel: {
    eyebrow: "The award model",
    heading: "One vendor, chosen on trust.",
    body: "Not a multi-pool, not a weighted scorecard. A single qualified firm is selected at the District's sole discretion. The winning firm effectively becomes the District's outsourced finance function.",
    rows: [
      {
        label: "Selection basis",
        value:
          "<strong>Qualifications and trust, no numeric weights.</strong> Award at the District's sole discretion, qualitative review of experience, personnel, understanding, and cost.",
      },
      {
        label: "Who signs",
        value:
          "Two people approve. <strong>Nikki Winslow, District Director, signs the agreement;</strong> General Counsel Jeffrey Mitchell approves as to form. The proposal speaks to one reader.",
      },
      {
        label: "Board step",
        value:
          "The Board of five elected trustees sees the selection on <strong>July 20, 2026.</strong> References are called before that date.",
      },
      {
        label: "What you become",
        value:
          "The District's outsourced finance function across the full annual cycle, on a three-year term with two optional one-year renewals.",
      },
    ],
  },
  keyDates: {
    eyebrow: "Schedule of events",
    heading: "A 38-day window, one hard close.",
    body: "Proposals are submitted electronically through the District website only. Late submissions are not accepted, with no exceptions.",
    events: [
      {
        date: "May 19, 2026",
        label: "RFP issued",
        detail: "RFP No. 31 released",
      },
      {
        date: "Jun 19, 2026",
        label: "Questions due",
        detail: "By 5:00 PM, to the District",
      },
      {
        date: "Jun 22, 2026",
        label: "Answers posted",
        detail: "District responds to questions",
      },
      {
        date: "Jun 26, 2026",
        label: "Proposals due, 5:00 PM PT",
        detail: "Electronic only. No late acceptance",
        hard: true,
      },
      {
        date: "Jun 29 to Jul 3",
        label: "Evaluation",
        detail: "District reviews proposals",
      },
      {
        date: "Week of Jul 6",
        label: "Optional interview",
        detail: "One hour, in person or virtual",
      },
      {
        date: "Jul 20, 2026",
        label: "Board selection",
        detail: "Trustees approve the award",
      },
      {
        date: "Aug 3, 2026",
        label: "Tentative start",
        detail: "Agreement returned in 10 working days",
      },
    ],
    foot: {
      prefix: "38 days from issue to close. Today the clock is ",
      live: "running",
      past: "stopped",
      suffix: ".",
    },
  },
  differentiator: {
    icon: "landmark",
    tag: "Scope · The differentiator",
    quote:
      "The scope requires monthly Community Facilities District bond-proceeds tracking, reconciled to US Bank, with separate management reporting.",
    sub: "This Mello-Roos requirement appears in almost no comparable small-district RFP. A credible bid names it as a documented specialty, not routine bookkeeping. It is the single strongest hook to show real District understanding.",
    liveNote:
      "This is the documented specialty Techtiz's back-office production runs, under the prime's review.",
  },
  taskAllocation: {
    eyebrow: "Task allocation",
    heading:
      "What a remote back-office can run, and what cannot leave the prime.",
    body: "The line that makes a compliant subcontractor model work for a California special district.",
    legalBar: {
      icon: "scale",
      html: "<strong>No licensing statute bars offshore work here.</strong> Instead the agreement governs: it prohibits subcontracting without the District's prior written approval, requires all District financial data to be kept confidential, and locks the named key employee to the account. Offshore support is permissible only with written District approval and a compliant NDA in place first.",
    },
    canColumn: {
      icon: "globe",
      title: "Remote back-office subcontractor",
      subtitle: "Under NDA and District approval",
      items: [
        "Budget research and template building",
        "Ten-year cash-flow model building",
        "GL and bank reconciliation work",
        "Journal-entry drafts",
        "Monthly financial statement drafts",
        "1099 data compilation",
        "Grant and cost-center reconciliation drafts",
        "OPEB and State report draft preparation",
        "Audit schedule preparation",
        "Financial analysis and modeling",
      ],
      techtizSlot:
        "<strong>This is the back-office layer Techtiz runs,</strong> behind the prime's review and sign-off.",
    },
    primeColumn: {
      icon: "stamp",
      title: "US prime only",
      subtitle: "Signed, filed, District-facing",
      items: [
        "Final review and sign-off",
        "Posting journal entries to District systems",
        "All tax and CalPERS filings and submissions",
        "All District and auditor communication",
        "Board and committee attendance",
        "On-site internal-controls observation",
        "Staff training delivery",
      ],
    },
    hardLimit: {
      icon: "lock",
      html: "<strong>Hard limit.</strong> No District financial data, GL records, bank statements, payroll and CalPERS data, CFD bond documents, or audit schedules, moves offshore without prior written District approval and a signed NDA in place first.",
    },
  },
  failureTabs: {
    eyebrow: "Where bids fail",
    heading: "Six ways a strong firm loses this one.",
    body: "None of these is about accounting skill. Each is a contract or process trap.",
    tabs: [
      {
        num: "01",
        label: "Insurance conflict",
        pill: "Exposure",
        icon: "file-warning",
        title: "The insurance numbers conflict",
        secref: "RFP body vs agreement",
        trap: {
          label: "The rule",
          text: "The RFP body states $1,000,000 general liability. The agreement states $2,000,000. The agreement governs.",
        },
        fix: {
          label: "If you miss it",
          text: "Bind at the lower limit and you are non-compliant. Bind at $2,000,000 and clarify before June 19.",
        },
      },
      {
        num: "02",
        label: "Subcontracting",
        pill: "Voids",
        icon: "git-fork",
        title: "Subcontracting without approval",
        secref: "Agreement",
        trap: {
          label: "The rule",
          text: "The agreement prohibits subcontracting without the District's prior written approval. This is the binding constraint on any offshore involvement.",
        },
        fix: {
          label: "If you miss it",
          text: "Unapproved subcontracting voids the agreement and creates exposure. Get written approval and an NDA first.",
        },
      },
      {
        num: "03",
        label: "Key employee",
        pill: "Locked",
        icon: "lock-keyhole",
        title: "The key employee is locked",
        secref: "Agreement",
        trap: {
          label: "The rule",
          text: "The named key employee is locked to the account and cannot be reassigned without written District consent.",
        },
        fix: {
          label: "If you miss it",
          text: "Quietly swapping the named lead breaches the agreement. Name someone you can keep on the account.",
        },
      },
      {
        num: "04",
        label: "Exceptions",
        pill: "Deemed accept",
        icon: "list-x",
        title: "Exceptions must be itemized",
        secref: "Proposal terms",
        trap: {
          label: "The rule",
          text: "Exceptions must be listed item by item, or you are deemed to accept all terms. Proposals that reference other terms and conditions can be rejected.",
        },
        fix: {
          label: "If you miss it",
          text: 'A boilerplate "subject to our standard terms" can get the whole proposal thrown out.',
        },
      },
      {
        num: "05",
        label: "References",
        pill: "Sinks bid",
        icon: "phone-call",
        title: "References are called early",
        secref: "Before the Board date",
        trap: {
          label: "The rule",
          text: "References will be contacted before the July 20 Board date. Three external references are expected.",
        },
        fix: {
          label: "If you miss it",
          text: "Weak or unreachable references sink an otherwise strong bid. Warm and confirm them in advance.",
        },
      },
      {
        num: "06",
        label: "Termination",
        pill: "Price it",
        icon: "scissors",
        title: "Termination for convenience",
        secref: "Agreement",
        trap: {
          label: "The rule",
          text: "The District may terminate for convenience on short written notice.",
        },
        fix: {
          label: "If you miss it",
          text: "Price and staff for that reality. Do not assume the full three-year term is guaranteed revenue.",
        },
      },
    ],
  },
  capabilityGrid: {
    eyebrow: "Mandatory qualifications",
    heading: "Four gates from Section 3.0.",
    body: "Miss any one and the proposal is not competitive. These are pass or fail before anything qualitative.",
    items: [
      {
        icon: "building-2",
        title: "California government clients",
        desc: "A list of California government agency clients.",
      },
      {
        icon: "receipt",
        title: "IRS and EDD knowledge",
        desc: "Knowledge of IRS taxation and California EDD law.",
      },
      {
        icon: "book-check",
        title: "GASB implementation",
        desc: "Experience implementing GASB pronouncements.",
      },
      {
        icon: "users",
        title: "CalPERS reporting",
        desc: "Reporting employee retirement and health data to CalPERS.",
      },
    ],
  },
  evaluation: {
    eyebrow: "How scoring works",
    heading: "Qualitative, not a points sheet.",
    body: "There are no published numeric weights. The District decides on judgment, with an optional one-hour finalist interview led by a principal.",
    variant: "qualitative" as const,
    cards: [
      {
        title: "How it is decided",
        items: [
          {
            type: "num" as const,
            num: "1",
            text: "<strong>Qualitative review</strong> against the factors at right. No numeric weights, award at the District's discretion.",
          },
          {
            type: "num" as const,
            num: "2",
            text: "<strong>Two-person approval.</strong> The District Director signs, General Counsel approves as to form, the Board confirms on July 20.",
          },
          {
            type: "num" as const,
            num: "3",
            text: "<strong>Optional interview,</strong> one hour, led by a principal, in the week of July 6. Treat it as the close.",
          },
        ],
      },
      {
        title: "What they weigh",
        items: [
          {
            type: "icon" as const,
            icon: "briefcase",
            text: "<strong>Experience & References.</strong> Comparable California public-sector work, three external references.",
          },
          {
            type: "icon" as const,
            icon: "user-round",
            text: "<strong>Personnel.</strong> Resumes, a named relationship manager, a named computer financial analysis specialist.",
          },
          {
            type: "icon" as const,
            icon: "target",
            text: "<strong>Proposer Qualifications.</strong> Demonstrated understanding of this specific district.",
          },
          {
            type: "icon" as const,
            icon: "calculator",
            text: "<strong>Total Cost.</strong> Fixed monthly fee for Years 1, 2, 3 plus an additional-services rate card with a not-to-exceed cap.",
          },
          {
            type: "icon" as const,
            icon: "scale",
            text: "<strong>Non-Discrimination.</strong> EEO and any MWBE status.",
          },
        ],
      },
    ],
  },
  pricing: {
    eyebrow: "Engagement value",
    heading: "Three ways the monthly fee could land.",
    body: "A fixed monthly fee for an ongoing finance function. These are planning scenarios against a $3.9M District budget.",
    scenarios: [
      {
        tier: "Low",
        value: "$7,500",
        unit: "/ mo",
        detail: "About $90,000 per year.",
      },
      {
        tier: "Mid",
        value: "$10,500",
        unit: "/ mo",
        detail: "About $126,000 per year.",
        recommended: true,
        pill: "Recommended",
      },
      {
        tier: "High",
        value: "$13,500",
        unit: "/ mo",
        detail: "About $162,000 per year.",
      },
    ],
    footnotes: [
      {
        icon: "alert-triangle",
        html: "Below <strong>$7,500</strong> raises a quality concern. Above roughly <strong>$13,000</strong> draws negotiation pressure. A monthly fee above <strong>$8,000 to $10,000</strong> gets Board scrutiny against the $3.9M budget.",
      },
    ],
  },
  response: {
    eyebrow: "Full scope at a glance",
    heading: "The District outsources its finance function.",
    body: "The engagement spans the entire finance cycle, roughly 20 deliverable categories, from the annual budget through year-end close, CalPERS, and staff training.",
    chips: [
      "Budget & 10-year cash flow",
      "Mid-year review",
      "GAAP year-end close",
      "Audit coordination",
      "Monthly GL reconciliations",
      "Bank reconciliations",
      "Journal entries",
      "CFD bond tracking",
      "Grant cost-center accounting",
      "Monthly financial statements",
      "1099s",
      "State Government Compensation report",
      "OPEB trust reporting",
      "State Financial Transactions Report review",
      "Internal controls",
      "Board & committee attendance",
      "Best-practices advisory",
      "Staff training",
      "Payroll & EDD support",
      "CalPERS support",
    ],
  },
  securityGrid: {
    eyebrow: "Before you submit",
    heading: "Bind it right, file two questions.",
    insurance: {
      icon: "umbrella",
      html: "<strong>Insurance bar.</strong> Resolve the $1M versus $2M conflict in favor of the agreement, so $2,000,000 general liability. Plus Workers Compensation $1M, Auto $1M, Errors and Omissions $1M endorsed for contractual liability, District named as additional insured, 30-day cancellation notice, coverage primary, certificates within five days of the effective date.",
    },
    risks: [
      {
        icon: "server-crash",
        title: "Portal failure",
        text: "Congestion or an outage on deadline day. Submit early, not at 4:59.",
      },
      {
        icon: "file-warning",
        title: "Insurance conflict",
        text: "Leaving the $1M vs $2M gap unresolved past June 19.",
      },
      {
        icon: "user-x",
        title: "Key-employee availability",
        text: "The named lead must hold across a multi-year term.",
      },
      {
        icon: "phone-off",
        title: "Weak references",
        text: "They are called before the Board date. Confirm them.",
      },
      {
        icon: "landmark",
        title: "CFD understaffing",
        text: "Mello-Roos tracking needs a named owner, not a footnote.",
      },
      {
        icon: "globe-lock",
        title: "Unapproved offshore use",
        text: "Any offshore work without written approval and an NDA.",
      },
    ],
  },
  strategicQuestions: {
    eyebrow: "Before you submit",
    heading: "Bind it right, file two questions.",
    liveOnly: false,
    questions: [
      {
        num: "Question 01",
        title: "Which general liability limit governs?",
        body: "The RFP body says $1M, the agreement says $2M. A plain clarification before June 19, legitimate and non-disqualifying.",
      },
      {
        num: "Question 02",
        title:
          "Is a US-prime-supervised remote support team under NDA permitted?",
        body: "For document preparation and research, under the prime's responsible review. This directly enables a compliant back-office model.",
      },
    ],
  },
  techtizApproach: {
    eyebrow: "How Techtiz fits",
    heading: "The back-office production layer, behind your firm.",
    body: "Your licensed professionals hold the client relationship, all sign-off, all District and auditor communication, and Board attendance. We never contact the District.",
    liveOnly: true,
    cards: [
      {
        title: "NDA before any data",
        body: "A mutual NDA and written District approval before a single record moves.",
      },
      {
        title: "Drafts, you sign",
        body: "We build models, reconciliations, and statement drafts. Your CPA reviews and signs.",
      },
      {
        title: "Your firm faces the District",
        body: "All communication, filings, and Board attendance stay with the prime.",
      },
      {
        title: "CFD bond fluency",
        body: "Mello-Roos proceeds tracking reconciled to US Bank, prepared for your review.",
      },
    ],
    lockedNote:
      "Prime name, engagement value, and District data stay under NDA. We never contact the District.",
  },
  cta: {
    eyebrow: {
      live: "Bidding RFP No. 31? The window is open.",
      past: "Have a live SLED pursuit?",
    },
    heading: {
      live: "Send us the RFP. We will scope the back-office work.",
      past: "We can build the package for your next pursuit.",
    },
    body: "A US partner manager replies within one business day, under a mutual NDA, never agency-facing. Your firm holds the client, the sign-off, and the District relationship.",
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
