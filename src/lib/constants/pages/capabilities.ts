export const CAPABILITIES_SEO = {
  title: "Capabilities & Compliance · The Techtiz SLED Backbone | Techtiz SLED",
  description:
    "What Techtiz brings to a U.S. SLED prime: the capability matrix, the compliance posture a prime compliance officer is looking for, the CONUS / Lahore air-gapped data architecture, state-by-state offshore restrictions, and the boundaries of our lane.",
  canonicalPath: "/us-sled/capabilities/",
  ogImage: "/assets/hero-servers.png",
} as const;

export type SledFrameworkStatusVariant =
  | "in-progress"
  | "posture"
  | "aligned"
  | "applied";

export type SledPostureVariant = "serve" | "disclose" | "waiver";

export const SLED_CAPABILITIES = {
  hero: {
    eyebrow: "U.S. SLED · Capabilities & compliance",
    heading: 'What we bring, and <span class="accent">how we secure it.</span>',
    body: "The engineering we plug in on day one, the compliance posture your security officer needs, and the architecture behind both.",
    ctas: [
      {
        label: "Download capability statement",
        href: "/us-sled/capability-statement/",
        variant: "cta" as const,
        showArrow: true,
      },
      {
        label: "Start an NDA conversation",
        href: "/us-sled/contact/",
        variant: "ghost-dark" as const,
        showArrow: false,
        beam: true,
      },
    ],
  },
  matrix: {
    eyebrow: "Core capabilities",
    heading: "Six capabilities, mapped to NAICS and NIGP.",
    body: "The back-end build behind your brand, under your contract. Each row is work we've shipped, mapped to the codes a prime files against.",
    columns: ["Capability", "What we do", "NAICS / NIGP"] as const,
    rows: [
      {
        name: "Enterprise Application Development",
        icon: "app-window" as const,
        what: "Citizen-service portals, case management, and back-office systems built to agency requirements and delivered under the prime contract.",
        codes: "NAICS 541511 · NIGP 920-29",
      },
      {
        name: "Systems Modernization & Integration",
        icon: "git-merge" as const,
        what: "Legacy modernization within procurement and budget constraints; inter-agency integration that breaks down data silos and meets interoperability requirements.",
        codes: "NAICS 541512 · NIGP 918-46",
      },
      {
        name: "AI & Process Automation",
        icon: "bot" as const,
        what: "Automated case routing, document intake, and decision support that reduce manual processing and backlog for understaffed program teams.",
        codes: "NAICS 541511 · NIGP 920-29",
      },
      {
        name: "GIS & Geospatial Data",
        icon: "map-pin" as const,
        what: "Facility and asset inventories, parcel and permitting data, and forecast models for planning, public works, and environmental programs.",
        codes: "NAICS 541519 · NIGP 918-00",
      },
      {
        name: "Data, Reporting & Grant Compliance",
        icon: "chart-column" as const,
        what: "Audit-ready data pipelines, grant and performance reporting, and FOIA-exportable records aligned to oversight and compliance requirements.",
        codes: "NAICS 541512 · NIGP 920-04",
      },
      {
        name: "Accessibility & Statutory Documents",
        icon: "accessibility" as const,
        what: "Section 508 and WCAG 2.2 AA conformance, VPAT preparation, and statutory document and format compliance for public-facing deliverables.",
        codes: "NAICS 541519 · NIGP 918-46",
      },
    ],
  },
  frameworks: {
    eyebrow: "Compliance frameworks",
    heading: "The frameworks a prime compliance officer is looking for.",
    body: "Specific claims with status, scope, and target dates. We don't list controls we can't substantiate; in-progress frameworks show a target date.",
    items: [
      {
        num: "01",
        name: "SOC 2 Type II",
        icon: "shield-check" as const,
        status: "In progress",
        statusVariant: "in-progress" as const,
        body: "Operational cybersecurity controls. Independent audit of access, change management, monitoring, and incident response over a 6 to 12 month window.",
        facts: [
          "Scope · platform, repos, IdP, deploy",
          "<strong>Target · Q4 2026</strong>",
          "Bridge letter on request",
        ],
      },
      {
        num: "02",
        name: "CJIS Security Policy",
        icon: "fingerprint-pattern" as const,
        status: "Posture",
        statusVariant: "posture" as const,
        body: "Required for law-enforcement, court, and dispatch work. Fingerprinted, background-checked U.S.-citizen personnel on U.S. soil; FIPS 140-2/3 encryption.",
        facts: [
          "<strong>Onshore · CJIS-cleared staff</strong>",
          "Offshore · never touches CJI",
          "Attestations to CJIS coordinator",
        ],
      },
      {
        num: "03",
        name: "StateRAMP / TX-RAMP",
        icon: "cloud" as const,
        status: "Aligned",
        statusVariant: "aligned" as const,
        body: "Cloud architectures we design are StateRAMP-aware. We build inside the prime's authorization boundary using controls that map to StateRAMP and TX-RAMP categorization.",
        facts: [
          "Architecture & control mapping",
          "SSP narrative drafts",
          "3PAO response support",
        ],
      },
      {
        num: "04",
        name: "Section 508 / VPAT",
        icon: "accessibility" as const,
        status: "Applied",
        statusVariant: "applied" as const,
        body: "Required for all government digital interfaces. WCAG 2.2 AA validation, screen-reader regression, PDF/UA conversion, plain-language editing.",
        facts: [
          "<strong>Signed VPAT 2.5 per surface</strong>",
          "NVDA & VoiceOver tested",
          "Prior VPATs under NDA",
        ],
      },
      {
        num: "05",
        name: "NIST 800-171 / CMMC",
        icon: "lock-keyhole" as const,
        status: "Aligned",
        statusVariant: "aligned" as const,
        body: "Standard hygiene for any prime serving federal customers. 110-control baseline across access, audit, configuration, incident response, and media protection.",
        facts: [
          "Self-assessment complete",
          "SSP & POAM maintained",
          "<strong>CMMC Level 2 alignment</strong>",
        ],
      },
      {
        num: "06",
        name: "HIPAA · IRS Pub 1075",
        icon: "heart-pulse" as const,
        status: "Posture",
        statusVariant: "posture" as const,
        body: "Required for healthcare, eligibility, and tax-data engagements. BAA executed as subcontractor under the prime BAA; offshore plane never touches FTI or PHI.",
        facts: [
          "Mutual / flow-down BAA",
          "<strong>FTI onshore-only · Pub 1075 §9.3</strong>",
        ],
      },
    ],
  },
  architecture: {
    eyebrow: "Data architecture",
    heading: "Where the data goes. Who touches it.",
    body: "The one question a prime compliance officer asks before paperwork moves. Live agency data, CJI, PHI, FCI, and CUI are handled only by U.S. personnel on U.S. soil. Lahore engineers work against sanitized, synthetic data behind a documented air-gap.",
    airGapLabel: "Air-gap",
    onshore: {
      flag: "CONUS · US persons",
      title: "Onshore plane",
      subtitle:
        "U.S.-citizen personnel on U.S. soil. The only environment cleared to handle live agency data, controlled information, and any work touching law-enforcement, judicial, or healthcare systems.",
      items: [
        {
          title: "Engagement manager & technical liaison:",
          body: "single accountable contact for the prime PM. Status, escalations, and change requests flow here first.",
        },
        {
          title: "Live data handling:",
          body: "any production pull touching CJI, PHI, FCI, CUI, or agency PII is performed onshore inside the prime's authorization boundary.",
        },
        {
          title: "CJIS-cleared operations:",
          body: "fingerprinted, background-checked U.S. personnel on a CJIS-aligned workstation for law-enforcement, court, or dispatch systems.",
        },
        {
          title: "Acceptance, KT, and deployment:",
          body: "final review, agency-facing artifact handoff to the prime, and production deployment gates.",
        },
      ],
      dataClassesLabel: "Data classes handled here",
      dataClasses: [
        "CUI",
        "FCI",
        "CJI",
        "PHI",
        "Agency PII",
        "Live production data",
      ],
    },
    offshore: {
      flag: "Lahore · Engineering",
      title: "Offshore engineering plane",
      subtitle:
        "Senior engineers in Lahore working against sanitized environments, synthetic data sets, and API contracts that do not expose live agency endpoints. Where the bulk of the build happens, never against production data.",
      items: [
        {
          title: "Codebase development:",
          body: "feature work against mock data and contract tests. Pull requests gated by onshore review before any live-data deployment.",
        },
        {
          title: "Synthetic-data engineering:",
          body: "schema-faithful but content-scrubbed datasets for development and regression testing. Real records never leave the onshore plane.",
        },
        {
          title: "Artifact production:",
          body: "architecture docs, runbooks, statutory-format templates, and dashboards, reviewed onshore before release.",
        },
        {
          title: "Workstation controls:",
          body: "managed devices, disk encryption, DLP egress monitoring, no removable-media write, audit logs forwarded to the onshore SIEM.",
        },
      ],
      dataClassesLabel: "Data classes handled here",
      dataClasses: [
        "Synthetic data",
        "Mock fixtures",
        "Public-domain artifacts",
        "Codebase & configs",
      ],
    },
  },
  stateRestrictions: {
    eyebrow: "State-by-state offshore restrictions",
    heading:
      "Where we serve directly. Where the prime discloses. Where a waiver is required.",
    body: "The U.S. landscape on offshore subcontracting is fragmented. Here's our posture, kept current. Always confirm against the live solicitation before bid.",
    footer:
      "// Disclosure pack on request · Updated quarterly · Confirm against live solicitation language",
    columns: [
      {
        variant: "serve" as const,
        label: "Serve directly",
        title: "Standard subcontract",
        description: "Non-PII, non-CJI scopes proceed under standard prime terms.",
        items: [
          {
            code: "Most SLED procurements",
            what: "Permitting, environmental, GIS, public engagement, grant reporting, document production.",
          },
        ],
      },
      {
        variant: "disclose" as const,
        label: "Disclose",
        title: "Subcontract + offshore-handling disclosure",
        description: "Permitted with explicit disclosure of offshore handling.",
        items: [
          {
            code: "CJIS · national",
            what: "Onshore-only CJI; U.S.-citizen staff vetted by state CJIS coordinators.",
          },
          {
            code: "15+ states · Medicaid",
            what: "Offshore rules range from disclosure-only to prohibition; HIPAA BAA layered on top.",
          },
        ],
      },
      {
        variant: "waiver" as const,
        label: "Waiver / restructure",
        title: "Written waiver or restructuring required",
        description: "Onshore by default; bid-by-bid analysis.",
        items: [
          {
            code: "MD",
            what: "State CISO written waiver for any offshore activity.",
          },
          {
            code: "CA · Gov't Code §19130",
            what: "Onshore-only handling of state data.",
          },
          {
            code: "NJ",
            what: "Statutory offshore-labor limits; scope varies by agency.",
          },
          {
            code: "AZ · FL · MO · TX",
            what: "Medicaid data: disclosures and, in some scopes, restructuring.",
          },
        ],
      },
    ],
  },
  boundaries: {
    eyebrow: "What we don't do",
    heading: "Honest about the lane.",
    body: "Trust comes from knowing where the work ends. These belong to the prime, a specialist sub, or nobody at all.",
    items: [
      {
        heading: "Fieldwork",
        body: "We support remotely; the prime owns the physical room.",
      },
      {
        heading: "Legal drafting",
        body: "We follow the legal opinion; we don't issue it.",
      },
      {
        heading: "Product replacement",
        body: "We don't compete with Tyler, Granicus, or OpenGov; we ship the custom piece they don't cover.",
      },
      {
        heading: "Procurement intelligence",
        body: "We don't sell or resell RFP, tender, or solicitation data.",
      },
    ],
  },
  cta: {
    eyebrow: "Engage us",
    heading: "Need the full compliance pack before your next subcontract review?",
    body: "The capability statement, architecture diagram, control mapping, per-state posture page, and personnel attestation template, sent under NDA within one business day.",
    ctas: [
      {
        label: "Request the compliance pack",
        href: "/us-sled/contact/",
        variant: "cta" as const,
        showArrow: true,
      },
      {
        label: "See how we partner",
        href: "/us-sled/how-we-engage/",
        variant: "ghost-dark" as const,
        showArrow: false,
      },
    ],
  },
} as const;
