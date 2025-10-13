import { z } from 'astro:content';

export const AuthorSchema = z.object({
  username: z.string().trim().regex(
    /^[a-z_]+$/,
    "String can only contain lowercase letters and underscores."
  ).max(255, "Author username is too long."),
  name: z.string().trim().max(255, "Name is too long."),
  email: z.string().trim().email("Invalid email format.").nullish(),
  joined: z.coerce.date().nullish(),
})

export type AuthorSchema = z.infer<typeof AuthorSchema>