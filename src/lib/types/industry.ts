export interface IndustryHeroData {
  videoSrc: string;
  title: string;
  heading: string;
  bottomHeading: string;
  description: string;
  titleMaxWidth?: string;
}

export interface IndustrySolutionItem {
  id: string;
  title: string;
  description: string;
  iconPath: string;
}

export interface IndustrySolutionsData {
  solutions: IndustrySolutionItem[];
  mainTitle: string;
  highlightText?: string;
  highlightColor?: string;
  ctaTitle?: string;
  ctaButtonText?: string;
  ctaButtonUrl?: string;
  solutionColumns?: number;
}

export interface ComparisonColumn {
  id: string;
  title: string;
  type: 'challenge' | 'traditional' | 'modern' | 'techtiz';
  /** Optional inline SVG HTML; defaults from industry-comparison-icons */
  icon?: string;
}

export interface ComparisonRow {
  id: string;
  category: string;
  values: string[];
}

export interface IndustryComparisonData {
  mainTitle?: string;
  description?: string;
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
}

export interface IndustryFeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface IndustryFeaturePairData {
  title: string;
  description: string;
  features: IndustryFeatureItem[];
}

export interface IndustryScrollItem {
  title: string;
  description: string;
  highlighted?: boolean;
}

export interface IndustryScrollListData {
  heading: string;
  highlightText?: string;
  highlightColor?: string;
  items: IndustryScrollItem[];
}

export interface ChallengeSolutionItem {
  challenge: string;
  solution: string;
}

export interface IndustryChallengesData {
  items: ChallengeSolutionItem[];
}

export interface IndustryStat {
  value: string;
  unit?: string;
  label: string;
  topLabel?: string;
  middleLabel?: string;
  arrowDirection?: 'up' | 'down';
}

export interface IndustryEducationBox {
  title: string;
}

export interface IndustryWhoWeServeData {
  variant: 'digital-marketing' | 'real-estate' | 'logistics' | 'education';
  title: string;
  description: string;
  stats?: IndustryStat[];
  educationBoxes?: IndustryEducationBox[];
  buttonText?: string;
  buttonUrl?: string;
}

export interface IndustryTabItem {
  title: string;
  content: {
    title: string;
    features: string[];
    image: string;
  };
}

export interface IndustryTabsData {
  mainTitle: string;
  tabs: IndustryTabItem[];
}

export interface IndustryCtaData {
  title1: string;
  title2: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export type IndustrySection =
  | { type: 'hero'; data: IndustryHeroData }
  | { type: 'solutions'; data: IndustrySolutionsData }
  | { type: 'comparison'; data: IndustryComparisonData }
  | { type: 'features'; data: IndustryFeaturePairData }
  | { type: 'scrollList'; data: IndustryScrollListData }
  | { type: 'challenges'; data: IndustryChallengesData }
  | { type: 'whoWeServe'; data: IndustryWhoWeServeData }
  | { type: 'tabs'; data: IndustryTabsData }
  | { type: 'successStories' }
  | { type: 'cta'; data: IndustryCtaData };

export interface IndustryPageData {
  slug: string;
  title: string;
  sections: IndustrySection[];
  metadata?: {
    title?: string;
    description?: string;
  };
}
