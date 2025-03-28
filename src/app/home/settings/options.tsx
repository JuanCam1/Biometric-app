import { createFileRoute } from "@tanstack/react-router";
import { Paintbrush } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

import { KeysQuery } from "@/const/keys-query";
import { getSettingsOptions } from "@/features/settings/services/settings-api";
import FormOptionsSettings from "@/features/settings/components/form-options-settings";
import ToggleModeSettings from "@/features/settings/components/toggle-mode-settings";
import SkeletonOptionsSettings from "@/features/settings/components/skeleton-options-settings";

import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { notification } from "@/lib/notification";

export const Route = createFileRoute("/home/settings/options")({
  component: OptionsComponent,
});

function OptionsComponent() {
  const { isPending, isError, data } = useQuery({
    queryKey: [KeysQuery.settingsOptions],
    queryFn: getSettingsOptions
  })

  if (isPending) {
    return <SkeletonOptionsSettings />
  }

  if (isError || !data.data || typeof data.data === "string") {
    notification("Error al obtener la configuración", "error");
    return <SkeletonOptionsSettings />
  }

  const { id, theme, builderType, aptType, maxVehiclesPerResident } = data.data;

  return (
    <div className="flex flex-col items-center gap-8 p-8 w-full h-full">
      <Card className="dark:bg-zinc-950/80 w-full">
        <CardHeader>
          <CardTitle>Configuración de opciones</CardTitle>
          <CardDescription>
            Actualiza la información de las opciones de la plataforma.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <h3 className="flex items-center mb-4 font-medium text-lg">
              <Paintbrush className="mr-2 w-5 h-5" />
              Tema de la Aplicación
            </h3>
            <ToggleModeSettings id={id} themeDb={theme} />
          </div>

          <Separator className="my-6" />
          <FormOptionsSettings
            id={id}
            builderName={builderType}
            aptName={aptType}
            maxVehiclesPerResident={maxVehiclesPerResident}
          />
        </CardContent >
      </Card>
    </div >

  );
}
