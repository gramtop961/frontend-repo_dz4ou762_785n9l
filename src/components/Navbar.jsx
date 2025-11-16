import { useState, useEffect } from 'react'
import { Menu, X, Snowflake, Phone } from 'lucide-react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={classNames(
      'fixed top-0 z-50 w-full transition-all',
      scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'
    )}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Snowflake className="h-6 w-6 text-sky-600" />
            <span className="font-semibold">Toni Snow Plowing</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-gray-700 hover:text-sky-700 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-white hover:bg-sky-700 transition-colors">
              <Phone className="h-4 w-4" /> Get a Quote
            </a>
          </nav>

          <button aria-label="Open menu" onClick={() => setOpen(true)} className="md:hidden p-2 rounded-md hover:bg-sky-50">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-white/95 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <a href="#" className="flex items-center gap-2">
                <Snowflake className="h-6 w-6 text-sky-600" />
                <span className="font-semibold">Toni Snow Plowing</span>
              </a>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 rounded-md hover:bg-sky-50">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-6 py-6">
              {navLinks.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-lg text-gray-800">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-3 text-white">
                <Phone className="h-4 w-4" /> Get a Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
