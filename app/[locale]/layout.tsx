import type { Metadata } from "next";
import "../globals.css";
import { TranslationsProvider } from "@neiderruiz/translate-files/next-js";
import i18nConfig from "@/i18nConfig";
import { resources } from "@/services/langs/index";
import Navbar from "@/components/NavBar";

import Header from "@/components/header";


export const metadata: Metadata = {
  title: "Macjainer Molano Ramos",
  description: "Portafolio de Macjainer Molano Ramos",
};

type Props = {
  children: React.ReactNode;
  params: {locale: string};
}

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<Props>) {
  
  return (
    <html lang={locale}>
      <body className="w-full ">

      <Navbar/>
      <Header />
          <TranslationsProvider
            fallbackLng={i18nConfig.locales}
            locale={locale}
            resources={resources}
          >
            {children}
          </TranslationsProvider>
      </body>
    </html>
  );
}
