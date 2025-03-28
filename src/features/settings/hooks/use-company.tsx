import { type ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";

import { companySettingsSchema } from "../schemas/company-schema";
import { notification } from "@/lib/notification";
// @ts-ignore
import logoCompany from "@/assets/logo.webp";
import { useMutation } from "@tanstack/react-query";
import { updateDataCompany } from "../services/settings-api";
import { queryClient } from "@/lib/query";
import { KeysQuery } from "@/const/keys-query";

type EmpresaFormValues = z.infer<typeof companySettingsSchema>;

interface Props {
  data: CompanyDataI
}
const useCompany = ({ data }: Props) => {
  const [pathLogo, setPathLogo] = useState<string>(logoCompany);

  useEffect(() => {
    if (data.logo) {
      try {
        const blob = new Blob([data.logo.blob], { type: data.logo.type });
        const url = URL.createObjectURL(blob);
        setPathLogo(url);
      } catch (error) {
        console.error("Error al convertir el logo a base64:", error);
      }
    }
  }, [data.logo]);


  const companyMutation = useMutation({
    mutationFn: (payload: SettingsCompanyI) => {
      return updateDataCompany(payload);
    }
  })

  const defaultValues: Partial<EmpresaFormValues> = {
    name: data.name,
    city: data.city,
    address: data.address === "Sin dirección" ? "" : data.address,
    postalCode: data.postalCode === "Sin código postal" ? "" : data.postalCode,
    phone: data.phone === "Sin teléfono" ? "" : data.phone,
    email: data.email === "Sin email" ? "" : data.email,
    website: data.website === "Sin web" ? "" : data.website,
    nit: data.nit === "Sin NIT" ? "" : data.nit,
    description: data.description === "Sin descripción" ? "" : data.description,
  };

  const form = useForm<EmpresaFormValues>({
    resolver: zodResolver(companySettingsSchema),
    defaultValues,
  });

  const onSubmit = async (dataForm: EmpresaFormValues) => {
    const { name, city, address, postalCode, phone, email, website, nit, description } = dataForm;
    const randomId = new Date().getTime().toString();

    const dataCompany: SettingsCompanyI = {
      id: data.id,
      name,
      city,
      logo: pathLogo === logoCompany ? "Sin logo" : pathLogo,
      address: address ? address : "Sin dirección",
      postalCode: postalCode ? postalCode : "Sin código postal",
      phone: phone ? phone : "Sin teléfono",
      email: email ? email : "Sin email",
      website: website ? website : "Sin web",
      nit: nit ? nit : "Sin NIT",
      description: description ? description : "Sin descripción",
      randomId
    };

    try {
      companyMutation.mutate(dataCompany, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: [KeysQuery.settingsCompany] })
          notification("Configuración guardada", "success");
        },
      })
    } catch (error) {
      notification("Error al guardar la configuración", "error");
      console.log(error);
    }
  }

  const handleLogoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPathLogo(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveLogo = () => {
    setPathLogo(logoCompany);
  };

  return {
    form,
    onSubmit,
    pathLogo,
    handleLogoUpload,
    handleRemoveLogo,
    logoCompany
  }
}
export default useCompany
