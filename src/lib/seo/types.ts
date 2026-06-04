/** JSON-LD graph node (Schema.org). */
export type JsonLdNode = Record<string, unknown>;

/** Props shared by layouts and page-level SEO constants. */
export interface PageSeo {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  /** When true, adds noindex,nofollow (e.g. draft or redirect-only pages). */
  noindex?: boolean;
  /** Additional JSON-LD nodes merged after site-wide graphs. */
  jsonLd?: JsonLdNode[];
}

export type BreadcrumbCrumb = {
  label: string;
  href?: string;
};
