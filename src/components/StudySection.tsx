const topics = [
  {
    icon: "🔍",
    title: "Общепоисковые системы",
    description: "Google, Яндекс, Bing — индексируют весь Интернет и отвечают на любые запросы пользователей.",
    examples: ["Google", "Яндекс", "Bing"],
  },
  {
    icon: "🗂️",
    title: "Каталоги и директории",
    description: "Структурированные базы сайтов, распределённых по категориям. Добавляются вручную редакторами.",
    examples: ["Yahoo Directory", "DMOZ", "Mail.ru Каталог"],
  },
  {
    icon: "🔗",
    title: "Метапоисковые системы",
    description: "Не имеют собственного индекса — агрегируют результаты из нескольких поисковиков одновременно.",
    examples: ["Dogpile", "MetaCrawler", "Startpage"],
  },
  {
    icon: "🖼️",
    title: "Специализированные поисковики",
    description: "Ищут только в определённом типе контента: картинки, видео, новости, научные статьи.",
    examples: ["Google Images", "YouTube", "Google Scholar"],
  },
  {
    icon: "🕵️",
    title: "Анонимные поисковики",
    description: "Не отслеживают запросы и не собирают данные пользователей. Важны для приватности в сети.",
    examples: ["DuckDuckGo", "Brave Search", "Qwant"],
  },
  {
    icon: "🌐",
    title: "Региональные поисковики",
    description: "Ориентированы на конкретную страну или язык, учитывают местный контент и особенности рынка.",
    examples: ["Яндекс (Россия)", "Baidu (Китай)", "Naver (Корея)"],
  },
]

export default function StudySection() {
  return (
    <section id="topics" className="relative z-10 bg-black/80 backdrop-blur-md py-20 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <span className="inline-block text-white/50 text-xs uppercase tracking-widest mb-3">Информатика · 9–11 класс</span>
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
            Разновидности <span className="font-medium italic">поисковых систем</span>
          </h2>
          <p className="mt-4 text-white/50 text-sm max-w-xl mx-auto leading-relaxed">
            Изучите основные типы поисковых систем, их принцип работы и примеры
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{topic.icon}</div>
              <h3 className="text-white font-medium text-sm mb-2">{topic.title}</h3>
              <p className="text-white/60 text-xs leading-relaxed mb-4">{topic.description}</p>
              <div className="flex flex-wrap gap-2">
                {topic.examples.map((ex) => (
                  <span
                    key={ex}
                    className="px-2 py-1 rounded-full bg-white/10 text-white/70 text-xs"
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
