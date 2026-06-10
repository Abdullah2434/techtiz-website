/**
 * Target keywords per route — woven into titles, meta descriptions, and on-page copy.
 * Keep phrasing natural; avoid keyword stuffing.
 */
export const PAGE_KEYWORDS: Record<string, readonly string[]> = {
  '/': [
    'AI-native engineering studio',
    'custom software development',
    'AI automation',
    'U.S. SLED subcontractor',
    'software development company',
    'digital transformation',
  ],
  '/about/': [
    'about techtiz',
    'software development team',
    'company values',
    'leadership team',
    'AI experts',
    'custom software developers',
    'technology innovation',
    'enterprise solutions',
  ],
  '/careers/': [
    'techtiz careers',
    'software developer jobs',
    'AI engineer positions',
    'remote software jobs',
    'full stack developer',
    'DevOps engineer',
    'mobile app developer',
    'work at techtiz',
  ],
  '/services/': [
    'software development services',
    'custom software development',
    'AI solutions',
    'automation services',
    'mobile app development',
    'low-code development',
    'digital transformation',
  ],
  '/industries/': [
    'industry software solutions',
    'healthcare software',
    'e-commerce development',
    'real estate technology',
    'logistics software',
    'education technology',
  ],
  '/contact/': [
    'contact techtiz',
    'software development consultation',
    'custom software quote',
    'schedule consultation',
  ],
  '/case-studies/': [
    'techtiz case studies',
    'software development portfolio',
    'successful projects',
    'client success stories',
    'healthcare software projects',
    'fintech development cases',
    'AI implementation',
    'custom software examples',
  ],
  '/privacy-policy/': [
    'privacy policy',
    'data protection',
    'techtiz privacy',
  ],
  '/terms-of-service/': [
    'terms of service',
    'terms and conditions',
    'techtiz terms',
  ],
  '/us-sled/': [
    'U.S. SLED subcontractor',
    'state local education government IT',
    'prime contractor teaming',
    'NDA-first subcontracting',
  ],
  '/us-sled/capabilities/': [
    'SLED technical capabilities',
    'government software engineering',
    'GIS statutory documents',
    'NIST 800-171',
  ],
  '/us-sled/how-we-partner/': [
    'SLED teaming letter',
    'subcontract engagement',
    'mutual NDA',
    'prime contractor onboarding',
  ],
  '/us-sled/operating-model/': [
    'onshore offshore delivery model',
    'CJIS CUI FCI',
    'government data architecture',
    'background-checked personnel',
  ],
  '/us-sled/case-studies/': [
    'SLED engagement examples',
    'subcontractor past performance',
    'NDA-safe case studies',
  ],
  '/us-sled/procurement-vehicles/': [
    'NASPO ValuePoint subcontract',
    'GSA MAS teaming',
    'state master agreement',
    'cooperative procurement',
  ],
  '/us-sled/contact/': [
    'SLED subcontract intake',
    'teaming inquiry',
    'prime contractor contact',
  ],
  '/us-sled/capability-statement/': [
    'capability statement',
    'NAICS 541511',
    'small business subcontractor',
  ],
} as const;

export function keywordsForPath(canonicalPath: string): readonly string[] {
  const normalized = canonicalPath.endsWith('/') ? canonicalPath : `${canonicalPath}/`;
  return PAGE_KEYWORDS[normalized] ?? [];
}
