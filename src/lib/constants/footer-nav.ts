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
      { name: "SLED Hub", href: ROUTES.sledHub },
      { name: "Capabilities", href: ROUTES.sledCapabilities },
      { name: "How We Partner", href: ROUTES.sledHowWePartner },
      { name: "Operating Model", href: ROUTES.sledOperatingModel },
      { name: "Engagement Examples", href: ROUTES.sledCaseStudies },
      { name: "Procurement Vehicles", href: ROUTES.sledVehicles },
      { name: "Capability Statement", href: ROUTES.sledCapabilityStatement },
      { name: "SLED Contact", href: ROUTES.sledContact },
    ],
  },
];
