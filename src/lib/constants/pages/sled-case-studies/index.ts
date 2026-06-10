import { ADAMS_CASE_STUDY } from './adams';
import { ALTADENA_CASE_STUDY } from './altadena';
import { ESCONDIDO_CASE_STUDY } from './escondido';
import { HOLLAND_CASE_STUDY } from './holland';
import { MDC_CASE_STUDY } from './mdc';

export const SLED_CASE_STUDIES = [
  ADAMS_CASE_STUDY,
  HOLLAND_CASE_STUDY,
  MDC_CASE_STUDY,
  ALTADENA_CASE_STUDY,
  ESCONDIDO_CASE_STUDY,
] as const;

export type SledCaseStudy = (typeof SLED_CASE_STUDIES)[number];

export function getSledCaseStudy(slug: string): SledCaseStudy | undefined {
  return SLED_CASE_STUDIES.find((study) => study.slug === slug);
}

export function sledCaseStudyPath(slug: string): string {
  return `/us-sled/case-studies/${slug}/`;
}
