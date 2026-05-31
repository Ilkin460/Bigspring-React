import React from 'react'
import logoImg from '../../assets/logo.png'

function Footer() {
  return (
    <footer className="bg-[#eff7f7] pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 items-start mb-16">
          
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-bold text-slate-800">Company</h4>
            <nav className="flex flex-col gap-3 text-slate-500 font-medium text-sm md:text-base">
              <a href="#pricing" className="hover:text-teal-600 transition">Pricing</a>
              <a href="#quick-start" className="hover:text-teal-600 transition">Quick Start</a>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-bold text-slate-800">Product</h4>
            <nav className="flex flex-col gap-3 text-slate-500 font-medium text-sm md:text-base">
              <a href="#features" className="hover:text-teal-600 transition">Features</a>
              <a href="#platform" className="hover:text-teal-600 transition">Platform</a>
              <a href="#pricing" className="hover:text-teal-600 transition">Pricing</a>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-bold text-slate-800">Support</h4>
            <nav className="flex flex-col gap-3 text-slate-500 font-medium text-sm md:text-base">
              <a href="#faq" className="hover:text-teal-600 transition">FAQ</a>
              <a href="#privacy" className="hover:text-teal-600 transition">Privacy Policy</a>
              <a href="#terms" className="hover:text-teal-600 transition">Terms & Conditions</a>
            </nav>
          </div>

          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <div>
              <img src={logoImg} alt="Bigspring Logo" className="h-7 w-auto object-contain" />
            </div>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-sm">
              Lorem ipsum dolor sit amet, consectetur elit. Consjat tristique eget amet, tempus eu at cttur.
            </p>
            
            <div className="flex items-center gap-3 mt-2">
              <a href="#facebook" aria-label="Facebook" className="w-8 h-8 rounded-full border border-teal-500 flex items-center justify-center text-teal-600 hover:bg-teal-500 hover:text-white transition duration-300">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#twitter" aria-label="Twitter" className="w-8 h-8 rounded-full border border-teal-500 flex items-center justify-center text-teal-600 hover:bg-teal-500 hover:text-white transition duration-300">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#linkedin" aria-label="LinkedIn" className="w-8 h-8 rounded-full border border-teal-500 flex items-center justify-center text-teal-600 hover:bg-teal-500 hover:text-white transition duration-300">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#skype" aria-label="Skype" className="w-8 h-8 rounded-full border border-teal-500 flex items-center justify-center text-teal-600 hover:bg-teal-500 hover:text-white transition duration-300">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M22.052 14.28a9.907 9.907 0 00.126-1.573c0-5.321-4.148-9.66-9.284-9.66-.54 0-1.066.046-1.58.134A5.329 5.329 0 007.03 1.114C4.155 1.114 1.8 3.518 1.8 6.452c0 1.25.422 2.399 1.131 3.32a9.932 9.932 0 00-.124 1.564c0 5.322 4.149 9.66 9.285 9.66.545 0 1.071-.046 1.587-.136A5.329 5.329 0 0017.97 22.886c2.875 0 5.23-2.404 5.23-5.338 0-1.257-.427-2.411-1.148-3.268zM12.923 17.5c-3.116 0-4.636-1.536-4.636-3.104 0-.825.642-1.396 1.458-1.396.792 0 1.25.421 1.464 1.037.408 1.144 1.343 1.314 1.785 1.314 1.033 0 1.716-.62 1.716-1.306 0-2.316-5.463-1.463-5.463-5.26 0-1.895 1.554-3.285 4.312-3.285 2.651 0 4.135 1.242 4.135 2.766 0 .81-.607 1.353-1.4 1.353-.73 0-1.144-.374-1.385-.972-.401-1.026-.95-1.154-1.422-1.154-.785 0-1.342.422-1.342 1.045 0 1.84 5.462 1.137 5.462 5.093 0 2.12-1.748 3.869-4.58 3.869z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-200/60 pt-8 text-center">
          <p className="text-slate-400 text-xs md:text-sm font-medium">
            &copy; {new Date().getFullYear()} Bigspring. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer