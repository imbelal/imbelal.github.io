import React from 'react'

const jobs = [
  {
    period: 'Nov 2024 – Present',
    title: 'Expert Software Engineer',
    company: 'VP Verbund Pflegehilfe GmbH',
    location: 'Mainz, Germany',
    current: true,
    description: [
      'Spearheading modernization of legacy system architecture to enable enterprise scalability—transforming monolithic application into microservices enabling 60% faster deployments',
      'Architected intelligent power dialer system reducing manual outbound calling overhead while improving contact rates through advanced call handling and automated follow-ups',
      'Designed resilient, secure system architecture ensuring 99.9% uptime across distributed services while maintaining strict security and compliance requirements',
      'Led team technical strategy, establishing best practices and mentoring engineers to raise engineering excellence across organization',
    ],
  },
  {
    period: 'Apr 2022 – Nov 2024',
    title: 'Senior Software Engineer',
    company: 'VP Verbund Pflegehilfe GmbH',
    location: 'Mainz, Germany',
    current: false,
    description: [
      'Solved critical overbooking problems by building predictive intelligence system enabling accurate capacity forecasting and optimized resource allocation',
      'Enhanced system reliability and data integrity through sophisticated concurrency control mechanisms, reducing data conflicts and operational bottlenecks',
      'Delivered data-driven solutions that transformed operational decision-making, providing stakeholders with actionable insights from historical data patterns',
      'Established architectural foundations using proven design patterns (CQRS, DDD, Clean Architecture) enabling team to scale development velocity',
    ],
  },
  {
    period: 'Jan 2021 – Dec 2021',
    title: 'Software Engineer',
    company: 'Brain Station 23 Ltd.',
    location: 'Dhaka, Bangladesh',
    current: false,
    description: [
      'Solved document chaos for insurance operations by building comprehensive document management platform enabling efficient storage, retrieval, and compliance',
      'Accelerated business intelligence through sophisticated report generation system enabling executives to make data-driven decisions in real-time',
      'Delivered intuitive user experience through modern frontend architecture, improving adoption and reducing support costs',
      'Established scalable N-tier architecture enabling seamless growth and feature expansion',
    ],
  },
  {
    period: 'Sep 2019 – Jan 2021',
    title: 'Software Engineer',
    company: 'The Bitopi Group',
    location: 'Dhaka, Bangladesh',
    current: false,
    description: [
      'Optimized garment factory operations through intelligent production planning system eliminating inefficiencies and reducing lead times',
      'Directly improved worker productivity and satisfaction via automated incentive system providing transparent, real-time compensation tracking',
      'Enabled financial optimization through washing budget and cost analysis platform enabling data-driven cost management decisions',
      'Built robust, maintainable systems using proven architectural patterns ensuring platform reliability and team scalability',
    ],
  },
  {
    period: 'Sep 2018 – Aug 2019',
    title: 'Software Engineer',
    company: 'Center for Development of IT Professionals, UIU',
    location: 'Dhaka, Bangladesh',
    current: false,
    description: [
      'Modernized legacy ERP system by enhancing order and sales management modules, streamlining business processes and reducing operational friction',
      'Enabled advanced supply chain analytics through sophisticated Bill of Materials (BOM) analysis module providing production insights',
      'Designed efficient database architecture and optimized queries improving system performance and user productivity',
      'Built responsive frontend components improving user adoption and reducing training requirements',
    ],
  },
]

export default function Work() {
  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="mb-14">
        <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">Career progression</p>
        <h2 className="text-4xl md:text-5xl font-black text-white">Work Experience</h2>
        <div className="mt-3 w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
      </div>

      {/* Intro */}
      <div className="grid md:grid-cols-5 gap-12 mb-16 items-center">
        <div className="md:col-span-3">
          <p className="text-slate-300 text-lg leading-relaxed mb-4">
            Over <span className="text-indigo-400 font-medium">8 years</span> of experience translating complex business challenges into elegant technical solutions. I thrive at the intersection of strategy and engineering, delivering systems that not only solve today's problems but scale for tomorrow's growth.
          </p>
          <p className="text-slate-300 text-lg leading-relaxed">
            My track record spans industries and geographies—from manufacturing optimization to healthcare innovation. I'm driven by measurable impact: reducing system complexity, accelerating time-to-market, enabling data-driven decision-making, and building teams that consistently exceed expectations. I combine architectural sophistication with practical business sense to deliver solutions that matter.
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
              <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
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
              
              {/* Job Description - Achievements */}
              <ul className="space-y-2 text-slate-400 text-sm">
                {job.description.map((achievement, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-indigo-400 font-bold mt-0.5">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
