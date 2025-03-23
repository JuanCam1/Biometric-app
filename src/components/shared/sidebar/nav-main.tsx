import { Link } from "@tanstack/react-router";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { pathsSidebar } from "./paths-sidebar";

const NavMain = () => {
  return (
    <SidebarGroup>
      <Separator />
      <SidebarMenu>
        {pathsSidebar.map((item) => (
          <SidebarMenuItem className="mt-2" key={item.title}>
            <Link
              to={item.url}
              activeProps={{ className: "font-bold text-blue-500" }}
            >
              <SidebarMenuButton className="text-sidebar-foreground/70">
                <item.icon className="text-sidebar-foreground/70" />
                <span className="text'white">{item.title}</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default NavMain;
