import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import useAccount from "../hooks/use-account";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Save, Trash, Upload, User } from "lucide-react";
import { Input } from "@/components/ui/input";

const FormUserSettings = () => {
  const {
    userForm,
    avatar,
    handleAvatarUpload,
    handleRemoveAvatar,
    onUserSubmit,
  } = useAccount();
  return (
    <Form {...userForm}>
      <form
        onSubmit={userForm.handleSubmit(onUserSubmit)}
        className="space-y-8 pb-4"
      >
        <div className="flex sm:flex-row flex-col items-start gap-6">
          <div className="flex flex-col items-center gap-2">
            <Avatar className="w-24 h-24">
              <AvatarImage src={avatar || ""} alt="Foto de perfil" />
              <AvatarFallback>
                <User className="w-12 h-12" />
              </AvatarFallback>
            </Avatar>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={() =>
                  document.getElementById("avatar-upload")?.click()
                }
              >
                <Upload className="mr-2 w-4 h-4" />
                Foto
              </Button>
              {avatar &&
                avatar !== "/placeholder.svg?height=100&width=100" && (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    onClick={handleRemoveAvatar}
                  >
                    <Trash className="mr-2 w-4 h-4" />
                    Eliminar
                  </Button>
                )}
              <Input
                id="avatar-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarUpload}
              />
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
              <FormField
                control={userForm.control}
                name="nombre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="Nombre" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={userForm.control}
                name="apellido"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Apellido</FormLabel>
                    <FormControl>
                      <Input placeholder="Apellido" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={userForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={userForm.control}
              name="telefono"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Teléfono</FormLabel>
                  <FormControl>
                    <Input placeholder="Teléfono" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit" className="bg-primary max-sm:w-full text-white">
            <Save className="mr-2 w-4 h-4" />
            Guardar Cambios
          </Button>
        </div>
      </form>
    </Form>
  )
}
export default FormUserSettings