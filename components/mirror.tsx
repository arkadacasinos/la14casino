export function Mirror() {
  return (
    <section
      id="mirror"
      className="border-b border-border/40 py-20 sm:py-28"
      aria-labelledby="mirror-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
              Доступ 24/7
            </p>
            <h2
              id="mirror-title"
              className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Ля казино зеркало рабочее на сегодня
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Если основной сайт недоступен, используйте актуальное зеркало La Casino. Это полная
              копия официального сайта с теми же функциями, балансом и бонусами. Вход через зеркало
              безопасен и не требует VPN.
            </p>

            <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>Рабочее зеркало обновляется ежедневно</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>Сохранение баланса и истории игр</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>Полный доступ к слотам и лайв-казино</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>Вход с теми же логином и паролем</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#play"
                className="gold-bg inline-flex h-12 items-center justify-center rounded-md px-6 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Перейти на зеркало
              </a>
              <a
                href="#play"
                className="inline-flex h-12 items-center justify-center rounded-md border border-border/60 bg-card/40 px-6 text-base font-medium text-foreground backdrop-blur transition-colors hover:bg-card/70"
              >
                Скачать приложение
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-accent/10 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-xl border border-border/60 bg-card/80 p-8 backdrop-blur card-glow">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Статус зеркала
                </span>
                <span className="flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  Работает
                </span>
              </div>

              <div className="space-y-4">
                <div className="rounded-lg border border-border/40 bg-background/40 p-4">
                  <p className="text-xs text-muted-foreground">Основной домен</p>
                  <p className="mt-1 font-mono text-sm text-foreground">la-casino.com</p>
                </div>
                <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
                  <p className="text-xs text-muted-foreground">Зеркало на сегодня</p>
                  <p className="mt-1 font-mono text-sm text-foreground">la-casino-mirror.net</p>
                </div>
                <div className="rounded-lg border border-border/40 bg-background/40 p-4">
                  <p className="text-xs text-muted-foreground">Мобильная версия</p>
                  <p className="mt-1 font-mono text-sm text-foreground">m.la-casino.com</p>
                </div>
              </div>

              <p className="mt-6 text-xs text-muted-foreground">
                Обновлено сегодня · Все адреса проверены и безопасны
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
