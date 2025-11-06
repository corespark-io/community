// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://community.corespark.io',
  integrations: [mdx(), sitemap(), icon()],
  base: '/',

  server: {
    allowedHosts: ['corespark.io', 'community.corespark.io', 'web-dev.corespark.io'],
  },
});