"use client";

import { Button } from "@/components/ui/button";
import { GlobeIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useLocaleSwitcher } from "@/lib/hooks/useLocaleSwitcher";

export default function LocaleSwitcher() {
  const { currentLocale, t, locales, onLocaleChange } = useLocaleSwitcher();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="lg"
          variant="outline"
          className="flex items-center max-w-2/3 lg:max-w-screen gap-1 bg-section-900 hover:bg-primary text-blue-100 hover:text-white transition-all ease-in-out duration-300 w-full border-none focus:outline-none focus-visible:ring-0 cursor-none hover:cursor-none"
        >
          <GlobeIcon className="h-4 w-4 text-blue-200 group-hover:text-white transition-colors" />
          <span>{t(currentLocale)}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="bg-blue-950/70 text-blue-100 border-blue-800/70 backdrop-blur-xl">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            disabled={locale === currentLocale}
            onSelect={() => onLocaleChange(locale)}
            className="font-semibold text-blue-100 text-xs cursor-none hover:cursor-none disabled:opacity-50 focus:bg-blue-800/70 focus:text-blue-100"
          >
            {t(locale)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
