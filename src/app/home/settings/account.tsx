import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { User, Lock, Upload, Save, Trash, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/home/settings/account")({
  component: AccountComponent,
});

const usuarioFormSchema = z.object({
  nombre: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  apellido: z.string().min(2, {
    message: "El apellido debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor ingrese un email válido.",
  }),
  telefono: z
    .string()
    .min(7, {
      message: "El teléfono debe tener al menos 7 caracteres.",
    })
    .optional(),
});

// Definir el esquema de validación para el cambio de contraseña
const passwordFormSchema = z
  .object({
    currentPassword: z.string().min(8, {
      message: "La contraseña actual debe tener al menos 8 caracteres.",
    }),
    newPassword: z.string().min(8, {
      message: "La nueva contraseña debe tener al menos 8 caracteres.",
    }),
    confirmPassword: z.string().min(8, {
      message:
        "La confirmación de contraseña debe tener al menos 8 caracteres.",
    }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Las contraseñas no coinciden.",
    path: ["confirmPassword"],
  });

type UsuarioFormValues = z.infer<typeof usuarioFormSchema>;
type PasswordFormValues = z.infer<typeof passwordFormSchema>;

// Datos de ejemplo pre-cargados
const defaultValues: Partial<UsuarioFormValues> = {
  nombre: "Juan",
  apellido: "Pérez",
  email: "juan.perez@torresdelparque.com",
  telefono: "+57 315 123 4567",
};

function AccountComponent() {
  const [avatar, setAvatar] = useState<string | null>(
    "/placeholder.svg?height=100&width=100",
  );
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  // Inicializar el formulario de usuario con react-hook-form
  const userForm = useForm<UsuarioFormValues>({
    resolver: zodResolver(usuarioFormSchema),
    defaultValues,
    mode: "onChange",
  });

  // Inicializar el formulario de contraseña con react-hook-form
  const passwordForm = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordFormSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  // Función para manejar el envío del formulario de usuario
  function onUserSubmit(data: UsuarioFormValues) {
    console.log(data);
  }

  // Función para manejar el envío del formulario de contraseña
  function onPasswordSubmit(data: PasswordFormValues) {
    console.log(data);
    passwordForm.reset({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  }

  // Función para manejar la carga del avatar
  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Función para eliminar el avatar
  const handleRemoveAvatar = () => {
    setAvatar("/placeholder.svg?height=100&width=100");
  };

  // Función para alternar la visibilidad de la contraseña
  const togglePasswordVisibility = (field: "current" | "new" | "confirm") => {
    setShowPassword({
      ...showPassword,
      [field]: !showPassword[field],
    });
  };
  return (
    <div className="flex flex-col items-center gap-8 p-8 w-full h-full">
      <Card className="dark:bg-zinc-950/80 w-full">
        <CardHeader>
          <CardTitle>Información de la Cuenta</CardTitle>
          <CardDescription>
            Actualiza la información de tu cuenta.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Sección de información personal */}
          <Form {...userForm}>
            <form
              onSubmit={userForm.handleSubmit(onUserSubmit)}
              className="space-y-8 pb-4"
            >
              <div className="flex sm:flex-row flex-col items-start gap-6">
                <div className="flex flex-col items-center gap-2">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={avatar || ""} alt="Foto de perfil" />
                    <AvatarFallback>
                      <User className="w-12 h-12" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="mt-2"
                      onClick={() =>
                        document.getElementById("avatar-upload")?.click()
                      }
                    >
                      <Upload className="mr-2 w-4 h-4" />
                      Foto
                    </Button>
                    {avatar &&
                      avatar !== "/placeholder.svg?height=100&width=100" && (
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={handleRemoveAvatar}
                        >
                          <Trash className="mr-2 w-4 h-4" />
                          Eliminar
                        </Button>
                      )}
                    <Input
                      id="avatar-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleAvatarUpload}
                    />
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                    <FormField
                      control={userForm.control}
                      name="nombre"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre</FormLabel>
                          <FormControl>
                            <Input placeholder="Nombre" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={userForm.control}
                      name="apellido"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Apellido</FormLabel>
                          <FormControl>
                            <Input placeholder="Apellido" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={userForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={userForm.control}
                    name="telefono"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Teléfono</FormLabel>
                        <FormControl>
                          <Input placeholder="Teléfono" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button type="submit" className="bg-primary max-sm:w-full text-white">
                  <Save className="mr-2 w-4 h-4" />
                  Guardar Cambios
                </Button>
              </div>
            </form>
          </Form>

          <Separator />

          {/* Sección de cambio de contraseña */}
          <div className="pt-4">
            <h3 className="flex items-center mb-4 font-medium text-lg">
              <Lock className="mr-2 w-5 h-5" />
              Cambiar Contraseña
            </h3>

            <Form {...passwordForm}>
              <form
                onSubmit={passwordForm.handleSubmit(onPasswordSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={passwordForm.control}
                  name="currentPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contraseña Actual</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            type={showPassword.current ? "text" : "password"}
                            placeholder="Ingrese su contraseña actual"
                            {...field}
                          />
                        </FormControl>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="top-0 right-0 absolute px-3 h-full"
                          onClick={() => togglePasswordVisibility("current")}
                        >
                          {showPassword.current ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                          <span className="sr-only">
                            {showPassword.current
                              ? "Ocultar contraseña"
                              : "Mostrar contraseña"}
                          </span>
                        </Button>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={passwordForm.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nueva Contraseña</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            type={showPassword.new ? "text" : "password"}
                            placeholder="Ingrese su nueva contraseña"
                            {...field}
                          />
                        </FormControl>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="top-0 right-0 absolute px-3 h-full"
                          onClick={() => togglePasswordVisibility("new")}
                        >
                          {showPassword.new ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                          <span className="sr-only">
                            {showPassword.new
                              ? "Ocultar contraseña"
                              : "Mostrar contraseña"}
                          </span>
                        </Button>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={passwordForm.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirmar Contraseña</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            type={showPassword.confirm ? "text" : "password"}
                            placeholder="Confirme su nueva contraseña"
                            {...field}
                          />
                        </FormControl>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="top-0 right-0 absolute px-3 h-full"
                          onClick={() => togglePasswordVisibility("confirm")}
                        >
                          {showPassword.confirm ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                          <span className="sr-only">
                            {showPassword.confirm
                              ? "Ocultar contraseña"
                              : "Mostrar contraseña"}
                          </span>
                        </Button>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end">
                  <Button type="submit" className="bg-primary max-sm:w-full text-white">
                    <Lock className="mr-2 w-4 h-4" />
                    Actualizar Contraseña
                  </Button>
                </div>
              </form>
            </Form>
          </div>


        </CardContent>
      </Card>


    </div>
  );
}
