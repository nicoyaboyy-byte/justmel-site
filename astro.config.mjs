// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// When deployed to GitHub Pages without a custom domain, the site lives at
// https://<username>.github.io/<repo>/ — so `base` must match the repo name.
// Once a custom domain is attached, change `site` to the domain and set `base: '/'`.
export default defineConfig({
  site: 'https://nicoyaboyy-byte.github.io',
  base: '/justmel-site',
});
