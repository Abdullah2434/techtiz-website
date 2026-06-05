import { SLED_SUBNAV } from '../constants/routes';
import { SITE } from '../constants/site';
import type { BreadcrumbCrumb } from './types';

const SLED_EXTRA_LABELS: Record<string, string> = {
  '/us-sled/capability-statement/': 'Capability Statement',
};

const PAGE_LABELS: Record<string, string> = {
  '/about/': 'About Us',
  '/careers/': 'Careers',
  '/contact/': 'Contact',
  '/services/': 'Services',
  '/industries/': 'Industries',
  '/privacy-policy/': 'Privacy Policy',
  '/terms-of-service/': 'Terms of Service',
};

function slugToLabel(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function normalizePath(path: string): string {
  if (!path || path === '/') return '/';
  return path.endsWith('/') ? path : `${path}/`;
}

export function buildBreadcrumbs(path: string): BreadcrumbCrumb[] {
  const normalized = normalizePath(path);
  const crumbs: BreadcrumbCrumb[] = [{ label: SITE.name, href: '/' }];

  if (normalized.startsWith('/us-sled')) {
    crumbs.push({ label: 'SLED Partnerships', href: '/us-sled/' });

    const extraLabel = SLED_EXTRA_LABELS[normalized];
    if (extraLabel) {
      crumbs.push({ label: extraLabel });
      return crumbs;
    }

    if (normalized === '/us-sled/') {
      crumbs[crumbs.length - 1] = { label: 'SLED Partnerships' };
      return crumbs;
    }

    const sub = SLED_SUBNAV.find((link) => {
      if (link.href === '/us-sled/') return false;
      const hrefNorm = normalizePath(link.href);
      return normalized === hrefNorm || normalized.startsWith(hrefNorm);
    });

    if (sub) {
      crumbs.push({ label: sub.label });
    }
    return crumbs;
  }

  if (normalized.startsWith('/case-studies')) {
    crumbs.push({ label: 'Case Studies', href: '/case-studies/' });
    if (normalized !== '/case-studies/') {
      const slug = normalized.replace('/case-studies/', '').replace(/\/$/, '');
      const label = slug
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      crumbs.push({ label });
    }
    return crumbs;
  }

  if (normalized.startsWith('/services')) {
    crumbs.push({ label: 'Services', href: '/services/' });
    if (normalized !== '/services/') {
      const slug = normalized.replace('/services/', '').replace(/\/$/, '');
      crumbs.push({ label: slugToLabel(slug) });
    }
    return crumbs;
  }

  if (normalized.startsWith('/industries')) {
    crumbs.push({ label: 'Industries', href: '/industries/' });
    if (normalized !== '/industries/') {
      const slug = normalized.replace('/industries/', '').replace(/\/$/, '');
      crumbs.push({ label: slugToLabel(slug) });
    }
    return crumbs;
  }

  const pageLabel = PAGE_LABELS[normalized];
  if (pageLabel) {
    crumbs.push({ label: pageLabel });
    return crumbs;
  }

  if (normalized === '/') {
    return [{ label: SITE.name }];
  }

  return crumbs;
}
