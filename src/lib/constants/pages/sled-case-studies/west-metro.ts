export const WEST_METRO_CASE_STUDY = {
  slug: "west-metro",
  crumb: "West Metro Fire",
  deadline: "2026-06-29T16:00:00-04:00",
  seo: {
    title:
      "West Metro Fire · Enterprise Technology Platforms (WMRFP2026-1) | Techtiz SLED",
    description:
      "Pre-bid brief: West Metro Fire Protection District RFP WMRFP2026-1, Enterprise Technology Platforms. Techtiz is the prime's NDA-first remote technology and back-office subcontractor for the non-CJIS scope. Never agency-facing, never touching CJIS-controlled data.",
    ogImage: "/assets/west-metro-truck.png",
  },
  hero: {
    eyebrowLive: "Pre-bid brief · Live RFP · Under NDA",
    eyebrowPast: "Pre-bid brief · Closed · Under NDA",
    h1: 'A prime\'s pre-bid brief for <span class="accent">West Metro WMRFP2026-1.</span>',
    body: "West Metro Fire Protection District, Colorado, an RFP for Enterprise Technology Platforms across seven functional areas. One CJIS boundary decides what offshore support can legally touch. Techtiz drafts the non-CJIS technical and back-office work behind a US prime, NDA-first, and never agency-facing.",
    livePill: "Live · closes Jun 29, 4 PM EDT",
    pastPill: "Proposals in review",
    heroBg: "/assets/west-metro-truck.png",
    logo: "/assets/west-metro-logo.png",
    logoAlt: "West Metro Fire Rescue",
    identity: {
      awardingBody: {
        label: "Awarding body",
        value: "West Metro Fire",
      },
      jurisdiction: {
        label: "Jurisdiction",
        value: "Jefferson County, Colorado",
      },
      statusLive: "Drafting under NDA",
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
      value: "WMRFP2026-1",
      small: "Ref 0000426216",
    },
    {
      key: "Scope",
      value: "7 platforms",
      small: "Modular or integrated",
    },
    {
      key: "Award",
      value: "Best value",
      small: "Line-item award reserved",
    },
    {
      key: "Techtiz role",
      value: "Back-office",
      small: "Non-CJIS, NDA-first",
    },
  ],
  keyDates: {
    modHead: {
      eyebrow: "Schedule of events",
      h2: "One hard deadline, stated in Eastern time.",
      p: "Proposals are due June 29 at 4:00 p.m. EDT, electronic PDF only, with no exceptions for a late upload. The District sits in Mountain time, so confirm the local-clock equivalent before submitting. The July 6 vendor demonstration is a scored, live stage.",
    },
    events: [
      {
        date: "Jun 1, 2026",
        label: "Published",
        detail: "RFP issued, 2:12 PM EDT, ref 0000426216",
      },
      {
        date: "Jun 12, 2026",
        label: "Questions due",
        detail: "Stated 2:00 AM EDT, confirm, reads like a 2:00 PM typo",
      },
      {
        date: "Jun 12, 2026",
        label: "Bid intent, optional",
        detail: "Notice of intent due 4:00 PM EDT",
      },
      {
        date: "Jun 16, 2026",
        label: "Answers released",
        detail: "District posts Q&A responses",
      },
      {
        date: "Jun 29, 2026",
        label: "Proposals due, 4 PM EDT",
        detail: "Electronic PDF only. No late submission",
        hard: true,
      },
      {
        date: "Jul 6, 2026",
        label: "Demonstrations",
        detail: "Scored, live integration demo, not screenshots",
      },
      {
        date: "Jul 31, 2026",
        label: "Selection target",
        detail: "Final selection expected",
      },
    ],
  },
  differentiator: {
    icon: "shield-check",
    tag: "The differentiator · The CJIS boundary",
    quote:
      "Section 6.6 names CJIS alongside NIST CSF and NIST 800-53, and knowing exactly where the CJIS line falls is the specialized knowledge a prime is buying.",
    sub: "CJIS Security Policy Section 5.12 requires fingerprint-based background checks for anyone with logical access to CJIS-controlled data, available only to US citizens and certain lawful permanent residents. That is a hard personnel-security line. Structuring the work so offshore support never crosses it, while the prime owns everything CJIS-adjacent, is the domain read that separates a credible bid from a generic one. A second proof of reading sits in Section 6.7: a 30 to 60-day full data return at termination in non-proprietary formats, a clause that reads like a District burned by a prior vendor and that rewards a vendor who speaks to portability directly.",
    liveNote:
      "Techtiz hands the prime a ready CJIS-aware work-package separation, so offshore support is briefed and productive without ever seeing CJIS-controlled material.",
  },
  taskAllocation: {
    modHead: {
      eyebrow: "The offshore allocation matrix",
      h2: "What a remote team drafts, and what stays with the prime.",
      p: "The centerpiece of this engagement. The boundary that keeps a compliant subcontractor model on the right side of a federal personnel-security bar.",
    },
    legalBar: {
      icon: "scale",
      html: "<strong>A hybrid basis.</strong> A hard statutory bar, CJIS Security Policy Section 5.12.1 personnel security enforced under 28 C.F.R. Part 20, exposes the US prime to criminal liability on all CJIS-controlled work, so that work never moves offshore. Around it sit contractual gates: a signed NDA before any data moves, Colorado-law NDA scope, CORA-confidential marking, and CJIS-compliant or FedRAMP-authorized residency for any hosted CJIS data. Subcontracting is not addressed in the RFP, so confirm any subcontractor-disclosure expectation with the contracting officer.",
    },
    canColumn: {
      icon: "globe",
      title: "Offshore-eligible, post-NDA",
      subtitle: "Non-CJIS drafting and build",
      items: [
        "RFP and solicitation text analysis",
        "Non-CJIS proposal content for LMS, analytics, staffing, personnel, asset, and prevention modules",
        "Pricing models and five-year budget worksheets",
        "NIST CSF and NIST 800-53 control-mapping documentation, framework mapping only, no credentials or system configs",
        "Generic non-CJIS API documentation and integration code development",
        "LMS configuration and course migration",
        "Analytics and BI dashboard development on synthetic or anonymized data",
      ],
      techtizSlot: {
        icon: "zap",
        html: "<strong>Techtiz operates only in this column,</strong> behind the prime, under NDA, and never touches the District, CJIS data, or any RMS, ePCR, or CAD work product.",
      },
    },
    primeColumn: {
      icon: "building-2",
      title: "US prime only",
      subtitle: "CJIS, live data, the submission",
      items: [
        "RMS and ePCR architecture and configuration",
        "CJIS system configurations and credentials",
        "CAD integration build and testing, CAD is CJIS-adjacent",
        "CJIS compliance documentation and review",
        "Live District operational data, incident records and personnel data",
        "User acceptance testing with live District data",
      ],
    },
  },
  awardModel: {
    modHead: {
      eyebrow: "The award model",
      h2: "Single best-value, but the District can split by area.",
      p: "A vendor covering one or two of the seven functional areas can compete and win on those areas. No stated weights, no guaranteed minimum, and the July 6 demonstration is scored.",
    },
    rows: [
      {
        label: "The default",
        value:
          "<strong>One best-value award.</strong> A single multi-criteria, best-value selection across the seven factors, with no published numeric weights.",
      },
      {
        label: "The reservation",
        value:
          "<strong>Award by functional-area line item.</strong> The District explicitly reserves the right to award by area to more than one vendor, so a focused, two-module bid is viable.",
      },
      {
        label: "No floor",
        value:
          "<strong>No guaranteed minimum.</strong> One-year base period with annual renewal options, the number of options not specified. No sample agreement was provided, so no term or insurance conflict is asserted.",
      },
      {
        label: "The scored stage",
        value:
          "<strong>July 6 demonstration.</strong> A live integration demo, scored, is its own stage of the evaluation.",
      },
    ],
    footnote: {
      icon: "zap",
      html: "<span>Techtiz scopes its draft support to the exact modules the prime intends to bid, so the response stays deep on those areas rather than spread thin across all seven.</span>",
      liveOnly: true,
    },
  },
  capabilityGrid: {
    modHead: {
      eyebrow: "Scope",
      h2: "Seven functional areas, one or more integrated platforms.",
      p: "Modular or integrated bids are both acceptable. API-based integration with CAD, RMS, NERIS, payroll, and GIS is demonstrated live on July 6. The RMS and ePCR area is the one that pulls in CJIS, and it stays with the prime.",
    },
    items: [
      {
        icon: "layout-grid",
        title: "Functional Fit & Usability",
        desc: "Does the platform match the District's workflows across the bid modules.",
      },
      {
        icon: "git-merge",
        title: "Integration Capability",
        desc: "Live API integration with CAD, RMS, NERIS, payroll, and GIS, proven July 6.",
      },
      {
        icon: "bar-chart-3",
        title: "Reporting & Analytics",
        desc: "Data warehouse, dashboards, and reporting depth.",
      },
      {
        icon: "shield-check",
        title: "Cybersecurity & Compliance",
        desc: "CJIS, NIST CSF, NIST 800-53, with a control map and pen-test summary.",
      },
      {
        icon: "shield-check",
        title: "Vendor Support & Stability",
        desc: "Support model and financial and organizational stability.",
      },
      {
        icon: "calculator",
        title: "Cost",
        desc: "Five-year TCO with disclosed escalation. Hidden costs risk a non-responsive ruling.",
      },
      {
        icon: "route",
        title: "Implementation Approach",
        desc: "Phasing, migration, and the path to go-live.",
      },
      {
        icon: "monitor-x",
        title: "Scored demonstration",
        desc: "July 6 live demo is its own scored stage of the evaluation.",
      },
    ],
  },
  failureTabs: {
    modHead: {
      eyebrow: "Where bids fail",
      h2: "Nine ways a strong vendor self-eliminates.",
      p: "None is about product quality. Each is a packaging, channel, or compliance trap that drops a response before the seven factors are ever scored.",
      eyebrowAccent: true,
    },
    tabs: [
      {
        num: "01",
        tab: "Late upload",
        pill: "No exceptions",
        icon: "timer-off",
        title: "Submitting after the deadline",
        secref: "Jun 29, 4 PM EDT",
        trapLabel: "The rule",
        trap: "Late submission has no stated exception. The clock is Eastern time for a Mountain-time district.",
        fixLabel: "If you miss it",
        fix: "Submit a full day early, confirm the cutoff against the local clock, and screenshot the upload confirmation.",
      },
      {
        num: "02",
        tab: "Off-channel contact",
        pill: "DQ risk",
        icon: "volume-x",
        title: "Contact outside the single channel",
        secref: "RFP2026@westmetrofire.org",
        trapLabel: "The rule",
        trap: "Todd Heinl and the RFP email are the only authorized channel. Any direct contact with District staff outside it is a disqualifier risk.",
        fixLabel: "If you miss it",
        fix: "Route every question through the one email. Techtiz never contacts the District; the prime owns the channel.",
      },
      {
        num: "03",
        tab: "Missed addenda",
        pill: "Non-responsive",
        icon: "file-warning",
        title: "Unacknowledged addenda",
        secref: "Q&A released Jun 16",
        trapLabel: "The rule",
        trap: "Answers and any addenda post after the question window. An unacknowledged addendum reads as non-responsive.",
        fixLabel: "If you miss it",
        fix: "Acknowledge every addendum in the proposal and rework affected content before the deadline.",
      },
      {
        num: "04",
        tab: "Generic security",
        pill: "No NIST map",
        icon: "shield-off",
        title: "Security claims with no control map",
        secref: "Section 6.6",
        trapLabel: "The rule",
        trap: "Generic security language without a NIST control map and a real third-party penetration-test summary carries no weight.",
        fixLabel: "If you miss it",
        fix: "Map controls to NIST CSF and 800-53 and attach a current pen-test summary. Techtiz drafts the framework mapping.",
      },
      {
        num: "05",
        tab: "NDA",
        pill: "NDA",
        icon: "lock",
        title: "The CJIS evidence standard most vendors miss",
        secref: "CJIS · Locked",
        trapLabel: "The decision",
        trap: "A CJIS claim without supporting evidence on an RMS or ePCR module reads as a gap, and overclaiming offshore reach is the trap most bids fall into.",
        fixLabel: "Why it matters",
        fix: "How to evidence CJIS alignment on the prime's side while keeping non-CJIS support offshore is in the full pack.",
      },
      {
        num: "06",
        tab: "Expired SOC 2",
        pill: "Stale cert",
        icon: "calendar-x",
        title: "Expired SOC 2 or HITRUST",
        secref: "Within 12 months",
        trapLabel: "The rule",
        trap: "A current SOC 2 or HITRUST attestation within 12 months is mandatory. A stale certificate fails the gate.",
        fixLabel: "If you miss it",
        fix: "Confirm the attestation date before submission and refresh if it is near expiry.",
      },
      {
        num: "07",
        tab: "VPAT mismatch",
        pill: "Wrong version",
        icon: "file-x",
        title: "A VPAT that does not match the version",
        secref: "Section 11.8",
        trapLabel: "The rule",
        trap: "A current VPAT is required, and it must match the proposed product version. Section 508 and WCAG 2.1 AA are the floor.",
        fixLabel: "If you miss it",
        fix: "Align the VPAT to the exact version bid and confirm WCAG 2.1 AA coverage.",
      },
      {
        num: "08",
        tab: "NDA",
        pill: "NDA",
        icon: "lock",
        title: "Bundled pricing that hides escalation",
        secref: "TCO · Locked",
        trapLabel: "The decision",
        trap: "Pricing that hides optional-module or escalation costs may be ruled non-responsive, so a low Year 1 headline can backfire.",
        fixLabel: "Why it matters",
        fix: "How to present a transparent five-year TCO that still wins on cost is in the full pack.",
      },
      {
        num: "09",
        tab: "Screenshot demo",
        pill: "Live only",
        icon: "monitor-x",
        title: "Integration shown by screenshot",
        secref: "Jul 6 demonstration",
        trapLabel: "The rule",
        trap: "The July 6 demo must show a live data flow across CAD, RMS, NERIS, payroll, and GIS. A screenshot is not a demonstration.",
        fixLabel: "If you miss it",
        fix: "Rehearse the live integration on real connectors. Demo execution stays with the prime.",
      },
    ],
  },
  pricing: {
    modHead: {
      eyebrow: "Value model",
      h2: "Three five-year scenarios, driven by module count.",
      p: "No budget is stated in the RFP. The ranges below are market estimates for planning only, not a District figure and not a bid. Total cost of ownership transparency is the pricing variable that matters most, since hidden or undisclosed costs may be ruled non-responsive.",
    },
    scenarios: [
      {
        tier: "Low",
        value: "$500-800k",
        valueSmall: "5-yr TCO",
        desc: "2 to 3 modules. Year 1 about $180-320k, then $80-120k a year.",
      },
      {
        tier: "Mid",
        value: "$1.05-1.7M",
        valueSmall: "5-yr TCO",
        desc: "4 to 5 modules. Year 1 about $450-700k, then $150-250k a year.",
        mid: true,
        pill: "Base case",
      },
      {
        tier: "High",
        value: "$1.7-2.8M",
        valueSmall: "5-yr TCO",
        desc: "Full seven-area suite. Year 1 about $700k-1.2M, then $250-400k a year.",
      },
    ],
    footnotes: [
      {
        icon: "info",
        html: "All figures are market estimates for planning only, not District figures and not a bid. Completeness beats a low Year 1 headline; a transparent five-year TCO is what survives the cost factor.",
      },
      {
        icon: "folder-lock",
        html: "Techtiz back-office pricing is scoped per engagement after NDA and is not part of the public RFP intelligence.",
        liveOnly: true,
      },
    ],
  },
  competingField: {
    modHead: {
      eyebrow: "The competing field",
      h2: "Fifteen primes mapped, two in Colorado.",
      p: "Computed from the U.S. PRIMES database sheet, public-source estimates for partner targeting, not District or audited numbers. Revenue suffixes were normalized before summing.",
    },
    stats: [
      {
        n: "15",
        l: "Primes mapped",
      },
      {
        n: "7",
        nSmall: " / / 8",
        l: "Highly vs partially relevant",
      },
      {
        n: "2",
        l: "Colorado in-jurisdiction",
      },
      {
        n: "~$101.4B",
        l: "Combined est. revenue",
      },
      {
        n: "5",
        l: "National, ~$1B or more",
      },
      {
        n: "1",
        l: "Large, $100M to $1B",
      },
      {
        n: "5",
        l: "Mid-market, $10M to $100M",
      },
      {
        n: "4",
        l: "Boutique, under $10M",
      },
    ],
    notes: [
      {
        icon: "triangle-alert",
        html: '<span>The three largest by estimated revenue are <strong>Oracle (~$53B), Salesforce (~$34.8B), and Workday (~$7.8B).</strong> The largest fire and EMS specialists are <strong>UKG Kronos (~$4.2B), Vector Solutions (~$85M), and ImageTrend (~$70.6M).</strong> The two Colorado primes, both in Denver, are <span class="redact">Intellectyx and Applied Future Technologies.</span> </span>',
      },
    ],
    liveFootnote: {
      icon: "folder-lock",
      html: "All figures are public-source estimates for partner targeting, normalized from the U.S. PRIMES sheet, not District or audited numbers.",
    },
  },
  strategicQuestions: {
    modHead: {
      eyebrow: "Before June 12",
      h2: "Four questions worth filing.",
      p: "Questions the prime can send to the single email channel before the question deadline. Techtiz never contacts the District; these are questions Techtiz can help draft.",
    },
    questions: [
      {
        num: "Question 01",
        title: "Which CAD system is in use?",
        desc: "The CAD platform sets the integration scope for the July 6 demo and defines the CJIS-adjacent boundary.",
      },
      {
        num: "Question 02",
        title: "What is the current NERIS submission status?",
        desc: "The District's NERIS position shapes how the RMS and ePCR area is scoped and demonstrated.",
      },
      {
        num: "Question 03",
        title: "Will the District supply July 6 demo data?",
        desc: "Whether the demo runs on District data or vendor data changes how the live integration is staged.",
      },
      {
        num: "Question 04",
        title: "What is the CJIS data-residency requirement?",
        desc: "Confirming the residency expectation fixes where hosted CJIS data must sit and what offshore support can never touch.",
      },
    ],
    liveOnly: true,
  },
  agency: {
    modHead: {
      eyebrow: "Agency context",
      h2: "Who is buying, and the single channel.",
      p: "",
    },
    photo: "/assets/west-metro-truck.png",
    photoAlt: "A West Metro Fire Rescue engine",
    body: "West Metro Fire Protection District is an independent special district in Jefferson County, Colorado, organized under the Colorado Special District Act, C.R.S. Title 32, governed by an elected board and funded largely through property taxes in Jefferson and Douglas Counties. It serves about 300,000 residents across 108 square miles and 17 stations, running more than 42,000 incidents a year in a mixed urban, wildland, and interface area. Procurement runs through one channel only: <strong>Todd Heinl, RFP Contact and Contracting Officer,</strong> at RFP2026@westmetrofire.org. The prime, not Techtiz, uses that channel.",
    stats: [
      {
        n: "300k",
        l: "Residents served",
      },
      {
        n: "17",
        l: "Stations, 108 sq mi",
      },
      {
        n: "42k+",
        l: "Incidents per year",
      },
    ],
  },
  techtizApproach: {
    modHead: {
      eyebrow: "How Techtiz fits",
      h2: "The non-CJIS work, behind your firm.",
      p: "Techtiz drafts the non-CJIS technical and back-office content and hands a review-ready package to the prime. The prime holds the single point of accountability to the District, owns the CJIS scope, the references, the sign-off, and every word said to the agency.",
    },
    cards: [
      {
        title: "NDA before any data",
        desc: "A mutual NDA that excludes CJIS-controlled data from offshore access, with Colorado-law scope, before a single draft moves.",
      },
      {
        title: "Draft the non-CJIS scope",
        desc: "Proposal content for the non-CJIS modules, the NIST control map, the LMS migration, the analytics build on synthetic data, pricing, and the five-year TCO.",
      },
      {
        title: "Validate & package",
        desc: "Your team validates every claim and owns the CJIS and RMS work; Techtiz assembles the eight sections in order, PDF-ready.",
      },
      {
        title: "Your firm owns the response",
        desc: "The submission, the live July 6 demo, the references, the sign-off, and all District contact stay with the prime.",
      },
    ],
    lockedNote:
      "Prime name, engagement value, and proprietary content stay under NDA. Techtiz never contacts the District and never touches CJIS-controlled data.",
    liveOnly: true,
  },
  cta: {
    live: {
      eyebrow: "Bidding WMRFP2026-1? The window is open.",
      h2: "Request the full document pack.",
      body: "The decoded seven-area scope read, the CJIS work-package separation, the NIST control-map structure, the five-year TCO model, the compliance matrix, and the where-bids-fail checklist. A US partner manager replies within one business day, under a mutual NDA, never agency-facing, and never touching CJIS-controlled data.",
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
      body: "Techtiz supported a response to a Colorado fire-district enterprise technology RFP. The prime, the exact service, and the scope stay under NDA. A US partner manager replies within one business day, never agency-facing.",
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
