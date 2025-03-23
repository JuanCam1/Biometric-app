import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TypographyH3 from "../typography-h3";

const ProfileNavbar = () => {
	const { open, openMobile } = useSidebar();

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<SidebarMenuButton
					size="lg"
					className="flex flex-col justify-center items-center data-[state=open]:bg-sidebar-accent pt-4 h-40 data-[state=open]:text-sidebar-accent-foreground"
				>
					<Avatar className="w-30 h-30">
						<AvatarImage className="w-20" src="https://github.com/shadcn.png" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					{open || openMobile ? (
						<>
							<TypographyH3
								text="Juan Camilo Rojas Diaz"
								className="pb-0 text-black dark:text-white text-base"
							/>
							<TypographyH3
								text="jcdiaz1998@outlook.es"
								className="text-black dark:text-zinc-400 text-xs"
							/>
						</>
					) : null}
				</SidebarMenuButton>
			</SidebarMenuItem>
		</SidebarMenu>
	);
};

export default ProfileNavbar;
