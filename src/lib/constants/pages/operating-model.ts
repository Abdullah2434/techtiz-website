export const OPERATING_MODEL_SEO = {
  title: "Operating Model | Onshore-controlled · Offshore-engineered | Techtiz",
  description:
    "Techtiz's onshore-controlled, offshore-engineered SLED operating model: CONUS/Lahore air-gapped data architecture, CJIS/CUI/FCI/FTI handling, background-checked US personnel, and per-state offshore restrictions.",
  canonicalPath: "/us-sled/operating-model/",
  ogImage: "/assets/capitol.png",
} as const;

export const OPERATING_MODEL_HERO = {
  eyebrow: "U.S. SLED · Operating model & data architecture",
  heading: 'Where the data goes. <span class="accent">Who touches it.</span>',
  body: "A prime compliance officer needs a clean answer before subcontract paperwork moves. This page is that answer: the bifurcated CONUS / Lahore architecture we operate under, the compliance frameworks that wrap it, and the state-by-state restrictions we are prepared to disclose against.",
  answerCard: {
    label: "Flow-down question",
    text: '"If I subcontract this work to Techtiz, where does the data go and who touches it?" &nbsp;Live agency data, CJI, PHI, FCI, and CUI are handled exclusively by U.S.-based personnel on U.S. soil. Lahore-based engineers work against sanitized environments and synthetic data, behind a documented air-gap with audit logging. Every prime engagement begins with a written disclosure for the prime\'s flow-down file.',
  },
} as const;

export const ONSHORE_ITEMS = [
  {
    title: "Engagement manager & technical liaison",
    body: "single accountable contact for the prime PM. Every status, escalation, and change request flows here first.",
  },
  {
    title: "Live data handling",
    body: "any production pull touching CJI, PHI, FCI, CUI, or agency PII is performed by the onshore team inside the prime's authorization boundary.",
  },
  {
    title: "CJIS-cleared operations",
    body: "for engagements touching law-enforcement, court, or dispatch systems: fingerprinted, background-checked U.S. personnel on a CJIS-aligned workstation.",
  },
  {
    title: "Acceptance, KT, and deployment",
    body: "final review, agency-facing artifact handoff to the prime, and production deployment gates.",
  },
] as const;

export const ONSHORE_DATA_CLASSES = [
  "CUI",
  "FCI",
  "CJI",
  "PHI",
  "Agency PII",
  "Live production data",
] as const;

export const OFFSHORE_ITEMS = [
  {
    title: "Codebase development",
    body: "feature work against mock data and contract tests. Pull requests gated by onshore review before any live-data deployment.",
  },
  {
    title: "Synthetic-data engineering",
    body: "schema-faithful but content-scrubbed datasets generated for development and regression testing. Real records never leave the onshore plane.",
  },
  {
    title: "Document & engineering artifact production",
    body: "architecture docs, runbooks, statutory-format templates, dashboards, all reviewed onshore before release.",
  },
  {
    title: "Workstation controls",
    body: "managed devices with disk encryption, DLP egress monitoring, no removable-media write, audit log forwarding to onshore SIEM.",
  },
] as const;

export const OFFSHORE_DATA_CLASSES = [
  "Synthetic data",
  "Mock fixtures",
  "Public-domain artifacts",
  "Codebase & configs",
] as const;

export const STATE_ROWS = [
  {
    code: "MD",
    posture: "waiver",
    name: "Maryland · State CISO directive",
    what: "Any offshore operations activity, including code development, ops staffing, or data processing on state contracts, requires a discretionary written waiver from the State CISO.",
    badge: "Waiver required",
    badgeClass: "waiver",
  },
  {
    code: "AZ · FL · MO · TX",
    posture: "waiver",
    name: "Medicaid Minimum Subcontract Provisions",
    what: "Medicaid Provider Participation Agreements restrict offshore handling of any Medicaid-related data; explicit disclosures and, in some scopes, restructuring required.",
    badge: "Waiver / restructure",
    badgeClass: "waiver",
  },
  {
    code: "CA",
    posture: "waiver",
    name: "California · Gov't Code §19130",
    what: "Restricts contracting out services that supplant state civil-service jobs and applies strict offshore controls to state data handling.",
    badge: "Onshore only for state data",
    badgeClass: "waiver",
  },
  {
    code: "NJ",
    posture: "waiver",
    name: "New Jersey · Statutory restrictions",
    what: "Statutory restrictions on offshore labor for state services. Scope varies by agency and program; bid-by-bid analysis required.",
    badge: "Onshore by default",
    badgeClass: "waiver",
  },
  {
    code: "State Medicaid agencies",
    posture: "disclose",
    name: "15+ states · State-specific Medicaid rules",
    what: "State-by-state Medicaid agency rules for offshore outsourcing range from disclosure-only to categorical prohibition. HIPAA BAA terms layered on top.",
    badge: "Per-state disclosure",
    badgeClass: "disclose",
  },
  {
    code: "CJIS states",
    posture: "disclose",
    name: "CJIS Security Policy (national)",
    what: "Law-enforcement, court, and dispatch systems require U.S.-citizen personnel on U.S. soil for any CJI touch. State CJIS coordinators vet personnel.",
    badge: "Onshore-only CJI",
    badgeClass: "disclose",
  },
  {
    code: "Most states",
    posture: "serve",
    name: "Standard SLED procurements (non-restricted scopes)",
    what: "Permitting, environmental, GIS, public engagement, grant reporting, and document-production work on non-PII / non-CJI scopes proceeds under standard prime subcontract terms.",
    badge: "Serve directly",
    badgeClass: "serve",
  },
] as const;

export const DISCLOSURE_STEPS = [
  {
    n: "01",
    heading: "Operating-model pack on first NDA call.",
    body: "Architecture diagram, data-class matrix, framework status sheet, and per-state posture page delivered with the NDA.",
  },
  {
    n: "02",
    heading: "Data-flow analysis with the prime.",
    body: "Joint review of where the engagement's data falls on the matrix. Onshore-only vs. bifurcated scopes labelled before any technical conversation.",
  },
  {
    n: "03",
    heading: "State-specific disclosure drafted.",
    body: "For each target state on the bid, the disclosure language the prime would file with the agency, drafted for the prime's review.",
  },
  {
    n: "04",
    heading: "Flow-down clause mapping.",
    body: "Every clause that flows down from the prime contract is mapped to a specific Techtiz control or attestation. Gaps surfaced before subcontract signature.",
  },
  {
    n: "05",
    heading: "Personnel attestation file.",
    body: "Named-personnel attestations for any onshore-required work, citizenship and clearance status, delivered as a sealed file to the prime.",
  },
  {
    n: "06",
    heading: "Continuous-compliance reporting.",
    body: "Quarterly attestations to the prime PMO. Annual joint controls review. Incident-response runbook with prime + Techtiz contacts.",
  },
] as const;
