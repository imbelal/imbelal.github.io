import React from 'react'

const skills = [
  '.NET', '.NET Core', 'C#', 'Python', 'TypeScript', 'React',
  'Angular', 'Azure Cloud', 'SQL / MSSQL', 'REST APIs', 'Linux', 'Docker', 'Git',
]

const education = [
  { period: '2021 – Present', degree: 'MSc in High Integrity Systems', institution: 'Frankfurt University of Applied Sciences, Frankfurt, Germany' },
  { period: '2015 – 2018',    degree: 'BSc in Computer Science and Engineering', institution: 'American International University-Bangladesh, Dhaka, Bangladesh' },
  { period: '2012 – 2014',    degree: 'HSC in Science', institution: 'Ghatain Cantonment Public School and College, Tangail, Bangladesh' },
  { period: '2002 – 2012',    degree: 'SSC in Science', institution: 'Karimun Nesa Siddique High School, Tangail, Bangladesh' },
]

export default function About() {
  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="mb-14">
        <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">Professional Profile</p>
        <h2 className="text-4xl md:text-5xl font-black text-white">About Me</h2>
        <div className="mt-3 w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
      </div>

      {/* Bio + Photo */}
      <div className="grid md:grid-cols-5 gap-12 mb-16 items-center">
        <div className="md:col-span-3 space-y-5 text-slate-300 text-lg leading-relaxed">
          <p>
            I'm <span className="text-white font-semibold">Md Belal Hosen</span>, an Expert Software Engineer dedicated to solving complex business problems through innovative systems architecture and strategic system design. With 8+ years of experience, I specialize in transforming organizational challenges into scalable, high-performance solutions.
          </p>
          <p>
            My approach combines deep technical expertise with business acumen. I excel at understanding organizational pain points and delivering solutions that directly impact bottom-line results—whether optimizing workflow efficiency, eliminating system bottlenecks, or enabling new business capabilities. I've led modernization initiatives, mentored high-performing teams, and earned recognition as a technical strategist and problem-solver.
          </p>
          <p>
            Currently at VP Verbund Pflegehilfe GmbH, I'm driving the transformation of legacy systems into intelligent, cloud-native architectures. I'm known for combining pragmatic engineering with business insights to deliver solutions that exceed stakeholder expectations and position organizations for future growth.
          </p>
        </div>
        <div className="md:col-span-2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 blur-md" />
            <img
              src="/assets/ProfilePic.jpg"
              alt="Md Belal Hosen"
              className="relative w-64 h-72 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-white mb-6">Technical Expertise</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-xl text-sm font-medium text-indigo-300 glass border-indigo-500/20 hover:border-indigo-500/60 hover:text-white transition-all duration-200 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Education timeline */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-8">Education</h3>
        <div className="relative border-l-2 border-indigo-500/20 space-y-8 pl-6">
          {education.map((edu) => (
            <div key={edu.degree} className="relative">
              <div className="timeline-dot" />
              <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-1">{edu.period}</p>
              <h4 className="text-white font-semibold text-base mb-0.5">{edu.degree}</h4>
              <p className="text-slate-400 text-sm">{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
