import content from "../data/content.json";

export default function Skills({ lang }) {
  const data = content.skills[lang];

  return (
    <section className="dark:text-white text-black flex flex-col px-6 sm:px-12 lg:px-72 gap-8">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium">{data.title}</h2>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col gap-4">
          <h3 className="text-indigo-800 dark:text-indigo-400 text-3xl">{data.javascript.title}</h3>
          <p className="text-slate-500 dark:text-slate-300">{data.javascript.description}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-indigo-800 dark:text-indigo-400 text-3xl">{data.react.title}</h3>
          <p className="text-slate-500 dark:text-slate-300">{data.react.description}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-indigo-800 dark:text-indigo-400 text-3xl">{data.node.title}</h3>
          <p className="text-slate-500 dark:text-slate-300">{data.node.description}</p>
        </div>
      </div>

      <span className="border w-full self-center my-8 border-indigo-300"></span>
    </section>
  );
}
