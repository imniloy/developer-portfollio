import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkTheme = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState(preferDarkTheme);

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkTheme);
    const userThemePreference = window.localStorage.getItem("theme-preference");

    // this is a callback functions that will be called when mediaList value changes...
    const handleChange = () => {
      if (userThemePreference) {
        let checkTheme = userThemePreference === "dark" ? "dark" : "light";
        setMode(checkTheme);
        if (checkTheme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        let checkTheme = mediaQuery.matches === "light" ? "light" : "dark";
        setMode(checkTheme);
        if (checkTheme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    // this function will be called for the first time...
    handleChange();
    // this listener sit to listen for any changes to the mediaList....
    // mediaList contains [viewportHeight,viewportWidth, prefers-color-scheme, etc...]
    mediaQuery.addEventListener("change", handleChange);

    // remove this listener
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme-preference", "dark");
      document.documentElement.classList.add("dark");
    } else if (mode === "light") {
      window.localStorage.setItem("theme-preference", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
