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
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Lock } from "lucide-react";

const FormPasswordSettings = () => {
  const {
    passwordForm,
    togglePasswordVisibility,
    onPasswordSubmit,
    showPassword,
  } = useAccount();
  return (
    <Form {...passwordForm}>
      <form
        onSubmit={passwordForm.handleSubmit(onPasswordSubmit)}
        className="space-y-4"
      >

        <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
          <FormField
            control={passwordForm.control}
            name="currentPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contraseña Actual</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      type={showPassword.current ? "text" : "password"}
                      placeholder="Ingrese su contraseña actual"
                      {...field}
                    />
                  </FormControl>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="top-0 right-0 absolute px-3 h-full"
                    onClick={() => togglePasswordVisibility("current")}
                  >
                    {showPassword.current ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                    <span className="sr-only">
                      {showPassword.current
                        ? "Ocultar contraseña"
                        : "Mostrar contraseña"}
                    </span>
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={passwordForm.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nueva Contraseña</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      type={showPassword.new ? "text" : "password"}
                      placeholder="Ingrese su nueva contraseña"
                      {...field}
                    />
                  </FormControl>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="top-0 right-0 absolute px-3 h-full"
                    onClick={() => togglePasswordVisibility("new")}
                  >
                    {showPassword.new ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                    <span className="sr-only">
                      {showPassword.new
                        ? "Ocultar contraseña"
                        : "Mostrar contraseña"}
                    </span>
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={passwordForm.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmar Contraseña</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      type={showPassword.confirm ? "text" : "password"}
                      placeholder="Confirme su nueva contraseña"
                      {...field}
                    />
                  </FormControl>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="top-0 right-0 absolute px-3 h-full"
                    onClick={() => togglePasswordVisibility("confirm")}
                  >
                    {showPassword.confirm ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                    <span className="sr-only">
                      {showPassword.confirm
                        ? "Ocultar contraseña"
                        : "Mostrar contraseña"}
                    </span>
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-end">
          <Button type="submit" className="bg-primary max-sm:w-full text-white">
            <Lock className="mr-2 w-4 h-4" />
            Actualizar Contraseña
          </Button>
        </div>
      </form>
    </Form>
  )
}
export default FormPasswordSettings