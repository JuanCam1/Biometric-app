import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Building2, Edit, MoreHorizontal, Trash } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import useBuilderProvider from "../hooks/use-builder-provider";
import { getAllBuilder } from "../services/builder-api";
import { KeysQuery } from "@/const/keys-query";

const BuilderList = () => {
  const { changeCountBuilder } = useBuilderProvider();
  const { isPending, isError, data, error } = useQuery({
    queryKey: [KeysQuery.builderList],
    queryFn: getAllBuilder
  })

  useEffect(() => {
    if (data?.data) {
      changeCountBuilder(data.data.length)
    }
  }, [data?.data])

  if (isPending) {
    return (
      <div className="gap-4 grid md:grid-cols-3 lg:grid-cols-6">
        <Skeleton className="rounded-xl h-[125px]" />
        <Skeleton className="rounded-xl h-[125px]" />
        <Skeleton className="rounded-xl h-[125px]" />
        <Skeleton className="rounded-xl h-[125px]" />
        <Skeleton className="rounded-xl h-[125px]" />
        <Skeleton className="rounded-xl h-[125px]" />
      </div>
    )
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div className="gap-4 grid md:grid-cols-3 lg:grid-cols-6">
      {

        data.data ? (
          data.data.map((builder) => (
            <Link
              key={builder.id}
              to="/home/builder/$builderId"
              params={{
                builderId: builder.id.toString(),
              }}
            >
              <Card
                key={builder.id}
                className="dark:bg-zinc-900 dark:border-zinc-600 overflow-hidden"
              >
                <CardHeader className="relative pt-8 pb-2">
                  <div className="flex flex-col justify-start items-start gap-2">
                    <CardTitle className="flex items-center gap-2 md:text-sm">
                      <Building2 className="w-5 h-5" />
                      {builder.name}
                    </CardTitle>
                    <Badge
                      className="text-white"
                      variant={
                        builder.state === "Activo"
                          ? "default"
                          : builder.state === "Inactivo"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {builder.state === "Activo"
                        ? "Activo"
                        : "Inactivo"}
                    </Badge>
                    <div className="top-0 right-0 absolute">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="w-8 h-8">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          align="center"
                          className="dark:bg-zinc-800"
                        >
                          <DropdownMenuLabel>Opciones</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="dark:hover:bg-zinc-900">
                            <Edit className="mr-2 w-4 h-4" />
                            Editar
                          </DropdownMenuItem>
                          <DropdownMenuItem className="dark:hover:bg-zinc-900">
                            <Trash className="mr-2 w-4 h-4" />
                            Eliminar
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pb-4">
                  <div className="space-y-2">
                    <div className="flex text-sm">
                      <span className="text-muted-foreground">Apts: </span>
                      <span className="pl-2 font-medium">
                        {builder.totalApartments}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          <div>No hay torres</div>
        )
      }
    </div>
  );
};

export default BuilderList;
