"use client";

import { HiGlobeAlt } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useLocaleSwitcher } from "@/lib/hooks/useLocaleSwitcher";

export default function LocaleSwitcherMobile() {
  const { currentLocale, t, locales, onLocaleChange } = useLocaleSwitcher();

  return (
    <div className="block md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            className="flex items-center justify-center bg-transparent text-blue-100 rounded-full transition-all ease-in-out duration-300 focus-visible:ring-0 focus:ring-0 focus:outline-none"
          >
            <HiGlobeAlt className="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          sideOffset={8}
          className="bg-blue-950 text-blue-100 border-blue-800 translate-x-12"
        >
          {locales.map((locale) => (
            <DropdownMenuItem
              key={locale}
              disabled={locale === currentLocale}
              onSelect={() => onLocaleChange(locale)}
              className="text-center flex items-center justify-center px-0 font-semibold text-blue-100 text-xs cursor-none hover:cursor-none disabled:opacity-50 focus:bg-blue-800/70 focus:text-blue-100"
            >
              {t(`${locale}`)}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
