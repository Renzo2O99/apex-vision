"use client";

import dynamic from "next/dynamic";
import Loader from "@/app/loader";

// --- Importaciones Dinámicas con Loader ---

const MarqueeSection = dynamic(
  () => import("@/components/sections/MarqueeSection"),
  { ssr: false } // Marquee carga rápido, el loader es opcional
);

const ExperienceSection = dynamic(
  () => import("@/components/sections/ExperienceSection"),
  { ssr: false, loading: () => <Loader /> }
);
const VideoSection = dynamic(
  () => import("@/components/sections/VideoSection"),
  { ssr: false, loading: () => <Loader /> }
);
const HeadsetsSection = dynamic(
  () => import("@/components/sections/HeadsetsSection"),
  { ssr: false, loading: () => <Loader /> }
);
const TestimonialsSection = dynamic(
  () => import("@/components/sections/TestimonialsSection"),
  { ssr: false, loading: () => <Loader /> }
);
const FooterSection = dynamic(
  () => import("@/components/sections/FooterSection"),
  { ssr: false, loading: () => <Loader /> }
);


export default function LazySections() {
  return (
    <>
      <MarqueeSection />

      <ExperienceSection />

      <VideoSection />

      <HeadsetsSection />

      <TestimonialsSection />
      
      <FooterSection />
    </>
  );
}