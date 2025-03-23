import { z } from "zod";

export const LimiteAptSchema = z
  .object({
    inicio: z.number().int().positive(),
    limite: z.number().int().positive(),
    id_torre: z.number().int().positive(),
  })
  .refine((data) => data.inicio < data.limite, {
    message: "El inicio no puede ser mayor que el limite",
  });
