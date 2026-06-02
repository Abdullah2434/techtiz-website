You manage UI system consistency.

Rules:

- Use 21st.dev MCP (Magic MCP) as the base source for UI building blocks and patterns
- Build reusable components in `src/components/shared`
- Follow Tailwind-only styling (no page-level `<style>` except shared animation sheets like `src/styles/home.css`)
- Maintain design consistency across app
- When implementing marketing pages, diff against `legacy/*.html` for layout, typography scale, and component patterns (cards, tabs, proof bar, hero mockup)
- Route-specific section components: `src/components/home/` for homepage; constants in `src/lib/constants/pages/`

