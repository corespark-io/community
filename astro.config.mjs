// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import AstroPWA from '@vite-pwa/astro';
import { pwaConfig } from './src/pwa-config.ts';

// https://astro.build/config
export default defineConfig({
  site: 'https://community.corespark.io',
  integrations: [mdx(), sitemap(), icon(), AstroPWA({
    mode: 'production',
    base: '/',
    scope: '/',
    includeAssets: ['favicon.ico'],
    registerType: 'autoUpdate',
    manifest: {
      name: pwaConfig.name,
      short_name: pwaConfig.shortName,
      description: pwaConfig.description,
      theme_color: pwaConfig.themeColor,
      background_color: pwaConfig.backgroundColor,
      display: 'standalone',
      icons: [
        {
          src: 'logo-192x192.webp',
          sizes: '192x192',
          type: 'image/webp'
        },
        {
          src: 'logo-512x512.webp',
          sizes: '512x512',
          type: 'image/webp',
          purpose: 'any maskable'
        }
      ],
    },
    pwaAssets: {
      config: true,
    },
    workbox: {
      navigateFallback: null,
      navigateFallbackDenylist: [
        /^\/members\/verify/, // Never fallback for the verify page
        /\?/,                 // Never fallback for ANY url with a query param
      ],
      clientsClaim: false,
      globPatterns: ['**/*.{css,js,html,png,ico,txt,webp,json,woff,woff2}'],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/[a-z]\.basemaps\.cartocdn\.com\/.*/, // Cache map tiles from CartoDB
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'map-tiles',
          },
        },
        {
          urlPattern: ({ request }) => request.mode === 'navigate',
          handler: 'NetworkFirst',
          options: {
            cacheName: 'app-cache',
            expiration: {
              maxEntries: 50,
            },
            cacheableResponse: {
              statuses: [200],
            },
          },
        },
      ],
    },
  }),],
  base: '/',
  server: {
    allowedHosts: ['corespark.io', 'community.corespark.io', 'web-dev.corespark.io', 'community-dev.corespark.io'],
  },
});