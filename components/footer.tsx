export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/40 py-12" aria-labelledby="footer-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 id="footer-title" className="flex items-center gap-2 font-display text-xl font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-md gold-bg text-primary-foreground font-bold">
                L
              </span>
              <span>
                <span className="gold-gradient">La</span> Casino
              </span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Официальный сайт онлайн-казино. Играть в ля казино на рабочем зеркале — безопасно и
              удобно.
            </p>
          </div>

          <nav aria-label="Разделы">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Разделы
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#games" className="transition-colors hover:text-foreground">
                  Игры
                </a>
              </li>
              <li>
                <a href="#bonuses" className="transition-colors hover:text-foreground">
                  Бонусы
                </a>
              </li>
              <li>
                <a href="#mirror" className="transition-colors hover:text-foreground">
                  Зеркало
                </a>
              </li>
              <li>
                <a href="#faq" className="transition-colors hover:text-foreground">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Информация">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Информация
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Лицензия и правила</li>
              <li>Ответственная игра</li>
              <li>Политика конфиденциальности</li>
              <li>Пользовательское соглашение</li>
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Поддержка
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Онлайн-чат 24/7</li>
              <li>support@la-casino.com</li>
              <li>Telegram-канал</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border/40 pt-6 text-center text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} La Casino. Информационный сайт. 18+ Играйте ответственно.
          </p>
        </div>
      </div>
    </footer>
  )
}
