import { useTranslations } from "next-intl";
import TestimonialSlider from "./components/TestimonialSlider";
import { Testimonial } from "@/interface";

export default function TestimonialLayout() {
  const t = useTranslations("testimonial_section");

  const testimonialIds = [0, 1, 2, 3];
  
  const testimonialsConfig = {
    title: t("testimonial_title"),
    subtitle: t("testimonial_subtitle"),
    testimonials: testimonialIds.map((id) => {
      // Acceder directamente al objeto testimonial sin traducir el rating
      const testimonial: Testimonial = t.raw(`testimonials.${id}`);

      return {
        id: id + 1,
        rating: testimonial.rating,
        name: testimonial.name,
        role: testimonial.role,
        company: testimonial.company,
        testimonial: testimonial.testimonial,
        avatar_link: testimonial.avatar_link,
        verified_comment: testimonial.verified_comment,
      };
    }),
    autoRotateInterval: 6000,
    showVerifiedBadge: true,
  };
  
  return (
    <>
      <TestimonialSlider testimonialsConfig={testimonialsConfig} />
    </>
  );
}
