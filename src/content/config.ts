import { z, defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { MenuItemSchema } from "@/types/menu_item";
import { ElementSchema } from "@/types/element";
import { ElementSimpleSchema } from "@/types/element_simple";
import { BlogPostSchema } from "@/types/blog_post";
import { AuthorSchema } from "@/types/author";
import { BlogTagSchema } from "@/types/blog_tag";
import { NpsParksSchema } from "@/types/nps_parks";

const elements = defineCollection({
  loader: glob({ 
    pattern: "*.md", 
    base: "./src/content/elements" 
  }),
  schema: ElementSchema,
});

const periodic_elements_list = defineCollection({
  loader: file("./src/content/data/periodic_table_elements__simple.json", { parser: (text) => JSON.parse(text).data }),
  schema: ElementSimpleSchema,
});

const nps_parks_source = defineCollection({
  loader: glob({ 
    pattern: "*.json", 
    base: "./src/content/data/nps-parks-api" 
  }),
  schema: NpsParksSchema,
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
  periodic_elements_list,
  nps_parks_source,
  blog,
  blog_tags,
  authors,
  main_menu,
  footer_menu,
};