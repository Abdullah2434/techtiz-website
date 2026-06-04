export const ROUTES = {
  home: '/',
  caseStudies: '/case-studies/',
  sledHub: '/us-sled/',
  sledCapabilities: '/us-sled/capabilities/',
  sledCapabilityStatement: '/us-sled/capability-statement/',
  sledCaseStudies: '/us-sled/case-studies/',
  sledHowWeEngage: '/us-sled/how-we-engage/',
  sledOperatingModel: '/us-sled/operating-model/',
  sledContact: '/us-sled/contact/',
  sledVehicles: '/us-sled/procurement-vehicles/',
} as const;

export const SLED_SUBNAV = [
  { label: 'Hub', href: '/us-sled/', spyId: 'top' },
  { label: 'How We Engage', href: '/us-sled/how-we-engage/' },
  { label: 'Operating Model', href: '/us-sled/operating-model/' },
  { label: 'Capabilities', href: '/us-sled/capabilities/' },
  { label: 'Engagement Examples', href: '/us-sled/case-studies/' },
  { label: 'Procurement Vehicles', href: '/us-sled/procurement-vehicles/' },
  { label: 'Contact', href: '/us-sled/contact/' },
] as const;
