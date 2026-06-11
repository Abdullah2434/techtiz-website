export const WESTCHESTER_CASE_STUDY = {
  slug: "westchester",
  crumb: "County of Westchester",
  deadline: "2026-06-11T14:00:00-04:00",
  seo: {
    title:
      "County of Westchester · Computer Mgmt Software Renewal (RFB-WC-26182) | Techtiz SLED",
    description:
      "Pre-bid brief: County of Westchester, NY RFB-WC-26182, Computer Management Software Renewal (Recast Software). A lowest-price RFB. Techtiz is the prime reseller's NDA-first bid-preparation back-office subcontractor. Never agency-facing.",
    ogImage: "/assets/sled-case-studies/westchester/hero.png",
  },
  hero: {
    eyebrowLive: "Pre-bid brief · Live RFB · Under NDA",
    eyebrowPast: "Pre-bid brief · Closed · Under NDA",
    h1: 'A reseller\'s pre-bid brief for <span class="accent">RFB-WC-26182.</span>',
    body: "County of Westchester, New York, a lowest-price renewal of the Recast Software management suite across 5,000 county machines. One LOT, price decides it. Techtiz runs the bid-prep engine behind the prime reseller, under NDA, before the June 11 deadline.",
    livePill: "Live · closes Jun 11, 2 PM EDT",
    pastPill: "Closed · bids opened",
    heroBg: "/assets/sled-case-studies/westchester/hero.png",
    logo: "/assets/sled-case-studies/westchester/logo.png",
    logoAlt: "Westchester County",
    identity: {
      awardingBody: {
        label: "Awarding body",
        value: "County of Westchester",
      },
      jurisdiction: {
        label: "Jurisdiction",
        value: "New York",
      },
      statusLive: "Supporting under NDA",
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
      value: "RFB-WC-26182",
      small: "Formal RFB, lowest price",
    },
    {
      key: "Scope",
      value: "Recast renewal",
      small: "1 LOT, 5,000 seats",
    },
    {
      key: "Award",
      value: "Lowest LOT price",
      small: "LPTA, 1-year term",
    },
    {
      key: "Techtiz role",
      value: "Bid-prep only",
      small: "NDA-first, never agency-facing",
    },
  ],
  keyDates: {
    modHead: {
      eyebrow: "Schedule of events",
      h2: "One sealed deadline, measured by the Bureau clock.",
      p: "A formal, sealed RFB. Specification protests are written and due June 6. Bids are opened publicly at 2:00 p.m. Eastern on June 11, and lateness is judged by the Bureau's receipt log, not a courier timestamp.",
    },
    events: [
      {
        date: "May 27, 2026",
        label: "Published",
        detail: "Issued 3:27 PM EDT, ref 0000425765",
      },
      {
        date: "Jun 6, 2026",
        label: "Spec protest, 5 PM EDT",
        detail: "Written only, 3 working days before opening",
      },
      {
        date: "Jun 11, 2026",
        label: "Bids due & opened, 2 PM EDT",
        detail: "Sealed. No email or fax. No cure for late",
        hard: true,
      },
      {
        date: "Jul 11, 2026",
        label: "Contract term",
        detail: "Through Jul 10, 2027, plus up to 12-month extension",
      },
    ],
  },
  differentiator: {
    icon: "badge-percent",
    tag: "The differentiator · Price-only award",
    quote:
      "Two levers decide a lowest-price renewal: the discount tier and a flawless responsive bid.",
    sub: "This is a pure LPTA named-product renewal, so total LOT price is the only award variable. The largest lever is the reseller's access to the Recast government or volume discount tier, estimated 15 to 25 percent below standard commercial rates. The second lever is zero-disqualification submission discipline: a single blank field, a missing signature, or a mislabeled envelope ends the bid before price is read. Both are exactly what disciplined pre-bid support protects.",
    liveNote:
      "Techtiz builds the price-to-win model and runs the responsiveness pass so the prime clears all three gates and prices at the tier the discount allows.",
  },
  failureTabs: {
    modHead: {
      eyebrow: "Where bids fail",
      h2: "Ten ways a low bid still loses.",
      p: "None is about price. Each is a responsiveness or supply-chain trap that gets a bid rejected before, or despite, the number on the commodity page.",
      eyebrowAccent: true,
    },
    tabs: [
      {
        num: "01",
        tab: "Bureau clock",
        pill: "Late = dead",
        icon: "timer-off",
        title: "Late by the Bureau clock",
        secref: "Jun 11, 2 PM EDT",
        trapLabel: "The rule",
        trap: "Lateness is measured by the Bureau of Purchase and Supplies receipt log, not a courier or postmark timestamp. Late bids are not considered.",
        fixLabel: "If you miss it",
        fix: "There is no cure period. Hand-deliver early to Room 713 and get the receipt logged well before 2:00 p.m.",
      },
      {
        num: "02",
        tab: "Signature",
        pill: "No cure",
        icon: "pen-line",
        title: "Unsigned or unauthorized signatory",
        secref: "A2, A15, A16",
        trapLabel: "The rule",
        trap: "The bid form must be signed by an authorized officer of the bidder.",
        fixLabel: "If you miss it",
        fix: "A missing signature, or a signer without authority, is rejected with no cure. Confirm signing authority before the envelope is sealed.",
      },
      {
        num: "03",
        tab: "Envelope label",
        pill: "Rejected",
        icon: "package",
        title: "Unlabeled envelope",
        secref: "Submission",
        trapLabel: "The rule",
        trap: "The sealed envelope must show the vendor name, bid number RFB-WC-26182, and the June 11 due date.",
        fixLabel: "If you miss it",
        fix: "An unlabeled or mislabeled envelope can be set aside unopened. Print the label to the exact spec.",
      },
      {
        num: "04",
        tab: "Partial form",
        pill: "Non-responsive",
        icon: "file-x",
        title: "Form not returned in its entirety",
        secref: "Bid form",
        trapLabel: "The rule",
        trap: "The bid form must be complete in its entirety, including every commodity-page price field and the guaranteed-delivery field.",
        fixLabel: "If you miss it",
        fix: "A blank price field or a partial form is non-responsive. Fill every field, even where the answer is zero or none.",
      },
      {
        num: "05",
        tab: "Tax or fuel",
        pill: "In the price",
        icon: "receipt-text",
        title: "Tax or fuel surcharge in the price",
        secref: "A7, C3",
        trapLabel: "The rule",
        trap: "Prices must be net of all tax, FOB Destination, with no fuel surcharge. The County is tax exempt.",
        fixLabel: "If you miss it",
        fix: "A LOT price that bakes in tax or a surcharge reads as non-conforming. Quote clean, net, destination-delivered.",
      },
      {
        num: "06",
        tab: "Undocumented equiv.",
        pill: "Deviation",
        icon: "replace",
        title: "Undocumented equivalent",
        secref: "A5, A6",
        trapLabel: "The rule",
        trap: "Proposing an equivalent product requires noting the deviation on the form and attaching spec sheets.",
        fixLabel: "If you miss it",
        fix: "An unflagged substitution for the named Recast SKUs is non-responsive. Bid the exact products, or document every deviation.",
      },
      {
        num: "07",
        tab: "Unofficial form",
        pill: "Missing addenda",
        icon: "file-warning",
        title: "Unofficial form source",
        secref: "A17",
        trapLabel: "The rule",
        trap: "Bids must be submitted on the official forms, which may carry addenda an unofficial copy lacks.",
        fixLabel: "If you miss it",
        fix: "A form pulled from a third-party aggregator can be missing an addendum and read as non-responsive. Work from the County-issued document only.",
      },
      {
        num: "08",
        tab: "NDA",
        pill: "NDA",
        icon: "lock",
        title: "The pricing lever that wins or loses it",
        secref: "Discount tier · Locked",
        trapLabel: "The decision",
        trap: "One channel-pricing lever moves the LOT total more than any other, and most bidders price above it without realizing.",
        fixLabel: "Why it matters",
        fix: "The tier to target and the price-to-win band are in the full pack.",
      },
      {
        num: "09",
        tab: "NDA",
        pill: "NDA",
        icon: "lock",
        title: "A supply-chain exposure that voids the award",
        secref: "A11 · Locked",
        trapLabel: "The decision",
        trap: "The bidder indemnifies the County against infringement, so the license chain behind the product has to be clean. One sourcing shortcut creates real exposure.",
        fixLabel: "Why it matters",
        fix: "How to keep the channel authorized and the indemnity safe is in the full pack.",
      },
      {
        num: "10",
        tab: "Email or fax",
        pill: "Prohibited",
        icon: "mail-x",
        title: "Email or fax submission",
        secref: "Sealed only",
        trapLabel: "The rule",
        trap: "Bids are sealed physical submissions. Email and fax are prohibited.",
        fixLabel: "If you miss it",
        fix: "An emailed or faxed bid is not considered. Deliver the sealed envelope in person or by carrier to Room 713.",
      },
    ],
  },
  competingField: {
    modHead: {
      eyebrow: "The competing field",
      h2: "30 firms mapped, but the giants rarely need help.",
      p: "From the prime-contractor database. The high-revenue names are mostly the publishers and national resellers themselves. The realistic prime for a Techtiz engagement is a smaller US reseller or a New York MSP near White Plains. Figures are public-source estimates for partner targeting.",
    },
    stats: [
      {
        n: "30",
        l: "",
      },
      {
        n: "15",
        nSmall: " / / 15",
        l: "",
      },
      {
        n: "6 (NDA)",
        l: "",
      },
      {
        n: "~$157",
        nSmall: " / B",
        l: "",
      },
    ],
    notes: [
      {
        icon: "triangle-alert",
        html: '<span>The three largest by estimate are <span class="redact">Dell Technologies, CDW, and SHI International,</span> none a likely bid-prep client. The database banner claims 35 firms; the enumerated rows show 30, which is what this page uses. </span>',
      },
    ],
    liveFootnote: {
      icon: "folder-lock",
      html: "<span>The 9 New York firms, the realistic-prime shortlist near White Plains, and the full relevance map are in the <strong>full document pack.</strong> Ask us for it under NDA.</span>",
    },
  },
  taskAllocation: {
    modHead: {
      eyebrow: "Task allocation",
      h2: "What a remote team preps, and what only the prime can do.",
      p: "The boundary that makes a compliant bid-prep model work on a sealed product RFB.",
    },
    legalBar: {
      icon: "scale",
      html: "<strong>Contractual and operational, not a statutory bar.</strong> Software reselling is not licensed professional work, so no statute bars offshore bid preparation. The limits come from the sealed physical-submission rules, the post-award non-assignment clause (A14, which governs the contract, not bid prep), and the prime's own confidentiality posture under NDA. The US prime must be, or partner with, an authorized Recast reseller, and Techtiz never sources, signs, or delivers any part of the bid.",
    },
    canColumn: {
      icon: "globe",
      title: "Remote technology & back-office subcontractor",
      subtitle: "Pre-award bid preparation only",
      items: [
        "RFB review and analysis",
        "Compliance and responsiveness checklist, built and run",
        "Price-to-win model and total LOT-price calculation",
        "Commodity-page draft and bid-form field drafting, every field except the signature",
        "Recast product-specification verification against the named SKUs",
        "Document-packet assembly and envelope-labeling instructions",
        "Final QA review before the prime signs",
      ],
      techtizSlot: {
        icon: "zap",
        html: "<strong>Techtiz operates only in this column,</strong> behind the prime, under NDA, and never contacts the County or touches the signature.",
      },
    },
    primeColumn: {
      icon: "building-2",
      title: "US prime only",
      subtitle: "Authorized reseller, signs, delivers",
      items: [
        "The authorized-officer signature on the bid form",
        "Physical preparation and sealed delivery to Room 713",
        "All contact with the County, before, during, and after submission",
        "Recast license sourcing and fulfillment through an authorized US channel",
      ],
    },
    hardLimit: {
      icon: "lock",
      html: "<strong>Gates, stated plainly.</strong> A signed NDA must be in place before any bid-preparation material moves offshore, covering client and prime identity, the pricing model, and competitive intelligence, with at least a two-year survival. Recast pricing and quotes are NDA-protected and internal only. County vendor-relationship data, the completed-bid signature and submission, and EFT and banking details are US-prime only. The public solicitation document is freely shareable.",
    },
  },
  awardModel: {
    modHead: {
      eyebrow: "The award model",
      h2: "Single lowest-price LOT, nothing else scored.",
      p: "A Firm Fixed Price RFB. The only award variable is total LOT price among responsive, responsible bids. No technical scoring, no past-performance narrative, no presentation.",
    },
    rows: [
      {
        label: "Structure",
        value:
          "<strong>One winner on lowest LOT price.</strong> The County may award by individual item, grouped items, or lot under Section B1, and may reject any or all bids.",
      },
      {
        label: "Three gates",
        value:
          "<strong>Responsiveness, then responsibility, then price.</strong> A bid that fails the sealed-submission or complete-and-signed-form check is rejected before price is ever read.",
      },
      {
        label: "Non-exclusive",
        value:
          "Section A19 lets the County contract similarly with other vendors. No guaranteed minimum. NYS political subdivisions may purchase under the resulting contract.",
      },
      {
        label: "Term",
        value:
          "<strong>July 11, 2026 to July 10, 2027,</strong> one year, with up to a 12-month extension under Section B4 if both sides agree.",
      },
    ],
  },
  pricing: {
    modHead: {
      eyebrow: "Value model",
      h2: "One LOT figure, three ways it could land.",
      p: "No budget is stated. The contract is a single LOT price on the commodity page, payment 2% 10 Net 30, tax exempt, FOB Destination, EFT only. The ranges below are scope-derived pre-bid estimates, not County figures. The reseller's Recast discount tier is what moves the number.",
    },
    scenarios: [
      {
        tier: "Low / price-to-win",
        value: "$120-150k",
        desc: "Aggressive channel pricing, thin support margin.",
      },
      {
        tier: "Mid",
        value: "$150-200k",
        desc: "Standard reseller markup with competitive support pricing.",
        mid: true,
        pill: "Base case",
      },
      {
        tier: "High",
        value: "$200-260k",
        desc: "Standard retail, no negotiated discount, likely above the incumbent rate.",
      },
    ],
    footnotes: [
      {
        icon: "info",
        html: "All figures are scope-derived pre-bid estimates, not County or vendor numbers. The single LOT covers 5,000 seats each of Right Click Tools, Patching, and Insights, plus 1 Premium Support subscription.",
      },
      {
        icon: "folder-lock",
        html: "Techtiz support is a fixed bid-prep fee scoped per engagement, never a percentage of the LOT price, and is not part of the public solicitation intelligence.",
        liveOnly: true,
      },
    ],
  },
  agency: {
    modHead: {
      eyebrow: "Agency context",
      h2: "Who is buying, and who signs it.",
      p: "",
    },
    photo: "/assets/sled-case-studies/westchester/hero.png",
    photoAlt: "Westchester County, White Plains, New York",
    body: "The County of Westchester is a New York State county government. The renewal is owned by the <strong>Westchester County IT Department</strong> and issued through the <strong>Bureau of Purchase and Supplies.</strong> <strong>Martin A. O'Sullivan</strong> is the single named contact and signer, at 148 Martine Avenue, Room 713, White Plains. The prime, not Techtiz, handles every interaction with that office.",
    stats: [
      {
        n: "5,000",
        l: "County machines covered",
      },
      {
        n: "1 LOT",
        l: "Firm fixed price",
      },
      {
        n: "White Plains",
        l: "Westchester County, NY",
      },
    ],
  },
  techtizApproach: {
    modHead: {
      eyebrow: "How Techtiz fits",
      h2: "The bid-prep engine, behind your firm.",
      p: "Techtiz prepares the bid; the prime supplies, signs, and delivers it. Techtiz never sources a license, never signs, and never contacts the County.",
    },
    cards: [
      {
        title: "NDA before any data",
        desc: "A mutual NDA covering client and prime identity, the pricing model, and competitive intelligence, before a single document moves.",
      },
      {
        title: "Price-to-win & compliance",
        desc: "The LOT-price model, the responsiveness checklist, the commodity-page template, and the Recast spec-match verification.",
      },
      {
        title: "Packet & final QA",
        desc: "Document assembly, envelope-labeling instructions, and a final QA pass before the prime signs.",
      },
      {
        title: "Your firm owns the bid  ",
        desc: "License sourcing, the signature, sealed delivery, EFT enrollment, and all County contact stay with the prime.",
      },
    ],
    lockedNote:
      "Prime name, engagement fee, and Recast pricing stay under NDA. Techtiz never contacts the County or signs the bid.",
    liveOnly: true,
  },
  cta: {
    live: {
      eyebrow: "Bidding RFB-WC-26182? The window is open.",
      h2: "Request the full bid-prep pack.",
      body: "The RFB decode, the price-to-win model structure, the responsiveness checklist, the commodity-page template, and the 30-firm field map. A US partner manager replies within one business day, under a mutual NDA, never agency-facing.",
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
      eyebrow: "Have a live SLED bid?",
      h2: "We can prep the package for your next bid.",
      body: "Techtiz supported a reseller bid on a New York county software renewal. The prime, the exact scope, and the pricing stay under NDA. A US partner manager replies within one business day, never agency-facing.",
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
