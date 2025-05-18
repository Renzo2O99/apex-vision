import HoverLink from "@/components/utils/HoverLink";
import LocaleSwitcher from "@/components/utils/locale-switcher";
import { LinkInterface } from "@/interface";
import { useTranslations } from "next-intl";

interface NavbarComponentProps {
  navClass?: string;
  ulClass?: string;
  icon?: React.ReactNode;
}

export default function NavbarComponent({ navClass, ulClass, icon }: NavbarComponentProps) {
  const t = useTranslations("navbar");

  const links: LinkInterface[] = [
    { path: "/", textKey: "home" },
    { path: "/company", textKey: "company" },
    { path: "/features", textKey: "features" },
    { path: "/sign-up", textKey: "signUp" },
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
            <li key={index}>
              <HoverLink 
                href={link.path}
                className="cursor-none"
              >
                {t(link.textKey)}
              </HoverLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
