import { SITE } from '../site';

export type SledFaqItem = {
  question: string;
  answer: string;
};

export type SledFaqContent = {
  eyebrow: string;
  heading: string;
  intro?: string;
  items: readonly SledFaqItem[];
};

export const SLED_HUB_FAQ: SledFaqContent = {
  eyebrow: 'Frequently asked questions',
  heading: 'U.S. SLED subcontractor basics',
  intro:
    'Quick answers for capture, BD, and program managers evaluating Techtiz as a back-office technical subcontractor.',
  items: [
    {
      question: 'What role does Techtiz play on U.S. SLED contracts?',
      answer:
        'Techtiz is an active back-office technical subcontractor behind Tier 1 and mid-size primes. We deliver specialized engineering—GIS, AI, automation, statutory documents, grant reporting, and platform work—under your master subcontract and teaming letter. Your program manager remains the only voice to the agency; we never face the customer.',
    },
    {
      question: 'Does Techtiz sell directly to state or local agencies?',
      answer:
        'No. We are subcontract-only and NDA-first. We do not compete with primes, solicit open-market RFPs, or hold agency-facing meetings. Every engagement starts through a structured teaming path with a U.S. prime contractor.',
    },
    {
      question: 'Can Techtiz support both pre-award and post-award work?',
      answer:
        'Yes. Pre-award support includes technical volumes, compliance matrices, demo builds, and past-performance packaging under an executed teaming letter. Post-award delivery covers engineers, sprints, knowledge transfer, and integration inside your statement of work.',
    },
    {
      question: 'What happens on first contact?',
      answer: `Email ${SITE.email.sled} or use the teaming intake form. Within ${SITE.responseSla.sled}, a U.S.-based partner manager replies with a mutual NDA template and a calendar slot. No substantive materials are exchanged before the NDA is signed.`,
    },
    {
      question: 'Which NAICS and state codes apply?',
      answer: `Techtiz maps to federal NAICS ${SITE.naics} and state NIGP ${SITE.nigp} for custom programming and systems design work routed through your prime's vehicle.`,
    },
    {
      question: 'How is past performance shared under NDA?',
      answer:
        'Public pages use NDA-safe summaries. Agency references, CPARS-style narratives, and named engagement detail are available upon executed teaming agreement—not in open marketing materials.',
    },
  ],
} as const;

export const HOW_WE_ENGAGE_FAQ: SledFaqContent = {
  eyebrow: 'Frequently asked questions',
  heading: 'How teaming engagements start',
  intro: 'Common questions about our three-step NDA-first sequence and subcontract boundaries.',
  items: [
    {
      question: 'What is the first step to engage Techtiz as a subcontractor?',
      answer:
        'A capture manager, BD lead, or program manager at a U.S. prime introduces the opportunity by email or LinkedIn. Within one business day we reply with a mutual NDA template and a 30-minute calendar slot from a U.S.-based contact.',
    },
    {
      question: 'Why is an NDA required before capability materials?',
      answer:
        'Sensitive procurement context, vehicle structure, and active bid details cannot be discussed in the open. The mutual NDA precedes technical depth, named resumes, or reference conversations—no exceptions.',
    },
    {
      question: 'What is discussed in the capability conversation?',
      answer:
        'Under NDA we align on engagement type (pre-award, post-award, or pipeline), technical surface area, procurement vehicle, team shape, contracting structure, timeline, and any domain conflicts with existing work.',
    },
    {
      question: 'When does a teaming letter or subcontract SOW appear?',
      answer:
        'If the fit is mutual, weeks two to four typically include a scoped statement of work, teaming letter draft, and named-resume options for your contracts team. For active pre-award pursuits, the teaming letter often precedes the full SOW.',
    },
    {
      question: 'Does Techtiz publish unsolicited RFP analyses or open solicitations?',
      answer:
        'No. We do not solicit RFPs from the open market or publish anonymized bid teasers as marketing. The structured relationship sequence on this page is the only entry point.',
    },
    {
      question: 'Can Techtiz white-label deliverables under our prime brand?',
      answer:
        'Yes. All artifacts—code, documents, demos, and status reporting—are produced for your prime brand. Period-of-performance IP and white-label language are standard in our teaming packages.',
    },
  ],
} as const;

