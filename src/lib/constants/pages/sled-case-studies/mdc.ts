export const MDC_CASE_STUDY = {
  slug: "mdc",
  crumb: "Miami Dade College",
  deadline: "2026-06-18T15:00:00-04:00",
  seo: {
    title:
      "Miami Dade College · Professional Engineering Services (RFQ 2026-WP-15) | Techtiz SLED",
    description:
      "Engagement example: Techtiz built the full back-office qualifications package behind a U.S. prime responding to Miami Dade College RFQ 2026-WP-15, Professional Engineering Services. White-label, NDA-first, never agency-facing.",
    ogImage: "/assets/sled-case-studies/mdc/hero.png",
  },
  hero: {
    eyebrow: "Engagement example · Pre-award · Under NDA",
    h1: 'A prime\'s pre-bid brief for <span class="accent">RFQ 2026-WP-15.</span>',
    body: "Miami Dade College, Professional Engineering Services. Two pools, six disciplines, one hard deadline.",
    heroBg: "/assets/sled-case-studies/mdc/hero.png",
    logo: "/assets/sled-case-studies/mdc/logo.png",
    logoAlt: "Miami Dade College",
    identity: {
      awardingBody: { label: "Awarding body", value: "Miami Dade College" },
      jurisdiction: { label: "Jurisdiction", value: "Florida" },
      status: "Responding under NDA",
      statusIcon: "file-lock-2",
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
      },
    ],
  },
  facts: [
    {
      key: "Solicitation",
      value: "RFQ 2026-WP-15",
      small: "Qualifications-based",
    },
    { key: "Codes", value: "NAICS 541330", small: "NIGP 90735 · 90700" },
    { key: "Structure", value: "Two on-call pools", small: "Six disciplines" },
    {
      key: "Techtiz role",
      value: "Back-office",
      small: "White-label, under NDA",
    },
  ],
  awardModel: {
    modHead: {
      eyebrow: "Procurement structure",
      h2: "Two pools. One prequalified bench.",
      p: "The defining feature of this RFQ. Work is assigned project by project, non-exclusive, with no guaranteed minimum. Pool placement turns on construction-cost thresholds and small-business certification.",
    },
    pools: [
      {
        variant: "shelter",
        label: "Shelter Market",
        h3: "Small Local Business Enterprises",
        p: "Reserved for firms certified as small local business with a principal place of business in Miami-Dade County, under SLBE Policy VI-4. First right of refusal on smaller projects.",
        cap: "$1.0M",
        capSmall: "reserved construction cost",
        coverSheet: "2026-WP-15-A",
        scoring: [
          {
            name: "Staff & Experience",
            value: 65,
            desc: "Depth of licensed staff and directly relevant project experience. The largest single block of the score.",
          },
          {
            name: "Past Performance",
            value: 20,
            desc: "Track record on comparable public and educational facilities.",
          },
          {
            name: "Legal Disputes",
            value: 15,
            desc: "Notarized disclosure of construction claims over the last 10 years. An unsigned response scores zero.",
          },
        ],
      },
      {
        variant: "open",
        label: "Open Market",
        h3: "All qualifying firms",
        p: "Open to any State of Florida licensed engineering firm meeting the qualifications bar. Construction-cost cap CPI-adjusted under Section 287.55, Florida Statutes.",
        cap: "$7.5M",
        capSmall: "construction cost cap",
        coverSheet: "2026-WP-15-B",
        scoring: [
          {
            name: "Experience",
            value: 50,
            desc: "Relevant engineering experience across the six disciplines in scope.",
          },
          {
            name: "MDC Past Performance",
            value: 15,
            desc: "Prior work delivered for Miami Dade College, where it exists.",
          },
          {
            name: "Legal Disputes",
            value: 15,
            desc: "Notarized disclosure of construction claims over the last 10 years.",
          },
          {
            name: "Location",
            value: 10,
            desc: "Local presence and proximity to the campuses served.",
          },
          {
            name: "SLBE participation",
            value: 10,
            desc: "Use of certified small local business subconsultants on the team.",
          },
        ],
      },
    ],
    note: {
      icon: "info",
      html: "A firm that meets the criteria can submit for both pools, using cover sheet 2026-WP-15-A and 2026-WP-15-B. Placement in one pool does not guarantee any work.",
    },
  },
  keyDates: {
    modHead: {
      eyebrow: "Schedule of events",
      h2: "One hard deadline, no cure.",
      p: "Electronic upload only. A late or incomplete submission is nonresponsive, with no exceptions.",
    },
    events: [
      {
        date: "May 21, 2026",
        label: "RFQ issued",
        detail: "Solicitation 2026-WP-15 released",
      },
      {
        date: "May 29, 2026",
        label: "Questions due",
        detail: "Before 4:00 PM EST, to William Planas at wplanas@mdc.edu only",
      },
      {
        date: "Jun 18, 2026",
        label: "Proposals due, 3:00 PM EST",
        detail: "Electronic upload only. Late or incomplete is nonresponsive",
        hard: true,
      },
      {
        date: "Jul 2026",
        label: "Board approval",
        detail: "Board of Trustees expected to approve selections",
      },
      {
        date: "Aug 1, 2026",
        label: "Contract commences",
        detail: "Initial term through Jun 30, 2027, plus two 1-year options",
      },
      {
        date: "90 days",
        label: "Irrevocable",
        detail: "Proposals stay firm for 90 days after opening",
      },
    ],
  },
  differentiator: {
    mark: "\u201C",
    tag: "Section 5.7 · Technology & AI",
    quote:
      "The College asks how each firm uses AI and technology to improve efficiency and service delivery.",
    sub: "A generic answer that names off-the-shelf software scores nothing. A specific, project-relevant answer is what separates a shortlisted firm from a filed one. This is the single clearest reason a prime wants a technology subcontractor.",
    liveNote:
      "This is the part Techtiz writes and tools, mapped to your real delivery, not a list of product names.",
  },
  taskAllocation: {
    modHead: {
      eyebrow: "Task allocation",
      h2: "What can be supported remotely, and what cannot.",
      p: "The legal line that defines a compliant subcontractor model.",
    },
    legalBar: {
      icon: "scale",
      html: "<strong>Florida Statute 471.023.</strong> Engineering services in Florida must be performed by, or under the responsible charge of, a Florida-licensed PE. Sealed engineering cannot be performed offshore. This is a statutory line, not a contract term.",
    },
    canColumn: {
      icon: "globe",
      title: "Remote technology subcontractor",
      subtitle: "Under NDA, under PE charge",
      items: [
        "Proposal writing and document preparation",
        "SF 330 draft support and formatting",
        "BIM and CAD drafting under direct Florida PE supervision",
        "Permit application drafts and document compilation",
        "LEED documentation under LEED AP oversight",
        "Market research and competitive intelligence",
        "Quality review and compliance checklists for non-engineering deliverables",
      ],
      techtizSlot: {
        icon: "zap",
        html: "<strong>This column is where Techtiz slots in,</strong> under your PE's responsible charge.",
      },
    },
    primeColumn: {
      icon: "stamp",
      title: "US prime only",
      subtitle: "Sealed, signed, agency-facing",
      items: [
        "Sealed engineering drawings, calculations, and specifications",
        "Final SF 330 execution",
        "Permit submission",
        "All notarized forms and legal disclosures",
        "All client communication with the College under the Cone of Silence",
      ],
    },
  },
  failureTabs: {
    modHead: {
      eyebrow: "Where bids fail",
      eyebrowAccent: true,
      h2: "Five ways a strong firm scores zero.",
      p: "Each of these is a disqualifier or an automatic zero. None of them is about engineering quality.",
    },
    tabs: [
      {
        num: "01",
        tab: "Legal Disputes",
        pill: "Auto-zero",
        icon: "file-x",
        title: "Legal Disputes, un-notarized",
        secref: "Section 5.10",
        trapLabel: "The rule",
        trap: "Worth 15 points and must be notarized. Covers construction claims between applicant and owner over the last 10 years.",
        fixLabel: "If you miss it",
        fix: "An un-notarized response scores an automatic zero.",
      },
      {
        num: "02",
        tab: "Foreign Concern",
        pill: "Voidable",
        icon: "globe-lock",
        title: "Foreign Countries of Concern",
        secref: "Section 3.9.2 · 286.101 F.S.",
        trapLabel: "The rule",
        trap: "Any $50,000 or more from a foreign country of concern in the last 5 years must be disclosed for contracts of $100,000 or more, and filed with the Florida Department of Financial Services.",
        fixLabel: "If you miss it",
        fix: "Missing the disclosure can void the contract.",
      },
      {
        num: "03",
        tab: "Cone of Silence",
        pill: "Rejection",
        icon: "volume-x",
        title: "Cone of Silence",
        secref: "Section 3.8 · Procedure 6600",
        trapLabel: "The rule",
        trap: "No contact with College personnel or trustees from release through 72 hours after Board action. The only channel is written questions to William Planas.",
        fixLabel: "If you miss it",
        fix: "Any unauthorized contact is grounds for rejection.",
      },
      {
        num: "04",
        tab: "Redlining",
        pill: "Disqualifier",
        icon: "file-pen-line",
        title: "Redlining the contract",
        secref: "Section 8.5",
        trapLabel: "The rule",
        trap: "The College does not negotiate terms. The MDC contract is accepted as drafted.",
        fixLabel: "If you miss it",
        fix: "Redlines or counter-proposals mean disqualification.",
      },
      {
        num: "05",
        tab: "Cover sheet",
        pill: "Defective",
        icon: "copy-x",
        title: "Wrong cover sheet",
        secref: "Cover version",
        trapLabel: "The rule",
        trap: "Use 2026-WP-15-A for Shelter Market and 2026-WP-15-B for Open Market.",
        fixLabel: "If you miss it",
        fix: "The wrong version is a defective submission.",
      },
    ],
  },
  evaluation: {
    modHead: {
      eyebrow: "How scoring works",
      h2: "Qualifications first. Price comes later.",
      p: "Price is not scored at the proposal stage. Fee is negotiated after selection under Section 7.1.",
    },
    committee: {
      h3: "Committee method",
      items: [
        {
          num: "1",
          html: "Each criterion is scored <strong>0 to 5</strong>, then multiplied by the criterion weight to reach the 100-point total.",
        },
        {
          num: "2",
          html: "A score of <strong>0 requires consensus of the whole committee</strong>, which protects a strong firm from a single hostile evaluator.",
        },
        {
          num: "3",
          html: "The committee <strong>may use personal knowledge</strong> of a firm's past performance, not only what is written.",
        },
      ],
    },
    interview: {
      h3: "Interview stage, out of 100",
      bars: [
        { label: "Program Understanding", value: 40, width: 40 },
        { label: "Approach and Method", value: 40, width: 40 },
        { label: "Unique Qualifications", value: 20, width: 20 },
      ],
      note: "Shortlisted firms are interviewed. The interview is scored separately from the written qualifications.",
    },
  },
  pricing: {
    modHead: {
      eyebrow: "Engagement value",
      h2: "Three ways the first year could land.",
      p: "Non-exclusive, on-call work. These are planning scenarios, not a guaranteed award.",
    },
    scenarios: [
      {
        tier: "Low",
        value: "$650-800k",
        desc: "3 to 4 small projects.",
      },
      {
        tier: "Mid",
        value: "$950k-1.15M",
        desc: "5 to 7 projects across disciplines.",
        mid: true,
        pill: "Base case",
      },
      {
        tier: "High",
        value: "$1.3-1.6M",
        desc: "8 to 10 projects, including LEED work.",
      },
    ],
    footnotes: [
      {
        icon: "calculator",
        html: "Total estimated annual engagement near <strong>$1,100,250</strong> in the mid case. The Project Manager billing rate is the single variable that most affects the negotiated fee.",
      },
    ],
  },
  securityGrid: {
    modHead: {
      eyebrow: "Federal exposure",
      h2: "Federally funded projects pull in federal provisions.",
    },
    trigger: {
      icon: "flag",
      html: "At least some projects are <strong>federally funded</strong>, which activates the following on those task orders.",
    },
    items: [
      {
        icon: "hard-hat",
        title: "Davis-Bacon prevailing wage",
        desc: "Construction over $2,000",
      },
      {
        icon: "users",
        title: "Equal Employment Opportunity",
        desc: "EEO obligations on covered work",
      },
      {
        icon: "megaphone-off",
        title: "Byrd Anti-Lobbying",
        desc: "Certification required",
      },
      {
        icon: "search-check",
        title: "SAM debarment checks",
        desc: "Active registration and screening",
      },
      {
        icon: "clock",
        title: "Contract Work Hours & Safety",
        desc: "Construction over $100,000",
      },
      {
        icon: "package",
        title: "Domestic material preference",
        desc: "2 CFR 200.322",
      },
      {
        icon: "wind",
        title: "Clean Air and Water Act",
        desc: "Projects over $150,000",
      },
    ],
  },
  capabilityGrid: {
    modHead: {
      eyebrow: "Scope",
      h2: "Six engineering disciplines, mapped to the SOW.",
    },
    items: [
      {
        icon: "building-2",
        meta: "01 · STRUCTURAL",
        title: "Structural",
        desc: "Construction documents, code-compliance review, and structural design for campus facilities.",
        dark: true,
      },
      {
        icon: "zap",
        meta: "02 · MEP",
        title: "Mechanical, Electrical, Plumbing",
        desc: "MEP and fire-protection design across renovation and new-construction scopes.",
      },
      {
        icon: "cable",
        meta: "03 · LOW VOLTAGE",
        title: "Low Voltage & Systems",
        desc: "Fire alarm, building controls, and low-voltage systems engineering.",
      },
      {
        icon: "route",
        meta: "04 · CIVIL",
        title: "Civil",
        desc: "Site, utilities, and civil works for campus infrastructure projects.",
      },
      {
        icon: "leaf",
        meta: "05 · ENVIRONMENTAL",
        title: "Environmental",
        desc: "Environmental review and permitting support for State, Federal, and local approvals.",
      },
      {
        icon: "compass",
        meta: "06 · SURVEYING",
        title: "Surveying",
        desc: "Land and as-built surveying to support design and construction documents.",
      },
    ],
  },
  response: {
    modHead: {
      eyebrow: "What Techtiz delivered",
      h2: "The full package, behind the prime's brand.",
      p: "Under teaming letter and NDA, we drafted and assembled the response. The prime reviewed, signed, notarized, and uploaded. The agency saw the prime, the prime saw one accountable contact.",
    },
    accordion: [
      {
        num: "01",
        icon: "file-text",
        title: "Qualifications package",
        body: "Federal Standard Form 330, firm profile, and four to six tailored project references with demonstrated educational and public-facility experience, structured to the committee's 100-point scoring.",
        tools: ["SF330", "Project references", "Personnel table"],
      },
      {
        num: "02",
        icon: "file-signature",
        title: "Forms & affidavits",
        body: "Both cover sheets, Public Entity Crime form, Principal Place of Business affidavit, Past Performance Questionnaire, coercion affidavit, and federal grant provisions, prepared for signature and notarization.",
        tools: ["Cover sheets A / B", "Notary-ready", "Compliance matrix"],
      },
      {
        num: "03",
        icon: "upload-cloud",
        title: "Submission operations",
        body: "Folder structure, format checks, a notarization checklist, and a step-by-step electronic-portal upload runbook timed to the hard 3:00 PM EST deadline.",
        tools: ["Upload runbook", "Format checks", "Deadline control"],
      },
    ],
    lockedNote:
      "Prime name, engagement value, and submission documents under NDA. We never contacted the College.",
  },
  insurance: {
    icon: "umbrella",
    html: "<strong>Insurance bar.</strong> CGL $1M per occurrence and $1M aggregate, Auto $1M CSL, Workers Comp, Professional Liability claims-made acceptable. Carrier A.M. Best A minimum. MDC named as Additional Insured, with 30-day cancellation notice.",
  },
  cta: {
    eyebrow: "Capture manager or BD lead at a U.S. prime?",
    h2: "Have an active SLED pursuit? We can build the package.",
    body: "Send the solicitation and we will scope the back-office work. A US partner manager replies within one business day, under a mutual NDA, never agency-facing.",
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
