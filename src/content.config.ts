import { z, defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';

const periodicTableElements = defineCollection({
  loader: glob({ 
    pattern: "*.md", 
    base: "./data/periodic_elements" 
  }),
  schema: z.object({
    number: z.number(),
    symbol: z.string(),
    name: z.string(),
    stp: z.enum(['gas', 'solid', 'liquid']).optional(),
    density: z.number().optional(),
    weight: z.number().optional(),
    appearance: z.string().optional(),
    period: z.number().optional(),
    block: z.string().optional(),
    group: z.number().optional(),
    configuration: z.array(z.number()).optional(),
    oxidation_states: z.array(z.union([z.number(), z.string()])).optional(),
    cas_number: z.array(z.string()).optional(),
    year_discovered: z.number().optional(),
    discovered_by: z.string().optional(),
    year_named: z.number().optional(),
    named_by: z.string().optional(),
    name_meaning: z.string().optional(),
    image: z.string().optional(),
    wiki: z.string().optional(),
    href: z.string().optional(),
    description: z.string().optional(),
  }),
});

const periodicTableElementsList = defineCollection({
  loader: glob({ 
    pattern: "*.md", 
    base: "./data/periodic_elements" 
  }),
  schema: z.object({
    number: z.number(),
    symbol: z.string(),
    name: z.string(),
    density: z.number().optional(),
    weight: z.number().optional(),
    appearance: z.string().optional(),
    image: z.string().optional(),
    href: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = {
  periodic_elements: periodicTableElements,
  periodic_elements_list: periodicTableElementsList,
};