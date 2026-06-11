/**
 * Converts the 10 legacy HTML-based case study entries in legacy-case-studies.ts
 * into individual structured TypeScript files consumed by CaseStudyDetailSections.astro.
 *
 * Usage:  node public/scripts/generate-structured-case-studies.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '../../');

// ─── HTML utils ─────────────────────────────────────────────────────────────

function clean(html = '') {
  return html
    .replace(/&middot;/g, '·')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&ndash;/g, '–')
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim();
}

function stripAll(html = '') {
  return clean(html.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
}

function first(html = '', pattern) {
  const m = pattern.exec(html);
  return m ? m[1] ?? '' : '';
}

function all(html = '', pattern) {
  return [...html.matchAll(pattern)];
}

/** Replace <span class="cyan">…</span> with <span class="accent">…</span> */
function cyanToAccent(html = '') {
  return html.replace(/<span class="cyan">/g, '<span class="accent">');
}

function attr(html = '', attrName) {
  const m = new RegExp(`${attrName}="([^"]+)"`).exec(html);
  return m ? clean(m[1]) : '';
}

function icon(html = '') {
  return attr(html, 'data-lucide') || 'info';
}

function between(html = '', start, end) {
  const si = html.indexOf(start);
  if (si === -1) return '';
  const body = html.slice(si + start.length);
  const ei = body.indexOf(end);
  return ei === -1 ? '' : body.slice(0, ei).trim();
}

// Extract inner HTML of the FIRST matching class in html
function innerOf(html = '', cls) {
  const tag = new RegExp(`<(?:div|p|span|section|article)\\s[^>]*class="[^"]*${cls}[^"]*"[^>]*>([\\s\\S]*?)(?=<\/(?:div|p|span|section|article)>)`, 'i');
  const m = tag.exec(html);
  return m ? m[1].trim() : '';
}

// ─── Per-section parsers ─────────────────────────────────────────────────────

