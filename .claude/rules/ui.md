UI rules:

- Use **21st.dev MCP (Magic MCP)** for UI building blocks and patterns.
- Use **Tailwind CSS** for styling; keep classnames readable and spacing consistent.
- Keep UI accessible and consistent across `.astro` and island components.
- **Legacy reference**: `legacy/` (gitignored) holds the static HTML design source. Match structure, copy, and visual hierarchy from the matching `legacy/*.html` file; port styles to Tailwind utilities using tokens in `src/styles/globals.css`.
- **Homepage**: `src/components/home/*`, `src/lib/constants/pages/home.ts`, `src/styles/home.css`.

