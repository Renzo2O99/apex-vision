'use client';

import { useLocale, useTranslations } from 'next-intl';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem,DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { GlobeIcon } from 'lucide-react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';


export default function LocaleSwitcher() {
  const currentLocale = useLocale();
  const t = useTranslations('LocaleSwitcher');
  const router = useRouter();
  const currentPathname = usePathname();

  // Obtenemos los locales soportados desde la configuración de enrutamiento
  const locales = routing.locales;

  // Función para manejar el cambio de idioma
  const onLocaleChange = (newLocale: string) => {
    // Usamos router.replace con el pathname actual y especificamos el nuevo locale.
    // next-intl/navigation se encargará de construir la URL correcta.
    router.replace(currentPathname, { locale: newLocale });
  };

  // Usamos t(`localeName.${currentLocale}`) para obtener el nombre traducido del idioma actual
  const currentLocaleName = t(`localeName.${currentLocale}`);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          size="lg" 
          variant="outline" 
          className="flex items-center gap-1 text-black cursor-none hover:bg-gray-300 transition-all ease-in-out duration-300"
        >
          <GlobeIcon className="h-4 w-4" />

          <span>{currentLocaleName}</span>
        </Button>
      </DropdownMenuTrigger>
      {/* El contenido del dropdown con las opciones de idioma */}
      <DropdownMenuContent align="start">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            disabled={locale === currentLocale}
            onSelect={() => onLocaleChange(locale)}
            className='font-semibold text-black text-xs cursor-pointer disabled:cursor-not-allowed'
          >
            {t(`localeName.${locale}`)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}