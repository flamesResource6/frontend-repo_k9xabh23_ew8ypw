import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GlowCard from './GlowCard'
import Section from './Section'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Neon Dashboard',
    desc: 'A real-time analytics dashboard with live streaming charts and AI insights.',
    image: 'https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1600&auto=format&fit=crop',
    tech: ['React', 'Node', 'WebSockets', 'Tailwind'],
    live: '#',
    source: '#',
  },
  {
    title: 'AI Portfolio Generator',
    desc: 'Generates stunning portfolios from a single prompt, powered by LLMs.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop',
    tech: ['Next.js', 'OpenAI', 'Framer Motion'],
    live: '#',
    source: '#',
  },
  {
    title: 'Automation Toolkit',
    desc: 'Low-code automations for everyday ops—scrape, transform, sync.',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
    tech: ['Python', 'Playwright', 'Supabase'],
    live: '#',
    source: '#',
  },
]

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <Section id="projects" className="text-white">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Selected Projects</h2>
        <p className="mt-2 text-white/70">Hover to preview, click for more details.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -4 }}
            onClick={() => setActive(p)}
            className="cursor-pointer"
          >
            <GlowCard className="p-0" hover={false}>
              <div className="group relative overflow-hidden rounded-2xl">
                <img src={p.image} alt={p.title} className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-white/80">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/80">{t}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <a href={p.live} className="inline-flex items-center gap-1 text-sm text-cyan-300 hover:text-cyan-200">
                      <ExternalLink className="h-4 w-4" /> Live
                    </a>
                    <a href={p.source} className="inline-flex items-center gap-1 text-sm text-purple-300 hover:text-purple-200">
                      <Github className="h-4 w-4" /> Code
                    </a>
                  </div>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 22, stiffness: 180 }}
              className="max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b15] p-6 text-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={active.image} alt={active.title} className="h-56 w-full rounded-xl object-cover" />
              <h3 className="mt-4 text-2xl font-semibold">{active.title}</h3>
              <p className="mt-2 text-white/80">{active.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {active.tech.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/80">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href={active.live} className="inline-flex items-center gap-1 rounded-full bg-cyan-600 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-500">
                  <ExternalLink className="h-4 w-4" /> View Live
                </a>
                <a href={active.source} className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10">
                  <Github className="h-4 w-4" /> Source Code
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
