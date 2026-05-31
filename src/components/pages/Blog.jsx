import React from 'react';
import blogMainImg from '../../assets/blog-4.jpg'; 
import blogImg1 from '../../assets/blog-4.jpg'; 
import blogImg2 from '../../assets/blog-3.jpg';
import blogImg3 from '../../assets/blog-2.jpg';

function Blog() {
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-[56px] font-normal text-center text-gray-900 mb-12">
          Latest news
        </h2>

        {/* Öne Çıkan Büyük Blog Yazısı */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-16 bg-white overflow-hidden">
          <div className="w-full lg:w-1/2">
            <img 
              src={blogMainImg} 
              alt="Adversus" 
              className="w-full h-64 md:h-80 object-cover rounded-xl"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 leading-snug">
              Adversus is a web-based dialer and practical CRM solution
            </h3>
            <p className="text-gray-500 mb-6 leading-relaxed">
              ##### Heading exampleHere is an example of headings. You can use this
              heading by the following markdown rules. For example: use # for heading 1
              and use ###### for heading 6.# Heading 1## He
            </p>
            <button className="bg-[#00a896] hover:bg-[#029282] text-white font-medium py-3 px-8 rounded-full transition-colors duration-200">
              Read More
            </button>
          </div>
        </div>

        {/* Alt Üçlü Kart Izgarası */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Kart 1 */}
          <div className="flex flex-col items-start justify-between min-h-85">
            <div className="w-full">
              <img 
                src={blogImg1} 
                alt="Toys from old Olarpaper" 
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h4 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 line-clamp-2 leading-snug">
                How to make toys from old Olarpaper
              </h4>
            </div>
            <button className="bg-[#00a896] hover:bg-[#029282] text-white font-medium py-2 px-6 rounded-full transition-colors duration-200 mt-auto">
              Read More
            </button>
          </div>

          {/* Kart 2 */}
          <div className="flex flex-col items-start justify-between min-h-85">
            <div className="w-full">
              <img 
                src={blogImg2} 
                alt="Photography" 
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h4 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 line-clamp-2 leading-snug">
                What you need to know about Photography
              </h4>
            </div>
            <button className="bg-[#00a896] hover:bg-[#029282] text-white font-medium py-2 px-6 rounded-full transition-colors duration-200 mt-auto">
              Read More
            </button>
          </div>

          {/* Kart 3 */}
          <div className="flex flex-col items-start justify-between min-h-85">
            <div className="w-full">
              <img 
                src={blogImg3} 
                alt="Toys from old Olarpaper 2" 
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h4 className="text-xl md:text-3xl font-semibold text-gray-900 mb-4 line-clamp-2 leading-snug">
                How to make toys from old Olarpaper
              </h4>
            </div>
            <button className="bg-[#00a896] hover:bg-[#029282] text-white font-medium py-2 px-6 rounded-full transition-colors duration-200 mt-auto">
              Read More
            </button>
          </div>

        </div>

        {/* Sayfalama (Pagination) */}
        <div className="flex justify-center items-center space-x-2">
          <button className="w-8 h-8 flex items-center justify-center bg-[#f4f7f6] text-gray-600 rounded hover:bg-gray-200 transition-colors text-sm">
            &#8249;
          </button>
          <button className="w-8 h-8 flex items-center justify-center bg-[#00a896] text-white font-medium rounded text-sm">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center bg-[#f4f7f6] text-gray-600 rounded hover:bg-gray-200 transition-colors text-sm">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center bg-[#f4f7f6] text-gray-600 rounded hover:bg-gray-200 transition-colors text-sm">
            &#8250;
          </button>
        </div>

      </div>
    </div>
  );
}

export default Blog;