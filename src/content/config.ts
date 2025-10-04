import { z, defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { MenuItemSchema } from "@/lib/Schema/menu_item";
import { ElementSchema } from "@/lib/Schema/element";
import { BlogPostSchema } from "@/lib/Schema/post";

const elements = defineCollection({
  loader: glob({ 
    pattern: "*.md", 
    base: "./src/content/elements" 
  }),
  schema: ElementSchema,
});

const post = defineCollection({
  loader: glob({ 
    pattern: "*.md", 
    base: "./src/content/blog" 
  }),
  schema: BlogPostSchema,
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
  blog: post,
  main_menu,
  footer_menu,
};