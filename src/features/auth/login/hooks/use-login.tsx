import { useState } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schemas/login-schema";

type LoginFormValues = z.infer<typeof loginSchema>;

const useLogin = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const form = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email_user: "",
			password_user: "",
		},
	});

	function onSubmit(data: LoginFormValues) {
		setIsLoading(true);

		// Simulamos una petición al servidor
		setTimeout(() => {
			console.log(data);
			setIsLoading(false);
		}, 1000);
	}

	const changeShowPassword = () => {
		setShowPassword(!showPassword);
	};

	return {
		form,
		showPassword,
		onSubmit,
		changeShowPassword,
		isLoading,
	};
};
export default useLogin;
