import { SITE, mailtoGeneral } from "./site";

export type FooterContactIcon = "location" | "phone" | "email";

export type FooterContactItem = {
  icon: FooterContactIcon;
  text: string;
  href: string;
  multiLine?: boolean;
};

/** Legacy `Footer.tsx` / `contactInfo` — same addresses and links. */
export const FOOTER_CONTACT_INFO: FooterContactItem[] = [
  {
    icon: "location",
    text: SITE.addresses.lahore.line,
    href: SITE.addresses.lahore.mapsUrl,
    multiLine: true,
  },
  {
    icon: "location",
    text: SITE.addresses.us.line,
    href: SITE.addresses.us.mapsUrl,
    multiLine: true,
  },
  {
    icon: "phone",
    text: SITE.phone.display,
    href: `tel:${SITE.phone.tel}`,
  },
  {
    icon: "email",
    text: SITE.email.contact,
    href: mailtoGeneral(),
  },
];
