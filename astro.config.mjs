import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import katex from 'katex';

// LaTeX in Markdown: $inline$ and $$display$$ math, rendered to HTML with KaTeX at build time.
const render = (tex, displayMode) => ({
  raw: katex.renderToString(tex, { displayMode, throwOnError: false }),
  mdxExpressions: false,
});
const katexPlugin = {
  name: 'katex',
  math: (node) => render(node.value, true),
  inlineMath: (node) => render(node.value, false),
};

export default defineConfig({
  site: 'https://kiran-aman.github.io',
  markdown: {
    processor: satteri({ features: { math: true, attributes: true }, mdastPlugins: [katexPlugin] }),
  },
});