export const CAPABILITIES_FAQ: SledFaqContent = {
  eyebrow: 'Frequently asked questions',
  heading: 'SLED backbone capabilities',
  intro: 'Answers about what Techtiz can plug into on day one of a pursuit or delivery effort.',
  items: [
    {
      question: 'What technical domains does the SLED backbone cover?',
      answer:
        'Core competencies include GIS and spatial systems, AI and intelligence (LLM/RAG, agents, ML pipelines), workflow automation, statutory document production, grant and compliance reporting, and platform modernization—each scoped to your subcontract SOW.',
    },
    {
      question: 'Can Techtiz support proposal and orals work pre-award?',
      answer:
        'Yes, under an executed teaming letter and NDA: technical volumes, compliance matrices, demonstrable prototypes, and past-performance packaging aligned to your capture strategy—not as a separate prime offer.',
    },
    {
      question: 'Which compliance frameworks does delivery align to?',
      answer:
        'Engagements are wrapped to the frameworks your flow-down requires—commonly NIST SP 800-171, SOC 2, StateRAMP, CJIS, Section 508/VPAT, CMMC, HIPAA, and IRS Pub 1075. Confirm certification versus roadmap status per framework before external claims.',
    },
    {
      question: 'How does insurance and registration route through the prime?',
      answer:
        'Insurance and liability flow through your master agreement. NAICS 541511 and 541512 and state NIGP 918-46 / 918-00 are listed on our capability materials for subcontract paperwork.',
    },
    {
      question: 'What work is explicitly out of scope?',
      answer:
        'We do not prime contracts, face agencies, or compete with partners. We do not take ownership of the agency relationship or publish deliverables under the Techtiz brand on active government work.',
    },
  ],
} as const;

export const OPERATING_MODEL_FAQ: SledFaqContent = {
  eyebrow: 'Frequently asked questions',
  heading: 'Data architecture & personnel',
  intro: 'Answers compliance officers and PMs need before subcontract flow-down paperwork moves.',
  items: [
    {
      question: 'Where does live agency data go in a Techtiz subcontract?',
      answer:
        'Live agency data touching CJI, PHI, FCI, CUI, or agency PII is handled by U.S.-based personnel on U.S. soil inside the prime\'s authorization boundary. Lahore-based engineers work against sanitized environments and synthetic data behind a documented air-gap.',
    },
    {
      question: 'Who is the accountable contact for the prime PM?',
      answer:
        'A U.S. engagement manager and technical liaison owns status, escalations, and change requests. Final acceptance, knowledge transfer, and production deployment gates stay onshore.',
    },
    {
      question: 'How are CJIS or law-enforcement systems handled?',
      answer:
        'For CJIS-touching work, fingerprinted and background-checked U.S. personnel operate on CJIS-aligned workstations. Offshore staff do not access live CJIS production environments.',
    },
    {
      question: 'Are per-state offshore restrictions documented?',
      answer:
        'Yes. Every prime engagement begins with a written disclosure for your flow-down file, including state-specific restrictions on where engineering may be performed.',
    },
    {
      question: 'How does follow-the-sun delivery work without exposing live data?',
      answer:
        'Offshore engineers develop against mock data and contract tests; pull requests pass onshore review before any live-data deployment. Three time zones compress cycles while keeping production data in CONUS control.',
    },
  ],
} as const;

export const CONTACT_FAQ: SledFaqContent = {
  eyebrow: 'Frequently asked questions',
  heading: 'Teaming intake & response',
  intro: 'What to expect after you reach out about a subcontract role.',
  items: [
    {
      question: 'Who should use the SLED intake form?',
      answer:
        'Capture managers, BD and partnerships leads, and program managers at U.S. prime contractors evaluating a subcontract or teaming letter—not agency staff or commercial SaaS buyers.',
    },
    {
      question: 'What should I include in the first message?',
      answer:
        'Engagement intent (pre-award, post-award, capability, or a specific question), procurement vehicle if known, agency sector, timeline, approximate ceiling band, and NDA status. RFP numbers help when a bid is active.',
    },
    {
      question: 'How fast will Techtiz respond?',
      answer: `We confirm receipt and reply within ${SITE.responseSla.sled} with a mutual NDA template and a calendar slot for the capability conversation.`,
    },
    {
      question: 'Will Techtiz contact the agency on our behalf?',
      answer:
        'Never. We operate zero agency-facing engagements. All upstream communication flows through your program management team.',
    },
    {
      question: 'What email should primes use for teaming?',
      answer: `${SITE.email.sled} is the dedicated U.S. SLED partnerships inbox. Use it for initial introductions and NDA-bound follow-up.`,
    },
  ],
} as const;

