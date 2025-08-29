import Container from "@/components/utils/Container";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";
import NavbarComponent from "./components/NavbarComponent";
import LocaleSwitcherMobile from "@/components/utils/LocaleSwitcherMobile";
import Logo from "@/public/img/layout/logo.svg";
import { AnimatedSectionPropsI } from "@/interface";

interface HeaderLayoutProps extends AnimatedSectionPropsI {
  setNavMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HeaderLayout({
  setNavMobile,
  dataAnimation,
  dataDuration,
  dataDelay,
}: HeaderLayoutProps) {
  return (
    <header
      data-aos={dataAnimation}
      data-aos-duration={dataDuration}
      data-aos-delay={dataDelay}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt={String(Logo)}
              width={0}
              height={0}
              className="h-8 w-auto"
            />
          </Link>

          <NavbarComponent
            navClass="hidden lg:flex"
            ulClass="flex items-center space-x-12 font-secondary"
          />

          <div className="flex items-center gap-3 lg:hidden">
            <LocaleSwitcherMobile />
            <HiMenu
              onClick={() => setNavMobile(true)}
              className="text-3xl text-white cursor-pointer"
            />
          </div>
        </div>
      </Container>
    </header>
  );
}
