import React from 'react'
import Hero from '../sections/home/Hero'
import Features from '../sections/home/Features'
import MarketingSection from '../sections/home/MarketingSection'
import CompanySection from '../sections/home/CompanySection'
import Workflow from '../sections/home/Workflow'
import Contact from '../sections/home/Contact'


function Home() {
    return (
      <div className="min-h-screen bg-white text-slate-800 antialiased">
          <Hero />
          <Features />
          <MarketingSection />
          <CompanySection />
          <Workflow />
          <Contact /> 
      </div>
    )
  }

export default Home