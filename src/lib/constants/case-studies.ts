/**
 * Client portfolio case studies (legacy `/case-studies` + homepage carousel).
 * U.S. SLED engagement examples live in `pages/case-studies.ts`.
 * Tabs, pagination, and SEO: `lib/config/case-studies.ts`.
 */
export {
  CASE_STUDIES_PORTFOLIO,
  getCaseStudyBySlug,
  getFeaturedCaseStudies,
  getCaseStudiesByCategory,
} from './case-studies-portfolio';

export { SUCCESS_STORIES } from './pages/success-stories';

export type {
  CaseStudy,
  CaseStudyCategory,
  CaseStudyTab,
  SuccessStory,
} from '../types/case-study';
