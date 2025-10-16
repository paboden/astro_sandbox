import { z, reference } from 'astro:content';

export const BlogPostSchema = z.object({
  id: z.number(),
  title: z.string(),
  created: z.coerce.date().nullish(),
  changed: z.coerce.date().nullish(),
  tags: z.array(reference('blog_tags')).nullish(),
  summary: z.string().nullish(),
  image: z.string().nullish(),
  authors: z.array(reference('authors')).nullish(),
})

export type BlogPostSchema = z.infer<typeof BlogPostSchema>