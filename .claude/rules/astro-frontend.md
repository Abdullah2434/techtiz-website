Astro frontend rules:

- **Structure**: `src/pages` routes, `src/layouts` layouts, `src/components` UI, `src/content` content collections, `public` static assets.
- **Rendering**: server-first by default; use islands (`client:*`) only when necessary.
- **Code style**: keep files small, avoid deep nesting, prefer early returns, prefer `const`.
- **State**: keep state local to islands; avoid global stores unless multiple islands must coordinate.
- **Legacy migration**: compare against `legacy/` HTML before changing marketing UI; preserve section order, interactivity, and breakpoints; extract copy/data to `src/lib/constants/pages/*`.
- **No UI changes**: preserve existing UI structure and styling; refactor only to extract reusable components.
- **No duplication**: extract repeated markup into `src/components/shared/*` and reuse everywhere.
- **Constants**: pages should populate components via typed constants in `src/lib/constants/*` (no repeated hardcoded strings across pages).

