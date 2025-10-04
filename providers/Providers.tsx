// Archivo central para envolver providers globales (zustand, tanstack query, i18n, etc)
import { Particle } from "@/components/utils/Particle";
import AosInitializer from "@/components/utils/AosInitializer";
import { NextIntlClientProvider } from "next-intl";
import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";

interface ProvidersProps {
  children: React.ReactNode;
  locale: string;
  messages: Record<string, any>;
}

export function Providers({ children, locale, messages }: ProvidersProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <SidebarProvider>
        <AosInitializer />
        <Particle />
        {children}
      </SidebarProvider>
    </NextIntlClientProvider>
  );
}
