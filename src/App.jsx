import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Features from './Features'
import MarketingSection from './MarketingSection'
import CompanySection from './CompanySection'
import Workflow from './Workflow'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      <Header />
      <main>
        <Hero />
        <Features />
        <MarketingSection />
        <CompanySection />
        <Workflow />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App