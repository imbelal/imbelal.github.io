import React, { useState, useRef, useEffect } from 'react'

interface CommandOutput {
  command: string
  response: string | string[]
  timestamp: number
}

interface GlobalCLIProps {
  dark: boolean
  onThemeChange: (isDark: boolean) => void
  onNavigate: (section: string) => void
  isAtHome: boolean
}

export default function GlobalCLI({ dark, onThemeChange, onNavigate, isAtHome }: GlobalCLIProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [output, setOutput] = useState<CommandOutput[]>([
    {
      command: '',
      response: ['$ Welcome to my portfolio CLI', '$ Type "help" to see available commands'],
      timestamp: Date.now(),
    },
  ])
  const inputRef = useRef<HTMLInputElement>(null)
  const outputRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight
    }
  }, [output])

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isExpanded])

  const commandMap: { [key: string]: () => string | string[] | null } = {
    help: () => [
      '$ Available Commands:',
      '  home           - Go back to home section',
      '  about          - View my professional background',
      '  work           - Explore my work experience',
      '  skills         - List technical expertise',
      '  contact        - Get in touch information',
      '  projects       - View key projects',
      '  clear          - Clear terminal',
      '  theme          - Show theme commands',
      '  light          - Switch to light mode',
      '  dark           - Switch to dark mode',
      '  whoami         - Show current user',
      '  ls             - List sections',
      '  exit           - Close CLI',
      '  help           - Show this help message',
    ],
    home: () => {
      onNavigate('home')
      return '$ Navigating to home...'
    },
    about: () => {
      onNavigate('about')
      return '$ Navigating to about section...'
    },
    work: () => {
      onNavigate('work')
      return '$ Navigating to work section...'
    },
    skills: () => [
      '$ Technical Skills:',
      '  Backend: .NET, .NET Core, C#, Python, Node.js',
      '  Frontend: React, Angular, TypeScript, Vue.js',
      '  Cloud: Azure Cloud, Docker, Linux',
      '  Database: SQL, MSSQL, EF Core',
      '  Tools: REST APIs, Git, CI/CD',
    ],
    contact: () => [
      '$ Contact Information:',
      '  📧 Email: mdbelal.aiub@gmail.com',
      '  📱 Phone: +4915734402228',
      '  🔗 LinkedIn: linkedin.com/in/md-belal-hosen',
      '  🐙 GitHub: github.com/imbelal',
      '  🔗 XING: xing.com/profile/MdBelal_Hosen',
    ],
    projects: () => [
      '$ Featured Projects:',
      '  1. Monolith → Microservices Transformation',
      '     - Designed cloud-native architecture on Azure',
      '     - 60% faster deployments achieved',
      '',
      '  2. Intelligent Power Dialer System',
      '     - Integrated Twilio for automated calling',
      '     - Advanced call handling & voicemail automation',
      '',
      '  3. Predictive Booking Intelligence System',
      '     - Reduced overbooking issues by 95%',
      '     - Real-time capacity forecasting',
    ],
    clear: () => {
      setOutput([
        {
          command: '',
          response: [],
          timestamp: Date.now(),
        },
      ])
      return null as any
    },
    whoami: () => 'Md Belal Hosen - Expert Software Engineer',
    ls: () => [
      '$ Directory Contents:',
      '  📁 /about',
      '  📁 /work',
      '  📁 /skills',
      '  📁 /contact',
    ],
    light: () => {
      if (dark) {
        onThemeChange(false)
        return '$ Switched to light mode ☀️'
      }
      return '$ Already in light mode'
    },
    dark: () => {
      if (!dark) {
        onThemeChange(true)
        return '$ Switched to dark mode 🌙'
      }
      return '$ Already in dark mode'
    },
    theme: () => [
      '$ Theme Commands:',
      `  Current: ${dark ? 'dark mode 🌙' : 'light mode ☀️'}`,
      '  light   - Switch to light mode',
      '  dark    - Switch to dark mode',
    ],
    exit: () => {
      setIsExpanded(false)
      return null as any
    },
  }

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()

    if (!trimmedCmd) return

    setHistory([...history, trimmedCmd])
    setHistoryIndex(-1)

    const response = commandMap[trimmedCmd]
      ? commandMap[trimmedCmd]()
      : `$ Command not found: "${trimmedCmd}". Type "help" for available commands.`

    if (response === null) {
      setInput('')
      return
    }

    setOutput([
      ...output,
      {
        command: trimmedCmd,
        response,
        timestamp: Date.now(),
      },
    ])

    setInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const newIndex = Math.min(historyIndex + 1, history.length - 1)
      if (newIndex >= 0) {
        setHistoryIndex(newIndex)
        setInput(history[history.length - 1 - newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(history[history.length - 1 - newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput('')
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault()
      handleCommand('clear')
    } else if (e.key === 'Escape') {
      setIsExpanded(false)
    }
  }

  return (
    <div className="fixed top-20 right-6 z-40 w-full max-w-md">
      {!isExpanded ? (
        <button
          onClick={() => setIsExpanded(true)}
          className="w-full glass rounded-2xl p-4 border border-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300 flex items-center justify-between group"
        >
          <div className="flex items-center gap-3">
            <span className="text-xl">⚡</span>
            <div className="text-left">
              <div className="text-slate-300 text-sm font-mono">belal@portfolio:~$ </div>
              <div className="text-slate-500 text-xs">Click to open CLI</div>
            </div>
          </div>
          <span className="text-indigo-400 group-hover:scale-110 transition-transform">▼</span>
        </button>
      ) : (
        <div className="glass rounded-2xl p-6 border border-indigo-500/20 hover:border-indigo-500/40 transition-colors duration-300 font-mono">
          {/* Terminal Header */}
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-700/50">
            <div className="flex items-center gap-2">
              <span className="text-indigo-400 font-bold">⚡ belal@portfolio:~$</span>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-slate-500 hover:text-slate-300 transition-colors text-lg"
            >
              ✕
            </button>
          </div>

          {/* Terminal Output */}
          <div
            ref={outputRef}
            className="h-64 overflow-y-auto mb-4 space-y-2 text-sm bg-slate-900/30 rounded-lg p-4 border border-slate-700/50"
          >
            {output.map((item, idx) => (
              <div key={idx} className="space-y-1">
                {item.command && (
                  <div className="text-indigo-400">
                    <span className="text-slate-500">$</span> {item.command}
                  </div>
                )}
                {Array.isArray(item.response) ? (
                  item.response.map((line, lineIdx) => (
                    <div key={lineIdx} className="text-slate-300">
                      {line}
                    </div>
                  ))
                ) : (
                  <div className="text-slate-300">{item.response}</div>
                )}
              </div>
            ))}
          </div>

          {/* Terminal Input */}
          <div className="flex items-center gap-2 bg-slate-900/50 rounded-lg px-4 py-2 border border-slate-700/50">
            <span className="text-slate-500">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a command..."
              className="flex-1 bg-transparent outline-none text-slate-300 placeholder-slate-600 caret-indigo-400"
            />
            <span className="text-indigo-400 animate-pulse">█</span>
          </div>

          <div className="mt-3 text-xs text-slate-500 flex gap-4">
            <span>↑↓ History</span>
            <span>Ctrl+L Clear</span>
            <span>Esc Close</span>
          </div>
        </div>
      )}
    </div>
  )
}
