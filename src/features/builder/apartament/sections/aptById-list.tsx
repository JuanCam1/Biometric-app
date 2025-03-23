import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Link } from "@tanstack/react-router";
import { Building2, Edit, MoreHorizontal, Trash } from "lucide-react";

type Apt = {
  id: number;
  nombre: string;
  totalResidentes: number;
  estado: "activa" | "inactiva";
};

const apts: Apt[] = [
  {
    id: 1,
    nombre: "Apt 100",
    totalResidentes: 30,
    estado: "activa",
  },
  {
    id: 2,
    nombre: "Apt 101",
    totalResidentes: 30,
    estado: "activa",
  },
  {
    id: 3,
    nombre: "Apt 102",
    totalResidentes: 30,
    estado: "activa",
  },
  {
    id: 4,
    nombre: "Apt 103",
    totalResidentes: 30,
    estado: "inactiva",
  },
  {
    id: 5,
    nombre: "Apt 104",
    totalResidentes: 30,
    estado: "inactiva",
  },
  {
    id: 6,
    nombre: "Apartamento 104",
    totalResidentes: 30,
    estado: "inactiva",
  },
];

const AptByIdBuilderList = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {apts.map((torre) => (
        <Card key={torre.id} className="dark:bg-zinc-900 p-0 dark:border-zinc-600 w-auto overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="md:text-sm">
                {torre.nombre}
              </CardTitle>
            </div>
          </CardHeader>

          <CardContent className="pb-4">
            <div className="space-y-2">
              <div className="flex text-sm">
                <span className="text-muted-foreground">Residentes: </span>
                <span className="pl-2 font-medium">
                  {torre.totalResidentes}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
export default AptByIdBuilderList