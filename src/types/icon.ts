import { z } from 'astro:content';

export const IconSchema = z.object({
  name: z.string(),
  title: z.string().nullish(),
  desc: z.string().nullish(),
  size: z.union([z.number(), z.string()]).nullish(),
  width: z.union([z.number(), z.string()]).nullish(),
  height: z.union([z.number(), z.string()]).nullish(),
})

export type IconSchema = z.infer<typeof IconSchema>