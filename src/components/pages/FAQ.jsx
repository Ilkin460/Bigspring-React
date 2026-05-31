import React from 'react'

function FAQ() {
  const faqData = [
    {
      id: 1,
      question: "Will updates also be free?",
      text: "Lorem, link ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto, mollitia delectus ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus, repudiandae impedit nam ad enim porro, qui labore fugiat quod suscipit fuga necessitatibus. Perferendis, ipsum? Cum, reprehenderit. Sapiente atque quam vitae, magnam dolore consequatur temporibus harum odit ab id quo qui aspernatur aliquid officiis sit error asperiores eveniet quibusdam, accusantium enim recusandae quas ea est! Quaerat omnis, placeat vitae laboriosam doloremque recusandae mollitia minima!"
    },
    {
      id: 2,
      question: "Discounts for students and Non Profit Organizations?",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto, mollitia delectus link ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus, repudiandae impedit nam ad enim porro, qui labore fugiat quod suscipit fuga necessitatibus. Perferendis, ipsum? Cum, reprehenderit. Sapiente atque quam vitae, magnam dolore consequatur temporibus harum odit ab id quo qui aspernatur aliquid officiis sit error asperiores eveniet quibusdam, accusantium enim recusandae quas ea est! Quaerat omnis, placeat vitae laboriosam doloremque recusandae mollitia minima!"
    },
    {
      id: 3,
      question: "I need something unique, Can you make it?",
      text: "Lorem, link ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto, mollitia delectus ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus, repudiandae impedit nam ad enim porro, qui labore fugiat quod suscipit fuga necessitatibus. Perferendis, ipsum? Cum, reprehenderit. Sapiente atque quam vitae, magnam dolore consequatur temporibus harum odit ab id quo qui aspernatur aliquid officiis sit error asperiores eveniet quibusdam, accusantium enim recusandae quas ea est! Quaerat omnis, placeat vitae laboriosam doloremque recusandae mollitia minima!"
    },
    {
      id: 4,
      question: "Is there any documentation and support?",
      text: "Lorem, link ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto, mollitia delectus ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus, repudiandae impedit nam ad enim porro, qui labore fugiat quod suscipit fuga necessitatibus. Perferendis, ipsum? Cum, reprehenderit. Sapiente atque quam vitae, magnam dolore consequatur temporibus harum odit ab id quo qui aspernatur aliquid officiis sit error asperiores eveniet quibusdam, accusantium enim recusandae quas ea est! Quaerat omnis, placeat vitae laboriosam doloremque recusandae mollitia minima!"
    },
    {
      id: 5,
      question: "Any refunds?",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto, mollitia delectus link ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus, repudiandae impedit nam ad enim porro, qui labore fugiat quod suscipit fuga necessitatibus. Perferendis, ipsum? Cum, reprehenderit. Sapiente atque quam vitae, magnam dolore consequatur temporibus harum odit ab id quo qui aspernatur aliquid officiis sit error asperiores eveniet quibusdam, accusantium enim recusandae quas ea est! Quaerat omnis, placeat vitae laboriosam doloremque recusandae mollitia minima!"
    },
    {
      id: 6,
      question: "What is a product key?",
      text: "Lorem, link ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto, mollitia delectus ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus, repudiandae impedit nam ad enim porro, qui labore fugiat quod suscipit fuga necessitatibus. Perferendis, ipsum? Cum, reprehenderit. Sapiente atque quam vitae, magnam dolore consequatur temporibus harum odit ab id quo qui aspernatur aliquid officiis sit error asperiores eveniet quibusdam, accusantium enim recusandae quas ea est! Quaerat omnis, placeat vitae laboriosam doloremque recusandae mollitia minima!"
    }
  ];

  const renderTextWithLink = (text) => {
    const parts = text.split('link');
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index < parts.length - 1 && (
          <a href="#" className="text-[#00a896] hover:underline font-medium">link</a>
        )}
      </React.Fragment>
    ));
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-5xl font-normal text-center text-gray-950 mb-16">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {faqData.map((faq) => (
            <div 
              key={faq.id} 
              className="bg-white rounded-lg p-8 shadow-[0_10px_35px_rgba(0,0,0,0.10)] border border-gray-50 flex flex-col"
            >
              {/* Başlık Alanı (İkon + Soru) */}
              <div className="flex items-start mb-4">
                {/* Turkuaz Onay İkonu */}
                <div className="shrink-0 mt-1">
                  <svg 
                    className="w-7 h-7 text-[#00a896]" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </div>
                
                {/* Soru Metni */}
                <h3 className="text-2xl font-bold text-gray-900 ml-3 leading-snug">
                  {faq.question}
                </h3>
              </div>

              {/* Açıklama Metni */}
              <p className="text-gray-500 leading-relaxed pl-8">
                {renderTextWithLink(faq.text)}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default FAQ