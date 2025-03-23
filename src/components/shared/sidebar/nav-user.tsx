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
        <DropdownMenu >
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton>
              <Settings className="text-sidebar-foreground/70" />
              <span>Configuración</span>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="dark:bg-zinc-800 rounded-lg w-[--radix-dropdown-menu-trigger-width] max-w-40"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <Link to="/home/settings/company">
                <DropdownMenuItem className="gap-2 hover:bg-zinc-300 dark:hover:bg-zinc-900 cursor-pointer">
                  <Sparkles className="size-4" />
                  Empresa
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuGroup>
              <Link to="/home/settings/account">
                <DropdownMenuItem className="gap-2 hover:bg-zinc-300 dark:hover:bg-zinc-900 cursor-pointer">
                  <BadgeCheck className="size-4" />
                  Cuenta
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuGroup>
              <Link to="/home/settings/options">
                <DropdownMenuItem className="gap-2 hover:bg-zinc-300 dark:hover:bg-zinc-900 cursor-pointer">
                  <BadgeCheck className="size-4" />
                  Opciones
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <Link to="/">
              <DropdownMenuItem className="gap-2 hover:bg-zinc-300 dark:hover:bg-zinc-900 cursor-pointer">
                <LogOut className="size-4" />
                Salir
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default NavUser;
