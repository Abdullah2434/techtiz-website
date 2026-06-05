import { ROUTES } from '../constants/routes';

/**
 * Primary site pages that reinforce Google sitelinks and AI crawler site maps.
 * Mirrors legacy header/footer navigation from techtiz.co.
 */
export const SITELINK_NAV = [
  { label: 'About Us', href: ROUTES.about },
  { label: 'Services', href: ROUTES.services },
  { label: 'Industries', href: ROUTES.industries },
  { label: 'Case Studies', href: ROUTES.caseStudies },
  { label: 'Careers', href: ROUTES.careers },
  { label: 'Contact', href: ROUTES.contact },
] as const;
