import {
  RouterProvider,
  createMemoryHistory,
  createRouter,
} from "@tanstack/react-router";

import { routeTree } from "../routeTree.gen";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/query";
import { Toaster } from "sonner";

const memoryHistory = createMemoryHistory({
  initialEntries: ["/"],
});

const router = createRouter({ routeTree, history: memoryHistory });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function Main() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster richColors duration={2000} />
    </QueryClientProvider>
  )
}
