import { Outlet } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { AppSidebar } from "@/components/shared/sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export const Route = createFileRoute("/home")({
	component: HomeComponent,
});

function HomeComponent() {
	return (
		<SidebarProvider>
			<AppSidebar side="left" />
			<section className="w-full">
				{/* <div className="fixed border-zinc-500 border-b w-full h-8">
          Navbar
        </div> */}
				{/* <div className="pt-8 w-full h-full"> */}
				<Outlet />
				{/* </div> */}
			</section>
		</SidebarProvider>
	);
}
