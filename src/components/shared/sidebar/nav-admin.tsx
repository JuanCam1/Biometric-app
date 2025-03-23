import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	SidebarGroup,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { pathsAdmin } from "./paths-sidebar";

const NavAdmin = () => {
	return (
		<SidebarGroup>
			<Separator />
			<SidebarMenu className="mt-2">
				<Collapsible
					asChild
					defaultOpen={pathsAdmin.isActive}
					className="group/collapsible"
				>
					<SidebarMenuItem>
						<CollapsibleTrigger asChild>
							<SidebarMenuButton tooltip={pathsAdmin.title}>
								{pathsAdmin.icon && <pathsAdmin.icon />}
								<span>{pathsAdmin.title}</span>
								<ChevronRight className="ml-auto group-data-[state=open]/collapsible:rotate-90 transition-transform duration-200" />
							</SidebarMenuButton>
						</CollapsibleTrigger>
						<CollapsibleContent className="CollapsibleContent">
							<SidebarMenuSub>
								{pathsAdmin.items?.map((subItem) => (
									<SidebarMenuSubItem key={subItem.title}>
										<SidebarMenuSubButton asChild>
											<Link
												to={subItem.url}
												activeProps={{ className: "font-bold text-blue-600" }}
											>
												<span>{subItem.title}</span>
											</Link>
										</SidebarMenuSubButton>
									</SidebarMenuSubItem>
								))}
							</SidebarMenuSub>
						</CollapsibleContent>
					</SidebarMenuItem>
				</Collapsible>
			</SidebarMenu>
		</SidebarGroup>
	);
};

export default NavAdmin;
