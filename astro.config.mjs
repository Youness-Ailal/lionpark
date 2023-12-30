import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/functions";
import sitemap from "@astrojs/sitemap";
import qwikdev from "@qwikdev/astro";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  site: "https://lionpark.netlify.app",
  integrations: [sitemap(), qwikdev(), react()],
  prefetch: true
});