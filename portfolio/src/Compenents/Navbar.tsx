export default function App() {
  return (
    <nav className="fixed top-28 -right-7 justify-center items-center z-10 -rotate-90 text-right hidden md:flex">
      <a
        href="TAREK BOURENNANE CV.pdf"
        download="Tarek_BOURENNANE_CV.pdf"
        className="text-white mr-5 cursor-pointer text-lg opacity-50 hover:opacity-100 transition-all"
      >
        CV
      </a>
      <a
        href="#about"
        className="text-white mr-5 cursor-pointer text-lg opacity-50 hover:opacity-100 transition-all"
      >
        About
      </a>
      <a
        href="#work"
        className="text-white mr-5 cursor-pointer text-lg opacity-50 hover:opacity-100 transition-all"
      >
        Work
      </a>
      <a href="/" className="flex items-center justify-center cursor-pointer">
        <span className="bg-white rounded-full inline-block w-4 h-4"></span>
      </a>
    </nav>
  );
}
