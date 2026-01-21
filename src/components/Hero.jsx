export default function Hero() {
  return (
    <section className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <p className="text-sky-400 mb-2">Hi, I am</p>
          <h2 className="text-4xl font-bold mb-4">Your Name</h2>
          <p className="text-slate-300 mb-6">
            Frontend Developer passionate about building beautiful and usable interfaces.
          </p>

          <div className="flex gap-4">
            <button className="bg-sky-400 text-slate-900 px-6 py-2 rounded font-medium">
              Hire Me
            </button>
            <button className="border border-sky-400 px-6 py-2 rounded">
              Download CV
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-64 h-64 rounded-full bg-slate-700"></div>
        </div>

      </div>
    </section>
  );
}
