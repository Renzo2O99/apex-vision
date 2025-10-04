import HoverLink from "@/components/utils/HoverLink";
import LocaleSwitcher from "@/components/utils/LocaleSwitcher";
import { LinkInterface } from "@/interface";
import { useTranslations } from "next-intl";

interface NavbarComponentProps {
  navClass?: string;
  ulClass?: string;
  icon?: React.ReactNode;
}

export default function NavbarComponent({ navClass, ulClass, icon }: NavbarComponentProps) {
  const t = useTranslations("navbar_section");

  const links: LinkInterface[] = [
    { path: "/", textKey: "home" },
    { path: "#", textKey: "company" },
    { path: "#", textKey: "features" },
    { path: "#", textKey: "signUp" },
  ];

  return (
    <nav className={navClass}>
      {icon}

      <ul className={ulClass}>
        {links.map((link, index) => {
          const isLast = index === links.length - 1;

          return isLast ? (
            <li key={index}><LocaleSwitcher /></li>
          ) : (
            <HoverLink key={index} href={link.path}>
              {t(link.textKey)}
            </HoverLink>
          );
        })}
      </ul>
    </nav>
  );
}
