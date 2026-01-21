import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("en");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      <Header
        theme={theme}
        setTheme={setTheme}
        lang={lang}
        setLang={setLang}
      />
      <Hero lang={lang}
      setLang={lang} />
    </div>
  );
}

