const DIRECTUS_URL = process.env.DIRECTUS_URL;

// Configuración de caché
/*
const cacheConfig = {
  revalidate: 1, // 1 hora
};
*/

/**
 * Función genérica para peticiones a Directus con caché y manejo de errores.
 * @param endpoint - Endpoint de la API de Directus (ej: /items/apex_vision_translations)
 * @param tags - Etiquetas para la revalidación del caché.
 */
async function fetchDirectus<T>(endpoint: string, tags: string[]): Promise<T> {
  const url = `${DIRECTUS_URL}${endpoint}`;

  try {
    const res = await fetch(url, {
      next: {
        // revalidate: cacheConfig.revalidate,
        tags: ['translations', ...tags],
      },
    });

    if (!res.ok) {
      throw new Error(`Error al obtener datos de ${url}: ${res.statusText}`);
    }

    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function fetchApexVisionTranslations() {
  return fetchDirectus('/items/apex_vision_translations', ['apex-vision']);
}

export function fetchHeadsetItems() {
  return fetchDirectus('/items/headset_items', ['headsets']);
}

export function fetchHeadsetItemsTranslations() {
  return fetchDirectus('/items/headset_items_translations', ['headsets']);
}

export function fetchTestimonialItems() {
  return fetchDirectus('/items/testimonial_vision_items', ['testimonials']);
}

export function fetchTestimonialItemsTranslations() {
  return fetchDirectus('/items/testimonial_vision_items_translations', ['testimonials']);
}