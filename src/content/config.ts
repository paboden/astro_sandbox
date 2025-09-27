import { z, defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';

const elements = defineCollection({
  loader: glob({ 
    pattern: "*.md", 
    base: "./src/content/elements" 
  }),
  schema: z.object({
    number: z.number(),
    symbol: z.string(),
    name: z.string(),
    stp: z.enum(['gas', 'solid', 'liquid']).nullish(),
    density: z.number().nullish(),
    weight: z.number().nullish(),
    appearance: z.string().nullish(),
    period: z.number().nullish(),
    block: z.string().nullish(),
    group: z.number().nullish(),
    configuration: z.array(z.number()).nullish(),
    oxidation_states: z.array(z.union([z.number(), z.string()])).nullish(),
    cas_number: z.array(z.string()).nullish(),
    year_discovered: z.number().nullish(),
    discovered_by: z.string().nullish(),
    year_named: z.number().nullish(),
    named_by: z.string().nullish(),
    name_meaning: z.string().nullish(),
    image: z.string().nullish(),
    wiki: z.string().nullish(),
    href: z.string().nullish(),
    description: z.string().nullish(),
  }),
});

export const collections = {
  elements,
};