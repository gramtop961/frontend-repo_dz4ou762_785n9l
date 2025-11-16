import { motion } from 'framer-motion'
import { Snowflake, Phone, ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-blue-50" />
        <svg className="absolute -top-24 -right-24 h-[500px] w-[500px] text-sky-100" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M44.9,-74C57.3,-66.3,66.1,-55.3,73.2,-42.7C80.2,-30.1,85.5,-15,83.2,-0.9C80.8,13.2,70.8,26.5,60.1,37.5C49.4,48.6,38,57.3,25.1,63.4C12.1,69.5,-2.4,73.1,-16.7,71.7C-31.1,70.4,-45.2,64.1,-57.1,54.3C-68.9,44.5,-78.5,31.1,-82.2,16.1C-85.9,1.1,-83.7,-15.5,-77.5,-30.2C-71.2,-45,-60.8,-57.9,-47.5,-65.4C-34.2,-72.9,-17.1,-74.9,-0.3,-74.4C16.5,-73.9,33.1,-71.8,44.9,-74Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-sm text-sky-700 ring-1 ring-sky-200 shadow-sm">
                <Snowflake className="h-4 w-4" />
                Reliable snow removal in minutes
              </div>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
                Stay safe and clear with Toni Snow Plowing
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-xl">
                24/7 professional snow plowing and salting for driveways, parking lots, and sidewalks. Fast response. Local experts. Satisfaction guaranteed.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-white font-medium shadow-lg shadow-sky-600/20 hover:bg-sky-700 transition">
                  <Phone className="h-5 w-5" /> Get a free quote
                </a>
                <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sky-700 font-medium ring-1 ring-sky-200 hover:bg-sky-50 transition">
                  Our services <ChevronRight className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative rounded-2xl bg-white p-6 ring-1 ring-gray-200 shadow-xl">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-sky-100 to-blue-100 blur-2xl -z-10" />
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Driveways', desc: 'Quick, careful clearing' },
                  { title: 'Parking Lots', desc: 'Safe for staff & customers' },
                  { title: 'Sidewalks', desc: 'Prevent slips & falls' },
                  { title: 'Salting', desc: 'Ice prevention & treatment' },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-gray-100 p-4 hover:border-sky-200 transition">
                    <div className="text-xl font-semibold text-gray-900">{item.title}</div>
                    <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