export const PROCUREMENT_VEHICLES_FAQ: SledFaqContent = {
  eyebrow: 'Frequently asked questions',
  heading: 'Procurement vehicles & subcontracting',
  intro: 'How Techtiz joins pursuits on NASPO, GSA, state masters, cooperatives, and direct subcontract vehicles.',
  items: [
    {
      question: 'Does Techtiz hold its own state or federal contract vehicles?',
      answer:
        'We join your existing vehicles as a named subcontractor—we do not prime and do not sell direct to agencies. Tell us how the agency buys and we structure the teaming agreement to fit your master agreement.',
    },
    {
      question: 'Can Techtiz work under NASPO ValuePoint or GSA MAS?',
      answer:
        'Yes, when your prime holds the schedule or cooperative contract. We appear on subcontract and teaming paperwork under your vehicle, not as an independent prime offer to the agency.',
    },
    {
      question: 'How do FFP, T&M, and IDIQ task orders map to delivery?',
      answer:
        'We align commercial delivery models to your contract type—firm fixed price work packages, time-and-materials engineering, or IDIQ/BPA/MAC task orders—so labor categories and burn reports match your prime accounting.',
    },
    {
      question: 'What is the typical subcontract paperwork timeline?',
      answer:
        'Direct subcontract and teaming-letter paths often close in 7 to 14 business days once NDA and scope are aligned; complex flow-down reviews may extend that with your contracts team.',
    },
    {
      question: 'Do FAR and DFARS clauses flow down to Techtiz?',
      answer:
        'Yes. We accept prime flow-down terms consistent with subcontractor performance—security, IP, insurance, and data-handling clauses included in your master subcontract template.',
    },
  ],
} as const;

export const CASE_STUDIES_FAQ: SledFaqContent = {
  eyebrow: 'Frequently asked questions',
  heading: 'Engagement examples & confidentiality',
  intro: 'Why case narratives are summarized and how to request detail under NDA.',
  items: [
    {
      question: 'Why are partner names withheld on engagement examples?',
      answer:
        'Most SLED subcontract work sits under mutual NDA and prime branding requirements. Public summaries describe engagement type, technical surface, and outcomes—not customer identities unless we have explicit written permission.',
    },
    {
      question: 'Can we get named references for a specific pursuit?',
      answer:
        'Agency references and CPARS-style performance detail are available upon executed teaming agreement and mutual NDA—not from anonymized marketing cards alone.',
    },
    {
      question: 'What kinds of engagements are represented?',
      answer:
        'Examples include GIS and statutory environmental submissions, statewide portal accessibility remediation, permitting platform integration, and grant reporting workstreams—each delivered as a subcontracted technical slice under a prime\'s vehicle.',
    },
    {
      question: 'Are contract values or agency names published here?',
      answer:
        'No. We do not publish unapproved contract values, agency names, or prime logos. Outcome metrics on this page are NDA-safe and suitable for capture conversations once paperwork is in place.',
    },
  ],
} as const;

export const CAPABILITY_STATEMENT_FAQ: SledFaqContent = {
  eyebrow: 'Frequently asked questions',
  heading: 'Capability statement for primes',
  intro: 'How to use this one-page statement in capture and subcontract onboarding.',
  items: [
    {
      question: 'What is the Techtiz capability statement used for?',
      answer:
        'It is a prime-facing snapshot of core competencies, differentiators, compliance posture, and teaming contact—intended for subcontract onboarding packets, capture folders, and BD introductions before deeper NDA conversations.',
    },
    {
      question: 'How do I save or share this page as a PDF?',
      answer:
        'Use the "Save / print as PDF" control at the top of the page, or print from the browser with background graphics enabled for best fidelity.',
    },
    {
      question: 'Why are UEI, CAGE, and set-aside fields italicized?',
      answer:
        'Those fields are placeholders to confirm against SAM.gov before the statement is distributed externally. Replace italicized values with verified registration data from your due-diligence check.',
    },
    {
      question: 'Which NAICS codes are listed?',
      answer: '541511 and 541512 for custom computer programming and computer systems design services, plus state NIGP 918-46 and 918-00 where state procurement applies.',
    },
    {
      question: 'How do I start a teaming conversation from this statement?',
      answer: `Email ${SITE.email.sled} with your vehicle, timeline, and engagement type. We reply within ${SITE.responseSla.sled} with a mutual NDA template—subcontract-only, no agency-facing contact.`,
    },
  ],
} as const;
