import { z } from "zod";

export const optionsSettingsSchema = z.object({
  nombreTorres: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  nombreApartamentos: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
});
