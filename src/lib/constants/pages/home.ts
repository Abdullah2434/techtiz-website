import { HOME_CAPABILITIES_FROM_NAV } from "../nav/services";

export const HOME_SEO = {
  title: "Techtiz | AI-native engineering studio",
  description:
    "Techtiz is an AI-native engineering studio for custom software, AI automation, and adaptive systems—plus a U.S. SLED technical subcontractor for state, local, and education prime contractors.",
  canonicalPath: "/",
  ogImage: "/assets/capitol.png",
} as const;

export const HOME_HERO = {
  eyebrow: "Techtiz · AI-native engineering",
  sector: {
    international: "International teams",
    sled: { label: "U.S. SLED primes", href: "/us-sled/" },
  },
  heading: "Reinvent your business with",
  headingAccent: "AI systems",
  headingEnd: "that adapt and improve.",
  body: "We design automation systems that reduce busywork, enhance clarity, and support your growth. An AI-native engineering studio for ambitious product teams—and a technical subcontractor to U.S. SLED prime contractors.",
  cta: { label: "Talk to an Expert", href: "/contact/" },
} as const;

export const FEATURED_CLIENTS = [
  { name: "Alkhazan Food", image: "/images/clientfeature/alkhazan-food.png" },
  { name: "FT Play", image: "/images/clientfeature/ft-play.png" },
  { name: "Orient Care", image: "/images/clientfeature/orient-care.png" },
  { name: "Dashboard Earth", image: "/images/clientfeature/dashboard.png" },
  {
    name: "Epic",
    image: "/images/clientfeature/epic.png",
    imageClass: "max-w-[110px]",
  },
  {
    name: "G-Tech",
    image: "/images/clientfeature/g-tech.png",
    imageClass: "max-w-[110px]",
  },
  { name: "LinkedGolf", image: "/images/case-studies/c20-logo.png" },
  { name: "KH Medical", image: "/images/clientfeature/kh-medical.png" },
  { name: "TokenMart", image: "/images/clientfeature/tokenmart.png" },
] as const;

const HOME_CAPABILITY_COPY = [
  {
    title: "Building Future Ready Products",
    subtitle: "Software Development",
    mainText: "Building Future Ready Products",
  },
  {
    title: "AI & Intelligence",
    subtitle: "AI & Intelligence",
    mainText: "Smarter Decisions Intelligent Systems",
  },
  {
    title: "Automation & AI Solutions",
    subtitle: "Automation & AI Solutions",
    mainText: "Automate to Achieve More",
  },
  {
    title: "Digital Transformation",
    subtitle: "Digital Transformation",
    mainText: "Reimagine Reinvent",
  },
  {
    title: "UX Design / Enablement",
    subtitle: "UX Design / Enablement",
    mainText: "Design That Drives Experience",
  },
] as const;

export const HOME_CAPABILITIES = HOME_CAPABILITY_COPY.map((copy, index) => {
  const nav = HOME_CAPABILITIES_FROM_NAV[index];
  return {
    ...copy,
    image: nav.image,
    url: nav.url,
    serviceLinks: nav.serviceLinks,
  };
});

export const INDUSTRY_TABS = [
  { id: "healthcare", label: "Healthcare" },
  { id: "marketing", label: "Digital Marketing" },
  { id: "realestate", label: "Real Estate" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "logistics", label: "Logistics" },
  { id: "education", label: "Education" },
] as const;

export const INDUSTRIES_DATA: Record<
  string,
  {
    title: string;
    desc: string;
    badges: { strong: string; rest: string }[];
    chHead: string;
    challenges: { title: string; pain: string }[];
    cta: string;
    ctaSub: string;
    icon: string;
  }
