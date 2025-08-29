"use client";

import { Sidebar } from "primereact/sidebar";
import { IoClose } from "react-icons/io5";
import { useTranslations } from "next-intl";
import { LinkInterface } from "@/interface";
import HoverLink from "../../../utils/HoverLink";

interface NavbarMobileProps {
  navMobile: boolean;
  setNavMobileAction: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavbarMobile({ navMobile, setNavMobileAction }: NavbarMobileProps) {
  const t = useTranslations("navbar");

  // Tus links de navegación
  const links: LinkInterface[] = [
    { path: "/", textKey: "home" },
    { path: "#", textKey: "company" },
    { path: "#", textKey: "features" },
  ];

  return (
    <Sidebar
      visible={navMobile}
      onHide={() => setNavMobileAction(false)}
      position="right"
      className="p-sidebar-sm bg-transparent border-none"
      maskClassName="backdrop-blur-[2px]"
      content={({ hide }) => (
        // Contenedor principal con fondo azul muy oscuro, casi negro
        <div className="flex flex-col h-full bg-slate-950/90 backdrop-blur-xl shadow-2xl text-white w-full" style={{ minWidth: 260, maxWidth: 320 }}>
          <div className="flex items-center justify-between px-4 pt-4 pb-3">
            <span className="inline-flex items-center gap-3">
              <svg width="32" height="32" viewBox="0 0 35 35" fill="none">
                <circle cx="17.5" cy="17.5" r="17.5" fill="var(--color-celeste-500)" />
                <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold" dy=".3em">A</text>
              </svg>
              <span className="font-semibold text-xl text-white">Apex Vision</span>
            </span>
            <button
              type="button"
              onClick={(e) => hide(e)}
              className="h-9 w-9 flex items-center justify-center rounded-full border-none bg-transparent hover:bg-white/10 transition-colors"
              aria-label="Cerrar menú"
            >
              <IoClose className="text-2xl text-gray-200" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto mt-4">
            <ul className="flex flex-col gap-1 py-4 px-4">
              {links.map((link) => (
                <li key={link.textKey}>
                  <HoverLink
                    href={link.path}
                    className="block py-3 px-3 rounded text-gray-100 text-base font-medium hover:bg-white/5 transition-colors"
                  >
                    {t(link.textKey)}
                  </HoverLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    />
  )
}
