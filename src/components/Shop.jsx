import React from 'react'
import { motion } from 'framer-motion'

const PRODUCTS = [
  { title: 'Kinetic Type Pack', color: 'from-fuchsia-500 to-purple-600' },
  { title: 'HUD UI Kit', color: 'from-cyan-400 to-blue-600' },
  { title: 'Neon Texture Set', color: 'from-lime-400 to-emerald-600' },
]

export default function Shop() {
  return (
    <section id="shop" className="relative bg-gradient-to-b from-black via-slate-950 to-black px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white md:text-4xl">Digital Shop</h2>
            <p className="mt-2 text-white/70">Futuristic kits for editors and designers</p>
          </div>
          <span className="rounded-full border border-yellow-300/40 bg-yellow-300/10 px-3 py-1 text-xs font-semibold text-yellow-200 backdrop-blur">Coming Soon</span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className={`absolute -inset-24 bg-gradient-to-br ${p.color} opacity-20 blur-3xl`} />
              <h3 className="relative text-lg font-semibold text-white">{p.title}</h3>
              <p className="relative mt-2 text-sm text-white/70">High‑res assets built for speed and style</p>
              <div className="relative mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white">Notify Me</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
