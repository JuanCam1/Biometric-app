import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import AptByIdBuilderList from "@/features/builder/apartament/sections/aptById-list";
import { createFileRoute } from "@tanstack/react-router";
import { CirclePlus, Search } from "lucide-react";


export const Route = createFileRoute("/home/builder/$builderId")({
  component: BuilderIdComponent,
  loader: async ({ params }) => {
    return {
      builderId: params.builderId
    }
  }
})

function BuilderIdComponent() {
  const { builderId } = Route.useLoaderData();
  return (
    <div className="flex flex-col items-center gap-8 p-8 w-full h-full">

      <Card className="relative dark:bg-zinc-950/80 w-full">
        <div className="top-0 right-0 absolute pt-2 pr-2">
          <Button className="flex items-center gap-1 text-white">
            <CirclePlus className="w-4 h-4" />
            Nuevo Apartamento
          </Button>
        </div>
        <CardHeader>
          <CardTitle>Gestión de Apartamentos Torre id {builderId}</CardTitle>
          <CardDescription>
            Administra los apartamentos.
          </CardDescription>
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
    </div>
  )
}