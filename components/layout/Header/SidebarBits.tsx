"use client";

import { StaggeredMenu } from "@/components/StaggeredMenu";
import { useTranslations } from "next-intl";
import { StaggeredMenuItem } from "@/components/StaggeredMenu";

export default function SidebarBits() {
  const t = useTranslations("navbar_section");

  const links: { path: string; textKey: string }[] = [
    { path: "/", textKey: "home" },
    { path: "/company", textKey: "company" },
    { path: "/contact", textKey: "contact" },
    { path: "/signup", textKey: "signUp" },
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
