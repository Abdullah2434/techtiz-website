import { ADAMS_CASE_STUDY } from './adams';
import { ALTADENA_CASE_STUDY } from './altadena';
import { BERKLEY_CASE_STUDY } from './berkley';
import { BROOME_CASE_STUDY } from './broome';
import { ERIE_CASE_STUDY } from './erie';
import { ESCONDIDO_CASE_STUDY } from './escondido';
import { HOLLAND_CASE_STUDY } from './holland';
import { MDC_CASE_STUDY } from './mdc';
import { OCMBOCES_CASE_STUDY } from './ocmboces';
import { PARKER_CASE_STUDY } from './parker';
import { PARKER_EAM_CASE_STUDY } from './parker-eam';
import { UWYO_CASE_STUDY } from './uwyo';
import { WAYNE_CASE_STUDY } from './wayne';
import { WEST_METRO_CASE_STUDY } from './west-metro';
import { WESTCHESTER_CASE_STUDY } from './westchester';

export const SLED_CASE_STUDIES = [
  ADAMS_CASE_STUDY,
  ALTADENA_CASE_STUDY,
  BERKLEY_CASE_STUDY,
  BROOME_CASE_STUDY,
  ERIE_CASE_STUDY,
  ESCONDIDO_CASE_STUDY,
  HOLLAND_CASE_STUDY,
  MDC_CASE_STUDY,
  OCMBOCES_CASE_STUDY,
  PARKER_CASE_STUDY,
  PARKER_EAM_CASE_STUDY,
  UWYO_CASE_STUDY,
  WAYNE_CASE_STUDY,
  WEST_METRO_CASE_STUDY,
  WESTCHESTER_CASE_STUDY,
] as const;

export type SledCaseStudy = (typeof SLED_CASE_STUDIES)[number];

export function getSledCaseStudy(slug: string): SledCaseStudy | undefined {
  return SLED_CASE_STUDIES.find((study) => study.slug === slug);
}

export function sledCaseStudyPath(slug: string): string {
  return `/us-sled/case-studies/${slug}/`;
}