> = {
  healthcare: {
    icon: "heart",
    title: "Healthcare insights",
    desc: "Modernize care delivery for providers, telemedicine platforms, and medical software teams. AI automation, intelligent records, and patient-grade reliability.",
    badges: [
      { strong: "100%", rest: " HIPAA & GDPR-compliant" },
      { strong: "2× faster", rest: " patient onboarding" },
    ],
    chHead: "What slows clinical teams down.",
    challenges: [
      {
        title: "Admin overhead steals clinical hours",
        pain: "Charting, scheduling, and billing eat the day before a single patient is seen.",
      },
      {
        title: "Patient data scattered across systems",
        pain: "EMR, scheduling, and lab portals never talk; nurses become integration code.",
      },
      {
        title: "24/7 support without staffing the night shift",
        pain: "Patient inquiries hit at 2am; phone trees are a liability, not a service.",
      },
    ],
    cta: "Talk to a healthcare specialist.",
    ctaSub:
      "A 30-minute scoping call, NDA-first, with the engineer who would lead delivery.",
  },
  marketing: {
    icon: "growth",
    title: "Digital Marketing insights",
    desc: "Attribution-clear growth platforms, lifecycle automation, and AI-powered campaign analytics for performance teams that need answers, not dashboards.",
    badges: [
      { strong: "Multi-channel", rest: " attribution" },
      { strong: "Real-time", rest: " campaign analytics" },
    ],
    chHead: "What slows growth teams down.",
    challenges: [
      {
        title: "Attribution data lives in 8 dashboards",
        pain: "Stitching channels by hand burns analyst hours; signal arrives a week late.",
      },
      {
        title: "Manual reporting eats the analyst",
        pain: "CSV exports, deck builds, screenshots; the actual analysis ships on Friday.",
      },
      {
        title: "Performance drift goes unnoticed",
        pain: "Campaigns decay slowly; no one is watching the right metric on the right day.",
      },
    ],
    cta: "Talk to a growth specialist.",
    ctaSub:
      "A 30-minute scoping call with the engineer who would build your attribution stack.",
  },
  realestate: {
    icon: "house",
    title: "Real Estate insights",
    desc: "Listings platforms, deal rooms, and CRM systems for brokerages and proptech. Multi-source inventory sync, lead routing, and predictive valuation.",
    badges: [
      { strong: "MLS-aware", rest: " integrations" },
      { strong: "1-click", rest: " deal rooms" },
    ],
    chHead: "What slows brokerages down.",
    challenges: [
      {
        title: "Listings out-of-sync across portals",
        pain: "MLS, Zillow, your site, and the brokerage CRM all show different prices.",
      },
      {
        title: "Lead routing leaks on the weekend",
        pain: "Inquiries land Saturday at 11pm; on Monday the lead is cold or already with a competitor.",
      },
      {
        title: "Valuation models drift on stale data",
        pain: "Predictions trained six months ago no longer match the neighborhood.",
      },
    ],
    cta: "Talk to a real-estate specialist.",
    ctaSub:
      "A 30-minute scoping call with the engineer who would lead delivery.",
  },
  ecommerce: {
    icon: "cart",
    title: "E-commerce insights",
    desc: "Shopify Plus, headless storefronts, OMS integrations, and conversion optimization. From sketch to scale with the same team across the arc.",
    badges: [
      { strong: "Headless", rest: " + Shopify Plus" },
      { strong: "+22%", rest: " conversion lift, avg." },
    ],
    chHead: "What slows commerce teams down.",
    challenges: [
      {
        title: "Headless migration without breaking SEO",
        pain: "Replatforming loses the catalog rank you spent two years earning.",
      },
      {
        title: "Inventory drift across channels",
        pain: "Shopify, Amazon, retail POS each tell a different story about the same SKU.",
      },
      {
        title: "Checkout drops on slow PDPs",
        pain: "Page weight, third-party scripts, and image bloat cut conversion before the cart loads.",
      },
    ],
    cta: "Talk to a commerce specialist.",
    ctaSub:
      "A 30-minute scoping call with the engineer who would lead delivery.",
  },
  logistics: {
    icon: "truck",
    title: "Logistics insights",
    desc: "Routing engines, WMS, and visibility platforms for operators and 3PLs. Real-time tracking, carrier integrations, and ML routing optimization.",
    badges: [
      { strong: "Real-time", rest: " visibility" },
      { strong: "ML routing", rest: " optimization" },
    ],
    chHead: "What slows operators down.",
    challenges: [
      {
        title: "Routing static across volatile fuel costs",
        pain: "Plans built Monday no longer pencil by Wednesday; margin disappears mid-route.",
      },
      {
        title: "WMS and TMS speak different dialects",
        pain: "Inventory and transport ship blind to each other; cross-dock waits get expensive fast.",
      },
      {
        title: "Carrier visibility gaps in last-mile",
        pain: "You see the truck leave, you see it deliver, you see nothing in between.",
      },
    ],
    cta: "Talk to a logistics specialist.",
    ctaSub:
      "A 30-minute scoping call with the engineer who would lead delivery.",
  },
  education: {
    icon: "grad",
    title: "Education insights",
    desc: "LMS, LXP, and assessment platforms for institutions and edtech. Adaptive learning, accessibility-first interfaces, and student engagement analytics.",
    badges: [
      { strong: "WCAG 2.2 AA", rest: " conformance" },
      { strong: "Adaptive", rest: " learning models" },
    ],
    chHead: "What slows institutions down.",
    challenges: [
      {
        title: "Engagement drops mid-cohort",
        pain: "Week 4 is the cliff; nobody sees the at-risk learner until grades post.",
      },
      {
        title: "Accessibility retrofits ship late",
        pain: "WCAG audits arrive 30 days before launch; remediation eats the runway.",
      },
      {
        title: "Assessment data silos by department",
        pain: "Reading, math, and SEL each in their own platform; no joined-up student view.",
      },
    ],
    cta: "Talk to an education specialist.",
    ctaSub:
      "A 30-minute scoping call with the engineer who would lead delivery.",
  },
};

