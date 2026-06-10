export const ROUTES = {
  home: '/',
  about: '/about/',
  careers: '/careers/',
  contact: '/contact/',
  privacyPolicy: '/privacy-policy/',
  termsOfService: '/terms-of-service/',
  services: '/services/',
  industries: '/industries/',
  caseStudies: '/case-studies/',
  sledHub: '/us-sled/',
  sledCapabilities: '/us-sled/capabilities/',
  sledCapabilityStatement: '/us-sled/capability-statement/',
  sledCaseStudies: '/us-sled/case-studies/',
  sledHowWePartner: '/us-sled/how-we-partner/',
  sledOperatingModel: '/us-sled/operating-model/',
  sledContact: '/us-sled/contact/',
  sledVehicles: '/us-sled/procurement-vehicles/',
} as const;

/** `/services/{slug}/` with trailing slash (matches `trailingSlash: 'always'`). */
export function serviceSlug(slug: string): string {
  const normalized = slug.replace(/^\/+|\/+$/g, '');
  return `${ROUTES.services}${normalized}/`;
}

/** `/industries/{slug}/` with trailing slash (matches `trailingSlash: 'always'`). */
export function industrySlug(slug: string): string {
  const normalized = slug.replace(/^\/+|\/+$/g, '');
  return `${ROUTES.industries}${normalized}/`;
}

export const SLED_SUBNAV = [
  { label: 'Hub', href: '/us-sled/', spyId: 'top' },
  { label: 'How We Partner', href: '/us-sled/how-we-partner/' },
  { label: 'Operating Model', href: '/us-sled/operating-model/' },
  { label: 'Capabilities', href: '/us-sled/capabilities/' },
  { label: 'Engagement Examples', href: '/us-sled/case-studies/' },
  { label: 'Procurement Vehicles', href: '/us-sled/procurement-vehicles/' },
  { label: 'Contact', href: '/us-sled/contact/' },
] as const;
