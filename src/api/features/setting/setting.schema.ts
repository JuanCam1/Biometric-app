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
    maxVehiclesPerResident: z.number().min(1),
  });

export const companySettingsSchema = z
  .object({
    id: z.number(),
    name: z.string().min(1),
    description: z.string().min(1),
    logo: z.string().min(1),
    address: z.string().min(1),
    city: z.string().min(1),
    postalCode: z.string().min(1),
    phone: z.string().min(1),
    email: z.string().min(1),
    website: z.string().min(1),
    nit: z.string().min(1),
    randomId: z.string().min(1),
  });