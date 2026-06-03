export const SERVICES_DATA = {
  development: {
    title: 'Development',
    desc: 'Build robust, scalable digital products designed to grow with your business.',
    subs: ['Custom Software', 'Mobile Apps', 'Low code / No-code Dev', 'Vibe code Dev'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"></rect><path d="M8 21h8M12 17v4"></path></svg>`,
  },
  ai: {
    title: 'AI & Intelligence',
    desc: 'LLM systems, RAG, agents, and ML pipelines that ship and stay in production.',
    subs: ['Agent platforms', 'RAG pipelines', 'Fine-tuning', 'Evals & observability'],
  },
  automation: {
    title: 'Automation & AI Solutions',
    desc: 'Internal tools and workflows that pay for themselves.',
    subs: ['RPA', 'Workflow engines', 'Integrations', 'Ops automation'],
  },
  transformation: {
    title: 'Digital Transformation',
    desc: 'Modernize legacy stacks without halting the business.',
    subs: ['Strategy', 'Migrations', 'Data platforms', 'Change management'],
  },
  ux: {
    title: 'UX Design / Enablement',
    desc: 'Research-backed interfaces that feel inevitable.',
    subs: ['User research', 'Design systems', 'Prototyping', 'Brand'],
  },
} as const;

export const INDUSTRIES_DATA = {
  healthcare: {
    title: 'Healthcare',
    desc: 'Techtiz streamlines admin tasks for healthcare teams, enhancing efficiency and safety.',
    subs: ['AI Appointment Management', 'AI-Powered Communication', 'Reporting Optimization', 'Patient Records'],
  },
  marketing: {
    title: 'Digital Marketing',
    desc: 'Growth platforms, attribution, and content systems for performance teams.',
    subs: ['Attribution', 'Campaign analytics', 'Content systems', 'Lifecycle ops'],
  },
  realestate: {
    title: 'Real Estate',
    desc: 'Listings, CRM, and transaction platforms for brokerages and proptech.',
    subs: ['Listings platforms', 'CRM', 'Deal rooms', 'Tenant portals'],
  },
  ecommerce: {
    title: 'E-commerce',
    desc: 'Shopify, headless storefronts, OMS integrations, and conversion ops.',
    subs: ['Shopify Plus', 'Headless', 'OMS integrations', 'Conversion'],
  },
  logistics: {
    title: 'Logistics & Supply Chain',
    desc: 'Routing, WMS, and visibility platforms for operators and 3PLs.',
    subs: ['Routing', 'WMS', 'Visibility', 'Carrier integrations'],
  },
  education: {
    title: 'Education',
    desc: 'LMS, LXP, and assessment tools for institutions and edtech.',
    subs: ['LMS', 'LXP', 'Assessment', 'Student platforms'],
  },
} as const;

export const PRIMARY_NAV = [
  { label: 'About Us', href: '/' },
  { label: 'Services', mega: 'services' },
  { label: 'Industries', mega: 'industries' },
  { label: 'Engagement Examples', href: '/us-sled/case-studies/' },
  { label: 'Careers', href: '/' },
] as const;

export const FOOTER_COLUMNS = [
  {
    heading: 'SLED Partnerships',
    links: [
      { label: 'SLED Hub', href: '/us-sled/' },
      { label: 'Capabilities', href: '/us-sled/capabilities/' },
      { label: 'How We Engage', href: '/us-sled/how-we-engage/' },
      { label: 'Operating Model', href: '/us-sled/operating-model/' },
      { label: 'Engagement Examples', href: '/us-sled/case-studies/' },
      { label: 'Procurement Vehicles', href: '/us-sled/#vehicles' },
      { label: 'Capability Statement', href: '/us-sled/capability-statement/' },
      { label: 'SLED Contact', href: '/us-sled/contact/' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Development', href: '/' },
      { label: 'AI & Intelligence', href: '/' },
      { label: 'Automation', href: '/' },
      { label: 'Digital Transformation', href: '/' },
      { label: 'UX Design', href: '/' },
    ],
  },
  {
    heading: 'Industries',
    links: [
      { label: 'Healthcare', href: '/' },
      { label: 'Digital Marketing', href: '/' },
      { label: 'Real Estate', href: '/' },
      { label: 'E-commerce', href: '/' },
      { label: 'Logistics', href: '/' },
      { label: 'Education', href: '/' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/' },
      { label: 'Careers', href: '/' },
      { label: 'Engagement Examples', href: '/us-sled/case-studies/' },
      { label: 'Press', href: '/' },
      { label: 'Contact', href: '/us-sled/contact/' },
    ],
  },
] as const;
