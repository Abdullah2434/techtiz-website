import type { CaseStudyTabConfig } from "../types/case-study";
import { ROUTES } from "../constants/routes";

export const CASE_STUDY_TABS: CaseStudyTabConfig[] = [
  { name: "All", minWidth: "md:min-w-[83px] min-w-full" },
  { name: "Mobile App", minWidth: "md:min-w-[154px] min-w-full" },
  { name: "Website", minWidth: "md:min-w-[129px] min-w-full" },
  { name: "AI Automation", minWidth: "md:min-w-[123px] min-w-full" },
  { name: "Power Pages", minWidth: "md:min-w-[166px] min-w-full" },
  { name: "Shopify", minWidth: "md:min-w-[123px] min-w-full" },
  { name: "Low Code", minWidth: "md:min-w-[123px] min-w-full" },
  { name: "No Code", minWidth: "md:min-w-[123px] min-w-full" },
] as const;

export const CASE_STUDIES_ITEMS_PER_PAGE = 6;
export const CASE_STUDIES_SCROLL_OFFSET = 650;
export const CASE_STUDIES_SCROLL_DURATION = 1500;
export const CASE_STUDIES_LOADING_DELAY = 800;
export const CASE_STUDIES_MAX_VISIBLE_PAGES = 5;
export const CASE_STUDIES_OVERVIEW_WORD_LIMIT = 20;
export const CASE_STUDIES_OVERVIEW_DISPLAY_WORDS = 18;

export const CASE_STUDIES_SEO_PORTFOLIO = {
  title: "Case Studies | Software Development Success Stories | Techtiz",
  description:
    "Explore Techtiz case studies: mobile apps, web platforms, AI automation, and low-code delivery for startups and enterprises—real outcomes across industries.",
  canonicalPath: "/case-studies/",
  ogImage: "/images/case-studies/BG.png",
} as const;

/** Commercial case study CTAs → global contact page. */
export const CASE_STUDIES_CONTACT_HREF = ROUTES.contact;

export const CASE_STUDIES_LISTING_HERO = {
  title: "Case Studies",
  subtitle: "Real Solutions. Proven Results.",
  ctaLabel: "Book a call",
  heading:
    "Real-world success stories showcasing the impact of solutions we offered",
  body: "Our work speaks for itself through transformative platforms, intelligent automation, and modern user experiences tailored to specific industries. Explore how we've helped startups scale, enterprises modernize, and innovators bring their ideas to life.",
} as const;

export const CASE_STUDIES_LISTING_HEADER = {
  title:
    "Building Secure, Scalable, and Smart Digital Solutions for Healthcare",
  description1:
    "At TECHTIZ, we specialize in developing healthcare platforms that are HIPAA-compliant, patient-centric, and ready for the future.",
  description2:
    "From AI-powered diagnosis tools to hospital management systems and telehealth apps, we design software that enhances care delivery, optimizes workflows, and protects sensitive data.",
} as const;

export const CASE_STUDIES_PAGE_CTA = {
  title1: "Looking to Build ",
  title2: "Something Custom?",
  description:
    "Let's turn your web app idea into a powerful, production ready platform—tailored to your needs and built for scale.",
  buttonLabel: "Contact Us for a Consultation",
} as const;

export const SUCCESS_STORIES_SECTION = {
  title: "Client Success Stories",
  description: "Hear from Businesses",
  exploreHref: "/case-studies/",
} as const;

export { RECAPTCHA_SITE_KEY } from "./recaptcha";

export const CASE_STUDY_DOWNLOAD_COPY = {
  titleLine1: "Download Complete",
  titleLine2: "Case Study",
  paragraph1:
    "Explore how Techtiz helped enhance a predictive analytics platform, enabling real-time data insights and informed decision-making across industries.",
  paragraph2:
    "Our solutions streamlined data integration, boosted analytics speed, and ensured a secure, scalable architecture capable of handling increasing user demands.",
  consentPrefix:
    "I consent to Techtiz (Techtiz) processing my personal information as set out in the",
  consentSuffix:
    "for marketing purposes and to be contacted via the information I provided. Processing may take place outside of my home jurisdiction. Consent can be withdrawn at any time as outlined in the Privacy Policy.",
  privacyHref: "/privacy-policy/",
  submitLabel: "Download PDF",
  submittingLabel: "Loading...",
} as const;

/** POST target when a server/API route is available (legacy Next.js path). */
export const CASE_STUDY_FORM_API = "/api/case-study/";

/** On-demand PDF for a case study detail page. */
export const caseStudyPdfUrl = (slug: string) => `/api/case-study/${slug}/pdf/`;
