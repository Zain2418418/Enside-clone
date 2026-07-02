import React from 'react';

const FEATURES_LEFT = [
  {
    id: 1,
    title: 'Great Service',
    description: "We are always Taking care of the new product's launch and initial client and user support.",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Design & Developing',
    description: 'Creative concept – every solution needs a conceptual design that the further work will be based on.',
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5a2.25 2.25 0 0 0 2.25 2.25Zm3-10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6 15a2.25 2.25 0 0 1 4.5 0H6Z" />
      </svg>
    )
  }
];

const FEATURES_RIGHT = [
  {
    id: 3,
    title: 'Fully Responsive',
    description: "We are always Taking care of the new product's launch and initial client and user support.",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0M12 12m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Fast Support',
    description: "We are always Taking care of the new product's launch and initial client and user support.",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A1.5 1.5 0 0 0 19.4 18.85l-5.83-5.83M11.42 15.17a4.496 4.496 0 0 1-6.34-6.34l5.83 5.83m0 0a4.496 4.496 0 0 1 6.34-6.34l-5.83 5.83m0 0 5.83-5.83m-5.83 5.83L5.08 9.34a4.496 4.496 0 0 0 0 6.34l5.83-5.83Z" />
      </svg>
    )
  }
];

export default function OtherFeatures() {
  return (
    <section id="features" className="w-full bg-[#f9fbfd] py-24 text-center font-sans border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-4xl font-bold tracking-wide text-gray-800 lowercase mb-1">
            other features
          </h2>
          <p className="text-sm uppercase tracking-[0.25em] text-gray-400 font-semibold mb-3">
            capabilities
          </p>
          <div className="w-10 h-1 bg-blue-600 rounded-sm" />
        </div>

        {/* Outer Splitter Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left items-center">
          
          {/* LEFT 8 COLUMNS: */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-y-12">
              {FEATURES_LEFT.map((feat) => (
                <div key={feat.id} className="flex gap-x-5 items-start select-none animate-hover-shake cursor-pointer">
                  <div className="icon-box w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm transition-transform duration-200">
                    {feat.icon}
                  </div>
                  <div className="flex flex-col pt-1">
                    <h3 className="text-[17px] font-bold text-gray-800 mb-2 tracking-wide">{feat.title}</h3>
                    <p className="text-[14px] text-gray-400 font-normal leading-relaxed max-w-[280px]">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-y-12">
              {FEATURES_RIGHT.map((feat) => (
                <div key={feat.id} className="flex gap-x-5 items-start select-none animate-hover-shake cursor-pointer">
                  <div className="icon-box w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm transition-transform duration-200">
                    {feat.icon}
                  </div>
                  <div className="flex flex-col pt-1">
                    <h3 className="text-[17px] font-bold text-gray-800 mb-2 tracking-wide">{feat.title}</h3>
                    <p className="text-[14px] text-gray-400 font-normal leading-relaxed max-w-[280px]">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT 4 COLUMNS: */}
<div className="lg:col-span-4 w-full h-[310px] [perspective:1000px] group select-none cursor-pointer">
  <div 
    className="w-full h-full relative transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
    style={{ willChange: 'transform' }}
  >
    
    {/* CARD FRONT SIDE (Default state view) */}
    <div 
      className="absolute inset-0 w-full h-full rounded-sm overflow-hidden [backface-visibility:hidden] -webkit-[backface-visibility:hidden] flex flex-col items-center justify-center text-center p-6 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=500')`
      }}
    >
      <h3 className="text-2xl font-semibold text-white mb-3 tracking-wide">
        Build Your Dream
      </h3>
      <p className="text-[14px] text-gray-200 font-light leading-relaxed max-w-[260px]">
        We help businesses to stay relevant to their customers in the digital era
      </p>
    </div>

    {/* CARD BACK SIDE */}
    <div 
      className="absolute inset-0 w-full h-full rounded-sm overflow-hidden [backface-visibility:hidden] -webkit-[backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center text-center p-6 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(29, 78, 216, 0.75), rgba(30, 58, 138, 0.85)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500')`
      }}
    >
      <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">
        Grow Your Business
      </h3>
      <p className="text-[14px] text-blue-100 font-normal leading-relaxed max-w-[260px]">
        Unlock potential markets and maximize conversion with optimized frameworks.
      </p>
    </div>

  </div>
</div>

        </div>

      </div>
    </section>
  );
}