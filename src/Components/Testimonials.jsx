import React, { useState, useEffect } from 'react';

const ALL_REVIEWS = [
  {
    id: 1,
    name: 'Annet James',
    role: 'Founder JevelGroup',
    feedback: 'The theme is lovely itself, though we got great amount of help in customizing it the way we want.',
    hasImage: true,
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150'
  },
  {
    id: 2,
    name: 'Bradly Cooper',
    role: 'Copywriter',
    feedback: "Every aspect of this theme is incredible. It's easy to use, extremely customizable, and looks amazing.",
    hasImage: true,
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150'
  },
  {
    id: 3,
    name: 'Amalia Stivens',
    role: 'Senior Designer',
    feedback: 'Very nice and clean, it gives your site a professional impression. The customer support is extremely fast and helpful.',
    hasImage: true,
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150'
  },
  {
    id: 4,
    name: 'Johnathan Doe',
    role: 'Creative Director',
    feedback: 'Outstanding layout flexibility and brilliant structure. Highly recommend this framework for clean developments.',
    hasImage: false
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return (prevIndex + 1) % (ALL_REVIEWS.length - 2); 
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="testimonials" className="w-full bg-white py-24 text-center font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-4xl font-bold tracking-wide text-gray-800 lowercase mb-1">
            why people love Enside
          </h2>
          <p className="text-sm uppercase tracking-[0.25em] text-gray-400 font-semibold mb-3">
            testimonials
          </p>
          <div className="w-10 h-1 bg-blue-600 rounded-sm" />
        </div>

        {/* Carousel Outer Wrapper */}
        <div 
          className="w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Sliding Track Matrix */}
          <div 
            className="flex gap-6 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(calc(-${currentIndex * 33.333}% - ${currentIndex * 16}px))`
            }}
          >
            {ALL_REVIEWS.map((item) => (
              <div 
                key={item.id} 
                className="bg-white border border-gray-100 shadow-sm rounded-sm p-8 flex flex-col items-center justify-between h-[340px] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 transition-shadow duration-300 hover:shadow-md"
              >
                {/* Profile Image Render Condition */}
                {item.hasImage ? (
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 mb-6 flex-shrink-0 border border-gray-100">
                    <img 
                      src={item.imageUrl} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 mb-6 flex items-center justify-center flex-shrink-0" />
                )}

                {/* Feedback Quotes Description */}
                <p className={`text-[14px] font-normal leading-relaxed mb-6 flex-grow flex items-center justify-center px-2 text-center ${!item.hasImage ? 'text-gray-500 italic' : 'text-gray-400'}`}>
                  "{item.feedback}"
                </p>

                {/* Identity Card Footer */}
                <div className="border-t border-gray-50 pt-4 w-full">
                  <h4 className="text-[16px] font-bold text-gray-800 tracking-wide mb-0.5">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-400 font-medium tracking-normal">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {[0, 1].map((dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setCurrentIndex(dotIndex)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === dotIndex ? 'w-6 bg-blue-600' : 'w-2 bg-gray-200'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}