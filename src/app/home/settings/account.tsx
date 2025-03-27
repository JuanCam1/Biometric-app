import { createFileRoute } from "@tanstack/react-router";

import { Lock } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FormUserSettings from "@/features/settings/components/form-user-settings";
import FormPasswordSettings from "@/features/settings/components/form-password-settings";

export const Route = createFileRoute("/home/settings/account")({
  component: AccountComponent,
});

function AccountComponent() {

  return (
    <div className="flex flex-col items-center gap-8 p-8 w-full h-full">
      <Card className="dark:bg-zinc-950/80 w-full">
        <CardHeader>
          <CardTitle>Información de la Cuenta</CardTitle>
          <CardDescription>
            Actualiza la información de tu cuenta.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormUserSettings />
          <Separator />
          <div className="pt-4">
            <h3 className="flex items-center mb-4 font-medium text-lg">
              <Lock className="mr-2 w-5 h-5" />
              Cambiar Contraseña
            </h3>
            <FormPasswordSettings />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
