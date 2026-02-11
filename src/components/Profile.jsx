import content from "../data/content.json";

export default function Profile({ lang }) {
  const data = content.profile[lang];

  return (
    <section className="dark:text-white text-black flex flex-col px-6 sm:px-12 lg:px-72 gap-8">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium">{data.title}</h2>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col gap-4 flex-1">
          <h3 className="text-indigo-800 dark:text-indigo-400 text-3xl">
            {data.sections.profile.title}
          </h3>

          <div className="flex gap-8">
            <div className="flex flex-col gap-2 font-medium">
              <span>{data.sections.profile.fields.birthDate.label}</span>
              <span>{data.sections.profile.fields.city.label}</span>
              <span>{data.sections.profile.fields.education.label}</span>
              <span>{data.sections.profile.fields.role.label}</span>
            </div>

            <div className="flex flex-col gap-2">
              <span>{data.sections.profile.fields.birthDate.value}</span>
              <span>{data.sections.profile.fields.city.value}</span>
              <span>{data.sections.profile.fields.education.value}</span>
              <span>{data.sections.profile.fields.role.value}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 flex-1">
          <h3 className="text-indigo-800 dark:text-indigo-400 text-3xl">
            {data.sections.about.title}
          </h3>

          {data.sections.about.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>

      <span className="border w-full self-center my-8 border-indigo-300"></span>
    </section>
  );
}
