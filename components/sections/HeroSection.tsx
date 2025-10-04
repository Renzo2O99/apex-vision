"use client";

import dynamic from "next/dynamic";
import HeaderLayout from "../layout/Header/HeaderLayout";
import Section from "../utils/Section";
import Loader from "@/app/loader";

const DynamicBannerLayout = dynamic(
  () => import("../layout/Banner/BannerLayout"),
  {
    ssr: false,
    loading: () => <Loader />,
  }
);

export default function HeroSection() {
  return (
    <Section
      dataAnimation="fade-down"
      className="overflow-hidden relative before:w-[38rem] before:h-68 before:bg-[url('/img/layout/circle.png')] before:bg-no-repeat before:absolute before:-top-16 before:left-[36rem] before:hidden lg:before:flex"
    >
      <HeaderLayout
        dataAnimation="fade-down"
        dataDuration="1400"
        dataDelay="800"
      />

      <DynamicBannerLayout
        dataAnimation="fade-down"
        dataDuration="1400"
        dataDelay="600"
      />
    </Section>
  );
}