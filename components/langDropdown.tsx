"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import useTranslation from "@/hooks/use-translation";
import i18nConfig from "@/i18nConfig";
import { usePathname, useRouter } from "next/navigation";

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
  
  // Determinar idioma actual basado en la URL
  const getCurrentLanguageFromPath = (path: string): string => {
    // Primero revisar la URL
    for (const lang of languages) {
      if (path.startsWith(`/${lang.code}/`) || path === `/${lang.code}`) {
        return lang.code;
      }
    }
    // Si no se encuentra en la URL, devolver el idioma predeterminado
    return i18nConfig.defaultLocale;
  };
  
  // Estado para el idioma actual
  const [currentLang, setCurrentLang] = useState<Lang>(
    languages.find(l => l.code === getCurrentLanguageFromPath(currentPathname)) || languages[0]
  );
  
  // Efecto para actualizar el idioma cuando cambia la ruta o i18n
  useEffect(() => {
    const currentLanguageCode = getCurrentLanguageFromPath(currentPathname);
    const lang = languages.find(l => l.code === currentLanguageCode) || languages[0];
    
    console.log("Ruta actual:", currentPathname);
    console.log("Idioma detectado de la ruta:", currentLanguageCode);
    
    // Actualizar el estado solo si es diferente para evitar rerenders innecesarios
    if (currentLang.code !== lang.code) {
      console.log("Actualizando idioma a:", lang.code);
      setCurrentLang(lang);
    }
    
    // Forzar actualización del idioma en i18n si no coincide con la ruta
    if (i18n.language !== currentLanguageCode) {
      console.log("Actualizando i18n a:", currentLanguageCode);
      // Actualizar la cookie para mantener la consistencia
      document.cookie = `NEXT_LOCALE=${currentLanguageCode};path=/;max-age=${30 * 24 * 60 * 60}`;
      // Intentar cambiar el idioma en i18n
      if (i18n.changeLanguage) {
        i18n.changeLanguage(currentLanguageCode);
      }
    }
  }, [currentPathname, i18n]);
  
  // Función para obtener la ruta sin el prefijo de idioma
  const getPathWithoutLocale = (path: string): string => {
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
  
  const switchLanguage = () => {
    // Determinar el nuevo idioma (alternar entre inglés y español)
    const newLang = currentLang.code === "en" ? "es" : "en";
    console.log("Cambiando de idioma:", currentLang.code, "->", newLang);
    
    // Actualizar cookie para el nuevo idioma
    document.cookie = `NEXT_LOCALE=${newLang};path=/;max-age=${30 * 24 * 60 * 60}`;
    
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
    
    console.log("Nueva ruta:", newPath);
    
    // Forzar actualización inmediata del estado (no esperar al efecto)
    const newLangObj = languages.find(l => l.code === newLang) || languages[0];
    setCurrentLang(newLangObj);
    
    // Navegar a la nueva ruta y refrescar
    router.push(newPath);
    router.refresh();
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