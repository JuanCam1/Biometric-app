import { Input } from "@/components/ui/input";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import useLogin from "../hooks/use-login";

const Login = () => {
	const { form, onSubmit, showPassword, changeShowPassword, isLoading } =
		useLogin();
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-4 max-sm:px-2"
			>
				<FormField
					control={form.control}
					name="email_user"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Correo Electronico:</FormLabel>
							<FormControl>
								<Input
									placeholder="tu@ejemplo.com"
									className="dark:bg-zinc-950 border-zinc-300 dark:border-zinc-500 rounded-md dark:text-gray-200"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password_user"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Contraseña</FormLabel>
							<FormControl>
								<div className="relative">
									<Input
										type={showPassword ? "text" : "password"}
										className="dark:bg-zinc-950 border-zinc-300 dark:border-zinc-500 rounded-md dark:text-gray-200"
										placeholder="••••••••"
										{...field}
									/>
									<button
										type="button"
										className="top-0 right-0 absolute bg-primary hover:bg-primary/70 px-3 py-2 rounded-md h-full transition-colors delay-75"
										onClick={changeShowPassword}
									>
										{showPassword ? (
											<EyeOff className="w-4 h-4 text-gray-200" />
										) : (
											<Eye className="w-4 h-4 text-gray-200" />
										)}
										<span className="sr-only">
											{showPassword
												? "Ocultar contraseña"
												: "Mostrar contraseña"}
										</span>
									</button>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="flex justify-center mt-6">
					<button
						type="submit"
						className="bg-primary hover:bg-primary/70 px-3 py-2 rounded-md max-sm:w-full font-semibold text-gray-200 transition-colors delay-75"
						disabled={isLoading}
					>
						{isLoading && <Loader2 className="mr-2 w-4 h-4 animate-spin" />}
						Iniciar sesión
					</button>
				</div>
			</form>
		</Form>
	);
};

export default Login;
