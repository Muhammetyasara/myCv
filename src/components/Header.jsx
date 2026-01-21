import content from "../data/content.json";

export default function Header({ theme, setTheme, lang, setLang }) {

  const data = content.header[lang];
  return (
    <header className="w-full text-slate-300 dark:text-slate-300 px-72 flex flex-col justify-end items-end gap-8">
      <div className="flex items-center justify-end pt-6 px-32">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className={`relative inline-flex h-5 w-11 items-center rounded-full transition-colors ${
              theme === "dark" ? "bg-slate-400" : "bg-indigo-800"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-yellow-300 transition-transform ${
                theme === "dark" ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>

          <span className="text-sm font-medium text-slate-500 dark:text-indigo-400">
            {theme === "light"
              ? lang === "en"
                ? "DARK MODE"
                : "KARANLIK MOD"
              : lang === "en"
              ? "LIGHT MODE"
              : "AYDINLIK MOD"}
          </span>

          <span className="h-4 w-px border border-slate-500 dark:border-white" />

          <button
            onClick={() => setLang(lang === "en" ? "tr" : "en")}
            className="text-sm font-medium"
          >
            <p className="text-indigo-800 font-bold dark:text-indigo-400">
              {lang === "en" ? "TÜRKÇE" : "ENGLISH"}
              <span className="text-slate-500 dark:text-slate-300">
                {lang === "en" ? "'YE GEÇ" : ""}
              </span>
            </p>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-12 pt-6 px-32">
        <button className="text-slate-700 font-medium">{data.skills}</button>
        <button className="text-slate-700 font-medium">{data.projects}</button>
        <button className="dark:text-indigo-400 border dark:border-indigo-400 border-indigo-800 px-6 py-2 rounded text-indigo-800 font-medium hover:bg-indigo-800 hover:text-white dark:hover:text-white">
            {data.primaryButton}</button>
      </div>
    </header>
  );
}
