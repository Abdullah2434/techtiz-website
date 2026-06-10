export const HOLLAND_CASE_STUDY = {
  slug: "holland",
  crumb: "City of Holland",
  deadline: "2026-06-22T11:00:00-04:00",
  seo: {
    title:
      "City of Holland · Cloud-Delivered SASE (Ref 0000426310) | Techtiz SLED",
    description:
      "Pre-bid brief: City of Holland, Michigan, Cloud-Delivered Secure Internet Access and Security Service Edge (Ref 0000426310). Techtiz is the prime's NDA-first technology and back-office subcontractor. Never agency-facing.",
    ogImage: "/assets/holland-hero.jpg",
  },
  hero: {
    eyebrowLive: "Pre-bid brief · Live RFP · Under NDA",
    eyebrowPast: "Pre-bid brief · Closed · Under NDA",
    h1: 'A prime\'s pre-bid brief for <span class="accent">Holland Ref 0000426310.</span>',
    body: "City of Holland, Michigan, a cloud-delivered Security Service Edge platform for every user, device, and location. One award, one prime, Techtiz builds the technical-response engine behind it.",
    livePill: "Live · closes Jun 22, 11 AM EDT",
    pastPill: "Closed · selection complete",
    heroBg: "/assets/holland-hero.jpg",
    logo: "/assets/holland-logo.png",
    logoAlt: "City of Holland",
    identity: {
      awardingBody: { label: "Awarding body", value: "City of Holland" },
      jurisdiction: { label: "Jurisdiction", value: "Michigan" },
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
        variant: "cyan",
      },
    ],
  },
  facts: [
    {
      key: "Solicitation",
      value: "Ref 0000426310",
      small: "Cloud-Delivered SASE, sealed",
    },
    {
      key: "Scope",
      value: "Security Service Edge",
      small: "Cloud-native, no appliances",
    },
    { key: "Award", value: "Single vendor", small: "New contract, lump sum" },
    {
      key: "Techtiz role",
      value: "Back-office",
      small: "NDA-first, never agency-facing",
    },
  ],
  keyDates: {
    modHead: {
      eyebrow: "Schedule of events",
      h2: "One sealed deadline, no cure.",
      p: "A sealed, formal RFP. Written questions go to one person by June 15. Anything arriving after 11:00 AM EDT on June 22 is rejected, and email submissions are never accepted.",
    },
    events: [
      {
        date: "Jun 2, 2026",
        label: "Published",
        detail: "Solicitation issued, 7:13 AM EDT",
      },
      {
        date: "Jun 15, 2026",
        label: "Questions due, 12 noon EDT",
        detail: "Written, to Joe Firmiss only. Phone calls not accepted",
      },
      {
        date: "After Jun 15",
        label: "Q&A posted",
        detail: "To cityofholland.com. No fixed release date stated",
      },
      {
        date: "Jun 22, 2026",
        label: "Proposals due, 11 AM EDT",
        detail: "Sealed. No email. No cure for late arrival",
        hard: true,
        tagLive: "Live",
        tagPast: "Closed",
      },
    ],
    foot: {
      live: "20 days from issue to close. Today the clock is running.",
      past: "20 days from issue to close. Today the clock is stopped.",
    },
  },
  awardModel: {
    modHead: {
      eyebrow: "The award model",
      h2: "Single vendor, new contract, full and open.",
      p: "This is a relationship-driven single award, not a multi-pool roster. One firm wins the whole contract, and the prime that wins carries it. There is no piggyback, no set-aside, and no small-business preference.",
    },
    rows: [
      {
        label: "Structure",
        value:
          "<strong>One winner, full and open competition.</strong> A single vendor is selected for a new contract, with no roster and no split between firms.",
      },
      {
        label: "Pricing",
        value:
          "A <strong>single lump sum is required.</strong> Time-and-materials, unit rates, or a schedule without one total are non-responsive.",
      },
      {
        label: "Process",
        value:
          "Sealed and formal. Proposals are opened together after the deadline. <strong>Email submissions are not accepted, including to the questions contact.</strong>",
      },
      {
        label: "Term",
        value:
          "Not stated in the solicitation. The vendor proposes the implementation timeline. Independent reads estimate roughly <strong>16 to 20 weeks</strong> to deploy, an estimate, not a city figure.",
      },
    ],
  },
  differentiator: {
    icon: "git-merge",
    tag: "Scope · The differentiator",
    quote:
      "Native Microsoft Entra ID, Azure AD, and Active Directory integration is the strongest technical hook in this procurement.",
    sub: "Most Michigan municipalities run Microsoft-heavy environments. A bid that shows the identity-integration architecture in a diagram, and explains policy by user, group, and organizational unit, signals real domain understanding rather than a capability brochure. Generic content that names products without an architecture loses here.",
    liveNote:
      "This is the section Techtiz drafts and diagrams, mapped to the city's identity model, not a list of product names.",
  },
  taskAllocation: {
    modHead: {
      eyebrow: "Task allocation",
      h2: "What a remote technology team can build, and what stays onshore.",
      p: "The boundary that makes a compliant subcontractor model work on a cloud-security procurement.",
    },
    legalBar: {
      icon: "scale",
      html: "<strong>Contractual, not statutory.</strong> This solicitation contains no offshore prohibition, no data-residency clause, and no citizenship or clearance requirement. The limits are prudential and contractual. The US prime must be the named respondent and the contract signatory and carries all legal accountability, a signed NDA must be in place before any tender material moves, and certain post-award data and live-environment tasks stay onshore.",
    },
    canColumn: {
      icon: "globe",
      title: "Remote technology & back-office subcontractor",
      subtitle: "Pre-production, no city data",
      items: [
        "Draft all nine technical capability sections and the full compliance matrix",
        "Design the architecture and write the integration narrative from public platform documentation",
        "Design platform configuration for DNS, Secure Web Gateway, cloud firewall, and CASB in a pre-production environment",
        "Design SIEM and API integration",
        "Design DLP policy, design only, not live execution",
        "Draft SLAs, the deployment methodology, and training materials",
        "Run lab and pre-production testing",
        "Generate SLA and compliance reports from platform analytics that carry no raw city data",
      ],
      techtizSlot: {
        icon: "zap",
        html: "<strong>Techtiz operates only in this column,</strong> behind the prime, under NDA, in pre-production, never touching live city systems.",
      },
    },
    primeColumn: {
      icon: "building-2",
      title: "US prime only",
      subtitle: "Onshore, accountable, live systems",
      items: [
        "Signing the contract and submitting the sealed proposal",
        "Handling city network topology data after award",
        "Executing identity integration against the live city Active Directory and Entra ID",
        "User acceptance testing in the live city environment",
        "Delivering instructor-led training to city staff",
        "Handling security log data and city staff personal information",
        "All communication with the City of Holland",
      ],
    },
    hardLimit: {
      icon: "lock",
      html: "<strong>Gates, stated plainly.</strong> A signed NDA that names the City of Holland and this solicitation must be in place before any data moves. It prohibits onward disclosure of pricing or technical approach, requires return or destruction of materials if the bid is not awarded, and survives termination for at least two years. City network diagrams, identity credentials, security logs, and staff personal data are US-prime-only and stay within US infrastructure.",
    },
  },
  failureTabs: {
    modHead: {
      eyebrow: "Where bids fail",
      eyebrowAccent: true,
      h2: "Eight ways a strong firm loses this one.",
      p: "None is about engineering skill. Each is a procurement or contract trap that scores zero or disqualifies.",
    },
    tabs: [
      {
        num: "01",
        tab: "Email submission",
        pill: "Auto-DQ",
        icon: "mail-x",
        title: "Email submission",
        secref: "Sealed process",
        trapLabel: "The rule",
        trap: "This is a sealed RFP. Proposals may not be emailed, including to Joe Firmiss.",
        fixLabel: "If you miss it",
        fix: "An emailed proposal is an automatic disqualifier. Submit through the stated sealed channel only.",
      },
      {
        num: "02",
        tab: "Late arrival",
        pill: "No cure",
        icon: "timer-off",
        title: "Late is dead",
        secref: "Jun 22, 11 AM EDT",
        trapLabel: "The rule",
        trap: "Anything arriving after 11:00 AM EDT on June 22 is rejected.",
        fixLabel: "If you miss it",
        fix: "There is no cure provision. Build to submit a full day early.",
      },
      {
        num: "03",
        tab: "Lump sum",
        pill: "Nonresponsive",
        icon: "receipt-text",
        title: "Single lump sum",
        secref: "Pricing",
        trapLabel: "The rule",
        trap: "Pricing must be a single lump sum for the whole engagement.",
        fixLabel: "If you miss it",
        fix: "Time-and-materials, unit rates, or a schedule with no single total is non-responsive.",
      },
      {
        num: "04",
        tab: "Criterion C",
        pill: "Scored trap",
        icon: "umbrella",
        title: "The insurance criterion is still scored",
        secref: "Criterion C",
        trapLabel: "The rule",
        trap: 'Criterion C reads "quality and methodology of the insurance placement program." That language appears carried over from an insurance procurement and does not match a cybersecurity buy, but it is still a scored criterion.',
        fixLabel: "If you miss it",
        fix: "A bare Certificate of Insurance with no commentary loses points. Write a dedicated insurance section covering general, professional, cyber, and errors-and-omissions cover with carrier, limits, and a risk-transfer narrative.",
      },
      {
        num: "05",
        tab: "Locked PDFs",
        pill: "Non-submitted",
        icon: "file-lock-2",
        title: "Password-protected or encrypted PDFs",
        secref: "File handling",
        trapLabel: "The rule",
        trap: "Files that cannot be opened on receipt can be treated as non-submitted.",
        fixLabel: "If you miss it",
        fix: "Submit every file openable on receipt. No password protection, no encryption on the proposal documents.",
      },
      {
        num: "06",
        tab: "Single channel",
        pill: "No weight",
        icon: "volume-x",
        title: "Single-channel questions",
        secref: "Jun 15 noon EDT",
        trapLabel: "The rule",
        trap: "Written questions go to Joe Firmiss only, by noon EDT on June 15. Phone calls are explicitly not accepted.",
        fixLabel: "If you miss it",
        fix: "Phone questions carry no weight and are not answered on the record. Put every question in writing, through the one channel.",
      },
      {
        num: "07",
        tab: "Amendments",
        pill: "Monitor daily",
        icon: "bell-ring",
        title: "Amendment monitoring",
        secref: "cityofholland.com",
        trapLabel: "The rule",
        trap: "The city publishes Q&A and any addenda on its website. The city reserves the right to revise or cancel the RFP.",
        fixLabel: "If you miss it",
        fix: "Monitor daily through June 22 and acknowledge every amendment in the proposal.",
      },
      {
        num: "08",
        tab: "Generic content",
        pill: "Fails completeness",
        icon: "file-x",
        title: "Generic, unmapped content",
        secref: "Completeness, criterion A",
        trapLabel: "The rule",
        trap: "Completeness leads the scoring. The technical response must map heading-for-heading to the nine capability areas, with a compliance-matrix appendix and named key personnel.",
        fixLabel: "If you miss it",
        fix: "A generic capability brochure or an anonymous team fails completeness and capacity before price is ever considered.",
      },
    ],
  },
  evaluation: {
    modHead: {
      eyebrow: "How scoring works",
      h2: "Four criteria, unweighted, and the order matters.",
      p: "The city publishes no numeric weights. The sequence is meaningful: completeness leads, so an incomplete submittal is effectively pass or fail before price is read. Compensation is last, which reads as table stakes after responsiveness, capacity, and risk posture.",
    },
    estFlag: {
      icon: "triangle-alert",
      text: "Indicative weights, analyst estimates, not city figures",
    },
    bars: [
      { label: "A Completeness of submittal", pct: "~35%", width: 35 },
      {
        label: "B Experience & capacity of respondent and staff",
        pct: "~30%",
        width: 30,
      },
      {
        label: "C Quality & methodology of insurance placement program",
        pct: "~20%",
        width: 20,
      },
      { label: "D Compensation philosophy", pct: "~15%", width: 15 },
    ],
    note: "No interview, oral presentation, or shortlist stage is stated in the RFP. A best-and-final-offer round is not referenced, but it is common in Michigan municipal practice, so <strong>keep pricing headroom.</strong> Where the RFP body and outside analysis differ, the RFP body governs.",
  },
  capabilityGrid: {
    modHead: {
      eyebrow: "Full scope",
      h2: "Nine capability areas, plus identity and integration.",
      p: "The technical response maps heading-for-heading to these. The clause index runs to roughly 44 SHALL requirements across about 51 clause-level rows.",
    },
    items: [
      {
        icon: "cloud",
        num: "01",
        title: "Cloud-native architecture",
        desc: "Globally distributed points of presence, automatic threat-intelligence updates, elastic scale with no major infrastructure change.",
      },
      {
        icon: "globe-lock",
        num: "02",
        title: "DNS-layer security",
        desc: "Block malicious, phishing, malware, ransomware, botnet, and newly observed domains before connection, with custom allow and deny lists.",
      },
      {
        icon: "shield-check",
        num: "03",
        title: "Secure Web Gateway",
        desc: "HTTP and HTTPS inspection, acceptable-use enforcement, policy by user, group, device, and location.",
      },
      {
        icon: "flame",
        num: "04",
        title: "Cloud-delivered firewall",
        desc: "Layer 3 through Layer 7 filtering by IP, protocol, port, user identity, application, and destination.",
      },
      {
        icon: "layout-grid",
        num: "05",
        title: "Cloud app visibility & control",
        desc: "Discover sanctioned and unsanctioned apps, risk-score them, and enforce policy on shadow IT.",
      },
      {
        icon: "radar",
        num: "06",
        title: "Advanced threat protection",
        desc: "Global threat intelligence, sandboxing, machine learning, and behavioral analytics.",
      },
      {
        icon: "database",
        num: "07",
        title: "Data protection",
        desc: "DLP monitoring and data-exposure alerting across the protected surface.",
      },
      {
        icon: "laptop",
        num: "08",
        title: "Remote user protection",
        desc: "On and off network, no VPN required, across Windows, macOS, iOS, and Android.",
      },
      {
        icon: "bar-chart-3",
        num: "09",
        title: "Reporting & analytics",
        desc: "Single admin console, real-time visibility, customizable reports, SIEM and log export, log retention.",
      },
      {
        icon: "git-merge",
        num: "10 · The hook",
        title: "Identity & directory integration",
        desc: "Microsoft Entra ID, Azure AD, Active Directory, RBAC, MFA, policy by user, group, and OU.",
        star: true,
      },
      {
        icon: "plug",
        num: "11",
        title: "Integration",
        desc: "RESTful APIs, syslog, SIEM connectors, endpoint and identity-platform integration.",
      },
    ],
  },
  pricing: {
    modHead: {
      eyebrow: "Value & pricing",
      h2: "A lump-sum competition, with one variable that moves the number.",
      p: "No budget is stated by the city. The ranges below are independent pre-bid estimates derived from scope, not city figures. Platform licensing per user is the key variable, compounded by a user count the RFP does not give.",
    },
    scenarios: [
      {
        tier: "Low / aggressive",
        value: "$280k",
        valueSmall: " to $320k",
        desc: "Lean platform tier, tight implementation, minimal optional services.",
      },
      {
        tier: "Mid / recommended",
        value: "$350k",
        valueSmall: " to $420k",
        desc: "Bottom-up estimate lands $345,640 to $411,140 once platform licensing is included.",
        mid: true,
        pill: "Base case",
      },
      {
        tier: "High / premium",
        value: "$450k",
        valueSmall: " to $550k",
        desc: "Full feature tier, extended training, and managed-service options.",
      },
    ],
    footnotes: [
      {
        icon: "info",
        html: "Annual platform licensing runs an estimated <strong>$65k to $120k</strong> for an assumed 300 to 500 city users. A licensing edge of $30 to $40 per user per year can decide criterion D. The user count is not in the RFP and is worth a question by June 15.",
      },
      {
        icon: "folder-lock",
        html: "Techtiz back-office pricing is scoped per engagement after NDA and is not part of the public solicitation intelligence.",
        liveOnly: true,
      },
    ],
  },
  securityGrid: {
    modHead: {
      eyebrow: "Frameworks & law",
      h2: "The frameworks and statutes the contract pulls in.",
      p: "The language municipal security officers expect to see, plus the governing law and codes. NIGP is stated by the city; NAICS is inferred.",
    },
    items: [
      {
        icon: "gavel",
        title: "Michigan law, Ottawa County venue",
        desc: "Michigan Compiled Laws. Venue in Ottawa County Circuit Court or the Court of Claims, the municipal default.",
      },
      {
        icon: "shield",
        title: "NIST Cybersecurity Framework",
        desc: "The baseline reference for control posture.",
      },
      {
        icon: "list-checks",
        title: "CIS Controls v8",
        desc: "Prioritized safeguards municipal IT maps to.",
      },
      {
        icon: "network",
        title: "CISA Zero Trust Maturity Model",
        desc: "The architecture posture a SASE bid should speak to.",
      },
      {
        icon: "badge-check",
        title: "SOC 2 Type II & ISO 27001",
        desc: "Required certifications, with FedRAMP if applicable.",
      },
      {
        icon: "file-search",
        title: "Michigan FOIA",
        desc: "Public-records and log-retention duties shape the reporting requirement.",
      },
      {
        icon: "tag",
        title: "NIGP 920-37",
        desc: "Networking services, including installation, security, and maintenance.",
      },
      {
        icon: "tags",
        title: "NAICS 541512 / 518210",
        desc: "Computer systems design, with data hosting for the cloud component. Inferred, not city-stated.",
      },
    ],
  },
  agency: {
    modHead: {
      eyebrow: "Agency context",
      h2: "Who is buying, and who scores it.",
    },
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/7/78/Holland_Old_City_Hall_and_Fire_Station.JPG",
    photoAlt: "Holland Old City Hall and Fire Station, Holland, Michigan",
    body: "The City of Holland is a Michigan municipal corporation in Ottawa County, known as the Tulip City, with a Council-Manager form of government under mayor Nathan Bocks. Procurement runs through the Finance Office. <strong>Lynn McCammon, Finance Director and Purchasing Coordinator,</strong> is the signer and primary submission recipient. <strong>Joe Firmiss, Technology Manager,</strong> is the sole channel for written questions and the likely technical evaluator.",
    stats: [
      { n: "34,378", l: "Residents, 2020 census" },
      { n: "Ottawa Co.", l: "Western Michigan" },
      { n: "920-37", l: "NIGP networking services" },
    ],
    attribution:
      "Holland Old City Hall and Fire Station, Holland, Michigan. Photo by Andrew Jameson, CC BY-SA 3.0, via Wikimedia Commons.",
  },
  competingField: {
    modHead: {
      eyebrow: "The competing field",
      h2: "30 primes mapped, two outliers carry the revenue.",
      p: "From the prime-contractor database. Two national firms account for most of the combined revenue, but the bench is a long tail of boutiques, and the in-state field is strong. Figures are public-source estimates for partner targeting.",
    },
    stats: [
      { n: "30", l: "Firms mapped to the solicitation" },
      { n: "12", nSmall: " / 18", l: "Highly / partially relevant" },
      { n: "13", l: "Michigan-based primes" },
      { n: "~$64.2", nSmall: "B", l: "Combined estimated revenue" },
    ],
    segments: [
      { width: 27, variant: "nat" },
      { width: 7, variant: "mid" },
      { width: 66, variant: "bout" },
    ],
    legends: [
      {
        variant: "nat",
        count: "8",
        label: "national, $1B+, where the revenue concentrates",
      },
      { variant: "mid", count: "2", label: "mid-market, $100M to $1B" },
      { variant: "bout", count: "20", label: "boutique, under $100M" },
    ],
    notes: [
      {
        icon: "triangle-alert",
        html: "Two outliers, <strong>HPE at about $28.5B and CDW Government at about $21.5B,</strong> account for roughly $50B of the $64.2B combined. The database summary header is stale, reporting 28 firms and 0 Michigan; the row-level data shows 30 firms and 13 Michigan, which is what this page uses.",
      },
    ],
    liveFootnote: {
      icon: "folder-lock",
      html: "The best-fit Michigan targets, Trace3, Logicalis, Presidio, Extreme Networks, Merit Network, Virtual Guardian, and Watchdog Cyber, plus the full named map and relevance scoring, are in the <strong>full document pack.</strong> Ask us for it under NDA.",
    },
  },
  response: {
    modHead: {
      eyebrow: "The submission",
      h2: "Eight things every proposal must contain.",
      p: "Each maps to a tab in the response. A Certificate of Insurance is strongly advised because criterion C scores the insurance section.",
    },
    chips: [
      { num: "01", text: "Cover letter" },
      { num: "02", text: "Technical proposal mapped to the nine areas" },
      { num: "03", text: "Lump-sum pricing" },
      { num: "04", text: "Service level agreements" },
      { num: "05", text: "Deployment methodology & timeline" },
      { num: "06", text: "Training & knowledge-transfer plan" },
      {
        num: "07",
        text: "Security certifications, SOC 2 Type II, ISO 27001, FedRAMP if applicable",
      },
      { num: "08", text: "Certificate of Insurance" },
      { num: "+", text: "Third-party assessment documentation" },
    ],
  },
  strategicQuestions: {
    modHead: {
      eyebrow: "Before June 15",
      h2: "Four questions worth filing.",
      p: "Questions the prime should consider, in writing, through the one channel. Techtiz never contacts the City.",
    },
    questions: [
      {
        num: "Question 01",
        title: "What are the required insurance limits?",
        desc: "Criterion C is scored on the insurance section. Limits and required cover shape how it is written.",
      },
      {
        num: "Question 02",
        title: "Is there an incumbent, and is this a migration or net-new?",
        desc: "The implementation methodology and timeline change depending on what is being replaced.",
      },
      {
        num: "Question 03",
        title: "What is the user and device count?",
        desc: "Licensing is per user, so the count is the single biggest driver of the lump-sum price.",
      },
      {
        num: "Question 04",
        title: "Is an electronic-only submission a complete submission?",
        desc: "Confirm the exact sealed-submission mechanics before building the package.",
      },
    ],
    liveOnly: true,
  },
  techtizApproach: {
    modHead: {
      eyebrow: "How Techtiz fits",
      h2: "The technical-response engine, behind your firm.",
      p: "Techtiz drafts the technical content in pre-production. The prime owns the platform decision, the contract, the live systems, and every word said to the City.",
    },
    cards: [
      {
        title: "NDA before any data",
        desc: "A mutual NDA that names the City and this solicitation, before a single document moves.",
      },
      {
        title: "Nine sections & the matrix",
        desc: "All nine capability sections and the requirement-by-requirement compliance matrix, drafted for your review.",
      },
      {
        title: "Architecture & integration",
        desc: "The identity-integration diagram, SLAs, deployment methodology, and training materials, in pre-production.",
      },
      {
        title: "Your firm owns the contract",
        desc: "Signing, live-system work, instructor-led training, and the City relationship all stay with the prime.",
      },
    ],
    lockedNote:
      "Prime name, engagement value, and city data stay under NDA. Techtiz never contacts the City.",
    liveOnly: true,
  },
  cta: {
    live: {
      eyebrow: "Bidding Ref 0000426310? The window is open.",
      h2: "Request the full RFP-decode pack.",
      body: "Tender Insight, Statement of Work, Summary of Procurement, the submission-operations guide, and the prime database. A US partner manager replies within one business day, under a mutual NDA, never agency-facing.",
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
      body: "Techtiz supported a bid on a Michigan municipal Security Service Edge procurement. The prime, the exact scope, and the pricing stay under NDA. A US partner manager replies within one business day, never agency-facing.",
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
