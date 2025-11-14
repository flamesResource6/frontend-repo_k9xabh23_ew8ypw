import Section from './Section'
import GlowCard from './GlowCard'
import { Briefcase, Award, GraduationCap } from 'lucide-react'

const timeline = [
  { title: 'Senior Developer', place: 'Tech Co', period: '2022 — Present', icon: Briefcase, desc: 'Leading full‑stack development and AI integrations.' },
  { title: 'Software Engineer', place: 'Startup Inc.', period: '2020 — 2022', icon: Briefcase, desc: 'Built realtime dashboards and automation tools.' },
  { title: 'B.S. Computer Science', place: 'University', period: '2016 — 2020', icon: GraduationCap, desc: 'Focus on systems, HCI, and machine learning.' },
  { title: 'Hackathon Winner', place: 'Global Hack', period: '2019', icon: Award, desc: 'Won for a computer vision project.' },
]

export default function Experience() {
  return (
    <Section id="experience" className="text-white">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Experience & Journey</h2>
        <p className="mt-2 text-white/70">Highlights from my path so far.</p>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-white/10 sm:left-1/2" />
        <div className="space-y-8">
          {timeline.map((t, i) => (
            <GlowCard key={i} className={`relative sm:w-1/2 ${i % 2 ? 'sm:ml-auto' : ''}`}>
              <div className="flex items-start gap-4">
                <t.icon className="h-6 w-6 text-purple-300" />
                <div>
                  <h3 className="text-lg font-semibold">{t.title}</h3>
                  <p className="text-white/70">{t.place} • {t.period}</p>
                  <p className="mt-2 text-white/80">{t.desc}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </Section>
  )
}
