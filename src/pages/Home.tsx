import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import HomeCLI from '../components/HomeCLI'

interface CommandOutput {
  command: string
  response: string | string[]
  timestamp: number
}

interface HomeProps {
  dark: boolean
  onThemeChange: (isDark: boolean) => void
  cliHistory: string[]
  setCliHistory: (history: string[]) => void
  cliOutput: CommandOutput[]
  setCliOutput: (output: CommandOutput[]) => void
  cliHistoryIndex: number
  setCliHistoryIndex: (index: number) => void
}

export default function Home({ 
  dark, 
  onThemeChange,
  cliHistory,
  setCliHistory,
  cliOutput,
  setCliOutput,
  cliHistoryIndex,
  setCliHistoryIndex,
}: HomeProps) {
  const typedRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!typedRef.current) return
    const typed = new Typed(typedRef.current, {
      strings: [
        'I solve complex business challenges by architecting scalable, enterprise-grade systems that drive measurable impact.',
        'I transform legacy systems into modern solutions, optimizing performance and enabling business growth since 2018.',
      ],
      typeSpeed: 30,
      backSpeed: 10,
      showCursor: false,
      smartBackspace: true,
      loop: true,
      startDelay: 100,
    })
    
    // Add custom cursor styling
    if (typedRef.current) {
      typedRef.current.style.position = 'relative'
      typedRef.current.classList.add('custom-typed-cursor')
    }
    
    return () => typed.destroy()
  }, [])

  const handleNavigate = (section: string) => {
    const main = document.querySelector('main[style*="scroll"]') as HTMLElement
    if (!main) return

    const target = main.querySelector(`[data-section="${section}"]`) as HTMLElement
    if (!target) return

    const offset = target.offsetTop
    main.scrollTo({ top: offset, behavior: 'smooth' })
  }

  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-center max-w-4xl mx-auto animate-fade-in">
      {/* Profile photo */}
      <div className="relative mb-7" style={{ marginBottom: '24px' }}>
        <div className="absolute inset-0 rounded-full animate-glow" />
        <img
          src="/assets/ProfilePic.jpg"
          alt="Md Belal Hosen"
          className="relative w-28 sm:w-32 md:w-36 h-28 sm:h-32 md:h-36 rounded-full object-cover ring-2 ring-indigo-500/40 animate-float shadow-2xl shadow-indigo-500/20"
        />
        {/* Status dot */}
        <span className="absolute bottom-2 right-2 w-3 sm:w-4 h-3 sm:h-4 bg-green-400 rounded-full border-2 border-gray-900 shadow-lg shadow-green-400/50" />
      </div>

      {/* Greeting */}
      <p className="text-slate-400 text-xs md:text-sm font-medium tracking-widest uppercase" style={{ marginBottom: '7px' }}>
        👋 Hello, World!
      </p>

      {/* Name */}
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-black leading-tight" style={{ marginBottom: '11px' }}>
        I'm{' '}
        <span className="gradient-text">Belal</span>
      </h1>

      {/* Typed subtitle */}
      <div className="text-slate-300 text-sm sm:text-base md:text-lg md:text-xl max-w-2xl min-h-[60px] sm:min-h-[80px] text-center" style={{ marginBottom: '-5px' }}>
        <span ref={typedRef} className="block w-full" />
      </div>

      {/* Home CLI - Inline positioning */}
      <div className="w-full flex justify-center" style={{ marginTop: '-5px' }}>
        <HomeCLI 
          onNavigate={handleNavigate} 
          dark={dark} 
          onThemeChange={onThemeChange}
          history={cliHistory}
          setHistory={setCliHistory}
          output={cliOutput}
          setOutput={setCliOutput}
          historyIndex={cliHistoryIndex}
          setHistoryIndex={setCliHistoryIndex}
        />
      </div>

      {/* Scroll hint */}
      <div className="mt-12 flex flex-col items-center gap-2 text-slate-600">
        <span className="text-xs tracking-widest uppercase">or scroll down</span>
        <div className="w-px h-10 bg-gradient-to-b from-slate-600 to-transparent animate-pulse" />
      </div>
    </div>
  )
}
