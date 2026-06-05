import { SITE } from '../constants/site';
import { SITELINK_NAV } from './sitelinks';
import type { BreadcrumbCrumb, JsonLdNode } from './types';

const SCHEMA = 'https://schema.org';

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE.url}${normalized}`;
}

export function organizationJsonLd(): JsonLdNode {
  return {
    '@context': SCHEMA,
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    email: SITE.email.contact,
    logo: absoluteUrl(SITE.logo.png),
    sameAs: Object.values(SITE.socials),
    telephone: SITE.phone.tel,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: SITE.email.contact,
      telephone: SITE.phone.tel,
      availableLanguage: ['English'],
    },
    address: [
      {
        '@type': 'PostalAddress',
        name: SITE.addresses.lahore.label,
        streetAddress: SITE.addresses.lahore.line,
        addressCountry: 'PK',
      },
      {
        '@type': 'PostalAddress',
        name: SITE.addresses.us.label,
        streetAddress: SITE.addresses.us.line,
        addressLocality: 'Sheridan',
        addressRegion: 'WY',
        postalCode: '82801',
        addressCountry: 'US',
      },
    ],
    foundingDate: '2020',
    areaServed: ['US', 'PK'],
    knowsAbout: [
      'AI-native software engineering',
      'Custom software development',
      'AI solutions and automation',
      'Digital transformation',
      'Low-code development',
      'U.S. SLED subcontracting',
      'Government technology modernization',
      'Statutory document automation',
    ],
  };
}

export function websiteJsonLd(): JsonLdNode {
  return {
    '@context': SCHEMA,
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    publisher: { '@id': `${SITE.url}/#organization` },
    inLanguage: 'en-US',
    hasPart: {
      '@type': 'ItemList',
      name: 'Primary Navigation',
      itemListElement: SITELINK_NAV.map((link, index) => ({
        '@type': 'SiteNavigationElement',
        position: index + 1,
        name: link.label,
        url: absoluteUrl(link.href),
      })),
    },
  };
}

export function siteNavigationJsonLd(): JsonLdNode {
  return {
    '@context': SCHEMA,
    '@type': 'SiteNavigationElement',
    '@id': `${SITE.url}/#main-navigation`,
    name: 'Main Navigation',
    isPartOf: { '@id': `${SITE.url}/#website` },
    hasPart: SITELINK_NAV.map((link) => ({
      '@type': 'WebPage',
      name: link.label,
      url: absoluteUrl(link.href),
    })),
  };
}

export function aboutPageJsonLd(options: {
  title: string;
  description: string;
  url: string;
}): JsonLdNode {
  return {
    '@context': SCHEMA,
    '@type': 'AboutPage',
    '@id': `${options.url}#aboutpage`,
    url: options.url,
    name: options.title,
    description: options.description,
    isPartOf: { '@id': `${SITE.url}/#website` },
    about: { '@id': `${SITE.url}/#organization` },
  };
}

export function jobPostingJsonLd(options: {
  title: string;
  description: string;
  url: string;
}): JsonLdNode {
  const now = new Date();
  const validThrough = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000);

  return {
    '@context': SCHEMA,
    '@type': 'JobPosting',
    '@id': `${options.url}#careers`,
    url: options.url,
    title: options.title,
    description: options.description,
    datePosted: now.toISOString(),
    validThrough: validThrough.toISOString(),
    hiringOrganization: { '@id': `${SITE.url}/#organization` },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
      },
    },
    employmentType: ['FULL_TIME', 'PART_TIME', 'CONTRACTOR'],
    workHours: 'Flexible',
    jobBenefits: [
      'Competitive salary',
      'Remote work options',
      'Professional development',
      'Cutting-edge technology',
      'Collaborative environment',
    ],
    skills: [
      'Software Development',
      'AI/Machine Learning',
      'Frontend Development',
      'Backend Development',
      'DevOps',
      'Mobile Development',
      'Automation',
    ],
  };
}

export function collectionPageJsonLd(options: {
  title: string;
  description: string;
  url: string;
  items: ReadonlyArray<{ name: string; description: string; url: string; image?: string }>;
  maxItems?: number;
}): JsonLdNode {
  const slice = options.items.slice(0, options.maxItems ?? 10);

  return {
    '@context': SCHEMA,
    '@type': 'CollectionPage',
    '@id': `${options.url}#collection`,
    url: options.url,
    name: options.title,
    description: options.description,
    isPartOf: { '@id': `${SITE.url}/#website` },
    about: { '@id': `${SITE.url}/#organization` },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: options.items.length,
      itemListElement: slice.map((item, index) => ({
        '@type': 'CreativeWork',
        position: index + 1,
        name: item.name,
        description: item.description,
        url: item.url,
        ...(item.image ? { image: absoluteUrl(item.image) } : {}),
        author: { '@id': `${SITE.url}/#organization` },
      })),
    },
  };
}

export function webPageJsonLd(options: {
  title: string;
  description: string;
  url: string;
}): JsonLdNode {
  return {
    '@context': SCHEMA,
    '@type': 'WebPage',
    '@id': `${options.url}#webpage`,
    url: options.url,
    name: options.title,
    description: options.description,
    isPartOf: { '@id': `${SITE.url}/#website` },
    about: { '@id': `${SITE.url}/#organization` },
  };
}

export function serviceJsonLd(options: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
}): JsonLdNode {
  return {
    '@context': SCHEMA,
    '@type': 'Service',
    name: options.name,
    description: options.description,
    url: options.url,
    serviceType: options.serviceType ?? 'Technical subcontracting',
    provider: { '@id': `${SITE.url}/#organization` },
    areaServed: { '@type': 'Country', name: 'United States' },
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'U.S. SLED prime contractors',
    },
  };
}

export function breadcrumbListJsonLd(
  crumbs: BreadcrumbCrumb[],
  pageUrl: string,
): JsonLdNode {
  return {
    '@context': SCHEMA,
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      ...(crumb.href ? { item: absoluteUrl(crumb.href) } : {}),
    })),
  };
}

export function faqPageJsonLd(
  items: ReadonlyArray<{ question: string; answer: string }>,
  pageUrl: string,
): JsonLdNode {
  return {
    '@context': SCHEMA,
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function articleJsonLd(options: {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
}): JsonLdNode {
  const image = options.image
    ? options.image.startsWith('http')
      ? options.image
      : absoluteUrl(options.image)
    : absoluteUrl(SITE.og.image);

  return {
    '@context': SCHEMA,
    '@type': 'Article',
    headline: options.headline,
    description: options.description,
    url: options.url,
    image,
    author: { '@id': `${SITE.url}/#organization` },
    publisher: { '@id': `${SITE.url}/#organization` },
    mainEntityOfPage: options.url,
    ...(options.datePublished ? { datePublished: options.datePublished } : {}),
  };
}

export function siteGraphJsonLd(extra: JsonLdNode[] = []): JsonLdNode[] {
  return [
    organizationJsonLd(),
    websiteJsonLd(),
    siteNavigationJsonLd(),
    ...extra,
  ];
}
