import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { fetchWorkintech  } from "./store/workintechSlice";

export default function App() {
  const [theme, setTheme] = useState("light");
  const lang = useSelector((state) => state.lang.current);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    dispatch(fetchWorkintech ());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      <Header theme={theme} setTheme={setTheme} lang={lang} />
      <Hero lang={lang} />
      <Skills lang={lang} />
      <Profile lang={lang} />
      <Projects lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
