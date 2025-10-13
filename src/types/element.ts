import { z } from 'astro:content';

export const ElementSchema = z.object({

    // Basic information
    name: z.string(),
    atomic_weight: z.number().nullish(),
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
    series: z.string().nullish(),
    electron_config: z.string().nullish(),
    electrons_per_shell: z.array(z.number()).nullish(),

    // Identification
    cas_number: z.array(z.union([z.string(), z.number()])).nullish(),
    chemspider_id: z.array(z.union([z.string(), z.number()])).nullish(),
    pubchem_id: z.array(z.union([z.string(), z.number()])).nullish(),
    ec_number: z.array(z.union([z.string(), z.number()])).nullish(),

    // Discovery information
    discovered_year: z.union([z.string(), z.number()]).nullish(),
    discovered_by: z.string().nullish(),
    discovery_location: z.string().nullish(),
    named_year: z.union([z.string(), z.number()]).nullish(),
    named_by: z.string().nullish(),
    name_meaning: z.string().nullish(),

    // Physical properties
    stp: z.enum(['gas', 'solid', 'liquid', 'synthetic']).nullish(),
    melting_point: z.object({
      K: z.number().nullish(),
      C: z.number().nullish(),
      F: z.number().nullish(),
    }).nullish(),
    boiling_point: z.object({
      K: z.number().nullish(),
      C: z.number().nullish(),
      F: z.number().nullish(),
    }).nullish(),
    density: z.number().nullish(),
    density_mp: z.number().nullish(),
    density_g_per_cm3: z.number().nullish(),
    density_g_per_L: z.number().nullish(),
    heat: z.object({
      specific_J_per_kgK: z.number().nullish(),
      fusion_kJ_per_mol: z.number().nullish(),
      vaporization_kJ_per_mol: z.number().nullish(),
    }).nullish(),
    molar_heat: z.number().nullish(),
    oxidation_states: z.array(z.union([z.number(), z.string()])).nullish(),
    thermal_conductivity_W_per_mK: z.number().nullish(),
    electronegativity: z.number().nullish(),

    // Atomic properties
    protons: z.number().nullish(),
    neutrons: z.number().nullish(),
    electrons: z.number().nullish(),
    ionization_energy: z.array(z.number()).nullish(),
    ionization_energy_kJ_per_mol: z.number().nullish(),
    atomic_radius: z.object({
      calculated_pm: z.number().nullish(),
      covalent_pm: z.number().nullish(),
      van_der_waals_pm: z.number().nullish(),
    }).nullish(),
    valence: z.number().nullish(),
    electron_affinity_kJ_per_mol: z.number().nullish(),

    // Other information
    abundance_percent: z.object({
      universe: z.number().nullish(),
      crust: z.number().nullish(),
      ocean: z.number().nullish(),
      human_body: z.number().nullish(),
    }).nullish(),
    isotopes_count: z.number().nullish(),
    stable_isotopes_count: z.number().nullish(), 
    facts: z.array(z.string()).max(4, 'Too many facts').nullish(),

    // Reference information
    image: z.string().nullish(),
    wiki: z.string().nullish(),
    href: z.string().nullish(),
    references: z.array(z.string()).nullish(),
  })

export type ElementSchema = z.infer<typeof ElementSchema>