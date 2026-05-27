import React, { useState, useEffect } from 'react'

import companySlide1 from './assets/marketing-slide-1.png' 
import companySlide2 from './assets/marketing-slide-2.png'
import companySlide3 from './assets/marketing-slide-3.png'

function CompanySection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    { id: 0, img: companySlide1, alt: 'Dashboard Analytics' },
    { id: 1, img: companySlide2, alt: 'Financial Reports' },
    { id: 2, img: companySlide3, alt: 'Marketing Stats' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 2000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="bg-[#f8fbff] py-20 px-6 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="flex flex-col items-center justify-center w-full order-2 lg:order-1">
          <div className="relative w-full aspect-4/3 max-w-xl overflow-hidden flex items-center justify-center">
            {slides.map((slide, index) => (
              <img 
                key={slide.id}
                src={slide.img} 
                alt={slide.alt} 
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out ${
                  currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2.5 mt-8 z-20">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-teal-600 scale-110' 
                    : 'border border-teal-600 bg-white hover:bg-teal-50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center text-left order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-6">
            A company standing different from others
          </h2>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique 
            eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet 
            sit vel consequat.
          </p>
          <div>
            <a href="#check-it-out" className="inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700 transition">
              <span>Check it out</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default CompanySection