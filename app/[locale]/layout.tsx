import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Providers } from "@/providers/Providers";
import 'aos/dist/aos.css';
import { RootLayoutProps } from "@/interface";
import { fetchTranslations } from "@/i18n/request";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
})

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  // Obtener el locale desde los parámetros
  const { locale } = await params;
  
  // Obtener las traducciones utilizando la función compartida
  const messages = await fetchTranslations(locale);
  
  // Extraer el título y la descripción de los mensajes
  return {
    title: messages.metadata?.title || 'Apex Vision',
    description: messages.metadata?.description || 'Experience the future of virtual reality with Apex Vision',
  };
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await fetchTranslations(locale);

  return (
    <html 
      lang={locale}
      suppressHydrationWarning
    >
      <body
        className={`${orbitron.variable} ${inter.variable} antialiased`}
      >
        <Providers locale={locale} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
