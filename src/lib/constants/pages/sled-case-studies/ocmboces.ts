export const OCMBOCES_CASE_STUDY = {
  slug: "ocmboces",
  crumb: "OCM BOCES",
  deadline: "2026-06-11T13:30:00-04:00",
  seo: {
    title: "OCM BOCES · Computer Related Supplies (RFB-227-05) | Techtiz SLED",
    description:
      "Pre-bid brief: OCM BOCES RFB-227-05, Computer Related Supplies. A line-item lowest-price RFB for genuine OEM supplies. Techtiz is the prime reseller's NDA-first bid-preparation back-office subcontractor. Never agency-facing.",
    ogImage: "/assets/sled-case-studies/ocmboces/hero.png",
  },
  hero: {
    eyebrowLive: "Pre-bid brief · Live RFB · Under NDA",
    eyebrowPast: "Pre-bid brief · Closed · Under NDA",
    h1: 'A reseller\'s pre-bid brief for <span class="accent">RFB-227-05.</span>',
    body: "OCM BOCES, New York, a line-item renewal of genuine OEM computer supplies across 146 items for 23 component districts. Lowest price wins each line. Techtiz runs the bid-prep engine behind the prime reseller, under NDA, before the June 11 deadline.",
    livePill: "Live · closes Jun 11, 1:30 PM EDT",
    pastPill: "Closed · bids opened",
    heroBg: "/assets/sled-case-studies/ocmboces/hero.png",
    logo: "/assets/sled-case-studies/ocmboces/logo.png",
    logoAlt: "OCM BOCES",
    identity: {
      awardingBody: {
        label: "Awarding body",
        value: "OCM BOCES",
      },
      jurisdiction: {
        label: "Jurisdiction",
        value: "Onondaga County, NY",
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
      value: "RFB-227-05",
      small: "Formal RFB, line-item LPTA",
    },
    {
      key: "Scope",
      value: "OEM supplies",
      small: "146 line items",
    },
    {
      key: "Award",
      value: "Lowest price / line",
      small: "Multiple awardees",
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
      h2: "One sealed deadline, returned unopened if late.",
      p: "A formal, sealed RFB. The query window closed May 26. Bids are opened publicly at 1:30 p.m. Eastern on June 11, and anything received after that is returned unopened.",
    },
    events: [
      {
        date: "May 19, 2026",
        label: "Published",
        detail: "Issued 8:15 AM EDT, ref 0000424830",
      },
      {
        date: "May 26, 2026",
        label: "Queries closed",
        detail: "Addenda 3 to 5 business days after",
      },
      {
        date: "Jun 11, 2026",
        label: "Bids due & opened, 1:30 PM EDT",
        detail: "Sealed. Late bids returned unopened",
        hard: true,
      },
      {
        date: "Jul 9, 2026",
        label: "Board award",
        detail: "Contract starts Aug 1, through Jul 31, 2027",
      },
    ],
  },
  differentiator: {
    icon: "key-round",
    tag: "The differentiator · The HP gate",
    quote:
      "The HP Outlet requirement removes most of the field before price is read.",
    sub: "The solicitation requires HP Retail products only, with no HP Contract C-SKUs, and demands an HP Outlet certification letter plus the prime's assigned 10-digit HP Outlet ID for every HP line item. It states twice that a missing HP Outlet letter may result in rejection. HP items are the majority of the 146-line sheet, so this single gate eliminates most bidders. Knowing it, and pairing it with response-sheet discipline, is the clearest signal the whole packet was read.",
    liveNote:
      "Techtiz flags the HP Retail versus C-SKU sourcing check on every HP line during the response-sheet build, so the prime's authorized channel sourcing is confirmed before pricing.",
  },
  failureTabs: {
    modHead: {
      eyebrow: "Where bids fail",
      h2: "Ten ways a low bid still loses.",
      p: "None is about price. Each is a responsiveness, sourcing, or documentation trap that gets a bid rejected before, or despite, the number on the response sheet.",
      eyebrowAccent: true,
    },
    tabs: [
      {
        num: "01",
        tab: "Late submission",
        pill: "Returned",
        icon: "timer-off",
        title: "Late is returned unopened",
        secref: "Jun 11, 1:30 PM EDT",
        trapLabel: "The rule",
        trap: "Bids received after 1:30 p.m. Eastern on June 11 are not opened and are returned unopened.",
        fixLabel: "If you miss it",
        fix: "There is no cure. Deliver the sealed bid to Liverpool ahead of time and confirm receipt.",
      },
      {
        num: "02",
        tab: "Blank line",
        pill: "Unbalanced",
        icon: "square-dashed",
        title: "A blank line reads as a zero",
        secref: "Clause 50",
        trapLabel: "The rule",
        trap: "A response-sheet line left blank is read as a zero and flagged as an unbalanced bid. Every item the bidder will not supply must be marked No Bid.",
        fixLabel: "If you miss it",
        fix: "An unbalanced bid can be rejected. Mark No Bid explicitly on every line you do not source.",
      },
      {
        num: "03",
        tab: "References",
        pill: "K-12 only",
        icon: "mail-check",
        title: "References must be educational and current",
        secref: "Three minimum",
        trapLabel: "The rule",
        trap: "Three or more reference letters from New York K-12 or BOCES agencies, dated January 1, 2026 or later. Commercial or non-educational letters do not count.",
        fixLabel: "If you miss it",
        fix: "Fewer than three, or a commercial source, or a stale date, makes the bid non-responsive. Confirm and date the references early.",
      },
      {
        num: "04",
        tab: "Reseller letter",
        pill: "Exact entity",
        icon: "file-badge",
        title: "Reseller letter must name the exact entity",
        secref: "Per brand bid",
        trapLabel: "The rule",
        trap: "Each manufacturer reseller letter must name the exact bidding legal entity and be dated January 1, 2026 or later.",
        fixLabel: "If you miss it",
        fix: "A letter to a parent, an affiliate, or a trade name that is not the bidder of record fails. Match the entity name exactly.",
      },
      {
        num: "05",
        tab: "NDA",
        pill: "NDA",
        icon: "lock",
        title: "The credential that removes most of the field",
        secref: "HP Outlet · Locked",
        trapLabel: "The decision",
        trap: "A specific channel credential is mandatory on the majority of lines, and the solicitation twice warns that missing it means rejection. Most bidders cannot meet it.",
        fixLabel: "Why it matters",
        fix: "Exactly what is required, and how to confirm it before pricing, is in the full pack.",
      },
      {
        num: "06",
        tab: "NDA",
        pill: "NDA",
        icon: "lock",
        title: "A sourcing mismatch that fails the line",
        secref: "Retail vs C-SKU · Locked",
        trapLabel: "The decision",
        trap: "The wrong product class on an HP line is non-responsive even at the lowest price, and the difference is easy to miss during sourcing.",
        fixLabel: "Why it matters",
        fix: "The exact distinction and the line-by-line check are in the full pack.",
      },
      {
        num: "07",
        tab: "Wet-ink only",
        pill: "No facsimile",
        icon: "pen-line",
        title: "Wet-ink signatures only",
        secref: "Certifications",
        trapLabel: "The rule",
        trap: "Certifications require original wet-ink signatures. Facsimile, printed, or typed signatures are not accepted.",
        fixLabel: "If you miss it",
        fix: "A typed or pasted signature voids the certification. Sign originals in ink before sealing.",
      },
      {
        num: "08",
        tab: "Form alterations",
        pill: "Unauthorized",
        icon: "file-warning",
        title: "No unauthorized form alterations",
        secref: "Official forms",
        trapLabel: "The rule",
        trap: "The official forms may not be altered. Bid on the issued Bidder's Response Sheet without changing its structure.",
        fixLabel: "If you miss it",
        fix: "An altered form is non-responsive. Enter prices in the provided fields only and work from the official document.",
      },
      {
        num: "09",
        tab: "W-9 & addenda",
        pill: "Missing",
        icon: "file-x",
        title: "Missing W-9 or unacknowledged addendum",
        secref: "Document set",
        trapLabel: "The rule",
        trap: "A current signed W-9 is required, and every addendum must be acknowledged.",
        fixLabel: "If you miss it",
        fix: "A missing W-9 or an unacknowledged addendum is a responsiveness failure. Track the addenda through the close.",
      },
      {
        num: "10",
        tab: "Original packaging",
        pill: "OEM intact",
        icon: "box",
        title: "Original OEM packaging",
        secref: "Authenticity",
        trapLabel: "The rule",
        trap: "Goods must be genuine OEM in original manufacturer packaging. Items separated from original multi-item packaging are not acceptable.",
        fixLabel: "If you miss it",
        fix: "Repackaged or split-pack goods fail authenticity. Source full, intact OEM packs.",
      },
    ],
  },
  competingField: {
    modHead: {
      eyebrow: "The competing field",
      h2: "82 firms mapped, but the giants rarely need help.",
      p: "From the prime-contractor database. The high-revenue names are mostly the national distributors themselves. The realistic prime for a Techtiz engagement is a smaller US reseller or a New York firm near Syracuse. Figures are public-source estimates for prime targeting.",
    },
    stats: [
      {
        n: "82",
        l: "Firms mapped to the RFB",
      },
      {
        n: "62",
        nSmall: " / / 20",
        l: "Highly / partially relevant",
      },
      {
        n: "14",
        l: "New York-based firms",
      },
      {
        n: "~$202",
        nSmall: " / B",
        l: "Combined est. revenue",
      },
    ],
    notes: [
      {
        icon: "triangle-alert",
        html: '<span>The two largest by estimate are <span class="redact">TD SYNNEX and Ingram Micro,</span> distributors that rarely need a bid-prep team. </span>',
      },
    ],
    liveFootnote: {
      icon: "folder-lock",
      html: "<span>The 20 New York firms, the realistic-prime shortlist near Syracuse, and the full relevance map across all 82 firms are in the <strong>full document pack.</strong> Ask us for it under NDA.</span>",
    },
  },
  taskAllocation: {
    modHead: {
      eyebrow: "Task allocation",
      h2: "What a remote team preps, and what only the prime can do.",
      p: "The boundary that makes a compliant bid-prep model work on a sealed OEM-supply RFB.",
    },
    legalBar: {
      icon: "scale",
      html: "<strong>Contractual and operational, not a statutory bar.</strong> No licensing statute and no explicit prohibition bars offshore bid preparation. The limits are operational: the bidder of record must be the named legal entity on every certification, the HP Outlet ID is the prime's channel credential, and physical submission, the portal account, and all agency contact stay with the prime. Techtiz never holds reseller authorization, never holds the HP Outlet ID, and never signs.",
    },
    canColumn: {
      icon: "globe",
      title: "Remote bid-preparation & back-office subcontractor",
      subtitle: "Drafting and packaging only",
      items: [
        "Pricing analysis and the draft 146-line response-sheet build",
        "Manufacturer reseller-letter tracking and coordination",
        "Reference-letter coordination and draft request language",
        "Compliance-checklist assembly and the HP Retail versus C-SKU check",
        "The risk register and internal strategy documents",
        "Submission packaging for the prime's review",
      ],
      techtizSlot: {
        icon: "zap",
        html: "<strong>Techtiz operates only in this column,</strong> behind the prime, under NDA, and never contacts OCM BOCES or signs a certification.",
      },
    },
    primeColumn: {
      icon: "building-2",
      title: "US prime only",
      subtitle: "Authorized reseller, signs, submits",
      items: [
        "Signing the Non-Collusion, Iranian Divestment, and all certifications",
        "Being the named bidder on every manufacturer reseller letter",
        "Holding the 10-digit HP Outlet ID",
        "Assembling and submitting the physical sealed bid and the portal entry",
      ],
    },
    hardLimit: {
      icon: "lock",
      html: "<strong>Gates, stated plainly.</strong> A signed internal NDA must be in place before any bid data moves, covering bid pricing, participant purchasing volumes, OCM BOCES contact details, and the decoded documents. No disclosure to any competing vendor. Confidentiality survives award or non-award.",
    },
  },
  awardModel: {
    modHead: {
      eyebrow: "The award model",
      h2: "Lowest price wins each line, not the whole bid.",
      p: "Line-item LPTA. Award goes to the lowest responsive and responsible vendor on each line item, so multiple vendors can each win a subset of the 146.",
    },
    rows: [
      {
        label: "Structure",
        value:
          "<strong>Lowest price per line item.</strong> OCM BOCES may award by item, by group, or as an entire bid, whichever serves participants. Multiple awardees are expected.",
      },
      {
        label: "No minimum",
        value:
          "Estimated quantities are not purchase commitments (clause 50). Volume depends on participant uptake, not a single purchase order.",
      },
      {
        label: "Cooperative",
        value:
          "Piggybacking is authorized for OCM BOCES, Cayuga-Onondaga BOCES, TST BOCES, and their component districts by mutual consent.",
      },
      {
        label: "Term",
        value:
          "<strong>August 1, 2026 to July 31, 2027,</strong> with annual extensions by mutual consent up to 4 years total.",
      },
    ],
    footnote: {
      icon: "zap",
      html: "<span>Techtiz structures the response-sheet pricing build so the prime can win the line items it chooses to chase, not all 146.</span>",
      liveOnly: true,
    },
  },
  pricing: {
    modHead: {
      eyebrow: "Value model",
      h2: "Contract value scales with the lines you win.",
      p: "No budget is stated. The ranges below are public-source estimates of the contract the prime competes for, derived from response-sheet quantities and current OEM distributor pricing, not Techtiz revenue. The HP Color LaserJet Pro M454 series, items 63 to 66, is the price-to-win zone.",
    },
    scenarios: [
      {
        tier: "Low",
        value: "~$150k",
        desc: "Vendor wins under 40 percent of line items.",
      },
      {
        tier: "Mid",
        value: "~$240k",
        desc: "Wins 60 to 70 percent of line items.",
        mid: true,
        pill: "Base case",
      },
      {
        tier: "High",
        value: "~$320k",
        desc: "Wins 80 percent or more of line items.",
      },
    ],
    footnotes: [
      {
        icon: "info",
        html: "Public-source estimates, not OCM BOCES figures. The M454 series (items 63 to 66) at 250, 175, 175, 175 units is roughly 15 to 20 percent of contract value at standard OEM pricing.",
      },
      {
        icon: "folder-lock",
        html: "Techtiz support is a fixed bid-prep fee scoped per engagement, priced on that work and distinct from the contract value the prime would earn.",
        liveOnly: true,
      },
    ],
  },
  securityGrid: {
    modHead: {
      eyebrow: "Compliance & law",
      h2: "The statutes the bid runs under, and one conflict to resolve.",
      p: "Governing law is New York State, venued in Onondaga County. Two certifications are signed under penalty of perjury. One document conflict needs the controlling source named.",
    },
    items: [
      {
        icon: "gavel",
        title: "New York law, Onondaga venue",
        desc: "GML 103 competitive bidding and Article 119-O cooperative purchasing. Disputes venued in Onondaga County.",
      },
      {
        icon: "handshake",
        title: "Non-Collusion, GML 103-d",
        desc: "Signed under penalty of perjury.",
      },
      {
        icon: "ban",
        title: "Iranian Energy Divestment, GML 103-g",
        desc: "Signed under penalty of perjury.",
      },
      {
        icon: "alert-triangle",
        title: "Insurance conflict",
        desc: "Appendix D says insurance is not required; General Conditions 43 to 44 require it on request. The General Conditions govern, so treat insurance as required on request.",
      },
      {
        icon: "unlock",
        title: "No set-aside",
        desc: "Full and open. No small-business, minority-owned, or woman-owned requirement.",
      },
      {
        icon: "layers",
        title: "Submission, sealed governs",
        desc: "Both a sealed physical bid and a SOVRA portal entry are asked for; if they differ, the sealed physical bid controls. Hand delivery to Liverpool only.",
      },
    ],
  },
  agency: {
    modHead: {
      eyebrow: "Agency context",
      h2: "Who is buying, and who signs it.",
      p: "",
    },
    photo: "/assets/sled-case-studies/ocmboces/hero.png",
    photoAlt: "OCM BOCES, Onondaga County, New York",
    body: "OCM BOCES is a New York State Board of Cooperative Educational Services serving Onondaga, Cortland, and Madison counties, under District Superintendent Dr. Matthew Cook. It serves 23 component school districts including Syracuse City, and the Central New York Regional Information Center co-owns the requirement. <strong>Terri Hewitt, Assistant School Purchasing Officer,</strong> is the named contact and signer; the final award is a Board of Education function. The prime, not Techtiz, handles every interaction.",
    stats: [
      {
        n: "23",
        l: "Component districts",
      },
      {
        n: "146",
        l: "Line items",
      },
      {
        n: "3 BOCES",
        l: "Cooperative reach",
      },
    ],
  },
  techtizApproach: {
    modHead: {
      eyebrow: "How Techtiz fits",
      h2: "The bid-prep engine, behind your firm.",
      p: "Techtiz prepares the bid; the prime sources, signs, and submits it. Techtiz never holds reseller authorization, never holds the HP Outlet ID, and never contacts OCM BOCES.",
    },
    cards: [
      {
        title: "NDA before any data",
        desc: "An NDA naming the prime and Techtiz, governed by Michigan law, naming the City as a third-party beneficiary, before any non-public data moves.",
      },
      {
        title: "Response sheet & compliance ",
        desc: "The 146-line pricing build, the HP Retail versus C-SKU check, the reseller and reference-letter tracking, and the compliance matrix.",
      },
      {
        title: "Packet & final QA",
        desc: "Document assembly with No Bid marked on every unsourced line, packaged for the prime's review.",
      },
      {
        title: "Your firm owns the bid",
        desc: "Reseller letters, the HP Outlet ID, signatures, sealed submission, delivery, and all agency contact stay with the prime.",
      },
    ],
    lockedNote:
      "Prime name, engagement fee, and bid pricing stay under NDA. Techtiz never contacts OCM BOCES or signs a certification.",
    liveOnly: true,
  },
  cta: {
    live: {
      eyebrow: "Bidding RFB-227-05? The window is open.",
      h2: "Request the full bid-prep pack.",
      body: "The RFB decode, the 146-line pricing build, the compliance and document checklist, the HP gate verification, and the 82-firm field map. A US partner manager replies within one business day, under a mutual NDA, never agency-facing.",
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
      body: "Techtiz supported a reseller bid on a New York BOCES computer-supplies renewal. The prime, the exact scope, and the pricing stay under NDA. A US partner manager replies within one business day, never agency-facing.",
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
