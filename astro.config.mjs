// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nonsoudechukwu.github.io',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  redirects: {
    '/posts/welcome': '/blog/welcome',
  },
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
      wrap: false,
    },
  },
});
