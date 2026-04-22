import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Typed from 'typed.js'

export default function Home() {
  const typedRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!typedRef.current) return
    const typed = new Typed(typedRef.current, {
      strings: [
        'A passionate full-stack software developer who focuses on writing clean, elegant and efficient code.',
        'Building automated software solutions since 2018 using .NET, .NET Core, SQL, Angular, and VueJS.',
      ],
      typeSpeed: 30,
      backSpeed: 10,
      showCursor: true,
      smartBackspace: true,
      cursorChar: '_',
      loop: true,
    })
    return () => typed.destroy()
  }, [])

  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-center max-w-4xl mx-auto animate-fade-in">
      {/* Profile photo */}
      <div className="relative mb-8">
        <div className="absolute inset-0 rounded-full animate-glow" />
        <img
          src="/assets/ProfilePic.jpg"
          alt="Md Belal Hosen"
          className="relative w-36 h-36 rounded-full object-cover ring-2 ring-indigo-500/40 animate-float shadow-2xl shadow-indigo-500/20"
        />
        {/* Status dot */}
        <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900 shadow-lg shadow-green-400/50" />
      </div>

      {/* Greeting */}
      <p className="text-slate-400 text-sm font-medium tracking-widest uppercase mb-3">
        👋 Hello, World!
      </p>

      {/* Name */}
      <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
        I'm{' '}
        <span className="gradient-text">Belal</span>
      </h1>

      {/* Typed subtitle */}
      <div className="text-slate-300 text-lg md:text-xl max-w-2xl min-h-[80px] flex items-start justify-center">
        <span ref={typedRef} />
      </div>

      {/* CTA buttons */}
      <div className="flex flex-wrap gap-4 mt-10 justify-center">
        <Link
          to="/work"
          className="px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transform"
        >
          View My Work
        </Link>
        <Link
          to="/about"
          className="px-8 py-3 rounded-xl font-semibold text-slate-300 border border-slate-700 hover:border-indigo-500/60 hover:text-white glass transition-all duration-200 hover:-translate-y-0.5 transform"
        >
          About Me
        </Link>
      </div>

      {/* Scroll hint */}
      <div className="mt-16 flex flex-col items-center gap-2 text-slate-600">
        <span className="text-xs tracking-widest uppercase">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-slate-600 to-transparent animate-pulse" />
      </div>
    </div>
  )
}
