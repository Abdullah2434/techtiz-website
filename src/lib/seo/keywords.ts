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
  ],
  '/case-studies/': [
    'software development case studies',
    'mobile app development',
    'AI automation projects',
    'enterprise modernization',
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
  '/us-sled/how-we-engage/': [
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
