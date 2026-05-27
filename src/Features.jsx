import React from 'react'

function Features() {
  const featuresData = [
    {
      id: 1,
      title: 'Clean Code',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil',
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Object Oriented',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil',
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 3,
      title: '24h Service',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil',
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Value for Money',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil',
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L12 8.343l3.172-3.172a4 4 0 115.656 5.656L12 20.828l-8.485-8.486a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Faster Response',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil',
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Cloud Support',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil',
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5.5 16a3.5 3.5 0 01-.362-6.98 4.5 4.5 0 018.724-1.339A3 3 0 0119.5 13a3 3 0 01-2.28 2.904A4.498 4.498 0 0013.5 12c-1.348 0-2.56.59-3.39 1.537a4.5 4.5 0 00-4.61 2.463z" />
          <path d="M13.5 14a2.5 2.5 0 100 5h4a2 2 0 100-4h-4z" />
        </svg>
      )
    }
  ]

  return (
    <section className="bg-[#eff7f7] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-16">
          Something You Need To Know
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-5 p-3 bg-teal-50 rounded-xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-62.5">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features