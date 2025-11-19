import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-black px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-white">Let’s build something bold</h3>
            <p className="mt-2 text-white/70">Tell us about your video, 3D, or interactive project.</p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white">Instagram</a>
              <a href="#" className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white">Behance</a>
              <a href="#" className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white">Dribbble</a>
            </div>
          </div>
          <form className="grid grid-cols-1 gap-3">
            <input placeholder="Name" className="rounded-xl border border-white/10 bg-white/5 p-3 text-white placeholder-white/40 outline-none" />
            <input placeholder="Email" className="rounded-xl border border-white/10 bg-white/5 p-3 text-white placeholder-white/40 outline-none" />
            <textarea placeholder="Project details" rows={4} className="rounded-xl border border-white/10 bg-white/5 p-3 text-white placeholder-white/40 outline-none" />
            <button className="rounded-xl bg-gradient-to-r from-[#39ff14] via-[#62f1ff] to-[#a855f7] px-4 py-3 font-semibold text-black">Send</button>
          </form>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-white/50">
          <span>© {new Date().getFullYear()} EMD Studio</span>
          <span>Design by Flames</span>
        </div>
      </div>
    </footer>
  )
}
