import Container from "@/components/utils/Container";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";
import Logo from "@/public/img/layout/logo.svg";
import NavbarComponent from "./components/NavbarComponent";
import { AnimatedSectionPropsI } from "@/interface";

interface HeaderLayoutProps extends AnimatedSectionPropsI {
  setNavMobile: React.Dispatch<React.SetStateAction<boolean>>
}

export default function HeaderLayout({ setNavMobile, dataAnimation, dataDuration, dataDelay }: HeaderLayoutProps) {
  return (
    <header 
      data-aos={dataAnimation}
      data-aos-duration={dataDuration}
      data-aos-delay={dataDelay}
      className="py-4"
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <Image 
              src={Logo}
              alt={String(Logo)}
              width={0} height={0}
              className="h-8 w-auto"
            />
          </Link>

          <NavbarComponent
            navClass="hidden lg:flex"
            ulClass="flex items-center space-x-12 font-secondary"
          />

          <HiMenu
            onClick={() => setNavMobile(true)}
            className="text-3xl text-white cursor-pointer lg:hidden" 
          />
        </div>
      </Container>
    </header>
  )
}