function parseHero(html) {
  const bgM = /background:url\('([^']+)'\)/.exec(html);
  const bg = bgM ? bgM[1] : '';

  // logo and logoAlt from first idcell img
  const logoM = /<div class="idcell"><img[^>]*src="([^"]+)"[^>]*alt="([^"]+)"/.exec(html);
  const logo = logoM ? logoM[1] : '';
  const logoAlt = logoM ? logoM[2] : '';

  const h1M = /<h1>([\s\S]*?)<\/h1>/.exec(html);
  const h1Raw = h1M ? h1M[1].trim() : '';
  const h1 = cyanToAccent(h1Raw);

  const bodyM = /class="ph-body">([^<]+)<\/p>/.exec(html);
  const body = bodyM ? bodyM[1].trim() : '';

  const livePillM = /class="livepill live-only"><span class="ld"><\/span>([^<]+)</.exec(html);
  const livePill = livePillM ? clean(livePillM[1]) : '';

  const pastPillM = /class="closedpill past-only"><span class="ld"><\/span>([^<]+)</.exec(html);
  const pastPill = pastPillM ? clean(pastPillM[1]) : '';

  // eyebrow live/past from eyebrow paragraph
  const eyebrowHtml = first(html, /<p class="eyebrow"[^>]*>([\s\S]*?)<\/p>/);
  const eyebrowLiveM = /<span class="live-only">([^<]+)</.exec(eyebrowHtml);
  const eyebrowPastM = /<span class="past-only">([^<]+)</.exec(eyebrowHtml);
  // Reconstruct eyebrow without live/past spans
  const eyebrowBase = stripAll(
    eyebrowHtml
      .replace(/<span class="live-only">[\s\S]*?<\/span>/, '')
      .replace(/<span class="past-only">[\s\S]*?<\/span>/, '')
      .replace(/<span class="hdot"[^>]*>[\s\S]*?<\/span>/, '')
      .replace(/<span class="tsq"[^>]*><\/span>/, ''),
  )
    .replace(/\s+·\s+·\s+/g, ' · ') // collapse double-dot from hdot removal
    .replace(/^·\s*/, '')
    .replace(/\s*·$/, '')
    .trim();

  const eyebrowLivePart = eyebrowLiveM ? eyebrowLiveM[1].trim() : 'Live';
  const eyebrowPastPart = eyebrowPastM ? eyebrowPastM[1].trim() : 'Closed';

  // eyebrowBase is like "Pre-bid brief · Under NDA"
  // Insert the live/past status between them:  "Pre-bid brief · {status} · Under NDA"
  const baseMatch = /^(.*?)\s*·\s*(Under NDA.*)$/.exec(eyebrowBase);
  const eyebrowLive = baseMatch
    ? `${baseMatch[1]} · ${eyebrowLivePart} · ${baseMatch[2]}`
    : `${eyebrowBase} · ${eyebrowLivePart}`;
  const eyebrowPast = baseMatch
    ? `${baseMatch[1]} · ${eyebrowPastPart} · ${baseMatch[2]}`
    : `${eyebrowBase} · ${eyebrowPastPart}`;

  // Identity cells
  const idcells = all(html, /<div class="idcell">([\s\S]*?)<\/div>/g);
  let awardingBodyVal = '', jurisdictionVal = '', statusLive = '', statusPast = '';

  if (idcells[0]) {
    const valM = /class="idv">([^<]+)<\/span>/.exec(idcells[0][1]);
    if (valM) awardingBodyVal = valM[1].trim();
  }
  if (idcells[1]) {
    const valM = /class="idv">([^<]+)<\/span>/.exec(idcells[1][1]);
    if (valM) jurisdictionVal = valM[1].trim();
  }
  if (idcells[2]) {
    const liveM = /class="live-only">([^<]+)</.exec(idcells[2][1]);
    const pastM = /class="past-only">([^<]+)</.exec(idcells[2][1]);
    if (liveM) statusLive = liveM[1].trim();
    if (pastM) statusPast = pastM[1].trim();
  }

  // CTAs
  const ctaLinks = all(html, /<a class="btn ([^"]+)" href="([^"]+)">([^<]+)<\/a>/g);
  const ctas = ctaLinks.map(m => {
    const classes = m[1];
    const href = m[2];
    const label = clean(m[3]);
    const variant = classes.includes('btn-cyan') ? 'cyan' : 'ghost-dark';
    const beam = classes.includes('btn-beam');
    return { label, href, variant, beam };
  });

  return {
    eyebrowLive, eyebrowPast,
    h1: clean(h1), body,
    livePill: clean(livePill), pastPill: clean(pastPill),
    heroBg: bg, logo, logoAlt,
    identity: {
      awardingBody: { label: 'Awarding body', value: awardingBodyVal },
      jurisdiction: { label: 'Jurisdiction', value: jurisdictionVal },
      statusLive, statusPast,
    },
    ctas,
  };
}

function parseFacts(html) {
  return all(html, /<div class="cs-fact">[\s\S]*?<div class="k">([^<]+)<\/div><div class="v">([^<]*)(?:<small>([^<]+)<\/small>)?/g)
    .map(m => ({ key: clean(m[1]), value: clean(m[2]), small: clean(m[3] || '') }));
}

function parseKeyDates(html) {
  const modHead = parseModHead(html);

  const events = all(html, /<div class="devent([^"]*)">([\s\S]*?)<\/div>\s*(?=<div class="devent|<\/div>)/g).map(m => {
    const cls = m[1];
    const inner = m[2];
    const dateM = /<div class="dd">([\s\S]*?)<\/div>/.exec(inner);
    const labelM = /<div class="dl">([\s\S]*?)<\/div>/.exec(inner);
    const detailM = /<div class="dx">([\s\S]*?)<\/div>/.exec(inner);
    const tagLiveM = /class="live-only">([^<]+)<\/span>/.exec(inner);
    const tagPastM = /class="past-only">([^<]+)<\/span>/.exec(inner);

    const event = {
      date: stripAll(dateM ? dateM[1] : ''),
      label: stripAll(labelM ? labelM[1] : ''),
      detail: stripAll(detailM ? detailM[1] : ''),
    };
    if (cls.includes('hard')) {
      event.hard = true;
      if (tagLiveM) event.tagLive = tagLiveM[1].trim();
      if (tagPastM) event.tagPast = tagPastM[1].trim();
    }
    return event;
  });

  const notes = all(html, /<div class="dq-note reveal">([\s\S]*?)<\/div>/g)
    .map(m => {
      const ico = icon(m[1]);
      const txt = clean(stripAll(m[1]));
      return { icon: ico, html: clean(m[1].replace(/<i [^>]+><\/i>/, '').trim()) };
    });

  const datesFoot = /class="dates-foot reveal">([\s\S]*?)<\/p>/.exec(html);

  return { modHead, events, notes: notes.length ? notes : undefined };
}

function parseAwardModel(html) {
  const modHead = parseModHead(html);
  const rows = all(html, /<div class="arow"><span class="albl">([^<]+)<\/span><span class="aval">([\s\S]*?)<\/span><\/div>/g)
    .map(m => ({
      label: clean(m[1]),
      value: clean(m[2].replace(/<a class="gatelink"[^>]+>[^<]+<i[^>]+><\/i><\/a>/, '').replace(/<span class="redact">([^<]+)<\/span>/g, '$1 (NDA)').trim()),
    }));

  const footnoteM = /class="value-foot reveal cy live-only"[^>]*>([\s\S]*?)<\/div>/.exec(html);
  const footnote = footnoteM ? { icon: icon(footnoteM[1]), html: clean(footnoteM[1].replace(/<i [^>]+><\/i>/, '').trim()), liveOnly: true } : undefined;

  return { modHead, rows, ...(footnote ? { footnote } : {}) };
}

