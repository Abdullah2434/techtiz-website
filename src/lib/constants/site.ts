/** Single source of truth for company identity, contact, and social links. */
export const SITE = {
  name: "Techtiz",
  tagline: "AI-native engineering studio",
  description:
    "An AI-native engineering studio building adaptive systems for ambitious teams.",
  url: "https://techtiz.co",
  /** Legacy Next.js site: Footer + contact/appointment APIs use contact@; contact-us page lists info@. */
  email: {
    general: "contact@techtiz.co",
    contact: "contact@techtiz.co",
    info: "info@techtiz.co",
    sled: "sled@techtiz.co",
    careers: "careers@techtiz.co",
    hr: "hr@techtiz.co",
  },
  phone: {
    display: "+92 326 1199244",
    tel: "+923261199244",
    business: {
      display: "+1 (469) 351-1525",
      tel: "+14693511525",
      whatsapp: "https://wa.me/14693511525",
    },
    sled: {
      display: "+1 (XXX) XXX-XXXX",
      tel: "",
    },
  },
  addresses: {
    lahore: {
      label: "Lahore HQ",
      line: "34, Block, Civic Center St, Township Scheme Lahore",
      mapsUrl: "https://maps.app.goo.gl/UapeEhDaEaERnE1W7",
    },
    us: {
      label: "U.S. office",
      line: "US Office 30 N GOULD ST STE 25148 SHERIDAN, WY 82801",
      mapsUrl:
        "https://maps.google.com/?q=30+N+GOULD+ST+STE+25148+SHERIDAN+WY+82801",
    },
  },
  offices: {
    lahore: "Lahore HQ",
    us: "U.S. office",
    line: "Lahore HQ · U.S. office",
  },
  copyrightYear: 2026,
  naics: "541511 · 541512",
  nigp: "918-46 · 918-00",
  logo: {
    dark: "/assets/logo.svg",
    light: "/assets/logo-light.svg",
    png: "/assets/logo.png",
  },
  /** Legacy Next.js app/favicon.ico — bump version to bust browser/CDN cache after deploy. */
  favicon: {
    ico: "/favicon.ico",
    svg: "/favicon.svg",
    version: "2",
  },
  /** Legacy Footer.tsx social links */
  socials: {
    google: "https://www.google.com/search?q=techtiz",
    facebook: "https://www.facebook.com/techtiz",
    x: "https://x.com/techtiz",
    linkedin: "https://www.linkedin.com/company/techtiz/",
    whatsapp: "https://wa.me/14693511525",
  },
  og: {
    image: "/assets/capitol.png",
  },
  analytics: {
    googleMeasurementId: "G-FN18PJHS01",
  },
  responseSla: {
    sled: "1 business day",
    sledShort: "1 day",
  },
  sledPartnershipsLabel: "Techtiz — SLED Partnerships",
} as const;

export const LEGAL_LINKS = [
  { label: "About", href: "/about/" },
  { label: "Privacy", href: "/privacy-policy/" },
  { label: "Terms", href: "/terms-of-service/" },
  { label: "Careers", href: "/careers/" },
  { label: "Contact", href: "/contact/" },
  { label: "Sitemap", href: "/sitemap-index.xml" },
] as const;

/** Page title suffix: `Capabilities | Techtiz` */
export function sitePageTitle(pageTitle: string): string {
  return `${pageTitle} | ${SITE.name}`;
}

export function siteCopyright(year = SITE.copyrightYear): string {
  return `© ${year} ${SITE.name} · ${SITE.offices.line}`;
}

export const SITE_COPYRIGHT = siteCopyright();

export function mailto(
  address: string,
  options?: { subject?: string; body?: string },
): string {
  const params = new URLSearchParams();
  if (options?.subject) params.set("subject", options.subject);
  if (options?.body) params.set("body", options.body);
  const qs = params.toString();
  return `mailto:${address}${qs ? `?${qs}` : ""}`;
}

export const mailtoGeneral = (options?: { subject?: string; body?: string }) =>
  mailto(SITE.email.contact, options);

export const mailtoContact = mailtoGeneral;

export const mailtoSled = (options?: { subject?: string; body?: string }) =>
  mailto(SITE.email.sled, options);

/** Wraps the SLED inbox in `<strong>` for success-state copy. */
export function highlightSledEmailHtml(text: string): string {
  return text.replaceAll(
    SITE.email.sled,
    `<strong class="text-yale">${SITE.email.sled}</strong>`,
  );
}
