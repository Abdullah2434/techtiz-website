export interface CareersValueItem {
  title: string;
  description: string;
  icon: string;
}

export interface CareersHiringStep {
  number: number;
  title: string;
}

export interface CareersBenefitItem {
  title: string;
  titleHtml?: string;
  subtitle: string;
  icon: string;
}

export interface CareersHeroData {
  videoSrc: string;
  title?: string;
  heading: string;
  bottomHeading: string;
  description: string;
  titleMaxWidth?: string;
}

export interface CareersContactHeroData {
  heading: string;
  headingHighlight: string;
  description: string;
}
