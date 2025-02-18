"use client";
import { useState, useEffect } from "react";
import { Sun, Moon } from 'lucide-react';

function ThemeMode() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const get_icon = () => {
    if (theme === "dark") {
      return (
        <Sun size={40} color="black"/>
      );
    } else {
      return (
       <Moon size={40} color="white"/>
      );
    }
  };

  return (
    <button
      className="flex items-center justify-center fixed z-40 w-16 h-16 bottom-8 right-8 rounded-full bg-neutral-900 dark:bg-[#f4f4f4]"
      onClick={handleChangeTheme}
    >
      {get_icon()}
    </button>
  );
}

export default ThemeMode;
