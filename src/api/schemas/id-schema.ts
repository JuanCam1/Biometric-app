import { z } from "zod";

export const idSchema = z.number().int().positive("El id debe ser un número positivo");
