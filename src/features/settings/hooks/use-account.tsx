import type { z } from "zod";
import { passwordSettingsSchema, usuarioSettingsSchema } from "../schemas/account-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

type UsuarioFormValues = z.infer<typeof usuarioSettingsSchema>;
type PasswordFormValues = z.infer<typeof passwordSettingsSchema>;

const defaultValues: Partial<UsuarioFormValues> = {
  nombre: "Juan",
  apellido: "Pérez",
  email: "juan.perez@torresdelparque.com",
  telefono: "+57 315 123 4567",
};

const useAccount = () => {
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
    resolver: zodResolver(usuarioSettingsSchema),
    defaultValues,
    mode: "onChange",
  });

  // Inicializar el formulario de contraseña con react-hook-form
  const passwordForm = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSettingsSchema),
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
  return {
    showPassword,
    userForm,
    passwordForm,
    avatar,
    handleAvatarUpload,
    handleRemoveAvatar,
    togglePasswordVisibility,
    onUserSubmit,
    onPasswordSubmit
  }
}
export default useAccount