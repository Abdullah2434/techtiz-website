const LIVE_STATUS_SEGMENT = /( · )?(Live (?:RFI|RFP)|Pre-award)/;

export const LIVE_STATUS_TAGS = new Set(['Live RFI', 'Live RFP', 'Pre-award']);

const liveStatusDotHtml =
  '<span class="sled-cs-live-dot inline-block size-[7px] shrink-0 rounded-full bg-[#43E59B] shadow-[0_0_6px_rgba(67,229,155,0.55)]" aria-hidden="true"></span>';

/** Inserts a pulsing live dot before "Live RFI", "Live RFP", or "Pre-award" in hero eyebrow copy. */
export function formatLiveEyebrowHtml(text: string): string {
  const match = text.match(LIVE_STATUS_SEGMENT);
  if (!match || match.index === undefined) return text;

  const before = text.slice(0, match.index);
  const sep = match[1] ?? '';
  const statusPart = match[2];
  const after = text.slice(match.index + match[0].length);

  return `${before}${sep}<span class="inline-flex items-center gap-1.5">${liveStatusDotHtml}${statusPart}</span>${after}`;
}

export function isLiveStatusTag(tag: string): boolean {
  return LIVE_STATUS_TAGS.has(tag);
}
