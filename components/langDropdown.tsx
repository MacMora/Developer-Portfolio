"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import useTranslation from "@/hooks/use-translation";
import i18nConfig from "@/i18nConfig";
import { usePathname, useRouter } from "next/navigation";



type Lang = {
  code: string
  name: string
  flag: string
}

const languages: Lang[] = [
  {
    code: 'es',
    name: 'Español',
    flag: 'https://flagcdn.com/48x36/es.png'
  },
  {
    code: 'en',
    name: 'English',
    flag: 'https://flagcdn.com/48x36/us.png'
  }
]

const LangDropdown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<Lang>();
  const {i18n} = useTranslation();
  const router = useRouter();
  const pathName = usePathname();

  const currentLanguage = i18n.language;

  const handleChange = (value: any) => {
    setOpen(false)
    

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    
    document.cookie = `NEXT_LOCALE=NULL;expires=NULL;path=/`;

    if(currentLanguage === i18nConfig.defaultLocale){
        router.push(`/${value}${pathName}`)
    }else{
        router.push(pathName.replace(`/${currentLanguage}`,`/${value}`))
    }

    router.refresh()

  };

  useEffect(() => {
    const existLang = languages.find(lang => lang.code === i18n.language)
    if(existLang){
        setValue(existLang)
    }else{
        setValue(languages[0])
    }
  }, []);

  return (
    <div className="relative inline-block text-left">

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center w-full rounded-md px-4 py-2  text-sm font-medium text-gray-700  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-gray-100"
        >
          {value?.flag && (
            <Image
              src={value?.flag}
              width={100}
              height={50}
              alt="flag"
              className="h-4 w-auto mr-2"
            />
          )}
          <small className={`hidden lg:block NULL`}>
            {value?.name}
          </small>
          <svg
            className={`-mr-1 ml-2 h-5 w-5 NULL`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {open && (
            <div
              className={`origin-top-right absolute right-0 mt-2 NULL  rounded-md shadow-sm   ring-1 ring-black ring-opacity-5`}
            >
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    onClick={() => handleChange(lang.code)}
                    className="flex cursor-pointer px-4 py-2 text-sm"
                    role="menuitem"
                  >
                    {lang.flag && (
                      <Image
                        src={lang.flag}
                        alt="flag"
                        className="h-6 w-auto mr-2"
                        width={50}
                        height={50}
                      />
                    )}
                    <small className="hidden lg:block">{lang.name}</small>
                  </div>
                ))}
              </div>
            </div>
        )}
    </div>
  );
};

export default LangDropdown;
