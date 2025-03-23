import { createFileRoute } from "@tanstack/react-router";


export const Route = createFileRoute("/home/builder/$builderId")({
  component: BuilderIdComponent,
  loader: async ({ params }) => {
    return {
      builderId: params.builderId
    }
  }
})

function BuilderIdComponent() {
  const { builderId } = Route.useLoaderData();
  return (
    <h3>
      id {builderId}
    </h3>
  )
}