import { z } from "zod";

export const companySettingsSchema = z.object({
  nombre: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  direccion: z.string().min(5, {
    message: "La dirección debe tener al menos 5 caracteres.",
  }),
  ciudad: z.string().min(2, {
    message: "La ciudad debe tener al menos 2 caracteres.",
  }),
  codigoPostal: z.string().min(3, {
    message: "El código postal debe tener al menos 3 caracteres.",
  }),
  telefono: z.string().min(7, {
    message: "El teléfono debe tener al menos 7 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor ingrese un email válido.",
  }),
  sitioWeb: z
    .string()
    .url({
      message: "Por favor ingrese una URL válida.",
    })
    .optional()
    .or(z.literal("")),
  nit: z.string().min(5, {
    message: "El NIT debe tener al menos 5 caracteres.",
  }),
  descripcion: z
    .string()
    .max(500, {
      message: "La descripción no puede exceder los 500 caracteres.",
    })
    .optional(),
});
