import { useTranslations } from "next-intl";
import TestimonialSlider from "./components/TestimonialSlider";

export default function TestimonialLayout() {
  const t = useTranslations("TestimonialsSection");

  const testimonialIds = [0, 1, 2, 3]; // Only 4 testimonials
  
  const testimonialsConfig = {
    title: t("title"),
    subtitle: t("subtitle"),
    testimonials: testimonialIds.map((id) => ({
      id: id + 1,
      rating: Number(t(`testimonials.${id}.rating`)), // No .replace() here!
      name: t(`testimonials.${id}.name`),
      role: t(`testimonials.${id}.role`),
      company: t(`testimonials.${id}.company`),
      content: t(`testimonials.${id}.content`),
      avatar: t(`testimonials.${id}.avatar`),
    })),
    autoRotateInterval: 6000,
    showVerifiedBadge: true,
    trustedCompanies: ["Google", "Microsoft", "Airbnb", "Spotify", "Netflix"],
    trustedCompaniesTitle: t("trustedCompaniesTitle"),
  };
  return (
    <>
      <TestimonialSlider testimonialsConfig={testimonialsConfig} />
    </>
  );
}
