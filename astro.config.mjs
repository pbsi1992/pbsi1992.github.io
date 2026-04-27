// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // This is required for GitHub Pages to generate correct sitemaps and canonical URLs
  site: 'https://pbsi1992.github.io',
  
  // Since your repo is named exactly 'pbsi1992.github.io', 
  // your site lives at the root, so base is '/'
  base: '/',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});