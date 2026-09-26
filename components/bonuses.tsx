const bonuses = [
  {
    title: 'Приветственный бонус',
    value: '200%',
    description: 'На первые три депозита + 200 фриспинов',
    highlight: true,
  },
  {
    title: 'Кэшбэк',
    value: '15%',
    description: 'Еженедельный возврат проигранных средств',
    highlight: false,
  },
  {
    title: 'Бонус за депозит',
    value: '100%',
    description: 'Каждую пятницу при пополнении от 1000 ₽',
    highlight: false,
  },
  {
    title: 'VIP-программа',
    value: '30%',
    description: 'Персональные бонусы и быстрый вывод для активных игроков',
    highlight: false,
  },
]

export function Bonuses() {
  return (
    <section
      id="bonuses"
      className="border-b border-border/40 bg-card/30 py-20 sm:py-28"
      aria-labelledby="bonuses-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">Бонусы</p>
          <h2
            id="bonuses-title"
            className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Бонусы La Casino
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Щедрая бонусная программа для новых и постоянных игроков. Активируйте бонусы в личном
            кабинете на официальном сайте.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {bonuses.map((bonus) => (
            <article
              key={bonus.title}
              className={`relative overflow-hidden rounded-lg border p-6 backdrop-blur transition-all ${
                bonus.highlight
                  ? 'border-primary/50 bg-card/80 card-glow'
                  : 'border-border/60 bg-card/40 hover:border-primary/30'
              }`}
            >
              {bonus.highlight && (
                <span className="absolute right-4 top-4 rounded-full gold-bg px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
                  TOP
                </span>
              )}
              <p className="font-display text-4xl font-bold gold-gradient">{bonus.value}</p>
              <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                {bonus.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {bonus.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
