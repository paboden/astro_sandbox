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

    // Basic information
    name: z.string(),
    weight: z.number().nullish(),
    classification: z.string().nullish(),
    molar_volume: z.number().nullish(),

    // Appearance
    appearance: z.string().nullish(),
    color: z.string().nullish(),

    // Periodic table information
    number: z.number().max(118, 'Element number does not exist'),
    symbol: z.string().max(3, "Symbol too long"),
    period: z.number().nullish(),
    block: z.string().nullish(),
    group: z.number().nullish(),
    configuration: z.array(z.number()).nullish(),
    electrons_per_shell: z.array(z.number()).nullish(),

    // Identification
    cas_number: z.array(z.string()).nullish(),
    chemspider_id: z.number().nullish(),
    pubchem_id: z.number().nullish(),
    ec_number: z.string().nullish(),

    // Discovery information
    year_discovered: z.union([z.string(), z.number()]).nullish(),
    year_named: z.union([z.string(), z.number()]).nullish(),
    discovered_by: z.string().nullish(),
    named_by: z.string().nullish(),
    name_meaning: z.string().nullish(),
    location: z.string().nullish(),

    // Physical properties
    stp: z.enum(['gas', 'solid', 'liquid', 'synthetic']).nullish(),
    melting_point: z.array(z.object({
      type: z.enum(['K', 'C', 'F']),
      value: z.number(),
    })).nullish(),
    boiling_point: z.array(z.object({
      type: z.enum(['K', 'C', 'F']),
      value: z.number(),
    })).nullish(),
    density: z.number().nullish(),
    density_mp: z.number().nullish(),
    heat_fusion: z.number().nullish(),
    vaporization: z.array(z.number()).nullish(),
    molar_heat: z.number().nullish(),

    // Atomic properties
    protons: z.number().nullish(),
    neutrons: z.number().nullish(),
    electrons: z.number().nullish(),
    oxidation_states: z.array(z.union([z.number(), z.string()])).nullish(),
    electronegativity: z.number().nullish(),
    ionization_energy: z.array(z.number()).nullish(),
    atomic_radius: z.number().nullish(),
    covalent_radius: z.array(z.number()).nullish(),
    van_der_waals_radius: z.number().nullish(),

    // Reference information
    image: z.string().nullish(),
    facts: z.array(z.string()).max(4, 'Too many facts').nullish(),
    wiki: z.string().nullish(),
    href: z.string().nullish(),
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