/** Industries mega-menu data (legacy navigation.ts). Routes are placeholders until industries migration. */

export const INDUSTRY_CATEGORIES = [
  {
    megaKey: 'healthcare',
    title: 'Healthcare',
    description:
      'Techtiz streamlines admin tasks for healthcare teams, enhancing efficiency and safety.',
    icon: '/images/healthcare.png',
    subs: [
      { name: 'AI Appointment Management', desc: 'Smart scheduling and secure patient data systems.', href: '/' },
      { name: 'AI-Powered Communication', desc: 'Chatbots and voice assistants for patient engagement.', href: '/' },
      { name: 'Reporting Optimization', desc: 'Automate data entry and billing workflows.', href: '/' },
    ],
  },
  {
    megaKey: 'marketing',
    title: 'Digital Marketing',
    description:
      'Techtiz boosts marketing with AI automation, enhancing engagement and performance.',
    icon: '/images/ecommerce-2.png',
    subs: [
      { name: 'AI Campaign Optimization', desc: 'Refine targeting and creatives with insights.', href: '/' },
      { name: 'AI Content & Communication', desc: 'Automate content and personalized messaging.', href: '/' },
      { name: 'Reporting Optimization', desc: 'Streamline marketing analytics and reporting.', href: '/' },
    ],
  },
  {
    megaKey: 'realestate',
    title: 'Real Estate',
    description: 'Digitizing real estate operations and accelerating transactions.',
    icon: '/images/fintech.png',
    subs: [
      { name: 'AI Lead Management', desc: 'Smart routing and predictive lead scoring.', href: '/' },
      { name: 'Virtual Assistance & Communication', desc: 'AI assistants for inquiries and viewings.', href: '/' },
      { name: 'Automated Documentation & Insights', desc: 'Streamline contracts and paperwork.', href: '/' },
    ],
  },
  {
    megaKey: 'ecommerce',
    title: 'E-commerce',
    description: 'Personalized shopping, smart inventory, and seamless automation.',
    icon: '/images/ecommerce-2.png',
    subs: [
      { name: 'AI Product & Inventory Management', desc: 'Automate SKU updates and stock forecasting.', href: '/' },
      { name: 'AI Customer Engagement', desc: 'Recommendations and chatbots for retention.', href: '/' },
      { name: 'Operational Reporting Automation', desc: 'Real-time sales and performance dashboards.', href: '/' },
    ],
  },
  {
    megaKey: 'logistics',
    title: 'Logistics & Supply Chain',
    description: 'AI-driven clarity and control across complex supply networks.',
    icon: '/images/logistics.png',
    subs: [
      { name: 'AI Tracking & Forecasting', desc: 'Monitor shipments and predict delays.', href: '/' },
      { name: 'Smart Communication Systems', desc: 'Driver apps and chatbots for operations.', href: '/' },
      { name: 'Workflow & Reporting Automation', desc: 'Digitize logs, forms, and reports.', href: '/' },
    ],
  },
  {
    megaKey: 'education',
    title: 'Education',
    description: 'Intelligent systems for teaching, learning, and engagement.',
    icon: '/images/education.png',
    subs: [
      { name: 'AI Learning Personalization', desc: 'Adaptive lessons tailored to student progress.', href: '/' },
      { name: 'AI-Powered Communication', desc: 'Chatbots for student queries and resources.', href: '/' },
      { name: 'Academic & Admin Reporting Automation', desc: 'Automate attendance and grading.', href: '/' },
    ],
  },
] as const;

export const INDUSTRIES_MEGA_NAV_DATA = Object.fromEntries(
  INDUSTRY_CATEGORIES.map((cat) => [
    cat.megaKey,
    {
      title: cat.title,
      desc: cat.description,
      icon: cat.icon,
      subs: cat.subs.map((s) => ({ name: s.name, href: s.href, desc: s.desc })),
    },
  ]),
);
