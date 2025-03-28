import { z } from "zod";

export const companySettingsSchema = z.object({
  name: z
    .string()
    .min(1, "El nombre es obligatorio"),
  city: z
    .string()
    .min(1, "La ciudad es obligatoria"),
  address: z
    .string()
    .optional()
    .refine(val => !val || val.length >= 5, {
      message: "La dirección debe tener al menos 5 caracteres.",
    }),
  postalCode: z
    .string()
    .optional()
    .refine(val => !val || val.length >= 3, {
      message: "El código postal debe tener al menos 3 caracteres.",
    }),
  phone: z
    .string()
    .optional()
    .refine(val => !val || val.length >= 7, {
      message: "El teléfono debe tener al menos 7 caracteres.",
    }),
  email: z
    .string()
    .optional()
    .refine(val => !val || z.string().email().safeParse(val).success, {
      message: "Por favor ingrese un email válido.",
    }),
  website: z
    .string()
    .optional()
    .refine(val => !val || z.string().url().safeParse(val).success, {
      message: "Por favor ingrese una URL válida.",
    }),
  nit: z
    .string()
    .optional()
    .refine(val => !val || val.length >= 9, {
      message: "El NIT debe tener al menos 9 caracteres.",
    }),
  description: z
    .string()
    .optional()
    .refine(val => !val || val.length >= 10, {
      message: "La descripción debe tener al menos 10 caracteres.",
    }),
});
