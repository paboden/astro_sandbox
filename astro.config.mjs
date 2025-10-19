// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';
import { remarkAlert } from "remark-github-blockquote-alert";
import customRemarkCodeTitle from "./src/plugins/customRemarkCodeTitle.js";
import { customExternalLink } from "./src/plugins/customExternalLink.js";
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({

  site: 'http://localhost:4321',

  vite: {
    plugins: [tailwindcss()]
  },

  output: 'static',
  markdown: {
    remarkPlugins: [
      remarkMath,
      remarkAlert,
      [customRemarkCodeTitle, { spaceMarker: "---", replacement: ' ' }],
    ],
    rehypePlugins: [
      rehypeMathjax,
      [customExternalLink, { domain: "mysite.com" }],
    ],
  },

  integrations: [
    icon(),
    sitemap(),
  ]
});