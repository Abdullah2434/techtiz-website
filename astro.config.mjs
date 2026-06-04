// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { SITE } from "./src/lib/constants/site.ts";

export default defineConfig({
  site: SITE.url,
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
});
