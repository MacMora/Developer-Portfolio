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
  const pathName = usePathname();
  const { i18n } = useTranslation();
  
  // Usar useState en lugar de useMemo
  const [currentLang, setCurrentLang] = useState(languages[0]);
  
  // Actualizar currentLang cuando cambia i18n.language
  useEffect(() => {
    const lang = languages.find((l) => l.code === i18n.language) || languages[0];
    setCurrentLang(lang);
  }, [i18n.language]);

  const switchLanguage = () => {
    const newLang = currentLang.code === "en" ? "es" : "en";

    document.cookie = `NEXT_LOCALE=${newLang};path=/;max-age=${30 * 24 * 60 * 60}`;

    if (i18n.language === i18nConfig.defaultLocale) {
      router.push(`/${newLang}${pathName}`);
    } else {
      router.push(pathName.replace(`/${i18n.language}`, `/${newLang}`));
    }

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