function parseDifferentiator(html) {
  const ic = /class="s57mark"[^>]*><i data-lucide="([^"]+)"/.exec(html);
  const tag = first(html, /class="s57tag">([^<]+)</);
  const quoteM = /class="s57q">([^<]+)</.exec(html);
  const subM = /class="s57sub">([\s\S]*?)<\/p>/.exec(html);
  const sub = subM ? clean(stripAll(subM[1])) : '';

  const liveNoteM = /class="s57live live-only"[^>]*><i[^>]+><\/i><span>([\s\S]*?)<\/span>/.exec(html);
  const liveNote = liveNoteM ? clean(stripAll(liveNoteM[1])) : '';

  const gateM = /class="s57gate">([\s\S]*?)<\/div>/.exec(html);
  let gate;
  if (gateM) {
    const lockLabelM = /class="lockchip dk"[^>]*><i[^>]+><\/i>([^<]+)</.exec(gateM[1]);
    const gateLinkM = /class="gatelink dk" href="([^"]+)"[^>]*>([^<]+)/.exec(gateM[1]);
    if (lockLabelM && gateLinkM) {
      gate = { lockLabel: clean(lockLabelM[1]), href: gateLinkM[1], linkLabel: clean(gateLinkM[2]) };
    }
  }

  return {
    icon: ic ? ic[1] : 'git-merge',
    tag: clean(tag),
    quote: quoteM ? clean(quoteM[1]) : '',
    sub,
    ...(gate ? { gate } : {}),
    ...(liveNote ? { liveNote } : {}),
  };
}

function parseCapabilityGrid(html) {
  const modHead = parseModHead(html);
  const items = all(html, /<div class="fed-item([^"]*)">([\s\S]*?)<\/div>\s*<\/div>/g)
    .map(m => {
      const cls = m[1];
      const inner = m[2];
      const ico = icon(inner);
      const numM = /class="fnum">([^<]+)<\/div>/.exec(inner);
      const titleM = /<div class="ft">(<span class="redact">([^<]+)<\/span>|([^<]+))<\/div>/.exec(inner);
      const descM = /class="fx">([^<]+)<\/div>/.exec(inner);
      const isLocked = (titleM && titleM[1].includes('redact')) || ico === 'lock';
      const title = isLocked ? (titleM && titleM[2] ? titleM[2] + ' · NDA' : 'Item · NDA') : (titleM && (titleM[3] || titleM[2]) ? clean(titleM[3] || titleM[2]) : '');
      return {
        icon: ico,
        ...(numM ? { num: clean(numM[1]) } : {}),
        title,
        desc: descM ? clean(descM[1]) : '',
        ...(cls.includes('star') ? { star: true } : {}),
      };
    });

  const footM = /class="value-foot reveal"[^>]*>([\s\S]*?)<\/div>/.exec(html);
  const foot = footM ? { icon: icon(footM[1]), html: clean(footM[1].replace(/<i [^>]+><\/i>/, '').trim()) } : undefined;

  return { modHead, items, ...(foot ? { foot } : {}) };
}

function parseTaskAllocation(html) {
  const modHead = parseModHead(html);

  const legalbarM = /class="legalbar reveal"[^>]*>([\s\S]*?)<\/div>/.exec(html);
  const legalBar = legalbarM ? {
    icon: icon(legalbarM[1]),
    html: clean(legalbarM[1].replace(/<i [^>]+><\/i>/, '').replace(/<p>/, '').replace(/<\/p>/, '').trim()),
  } : undefined;

  function parseOffCol(colHtml) {
    const headM = /class="offhead"[^>]*>([\s\S]*?)<\/div>/.exec(colHtml);
    let colIcon = 'globe', title = '', subtitle = '';
    if (headM) {
      colIcon = icon(headM[1]);
      const titleM = /class="ot">([^<]+)<\/span>/.exec(headM[1]);
      const subM = /class="os">([^<]+)<\/span>/.exec(headM[1]);
      if (titleM) title = clean(titleM[1]);
      if (subM) subtitle = clean(subM[1]);
    }
    const items = all(colHtml, /<div class="off-li">[^<]*<i[^>]+><\/i><p>([^<]+)<\/p><\/div>/g)
      .map(m => clean(m[1]));
    const slotM = /class="off-slot live-only"[^>]*>[^<]*<i[^>]+><\/i><p>([\s\S]*?)<\/p><\/div>/.exec(colHtml);
    const techtizSlot = slotM ? { icon: 'zap', html: clean(slotM[1]) } : undefined;
    return { icon: colIcon, title, subtitle, items, ...(techtizSlot ? { techtizSlot } : {}) };
  }

  const canM = /class="off-col can">([\s\S]*?)(?=<div class="off-col prime")/.exec(html);
  const primeM = /class="off-col prime">([\s\S]*?)<\/div>\s*<\/div>/.exec(html);
  const canColumn = canM ? parseOffCol(canM[1]) : undefined;
  const primeColumn = primeM ? parseOffCol(primeM[1]) : undefined;

  const hardlimitM = /class="hardlimit reveal"[^>]*>([\s\S]*?)<\/div>/.exec(html);
  const hardLimit = hardlimitM ? {
    icon: icon(hardlimitM[1]),
    html: clean(hardlimitM[1].replace(/<i [^>]+><\/i>/, '').replace(/<p>/, '').replace(/<\/p>/, '').trim()),
  } : undefined;

  return {
    modHead,
    ...(legalBar ? { legalBar } : {}),
    ...(canColumn ? { canColumn } : {}),
    ...(primeColumn ? { primeColumn } : {}),
    ...(hardLimit ? { hardLimit } : {}),
  };
}

