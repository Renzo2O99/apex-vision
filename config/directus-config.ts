// i18n/config/directus-config.ts

import axios from 'axios';

// URL de la API de Directus
const DIRECTUS_API_URL = process.env.DIRECTUS_URL;

// Mapeo de locales de URL a códigos de idioma de Directus
export const localeToDirectusCodeMap: { [key: string]: string } = {
  'en': 'en-US', // El locale 'en' de la URL se mapea a 'en-US' en Directus
  'es': 'es-419', // El locale 'es' de la URL se mapea a 'es-419' en Directus
  // Agrega más mapeos si tienes más idiomas
};

// Función para obtener el mapeo de UUIDs a códigos de idioma de Directus
export async function getDirectusLanguageMapping() {
  try {
    const translationsMappingResponse = await axios.get(`${DIRECTUS_API_URL}/translations`);
    const translationsMapping = translationsMappingResponse.data.data;

    // Crear un mapa para buscar UUIDs por código de idioma de Directus
    return new Map(
      translationsMapping.map((item: any) => [item.language, item.id])
    );
  } catch (error) {
    console.error('Error al obtener el mapeo de idiomas de Directus:', error);
    return new Map();
  }
}

export async function getApexVisionData() {
  try {
    const response = await axios.get(`${DIRECTUS_API_URL}/items/apex_vision`);
    return response.data.data;
  } catch (error) {
    console.error('Error al obtener los datos de Apex Vision:', error);
    return null; // o manejar el error de otra manera según tus necesidades
  }
}

// Función para obtener las traducciones de Apex Vision desde Directus
export async function getApexVisionTranslations() {
  try {
    const response = await axios.get(`${DIRECTUS_API_URL}/items/apex_vision_translations`);
    return response.data.data;
  } catch (error) {
    console.error('Error al obtener las traducciones de Apex Vision:', error);
    return [];
  }
}

// Función para obtener los ítems de auriculares relacionados con sus traducciones
export async function getHeadsetItems(directusLocaleCode: string) {
  try {
    // Obtener el mapeo de idiomas para conseguir el UUID del idioma
    const directusCodeToUuidMap = await getDirectusLanguageMapping();
    const targetUuid = directusCodeToUuidMap.get(directusLocaleCode);
    
    if (!targetUuid) {
      console.error(`No se encontró UUID para el código de idioma: ${directusLocaleCode}`);
      return [];
    }
    
    // Obtener las traducciones de los headsets filtrando por el UUID del idioma
    const response = await axios.get(`${DIRECTUS_API_URL}/items/headset_items_translations?filter[directus_translations_id][_eq]=${targetUuid}`);
    return response.data.data || [];
  } catch (error) {
    console.error('Error al obtener los ítems de auriculares:', error);
    return [];
  }
}

// Función para obtener los testimonios desde Directus
export async function getTestimonialItems() {
  try {
    const response = await axios.get(`${DIRECTUS_API_URL}/items/testimonial_vision_items`);
    return response.data.data || [];
  } catch (error) {
    console.error('Error al obtener los testimonios:', error);
    return [];
  }
}

export async function getTestimonialItem() {
  try {
    const response = await axios.get(`${DIRECTUS_API_URL}/items/testimonial_vision_items`);
    return response.data.data || []; // Devuelve los datos de los testimonio
  } catch (error) {
    console.error('Error al obtener los testimonios:', error);
  }
}

// Función para obtener las traducciones de los testimonios
export async function getTestimonialTranslations() {
  try {
    const response = await axios.get(`${DIRECTUS_API_URL}/items/testimonial_vision_items_translations`);
    return response.data.data || [];
  } catch (error) {
    console.error('Error al obtener las traducciones de los testimonios:', error);
    return [];
  }
}
