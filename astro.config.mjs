import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import { features, katexPlugin } from './src/lib/markdown.mjs';

export default defineConfig({
  site: 'https://kiran-aman.github.io',
  markdown: {
    // LaTeX ($...$, $$...$$) via KaTeX, and {#id .class} attributes. See src/lib/markdown.mjs.
    processor: satteri({ features, mdastPlugins: [katexPlugin] }),
  },
});
