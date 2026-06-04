import type { IndustryPageData } from '../types/industry';
import { ROUTES, industrySlug } from '../constants/routes';

export const INDUSTRIES_HUB_SEO = {
  title: 'Industries - Sector Solutions | Techtiz',
  description:
    'Explore Techtiz industry expertise across healthcare, digital marketing, e-commerce, real estate, logistics, and education. Tailored platforms and AI automation.',
  canonicalPath: ROUTES.industries,
} as const;

function truncateMetaDescription(text: string, max = 160): string {
  const trimmed = text.trim();
  if (trimmed.length <= max) return trimmed;
  return `${trimmed.slice(0, max - 3).trimEnd()}...`;
}

export function industryDetailSeo(industry: IndustryPageData) {
  const hero = industry.sections.find((s) => s.type === 'hero');
  const headline = hero?.type === 'hero' ? hero.data.heading.replace(/\n/g, ' ') : industry.title;
  const descriptionText =
    hero?.type === 'hero' ? hero.data.description : `Industry solutions for ${industry.title}.`;
  const title = industry.metadata?.title ?? `${headline} | Techtiz`;
  const description = truncateMetaDescription(
    industry.metadata?.description ?? descriptionText,
  );
  const canonicalPath = industrySlug(industry.slug);
  return { title, description, canonicalPath };
}
