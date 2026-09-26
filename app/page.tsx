import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Games } from '@/components/games'
import { Bonuses } from '@/components/bonuses'
import { Mirror } from '@/components/mirror'
import { WhyLaCasino } from '@/components/why'
import { Faq } from '@/components/faq'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen velvet-bg">
      <Header />
      <Hero />
      <Games />
      <Bonuses />
      <Mirror />
      <WhyLaCasino />
      <Faq />
      <Footer />
    </main>
  )
}
