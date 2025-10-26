export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'parks-header-main': '[full-start] minmax(1em, 1fr) [main-start] minmax(0, 40rem) [main-end] minmax(0, 1rem) [side-start] minmax(0, 20rem) [side-end] minmax(1em, 1fr) [full-end]',
      },
      gridTemplateAreas: {
        'parks-header-main': '[full-start] minmax(1em, 1fr) [main-start] minmax(0, 40rem) [main-end] minmax(0, 1rem) [side-start] minmax(0, 20rem) [side-end] minmax(1em, 1fr) [full-end]',
      },
    },
  },
  plugins: [],
};