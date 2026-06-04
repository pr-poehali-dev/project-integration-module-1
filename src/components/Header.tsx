export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-11 p-6">
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wide">ИнфоПоиск</div>
        <nav className="flex gap-8">
          <a
            href="#topics"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Темы
          </a>
          <a
            href="#test"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Тест
          </a>
        </nav>
      </div>
    </header>
  )
}