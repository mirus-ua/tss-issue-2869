import * as React from "react";

import { NavProjects } from "@/components/nav-portfolios";

import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { UserProfile } from "@/api/auth";
import { NavSecondary } from "./nav-secondary";

type Props = React.ComponentProps<typeof Sidebar> & {
  userProfile: UserProfile;
};

export function AppSidebar({ userProfile, ...props }: Props) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarContent>
        <NavProjects />
        <NavSecondary />
      </SidebarContent>
    </Sidebar>
  );
}
