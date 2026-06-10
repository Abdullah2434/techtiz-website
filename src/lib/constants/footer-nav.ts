import { INDUSTRY_CATEGORIES_NAV } from "./nav/industries";
import { SERVICE_CATEGORIES_NAV } from "./nav/services";
import { ROUTES } from "./routes";
export type FooterNavLink = {
  name: string;
  href: string;
  multiLine?: boolean;
};

const MULTILINE_INDUSTRY_TITLES = new Set([
  "Real Estate",
  "Logistics & Supply Chain",
  "Education",
]);

export type FooterNavSectionData = {
  title: string;
  links: FooterNavLink[];
};

export const FOOTER_NAV_SECTIONS: FooterNavSectionData[] = [
  {
    title: "Solutions",
    links: SERVICE_CATEGORIES_NAV.map((cat) => ({
      name: cat.title,
      href: cat.landingHref,
    })),
  },
  {
    title: "Industries",
    links: INDUSTRY_CATEGORIES_NAV.map((cat) => ({
      name: cat.title,
      href: cat.landingHref,
      multiLine: MULTILINE_INDUSTRY_TITLES.has(cat.title),
    })),
  },
  {
    title: "SLED Partnerships",
    links: [
      { name: "Hub", href: ROUTES.sledHub },
      { name: "Capabilities", href: ROUTES.sledCapabilities },
      { name: "How We Partner", href: ROUTES.sledHowWePartner },
      { name: "Engagement Examples", href: ROUTES.sledCaseStudies },
      // { name: "Capability Statement", href: ROUTES.sledCapabilityStatement },
      { name: "Contact", href: ROUTES.sledContact },
    ],
  },
];
