import React from 'react';
import Contact from '../sections/home/Contact'

function Pricing() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        <h1 className="text-5xl font-normal text-center mb-20">
          Pricing
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 items-center max-w-5xl mx-auto">
          
          <div className="bg-white border border-gray-100 rounded-l-lg md:rounded-r-none p-8 flex flex-col items-center text-center shadow-sm z-10 h-100 justify-between">
            <div className="w-full">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Basic Plan</h3>
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-4xl font-normal text-gray-900">$49</span>
                <span className=" text-gray-400 ml-1">/ month</span>
              </div>
              <p className="text-xl text-gray-500 mb-8">Best For Small Individuals</p>
              
              <ul className="space-y-3 text-gray-500">
                <li>Express Service</li>
                <li>Customs Clearance</li>
                <li>Time-Critical Services</li>
              </ul>
            </div>

            <button className="w-full max-w-50 border border-[#00a896] text-[#00a896] hover:bg-[#00a896] hover:text-white font-medium py-2.5 px-4 rounded-full transition-colors duration-200">
              Get started for free
            </button>
          </div>

          <div className="bg-white rounded-lg p-8 flex flex-col items-center text-center shadow-2xl z-20 md:scale-110 md:-mx-2 h-115 justify-between border border-gray-50">
            <div className="w-full">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Professional Plan</h3>
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-5xl font-normal text-gray-900">$69</span>
                <span className=" text-gray-400 ml-1">/ month</span>
              </div>
              <p className="text-xl text-gray-500 mb-8">Best For Professionals</p>
              
              <ul className="space-y-3 text-gray-500">
                <li>Express Service</li>
                <li>Customs Clearance</li>
                <li>Time-Critical Services</li>
                <li>Cloud Service</li>
                <li>Best Dashboard</li>
              </ul>
            </div>

            <button className="w-full max-w-45 bg-[#00a896] hover:bg-[#029282] text-white font-medium py-3 px-4 rounded-full transition-colors duration-200 shadow-md">
              Get started
            </button>
          </div>

          <div className="bg-white border border-gray-100 rounded-r-lg md:rounded-l-none p-8 flex flex-col items-center text-center shadow-sm z-10 h-100 justify-between">
            <div className="w-full">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Business Plan</h3>
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-4xl font-normal text-gray-900">$99</span>
                <span className=" text-gray-400 ml-1">/ month</span>
              </div>
              <p className="text-xl text-gray-500 mb-8">Best For Large Individuals</p>
              
              <ul className="space-y-3 text-gray-500">
                <li>Express Service</li>
                <li>Customs Clearance</li>
                <li>Time-Critical Services</li>
              </ul>
            </div>

            <button className="w-full max-w-45 border border-[#00a896] text-[#00a896] hover:bg-[#00a896] hover:text-white font-medium py-2.5 px-4 rounded-full transition-colors duration-200">
              Get started
            </button>
          </div>

        </div>

      </div>
      <Contact /> 
    </div>
  );
}

export default Pricing;