import { motion } from 'framer-motion'
import GlowCard from './GlowCard'
import Section from './Section'
import { Code2, Cpu, Database, Rocket, Infinity, Cloud, Shield } from 'lucide-react'

const skills = [
  { name: 'JavaScript / TypeScript', level: 90, icon: Code2 },
  { name: 'React / Next.js', level: 92, icon: Rocket },
  { name: 'Node.js', level: 85, icon: Cpu },
  { name: 'Python / AI', level: 88, icon: Infinity },
  { name: 'Databases', level: 82, icon: Database },
  { name: 'Cloud & DevOps', level: 78, icon: Cloud },
  { name: 'Security', level: 75, icon: Shield },
]

export default function Skills() {
  return (
    <Section id="skills" className="text-white">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Skills & Superpowers</h2>
        <p className="mt-2 text-white/70">A blend of engineering, design, and automation.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, idx) => (
          <GlowCard key={idx}>
            <div className="flex items-center gap-4">
              <s.icon className="h-6 w-6 text-cyan-300" />
              <div className="flex-1">
                <div className="mb-1 flex items-center justify-between">
                  <p className="font-medium">{s.name}</p>
                  <span className="text-sm text-white/70">{s.level}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: idx * 0.05 }}
                    className="h-2 rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500"
                  />
                </div>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </Section>
  )
}
