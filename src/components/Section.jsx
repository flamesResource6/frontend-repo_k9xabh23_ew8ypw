import { motion } from 'framer-motion'

export default function Section({ id, children, className = '' }) {
  return (
    <section
      id={id}
      className={`relative mx-auto max-w-7xl px-6 py-24 sm:py-28 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-transparent via-transparent to-transparent [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)]" />
    </section>
  )
}
