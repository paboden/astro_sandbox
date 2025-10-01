import { z, defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { MenuItemSchema } from "@/lib/Schema/menu_item"

// Define the Periodical Elements (elements) collection.
const elements = defineCollection({
  loader: glob({ 
    pattern: "*.md", 
    base: "./src/content/elements" 
  }),
  schema: z.object({
    number: z.number().max(118, 'Element number does not exist'),
    symbol: z.string().max(3, "Symbol too long"),
    name: z.string(),
    stp: z.enum(['gas', 'solid', 'liquid', 'synthetic']).nullish(),
    density: z.number().nullish(),
    weight: z.number().nullish(),
    molar_volume: z.number().nullish(),
    classification: z.string().nullish(),
    appearance: z.string().nullish(),
    facts: z.array(z.string()).max(4, 'Too many facts').nullish(),
    color: z.string().nullish(),
    period: z.number().nullish(),
    block: z.string().nullish(),
    group: z.number().nullish(),
    group_name: z.string().nullish(),
    configuration: z.array(z.number()).nullish(),
    oxidation_states: z.array(z.union([z.number(), z.string()])).nullish(),
    cas_number: z.array(z.string()).nullish(),
    chemspider_id: z.number().nullish(),
    pubchem_id: z.number().nullish(),
    ec_number: z.string().nullish(),
    year_discovered: z.union([z.string(), z.number()]).nullish(),
    year_named: z.union([z.string(), z.number()]).nullish(),
    discovered_by: z.string().nullish(),
    named_by: z.string().nullish(),
    name_meaning: z.string().nullish(),
    location: z.string().nullish(),
    image: z.string().nullish(),
    wiki: z.string().nullish(),
    href: z.string().nullish(),
    melting_point: z.array(z.object({
      type: z.enum(['K', 'C', 'F']),
      value: z.number(),
    })).nullish(),
    boiling_point: z.array(z.object({
      type: z.enum(['K', 'C', 'F']),
      value: z.number(),
    })).nullish(),
    vaporization: z.array(z.number()).nullish(),
    protons: z.number().nullish(),
    neutrons: z.number().nullish(),
    electrons: z.number().nullish(),
  }),
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
  main_menu,
  footer_menu,
};