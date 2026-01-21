export default function Header() {
  return (
    <header className="w-full bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-semibold">MyPortfolio</h1>

        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#about" className="hover:text-sky-400">About</a>
          <a href="#skills" className="hover:text-sky-400">Skills</a>
          <a href="#projects" className="hover:text-sky-400">Projects</a>
          <a href="#contact" className="hover:text-sky-400">Contact</a>
        </nav>

        <button className="border border-sky-400 px-4 py-1 rounded text-sm hover:bg-sky-400 hover:text-slate-900 transition">
          Contact
        </button>
      </div>
    </header>
  );
}
