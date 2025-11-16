import { useState, useEffect } from 'react'
import { Menu, X, Snowflake, Phone } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [elevated, setElevated] = useState(false)

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition ${elevated ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="inline-flex items-center gap-2 text-gray-900 font-semibold">
            <Snowflake className="h-5 w-5 text-sky-600" /> Toni Snow Plowing
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-700 hover:text-sky-700">Services</a>
            <a href="#pricing" className="text-gray-700 hover:text-sky-700">Pricing</a>
            <a href="#testimonials" className="text-gray-700 hover:text-sky-700">Reviews</a>
            <a href="#gallery" className="text-gray-700 hover:text-sky-700">Gallery</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-white shadow-sm hover:bg-sky-700 transition"><Phone className="h-4 w-4"/> Get a Quote</a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 space-y-2">
            <a href="#services" onClick={() => setOpen(false)} className="block py-2">Services</a>
            <a href="#pricing" onClick={() => setOpen(false)} className="block py-2">Pricing</a>
            <a href="#testimonials" onClick={() => setOpen(false)} className="block py-2">Reviews</a>
            <a href="#gallery" onClick={() => setOpen(false)} className="block py-2">Gallery</a>
            <a href="#contact" onClick={() => setOpen(false)} className="block py-2">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
