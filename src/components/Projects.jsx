import content from "../data/content.json";
import { useSelector } from "react-redux";

export default function Projects({ lang }) {
  const data = content.projects[lang];
  const { colors, status } = useSelector((state) => state.workintech);

  return (
    <section className="dark:text-white text-black flex flex-col px-6 sm:px-12 lg:px-72 gap-12 mb-24">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium">{data.title}</h2>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-32">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex-1 flex flex-col gap-4">
            <img className="w-full" src={`./src/images/project${i + 1}.png`} alt="project" />

            <h3 className="text-indigo-800 dark:text-indigo-400 text-3xl">
              {data.items[i].title}
            </h3>

            <p className="text-slate-500 dark:text-slate-300 h-20">
              {data.items[i].description}
            </p>

            <div className="flex gap-2 flex-wrap">
              <span className="dark:text-indigo-400 border dark:border-indigo-400 border-indigo-800 px-6 py-1 rounded text-indigo-800 font-medium">react</span>
              <span className="dark:text-indigo-400 border dark:border-indigo-400 border-indigo-800 px-6 py-1 rounded text-indigo-800 font-medium">redux</span>
              <span className="dark:text-indigo-400 border dark:border-indigo-400 border-indigo-800 px-6 py-1 rounded text-indigo-800 font-medium">axios</span>
            </div>

            <div className="flex justify-between">
              <button className="text-indigo-800 dark:text-indigo-400 font-medium underline">Github</button>
              <button className="text-indigo-800 dark:text-indigo-400 font-medium underline">{data.viewSite}</button>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden mt-16">
        <h3 className="text-3xl font-medium mb-4">Workintech API Colors</h3>
        {status === "loading" && <p className="text-slate-500">Loading...</p>}
        <div className="flex flex-wrap gap-3">
          {colors.map((item) => (
            <span
              key={item.id}
              className="px-4 py-2 rounded text-white text-sm font-medium"
              style={{ backgroundColor: item.color }}
            >
              {item.name} ({item.year})
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
