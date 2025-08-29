// lib/directus.ts
import { createDirectus, staticToken, rest } from '@directus/sdk';

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL;
const DIRECTUS_TOKEN = process.env.DIRECTUS_STATIC_TOKEN;

if (!DIRECTUS_URL) {
  throw new Error('DIRECTUS_URL no está configurado en las variables de entorno.');
}

// Configuración básica del cliente
let directus = createDirectus(DIRECTUS_URL).with(rest());

//? Si necesitas autenticación (datos NO públicos) ---
if (DIRECTUS_TOKEN) {
  directus = directus.with(staticToken(DIRECTUS_TOKEN));
}

export { directus }; // Exporta la instancia configurada