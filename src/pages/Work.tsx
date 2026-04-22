import React from 'react'

const jobs = [
  {
    period: 'April 2022 – Present',
    title: 'Senior Software Engineer',
    company: 'VP Verbund Pflegehilfe GmbH',
    location: 'Mainz, Germany',
    current: true,
  },
  {
    period: 'Jan 2021 – Dec 2021',
    title: 'Software Engineer',
    company: 'Brain Station 23 Ltd.',
    location: 'Dhaka, Bangladesh',
    current: false,
  },
  {
    period: 'Sep 2019 – Dec 2020',
    title: 'Software Engineer',
    company: 'Bitopi Group',
    location: 'Dhaka, Bangladesh',
    current: false,
  },
  {
    period: 'Sep 2018 – Jun 2019',
    title: 'Jr. Software Engineer',
    company: 'Center for Development of IT Professionals, UIU',
    location: 'Dhaka, Bangladesh',
    current: false,
  },
]

export default function Work() {
  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="mb-14">
        <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">My journey</p>
        <h2 className="text-4xl md:text-5xl font-black text-white">Work Experience</h2>
        <div className="mt-3 w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
      </div>

      {/* Intro */}
      <div className="grid md:grid-cols-5 gap-12 mb-16 items-center">
        <div className="md:col-span-3">
          <p className="text-slate-300 text-lg leading-relaxed">
            After completing my graduation in 2018, I started my professional career. Since then I am working as a
            full-stack software developer using latest technologies like{' '}
            <span className="text-indigo-400 font-medium">.NET</span>,{' '}
            <span className="text-indigo-400 font-medium">.NET Core</span>,{' '}
            <span className="text-indigo-400 font-medium">MSSQL</span>,{' '}
            <span className="text-indigo-400 font-medium">Angular</span>, and{' '}
            <span className="text-indigo-400 font-medium">VueJS</span>.
          </p>
        </div>
        <div className="md:col-span-2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 blur-md" />
            <img
              src="/assets/working_photo.jpg"
              alt="Working"
              className="relative w-60 h-56 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-indigo-500/20 space-y-10 pl-6">
        {jobs.map((job) => (
          <div key={job.title + job.company} className="relative">
            <div className="timeline-dot" />
            <div className="glass rounded-2xl p-6 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 transform group">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-white font-bold text-lg group-hover:gradient-text transition-all duration-200">
                    {job.title}
                  </h3>
                  <p className="text-indigo-400 font-medium">{job.company}</p>
                  <p className="text-slate-500 text-sm">{job.location}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs font-semibold text-slate-400 bg-slate-800/60 px-3 py-1 rounded-full">
                    {job.period}
                  </span>
                  {job.current && (
                    <span className="text-xs font-semibold text-green-400 bg-green-400/10 border border-green-400/20 px-3 py-1 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                      Current
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
