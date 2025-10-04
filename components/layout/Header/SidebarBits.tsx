"use client";

import { StaggeredMenu } from "@/components/StaggeredMenu";
import { useTranslations } from "next-intl";
import { LinkInterface } from "@/interface";
import { HiHome, HiBuildingOffice2, HiRectangleGroup } from "react-icons/hi2";
import { MdContacts } from "react-icons/md";
import { IconType } from "react-icons";

export default function SidebarBits() {
  const t = useTranslations("navbar_section");

  const links: (Omit<LinkInterface, "textKey"> & { textKey: string; icon: IconType })[] = [
    { path: "/", textKey: "home", icon: HiHome },
    { path: "/company", textKey: "company", icon: HiBuildingOffice2 },
    { path: "/contact", textKey: "contact", icon: MdContacts },
    { path: "/signup", textKey: "signUp", icon: HiRectangleGroup },
  ];

  const menuItems = links.map(link => ({
    label: t(link.textKey),
    ariaLabel: `Go to ${t(link.textKey)} page`,
    link: link.path,
  }));

  return (
    <div className="md:hidden">
      <StaggeredMenu
        isFixed={true}
        position="right"
        items={menuItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={["#B19EEF", "#5227FF"]}
        logoUrl="/img/layout/logo.svg"
        accentColor="#ff6b6b"
      />
    </div>
  );
}
