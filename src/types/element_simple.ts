import { z } from 'astro:content';

export const ElementSimpleSchema = z.object({
    id: z.number().max(118, 'Element number does not exist'),
    symbol: z.string().max(3, "Symbol too long"),
    name: z.string(),
    atomic_weight: z.number().nullish(),
    electron_config: z.string().nullish(),
    series: z.string().nullish(),
    valence: z.number().nullish(),
    discovery_year: z.number().nullish(),
    density_g_per_cm3: z.number().nullish(),
    abundance_percent: z.object({
      universe: z.number().nullish(),
      crust: z.number().nullish(),
      ocean: z.number().nullish(),
      human_body: z.number().nullish(),
    }).nullish(),
    isotopes_count: z.number().nullish(),
  })

export type ElementSimpleSchema = z.infer<typeof ElementSimpleSchema>