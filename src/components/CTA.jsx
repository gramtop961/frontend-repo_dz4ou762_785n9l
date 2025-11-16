import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Ready when the snow hits</h2>
            <p className="mt-3 text-gray-600">Call or message us and we’ll respond right away. We serve residential and commercial clients across town.</p>

            <div className="mt-6 space-y-3">
              <a href="tel:+1234567890" className="flex items-center gap-3 text-gray-700 hover:text-sky-700">
                <Phone className="h-5 w-5 text-sky-600" /> (123) 456-7890
              </a>
              <a href="mailto:hello@tonisnowplowing.com" className="flex items-center gap-3 text-gray-700 hover:text-sky-700">
                <Mail className="h-5 w-5 text-sky-600" /> hello@tonisnowplowing.com
              </a>
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="h-5 w-5 text-sky-600" /> Your City, ST
              </div>
            </div>
          </div>

          <motion.form initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl bg-white p-6 ring-1 ring-gray-200 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-700">Name</label>
                <input required type="text" className="mt-1 w-full rounded-lg border-gray-300 focus:border-sky-500 focus:ring-sky-500" placeholder="John Doe" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Phone</label>
                <input required type="tel" className="mt-1 w-full rounded-lg border-gray-300 focus:border-sky-500 focus:ring-sky-500" placeholder="(555) 123-4567" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-gray-700">Address</label>
                <input type="text" className="mt-1 w-full rounded-lg border-gray-300 focus:border-sky-500 focus:ring-sky-500" placeholder="123 Main St" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-gray-700">Message</label>
                <textarea rows="4" className="mt-1 w-full rounded-lg border-gray-300 focus:border-sky-500 focus:ring-sky-500" placeholder="Tell us about your property"></textarea>
              </div>
            </div>
            <button type="submit" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-white font-medium hover:bg-sky-700 transition">Request a quote</button>
            <p className="mt-3 text-xs text-gray-500 text-center">By submitting, you agree to be contacted for service and scheduling.</p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
