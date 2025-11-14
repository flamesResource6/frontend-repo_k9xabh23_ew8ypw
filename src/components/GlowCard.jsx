import { motion } from 'framer-motion'

export default function GlowCard({ children, className = '', hover = true }) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur ${className}`}
      whileHover={hover ? { scale: 1.02 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
      <div className="pointer-events-none absolute -inset-24 -z-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),transparent_60%)] blur-2xl" />
      {children}
    </motion.div>
  )
}
