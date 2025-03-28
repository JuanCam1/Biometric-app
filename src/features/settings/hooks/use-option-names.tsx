import { optionsSettingsSchema } from "../schemas/options-schema";
import type { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { changeNamesSettings } from "../services/settings-api";
import { queryClient } from "@/lib/query";
import { KeysQuery } from "@/const/keys-query";
import { toast } from "sonner";
import { notification } from "@/lib/notification";

type SistemaFormValues = z.infer<typeof optionsSettingsSchema>;

interface Props {
  builderName: string;
  aptName: string;
  id: number;
  maxVehiclesPerResident: number;
}
const useOptionsNames = ({ builderName, aptName, id, maxVehiclesPerResident }: Props) => {

  const namesMutation = useMutation({
    mutationFn: (payload: Omit<SettingOptionsI, "theme">) => {
      return changeNamesSettings(payload);
    }
  })

  const defaultValues: Partial<SistemaFormValues> = {
    builderType: builderName,
    aptType: aptName,
    maxVehiclesPerResident: maxVehiclesPerResident
  };

  const form = useForm<SistemaFormValues>({
    resolver: zodResolver(optionsSettingsSchema),
    defaultValues,
  });

  const onSubmit = (data: SistemaFormValues) => {
    try {
      namesMutation.mutate({
        id: Number(id),
        aptType: data.aptType,
        builderType: data.builderType,
        maxVehiclesPerResident: data.maxVehiclesPerResident
      }, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: [KeysQuery.settingsOptions] })
          notification("Configuración guardada", "success");
        },
      })
    } catch (error) {
      notification("Error al guardar la configuración", "error");
      console.log(error);
    }
  }
  return {
    form,
    onSubmit,
  }
}
export default useOptionsNames