// i18n/request.ts
import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";
import { findTranslationData, formatTranslationData } from "./translation-processor";
import { TranslationMessages } from "@/interface";

export async function fetchTranslations(
  locale: string
): Promise<TranslationMessages> {
  // Siempre intenta obtener los datos de Directus
  const translationData = await findTranslationData(locale);
  const formattedData = formatTranslationData(translationData);

  // Si no hay datos, retorna un objeto vacío (puedes personalizar este comportamiento)
  if (!formattedData || Object.keys(formattedData).length === 0) {
    throw new Error(`No se obtuvieron datos de Directus para el idioma '${locale}'.`);
  }

  return formattedData;
}

export default getRequestConfig(async ({ locale }) => {
  const validLocale = hasLocale(routing.locales, locale)
    ? locale
    : routing.defaultLocale;

  const messages = await fetchTranslations(validLocale);

  return {
    locale: validLocale,
    messages,
  };
});
