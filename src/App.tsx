import React, { useCallback, useState, useEffect, useRef } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import type { Engine } from 'tsparticles-engine'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faEnvelope, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faXingSquare, faGithub } from '@fortawesome/free-brands-svg-icons'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import GlobalCLI from './components/GlobalCLI'
import { particlesConfig } from './particlesConfig'

const EMAIL = 'mdbelal.aiub@gmail.com'
const MOBILE = '+4915734402228'

interface CommandOutput {
  command: string
  response: string | string[]
  timestamp: number
}

export default function App() {
  const [dark, setDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrollTop, setScrollTop] = useState(0)
  
  // Shared CLI state
  const [cliHistory, setCliHistory] = useState<string[]>([])
  const [cliOutput, setCliOutput] = useState<CommandOutput[]>([
    {
      command: '',
      response: ['$ Welcome to my portfolio CLI', '$ Type "help" to see available commands'],
      timestamp: Date.now(),
    },
  ])
  const [cliHistoryIndex, setCliHistoryIndex] = useState(-1)
  
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const workRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = stored === 'dark' || (!stored && prefersDark)
    setDark(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return
      
      const container = scrollContainerRef.current
      const containerHeight = container.clientHeight
      const currentScrollTop = container.scrollTop
      setScrollTop(currentScrollTop)
      
      // Determine which section is in view
      if (currentScrollTop < containerHeight / 2) {
        setActiveSection('home')
      } else if (currentScrollTop < containerHeight * 1.5) {
        setActiveSection('about')
      } else {
        setActiveSection('work')
      }
    }
    
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
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

  const getParticlesConfig = () => {
    const baseConfig = { ...particlesConfig }
    if (!dark) {
      return {
        ...baseConfig,
        particles: {
          ...baseConfig.particles,
          color: { value: ['#4f46e5', '#0891b2', '#6366f1'] },
          links: baseConfig.particles?.links ? {
            ...baseConfig.particles.links,
            color: '#4f46e5',
          } : { color: '#4f46e5' },
        },
      }
    }
    return baseConfig
  }

  const navLinkClass = (sectionName: string) =>
    `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
      activeSection === sectionName
        ? 'text-white bg-indigo-500/20 border border-indigo-500/40'
        : 'text-slate-400 hover:text-white hover:bg-white/5'
    }`
  
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current && scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const offset = ref.current.offsetTop
      container.scrollTo({ top: offset, behavior: 'smooth' })
    }
  }

  const handleCLINavigate = (section: string) => {
    const sectionMap: { [key: string]: React.RefObject<HTMLDivElement> } = {
      about: aboutRef,
      work: workRef,
      home: homeRef,
    }
    const ref = sectionMap[section]
    if (ref) scrollToSection(ref)
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Particles background */}
      <Particles
        key={dark ? 'dark' : 'light'}
        id="tsparticles"
        init={particlesInit}
        options={getParticlesConfig()}
        className="fixed inset-0 -z-10"
      />

      {/* Minimal top bar - Theme toggle only */}
      <div className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-end">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
            aria-label="Toggle theme"
          >
            <FontAwesomeIcon icon={dark ? faSun : faMoon} />
          </button>
        </div>
      </div>

      {/* Global CLI - Only on non-home pages */}
      {activeSection !== 'home' && (
        <GlobalCLI 
          dark={dark} 
          onThemeChange={setDark} 
          onNavigate={handleCLINavigate} 
          isAtHome={false}
          history={cliHistory}
          setHistory={setCliHistory}
          output={cliOutput}
          setOutput={setCliOutput}
          historyIndex={cliHistoryIndex}
          setHistoryIndex={setCliHistoryIndex}
        />
      )}

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

      {/* Page content - Scrollable container */}
      <main 
        ref={scrollContainerRef}
        className="relative z-10 h-screen overflow-y-scroll scroll-smooth"
        style={{ scrollSnapType: 'y mandatory' }}
      >
        {/* Home Section */}
        <div 
          ref={homeRef}
          data-section="home"
          className="min-h-screen w-full pt-24 pb-20 px-4 lg:px-16 xl:px-24 flex items-center justify-center"
          style={{ scrollSnapAlign: 'start' }}
        >
          <Home 
            dark={dark} 
            onThemeChange={setDark}
            cliHistory={cliHistory}
            setCliHistory={setCliHistory}
            cliOutput={cliOutput}
            setCliOutput={setCliOutput}
            cliHistoryIndex={cliHistoryIndex}
            setCliHistoryIndex={setCliHistoryIndex}
          />
        </div>

        {/* About Section */}
        <div 
          ref={aboutRef}
          data-section="about"
          className="min-h-screen w-full pt-24 pb-20 px-4 lg:px-16 xl:px-24 flex items-center justify-center"
          style={{ scrollSnapAlign: 'start' }}
        >
          <About />
        </div>

        {/* Work Section */}
        <div 
          ref={workRef}
          data-section="work"
          className="min-h-screen w-full pt-24 pb-20 px-4 lg:px-16 xl:px-24 flex items-center justify-center"
          style={{ scrollSnapAlign: 'start' }}
        >
          <Work />
        </div>
      </main>
    </div>
  )
}
