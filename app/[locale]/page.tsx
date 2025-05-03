
import HeroSection from "@/components/sections/HeroSection";
import LazySections from "@/components/sections/LazySections";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { Particle } from "@/components/utils/Particle";

export default function Home() {
  return (
    <>
      <Particle />
      <SmoothCursor />

      <HeroSection />

      <LazySections />
    </>
  );
}
