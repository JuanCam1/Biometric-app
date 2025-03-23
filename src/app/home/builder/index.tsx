import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import BuilderList from "@/features/builder/builder/sections/builder-list";
import { getAllBuilder } from "@/features/builder/builder/services/builder-api";
import { createFileRoute } from "@tanstack/react-router";
import { CirclePlus, Search } from "lucide-react";
import { useEffect } from "react";

export const Route = createFileRoute("/home/builder/")({
  component: BuilderComponent,
});

function BuilderComponent() {

  useEffect(() => {
    builderListFetch();
  }, [])

  const builderListFetch = async () => {
    try {
      const builders = await getAllBuilder();
      console.log(builders);
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div className="flex flex-col items-center gap-8 p-8 w-full h-full">
      <Card className="relative dark:bg-zinc-950/80 w-full">
        <div className="top-0 right-0 absolute pt-2 pr-2">
          <Button className="flex items-center gap-1 text-white">
            <CirclePlus className="w-4 h-4" />
            Nueva Torre
          </Button>
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
    </div>
  );
}
