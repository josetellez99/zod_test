import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z.string().email("mal tipo").length(255).min(1,"no puede estar vacio"),
  password: z.number().int().positive(),
});
