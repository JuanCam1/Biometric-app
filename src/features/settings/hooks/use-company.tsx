import { type ChangeEvent, useState } from "react";
import { companySettingsSchema } from "../schemas/company-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";

type EmpresaFormValues = z.infer<typeof companySettingsSchema>;

// Datos de ejemplo pre-cargados
const defaultValues: Partial<EmpresaFormValues> = {
  nombre: "Residencial Torres del Parque",
  direccion: "Calle 45 # 23-67",
  ciudad: "Bogotá",
  codigoPostal: "110231",
  telefono: "+57 601 234 5678",
  email: "admin@torresdelparque.com",
  sitioWeb: "https://www.torresdelparque.com",
  nit: "901.234.567-8",
  descripcion:
    "Complejo residencial con 4 torres y áreas comunes que incluyen piscina, gimnasio, salón comunal y zonas verdes.",
};
const useCompany = () => {
  const [logo, setLogo] = useState<string | null>(
    "/placeholder.svg?height=100&width=100",
  );

  // Inicializar el formulario con react-hook-form
  const form = useForm<EmpresaFormValues>({
    resolver: zodResolver(companySettingsSchema),
    defaultValues,
    mode: "onChange",
  });

  // Función para manejar el envío del formulario
  function onSubmit(data: EmpresaFormValues) {
    console.log(data);
  }

  // Función para manejar la carga del logo
  const handleLogoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogo(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveLogo = () => {
    setLogo("/placeholder.svg?height=100&width=100");
  };

  return {
    form,
    onSubmit,
    logo,
    handleLogoUpload,
    handleRemoveLogo,
  }
}
export default useCompany
