/**
 * Navigation data — single source of truth.
 * Import from `@/lib/constants/nav` or `../constants/nav/services` etc.
 */
export {
  SERVICE_CATEGORIES,
  SERVICE_CATEGORIES_NAV,
  SERVICES_MEGA_NAV_DATA,
  HOME_CAPABILITIES_FROM_NAV,
  servicePath,
  type ServiceNavCategory,
  type ServiceNavItem,
} from './services';

export {
  INDUSTRY_CATEGORIES,
  INDUSTRY_CATEGORIES_NAV,
  INDUSTRIES_MEGA_NAV_DATA,
  INDUSTRIES_HUB_CTA,
  industryPath,
  type IndustryNavCategory,
  type IndustryNavSub,
} from './industries';

import { SERVICE_CATEGORIES_NAV } from './services';
import { INDUSTRY_CATEGORIES } from './industries';
import { ROUTES } from '../routes';

/** Top-level header links (commercial site). */
export const PRIMARY_NAV = [
  { label: 'About Us', href: ROUTES.home },
  { label: 'Services', mega: 'services' as const },
  { label: 'Industries', mega: 'industries' as const },
  { label: 'Case Studies', href: ROUTES.caseStudies },
  { label: 'Careers', href: ROUTES.home },
] as const;

/** Optional structured footer columns (SLED block is separate in Footer.astro). */
export const FOOTER_COLUMNS = [
  {
    heading: 'Services',
    links: SERVICE_CATEGORIES_NAV.map((cat) => ({
      label: cat.title,
      href: cat.landingHref,
    })),
  },
  {
    heading: 'Industries',
    links: INDUSTRY_CATEGORIES.map((cat) => ({
      label: cat.title,
      href: cat.landingHref,
    })),
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: ROUTES.home },
      { label: 'Careers', href: ROUTES.home },
      { label: 'Case Studies', href: ROUTES.caseStudies },
      { label: 'Contact', href: ROUTES.sledContact },
    ],
  },
] as const;
