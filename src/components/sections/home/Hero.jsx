import React from 'react'
import heroSvg from '../../../assets/hero.svg' 

function Hero() {
  return (
    <section className="flex flex-col items-center text-center px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight tracking-tight max-w-3xl">
        Let us solve your critical website development challenges
      </h1>

      <p className="mt-6 text-slate-500 text-base md:text-lg max-w-2xl leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque
        totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus.
      </p>

      <div className="mt-12 w-full max-w-3xl flex justify-center">
        <img 
          src={heroSvg} 
          alt="Website Development Challenges" 
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  )
}

export default Hero