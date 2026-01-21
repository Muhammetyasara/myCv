import content from "../data/content.json";

export default function Hero({ lang }) {
  const data = content.hero[lang];

  return (
    <section className="dark:text-white text-black flex px-72 justify-between">
      <div className="dark:text-white items-start flex flex-col mt-10 gap-y-16 flex-1">
        <p className="dark:text-indigo-400 text-indigo-800 font-medium text-left">
          ────── {data.name}
        </p>
        <h2 className="text-7xl font-bold text-left text-black dark:text-white">
          {data.title} <br />
          {data.subtitle}
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-left text-xl flex-wrap">
          {data.description}
        </p>

        <div className="flex gap-2 text-white">
          <button className="dark:bg-indigo-600 bg-indigo-800 px-6 py-2 rounded font-medium">
            {data.primaryButton}
          </button>
          <button className="dark:text-indigo-400 border dark:border-indigo-400 border-indigo-800 px-6 py-2 rounded text-indigo-800 font-medium">
            Github
          </button>
          <button className="dark:text-indigo-400 border dark:border-indigo-400 border-indigo-800 px-6 py-2 rounded text-indigo-800 font-medium">
            Linkedin
          </button>
        </div>

        <div className="flex justify-center">
          <img src="" />
        </div>
      </div>
      <div className="flex-1">
        <div className="px-32 py-32">
          <img className="rounded-2xl" src="./src/images/pp.png" alt="" />
        </div>
      </div>
    </section>
  );
}