function parseFailureTabs(html) {
  const modHead = parseModHead(html);
  // Override eyebrowAccent
  modHead.eyebrowAccent = true;

  const tabButtons = all(html, /<button class="ctab[^"]*" type="button" data-i="(\d+)">([\s\S]*?)<\/button>/g);
  const tabPanels = all(html, /<div class="cpanel([^"]*)" data-i="(\d+)"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/g);

  const tabs = tabButtons.map(btnM => {
    const idx = btnM[1];
    const btnHtml = btnM[2];
    const numM = /class="cn">([^<]+)</.exec(btnHtml);
    const labelM = /class="ct">([^<]+)</.exec(btnHtml);
    const pillM = /class="cpill[^"]*">(?:<i[^>]+><\/i>)?([^<]+)</.exec(btnHtml);
    const isLocked = btnHtml.includes('cpill lk');

    const panelM = tabPanels.find(p => p[2] === idx);
    const panelHtml = panelM ? panelM[3] : '';
    const ico = icon(panelHtml) || 'info';
    const titleM = /<h4>([\s\S]*?)<span class="secref">/.exec(panelHtml);
    const secrefM = /class="secref">([^<]+)<\/span>/.exec(panelHtml);
    const trapLblM = /class="trap"[^>]*><span class="lbl">([^<]+)<\/span>/.exec(panelHtml);
    const trapTxtM = /class="trap"[^>]*>[\s\S]*?<p>([^<]+)<\/p>/.exec(panelHtml);
    const fixLblM = /class="fix"[^>]*><span class="lbl">([^<]+)<\/span>/.exec(panelHtml);
    const fixTxtM = /class="fix"[^>]*>[\s\S]*?<p>([^<]+)<\/p>/.exec(panelHtml);

    return {
      num: numM ? numM[1].trim() : String(parseInt(idx) + 1).padStart(2, '0'),
      tab: isLocked ? 'NDA' : (labelM ? clean(labelM[1]) : 'NDA'),
      pill: pillM ? clean(pillM[1]) : 'NDA',
      icon: ico,
      title: titleM ? clean(stripAll(titleM[1])) : '',
      secref: secrefM ? clean(secrefM[1]) : '',
      ...(trapLblM ? { trapLabel: clean(trapLblM[1]) } : {}),
      trap: trapTxtM ? clean(trapTxtM[1]) : '',
      ...(fixLblM ? { fixLabel: clean(fixLblM[1]) } : {}),
      fix: fixTxtM ? clean(fixTxtM[1]) : '',
    };
  });

  return { modHead, tabs };
}

function parseEvaluation(html) {
  // Check for iv-bars (scored bars format)
  if (html.includes('iv-bars')) {
    const bars = all(html, /<div class="iv-bar">([\s\S]*?)<\/div>\s*<\/div>/g).map(m => {
      const inner = m[1];
      const nameM = /class="ivn">([\s\S]*?)<\/span>/.exec(inner);
      const valM = /class="ivv">(\d+)<\/span>/.exec(inner);
      const widthM = /class="ivfill" style="--w:(\d+)%"/.exec(inner);
      const name = nameM ? clean(stripAll(nameM[1])) : '';
      const value = valM ? parseInt(valM[1]) : 0;
      const width = widthM ? parseInt(widthM[1]) : value;
      return { name, value, width };
    });

    const modHead = parseModHead(html);
    const flagM = /class="est-flag"[^>]*>([\s\S]*?)<\/span>/.exec(html);
    const noteM = /class="method-note"[^>]*>([\s\S]*?)<\/p>/.exec(html);

    return {
      modHead,
      ...(flagM ? { flag: clean(stripAll(flagM[1])) } : {}),
      bars,
      ...(noteM ? { note: clean(stripAll(noteM[1])) } : {}),
    };
  }

  // Check for method-grid (qualitative)
  if (html.includes('method-grid')) {
    const modHead = parseModHead(html);
    const cards = all(html, /<div class="method-card">([\s\S]*?)<\/div>\s*<\/div>/g).map(cardM => {
      const cardHtml = cardM[1];
      const titleM = /<h3>([^<]+)<\/h3>/.exec(cardHtml);
      const items = all(cardHtml, /<div class="mitem">([\s\S]*?)<\/div>\s*<\/div>/g).map(itemM => {
        const inner = itemM[1];
        const numM = /<span class="mnum">(\d+)<\/span>/.exec(inner);
        const textM = /<p>([\s\S]*?)<\/p>/.exec(inner);
        const text = textM ? clean(textM[1].replace(/<span class="redact">([^<]+)<\/span>/g, '$1 (NDA)')) : '';
        return { type: 'num', num: numM ? numM[1] : '', text };
      });
      return { title: titleM ? clean(titleM[1]) : '', items };
    });
    return { modHead, variant: 'qualitative', cards };
  }

  return undefined;
}

function parseSecurityGrid(html) {
  return parseCapabilityGrid(html); // same structure
}

