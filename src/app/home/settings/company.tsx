import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";

import { KeysQuery } from "@/const/keys-query";
import FormCompanySettings from "@/features/settings/components/form-company-settings";
import SkeletonCompanySettings from "@/features/settings/components/skeleton-company-settings";
import { getDataCompany } from "@/features/settings/services/settings-api";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { notification } from "@/lib/notification";

export const Route = createFileRoute("/home/settings/company")({
  component: CompanyComponent,
});

function CompanyComponent() {
  const { isPending, isError, data } = useQuery({
    queryKey: [KeysQuery.settingsCompany],
    queryFn: getDataCompany
  })

  if (isPending) {
    return <SkeletonCompanySettings />
  }

  if (isError || !data.data || typeof data.data === "string") {
    notification("Error al obtener la configuración", "error");
    return <SkeletonCompanySettings />
  }

  console.log("data.data: ", data.data)

  return (
    <div className="flex flex-col items-center gap-8 p-8 w-full h-full">
      <Card className="dark:bg-zinc-950/80 w-full">
        <CardHeader>
          <CardTitle>Información de la Empresa</CardTitle>
          <CardDescription>
            Actualiza la información de tu empresa. Esta información se mostrará
            en reportes y comunicaciones.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormCompanySettings data={data.data} />
        </CardContent>
      </Card>
    </div>
  );
}
