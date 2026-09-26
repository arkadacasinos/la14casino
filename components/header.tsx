import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="La Casino — официальный сайт">
          <span className="flex h-9 w-9 items-center justify-center rounded-md gold-bg text-primary-foreground font-display text-xl font-bold">
            L
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">
            <span className="gold-gradient">La</span>
            <span className="text-foreground"> Casino</span>
          </span>
        </Link>

        <nav aria-label="Главная навигация" className="hidden items-center gap-8 md:flex">
          <a href="#games" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Игры
          </a>
          <a href="#bonuses" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Бонусы
          </a>
          <a href="#mirror" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Зеркало
          </a>
          <a href="#why" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            О нас
          </a>
          <a href="#faq" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            FAQ
          </a>
        </nav>

        <a
          href="#play"
          className="gold-bg inline-flex h-10 items-center justify-center rounded-md px-5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
        >
          Играть
        </a>
      </div>
    </header>
  )
}
