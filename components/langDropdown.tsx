"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import useTranslation from "@/hooks/use-translation";
import i18nConfig from "@/i18nConfig";
import { usePathname, useRouter } from "next/navigation";
// Eliminamos la importación incorrecta y usamos una técnica diferente para detectar el idioma del navegador

type Lang = {
  code: string;
  name: string;
  flag: string;
};

const languages: Lang[] = [
  {
    code: "es",
    name: "ES",
    flag: "https://flagcdn.com/48x36/es.png",
  },
  {
    code: "en",
    name: "EN",
    flag: "https://flagcdn.com/48x36/us.png",
  },
];

const LanguageSwitcher = () => {
  const router = useRouter();
  const currentPathname = usePathname();
  const { i18n } = useTranslation();
  
  const [currentLang, setCurrentLang] = useState(languages[0]);
  
  useEffect(() => {
    const lang = languages.find((l) => l.code === i18n.language) || languages[0];
    setCurrentLang(lang);
  }, [i18n.language]);

  // Función para detectar el idioma del navegador
  const detectBrowserLanguage = (): string => {
    if (typeof window !== 'undefined') {
      const browserLang = navigator.language.split('-')[0]; // Obtiene 'es' de 'es-ES'
      return languages.some(lang => lang.code === browserLang) ? browserLang : i18nConfig.defaultLocale;
    }
    return i18nConfig.defaultLocale;
  };

  // Función para obtener la ruta sin el prefijo de idioma
  const getPathWithoutLocale = (path: string) => {
    // Si estamos en la raíz, devolver "/"
    if (path === "/") return "/";
    
    // Comprobar si la ruta comienza con un prefijo de idioma
    for (const lang of languages) {
      if (path.startsWith(`/${lang.code}/`)) {
        return path.replace(`/${lang.code}`, "");
      }
      if (path === `/${lang.code}`) {
        return "/";
      }
    }
    
    // Si no hay prefijo de idioma, devolver la ruta original
    return path;
  };

  // Función para cambiar a un idioma específico
  const switchToLanguage = (newLang: string) => {
    // Actualizar cookie
    document.cookie = `NEXT_LOCALE=${newLang};path=/;max-age=${30 * 24 * 60 * 60}`;
    
    // Guardar que el usuario ha seleccionado manualmente un idioma
    if (typeof window !== 'undefined') {
      localStorage.setItem('language_manually_set', 'true');
    }
    
    // Obtener la parte de la ruta sin el prefijo de idioma
    const pathWithoutLocale = getPathWithoutLocale(currentPathname);
    
    // Construir la nueva ruta
    let newPath;
    if (newLang === i18nConfig.defaultLocale) {
      // Si el nuevo idioma es el predeterminado, no necesitamos prefijo
      newPath = pathWithoutLocale;
    } else {
      // Si no es el predeterminado, añadimos el prefijo
      newPath = `/${newLang}${pathWithoutLocale}`;
    }
    
    // Asegurarse de que la ruta no tenga "//" por manipulaciones de cadenas
    newPath = newPath.replace('//', '/');
    
    // Navegar a la nueva ruta y refrescar
    router.push(newPath);
    router.refresh();
  };

  // Efecto para detectar y aplicar el idioma del navegador en la primera carga
  useEffect(() => {
    // Verificar si estamos en el cliente
    if (typeof window !== 'undefined' && !localStorage.getItem('language_manually_set')) {
      const browserLocale = detectBrowserLanguage();
      if (browserLocale && browserLocale !== i18n.language) {
        switchToLanguage(browserLocale);
      }
    }
  }, [currentPathname, i18n.language]);

  const switchLanguage = () => {
    const newLang = currentLang.code === "en" ? "es" : "en";
    switchToLanguage(newLang);
  };

  return (
    <button
      onClick={switchLanguage}
      className="flex items-center gap-2 py-2 px-3 rounded-3xl hover:bg-[#0070F3] dark:hover:bg-[#00C8C8]"
    >
      <Image
        src={currentLang.flag}
        alt={currentLang.name}
        width={24}
        height={18}
        className="rounded-sm shadow-md hover:scale-110 transition-transform"
      />
      <span className="text-md font-semibold hidden md:inline">
        {currentLang.name}
      </span>
    </button>
  );
};

export default LanguageSwitcher;