import { SITE } from '../constants/site';
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
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: SITE.email.contact,
      availableLanguage: ['English'],
    },
    areaServed: ['US', 'PK'],
    knowsAbout: [
      'AI-native software engineering',
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
  return [organizationJsonLd(), websiteJsonLd(), ...extra];
}
