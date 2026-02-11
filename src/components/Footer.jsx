import content from "../data/content.json";

export default function Footer({ lang }) {
  const data = content.footer[lang];

  return (
    <footer className="dark:text-white text-black flex flex-col px-6 sm:px-12 lg:px-72 gap-16 py-16 bg-stone-100 dark:bg-slate-800">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium w-full lg:w-1/2">
        {data.title}
      </h2>

      <div className="flex flex-col md:flex-row justify-between gap-6">
        <p className="underline text-red-800 font-medium">
          muhammetyasara@gmail.com
        </p>

        <div className="flex gap-4">
          <button className="font-medium">{data.blog}</button>
          <button className="text-green-600 font-medium">GitHub</button>
          <button className="text-blue-600 font-medium">Linkedin</button>
        </div>
      </div>
    </footer>
  );
}
