import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Simple image gallery with lightbox to showcase snow plowing in progress
const images = [
  {
    src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop',
    alt: 'Plow truck clearing snow at dawn',
  },
  {
    src: 'https://images.unsplash.com/photo-1610370717535-05495a6e5b5d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQbG93JTIwdHJ1Y2slMjBjbGVhcmluZyUyMHNub3d8ZW58MHwwfHx8MTc2MzMzMjU1OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Driveway being cleared after heavy snowfall',
  },
  {
    src: 'https://images.unsplash.com/photo-1758486158509-3134ec0b9ab0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEcml2ZXdheSUyMGJlaW5nJTIwY2xlYXJlZCUyMGFmdGVyfGVufDB8MHx8fDE3NjMzMzI1NTl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Crew salting sidewalks for safety',
  },
  {
    src: 'https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1600&auto=format&fit=crop',
    alt: 'City streets covered in fresh snow',
  },
]

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <section className="py-20 bg-gradient-to-b from-sky-50/50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">See us in action</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Real moments from winter storms: fast dispatch, clean results, and safe pathways.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {images.map((img, i) => (
            <motion.button
              key={img.src}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-gray-200 bg-gray-100"
            >
              <img src={img.src} alt={img.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm">
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="relative w-full max-w-5xl">
                <motion.img
                  key={active}
                  src={images[active].src}
                  alt={images[active].alt}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full rounded-2xl shadow-2xl"
                />
                <button aria-label="Close" onClick={() => setActive(null)} className="absolute -top-4 right-0 translate-y-[-100%] rounded-full bg-white/90 px-4 py-1 text-sm font-medium text-gray-800 ring-1 ring-gray-200 shadow">Close</button>
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <button aria-label="Previous" onClick={() => setActive((active - 1 + images.length) % images.length)} className="m-2 rounded-full bg-white/90 p-2 text-gray-800 ring-1 ring-gray-200 shadow">
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button aria-label="Next" onClick={() => setActive((active + 1) % images.length)} className="m-2 rounded-full bg-white/90 p-2 text-gray-800 ring-1 ring-gray-200 shadow">
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
