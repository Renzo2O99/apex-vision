# Apex Vision: Landing Page de Realidad Virtual

Apex Vision es una landing page moderna e inmersiva, construida con las últimas tecnologías del ecosistema de Next.js. El proyecto presenta un producto de realidad virtual, destacando sus características a través de un diseño futurista, animaciones fluidas y contenido dinámico gestionado desde un CMS Headless.

## ✨ Características Principales

- **Framework Moderno**: Desarrollado con Next.js 15 y el App Router, aprovechando Server Components para un rendimiento óptimo y renderizado en el servidor.
- **Internacionalización (i18n)**: Soporte completo para múltiples idiomas (inglés y español) gracias a `next-intl`, con contenido gestionado de forma centralizada.
- **CMS Headless**: Todo el contenido textual e imágenes son gestionados desde Directus, permitiendo actualizaciones dinámicas sin necesidad de tocar el código.
- **Estilo y UI**:
    - **Tailwind CSS**: Para un diseño rápido, personalizable y responsivo.
    - **shadcn/ui y Radix UI**: Componentes de UI accesibles y de alta calidad como base.
    - **PrimeReact**: Utilizado para componentes complejos como el Sidebar del menú móvil.
- **Animaciones y Efectos Visuales**:
    - **AOS (Animate On Scroll)**: Para animaciones elegantes al hacer scroll por las secciones.
    - **Framer Motion / Motion One**: Para transiciones y animaciones complejas en la UI.
    - **tsParticles**: Fondo de partículas interactivo para una experiencia inmersiva.
    - **Cursor Personalizado**: Un cursor suave y animado que mejora la interacción del usuario en escritorio.
- **Optimización de Rendimiento**:
    - **Carga Diferida (Lazy Loading)**: Las secciones principales de la página se cargan de forma diferida con `next/dynamic` para mejorar el tiempo de carga inicial.
    - **Next.js Image**: Optimización automática de imágenes para diferentes dispositivos.
    - **Caching de Datos**: Las peticiones a Directus utilizan el sistema de caché de Next.js para reducir la carga en el servidor y mejorar la velocidad de respuesta.

## 🛠️ Tecnologías Utilizadas

| Categoría         | Tecnología              |
| ----------------- | ----------------------- |
| Framework         | Next.js 15              |
| Lenguaje          | TypeScript              |
| Estilos           | Tailwind CSS            |
| Componentes UI    | shadcn/ui, PrimeReact   |
| i18n              | next-intl               |
| Animaciones       | AOS, Motion One         |
| CMS               | Directus (Headless CMS) |
| Linting           | ESLint                  |
| Gestor de Paquetes| pnpm                    |

## 🏗️ Arquitectura del Proyecto

El proyecto sigue la estructura recomendada por el App Router de Next.js, separando la lógica, la UI y los servicios de manera clara y mantenible.

```
apex-vision/
├── app/[locale]/              # Rutas principales y páginas de la aplicación
│   ├── page.tsx               # Página de inicio (Server Component)
│   └── layout.tsx             # Layout principal (Server Component)
├── components/                # Componentes de React reutilizables
│   ├── layout/                # Componentes de estructura (Header, Footer, etc.)
│   ├── sections/              # Secciones principales de la página
│   ├── ui/                    # Componentes de UI de shadcn
│   └── utils/                 # Componentes de utilidad (Contenedor, Títulos, etc.)
├── i18n/                      # Lógica de internacionalización
│   ├── navigation.ts          # Wrappers de navegación de next-intl
│   ├── request.ts             # Lógica para obtener las traducciones (Server Side)
│   ├── translation-processor.ts # Procesa los datos crudos de Directus
│   └── routing.ts             # Configuración de locales y rutas
├── lib/                       # Librerías y utilidades
│   ├── directus.ts            # Cliente de Directus SDK
│   └── utils.ts               # Funciones de utilidad (ej. cn para clases)
├── messages/                  # Archivos JSON de traducción como respaldo
│   ├── en.json
│   └── es.json
├── public/                    # Archivos estáticos (imágenes, fuentes, etc.)
├── services/                  # Servicios para obtener datos
│   └── translationService.ts  # Funciones para hacer fetch a Directus con caché
└── ...                        # Archivos de configuración
```

## 🌐 Flujo de Internacionalización (i18n)

La internacionalización es un pilar fundamental de este proyecto, gestionada por `next-intl`.

- **Enrutamiento**: El archivo `middleware.ts` intercepta las peticiones y gestiona las rutas basadas en el idioma (ej. `/en` o `/es`), redirigiendo al idioma por defecto si es necesario.
- **Obtención de Traducciones**:
    1. Cuando se solicita una página, `i18n/request.ts` se ejecuta en el servidor.
    2. Llama a `findTranslationData` en `i18n/translation-processor.ts`.
    3. Esta función, a su vez, utiliza `services/translationService.ts` para realizar múltiples peticiones a Directus de forma paralela y con caché.
- **Procesamiento de Datos**: `translation-processor.ts` recibe los datos crudos de Directus y los filtra por el idioma solicitado. Luego, la función `formatTranslationData` los transforma en un objeto JSON estructurado que `next-intl` puede consumir.
- **Respaldo (Fallback)**: Si la conexión con Directus falla, el sistema está configurado para usar los archivos locales `messages/en.json` y `messages/es.json` como respaldo, asegurando que la aplicación siempre tenga contenido para mostrar.
- **Componentes de UI**: Los componentes `LocaleSwitcher` y `LocaleSwitcherMobile` utilizan los hooks de `next-intl` para permitir al usuario cambiar de idioma de forma interactiva, lo que actualiza la URL y recarga la página con el nuevo contenido.

## 🎨 Estilo y Diseño

- **Tailwind CSS**: Es la base de todo el diseño. Las variables de color, tipografía y temas están definidas en `app/[locale]/globals.css` utilizando las nuevas características de `@theme`.
- **shadcn/ui**: Proporciona una serie de componentes base (como `Button`, `Card`, `DropdownMenu`) que son altamente personalizables y accesibles. No es una librería de componentes tradicional, sino un conjunto de recetas que se copian al proyecto.
- **PrimeReact**: Se utiliza para componentes más complejos que requieren un estado interno avanzado, como el `Sidebar` del menú de navegación móvil, aprovechando su robustez y funcionalidad.

## 📜 Scripts Disponibles

- `pnpm dev`: Inicia el servidor de desarrollo con Turbopack.
- `pnpm build`: Compila la aplicación para producción.
- `pnpm start`: Inicia un servidor de producción.
- `pnpm lint`: Ejecuta ESLint para analizar el código en busca de errores y problemas de estilo.

## 🚀 Puesta en Marcha

Sigue estos pasos para levantar el proyecto en tu entorno de desarrollo local.

### 1. Prerrequisitos

- Node.js (v18.18 o superior)
- pnpm (o el gestor de paquetes que prefieras)

### 2. Instalación

Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/apex-vision.git
cd apex-vision
```

Instala las dependencias:
```bash
pnpm install
```

### 3. Configuración de Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto. Puedes copiar el contenido del archivo `.env` si existe.

Añade la siguiente variable:
```
DIRECTUS_URL=TU_URL_DE_DIRECTUS
```
Esta URL apunta a la instancia de Directus desde donde se obtiene todo el contenido dinámico.

### 4. Ejecutar el Servidor de Desarrollo

Una vez que hayas instalado las dependencias y configurado las variables de entorno, puedes iniciar el servidor de desarrollo:
```bash
pnpm dev
```
Abre `http://localhost:3000` en tu navegador para ver la aplicación en funcionamiento.