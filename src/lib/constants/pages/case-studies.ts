import type { SledFaqContent } from "./sled-faq";
import { SITE } from "../site";

export const CASE_STUDIES_SEO = {
  title: "Engagement Examples | U.S. SLED Subcontractor Engagements | Techtiz",
  description:
    "Delivered subcontractor engagements for U.S. SLED primes, summarized at the engagement-type level. Most SLED work stays under NDA; partner names withheld unless we have explicit written permission.",
  canonicalPath: "/us-sled/case-studies/",
  ogImage: "/assets/capitol.png",
} as const;

export const CASE_STUDIES_HERO = {
  eyebrow: "U.S. SLED · Engagement examples",
  heading: 'Delivered subcontractor <span class="accent">engagements.</span>',
  body: "Technical work completed for U.S. prime contractors under subcontract and NDA. Partner names withheld without written permission.",
} as const;

export const CASE_STUDIES_BOUNDARY_ITEMS = [
  'Subcontract-only',
  'NDA on first contact',
  'Zero agency-facing engagements',
] as const;

export const ENGAGEMENTS_SECTION = {
  eyebrow: "Delivered engagements",
  heading: "What we shipped, under whose roof, on what vehicle.",
  body: "Each card: the technical surface area, the prime relationship, what shipped, and the vehicle it moved through. References available under NDA.",
} as const;

export const FEATURE_CARDS = [
  {
    href: "/us-sled/case-studies/adams/",
    logo: "/assets/adams-logo.png",
    logoAlt: "Adams County, Colorado",
    cap: "Full RFI response package for a U.S. prime on a cloud-budgeting RFI, white-label.",
    heading: "Cloud-based budgeting system",
    sub: "Adams County, CO · RFI-RZA-2026.560",
    state: "CO",
    tag: "Live RFI",
    stats: [
      { n: "8", l: "Capability areas" },
      { n: "RFI", l: "No award stage" },
      { n: "$400-510k", l: "Impl. est." },
      { n: "Jun 2026", l: "Response due" },
    ],
    chips: ["ERP integration", "10-year CIP", "SSO & SAML"],
  },
  {
    href: "/us-sled/case-studies/holland/",
    logo: "/assets/holland-logo.png",
    logoAlt: "City of Holland",
    cap: "Full technical-response package for a U.S. prime on a cloud-security RFP, white-label.",
    heading: "Cloud-delivered SASE",
    sub: "City of Holland, MI · Ref 0000426310",
    state: "MI",
    tag: "Live RFP",
    stats: [
      { n: "9", l: "Capability areas" },
      { n: "1", l: "Single award" },
      { n: "$280-550k", l: "Contract est." },
      { n: "Jun 2026", l: "Bid due" },
    ],
    chips: ["Entra ID integration", "Compliance matrix", "SLAs & methodology"],
  },
  {
    href: "/us-sled/case-studies/mdc/",
    logo: "/assets/miami-dade-college.png",
    logoAlt: "Miami Dade College",
    cap: "Full qualifications package for a U.S. prime, six disciplines, white-label.",
    heading: "Engineering services qualification",
    sub: "Miami Dade College · RFQ 2026-WP-15",
    state: "FL",
    tag: "Pre-award",
    stats: [
      { n: "6", l: "Disciplines" },
      { n: "2", l: "On-call pools" },
      { n: "$1-7.5M", l: "Per-project cost" },
      { n: "Jun 2026", l: "Bid due" },
    ],
    chips: ["SF330", "Compliance matrix", "Forms & affidavits"],
  },
  {
    href: "/us-sled/case-studies/altadena/",
    logo: "/assets/altadena-libraries.png",
    logoAlt: "Altadena Libraries",
    cap: "Outsourced finance function for a California special district, white-label.",
    heading: "Accounting & financial consulting",
    sub: "Altadena Library District · RFP No. 31",
    state: "CA",
    tag: "Live RFP",
    stats: [
      { n: "$3.9M", l: "District budget" },
      { n: "3+2", l: "Year term" },
      { n: "~$126k", l: "Mid case / yr" },
      { n: "Jun 2026", l: "Bid due" },
    ],
    chips: ["GASB / CalPERS", "CFD bond", "Reconciliations"],
  },
  {
    href: "/us-sled/case-studies/escondido/",
    logo: "/assets/escondido-logo.png",
    logoAlt: "City of Escondido",
    cap: "Documentation backbone behind a U.S. prime, the prime owns the field.",
    heading: "Geotechnical & special inspection",
    sub: "City of Escondido · RFP No. 26-19",
    state: "CA",
    tag: "Live RFP",
    stats: [
      { n: "$100k", l: "Instrument cap" },
      { n: "4 yr", l: "On-call term" },
      { n: "7", l: "Service categories" },
      { n: "Jun 2026", l: "Bid due" },
    ],
    chips: ["Special inspection", "Daily reports", "Rate schedule"],
  },
] as const;

