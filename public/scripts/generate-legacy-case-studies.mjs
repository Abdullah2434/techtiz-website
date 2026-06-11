import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const legacyDir = path.join(root, 'legacy/sled-redesign');
const dataPath = path.join(legacyDir, 'case-studies-data.js');
const outPath = path.join(root, 'src/lib/constants/pages/sled-case-studies/legacy-case-studies.ts');

const SLUG_MAP = {
  westmetro: 'west-metro',
  parkeream: 'parker-eam',
};

/**
 * Section labels that have no equivalent on the Holland reference page.
 * Excluded from output so all detail pages share a consistent layout.
 */
const BLOCKED_LABEL_PATTERNS = [
  /insurance\s+stack/i,
  /conflict\s+firewall/i,
  /procurement\s+stage/i,
  /current\s+estate/i,
  /team\s+[&]\s*allocation/i,
];

function isSectionAllowed(label) {
  if (!label) return true;
  return !BLOCKED_LABEL_PATTERNS.some((p) => p.test(label));
}

const NEW_LEGACY_SLUGS = [
  'uwyo',
  'erie',
  'broome',
  'westmetro',
  'parkeream',
  'berkley',
  'ocmboces',
  'westchester',
  'parker',
  'wayne',
];

function normalizeHtml(html) {
  return html
    .replace(/\.\.\/assets\//g, '/assets/')
    .replace(/href="contact\.html"/g, 'href="/us-sled/contact/"')
    .replace(/href="capabilities\.html"/g, 'href="/us-sled/capabilities/"')
    .replace(/href="case-studies\.html"/g, 'href="/us-sled/case-studies/"')
    .replace(/href="how-we-engage\.html"/g, 'href="/us-sled/how-we-partner/"')
    .replace(/href="case-study-([\w-]+)\.html"/g, (_, slug) => {
      const mapped = SLUG_MAP[slug] ?? slug;
      return `href="/us-sled/case-studies/${mapped}/"`;
    });
}

function parseSeoFromHtml(htmlPath) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
  const title = titleMatch?.[1]?.replace(/&middot;/g, '·').trim() ?? '';
  const description = descMatch?.[1]?.trim() ?? '';
  return { title, description };
}

function extractHeroImage(sections) {
  const hero = sections.find((s) => s.label === '01 Hero');
  if (!hero) return '/assets/hero-desk.png';
  const match = hero.html.match(/url\(['"]?([^'")]+)['"]?\)/);
  if (!match) return '/assets/hero-desk.png';
  return match[1].replace('../assets/', '/assets/');
}

function escapeTsString(value) {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');
}

function loadCaseStudies() {
  const src = fs.readFileSync(dataPath, 'utf8');
  const ctx = { window: { CASE_STUDIES: {} } };
  vm.runInNewContext(src, ctx);
  return ctx.window.CASE_STUDIES;
}

function buildStudyExport(slug, data, seo, routeSlug) {
  const heroImage = extractHeroImage(data.sections);
  const crumb = data.head?.sled?.crumb ?? routeSlug;
  const sections = data.sections
    .filter((section) => isSectionAllowed(section.label ?? null))
    .map((section) => ({
      cls: section.cls ?? 'section',
      id: section.id ?? null,
      label: section.label ?? null,
      style: section.style ?? null,
      html: normalizeHtml(section.html ?? ''),
    }));

  return `  {
    slug: '${routeSlug}',
    legacySlug: '${slug}',
    crumb: ${JSON.stringify(crumb)},
    deadline: ${data.deadline ? JSON.stringify(data.deadline) : 'undefined'},
    seo: {
      title: ${JSON.stringify(seo.title)},
      description: ${JSON.stringify(seo.description)},
      ogImage: ${JSON.stringify(heroImage)},
    },
    rail: ${JSON.stringify(data.rail ?? [], null, 2).replace(/\n/g, '\n    ')},
    mailto: ${JSON.stringify(data.meta?.mailto ?? 'mailto:sled@techtiz.co')},
    sections: [
${sections
  .map((section) => {
    const parts = [`      cls: ${JSON.stringify(section.cls)}`];
    if (section.id) parts.push(`id: ${JSON.stringify(section.id)}`);
    if (section.label) parts.push(`label: ${JSON.stringify(section.label)}`);
    if (section.style) parts.push(`style: ${JSON.stringify(section.style)}`);
    parts.push(`html: \`${escapeTsString(section.html)}\``);
    return `      { ${parts.join(', ')} }`;
  })
  .join(',\n')}
    ],
  }`;
}

const store = loadCaseStudies();
const exports = [];

for (const slug of NEW_LEGACY_SLUGS) {
  const data = store[slug];
  if (!data) {
    console.warn(`Missing legacy data for ${slug}`);
    continue;
  }
  const routeSlug = SLUG_MAP[slug] ?? slug;
  const htmlFile = path.join(legacyDir, `case-study-${routeSlug}.html`);
  const altHtmlFile = path.join(legacyDir, `case-study-${slug}.html`);
  const seoPath = fs.existsSync(htmlFile) ? htmlFile : altHtmlFile;
  const seo = parseSeoFromHtml(seoPath);
  exports.push(buildStudyExport(slug, data, seo, routeSlug));
}

const output = `/* Auto-generated from legacy/sled-redesign/case-studies-data.js — do not edit by hand */
import type { SledLegacyCaseStudy } from './legacy-types';

export const LEGACY_CASE_STUDIES = [
${exports.join(',\n')}
] as const satisfies readonly SledLegacyCaseStudy[];
`;

fs.writeFileSync(outPath, output);
console.log(`Wrote ${exports.length} legacy case studies to ${outPath}`);
