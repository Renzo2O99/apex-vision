import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function useLocaleSwitcher(namespace: string = "locale_switcher") {
  const currentLocale = useLocale();
  const t = useTranslations(namespace);
  const router = useRouter();
  const currentPathname = usePathname();
  const locales = routing.locales;

  const onLocaleChange = (newLocale: string) => {
    router.replace(currentPathname, { locale: newLocale });
  };

  return {
    currentLocale,
    t,
    locales,
    onLocaleChange,
    currentPathname,
  };
}