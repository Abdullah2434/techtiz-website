const NDA_STAT_LABEL =
  /(?:-based primes|-based firms|in-state primes|Recognized players engaged)/i;

export function isLockedFailureTab(tab: { icon: string; tab?: string; pill?: string }) {
  return tab.icon === 'lock' || tab.tab === 'NDA';
}

export function isNdaStat(stat: { n?: string; value?: string; l?: string; label?: string }) {
  const value = stat.n ?? stat.value ?? '';
  if (/\(NDA\)/i.test(value)) return true;
  const label = stat.l ?? stat.label ?? '';
  return NDA_STAT_LABEL.test(label);
}

export function ndaStatDisplay(stat: { n?: string; value?: string }) {
  return (stat.n ?? stat.value ?? '').replace(/\s*\(NDA\)\s*/gi, '').trim();
}

export function isLockedCapabilityItem(item: {
  locked?: boolean;
  title?: string;
  desc?: string;
  icon?: string;
}) {
  if (item.locked === true) return true;
  if (item.icon === 'lock') return true;
  if (!item.title?.trim() && item.desc?.trim()) return true;
  return false;
}

export function isGatedPricingScenario(scenario: {
  locked?: boolean;
  mid?: boolean;
  recommended?: boolean;
  highlight?: boolean;
  [key: string]: unknown;
}) {
  return (
    scenario.locked === true ||
    scenario.mid === true ||
    scenario.recommended === true ||
    scenario.highlight === true
  );
}

export function isLockedQuestion(q: { locked?: boolean; [key: string]: unknown }) {
  return q.locked === true;
}

/** Blur currency amounts in gated pricing copy. */
export function gatePricingDesc(desc: string) {
  return desc.replace(
    /\$[\d,.]+(?:\+)?(?:\s*(?:per|\/)\s*[\w\s]+)?/gi,
    (match) => `<span class="redact">${match}</span>`,
  );
}

export function htmlHasRedact(html: string) {
  return html.includes('class="redact"') || html.includes("class='redact'");
}

export function htmlHasGateLink(html: string) {
  return html.includes('class="gatelink"') || html.includes("class='gatelink'");
}
