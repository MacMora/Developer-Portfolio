"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
// Eliminamos la importación no utilizada de useTranslation

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

// Idioma predeterminado para la aplicación
const DEFAULT_LANG = "es";

const LanguageSwitcher = () => {
  const router = useRouter();
  const currentPathname = usePathname();
  
  // Determinar idioma actual basado en la URL
  const getCurrentLanguageFromPath = (): string => {
    if (currentPathname.startsWith("/en")) {
      return "en";
    }
    return DEFAULT_LANG; // Idioma predeterminado
  };
  
  // Estado para el idioma actual
  const [currentLang, setCurrentLang] = useState<Lang>(
    languages.find(l => l.code === DEFAULT_LANG) || languages[0]
  );
  
  // Efecto para actualizar el estado según la URL actual
  useEffect(() => {
    const langCode = getCurrentLanguageFromPath();
    const lang = languages.find(l => l.code === langCode) || languages[0];
    setCurrentLang(lang);
  }, [currentPathname]);
  
  const switchLanguage = () => {
    try {
      // Determinar el nuevo idioma (alternar entre inglés y español)
      const newLang = currentLang.code === "en" ? "es" : "en";
      
      // Actualizar cookie
      document.cookie = `NEXT_LOCALE=${newLang};path=/;max-age=${60 * 60 * 24 * 30}`;
      
      // Construir la nueva ruta
      let newPath;
      
      if (newLang === DEFAULT_LANG) {
        // Si cambiamos a español (idioma predeterminado)
        // Eliminar cualquier prefijo de idioma
        newPath = currentPathname.replace(/^\/en/, "");
        if (newPath === "") newPath = "/";
      } else {
        // Si cambiamos a inglés
        if (currentPathname === "/") {
          newPath = "/en";
        } else {
          // Eliminar cualquier prefijo de idioma existente y agregar el nuevo
          const pathWithoutPrefix = currentPathname.replace(/^\/(en|es)/, "");
          newPath = `/en${pathWithoutPrefix}`;
        }
      }
      
      // Asegurarse de que la ruta no tenga barras duplicadas
      newPath = newPath.replace(/\/\//g, "/");
      
      // Navegar a la nueva ruta
      router.push(newPath);
    } catch (error) {
      console.error("Error al cambiar idioma:", error);
    }
  };
  
  return (
    <button
      onClick={switchLanguage}
      className="flex items-center gap-2 py-2 px-3 rounded-3xl hover:bg-[#7828c8] dark:hover:bg-[#9455d3]"
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