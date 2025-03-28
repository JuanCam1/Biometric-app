import type { FC } from "react";
import { Building2, MapPin, FileText, Upload, Save, Trash } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useCompany from "../hooks/use-company";

interface Props {
  data: CompanyDataI
}


const FormCompanySettings: FC<Props> = ({ data }) => {
  console.log(data);
  const {
    form,
    onSubmit,
    pathLogo,
    handleLogoUpload,
    handleRemoveLogo,
    logoCompany
  } = useCompany({
    data
  });

  console.log("data.logo: ", data.logo);
  console.log("pathLogo: ", pathLogo);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex max-sm:flex-col items-center gap-6 px-6">

          <div className="flex flex-col items-center gap-2 w-[20%]">
            <Avatar className="border border-zinc-500 size-32">
              <AvatarImage
                className="object-cover"
                src={pathLogo}
                alt="Logo de la empresa" />
              <AvatarFallback>
                <Building2 className="w-12 h-12" />
              </AvatarFallback>
            </Avatar>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={() => document.getElementById("logo-upload")?.click()}
              >
                <Upload className="mr-2 w-4 h-4" />
                Logo
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-2"
                disabled={pathLogo === logoCompany}
                onClick={handleRemoveLogo}
              >
                <Trash className="mr-2 w-4 h-4" />
                Eliminar
              </Button>
              <Input
                id="logo-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleLogoUpload}
              />
            </div>
          </div>

          <div className="space-y-4 w-[80%]">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre de la Empresa</FormLabel>
                  <FormControl>
                    <Input  {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descripción</FormLabel>
                  <FormControl>
                    <Textarea
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Máximo 500 caracteres.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="flex items-center mb-4 font-medium text-lg">
            <MapPin className="mr-2 w-5 h-5" />
            Dirección y Contacto
          </h3>

          <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dirección</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="gap-4 grid grid-cols-2">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ciudad</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="postalCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Código Postal</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Teléfono</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sitio Web</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="flex items-center mb-4 font-medium text-lg">
            <FileText className="mr-2 w-5 h-5" />
            Información Fiscal
          </h3>

          <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
            <FormField
              control={form.control}
              name="nit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>NIT</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button type="button" variant="outline">
            Cancelar
          </Button>
          <Button type="submit" className="max-sm:w-full text-white">
            <Save className="mr-2 w-4 h-4" />
            Guardar Cambios
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormCompanySettings;
