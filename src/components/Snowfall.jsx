import { useMemo } from 'react'
import { motion } from 'framer-motion'

// Full-screen subtle snowfall overlay using Framer Motion
export default function Snowfall({ count = 80, intensity = 1 }) {
  const flakes = useMemo(() => {
    return new Array(count).fill(0).map((_, i) => ({
      id: i,
      size: Math.random() * 6 + 2, // 2px - 8px
      x: Math.random() * 100, // vw
      delay: Math.random() * 6,
      duration: 6 + Math.random() * 8, // 6s - 14s
      opacity: 0.3 + Math.random() * 0.6,
      drift: (Math.random() - 0.5) * 20, // -10 to 10 vw drift
    }))
  }, [count])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {flakes.map((f) => (
        <motion.span
          key={f.id}
          initial={{ y: -20, x: `${f.x}vw`, opacity: 0 }}
          animate={{
            y: `calc(100vh + 20px)` ,
            x: [`${f.x}vw`, `${f.x + f.drift * intensity}vw`, `${f.x}vw`],
            opacity: [0, f.opacity, f.opacity, 0],
          }}
          transition={{
            duration: f.duration / intensity,
            delay: f.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            width: f.size,
            height: f.size,
            left: 0,
            top: 0,
            borderRadius: 9999,
            position: 'absolute',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,255,255,0.6))',
            boxShadow: '0 0 8px rgba(255,255,255,0.4)',
          }}
        />
      ))}

      {/* Frosted vignette for extra winter vibe */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/20" />
    </div>
  )
}
