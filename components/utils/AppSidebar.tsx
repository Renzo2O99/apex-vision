"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useTranslations } from "next-intl";
import { LinkInterface } from "@/interface";

export function AppSidebar() {
  const isMobile = useIsMobile();
  const t = useTranslations("navbar_section");

  const links: LinkInterface[] = [
    { path: "/", textKey: "home" },
    { path: "/company", textKey: "company" },
    { path: "/features", textKey: "features" },
    { path: "/contact", textKey: "contact" },
  ];

  if (!isMobile) {
    return null;
  }

  return (
    <Sidebar side="right">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>General</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="[&_a]:justify-start">
              {links.map(({ path, textKey }) => (
                <SidebarMenuItem key={path}>
                  <SidebarMenuButton asChild className="text-lg">
                    <a href={path}>
                      <span>{t(textKey)}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}