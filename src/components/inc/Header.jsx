import React, { useState } from 'react'
import { Link } from "react-router";
import logoImg from '../../assets/logo.png'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        
        <div className="flex items-center">
          <img src={logoImg} alt="Bigspring Logo" className="h-8 w-auto object-contain" />
        </div>

        <nav className="hidden md:flex items-center gap-8 text-slate-600 font-medium">
          <Link to={'/'} className="text-teal-600 border-teal-500">Home</Link>
          <Link to={'/blog'} className="hover:text-teal-600 transition">Blog</Link>
          <Link to={'/pricing'} className="hover:text-teal-600 transition">Pricing</Link>
          <Link to={'/contact'} className="hover:text-teal-600 transition">Contact</Link>
          <Link to={'/faq'} className="hover:text-teal-600 transition">FAQ</Link>
        </nav>

        <div className="hidden md:block">
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium px-6 py-2.5 rounded-full transition shadow-sm">
            Get Started
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-slate-800 focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={`absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-lg transition-all duration-300 ease-in-out md:hidden ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
        <nav className="flex flex-col items-center p-6 gap-4 text-slate-600 font-medium text-center">
          <Link to={'/'} onClick={() => setIsOpen(false)} className="text-teal-600 py-2 border-b border-slate-50 font-bold w-full">Home</Link>
          <Link to={'/blog'} onClick={() => setIsOpen(false)} className="hover:text-slate-900 py-2 border-b border-slate-50 w-full">Blog</Link>
          <Link to={'/pricing'} onClick={() => setIsOpen(false)} className="hover:text-slate-900 py-2 border-b border-slate-50 w-full">Pricing</Link>
          <Link to={'/contact'} onClick={() => setIsOpen(false)} className="hover:text-slate-900 py-2 border-b border-slate-50 w-full">Contact</Link>
          <Link to={'/faq'} onClick={() => setIsOpen(false)} className="hover:text-slate-900 py-2 w-full">FAQ</Link>
          
          <button onClick={() => setIsOpen(false)} className="mt-2 bg-teal-500 hover:bg-teal-600 text-white font-medium px-8 py-2.5 rounded-full transition shadow-sm">
            Get Started
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header