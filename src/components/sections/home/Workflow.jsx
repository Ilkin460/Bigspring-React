import React from 'react'
import workflowSvg from '../../../assets/workflow.svg' 

function Workflow() {
  return (
    <section className="bg-white pt-20 pb-0 px-0 w-full overflow-hidden flex flex-col items-center">
      <div className="text-center px-6 mb-12 max-w-3xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
          Experience the best <br className="hidden md:block" /> workflow with us
        </h2>
      </div>

      <div className="w-full flex justify-center items-end">
        <img 
          src={workflowSvg} 
          alt="Experience the best workflow with us" 
          className="w-full h-auto object-cover md:object-contain block"
        />
      </div>
    </section>
  )
}

export default Workflow