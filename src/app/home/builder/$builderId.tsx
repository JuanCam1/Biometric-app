import { createFileRoute, useRouter } from "@tanstack/react-router";
import { CirclePlus, Search } from "lucide-react";
import ButtonAnimated from "@/components/shared/button-animated";
import ButtonReturn from "@/components/shared/button-return";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import AptByIdBuilderList from "@/features/builder/apartament/sections/aptById-list";
import TooltipData from "@/components/shared/tooltip-data";
import ModalApt from "@/features/builder/apartament/components/modal-apt";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getByIdBuilder } from "@/features/builder/builder/services/builder-api";
import { KeysQuery } from "@/const/keys-query";

export const Route = createFileRoute("/home/builder/$builderId")({
  component: BuilderIdComponent,
  loader: async ({ params }) => {
    return {
      builderId: params.builderId,
    };
  },
});

function BuilderIdComponent() {
  const [isOpenMult, setIsOpenMult] = useState(false);
  const { builderId } = Route.useLoaderData();

  const { isPending, isError, data } = useQuery({
    queryKey: [KeysQuery.builderById],
    queryFn: () => getByIdBuilder(Number(builderId))
  })

  if (isPending) {
    return (
      <div className="6">
        Cargando...
      </div>
    )
  }


  if (isError || !data.data || typeof data.data === "string") {
    return <span>Error: </span>
  }

  const handleOpen = () => {
    setIsOpenMult(true);
  };

  const changeOpen = (open: boolean) => {
    setIsOpenMult(open);
  };


  return (
    <div className="flex flex-col items-center gap-8 p-8 w-full h-full">
      <div className="flex justify-between gap-2 w-full">
        <ButtonReturn />
        <TooltipData textTooltip="Nuevo Apartamento">
          <ButtonAnimated
            goAction={handleOpen}
            classNameButton="bg-primary"
            Icon={CirclePlus}
          />
        </TooltipData>
      </div>
      <Card className="relative dark:bg-zinc-950/80 w-full">
        <CardHeader>
          <CardTitle>Gestión de Apartamentos de {data.data.name} </CardTitle>
          <CardDescription>Administra los apartamentos.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="top-2.5 left-2.5 absolute w-4 h-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar torre..."
                  className="pl-8"
                />
              </div>
            </div>
          </div>
          <AptByIdBuilderList />
        </CardContent>
      </Card>
      <ModalApt
        open={isOpenMult}
        changeOpen={changeOpen}
      />
    </div>
  );
}
