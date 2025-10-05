import { z } from 'astro:content';

export const BlogTagSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullish(),
})

export type BlogTagSchema = z.infer<typeof BlogTagSchema>