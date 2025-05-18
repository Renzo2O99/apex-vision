// i18n/request.ts

import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';
import { findTranslationData, formatTranslationData } from '../config';
import { TranslationMessages } from '@/interface';

/**
 * Función para obtener las traducciones desde Directus
 * @param locale - El código de idioma solicitado
 * @returns Objeto con las traducciones formateadas para next-intl
 */
export async function fetchTranslations(locale: string): Promise<TranslationMessages> {
  try {
    // Buscar los datos de traducción para el locale solicitado
    // Esta función ahora devuelve tanto los datos principales como los ítems de auriculares
    const translationData = await findTranslationData(locale);
    
    // Formatear los datos al formato que next-intl espera
    // La función formatTranslationData ahora procesa ambos conjuntos de datos
    return formatTranslationData(translationData);
  } catch (error) {
    console.error('Error al obtener o procesar traducciones desde Directus:', error);
    // En caso de error, devolver un objeto vacío
    return {};
  }
}

/**
 * Configuración de next-intl para manejar las solicitudes de internacionalización
 */
export default getRequestConfig(async ({ requestLocale }) => {
  // Obtener el locale solicitado y validarlo
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  // Cargar los mensajes para el locale determinado desde Directus
  const messages = await fetchTranslations(locale);

  return {
    locale,
    messages
  };
});