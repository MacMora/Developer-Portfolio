"use client";
import { useState, useEffect } from "react";

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="40" fill="orange" />

          <line
            x1="100"
            y1="0"
            x2="100"
            y2="30"
            stroke="orange"
            strokeWidth="4"
          />
          <line
            x1="100"
            y1="200"
            x2="100"
            y2="170"
            stroke="orange"
            strokeWidth="4"
          />
          <line
            x1="0"
            y1="100"
            x2="30"
            y2="100"
            stroke="orange"
            strokeWidth="4"
          />
          <line
            x1="200"
            y1="100"
            x2="170"
            y2="100"
            stroke="orange"
            strokeWidth="4"
          />

          <line
            x1="40"
            y1="40"
            x2="60"
            y2="60"
            stroke="orange"
            strokeWidth="4"
          />
          <line
            x1="160"
            y1="40"
            x2="140"
            y2="60"
            stroke="orange"
            strokeWidth="4"
          />
          <line
            x1="40"
            y1="160"
            x2="60"
            y2="140"
            stroke="orange"
            strokeWidth="4"
          />
          <line
            x1="160"
            y1="160"
            x2="140"
            y2="140"
            stroke="orange"
            strokeWidth="4"
          />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="80" fill="#f2f2f2" />

          <circle cx="60" cy="50" r="20" fill="#bdc3c7" />

          <circle cx="130" cy="80" r="15" fill="#bdc3c7" />

          <circle cx="90" cy="130" r="12" fill="#bdc3c7" />
        </svg>
      );
    }
  };

  return (
    <button
      className="flex items-center justify-center absolute w-16 h-16 bottom-16 right-16 rounded-full bg-neutral-900 dark:bg-[#f4f4f4]"
      onClick={handleChangeTheme}
    >
      {get_icon()}
    </button>
  );
}

export default ThemeMode;
