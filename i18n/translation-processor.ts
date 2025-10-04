// i18n/config/translation-processor.ts

import {
  fetchApexVisionTranslations,
  fetchHeadsetItemsTranslations,
  fetchTestimonialItemsTranslations,
  fetchTestimonialItems,
} from "../services/translationService";

import {
  getLocaleCode,
  groupBy,
  mapTestimonials,
} from "../utils/translationUtils";
import {
  HeadsetItemTranslation,
  TestimonialTranslation,
  TestimonialMain,
  PrincipalData,
} from "../types/translationSchemas";

export async function findTranslationData(locale: string) {
  try {
    const [
      translationsRaw,
      headsetTranslations,
      testimonialTranslations,
      testimonialItemsMain,
    ] = await Promise.all([
      fetchApexVisionTranslations(),
      fetchHeadsetItemsTranslations(),
      fetchTestimonialItemsTranslations(),
      fetchTestimonialItems(),
    ]);

    const translations = translationsRaw as PrincipalData[];

    const directusLocaleCode = getLocaleCode(locale);

    const principalData =
      translations.find((item) => item.languages_code === directusLocaleCode) ||
      translations.find((item) => item.languages_code === "es-ES");

    if (!principalData) {
      console.error(
        `No se encontraron datos de traducción para el locale '${locale}'`
      );
      return null;
    }

    const headsetItems = (
      headsetTranslations as HeadsetItemTranslation[]
    ).filter((item: any) => item.languages_code === directusLocaleCode);
    const testimonialItems = (
      testimonialTranslations as TestimonialTranslation[]
    ).filter((item) => item.languages_code === directusLocaleCode);

    return {
      principalData,
      headsetItems,
      testimonialItems,
      testimonialItemsMain,
    };
  } catch (error) {
    console.error("Error al procesar las traducciones:", error);
    return null;
  }
}

export function formatTranslationData(localeTranslationData: any) {
  if (!localeTranslationData) return {};

  const {
    principalData,
    headsetItems,
    testimonialItems,
    testimonialItemsMain,
  }: {
    principalData: PrincipalData;
    headsetItems: HeadsetItemTranslation[];
    testimonialItems: TestimonialTranslation[];
    testimonialItemsMain: TestimonialMain[];
  } = localeTranslationData;

  if (!principalData) return {};

  // Headsets
  const headsetGrouped = groupBy<HeadsetItemTranslation, number>(
    headsetItems,
    (item) => item.headset_items_id
  );
  const headsetTitlesArray = Object.values(headsetGrouped).map(
    (arr) => arr[0]?.title ?? ""
  );
  const headsetNamesArray = Object.values(headsetGrouped).map(
    (arr) => arr[0]?.name ?? ""
  );
  const headsetDescriptionsArray = Object.values(headsetGrouped).map(
    (arr) => arr[0]?.description ?? ""
  );

  // Testimonios
  const processedTestimonials = mapTestimonials(
    testimonialItems,
    testimonialItemsMain
  );

  return {
    locale_switcher: {
      en: principalData.en,
      es: principalData.es,
    },
    metadata: {
      title: principalData.title,
      description: principalData.description,
    },
    navbar_section: {
      home: principalData.home,
      company: principalData.company,
      features: principalData.features,
      contact: principalData.contact,
      signUp: principalData.sign_up,
    },
    banner_section: {
      banner_title: principalData.banner_title,
      banner_description: principalData.banner_description,
      banner_button_text: principalData.banner_button_text,
      banner_link_text: principalData.banner_link_text,
      banner_alt_image: principalData.banner_alt_image,
      banner_users_text: principalData.banner_users_text,
    },
    experience_section: {
      experience_title: principalData.experience_title,
      experience_description: principalData.experience_description,
      experience_button_text: principalData.experience_button_text,
    },
    video_section: {
      video_title: principalData.video_title,
    },
    headset_section: {
      headset_title: principalData.headset_section_title,
      headset_description: principalData.headset_section_description,
      headset_items: {
        titles: headsetTitlesArray.join(","),
        names: headsetNamesArray.join(","),
        descriptions: headsetDescriptionsArray.join(".,"),
      },
    },
    testimonial_section: {
      testimonial_title: principalData.testimonial_title,
      testimonial_subtitle: principalData.testimonial_subtitle,
      testimonials: processedTestimonials,
      trusted_companies_title: principalData.trusted_companies_title,
    },
    footer_section: {
      about: principalData.about,
      copyright: principalData.copyright,
    },
  };
}
