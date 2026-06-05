import { sitePageTitle } from '../site';

export const NOT_FOUND_SEO = {
  title: sitePageTitle('Page Not Found'),
  description:
    "The page you're looking for doesn't exist or has been moved. Return to Techtiz home to continue exploring our services.",
  canonicalPath: '/404/',
} as const;

export const NOT_FOUND_CONTENT = {
  code: '404',
  heading: 'Page Not Found',
  lines: [
    "The page you're looking for doesn't exist or has been moved.",
    "Let's get you back on track.",
  ],
  cta: {
    label: 'Go Home',
    href: '/',
  },
} as const;
