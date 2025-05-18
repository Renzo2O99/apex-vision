// i18n/config/translation-processor.ts

import { routing } from '../i18n/routing';
import { getDirectusLanguageMapping, getApexVisionTranslations, getHeadsetItems, getTestimonialItems, getTestimonialTranslations, localeToDirectusCodeMap } from './directus-config';

//? Función para encontrar los datos de traducción para un locale específico
export async function findTranslationData(locale: string) {
  try {
    // Obtener el mapeo de idiomas y las traducciones
    const directusCodeToUuidMap = await getDirectusLanguageMapping();
    const apexVisionTranslations = await getApexVisionTranslations();

    // Obtener el código de Directus correspondiente al locale solicitado
    const directusLocaleCode = localeToDirectusCodeMap[locale];

    if (!directusLocaleCode) {
      console.error(`Locale no soportado: ${locale}. No se puede mapear al código de idioma de Directus.`);
      // Opcional: Cargar defaultLocale si el solicitado no está mapeado
      if (locale !== routing.defaultLocale) {
        console.warn(`Usando el locale por defecto: ${routing.defaultLocale}`);
        return findTranslationData(routing.defaultLocale); // Intenta de nuevo con el idioma por defecto
      }
      return null; // O devolver null si el idioma por defecto tampoco está mapeado
    }

    // Obtener el UUID objetivo para el locale solicitado
    const targetUuid = directusCodeToUuidMap.get(directusLocaleCode);

    let principalTranslationData = null;

    // Paso 1: Buscar por coincidencia de UUID
    if (targetUuid) {
      principalTranslationData = apexVisionTranslations.find((item: any) =>
        item.directus_translations_id !== null && item.directus_translations_id === targetUuid
      );
    }

    // Paso 2: Si no se encontró por UUID Y es el idioma por defecto, buscar por null ID
    if (!principalTranslationData && locale === routing.defaultLocale) {
      principalTranslationData = apexVisionTranslations.find((item: any) =>
        item.directus_translations_id === null
      );
    }

    // Si no se encuentran traducciones para el locale, intentamos cargar el idioma por defecto
    if (!principalTranslationData) {
      if (locale !== routing.defaultLocale) {
        console.warn(`No se encontraron traducciones específicas para el locale '${locale}' en apex_vision_translations. Intentando con el idioma por defecto '${routing.defaultLocale}'.`);
        return findTranslationData(routing.defaultLocale);
      }
      console.error(`No se encontraron datos de traducción para el idioma por defecto '${routing.defaultLocale}' en apex_vision_translations (o falló el fallback).`);
      return null; // Devolver null si ni el idioma solicitado ni el por defecto se encuentran
    }

    // Obtener los ítems de auriculares relacionados con sus traducciones
    const headsetItemsRaw = await getHeadsetItems(directusLocaleCode);
    
    // Obtener los testimonios y sus traducciones
    const testimonialItems = await getTestimonialItems();
    const testimonialTranslations = await getTestimonialTranslations();
    
    // Filtrar las traducciones de testimonios para el idioma actual
    const filteredTestimonialTranslations = testimonialTranslations.filter((translation: any) => 
      translation.directus_translations_id === targetUuid
    );

    // Combinar los datos principales con los ítems de auriculares y testimonios
    return {
      principalData: principalTranslationData,
      headsetItems: headsetItemsRaw,
      testimonialItems: testimonialItems,
      testimonialTranslations: filteredTestimonialTranslations
    };
  } catch (error) {
    console.error('Error al procesar las traducciones:', error);
    return null;
  }
}

//? Función para formatear los datos de traducción al formato que next-intl espera
export function formatTranslationData(localeTranslationData: any) {
  if (!localeTranslationData) return {};

  const { principalData, headsetItems, testimonialItems, testimonialTranslations } = localeTranslationData;

  if (!principalData) return {};

  // Procesar los headset_items relacionados
  let headsetTitlesArray: string[] = [];
  let headsetNamesArray: string[] = [];
  let headsetDescriptionsArray: string[] = [];

  if (headsetItems && headsetItems.length > 0) {
    // Agrupar los items por headset_items_id para tener todos los headsets únicos
    const headsetItemsById = headsetItems.reduce((acc: any, item: any) => {
      const id = item.headset_items_id;
      if (!acc[id]) {
        acc[id] = [];
      }
      acc[id].push(item);
      return acc;
    }, {});

    // Procesar cada headset único
    Object.entries(headsetItemsById).forEach(([headsetId, translations]: [string, any], index: number) => {
      // Usar la primera traducción disponible para este headset
      const translation = translations[0];

      if (translation) {
        headsetNamesArray[index] = translation.name;
        headsetTitlesArray[index] = translation.title;
        headsetDescriptionsArray[index] = translation.description;
      }
    });
  }

  // Convertir los arrays a strings separados por comas
  const headsetTitles = headsetTitlesArray.join(',');
  const headsetNames = headsetNamesArray.join(',');
  const headsetDescriptions = headsetDescriptionsArray.join(',');

  // Procesar los testimonios
  const processedTestimonials: any = [];
  
  if (testimonialItems && testimonialItems.length > 0 && testimonialTranslations && testimonialTranslations.length > 0) {
    // Para cada testimonio, buscar su traducción correspondiente
    testimonialItems.forEach((item: any) => {
      // Buscar la traducción para este testimonio
      const translation = testimonialTranslations.find((trans: any) => 
        trans.testimonial_vision_items_id === item.id
      );
      
      if (translation) {
        processedTestimonials.push({
          id: item.id,
          name: item.name,
          company: item.company,
          avatar_link: item.avatar_link,
          rating: item.rating,
          role: translation.role,
          testimonial: translation.testimonial,
          verified_comment: translation.verified_comment,
        });
      }
    });
  }

  const messages = {
    locale_switcher: {
      en: principalData.en,
      es: principalData.es,
    },
    metadata: {
      title: principalData.title,
      description: principalData.description,
    },
    navbar: {
      home: principalData.home,
      company: principalData.company,
      features: principalData.features,
      sign_up: principalData.sign_up,
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
      // Textos principales de la sección de auriculares
      headset_title: principalData.headset_section_title,
      headset_description: principalData.headset_section_description,
      // Ítems individuales de auriculares
      headset_items: {
        titles: headsetTitles,
        names: headsetNames,
        descriptions: headsetDescriptions,
      }
    },
    testimonial_section: {
      testimonial_title: principalData.testimonial_title,
      testimonial_subtitle: principalData.testimonial_subtitle,
      testimonials: processedTestimonials,
      trusted_companies_title: principalData.trusted_companies_title,
    },
    footer_section: {
      about: principalData.about,
      copyright: principalData.copyright
    }
  };

  return messages;
}