import { z, type CollectionEntry, reference } from 'astro:content';

export const BlogPostSchema = z.object({
  id: z.number(),
  title: z.string(),
  created: z.coerce.date().nullish(),
  changed: z.coerce.date().nullish(),
  tags: z.array(z.string()).nullish(),
  summary: z.string().nullish(),
  image: z.string().nullish(),
  authors: z.array(z.string()).nullish(),
})

export type BlogPostSchema = z.infer<typeof BlogPostSchema>