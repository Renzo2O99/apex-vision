"use client";

import dynamic from "next/dynamic";

const ExperienceSection = dynamic(
  () => import("@/components/sections/ExperienceSection"),
  { ssr: false }
);
const VideoSection = dynamic(
  () => import("@/components/sections/VideoSection"),
  { ssr: false }
);
const HeadsetsSection = dynamic(
  () => import("@/components/sections/HeadsetsSection"),
  { ssr: false }
);
const TestimonialsSection = dynamic(
  () => import("@/components/sections/TestimonialsSection"),
  { ssr: false }
);
const FooterSection = dynamic(
  () => import("@/components/sections/FooterSection"),
  { ssr: false }
);

// Opcional: Puedes añadir fallbacks aquí si lo necesitas para cada dynamic import.
// Por ejemplo:
// const ExperienceSection = dynamic(() => import("@/components/sections/ExperienceSection"), { ssr: false, loading: () => <p>Cargando Experience...</p> });

export default function LazySections() {
  // ===============================================================
  // Renderiza los componentes dinámicos AQUÍ, dentro del CLIENT COMPONENT
  // ===============================================================
  return (
    <>
      <ExperienceSection />

      <VideoSection />

      <HeadsetsSection />

      <TestimonialsSection />

      <FooterSection />
    </>
  );
}
