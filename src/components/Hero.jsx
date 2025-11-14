import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Code2, Atom, Cpu, Globe, Database, Sparkles } from 'lucide-react'

const float = {
  initial: { y: 0 },
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#080810] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay for contrast (doesn't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#080810cc] via-[#08081088] to-[#080810]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center gap-6 px-6 pt-28 text-center sm:pt-36">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium text-white/80 backdrop-blur"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400"></span>
          Available for select projects
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-semibold tracking-tight sm:text-6xl md:text-7xl"
        >
          Hi, I’m <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Michael</span> —
          <br className="hidden sm:block" /> Developer, Creator, Problem Solver.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl text-balance text-base text-white/70 sm:text-lg"
        >
          I build fast, beautiful, intelligent digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-2 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-10px_rgba(168,85,247,0.8)] transition-transform will-change-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="relative z-10">View My Work</span>
            <span className="absolute inset-0 translate-y-1/2 rounded-full bg-white/20 blur-xl transition-transform group-hover:translate-y-0" />
          </a>
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-white/25 hover:bg-white/10"
          >
            <span className="relative z-10">Get in Touch</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
        </motion.div>

        {/* Floating tech-like icons */}
        <div className="pointer-events-none mt-8 grid grid-cols-3 gap-4 sm:grid-cols-6">
          {[Code2, Atom, Cpu, Globe, Database, Sparkles].map((Icon, i) => (
            <motion.div key={i} variants={float} initial="initial" animate="animate" className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
              <Icon className="h-6 w-6 text-white/80" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
