import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Worlds from './components/Worlds'
import Portfolio from './components/Portfolio'
import Shop from './components/Shop'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Global subtle spacey background */}
      <div className="pointer-events-none fixed inset-0 -z-0 opacity-60 mix-blend-screen bg-[radial-gradient(1200px_600px_at_10%_20%,rgba(57,255,20,0.06),transparent),radial-gradient(900px_400px_at_90%_80%,rgba(96,165,250,0.06),transparent)]" />

      <Hero />
      <About />
      <Worlds />
      <Portfolio />
      <Shop />
      <Footer />
    </div>
  )
}

export default App
