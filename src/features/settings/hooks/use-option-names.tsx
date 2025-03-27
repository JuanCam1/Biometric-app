import { optionsSettingsSchema } from "../schemas/options-schema";
import type { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type SistemaFormValues = z.infer<typeof optionsSettingsSchema>;

interface Props {
  builderName: string;
  aptName: string;
  id: number;
}
const useOptionsNames = ({ builderName, aptName, id }: Props) => {
  console.log(builderName, aptName);

  const defaultValues: Partial<SistemaFormValues> = {
    nombreTorres: builderName,
    nombreApartamentos: aptName,
  };

  const form = useForm<SistemaFormValues>({
    resolver: zodResolver(optionsSettingsSchema),
    defaultValues,
  });

  function onSubmit(data: SistemaFormValues) {
    // Actualizar el tema
    console.log(data, id);
  }
  return {
    form,
    onSubmit,
  }
}
export default useOptionsNames