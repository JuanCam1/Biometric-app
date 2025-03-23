import {
	BadgeCheck,
	Bell,
	ChevronsUpDown,
	CreditCard,
	LogOut,
	Sparkles,
	Settings,
} from "lucide-react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";
import { Link } from "@tanstack/react-router";

const NavUser = () => {
	const { isMobile } = useSidebar();
	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton>
							<Settings className="text-sidebar-foreground/70" />
							<span>Configuración</span>
							<ChevronsUpDown className="ml-auto size-4" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="dark:bg-zinc-950 rounded-lg w-[--radix-dropdown-menu-trigger-width] min-w-56"
						side={isMobile ? "bottom" : "right"}
						align="end"
						sideOffset={4}
					>
						<DropdownMenuGroup>
							<DropdownMenuItem className="hover:bg-zinc-300 cursor-pointer">
								<Sparkles />
								Información de la empresa
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem className="hover:bg-zinc-300 cursor-pointer">
								<BadgeCheck />
								Cuenta
							</DropdownMenuItem>
							<DropdownMenuItem className="hover:bg-zinc-300 cursor-pointer">
								<CreditCard />
								Cambio de Contraseña
							</DropdownMenuItem>
							<DropdownMenuItem className="hover:bg-zinc-300 cursor-pointer">
								<Link to="/home/dashboard" className="flex items-center gap-2">
									<Bell />
									Modo Aplicación
								</Link>
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="hover:bg-zinc-300 cursor-pointer">
							<Link to="/" className="flex items-center gap-2">
								<LogOut />
								Salir
							</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
};

export default NavUser;
