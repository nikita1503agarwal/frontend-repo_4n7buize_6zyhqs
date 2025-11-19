import React from 'react'
import { motion } from 'framer-motion'

const ITEMS = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  video: `https://files.catbox.moe/9z9x9${i}.mp4`, // placeholder, replace with real reel
}))

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-black px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl">Recent Work</h2>
        <p className="mt-3 text-center text-white/70">Hover to preview — neon edges, glass, distortion.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-white/0" />
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(57,255,20,0.6), transparent 40%), radial-gradient(circle at 80% 70%, rgba(96,165,250,0.6), transparent 45%)' }} />
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]" style={{ backgroundImage: `url(https://picsum.photos/seed/emd-${idx}/800/450)`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20 shadow-[0_0_35px_rgba(98,241,255,0.25)] group-hover:shadow-[0_0_55px_rgba(98,241,255,0.45)]" />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <h3 className="text-white">{item.title}</h3>
                  <p className="text-xs text-white/60">Motion • 3D • Brand</p>
                </div>
                <a href="#contact" className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10">View</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
