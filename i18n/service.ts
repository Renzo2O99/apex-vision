// i18n/service.ts
import { directus } from "@/lib/directus";
import { readItems } from "@directus/sdk";
import { TranslationMessages, Testimonial } from "@/interface";

// Tipos para las respuestas de Directus
interface DirectusMainTranslation {
  en: string;
  es: string;
  title: string;
  description: string;
  home: string;
  company: string;
  features: string;
  sign_up: string;
  banner_title: string;
  banner_description: string;
  banner_button_text: string;
  banner_link_text: string;
  banner_alt_image: string;
  banner_users_text: string;
  experience_title: string;
  experience_description: string;
  experience_button_text: string;
  video_title: string;
  headset_section_title: string;
  headset_section_description: string;
  testimonial_title: string;
  testimonial_subtitle: string;
  trusted_companies_title: string;
  about: string;
  copyright: string;
}

interface DirectusHeadsetTranslation {
  name: string;
  title: string;
  description: string;
}

interface DirectusTestimonialTranslation {
  testimonial_vision_items_id: {
    id: number;
    name: string;
    company: string;
    rating: number;
    avatar_link: string;
  };
  role: string;
  testimonial: string;
  verified_comment: string;
}

// Mapeo de locales de la app a los códigos de idioma en Directus
const localeToDirectusCode = (locale: string): string => {
  const map: Record<string, string> = {
    es: "es-ES",
    en: "en-US",
  };
  return map[locale] || map["en"]; // Fallback a inglés
};

// Función para formatear los mensajes
function formatMessages(
  main: DirectusMainTranslation,
  headsetTranslations: DirectusHeadsetTranslation[],
  testimonialTranslations: DirectusTestimonialTranslation[]
): TranslationMessages {
  return {
    locale_switcher: { en: main.en, es: main.es },
    metadata: { title: main.title, description: main.description },
    navbar: {
      home: main.home,
      company: main.company,
      features: main.features,
      sign_up: main.sign_up,
    },
    banner_section: {
      banner_title: main.banner_title,
      banner_description: main.banner_description,
      banner_button_text: main.banner_button_text,
      banner_link_text: main.banner_link_text,
      banner_alt_image: main.banner_alt_image,
      banner_users_text: main.banner_users_text,
    },
    experience_section: {
      experience_title: main.experience_title,
      experience_description: main.experience_description,
      experience_button_text: main.experience_button_text,
    },
    video_section: { video_title: main.video_title },
    headset_section: {
      headset_title: main.headset_section_title,
      headset_description: main.headset_section_description,
      headset_items: headsetTranslations.map((item) => ({
        name: item.name,
        title: item.title,
        description: item.description,
      })),
    },
    testimonial_section: {
      testimonial_title: main.testimonial_title,
      testimonial_subtitle: main.testimonial_subtitle,
      trusted_companies_title: main.trusted_companies_title,
      testimonials: testimonialTranslations.map(
        (item): Testimonial => ({
          id: item.testimonial_vision_items_id.id,
          name: item.testimonial_vision_items_id.name,
          company: item.testimonial_vision_items_id.company,
          rating: item.testimonial_vision_items_id.rating,
          avatar_link: item.testimonial_vision_items_id.avatar_link,
          role: item.role ?? "",
          testimonial: item.testimonial ?? "",
          verified_comment: item.verified_comment ?? "",
        })
      ),
    },
    footer_section: { about: main.about, copyright: main.copyright },
  };
}

// Función principal para obtener y formatear los mensajes
export async function getMessagesForLocale(
  locale: string
) {
  try {
    const directusLocale = localeToDirectusCode(locale);

    const [mainTranslations, headsetTranslations, testimonialTranslations] =
      await Promise.all([
        directus.request(
          readItems("apex_vision_translations", {
            filter: { languages_code: { _eq: directusLocale } },
            limit: 1,
          })
        ) as Promise<DirectusMainTranslation[]>,
        directus.request(
          readItems("headset_items_translations", {
            filter: { languages_code: { _eq: directusLocale } },
          })
        ) as Promise<DirectusHeadsetTranslation[]>,
        directus.request(
          readItems("testimonial_vision_items_translations", {
            filter: { languages_code: { _eq: directusLocale } },
            deep: {
              testimonial_vision_items_id: {
                _fields: ["id", "name", "company", "rating", "avatar_link"],
              },
            },
          })
        ) as Promise<DirectusTestimonialTranslation[]>,
      ]);

    if (!mainTranslations || mainTranslations.length === 0) {
      throw new Error(
        `No se encontró la traducción principal para el locale: ${locale}`
      );
    }
    const main = mainTranslations[0];

    return formatMessages(main, headsetTranslations, testimonialTranslations);
  } catch (error) {
    console.error("Error al obtener las traducciones desde Directus:", error);
  }
}
