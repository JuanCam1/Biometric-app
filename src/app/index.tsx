import { createFileRoute, Link, Navigate } from "@tanstack/react-router";

import { ModeToggle } from "@/components/shared/mode-toggle";
import TypographyH2 from "@/components/shared/typography-h2";
import TypographyP from "@/components/shared/typography-p";

import LoginForm from "@/features/auth/login/sections/login-form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Route = createFileRoute("/")({
  component: LoginPage,
});

function LoginPage() {
  return (
    <Navigate
      to="/home/settings/company"
    />
    // <div className="relative flex flex-col gap-6 w-full max-w-sm">
    //   <div className="top-0 right-0 absolute">
    //     <ModeToggle />
    //   </div>

    //   <div className="flex flex-col justify-center space-y-6 dark:bg-zinc-900 mx-auto px-6 py-8 border-[1px] border-zinc-300 dark:border-zinc-500 rounded-md w-full sm:w-[400px]">
    //     <div className="flex flex-col justify-center items-center gap-2">
    //       <TypographyH2
    //         className="mb-5 p-0 font-extrabold text-primary text-3xl lg:text-4xl tracking-tight scroll-m-20"
    //         text="Iniciar sesión"
    //       />
    //       <Avatar className="size-[8rem] overflow-hidden">
    //         <AvatarImage className="size-full" src="https://github.com/shadcn.png" />
    //         <AvatarFallback className="size-full">CN</AvatarFallback>
    //       </Avatar>
    //       <TypographyP className="text-stone-500 text-sm">
    //         Ingresa tus datos para acceder a tu cuenta
    //       </TypographyP>
    //     </div>
    //     <LoginForm />
    //     <div className="mt-4 text-sm text-center">
    //       <a href="/forgot-password">
    //         <span className="text-primary">¿Olvidaste tu contraseña?</span>
    //       </a>
    //     </div>
    //     <Link to="/home/dashboard">ir</Link>
    //   </div>
    // </div>
  );
}