function parsePricing(html) {
  const modHead = parseModHead(html);

  // Extract the scenarios container first, then split by <div class="scn
  const scenariosM = /class="scenarios reveal">([\s\S]*?)<\/div>\s*<div class="value-foot|<\/section|<\/div>\s*<\/div>\s*<div class="value-foot/.exec(html);
  const scenarioBlock = scenariosM ? scenariosM[1] : html;

  // Split on top-level scenario divs: <div class="scn"> or <div class="scn mid">
  // Use a boundary that matches "scn" followed by " or " (not k, v, p)
  const scenChunks = scenarioBlock.split(/<div class="scn(?:"| mid")/).slice(1);

  const scenarios = scenChunks.map(chunk => {
    const isMid = /^mid"/.test(chunk) || chunk.startsWith(' mid') || scenarioBlock.includes('class="scn mid">') && chunk.includes('scnpill');
    const tierM = /class="scnt">([^<]+)<\/span>/.exec(chunk);
    const pillM = /class="scnpill">([^<]+)</.exec(chunk);
    // scnv: extract value - content between class="scnv"> and </div>
    const scnvM = /class="scnv">([\s\S]*?)<\/div>/.exec(chunk);
    const valBlock = scnvM ? scnvM[1] : '';
    const redactM = /class="redact">([^<]+)<\/span>/.exec(valBlock);
    const smallM = /<small>([^<]+)<\/small>/.exec(valBlock);
    const valueSmall = smallM ? clean(smallM[1]) : '';
    // value is the text content minus <small> and tags
    const rawVal = redactM
      ? redactM[1]
      : stripAll(valBlock.replace(/<small>[^<]*<\/small>/, ''));
    const descM = /class="scnp">([\s\S]*?)<\/p>/.exec(chunk);
    const descRaw = descM ? descM[1] : '';
    const desc = clean(stripAll(descRaw.replace(/<a[^>]+>[\s\S]*?<\/a>/, '')));
    const midFlag = pillM || /mid"/.test(chunk.slice(0, 10));

    return {
      tier: tierM ? clean(tierM[1]) : '',
      value: rawVal.trim(),
      ...(valueSmall ? { valueSmall } : {}),
      desc,
      ...(midFlag ? { mid: true } : {}),
      ...(pillM ? { pill: clean(pillM[1]) } : {}),
    };
  }).filter(s => s.tier || s.value);

  const footnotes = all(html, /<div class="value-foot reveal([^"]*)"[^>]*>([\s\S]*?)<\/div>/g).map(m => {
    const cls = m[1];
    const inner = m[2];
    const ico = icon(inner);
    const liveOnly = cls.includes('live-only') || cls.includes('cy');
    // Remove the icon element, then extract the span content or plain text
    const noIcon = inner.replace(/<i [^>]+><\/i>/, '').trim();
    const spanM = /^<span>([\s\S]*?)<\/span>$/.exec(noIcon);
    const content = spanM
      ? spanM[1].replace(/<a[^>]+>[\s\S]*?<\/a>/g, '').trim()
      : clean(noIcon.replace(/<a[^>]+>[\s\S]*?<\/a>/g, '').trim());
    return { icon: ico, html: clean(content), ...(liveOnly ? { liveOnly: true } : {}) };
  });

  return { modHead, scenarios, footnotes: footnotes.length ? footnotes : undefined };
}

function parseCompetingField(html) {
  const modHead = parseModHead(html);

  const stats = all(html, /<div class="fstat">([\s\S]*?)<\/div>\s*<\/div>/g).map(m => {
    const inner = m[1];
    const nM = /class="fn">(?:<small>([^<]+)<\/small>)?([^<]*)<\/div>/.exec(inner);
    const lM = /class="fl">([^<]+)<\/div>/.exec(inner);
    const nFull = /class="fn">([\s\S]*?)<\/div>/.exec(inner);
    let n = '', nSmall = '';
    if (nFull) {
      const smallM = /<small>([^<]+)<\/small>/.exec(nFull[1]);
      n = clean(nFull[1].replace(/<small>[^<]+<\/small>/g, '').replace(/<span class="redact">([^<]+)<\/span>/g, '$1 (NDA)'));
      nSmall = smallM ? (' / ' + clean(smallM[1])) : '';
    }
    return { n, ...(nSmall ? { nSmall } : {}), l: lM ? clean(lM[1]) : '' };
  });

  // Parse fieldbar
  const barM = /class="fieldbar reveal"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/.exec(html);
  let bar;
  if (barM) {
    const segMs = all(barM[1], /<span class="seg" style="width:([^;]+);background:([^"]+)"><\/span>/g);
    const legMs = all(barM[1], /<span><i[^>]+><\/i><b>([^<]+)<\/b>([^<]+)<\/span>/g);

    const tierMap = {
      'var(--yale)': 'nat',
      'var(--cyan-strong)': 'large',
      'var(--cyan)': 'mid',
      'var(--cyan-soft)': 'bout',
    };

    const segments = segMs.map(m => {
      const pct = parseFloat(m[1]);
      const tier = tierMap[m[2].trim()] || 'mid';
      return { pct, tier };
    });
    const legends = legMs.map((m, i) => {
      const count = clean(m[1]);
      const label = clean(m[2]);
      const tier = segments[i] ? segments[i].tier : 'mid';
      return { count, label, tier };
    });
    if (segments.length) bar = { segments, legends };
  }

  const notes = all(html, /<div class="dq-note reveal">([\s\S]*?)<\/div>/g).map(m => ({
    icon: icon(m[1]),
    html: clean(m[1].replace(/<i [^>]+><\/i>/, '').replace(/<a[^>]+>[\s\S]*?<\/a>/g, '').trim()),
  }));

  const liveFootM = /class="value-foot reveal cy live-only"[^>]*>([\s\S]*?)<\/div>/.exec(html);
  const liveFootnote = liveFootM ? {
    icon: icon(liveFootM[1]),
    html: clean(liveFootM[1].replace(/<i [^>]+><\/i>/, '').trim()),
  } : undefined;

  return {
    modHead, stats,
    ...(bar ? { bar } : {}),
    ...(notes.length ? { notes } : {}),
    ...(liveFootnote ? { liveFootnote } : {}),
  };
}

