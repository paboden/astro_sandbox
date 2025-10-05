import { z, defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { MenuItemSchema } from "@/lib/Schema/menu_item";
import { ElementSchema } from "@/lib/Schema/element";
import { BlogPostSchema } from "@/lib/Schema/blog_post";
import { AuthorSchema } from "@/lib/Schema/author";
import { BlogTagSchema } from "@/lib/Schema/blog_tag";

const elements = defineCollection({
  loader: glob({ 
    pattern: "*.md", 
    base: "./src/content/elements" 
  }),
  schema: ElementSchema,
});

const blog = defineCollection({
  loader: glob({ 
    pattern: "*.md", 
    base: "./src/content/blog" 
  }),
  schema: BlogPostSchema,
});

const blog_tags = defineCollection({
  loader: glob({ 
    pattern: "*.md", 
    base: "./src/content/blog_tags" 
  }),
  schema: BlogTagSchema,
});

const authors = defineCollection({
  loader: glob({ 
    pattern: "*.md", 
    base: "./src/content/authors" 
  }),
  schema: AuthorSchema,
});

const main_menu = defineCollection({
  loader: file('./src/content/data/main_menu.json'),
  schema: MenuItemSchema,
});

const footer_menu = defineCollection({
  loader: file('./src/content/data/footer_menu.json'),
  schema: MenuItemSchema,
});

export const collections = {
  elements,
  blog,
  blog_tags,
  authors,
  main_menu,
  footer_menu,
};