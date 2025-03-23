import { createFileRoute } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Moon,
  Paintbrush,
  Save,
  Sun,
  Building2,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { type Theme, useTheme } from "@/contexts/theme-provider";
import { cn } from "@/lib/utils";

// Definir el esquema de validación
const sistemaFormSchema = z.object({
  nombreTorres: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  nombreApartamentos: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
});

type SistemaFormValues = z.infer<typeof sistemaFormSchema>;

// Datos de ejemplo pre-cargados

export const Route = createFileRoute("/home/settings/options")({
  component: OptionsComponent,
});

function OptionsComponent() {
  const { theme, setTheme } = useTheme();

  const defaultValues: Partial<SistemaFormValues> = {
    nombreTorres: "Torres",
    nombreApartamentos: "Apartamentos",
  };
  // Inicializar el formulario con react-hook-form
  const form = useForm<SistemaFormValues>({
    resolver: zodResolver(sistemaFormSchema),
    defaultValues,
  });

  // Función para manejar el envío del formulario
  function onSubmit(data: SistemaFormValues) {
    // Actualizar el tema
    console.log(data);
  }


  const onChangeTheme = (theme: Theme) => {
    setTheme(theme);
  }

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

            <div className="flex flex-col gap-3 w-full">
              <div className="flex justify-center gap-3 w-full">
                <button
                  onClick={() => onChangeTheme("light")}
                  type="button"
                  className={cn("flex flex-col justify-between items-center dark:bg-zinc-800 bg-stone-100 hover:bg-stone-200 dark:hover:bg-zinc-900 p-4 border-2 border-stone-100 dark:border-zinc-800 rounded-md w-1/3 transition-all delay-75 ease-out", theme === "light" && "bg-stone-200 border-stone-200 dark:bg-zinc-900 dark:border-zinc-600")}
                >
                  <Sun className="mb-2 w-6 h-6" />
                  <span className="font-medium">Claro</span>
                </button>

                <button
                  onClick={() => onChangeTheme("dark")}
                  type="button"
                  className={cn("flex flex-col justify-between items-center dark:bg-zinc-800 bg-stone-100 hover:bg-stone-200 dark:hover:bg-zinc-900 p-4 border-2 border-stone-100 dark:border-zinc-800 rounded-md w-1/3 transition-all delay-75 ease-out", theme === "dark" && "bg-stone-200 border-stone-200 dark:bg-zinc-900 dark:border-zinc-600")}
                >
                  <Moon className="mb-2 w-6 h-6" />
                  <span className="font-medium">Oscuro</span>
                </button>

                <button
                  onClick={() => onChangeTheme("system")}
                  type="button"
                  className={cn("flex flex-col justify-between items-center dark:bg-zinc-800 bg-stone-100 hover:bg-stone-200 dark:hover:bg-zinc-900 p-4 border-2 border-stone-100 dark:border-zinc-800 rounded-md w-1/3 transition-all delay-75 ease-out", theme === "system" && "bg-stone-200 border-stone-200 dark:bg-zinc-900 dark:border-zinc-600")}
                >
                  <div className="flex space-x-1">
                    <Sun className="w-6 h-6" />
                    <Moon className="w-6 h-6" />
                  </div>
                  <span className="font-medium">Sistema</span>
                </button>

              </div>
              <span className="text-muted-foreground text-sm">
                Seleccione el tema que desea utilizar en la aplicación.
              </span>
            </div>
          </div>

          <Separator className="my-6" />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

              {/* Sección de terminología */}
              <div>
                <h3 className="mb-4 font-medium text-lg">
                  Personalización de Términos
                </h3>
                <p className="mb-4 text-muted-foreground text-sm">
                  Personalice los nombres utilizados en la aplicación para adaptarlos
                  a su contexto.
                </p>

                <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="nombreTorres"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center">
                          <Building2 className="mr-2 w-4 h-4" />
                          Nombre para "Torres"
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormDescription>
                          Ejemplo: Edificios, Bloques, Manzanas
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="nombreApartamentos"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center">
                          <Home className="mr-2 w-4 h-4" />
                          Nombre para "Apartamentos"
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormDescription>
                          Ejemplo: Apts, Viviendas, Casas
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button type="submit">
                  <Save className="mr-2 w-4 h-4" />
                  Guardar Configuración
                </Button>
              </div>
            </form>
          </Form>
        </CardContent >
      </Card>
    </div >

  );
}