function parseAgency(html) {
  const modHead = parseModHead(html);
  const photoM = /<img[^>]*src="([^"]+)"[^>]*alt="([^"]+)"/.exec(html);
  const photo = photoM ? photoM[1] : '';
  const photoAlt = photoM ? photoM[2] : '';

  const abodyM = /class="abody">([\s\S]*?)(?=<\/div>)/.exec(html);
  let body = '', attribution = '';
  if (abodyM) {
    const pMs = all(abodyM[1], /<p(?:[^>]*)>([\s\S]*?)<\/p>/g);
    if (pMs.length) {
      body = clean(pMs[0][1]);
      const attrPM = pMs.find(p => p[1].includes('class="attr"') || p[0].includes('attr'));
      const lastP = pMs[pMs.length - 1];
      if (lastP && lastP[1].includes('attr')) {
        attribution = clean(stripAll(lastP[1]));
      } else if (pMs.length > 1) {
        attribution = clean(stripAll(lastP[1]));
      }
    }
  }

  const stats = all(html, /<div><div class="an">([^<]+)<\/div><div class="al">([^<]+)<\/div><\/div>/g)
    .map(m => ({ n: clean(m[1]), l: clean(m[2]) }));

  return {
    modHead, photo, photoAlt, body, stats,
    ...(attribution ? { attribution } : {}),
  };
}

function parseStrategicQuestions(html) {
  const modHead = parseModHead(html);
  const qCards = all(html, /<div class="sq-card">([\s\S]*?)<\/div>\s*<\/div>/g)
    .map(m => {
      const inner = m[1];
      const numM = /class="sqn">([^<]+)</.exec(inner);
      const titleM = /<h3>([^<]+)<\/h3>/.exec(inner);
      const descM = /<p>([^<]+)<\/p>/.exec(inner);
      return {
        num: numM ? clean(numM[1]) : '',
        title: titleM ? clean(titleM[1]) : '',
        desc: descM ? clean(descM[1]) : '',
      };
    });

  // Also handle the s-card or spill formats
  const spills = all(html, /<div class="spill(?:[^"]*)">([\s\S]*?)<\/div>\s*<\/div>/g)
    .map(m => {
      const inner = m[1];
      const qM = /class="sq">([^<]+)<\/p>/.exec(inner);
      const aM = /class="sa">([^<]+)<\/p>/.exec(inner);
      return { q: qM ? clean(qM[1]) : '', a: aM ? clean(aM[1]) : '' };
    });

  if (spills.length) {
    return { modHead, spills, liveOnly: true };
  }

  return { modHead, questions: qCards.length ? qCards : [], liveOnly: true };
}

function parseHowWeWork(html) {
  const modHead = parseModHead(html);
  const cards = all(html, /<div class="apcard reveal"[^>]*>([\s\S]*?)<\/div>/g).map(m => {
    const inner = m[1];
    const titleM = /<h4>([^<]+)<\/h4>/.exec(inner);
    const descM = /<p>([^<]+)<\/p>/.exec(inner);
    return {
      title: titleM ? clean(titleM[1]) : '',
      desc: descM ? clean(descM[1]) : '',
    };
  });

  const lockedM = /class="locked"[^>]*>([\s\S]*?)<\/div>/.exec(html);
  const lockedNote = lockedM ? clean(stripAll(lockedM[1].replace(/<i[^>]+><\/i>/, ''))) : '';

  return { modHead, cards, ...(lockedNote ? { lockedNote } : {}), liveOnly: true };
}

function parseCta(html) {
  function extractBlock(liveOrPast) {
    const eyebrowM = new RegExp(`class="${liveOrPast === 'live' ? 'live' : 'past'}-only">([^<]+)<`).exec(html.match(/class="eyebrow"[^>]*>([\s\S]*?)<\/p>/)?.[1] || '');
    // Use separate sections for live vs past
    const liveEyebrowM = /class="eyebrow"[^>]*>[\s\S]*?class="live-only">([^<]+)</.exec(html);
    const pastEyebrowM = /class="eyebrow"[^>]*>[\s\S]*?class="past-only">([^<]+)</.exec(html);
    const liveH2M = /<h2>[\s\S]*?class="live-only">([^<]+)</.exec(html);
    const pastH2M = /<h2>[\s\S]*?class="past-only">([^<]+)</.exec(html);
    const liveBodyM = /<p>[\s\S]*?class="live-only">([^<]+)</.exec(html);
    const pastBodyM = /<p>[\s\S]*?class="past-only">([^<]+)</.exec(html);
    return {
      live: {
        eyebrow: liveEyebrowM ? clean(liveEyebrowM[1]) : '',
        h2: liveH2M ? clean(liveH2M[1]) : '',
        body: liveBodyM ? clean(liveBodyM[1]) : '',
      },
      past: {
        eyebrow: pastEyebrowM ? clean(pastEyebrowM[1]) : '',
        h2: pastH2M ? clean(pastH2M[1]) : '',
        body: pastBodyM ? clean(pastBodyM[1]) : '',
      },
    };
  }

  const blocks = extractBlock('live');
  const ctaLinks = all(html, /<a class="btn ([^"]+)" href="([^"]+)">([^<]+)<\/a>/g);
  const buttons = ctaLinks.map(m => ({
    label: clean(m[3]),
    href: m[2],
    variant: m[1].includes('btn-cyan') ? 'cyan' : 'ghost',
  }));

  return {
    live: { ...blocks.live, buttons },
    past: { ...blocks.past, buttons },
  };
}

