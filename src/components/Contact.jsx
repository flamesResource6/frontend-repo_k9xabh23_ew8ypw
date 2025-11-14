import { useState } from 'react'
import Section from './Section'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <Section id="contact" className="text-white">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Let’s build something great</h2>
        <p className="mt-2 text-white/70">Tell me about your idea or project.</p>
      </div>

      <form onSubmit={onSubmit} className="mx-auto mt-8 max-w-2xl space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <input required placeholder="Name" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/50 focus:border-cyan-400/50" />
          <input required type="email" placeholder="Email" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/50 focus:border-cyan-400/50" />
        </div>
        <input placeholder="Subject" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/50 focus:border-cyan-400/50" />
        <textarea required rows={6} placeholder="Your message" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/50 focus:border-cyan-400/50" />
        <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 px-6 py-3 font-medium text-white shadow-[0_0_30px_-10px_rgba(168,85,247,0.8)]">
          <span className="relative z-10">Send Message</span>
          <span className="absolute inset-0 translate-y-1/2 rounded-full bg-white/20 blur-xl transition-transform group-hover:translate-y-0" />
        </button>
        {sent && <p className="text-sm text-cyan-300">Thanks! I’ll get back to you soon.</p>}
      </form>
    </Section>
  )
}