export const WHY_TABS = [
  {
    id: "expert",
    num: "01",
    title: "Expert Team",
    tag: "Senior-led delivery at every stage",
  },
  {
    id: "ontime",
    num: "02",
    title: "On-Time Delivery",
    tag: "Predictable timelines, zero surprises",
  },
  {
    id: "scalable",
    num: "03",
    title: "Scalable Solutions",
    tag: "Built to grow, not to rewrite",
  },
  {
    id: "ongoing",
    num: "04",
    title: "Ongoing Support",
    tag: "We don't disappear after launch",
  },
] as const;

export const WHY_DATA: Record<
  string,
  {
    eyebrow: string;
    title: string;
    desc: string;
    statN: string;
    statL: string;
    highlights: string[];
  }
> = {
  expert: {
    eyebrow: "Senior-led delivery at every stage",
    title: "Expert Team",
    desc: "Our team isn't junior devs learning on your dime. Every project is led by senior engineers and designers with 8+ years across fintech, SaaS, healthcare, and e-commerce.",
    statN: "8+",
    statL: "Avg. years experience",
    highlights: [
      "Senior-led architecture & delivery",
      "Cross-domain industry expertise",
      "UX-first engineering culture",
      "Code reviews on every commit",
    ],
  },
  ontime: {
    eyebrow: "Predictable timelines, zero surprises",
    title: "On-Time Delivery",
    desc: "We run tight agile sprints with weekly demos and transparent reporting. You always know exactly where the project stands; no ambiguity, no last-minute delays.",
    statN: "97%",
    statL: "On-time delivery rate",
    highlights: [
      "Weekly milestone demos",
      "Transparent scope & burn-down",
      "Predictable sprint shipping",
      "Risk flagging before it's a problem",
    ],
  },
  scalable: {
    eyebrow: "Built to grow, not to rewrite",
    title: "Scalable Solutions",
    desc: "We architect systems that handle 10x your current load from day one. Modular, well-documented codebases mean you never face a costly ground-up rewrite.",
    statN: "10x",
    statL: "Scale-ready from launch",
    highlights: [
      "Modular component architecture",
      "Performance budgets & monitoring",
      "Future-ready tech stack",
      "Horizontal scaling built-in",
    ],
  },
  ongoing: {
    eyebrow: "We don't disappear after launch",
    title: "Ongoing Support",
    desc: "Your product's journey doesn't end at deployment. We provide continuous monitoring, bug-fixing, performance tuning, and iterative improvements as your business evolves.",
    statN: "99.9%",
    statL: "Uptime guarantee",
    highlights: [
      "24/7 uptime monitoring",
      "Priority bug resolution",
      "Continuous performance tuning",
      "Quarterly strategy reviews",
    ],
  },
};

