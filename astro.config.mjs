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
    base: '/',
    scope: '/',
    includeAssets: ['favicon.ico', 'logo_w_text_white.webp', 'logo_w_text.webp', 'logo.webp', 'fonts/*'],
    registerType: 'autoUpdate',
    manifest: {
      name: pwaConfig.name,
      short_name: pwaConfig.shortName,
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
      navigateFallback: '/',
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,webp,json,woff,woff2}'],
      skipWaiting: true,
      clientsClaim: true,
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/tile\.openstreetmap\.org\/.*/, // Cache map tiles
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'map-tiles',
            expiration: {
              maxEntries: 100, // This should be sufficient for the coverage area
              maxAgeSeconds: 30 * 24 * 60 * 60, // Cache set for 30 days
            },
          },
        },
        {
          urlPattern: /.*/, // Cache all other requests
          handler: 'NetworkFirst',
          options: {
            cacheName: 'app-cache',
            expiration: {
              maxEntries: 500, // Note: This should scale when necessary
              maxAgeSeconds: 365 * 24 * 60 * 60, // Cache set for 1 year
            },
          },
        },
      ],
    },
    devOptions: {
      enabled: false,
      navigateFallbackAllowlist: [/^\/$/],
    }
  }),],
  base: '/',
  server: {
    allowedHosts: ['corespark.io', 'community.corespark.io', 'web-dev.corespark.io', 'community-dev.corespark.io'],
  },
});