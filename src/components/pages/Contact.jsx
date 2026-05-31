import React from 'react'

function Contact() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        
        <h1 className="text-5xl font-normal text-center mb-16">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          <form className="md:col-span-7 flex flex-col space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-200 rounded text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#00a896] text-sm transition-colors"
              />
            </div>
            
            <div>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 border border-gray-200 rounded text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#00a896] text-sm transition-colors"
              />
            </div>
            
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 border border-gray-200 rounded text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#00a896] text-sm transition-colors"
              />
            </div>
            
            <div>
              <textarea
                rows="6"
                placeholder="Your message"
                className="w-full px-4 py-3 border border-gray-200 rounded text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#00a896] text-sm transition-colors resize-y"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="bg-[#00a896] hover:bg-[#029282] text-white font-medium py-3 px-8 rounded-full transition-colors duration-200 text-sm shadow-sm"
              >
                Send Now
              </button>
            </div>
          </form>

          <div className="md:col-span-5 md:pl-6 flex flex-col pt-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
              Why you should contact us!
            </h3>
            
            <p className="text-gray-500 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
              recusandae voluptates doloremque veniam temporibus porro
              culpa ipsa, nisi soluta minima saepe laboriosam debitis nesciunt.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center text-gray-900">
                <span className="w-2 h-2 rounded-full bg-[#00a896] mr-3 shrink-0"></span>
                <span>
                  <strong className="font-semibold">phone:</strong> +88 125 256 452
                </span>
              </li>
              <li className="flex items-center text-gray-900">
                <span className="w-2 h-2 rounded-full bg-[#00a896] mr-3 shrink-0"></span>
                <span>
                  <strong className="font-semibold">Mail:</strong> info@bigspring.com
                </span>
              </li>
              <li className="flex items-center text-gray-900">
                <span className="w-2 h-2 rounded-full bg-[#00a896] mr-3 shrink-0"></span>
                <span>
                  <strong className="font-semibold">Address:</strong> 360 Main rd, Rio, Brazil
                </span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Contact