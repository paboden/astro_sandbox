import { z } from 'astro:content';
import { IconSchema } from "@/types/icon"

const baseMenuItemSchema = z.object({
  id: z.string(),
  title: z.string().nullish(),
  url: z.string().nullish(),
  icon: IconSchema.nullish(),
  item_attr: z.array(z.any()).nullish(),
  link_attr: z.array(z.any()).nullish(),
});

type MenuItem = z.infer<typeof baseMenuItemSchema> & {
  links?: MenuItem[];
};

export const MenuItemSchema: z.ZodType<MenuItem> = baseMenuItemSchema.extend({
  links: z.lazy(() => z.array(MenuItemSchema)).optional(),
}).superRefine((data, ctx) => {
  if (!data.title && !data.icon) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "At least a title or an icon is required",
      path: ["title"],
    });
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "At least a title or an icon is required.",
      path: ["icon"],
    });
  }
});

export type MenuItemSchemaType = z.infer<typeof MenuItemSchema>