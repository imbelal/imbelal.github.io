import React, { useCallback, useState, useEffect } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import type { Engine } from 'tsparticles-engine'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faEnvelope, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faXingSquare, faGithub } from '@fortawesome/free-brands-svg-icons'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import { particlesConfig } from './particlesConfig'

const EMAIL = 'mdbelal.aiub@gmail.com'
const MOBILE = '+4915734402228'

export default function App() {
  const [dark, setDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = stored === 'dark' || (!stored && prefersDark)
    setDark(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
      isActive
        ? 'text-white bg-indigo-500/20 border border-indigo-500/40'
        : 'text-slate-400 hover:text-white hover:bg-white/5'
    }`

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Particles background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="fixed inset-0 -z-10"
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between glass rounded-2xl px-6 py-3">
          {/* Logo */}
          <NavLink to="/" className="text-white font-bold text-lg tracking-tight">
            <span className="gradient-text">BH</span>
            <span className="text-slate-300 ml-1 text-sm font-normal">/ dev</span>
          </NavLink>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink to="/" end className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/work" className={navLinkClass}>Work</NavLink>
            <a
              href="/assets/Md Belal Hosen_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="ml-2 px-4 py-2 text-sm font-semibold rounded-lg border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all duration-200"
            >
              Resume ↗
            </a>
          </div>

          {/* Theme toggle + mobile menu button */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
              aria-label="Toggle theme"
            >
              <FontAwesomeIcon icon={dark ? faSun : faMoon} />
            </button>
            <button
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <div className="w-5 h-0.5 bg-current mb-1" />
              <div className="w-5 h-0.5 bg-current mb-1" />
              <div className="w-5 h-0.5 bg-current" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 glass rounded-2xl px-6 py-4 flex flex-col gap-2">
            <NavLink to="/" end className={navLinkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={() => setMenuOpen(false)}>About</NavLink>
            <NavLink to="/work" className={navLinkClass} onClick={() => setMenuOpen(false)}>Work</NavLink>
            <a
              href="/assets/Md Belal Hosen_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-sm font-semibold rounded-lg border border-indigo-500 text-indigo-400 text-center"
              onClick={() => setMenuOpen(false)}
            >
              Resume ↗
            </a>
          </div>
        )}
      </nav>

      {/* Left social panel (desktop) */}
      <div className="fixed left-5 bottom-0 z-40 hidden lg:flex flex-col items-center gap-4 pb-0">
        <a href="https://www.linkedin.com/in/md-belal-hosen/" target="_blank" rel="noreferrer"
           className="text-slate-500 hover:text-indigo-400 transition-colors duration-200 hover:-translate-y-1 transform">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a href="https://www.xing.com/profile/MdBelal_Hosen/cv" target="_blank" rel="noreferrer"
           className="text-slate-500 hover:text-cyan-400 transition-colors duration-200 hover:-translate-y-1 transform">
          <FontAwesomeIcon icon={faXingSquare} size="lg" />
        </a>
        <a href="https://github.com/imbelal" target="_blank" rel="noreferrer"
           className="text-slate-500 hover:text-white transition-colors duration-200 hover:-translate-y-1 transform">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a href={`mailto:${EMAIL}`}
           className="text-slate-500 hover:text-indigo-400 transition-colors duration-200 hover:-translate-y-1 transform">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </a>
        <a href={`tel:${MOBILE}`}
           className="text-slate-500 hover:text-cyan-400 transition-colors duration-200 hover:-translate-y-1 transform">
          <FontAwesomeIcon icon={faPhoneSquare} size="lg" />
        </a>
        <div className="w-px h-20 bg-gradient-to-b from-indigo-500/50 to-transparent mt-2" />
      </div>

      {/* Right email panel (desktop) */}
      <div className="fixed right-5 bottom-0 z-40 hidden lg:flex flex-col items-center gap-4">
        <a
          href={`mailto:${EMAIL}`}
          className="text-slate-500 hover:text-indigo-400 transition-colors duration-200 text-xs tracking-widest font-medium"
          style={{ writingMode: 'vertical-rl' }}
        >
          {EMAIL}
        </a>
        <div className="w-px h-20 bg-gradient-to-b from-indigo-500/50 to-transparent" />
      </div>

      {/* Page content */}
      <main className="relative z-10 pt-24 pb-20 px-4 lg:px-16 xl:px-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </main>
    </div>
  )
}
