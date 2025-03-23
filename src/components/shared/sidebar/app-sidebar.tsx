import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from "@/components/ui/sidebar";
import ProfileNavbar from "./profile-navbar";
import NavMain from "./nav-main";
import NavAdmin from "./nav-admin";
import NavUser from "./nav-user";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<ProfileNavbar />
			</SidebarHeader>
			<SidebarContent>
				<NavMain />
				<NavAdmin />
			</SidebarContent>
			<SidebarFooter>
				<NavUser />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
