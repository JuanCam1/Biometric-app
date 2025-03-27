import { Outlet } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { BuilderProvider } from "@/features/builder/builder/context/builder-provider";

export const Route = createFileRoute("/home/builder")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <BuilderProvider>
      <Outlet />
    </BuilderProvider>
  );
}