function parseModHead(html) {
  const eyebrowM = /class="eyebrow"[^>]*>(?:<span[^>]+><\/span>)?([^<]+)/.exec(html);
  const h2M = /<h2(?:[^>]*)>([\s\S]*?)<\/h2>/.exec(html);
  const pM = /<p(?![^>]*class)[^>]*>([\s\S]*?)<\/p>/.exec(html);
  return {
    eyebrow: eyebrowM ? clean(eyebrowM[1]).replace(/^[·\s]+/, '').trim() : '',
    h2: h2M ? clean(stripAll(h2M[1])) : '',
    p: pM ? clean(pM[1]) : '',
  };
}

// ─── Study block extractor ───────────────────────────────────────────────────

function extractStudyBlock(content, slug, nextSlug) {
  const start = `slug: '${slug}'`;
  const si = content.indexOf(start);
  const end = nextSlug ? `slug: '${nextSlug}'` : '] as const';
  const ei = content.indexOf(end, si);
  return content.slice(si, ei);
}

function extractSections(block) {
  const map = {};
  const re = /\{\s+cls:[^,]+,\s+(?:id:[^,]+,\s+)?label:\s+"(\d+[^"]+)",[^}]*html:\s+`([\s\S]*?)`\s*\}/g;
  let m;
  while ((m = re.exec(block)) !== null) {
    map[m[1]] = m[2];
  }
  return map;
}

function extractMeta(block, field) {
  const m = new RegExp(`${field}:\\s+"([^"]+)"`).exec(block);
  return m ? m[1] : '';
}

// ─── TypeScript file generator ───────────────────────────────────────────────

function jsVal(v) {
  if (v === undefined || v === null) return 'undefined';
  if (typeof v === 'boolean') return String(v);
  if (typeof v === 'number') return String(v);
  if (typeof v === 'string') return JSON.stringify(v);
  if (Array.isArray(v)) {
    if (v.length === 0) return '[]';
    return `[\n${v.map(item => '    ' + jsVal(item)).join(',\n')},\n  ]`;
  }
  // object
  const entries = Object.entries(v).filter(([, val]) => val !== undefined && val !== null && val !== '' && !(Array.isArray(val) && val.length === 0));
  if (entries.length === 0) return '{}';
  const lines = entries.map(([k, val]) => {
    const safeKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : JSON.stringify(k);
    return `  ${safeKey}: ${jsVal(val)}`;
  });
  return `{\n${lines.join(',\n')},\n}`;
}

function toConstName(slug) {
  return slug.toUpperCase().replace(/-/g, '_') + '_CASE_STUDY';
}

function generateTs(slug, study) {
  const constName = toConstName(slug);
  return `export const ${constName} = ${jsVal(study)} as const;\n`;
}

// ─── Main conversion ─────────────────────────────────────────────────────────

const legacyPath = resolve(ROOT, 'src/lib/constants/pages/sled-case-studies/legacy-case-studies.ts');
const content = readFileSync(legacyPath, 'utf8');

const SLUGS = ['uwyo', 'erie', 'broome', 'west-metro', 'parker-eam', 'berkley', 'ocmboces', 'westchester', 'parker', 'wayne'];

// Map section label prefixes to parser functions
const SECTION_PARSERS = {
  '01 Hero': parseHero,
  '02 At a glance': parseFacts,
  '03 Key dates': parseKeyDates,
  '03 Sole source read': parseAwardModel,
  '04 Key dates': parseKeyDates,
  '04 The differentiator': parseDifferentiator,
  '04 Award model': parseAwardModel,
  '05 Task allocation': parseTaskAllocation,
  '05 The differentiator': parseDifferentiator,
  '05 Where bids fail': parseFailureTabs,
  '05 Where responses fail': parseFailureTabs,
  '06 Task allocation': parseTaskAllocation,
  '06 Award model': parseAwardModel,
  '06 Scope & deliverables': parseCapabilityGrid,
  '06 Competing field': parseCompetingField,
  '07 Task allocation': parseTaskAllocation,
  '07 Where bids fail': parseFailureTabs,
  '07 Scope & platforms': parseCapabilityGrid,
  '08 Where bids fail': parseFailureTabs,
  '08 Award model': parseAwardModel,
  '08 Procurement stage': null, // skip
  '09 Compliance': parseSecurityGrid,
  '09 How scoring works': parseEvaluation,
  '09 Scope & workbook': parseCapabilityGrid,
  '09 Evaluation & eligibility': parseEvaluation,
  '09 Evaluation': parseEvaluation,
  '09 Value model': parsePricing,
  '10 Value & pricing': parsePricing,
  '10 Value model': parsePricing,
  '10 Scope & tasks': parseCapabilityGrid,
  '10 Response sheet': null, // skip
  '10 Capability areas': parseCapabilityGrid,
  '10 Current estate': null, // skip
  '11 Competing field': parseCompetingField,
  '11 Value & pricing': parsePricing,
  '11 Value model': parsePricing,
  '12 Agency context': parseAgency,
  '12 Deliverables': null,
  '12 Law & codes': parseSecurityGrid,
  '12 Compliance': parseSecurityGrid,
  '12 Competing field': parseCompetingField,
  '13 How we work': parseHowWeWork,
  '13 Compliance frameworks': parseSecurityGrid,
  '13 Agency context': parseAgency,
  '13 Strategic questions': parseStrategicQuestions,
  '14 CTA': parseCta,
  '14 How we work': parseHowWeWork,
  '14 Strategic questions': parseStrategicQuestions,
  '14 Agency context': parseAgency,
  '15 Agency context': parseAgency,
  '15 How we work': parseHowWeWork,
  '15 CTA': parseCta,
  '16 How we work': parseHowWeWork,
  '16 CTA': parseCta,
  '17 CTA': parseCta,
};

