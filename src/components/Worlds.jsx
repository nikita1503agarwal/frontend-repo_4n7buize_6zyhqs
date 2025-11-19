import React from 'react'
import { motion } from 'framer-motion'

const WORLDS = [
  { title: 'Video & Animation', hue: 'from-fuchsia-500 to-purple-700', ring: 'shadow-fuchsia-500/40', bg: 'bg-fuchsia-500/10', accent: '#d946ef' },
  { title: 'Graphics & Branding', hue: 'from-teal-400 to-cyan-600', ring: 'shadow-teal-400/40', bg: 'bg-teal-400/10', accent: '#2dd4bf' },
  { title: 'Web & Interactive', hue: 'from-sky-400 to-blue-600', ring: 'shadow-sky-400/40', bg: 'bg-sky-400/10', accent: '#38bdf8' },
  { title: 'Presentations', hue: 'from-yellow-300 to-amber-500', ring: 'shadow-yellow-300/40', bg: 'bg-yellow-300/10', accent: '#fde047' },
  { title: 'AI Creations / NFTs', hue: 'from-lime-400 to-emerald-600', ring: 'shadow-lime-400/40', bg: 'bg-lime-400/10', accent: '#a3e635', glitch: true },
]

export default function Worlds() {
  return (
    <section id="worlds" className="relative bg-gradient-to-b from-black via-slate-950 to-black px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl">Choose Your World</h2>
        <p className="mt-3 text-center text-white/70">Each service is a portal — step in and explore.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WORLDS.map((w, idx) => (
            <motion.a
              key={w.title}
              href="#portfolio"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-white/20`}
              style={{ boxShadow: `0 0 0 0 rgba(0,0,0,0), 0 0 40px ${w.accent}22` }}
            >
              <div className={`absolute -inset-20 ${w.bg} opacity-20 blur-3xl`} />
              {/* 3D rings */}
              <div className="relative">
                <div className={`mx-auto mt-2 h-36 w-36 rounded-full border border-white/10 bg-gradient-to-br ${w.hue} opacity-80 blur-[2px]`} />
                <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
                <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 rotate-12" />
              </div>
              <div className="relative mt-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">{w.title}</h3>
                  <p className="text-sm text-white/60">Enter portal</p>
                </div>
                <div className="h-10 w-10 rounded-full border border-white/20 bg-black/40 text-white grid place-items-center">→</div>
              </div>
              {/* Glitch micro-effect */}
              {w.glitch && (
                <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(0deg, #a7f3d0 0 2px, transparent 2px 6px)' }} />
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
