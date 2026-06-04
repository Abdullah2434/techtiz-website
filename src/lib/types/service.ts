export interface ServiceHeroData {
  title: string;
  titleLine2?: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaDescription?: string;
  ctaUrl: string;
  techStack: Array<{ name: string; icon: string }>;
}

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceFeaturesData {
  title: string;
  description: string;
  features: ServiceFeature[];
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  subtitle?: string;
  artifacts?: string[];
}

export interface ServiceWorkflowData {
  steps: WorkflowStep[];
  heading?: string;
  highlightText?: string;
  highlightColor?: string;
}

export interface ServiceStat {
  value: string;
  label: string;
}

export interface ServiceStatsData {
  stats: ServiceStat[];
}

export interface ServiceCTAData {
  title1: string;
  title2: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
}

export interface ServiceData {
  slug: string;
  hero: ServiceHeroData;
  features: ServiceFeaturesData;
  workflow: ServiceWorkflowData;
  stats: ServiceStatsData;
  cta: ServiceCTAData;
  metadata?: {
    title?: string;
    description?: string;
  };
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  landingHref: string;
  serviceLinks: ReadonlyArray<{ name: string; href: string }>;
}
