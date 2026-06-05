export type CaseStudyCategory =
  | 'Mobile App'
  | 'Website'
  | 'AI Automation'
  | 'Power Pages'
  | 'Shopify'
  | 'Low Code'
  | 'No Code';

export type CaseStudyTab = 'All' | CaseStudyCategory;

export interface CaseStudyTechnology {
  name: string;
  icon: string;
}

export interface CaseStudyFounder {
  name: string;
  role: string;
  image: string;
}

export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  title: string;
  slug: string;
  client: string;
  appLogo: string;
  category: CaseStudyCategory | string;
  image: string;
  website?: string;
  overview: string;
  overview2: string;
  tagline: string;
  metrics?: CaseStudyMetric[];
  appStrengths: string[];
  highlights: string[];
  technologies?: CaseStudyTechnology[];
  isFeatured?: boolean;
  reviewVideoUrl?: string;
  founder?: CaseStudyFounder;
  videoId?: string;
  pdfUrl?: string;
}

export interface SuccessStory {
  id: string;
  slug: string;
  quote: string;
  company: string;
  founder: CaseStudyFounder;
  challenges: string;
  solutions: string;
  detailsUrl: string;
  videoId?: string;
}

export interface CaseStudyTabConfig {
  name: CaseStudyTab;
  minWidth: string;
}
