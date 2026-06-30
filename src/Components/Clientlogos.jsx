import React from 'react';

const LOGOS = [
  { id: 1, name: 'Golden Grid', url: 'https://max-themes.net/demos/enside/classic/upload/logo-b-8.png' },
  { id: 2, name: 'Combination', url: 'https://max-themes.net/demos/enside/classic/upload/logo-b-13.png' },
  { id: 3, name: 'TWN', url: 'https://max-themes.net/demos/enside/classic/upload/logo-b-3.png' },
  { id: 4, name: 'Intuit', url: 'https://max-themes.net/demos/enside/classic/upload/logo-b-2.png' },
  { id: 5, name: 'Yoga Lifestyle', url: 'https://max-themes.net/demos/enside/classic/upload/logo-b-4.png' },
  { id: 6, name: 'Studio Group', url: 'https://max-themes.net/demos/enside/classic/upload/logo-b-7.png' },
];

export default function ClientLogos() {
  return (
    /* Outer container keeping a clean 1px border at the bottom */
    <div className="w-full bg-white py-14 border-b border-gray-200">
      
      {/* Container holding layout limits */}
      <div className="max-w-5xl mx-auto px-6 overflow-hidden">
        
        {/* Track forced to align from Left to Right with tightly controlled gap */}
        <div 
          className="animate-scroll-right flex items-center" 
          style={{ gap: '12px' }} 
        >
          
          {/* Set 1 */}
          {LOGOS.map((logo) => (
            <div 
              key={`set1-${logo.id}`} 
              /* Width and Height increased aggressively to force larger rendering */
              className="w-[320px] h-24 flex-shrink-0 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="w-full h-full object-contain pointer-events-none px-2"
              />
            </div>
          ))}

          {/* Set 2 (Cloned loop) */}
          {LOGOS.map((logo) => (
            <div 
              key={`set2-${logo.id}`} 
              className="w-[320px] h-24 flex-shrink-0 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="w-full h-full object-contain pointer-events-none px-2"
              />
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}