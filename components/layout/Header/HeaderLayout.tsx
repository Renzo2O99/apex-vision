"use client";

import Container from "@/components/utils/Container";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import NavbarComponent from "./components/NavbarComponent";
import Logo from "@/public/img/layout/logo.svg";
import { AnimatedSectionPropsI } from "@/interface";

export default function HeaderLayout({
  dataAnimation,
  dataDuration,
  dataDelay,
}: AnimatedSectionPropsI) {
  return (
    <header
      data-aos={dataAnimation}
      data-aos-duration={dataDuration}
      data-aos-delay={dataDelay}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link className="hidden md:block" href={"/"}>
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
        </div>
      </Container>
    </header>
  );
}
