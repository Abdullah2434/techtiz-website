// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://techtiz.co",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
});
