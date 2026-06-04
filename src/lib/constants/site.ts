/** Single source of truth for company identity, contact, and social links. */
export const SITE = {
  name: "Techtiz",
  tagline: "AI-native engineering studio",
  description:
    "An AI-native engineering studio building adaptive systems for ambitious teams.",
  url: "https://techtiz.co",
  email: {
    general: "hello@techtiz.co",
    sled: "sled@techtiz.co",
  },
  phone: {
    display: "+1 (XXX) XXX-XXXX",
    tel: "",
    sled: {
      display: "+1 (XXX) XXX-XXXX",
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
  socials: {
    linkedin: "#",
    x: "#",
    facebook: "#",
  },
  og: {
    image: "/assets/capitol.png",
  },
  responseSla: {
    sled: "1 business day",
    sledShort: "1 day",
  },
  sledPartnershipsLabel: "Techtiz — SLED Partnerships",
} as const;

export const LEGAL_LINKS = [
  { label: "Privacy", href: "/" },
  { label: "Terms", href: "/" },
  { label: "Cookies", href: "/" },
  { label: "Accessibility", href: "/" },
  { label: "Sitemap", href: "/" },
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
  mailto(SITE.email.general, options);

export const mailtoSled = (options?: { subject?: string; body?: string }) =>
  mailto(SITE.email.sled, options);

/** Wraps the SLED inbox in `<strong>` for success-state copy. */
export function highlightSledEmailHtml(text: string): string {
  return text.replaceAll(
    SITE.email.sled,
    `<strong class="text-yale">${SITE.email.sled}</strong>`,
  );
}
