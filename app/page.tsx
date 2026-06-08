import { SmoothScroll } from '@/components/smooth-scroll'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { SplitShowcase } from '@/components/split-showcase'
import { TacosSection } from '@/components/tacos-section'
import { SnacksSection } from '@/components/snacks-section'
import { IngredientsParallax } from '@/components/ingredients-parallax'
import { LocalesSection } from '@/components/locales-section'
import { Testimonials } from '@/components/testimonials'
import { FinalCTA } from '@/components/final-cta'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'

export default function Page() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <ScrollToTop />
      <main className="bg-cream">
        <Hero />
        <Marquee />
        <SplitShowcase />
        <TacosSection />
        <SnacksSection />
        <IngredientsParallax />
        <LocalesSection />
        <Testimonials />
        <FinalCTA />
        <Footer />
      </main>
    </>
  )
}
