export const SITE = {
  name: 'Techtiz',
  tagline: 'AI-native engineering studio',
  description: 'An AI-native engineering studio building adaptive systems for ambitious teams.',
  url: 'https://techtiz.co',
  email: {
    sled: 'sled@techtiz.co',
  },
  copyright: '© 2026 Techtiz · Lahore HQ · U.S. office',
  naics: '541511 · 541512 · 541519 · 541613',
  nigp: '918-46 · 918-00',
  logo: {
    dark: '/assets/logo.svg',
    light: '/assets/logo-light.svg',
    png: '/assets/logo.png',
  },
  socials: {
    linkedin: '#',
    x: '#',
  },
  og: {
    image: '/assets/capitol.png',
  },
} as const;

export const LEGAL_LINKS = [
  { label: 'Privacy', href: '/' },
  { label: 'Terms', href: '/' },
  { label: 'Cookies', href: '/' },
  { label: 'Accessibility', href: '/' },
  { label: 'Sitemap', href: '/' },
] as const;
