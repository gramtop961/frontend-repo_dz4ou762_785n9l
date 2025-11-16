import { motion } from 'framer-motion'
import { Snowflake, ShieldCheck, Clock, MapPin } from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: '24/7 Rapid Response',
    desc: 'We monitor storms and dispatch proactively so you’re never stuck waiting.',
  },
  {
    icon: ShieldCheck,
    title: 'Fully Insured & Safe',
    desc: 'Trained crew, commercial insurance, and safety-first protocols on every job.',
  },
  {
    icon: MapPin,
    title: 'Local & Reliable',
    desc: 'Serving neighborhoods and businesses in your area with pride.',
  },
  {
    icon: Snowflake,
    title: 'Modern Equipment',
    desc: 'Reliable trucks, snow blowers, and salters for any size job.',
  },
]

export default function Features() {
  return (
    <section id="services" className="py-20 relative">
      {/* subtle animated snow backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(125,211,252,0.15),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Snow removal done right</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Residential driveways to large commercial lots — we keep your property safe and accessible all winter long.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="group relative overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-gray-200 hover:shadow-lg hover:ring-sky-200 transition">
              {/* snow sparkle */}
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-white/80 to-sky-100 blur-lg opacity-0 group-hover:opacity-100 transition" />
              <f.icon className="h-8 w-8 text-sky-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
