import { ROUTES, serviceSlug } from '../routes';

export type ServiceNavItem = {
  name: string;
  slug: string;
  href: string;
};

export type ServiceNavCategory = {
  id: string;
  megaKey: string;
  title: string;
  description: string;
  icon: string;
  landingSlug: string;
  landingHref: string;
  subs: ServiceNavItem[];
};

/** Single source for services mega-menu, footer, homepage cards, and nav.js (legacy navigation.ts). */
export const SERVICE_CATEGORIES: ServiceNavCategory[] = [
  {
    id: 'development',
    megaKey: 'development',
    title: 'Development',
    description:
      'Build robust, scalable digital products designed to grow with your business.',
    icon: '/images/custom-software.png',
    landingSlug: 'custom-software',
    landingHref: serviceSlug('custom-software'),
    subs: [
      { name: 'Custom Software', slug: 'custom-software', href: serviceSlug('custom-software') },
      { name: 'Mobile Apps', slug: 'mobile-apps', href: serviceSlug('mobile-apps') },
      {
        name: 'Low code / No-code Dev',
        slug: 'low-code-development',
        href: serviceSlug('low-code-development'),
      },
      { name: 'Vibe code Dev', slug: 'vibe-code-dev', href: serviceSlug('vibe-code-dev') },
    ],
  },
  {
    id: 'ai',
    megaKey: 'ai',
    title: 'AI & Intelligence',
    description:
      'Turn data into decisions with intelligent AI systems that learn, predict, and optimize.',
    icon: '/images/ai-consultation.png',
    landingSlug: 'ai-consultation',
    landingHref: serviceSlug('ai-consultation'),
    subs: [
      { name: 'AI Agent', slug: 'ai-agent', href: serviceSlug('ai-agent') },
      {
        name: 'Machine Learning & Predictive Intelligence',
        slug: 'machine-learning-predictive-intelligence',
        href: serviceSlug('machine-learning-predictive-intelligence'),
      },
      { name: 'AI Consultation', slug: 'ai-consultation', href: serviceSlug('ai-consultation') },
      {
        name: 'GenAI / LLM / RAG Solutions',
        slug: 'genai-llm-rag-solutions',
        href: serviceSlug('genai-llm-rag-solutions'),
      },
    ],
  },
  {
    id: 'automation',
    megaKey: 'automation',
    title: 'Automation & AI Solutions',
    description:
      'Streamline workflows and boost productivity with smart automation built for humans.',
    icon: '/images/ai-automation.png',
    landingSlug: 'sales-automation',
    landingHref: serviceSlug('sales-automation'),
    subs: [
      { name: 'Sales Automation', slug: 'sales-automation', href: serviceSlug('sales-automation') },
      {
        name: 'Customer Service Automation',
        slug: 'customer-service-automation',
        href: serviceSlug('customer-service-automation'),
      },
      { name: 'CRM Automation', slug: 'crm-automation', href: serviceSlug('crm-automation') },
      {
        name: 'Marketing Automation',
        slug: 'marketing-automation',
        href: serviceSlug('marketing-automation'),
      },
      { name: 'Lead Generation', slug: 'lead-generation', href: serviceSlug('lead-generation') },
      { name: 'SEO Automation', slug: 'seo-automation', href: serviceSlug('seo-automation') },
      {
        name: 'AI Appointment Scheduling',
        slug: 'ai-appointment-scheduling',
        href: serviceSlug('ai-appointment-scheduling'),
      },
    ],
  },
  {
    id: 'transformation',
    megaKey: 'transformation',
    title: 'Digital Transformation',
    description:
      'Modernize legacy systems and operations with tailored, future-ready digital strategies.',
    icon: '/images/ecommerce.png',
    landingSlug: 'innovation-digital-evolution',
    landingHref: serviceSlug('innovation-digital-evolution'),
    subs: [
      {
        name: 'Innovation & Digital Evolution',
        slug: 'innovation-digital-evolution',
        href: serviceSlug('innovation-digital-evolution'),
      },
      {
        name: 'System Modernization & Optimization',
        slug: 'system-modernization-optimization',
        href: serviceSlug('system-modernization-optimization'),
      },
      {
        name: 'Automation & Workflow Transformation',
        slug: 'automation-workflow-transformation',
        href: serviceSlug('automation-workflow-transformation'),
      },
      {
        name: 'Data Intelligence & Insight Systems',
        slug: 'data-intelligence-insight-systems',
        href: serviceSlug('data-intelligence-insight-systems'),
      },
      {
        name: 'Strategic Enablement & Change Management',
        slug: 'strategic-enablement-change-management',
        href: serviceSlug('strategic-enablement-change-management'),
      },
    ],
  },
  {
    id: 'ux',
    megaKey: 'ux',
    title: 'UX Design / Enablement',
    description: 'Craft intuitive experiences that connect people, products, and performance.',
    icon: '/images/ui-ux.png',
    landingSlug: 'ui-ux-design',
    landingHref: serviceSlug('ui-ux-design'),
    subs: [
      {
        name: 'Monitoring & Optimization',
        slug: 'monitoring-optimization',
        href: serviceSlug('monitoring-optimization'),
      },
      { name: 'UI/UX Design', slug: 'ui-ux-design', href: serviceSlug('ui-ux-design') },
    ],
  },
];

/** @deprecated Use `serviceSlug` from `routes.ts` */
export function servicePath(slug: string): string {
  return serviceSlug(slug);
}

export const SERVICE_CATEGORIES_NAV = SERVICE_CATEGORIES;

/** Mega-menu payload for nav.js */
export const SERVICES_MEGA_NAV_DATA = Object.fromEntries(
  SERVICE_CATEGORIES.map((cat) => [
    cat.megaKey,
    {
      title: cat.title,
      desc: cat.description,
      icon: cat.icon,
      subs: cat.subs.map((s) => ({ name: s.name, href: s.href })),
      landingHref: cat.landingHref,
    },
  ]),
);

/** Flat list for services hub cards grouped by category */
export const HOME_CAPABILITIES_FROM_NAV = SERVICE_CATEGORIES.map((cat) => ({
  title: cat.title,
  subtitle: cat.title,
  image:
    cat.id === 'development'
      ? '/images/capabilities/custom-software-development.png'
      : cat.id === 'ai'
        ? '/images/capabilities/ai-intelligence.png'
        : cat.id === 'automation'
          ? '/images/capabilities/automation-ai-solutions.png'
          : cat.id === 'transformation'
            ? '/images/capabilities/digital-transformation.png'
            : '/images/capabilities/ux-design-enablement.png',
  mainText: cat.title,
  url: cat.landingHref,
  serviceLinks: cat.subs.map((s) => ({
    name: s.name,
    href: s.href,
  })),
}));
