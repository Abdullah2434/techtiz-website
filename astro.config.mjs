// @ts-check
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { SITE } from "./src/lib/constants/site.ts";

export default defineConfig({
  site: SITE.url,
  adapter: vercel(),
  trailingSlash: "always",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("case-study-2026-08"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
