import Section from './Section'
import GlowCard from './GlowCard'

export default function About() {
  return (
    <Section id="about" className="text-white">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <GlowCard>
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop"
              alt="Michael"
              className="h-24 w-24 shrink-0 rounded-2xl object-cover ring-1 ring-white/10"
            />
            <div>
              <h3 className="text-xl font-semibold">About Me</h3>
              <p className="mt-2 text-white/80">
                I’m Michael — a developer who loves to craft beautiful interfaces, automate workflows, and build intelligent systems that feel magical.
              </p>
            </div>
          </div>
        </GlowCard>

        <div className="grid gap-4 sm:grid-cols-2">
          {['AI', 'React', 'Automation', 'Cloud', 'Design', 'APIs'].map((tag) => (
            <div key={tag} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-white/80 backdrop-blur">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
