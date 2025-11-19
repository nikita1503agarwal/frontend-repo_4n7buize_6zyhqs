import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative w-full bg-black px-6 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-[radial-gradient(circle_at_20%_20%,#39ff14_0%,transparent_40%),radial-gradient(circle_at_80%_80%,#60a5fa_0%,transparent_45%)] opacity-20 blur-3xl" />
          <h2 className="text-3xl font-bold text-white md:text-4xl">We build cinematic, interactive worlds</h2>
          <p className="mt-4 text-white/70">
            EMD Studio crafts premium motion design, 3D animation, and immersive web experiences. We blend art, code, and sound into coherent brand stories with neon energy and sci‑fi clarity.
          </p>
          <a href="#worlds" className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white transition hover:bg-white/10">
            Learn More
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-black">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(168,85,247,0.25) 0 2px, transparent 2px 6px)' }} />
            <div className="absolute inset-0 mix-blend-screen" style={{ background: 'radial-gradient(600px 200px at 20% 30%, rgba(57,255,20,0.5), transparent), radial-gradient(400px 200px at 75% 70%, rgba(96,165,250,0.5), transparent)'}} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-28 w-28 rounded-full border border-[#39ff14]/40 shadow-[0_0_45px_rgba(57,255,20,0.45)]" />
              <div className="absolute h-40 w-40 rounded-2xl border border-[#60a5fa]/40 rotate-12" />
              <div className="absolute h-52 w-52 rounded-full border border-[#a855f7]/40 -rotate-6" />
            </div>
          </div>
          <div className="pointer-events-none absolute -inset-10 -z-10 opacity-40 blur-3xl mix-blend-screen bg-[radial-gradient(circle_at_30%_20%,#a855f7_0%,transparent_40%),radial-gradient(circle_at_80%_80%,#39ff14_0%,transparent_40%)]" />
        </motion.div>
      </div>
    </section>
  )
}
