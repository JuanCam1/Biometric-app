import { z } from "zod";

export const themeSchema = z
  .object({
    id: z.number(),
    theme: z.enum(["light", "dark", "system"]),
  });


export const namesSettingsSchema = z
  .object({
    id: z.number(),
    builderType: z.string().min(1),
    aptType: z.string().min(1),
  });
