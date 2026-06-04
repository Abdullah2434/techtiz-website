import {
  CASE_STUDIES_OVERVIEW_DISPLAY_WORDS,
  CASE_STUDIES_OVERVIEW_WORD_LIMIT,
} from '../config/case-studies';

export const isVideoMedia = (src: string): boolean =>
  /\.(mp4|webm|mov|avi)$/i.test(src);

export const truncateOverview = (
  overview: string,
  wordLimit = CASE_STUDIES_OVERVIEW_WORD_LIMIT,
  displayWords = CASE_STUDIES_OVERVIEW_DISPLAY_WORDS,
): string => {
  const words = overview.split(/\s+/);
  if (words.length <= wordLimit) return overview;
  return `${words.slice(0, displayWords).join(' ')}...`;
};

export const parseMetricValue = (
  value: string,
): { num: number; suffix: string; decimals: number } => {
  const match = String(value).match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { num: 0, suffix: value, decimals: 0 };
  const num = parseFloat(match[1]);
  const suffix = match[2];
  const decimals = match[1].includes('.') ? 1 : 0;
  return { num, suffix, decimals };
};
