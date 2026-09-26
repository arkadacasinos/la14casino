const faqs = [
  {
    q: 'Как войти на официальный сайт La Casino?',
    a: 'Перейдите на официальный сайт ля казино или используйте рабочее зеркало, если основной домен недоступен. Вход выполняется по логину и паролю, указанным при регистрации.',
  },
  {
    q: 'Что делать, если сайт не открывается?',
    a: 'Используйте актуальное зеркало La Casino — это полная копия официального сайта. Все актуальные адреса зеркал публикуются в нашем Telegram-канале и обновляются ежедневно.',
  },
  {
    q: 'Какие бонусы доступны новым игрокам?',
    a: 'Новые игроки получают приветственный бонус 200% на первые три депозита и 200 фриспинов. Также действует еженедельный кэшбэк до 15% и бонусы за депозит по пятницам.',
  },
  {
    q: 'Как быстро выводятся деньги?',
    a: 'Выплаты в La Casino обрабатываются в течение 5 минут на банковские карты, электронные кошельки и криптовалюту. VIP-игроки получают вывод в приоритетном режиме.',
  },
  {
    q: 'Можно ли играть с мобильного телефона?',
    a: 'Да, ля казино онлайн полностью адаптировано под мобильные устройства. Также доступны приложения для iOS и Android с быстрым доступом без блокировок.',
  },
]

export function Faq() {
  return (
    <section
      id="faq"
      className="border-b border-border/40 py-20 sm:py-28"
      aria-labelledby="faq-title"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">FAQ</p>
          <h2
            id="faq-title"
            className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Частые вопросы
          </h2>
        </div>

        <dl className="mt-12 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-lg border border-border/60 bg-card/40 backdrop-blur transition-colors open:bg-card/70 open:border-primary/30"
            >
              <summary className="flex cursor-pointer items-center justify-between p-5 font-medium text-foreground marker:hidden">
                <dt>{faq.q}</dt>
                <span
                  className="ml-4 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-border/60 text-accent transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <dd className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{faq.a}</dd>
            </details>
          ))}
        </dl>
      </div>
    </section>
  )
}