export const CASE_STUDY_DETAIL_FAQ: SledFaqContent = {
  eyebrow: "Frequently asked questions",
  heading: "Pre-bid brief & confidentiality",
  intro:
    "Quick answers about how to use this engagement example and what detail is available under NDA.",
  items: [
    {
      question: "Why is the prime contractor name withheld?",
      answer:
        "Most SLED subcontract work sits under mutual NDA and prime branding requirements. Public summaries describe engagement type, technical surface, and outcomes. Partner names and proposal content are shared only with explicit written permission or under an executed teaming agreement.",
    },
    {
      question: "Can Techtiz support our bid on a similar pursuit?",
      answer: `Yes. If your pursuit matches this engagement type, email ${SITE.email.sled} or use the teaming intake form. Within ${SITE.responseSla.sled} a U.S.-based partner manager replies with a mutual NDA template and a calendar slot—never agency-facing.`,
    },
    {
      question: "What do we receive under NDA?",
      answer:
        "Full RFP-decode packs, compliance matrices, technical volumes, submission runbooks, and named-resume options scoped to your vehicle and timeline. Prime name, pricing, and agency data stay inside the prime boundary.",
    },
    {
      question: "Does Techtiz contact the procuring agency?",
      answer:
        "No. Techtiz is subcontract-only and never faces the agency. Your program manager holds the client relationship, sign-off, and all agency communication.",
    },
  ],
} as const;

export const CONFIDENTIALITY_SECTION = {
  eyebrow: "What we cannot show publicly",
  heading: "Most of our SLED work stays under NDA.",
  body: "The engagements above are summarized at the technical-deliverable level. Specifics live on a separate call, behind a mutual NDA, with the prime in the room.",
} as const;

export const CONFIDENTIALITY_ROWS = [
  {
    heading: "RFP numbers and agency names",
    body: "are withheld unless we have explicit written permission from the prime to publish them.",
  },
  {
    heading: "Proposal content, evaluation matrices, and scoring breakdowns",
    body: "are never republished in public form. Those belong to the prime and the procuring agency.",
  },
  {
    heading: "Analyses of active solicitations",
    body: "are not published. We analyze RFPs only against a formally scoped engagement with a prime, under NDA, against a defined deliverable.",
  },
  {
    heading: "Reference conversations",
    body: "with the named prime contractor on any of these engagements are available on request, with an NDA in place and the prime's consent.",
  },
] as const;

export const CASE_STUDIES_CTA = {
  eyebrow: "Capture manager or BD lead at a U.S. prime?",
  heading: "Request a reference conversation.",
  body: "NDA-first introduction. We'll route you to the right named reference for the engagement type closest to your pursuit.",
  primaryCta: { label: "Start an NDA conversation", href: "/us-sled/contact/" },
  secondaryCta: { label: "See capabilities", href: "/us-sled/capabilities/" },
} as const;
