import { z } from "zod";

export const loginSchema = z.object({
	email_user: z.string().email({
		message: "Correo debe ser válido.",
	}),

	password_user: z
		.string()
		.min(2, {
			message: "Contraseña debe tener más de 2 caracteres.",
		})
		.max(20, {
			message: "Contraseña debe tener menos de 20 caracteres.",
		}),
});
