import React from 'react'
import contactImg from './assets/contact.svg' 

function Contact() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-[40px] p-10 md:p-20 shadow-[0_15px_50px_rgba(0,0,0,0.05)] border border-slate-50 flex flex-col md:flex-row items-center gap-12 lg:gap-20">

        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src={contactImg} 
            alt="Ready to get started illustration" 
            className="w-full max-w-112.5 h-auto object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">
            Ready to get started?
          </h2>
          
          <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-10 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Consequat tristique eget amet, tempus eu at consecttur.
          </p>
          
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-teal-200/50 active:scale-95 text-lg">
            Contact Us
          </button>
        </div>

      </div>
    </section>
  )
}

export default Contact