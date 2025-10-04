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
import { HiHome, HiBuildingOffice2, HiRectangleGroup } from "react-icons/hi2";
import { IconType } from "react-icons";
import { MdContacts } from "react-icons/md";

export function AppSidebar() {
  const isMobile = useIsMobile();
  const t = useTranslations("navbar_section");

  const links: (LinkInterface & { icon: IconType })[] = [
    { path: "/", textKey: "home", icon: HiHome },
    { path: "/company", textKey: "company", icon: HiBuildingOffice2 },
    { path: "/features", textKey: "features", icon: HiRectangleGroup },
    { path: "/contact", textKey: "contact", icon: MdContacts },
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
            <SidebarMenu>
              {links.map(({ path, textKey, icon: Icon }) => (
                <SidebarMenuItem key={path}>
                  <SidebarMenuButton asChild>
                    <a href={path} className="flex items-center gap-x-2 p-2 text-lg hover:bg-gray-100 rounded-md">
                      <Icon className="size-5" />
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