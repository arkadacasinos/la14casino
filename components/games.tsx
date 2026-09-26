const games = [
  {
    title: 'Слоты',
    description: '3000+ лицензионных автоматов от ведущих провайдеров',
    icon: 'slots',
  },
  {
    title: 'Рулетка',
    description: 'Европейская, американская и французская рулетка онлайн',
    icon: 'roulette',
  },
  {
    title: 'Покер',
    description: 'Texas Hold&apos;em, Omaha и видеопокер в лайв-формате',
    icon: 'poker',
  },
  {
    title: 'Блэкджек',
    description: 'Классический 21 и современные вариации с живыми дилерами',
    icon: 'blackjack',
  },
  {
    title: 'Лайв-казино',
    description: 'Игры с реальными дилерами в HD-качестве 24/7',
    icon: 'live',
  },
  {
    title: 'Краш-игры',
    description: 'Aviator, JetX и другие мгновенные игры на удачу',
    icon: 'crash',
  },
]

const iconMap: Record<string, string> = {
  slots: '🎰',
  roulette: '🎡',
  poker: '♠',
  blackjack: '🂡',
  live: '◉',
  crash: '✈',
}

export function Games() {
  return (
    <section
      id="games"
      className="border-b border-border/40 py-20 sm:py-28"
      aria-labelledby="games-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            Игровой зал
          </p>
          <h2
            id="games-title"
            className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Играть в La Casino онлайн
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Тысячи игр от топовых провайдеров. Слоты, рулетка, покер, лайв-дилеры — всё в одном
            месте на официальном сайте ля казино.
          </p>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {games.map((game) => (
            <li
              key={game.title}
              className="group relative overflow-hidden rounded-lg border border-border/60 bg-card/60 p-6 backdrop-blur transition-all hover:border-primary/40 hover:bg-card/80"
            >
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-md gold-bg text-2xl text-primary-foreground"
                aria-hidden="true"
              >
                {iconMap[game.icon]}
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">{game.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {game.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
