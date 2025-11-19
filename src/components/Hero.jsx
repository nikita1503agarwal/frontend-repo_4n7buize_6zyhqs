import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const glowText = 'from-[#39ff14] via-[#62f1ff] to-[#a855f7]'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays for neon vibe (don't block Spline interactions) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-40 opacity-60 blur-3xl mix-blend-screen bg-[radial-gradient(circle_at_20%_30%,#39ff14_0%,transparent_40%),radial-gradient(circle_at_80%_70%,#60a5fa_0%,transparent_45%),radial-gradient(circle_at_50%_50%,#a855f7_0%,transparent_35%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#39ff14] shadow-[0_0_20px_#39ff14]" />
          <span className="text-xs font-medium tracking-widest text-white/80">EMD STUDIO • FUTURISTIC MOTION DESIGN</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9 }}
          className="text-balance bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-5xl font-extrabold leading-tight text-transparent drop-shadow-[0_0_25px_rgba(255,255,255,0.15)] sm:text-6xl md:text-7xl"
          style={{ textShadow: '0 0 30px rgba(98,241,255,0.35), 0 0 60px rgba(168,85,247,0.25)' }}
        >
          EMD Studio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="mt-4 max-w-3xl text-lg text-white/80 md:text-xl"
        >
          Bold Video • 3D Animation • Motion Design • Creative Experiences
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#portfolio"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-white shadow-[0_0_25px_rgba(98,241,255,0.15)] transition hover:shadow-[0_0_35px_rgba(98,241,255,0.35)]"
          >
            <span className="absolute inset-0 -translate-y-full bg-gradient-to-r from-[#39ff14]/40 via-[#62f1ff]/40 to-[#a855f7]/40 transition-transform duration-500 group-hover:translate-y-0" />
            <span className="relative">View Reel</span>
          </a>
          <a
            href="#worlds"
            className="relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#39ff14]/90 via-[#62f1ff]/90 to-[#a855f7]/90 px-6 py-3 font-semibold text-black shadow-[0_10px_30px_rgba(56,189,248,0.35)] transition hover:scale-[1.02]"
          >
            Explore Worlds
          </a>
        </motion.div>
      </div>

      {/* Glitch scanline overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-soft-light" style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.6), rgba(255,255,255,0.6) 1px, transparent 2px, transparent 4px)' }} />
    </section>
  )
}
