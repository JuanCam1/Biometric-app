import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home/settings/options")({
  component: OptionsComponent,
});

function OptionsComponent() {
  return (
    <div>
      opciones
    </div>
  )
}