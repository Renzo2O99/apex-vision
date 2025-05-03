"use client";

import { useState } from "react";
import BannerLayout from "../layout/Banner/BannerLayout";
import HeaderLayout from "../layout/Header/HeaderLayout";
import NavbarMobile from "../layout/Header/components/NavbarMobile";
import Section from "../utils/Section";

export default function HeroSection() {
  const [navMobile, setNavMobile] = useState(false);

  return (
    <Section 
      dataAnimation="fade-down"
      className="relative overflow-hidden before:w-[38rem] before:h-68 before:bg-[url('/img/layout/circle.png')] before:bg-no-repeat before:absolute before:-top-16 before:left-[36rem] before:hidden lg:before:flex"
    >
      <HeaderLayout 
        setNavMobile={setNavMobile} 
        dataAnimation="fade-down"
        dataDuration="1400"
        dataDelay="800"
      />

      <BannerLayout
        dataAnimation="fade-down"
        dataDuration="1400"
        dataDelay="600"
      />

      <NavbarMobile 
        navMobile={navMobile} 
        setNavMobile={setNavMobile} 
      />
    </Section>
  );
}