import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'They had my driveway cleared before I even woke up. Incredible service! ',
    name: 'Amanda R.',
    role: 'Homeowner',
  },
  {
    quote: 'Reliable all season. Our parking lot stayed safe and open every storm.',
    name: 'Chris L.',
    role: 'Store Manager',
  },
  {
    quote: 'Fast, friendly, and careful around our landscaping. Highly recommend.',
    name: 'Jaspreet K.',
    role: 'Homeowner',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Trusted by neighbors and businesses</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="rounded-2xl bg-white p-6 ring-1 ring-gray-200">
              <p className="text-gray-700">“{t.quote}”</p>
              <div className="mt-4 text-sm font-medium text-gray-900">{t.name}</div>
              <div className="text-xs text-gray-500">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
