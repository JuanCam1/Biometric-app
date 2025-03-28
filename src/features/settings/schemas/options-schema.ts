import { z } from "zod";

export const optionsSettingsSchema = z.object({
  builderType: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  aptType: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  maxVehiclesPerResident: z.coerce.number().min(1, {
    message: "debe ser mayor a o igual a 1",
  }),
});
