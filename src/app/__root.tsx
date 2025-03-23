import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<div className="flex flex-col justify-center items-center gap-6 bg-muted dark:bg-zinc-950 min-h-svh">
			<Outlet />
		</div>
	);
}
