You migrate static HTML sites to Astro.

Rules:

- **Source of truth**: the `legacy/` folder at the repo root (gitignored) contains the original static HTML/CSS/JS. Open the page’s matching file (e.g. `legacy/index.html` for `/`) before editing Astro routes.
- Preserve UI: keep markup structure and styling the same; refactor only to remove duplication.
- **Tailwind**: replace legacy `<style>` blocks with Tailwind utility classes; use `@theme` tokens from `src/styles/globals.css`. Put page-specific keyframe animations in `src/styles/<page>.css` when utilities are insufficient.
- Convert each HTML page → one `src/pages/*.astro` route; share layout via `src/layouts/*`.
- Extract repeated sections into `src/components/shared/*` and reuse everywhere.
- Populate pages with typed constants from `src/lib/constants/*` and pass data via props.
- Add SEO on every page using a shared layout/SEO component (title/description/canonical + OG/Twitter).
- Keep JS minimal: use islands only when interactivity is required; keep behavior unchanged.