export const DIGITAL_FOUNDATION = {
  title: "Crafting Scalable Digital Foundations for Businesses",
  description:
    "Develop, evaluate, and implement AI agents using a robust visual interface tailored for engineering and innovation teams.",
  cta: {
    href: "/contact/",
    labelDesktop: "Book a Free Consultation",
    labelMobile: "Book a Consultation",
  },
  bgImage: "/images/digital-section-bg.png",
  rating: {
    href: "https://clutch.co/profile/techtiz-0",
    image: "/images/rating-image.png",
    alt: "Reviewed on Clutch — 5.0 rating",
    width: 215,
    height: 59,
  },
  stats: [
    { id: "years", value: "5+", label: "Years of Experience" },
    { id: "satisfaction", value: "98%", label: "Client Satisfaction" },
    { id: "projects", value: "180+", label: "Projects Completed" },
    { id: "clients", value: "200+", label: "Clients Served" },
  ],
} as const;

export const CASE_STUDIES = [
  {
    variant: "t1" as const,
    stamp: "LinkedGolf · Hero shot",
    filename: "[ booking-sdk_v4.figma ]",
    meta: ["Marketplace", "iOS", "+191"],
    title: "LinkedGolf",
    challenge: "Tee-time inventory fragmented across 1,200+ operators.",
    solution:
      "Unified marketplace plus a booking SDK with realtime supply sync.",
    outcome: "+312% bookings · 4.8★ App Store · 11s avg checkout",
    href: "/us-sled/case-studies/",
  },
  {
    variant: "t2" as const,
    stamp: "Dashboard.Earth · Hero shot",
    filename: "[ lakehouse_explorer.png ]",
    meta: ["Climate", "Analytics", "+27"],
    title: "Dashboard.Earth",
    challenge: "Climate teams stitching 40+ data sources by hand.",
    solution:
      "Lakehouse plus an LLM-driven exploration UI on top of curated sets.",
    outcome: "-87% time-to-insight · adopted by 14 NGOs",
    href: "/us-sled/case-studies/",
  },
  {
    variant: "t3" as const,
    stamp: "Capsule Lab · Hero shot",
    filename: "[ longitudinal_viewer.mp4 ]",
    meta: ["Healthtech", "Web", "+52"],
    title: "Capsule Lab",
    challenge: "Lab results delivered as static PDFs, low patient engagement.",
    solution: "Interactive longitudinal viewer with AI explanations.",
    outcome: "4.2× weekly active · NPS +38",
    href: "/us-sled/case-studies/",
  },
] as const;

export const FINAL_CTA = {
  eyebrow: "Start the conversation",
  heading: "Have an idea worth building?",
  headingAccent: "Let's pressure-test it.",
  body: "A 30-minute call with a senior engineer. No deck, no pitch. We'll sketch the system on the call.",
  form: {
    action: "/contact/",
    emailName: "email",
    emailLabel: "Your email",
    emailPlaceholder: "you@company.com",
    submitLabel: "Book a Consultation",
  },
  footnotePrefix: "Or email",
} as const;

export const ENGAGE_SECTION = {
  eyebrow: "How we work",
  heading: "Three ways to engage. One bar for quality.",
  sub: "Pick the commercial model that matches your scope certainty—from fixed delivery to an embedded squad.",
  cta: {
    label: "Talk through your model →",
    href: "/contact/",
  },
} as const;

export const ENGAGE_MODELS = [
  {
    num: "01 · Fixed scope",
    title: "Fixed Scope",
    desc: "Defined deliverables, milestone billing. Predictable from day one.",
    best: "Well-scoped MVPs and rebuilds with clear acceptance criteria.",
    feature: false,
  },
  {
    num: "02 · Time & materials",
    title: "Time & Materials",
    desc: "Weekly sprints, billed against effort. Steerable as scope evolves.",
    best: "Evolving scope, R&D, and most AI work where the spec is a moving target.",
    feature: true,
    badge: "Most popular",
  },
  {
    num: "03 · Retainer",
    title: "Retainer",
    desc: "Embedded squad, predictable monthly spend. Roadmap-owning team.",
    best: "Long-term roadmap ownership across multiple workstreams.",
    feature: false,
  },
] as const;
