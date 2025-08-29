// Archivo central para envolver providers globales (zustand, tanstack query, i18n, etc)
import AosInitializer from "@/components/utils/AosInitializer";
import { NextIntlClientProvider } from "next-intl";
import { PrimeReactProvider } from 'primereact/api';
import React from "react";
import "primereact/resources/themes/lara-light-cyan/theme.css";

interface ProvidersProps {
  children: React.ReactNode;
  locale: string;
  messages: Record<string, any>;
}

export function Providers({ children, locale, messages }: ProvidersProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <PrimeReactProvider>
        <AosInitializer />
        {children}
      </PrimeReactProvider>
    </NextIntlClientProvider>
  );
}
