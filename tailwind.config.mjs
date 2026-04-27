/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'sb-orange': '#FF9500',
        'sb-bg': '#F7F7F8',
        'sb-border': '#F1F1F3',
        'sb-text': '#1A1A1A',
        'sb-muted': '#59595A',
      },
    },
  },
  plugins: [],
}