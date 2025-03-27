import { useNavigate } from "@tanstack/react-router";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TypographyH3 from "../typography-h3";
import logoProfile from "@/assets/profillem.jpeg";


const ProfileNavbar = () => {
  const { open, openMobile } = useSidebar();
  const navigate = useNavigate();

  const goAccount = () => {
    navigate({
      to: "/home/settings/account",
    });
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          onClick={goAccount}
          size="lg"
          className="flex flex-col justify-center items-center data-[state=open]:bg-sidebar-accent pt-4 h-48 data-[state=open]:text-sidebar-accent-foreground"
        >
          <Avatar className="size-[6rem] overflow-hidden">
            <AvatarImage className="size-full" src={logoProfile} />
            <AvatarFallback className="size-full">CN</AvatarFallback>
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
