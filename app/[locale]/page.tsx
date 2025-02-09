"use client";
import LangDropdown from "@/components/langDropdown";
import ThemeMode from "@/components/thememode";
import useTranslation from "@/hooks/use-translation";


function App() {
  const {t} = useTranslation();
  return (
    <div>
      <div>
        <h1 className="text-72 text-black dark:text-white">{t('test')}</h1>
      </div>
      <ThemeMode />
      <LangDropdown />
    </div>
  );
}

export default App;
