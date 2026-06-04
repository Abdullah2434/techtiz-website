import type { ServiceData } from '../types/service';
import { ROUTES, serviceSlug } from '../constants/routes';

export const SERVICES_HUB_SEO = {
  title: 'Services - Software Development & AI Solutions | Techtiz',
  description:
    'Explore Techtiz services across custom software, AI, automation, and digital transformation. Browse our capabilities and dive into each service for details.',
  canonicalPath: ROUTES.services,
} as const;

function truncateMetaDescription(text: string, max = 160): string {
  const trimmed = text.trim();
  if (trimmed.length <= max) return trimmed;
  return `${trimmed.slice(0, max - 3).trimEnd()}...`;
}

export function serviceDetailSeo(service: ServiceData) {
  const headline = `${service.hero.title}${
    service.hero.titleLine2 ? ` ${service.hero.titleLine2}` : ''
  }`;
  const title = service.metadata?.title ?? `${headline} | Techtiz`;
  const description = truncateMetaDescription(
    service.metadata?.description ?? service.hero.description,
  );
  const canonicalPath = serviceSlug(service.slug);
  return { title, description, canonicalPath };
}
