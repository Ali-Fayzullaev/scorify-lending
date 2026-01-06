import { Analytics } from './components/Analytics'
import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Sources from './components/Sources'
import Programs from './components/Programs'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Benefits from './components/Benefits'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Analytics />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Sources />
        <Programs />
        <HowItWorks />
        <Pricing />
        <Benefits />
        <Reviews />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}