//// General markdown import
// import type { MarkdownInstance } from "astro";
// interface Frontmatter {
//   number: number;
//   symbol: string;
//   name: string;
//   image?: string;
//   href?: string;
// }
// const elements = Object.values(
//   import.meta.glob<MarkdownInstance<Frontmatter>>(
//     "@data/periodic_elements/*.md",
//     { eager: true }
//   )
// );
// elements.sort((a, b) => a.frontmatter.number - b.frontmatter.number);