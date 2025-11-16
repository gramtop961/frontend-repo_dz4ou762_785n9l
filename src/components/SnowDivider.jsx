// Decorative snow-capped section divider
export default function SnowDivider() {
  return (
    <div aria-hidden className="relative overflow-hidden">
      <svg className="h-16 w-full text-white" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,0 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z" fill="currentColor" />
      </svg>
      <div className="absolute inset-x-0 -top-1 h-2 bg-gradient-to-b from-white/80 to-transparent" />
    </div>
  )
}
