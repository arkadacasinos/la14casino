export function Hero() {
  return (
    <section
      id="play"
      className="relative overflow-hidden border-b border-border/40"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 chip-pattern" aria-hidden="true" />
      <div
        className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Официальный сайт · Зеркало работает сегодня
          </div>

          <h1
            id="hero-title"
            className="text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="gold-gradient">La Casino</span>
            <span className="block text-foreground">— играть онлайн на официальном сайте</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Ля казино с рабочим зеркалом на сегодня. Вход на официальный сайт, лицензионные слоты,
            быстрые выплаты и бонусы новым игрокам. Играть в казино онлайн — безопасно и удобно.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="#mirror"
              className="gold-bg inline-flex h-12 w-full items-center justify-center rounded-md px-8 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.02] sm:w-auto"
            >
              Войти на сайт
            </a>
            <a
              href="#bonuses"
              className="inline-flex h-12 w-full items-center justify-center rounded-md border border-border/60 bg-card/40 px-8 text-base font-medium text-foreground backdrop-blur transition-colors hover:bg-card/70 sm:w-auto"
            >
              Получить бонус
            </a>
          </div>

          <dl className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-4 text-center sm:gap-8">
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Игр</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-foreground sm:text-3xl">
                3000+
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Выплата</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-foreground sm:text-3xl">
                5 мин
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Бонус</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-foreground sm:text-3xl">
                200%
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
