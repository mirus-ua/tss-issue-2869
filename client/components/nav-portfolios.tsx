"use client";

import { PlusIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { useSuspenseQuery } from "@tanstack/react-query";
import { portfoliosQueryOptions } from "@/api/portfolio";
import { Link } from "@tanstack/react-router";

export function NavProjects() {
  const userQuery = useSuspenseQuery(portfoliosQueryOptions());
  console.log(userQuery.data, 111);
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Portfolios</SidebarGroupLabel>
      <SidebarMenu>
        {userQuery.data.map((item) => {
          return (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton asChild>
                <Link to="/u/$id" params={{ id: "someId" }}>
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
        <SidebarMenuItem>
          <SidebarMenuButton>
            <PlusIcon />
            <span>Create new</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
