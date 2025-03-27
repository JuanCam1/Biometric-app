import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CirclePlus, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import BuilderList from "@/features/builder/builder/sections/builder-list";
import ModalMultBuilder from "@/features/builder/builder/components/modal-mult-builder";

export const Route = createFileRoute("/home/builder/")({
  component: BuilderComponent,
});

function BuilderComponent() {
  const [isOpenMult, setIsOpenMult] = useState(false);

  const handleOpen = () => {
    setIsOpenMult(true);
  };

  const changeOpen = (open: boolean) => {
    setIsOpenMult(open);
  };
  return (
    <div className="flex flex-col items-center gap-8 p-8 w-full h-full">
      <Card className="relative dark:bg-zinc-950/80 w-full">
        <div className="top-0 right-0 absolute flex gap-2 pt-2 pr-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="default" className="p-2 rounded-lg text-white">
                <CirclePlus className="size-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="dark:bg-zinc-800"
            >
              <DropdownMenuLabel>Nueva Torre</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="gap-2 dark:hover:bg-zinc-900">
                <CirclePlus className="w-4 h-4" />
                Unica
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleOpen} className="gap-2 dark:hover:bg-zinc-900">
                <CirclePlus className="w-4 h-4" />
                Multiples
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <CardHeader>
          <CardTitle>Gestión de Torres</CardTitle>
          <CardDescription>Administra las torres.</CardDescription>
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
          <BuilderList />
        </CardContent>
      </Card>
      <ModalMultBuilder
        open={isOpenMult}
        changeOpen={changeOpen}
      />
    </div>
  );
}
