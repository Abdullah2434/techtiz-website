import { ROUTES, industrySlug } from '../routes';

/** Display-only bullets in mega menu right panel (not separate routes). */
export type IndustryNavSub = {
  name: string;
  desc: string;
};

export type IndustryNavCategory = {
  id: string;
  megaKey: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
  landingHref: string;
  subs: IndustryNavSub[];
};

/** Single source for industries mega-menu, footer, and nav.js (legacy navigation.ts). */
export const INDUSTRY_CATEGORIES: IndustryNavCategory[] = [
  {
    id: 'healthcare',
    megaKey: 'healthcare',
    title: 'Healthcare',
    description:
      'Techtiz streamlines admin tasks for healthcare teams, enhancing efficiency and safety.',
    icon: '/images/healthcare.png',
    slug: 'healthcare',
    landingHref: industrySlug('healthcare'),
    subs: [
      {
        name: 'AI Appointment Management',
        desc: 'Smart scheduling and secure patient data systems.',
      },
      {
        name: 'AI-Powered Communication',
        desc: 'Chatbots and voice assistants for patient engagement.',
      },
      {
        name: 'Reporting Optimization',
        desc: 'Automate data entry and billing workflows.',
      },
    ],
  },
  {
    id: 'marketing',
    megaKey: 'marketing',
    title: 'Digital Marketing',
    description:
      'Techtiz boosts marketing with AI automation, enhancing engagement and performance.',
    icon: '/images/ecommerce-2.png',
    slug: 'digital-marketing',
    landingHref: industrySlug('digital-marketing'),
    subs: [
      {
        name: 'AI Campaign Optimization',
        desc: 'Refine targeting and creatives with insights.',
      },
      {
        name: 'AI Content & Communication',
        desc: 'Automate content and personalized messaging.',
      },
      {
        name: 'Reporting Optimization',
        desc: 'Streamline marketing analytics and reporting.',
      },
    ],
  },
  {
    id: 'realestate',
    megaKey: 'realestate',
    title: 'Real Estate',
    description: 'Digitizing real estate operations and accelerating transactions.',
    icon: '/images/fintech.png',
    slug: 'real-estate',
    landingHref: industrySlug('real-estate'),
    subs: [
      {
        name: 'AI Lead Management',
        desc: 'Smart routing and predictive lead scoring.',
      },
      {
        name: 'Virtual Assistance & Communication',
        desc: 'AI assistants for inquiries and viewings.',
      },
      {
        name: 'Automated Documentation & Insights',
        desc: 'Streamline contracts and paperwork.',
      },
    ],
  },
  {
    id: 'ecommerce',
    megaKey: 'ecommerce',
    title: 'E-commerce',
    description: 'Personalized shopping, smart inventory, and seamless automation.',
    icon: '/images/ecommerce-2.png',
    slug: 'e-commerce',
    landingHref: industrySlug('e-commerce'),
    subs: [
      {
        name: 'AI Product & Inventory Management',
        desc: 'Automate SKU updates and stock forecasting.',
      },
      {
        name: 'AI Customer Engagement',
        desc: 'Recommendations and chatbots for retention.',
      },
      {
        name: 'Operational Reporting Automation',
        desc: 'Real-time sales and performance dashboards.',
      },
    ],
  },
  {
    id: 'logistics',
    megaKey: 'logistics',
    title: 'Logistics & Supply Chain',
    description: 'AI-driven clarity and control across complex supply networks.',
    icon: '/images/logistics.png',
    slug: 'logistics-supply-chain',
    landingHref: industrySlug('logistics-supply-chain'),
    subs: [
      {
        name: 'AI Tracking & Forecasting',
        desc: 'Monitor shipments and predict delays.',
      },
      {
        name: 'Smart Communication Systems',
        desc: 'Driver apps and chatbots for operations.',
      },
      {
        name: 'Workflow & Reporting Automation',
        desc: 'Digitize logs, forms, and reports.',
      },
    ],
  },
  {
    id: 'education',
    megaKey: 'education',
    title: 'Education',
    description: 'Intelligent systems for teaching, learning, and engagement.',
    icon: '/images/education.png',
    slug: 'education',
    landingHref: industrySlug('education'),
    subs: [
      {
        name: 'AI Learning Personalization',
        desc: 'Adaptive lessons tailored to student progress.',
      },
      {
        name: 'AI-Powered Communication',
        desc: 'Chatbots for student queries and resources.',
      },
      {
        name: 'Academic & Admin Reporting Automation',
        desc: 'Automate attendance and grading.',
      },
    ],
  },
];

export const INDUSTRY_CATEGORIES_NAV = INDUSTRY_CATEGORIES.map((cat) => ({
  title: cat.title,
  landingHref: cat.landingHref,
}));

export const INDUSTRIES_MEGA_NAV_DATA = Object.fromEntries(
  INDUSTRY_CATEGORIES.map((cat) => [
    cat.megaKey,
    {
      title: cat.title,
      desc: cat.description,
      icon: cat.icon,
      landingHref: cat.landingHref,
      subs: cat.subs.map((s) => ({ name: s.name, desc: s.desc })),
    },
  ]),
);

export const INDUSTRIES_HUB_CTA = {
  label: 'View All industries',
  href: ROUTES.industries,
} as const;

/** Alias for hub/card links (matches `servicePath` in services nav). */
export function industryPath(slug: string): string {
  return industrySlug(slug);
}
