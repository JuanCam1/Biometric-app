import type { FC } from "react";
import { Building2, Home, Save } from "lucide-react";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useOptionsNames from "../hooks/use-option-names";


interface Props {
  builderName: string;
  aptName: string;
  id: number;
}
const FormOptionsSettings: FC<Props> = ({ id, builderName, aptName }) => {
  const {
    form,
    onSubmit,
  } = useOptionsNames({
    builderName,
    aptName,
    id
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

        <div>
          <h3 className="mb-4 font-medium text-lg">
            Personalización de Términos
          </h3>
          <p className="mb-4 text-muted-foreground text-sm">
            Personalice los nombres utilizados en la aplicación para adaptarlos
            a su contexto.
          </p>

          <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
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
          <Button type="submit" className="bg-primary max-sm:w-full text-white">
            <Save className="mr-2 w-4 h-4" />
            Guardar Configuración
          </Button>
        </div>
      </form>
    </Form>
  )
}
export default FormOptionsSettings