const SECTION_KEY_MAP = {
  '01 Hero': 'hero',
  '02 At a glance': 'facts',
  '03 Key dates': 'keyDates',
  '03 Sole source read': 'awardModel',
  '04 Key dates': 'keyDates',
  '04 The differentiator': 'differentiator',
  '04 Award model': 'awardModel',
  '05 Task allocation': 'taskAllocation',
  '05 The differentiator': 'differentiator',
  '05 Where bids fail': 'failureTabs',
  '05 Where responses fail': 'failureTabs',
  '06 Task allocation': 'taskAllocation',
  '06 Award model': 'awardModel',
  '06 Scope & deliverables': 'capabilityGrid',
  '06 Competing field': 'competingField',
  '07 Task allocation': 'taskAllocation',
  '07 Where bids fail': 'failureTabs',
  '07 Scope & platforms': 'capabilityGrid',
  '08 Where bids fail': 'failureTabs',
  '08 Award model': 'awardModel',
  '09 Compliance': 'securityGrid',
  '09 How scoring works': 'evaluation',
  '09 Scope & workbook': 'capabilityGrid',
  '09 Evaluation & eligibility': 'evaluation',
  '09 Evaluation': 'evaluation',
  '09 Value model': 'pricing',
  '10 Value & pricing': 'pricing',
  '10 Value model': 'pricing',
  '10 Scope & tasks': 'capabilityGrid',
  '10 Capability areas': 'capabilityGrid',
  '11 Competing field': 'competingField',
  '11 Value & pricing': 'pricing',
  '11 Value model': 'pricing',
  '12 Agency context': 'agency',
  '12 Law & codes': 'securityGrid',
  '12 Compliance': 'securityGrid',
  '12 Competing field': 'competingField',
  '13 How we work': 'techtizApproach',
  '13 Compliance frameworks': 'securityGrid',
  '13 Agency context': 'agency',
  '13 Strategic questions': 'strategicQuestions',
  '14 CTA': 'cta',
  '14 How we work': 'techtizApproach',
  '14 Strategic questions': 'strategicQuestions',
  '14 Agency context': 'agency',
  '15 Agency context': 'agency',
  '15 How we work': 'techtizApproach',
  '15 CTA': 'cta',
  '16 How we work': 'techtizApproach',
  '16 CTA': 'cta',
  '17 CTA': 'cta',
};

const outDir = resolve(ROOT, 'src/lib/constants/pages/sled-case-studies');

for (let i = 0; i < SLUGS.length; i++) {
  const slug = SLUGS[i];
  const nextSlug = SLUGS[i + 1];
  const block = extractStudyBlock(content, slug, nextSlug);
  const sections = extractSections(block);

  const crumb = extractMeta(block, 'crumb');
  const deadline = extractMeta(block, 'deadline');
  const seoTitle = extractMeta(block, 'title');
  const seoDesc = extractMeta(block, 'description');
  const seoOg = extractMeta(block, 'ogImage');

  const study = {
    slug,
    crumb,
    deadline,
    seo: { title: seoTitle, description: seoDesc, ogImage: seoOg },
  };

  for (const [label, sectionHtml] of Object.entries(sections)) {
    const parser = SECTION_PARSERS[label];
    const key = SECTION_KEY_MAP[label];
    if (!parser || !key) continue;

    try {
      let parsed = parser(sectionHtml);
      if (!parsed) continue;

      if (key === 'hero') {
        study.hero = parsed;
      } else if (key === 'facts') {
        study.facts = parsed;
      } else {
        study[key] = parsed;
      }
    } catch (e) {
      console.warn(`[${slug}] Error parsing "${label}": ${e.message}`);
    }
  }

  const constName = toConstName(slug);
  const tsContent = `export const ${constName} = ${JSON.stringify(study, null, 2)} as const;\n`;
  const outPath = resolve(outDir, `${slug}.ts`);
  writeFileSync(outPath, tsContent);
  console.log(`✓ Generated ${slug}.ts`);
}

console.log('\nDone. Review the generated files and run the dev server.');
