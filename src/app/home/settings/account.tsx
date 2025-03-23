import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home/settings/account")({
  component: AccountComponent,
});

function AccountComponent() {
  return (
    <div>account</div>
  )
}
