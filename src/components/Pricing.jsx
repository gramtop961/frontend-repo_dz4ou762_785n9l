import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Residential Driveway',
    price: '$49+',
    points: ['Single visit plow', 'Walkway clearing', 'Front steps brushed', 'Salting optional'],
  },
  {
    name: 'Seasonal Plan',
    price: '$299/mo',
    points: ['Unlimited visits', 'Priority dispatch', 'Walkways + salting', 'Text alerts'],
    highlight: true,
  },
  {
    name: 'Commercial Lot',
    price: 'Custom',
    points: ['Scaled crew + equipment', 'Zero-tolerance ice policy', 'Pre-snow inspection', 'Dedicated manager'],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-sky-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Simple, fair pricing</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Transparent rates with no surprises. Ask about our seasonal plans for the best value.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, idx) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className={`relative rounded-2xl bg-white p-6 ring-1 ${p.highlight ? 'ring-sky-300 shadow-xl' : 'ring-gray-200'} `}>
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sky-600 px-3 py-1 text-xs font-medium text-white">Most Popular</span>
              )}
              <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
              <div className="mt-2 text-4xl font-extrabold tracking-tight">{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-600" />
                    {pt}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-white font-medium hover:bg-sky-700 transition">Get started</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
