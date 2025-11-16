import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Gallery from './components/Gallery'
import Snowfall from './components/Snowfall'
import SnowDivider from './components/SnowDivider'

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Toni Snow Plowing. All rights reserved.</p>
        <div className="text-sm text-gray-500">Proudly serving our community all winter long.</div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Snowfall overlay for winter vibes */}
      <Snowfall count={120} intensity={1} />

      <Navbar />
      <main>
        <Hero />
        <SnowDivider />
        <Features />
        <Gallery />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
