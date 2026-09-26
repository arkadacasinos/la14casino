const features = [
  {
    title: 'Лицензия и безопасность',
    description: 'Официальная лицензия, защита данных SSL, честные игры с контролем RNG.',
  },
  {
    title: 'Быстрые выплаты',
    description: 'Вывод средств за 5 минут на карты, кошельки и криптовалюту.',
  },
  {
    title: 'Поддержка 24/7',
    description: 'Онлайн-чат, email и Telegram — отвечаем за минуту в любое время.',
  },
  {
    title: 'Мобильная версия',
    description: 'Играйте в ля казино с телефона — приложение для iOS и Android.',
  },
]

export function WhyLaCasino() {
  return (
    <section
      id="why"
      className="border-b border-border/40 bg-card/30 py-20 sm:py-28"
      aria-labelledby="why-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            Преимущества
          </p>
          <h2
            id="why-title"
            className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Почему выбирают La Casino
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Ля казино — это надёжная платформа с прозрачными правилами, моментальными выплатами и
            тысячами игр на любой вкус.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <article key={feature.title} className="relative">
              <span
                className="font-display text-5xl font-bold text-accent/20"
                aria-hidden="true"
              >
                0{i + 1}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
