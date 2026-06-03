---
name: sled-strategy
description: >-
  Authors and updates U.S. SLED marketing copy for Techtiz per
  legacy/techtiz-sled-strategy.pdf. Use when editing src/pages/us-sled,
  src/components/sled, sled-hub constants, capability statement, teaming
  inquiry, compliance/trust sections, or prime-contractor positioning.
---

# U.S. SLED strategy (site content)

## When to use

- Building or revising pages under `src/pages/us-sled/`
- Rewriting hero, trust bar, pain points, engagement models, or past performance
- Adding compliance roadmap, security readiness, or teaming CTAs

## Workflow

1. **Read** `legacy/techtiz-sled-strategy.pdf` (8-page assessment). For tables and P0–P2 checklist without opening the PDF, see [strategy-reference.md](strategy-reference.md).
2. **Map** requested change to a route and constants file (see File map below).
3. **Draft** copy in the matching `src/lib/constants/pages/*.ts` export; keep `.astro` presentational.
4. **Verify** against the checklist in strategy-reference.md (signal alignment, NDA-safe, procurement language).
5. **SEO:** update the page's `*_SEO` object (title, description, `canonicalPath` under `/us-sled/`).

## File map

| Route | Page | Constants / components |
|-------|------|---------------------------|
| `/us-sled/` | `index.astro` | `sled-hub.ts` → `SledHubHero`, `SledTrustStrip`, sections |
| `/us-sled/how-we-engage/` | `how-we-engage.astro` | `how-we-engage.ts` |
| `/us-sled/capabilities/` | `capabilities.astro` | capabilities constants + `Capabilities*` components |
| `/us-sled/operating-model/` | `operating-model.astro` | operating-model constants |
| `/us-sled/contact/` | `contact.astro` | contact constants + inquiry |
| `/us-sled/capability-statement/` | `capability-statement.astro` | PDF/download CTA |
| `/us-sled/case-studies/` | `case-studies.astro` | NDA-safe case narratives |

Shared: `SledLayout.astro`, `src/styles/sled.css`, `public/scripts/sled-hub.js` (hub interactivity only).

## Messaging pillars (from strategy PDF)

1. **Identity:** Active SLED subcontractor behind Tier 1 primes—not a generic AI dev shop.
2. **Trust:** Verifiable registration (UEI/SAM), compliance roadmap (NIST 800-171, ISO 27001), set-aside if applicable.
3. **Teaming:** Formal path—capabilities PDF, structured inquiry, dedicated **sled@techtiz.co**, 24h/1-business-day SLA.
4. **Delivery:** Pre-bid + post-award under teaming letter; map commercial models to **FFP/CPFF**, **T&M/CPIF**, **IDIQ/BPA/MAC** where relevant.
5. **Security:** Background-check-ready staff, CUI handling, FAR/DFARS flow-down acceptance.
6. **Past performance:** NDA-safe active-engagement language; CPARS-style framing; separate commercial vs SLED claims.

## NDA-safe templates

Use when real names/values cannot be published:

- "Active subcontractor support for U.S. SLED prime contractors under NDA."
- "Agency references and performance narratives available upon executed teaming agreement."
- "Active subcontractor on multiple state contracts through a Tier 1 prime. Aggregate value: $[range]." (only with BD approval for range)

## Priority alignment (implementation)

| PDF priority | Site target |
|--------------|-------------|
| P0 Hero SLED-first | `SLED_HERO` in `sled-hub.ts` |
| P0 Trust bar | `TRUST_ITEMS` / `SledTrustStrip` |
| P0 Capabilities CTA | Hero CTAs → `/us-sled/capability-statement/` |
| P0 sled@ contact | `HUB_INQUIRY`, contact page |
| P1 `/sled` hub + nav | `/us-sled/` + main nav link |
| P1 Pain → SLED | `ONSHORE.concerns`, specializations, two-stages copy |
| P1 FAR mapping | how-we-engage / operating-model / capabilities strips |
| P1 Security note | trust strip or dedicated compliance section |
| P2 Pre-bid / tender | `TWO_STAGES.pre`, optional marketing section |
| P2 NAICS footer | `TRUST_ITEMS` or site footer on SLED layout |

## Anti-patterns

- Commercial hero ("Reinvent your business with AI…") on SLED routes
- Private-sector-only logo walls with no SLED/teaming context
- Specific ISO without standard number; "ISO-aligned" alone
- Agency-facing language implying Techtiz meets the customer directly
- Unapproved contract values, agency names, or prime logos

## Additional resources

- Full gap analysis, compliance table, implementation tracker: [strategy-reference.md](strategy-reference.md)
- UI migration: project `astro-html-migration` skill; styling: `ui.mdc` + `src/styles/sled.css`
