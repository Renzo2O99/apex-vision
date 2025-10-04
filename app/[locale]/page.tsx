
import SidebarBits from "@/components/layout/Header/SidebarBits";
import HeroSection from "@/components/sections/HeroSection";
import LazySections from "@/components/sections/LazySections";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <SmoothCursor />

      <SidebarBits />

      <HeroSection />

      <LazySections />
    </div>
  );
}
