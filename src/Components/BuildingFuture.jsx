import React, { useState } from 'react';

export default function BuildingFuture() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section className="w-full bg-white py-24 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        <div className="flex flex-col text-left max-w-[480px] w-full mx-auto lg:mx-0 pr-2">
          
          <h2 className="text-4xl font-bold tracking-wide text-gray-800 lowercase mb-1">
            building the future
          </h2>
          <p className="text-sm uppercase tracking-[0.25em] text-gray-400 font-semibold mb-4">
            our concept
          </p>
          <div className="w-10 h-1 bg-blue-600 rounded-sm mb-8" />

          <p className="text-[15px] text-gray-400 font-normal leading-relaxed mb-10">
            We are the comprehensive design and technology partner for the digital age. 
            We help businesses to stay relevant to their customers in the digital era by 
            touching hearts and minds.
          </p>

          <div className="flex flex-col border-t border-gray-100">
            {/* Strategy Accordion */}
            <div className="border-b border-gray-100 py-4">
              <button 
                onClick={() => toggleAccordion('strategy')}
                className="w-full flex items-center gap-x-3 text-left focus:outline-none cursor-pointer group"
              >
                <span className="text-gray-600 font-bold text-lg select-none w-4">
                  {openAccordion === 'strategy' ? '−' : '+'}
                </span>
                <span className="text-[16px] font-bold text-gray-800 tracking-wide group-hover:text-blue-600 transition-colors">
                  Strategy
                </span>
              </button>
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openAccordion === 'strategy' ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                <p className="text-[14px] text-gray-400 leading-relaxed pl-7 max-w-[420px]">
                  As brand with a strong grasp of who they are and what they stand for, our challenge was to simplify and clarify their brand platform, and to create an identity system and flagship eCommerce experience.
                </p>
              </div>
            </div>

            {/* Technology Accordion */}
            <div className="border-b border-gray-100 py-4">
              <button 
                onClick={() => toggleAccordion('technology')}
                className="w-full flex items-center gap-x-3 text-left focus:outline-none cursor-pointer group"
              >
                <span className="text-gray-600 font-bold text-lg select-none w-4">
                  {openAccordion === 'technology' ? '−' : '+'}
                </span>
                <span className="text-[16px] font-bold text-gray-800 tracking-wide group-hover:text-blue-600 transition-colors">
                  Technology
                </span>
              </button>
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openAccordion === 'technology' ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                <p className="text-[14px] text-gray-400 leading-relaxed pl-7 max-w-[420px]">
                  As brand with a strong grasp of who they are and what they stand for, our challenge was to simplify and clarify their brand platform, and to create an identity system and flagship eCommerce experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Dashboard Mockup view with balanced margin pushes */}
        <div className="relative flex justify-center lg:justify-end animate-slide-in-right pl-4 pr-16 lg:pr-10">
          
          {/* Main Browser Window Frame Container */}
          <div className="w-full max-w-[520px] aspect-[4/3] bg-[#f4f7fe] border-[12px] border-[#4452ff] rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.15)] relative">
            
            {/* Top Browser Header Circle Dots Bar */}
            <div className="absolute top-[-12px] left-2 h-12 flex items-center gap-1.5 z-20">
              <div className="w-2 h-2 rounded-full bg-white" />
              <div className="w-2 h-2 rounded-full bg-white" />
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>

            {/* Inner Web Page Container Viewport */}
            <div className="w-full h-full bg-white flex flex-col overflow-hidden relative">
              
              {/* 1. Mock Slider Banner Top Area */}
              <div 
                className="w-full h-[52%] bg-cover bg-center p-6 flex flex-col justify-center items-center text-center relative border-b border-gray-100"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600')`
                }}
              >
                <div className="absolute left-2 top-1/2 -translate-y-10 text-white/40 text-xs font-mono">&lt;</div>
                <div className="absolute right-2 top-1/2 -translate-y-10 text-white/40 text-xs font-mono">&gt;</div>

                <h4 className="text-white font-bold text-xl tracking-wide mb-1">
                  Full Digital Service
                </h4>
                <p className="text-[9px] text-white/70 max-w-[200px] leading-tight mb-3">
                  We help businesses to stay relevant to their customers in the digital era.
                </p>
                <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-[8px] font-bold px-4 py-1 rounded-sm shadow-sm">
                  Discover More
                </button>
              </div>

              {/* 2. Mock Bottom Website Body Layout */}
              <div className="w-full flex-grow bg-white p-4 flex flex-col items-center">
                <span className="text-[12px] font-bold text-gray-800 mb-0.5">services</span>
                <span className="text-[7px] text-gray-400 uppercase tracking-widest mb-3">how can we help</span>
                
                {/* 3 Circular Services Icon Badges */}
                <div className="grid grid-cols-3 gap-4 w-full px-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-6 h-6 rounded-full border border-blue-500 flex items-center justify-center text-[8px] text-blue-500 mb-1">⚙</div>
                    <div className="w-8 h-1 bg-gray-200 rounded-full" />
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-6 h-6 rounded-full border border-blue-500 flex items-center justify-center text-[8px] text-blue-500 mb-1">⏱</div>
                    <div className="w-8 h-1 bg-gray-200 rounded-full" />
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-6 h-6 rounded-full border border-blue-500 flex items-center justify-center text-[8px] text-blue-500 mb-1">☁</div>
                    <div className="w-8 h-1 bg-gray-200 rounded-full" />
                  </div>
                </div>
              </div>

            </div>

            {/* FLOATING CARD 1: Total Buy Card */}
            <div className="absolute -bottom-12 left-10 w-[145px] h-[190px] bg-white shadow-[0_15px_40px_rgba(0,0,0,0.12)] rounded-sm p-4 text-left flex flex-col justify-between border border-gray-100/40 z-30">
              <div>
                <span className="text-[11px] text-gray-400 font-medium tracking-wide block mb-0.5">Total Buy</span>
                <span className="text-2xl font-bold text-[#1e2a4a] tracking-tight block">$39 226</span>
              </div>
              <div>
                <span className="text-[10px] text-emerald-400 font-bold tracking-wide block mb-2">$29 864</span>
                <div className="relative w-full h-12">
                  <svg className="w-full h-full text-cyan-400" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,30 Q20,10 40,25 T80,15 T100,20 L100,40 L0,40 Z" fill="url(#cyanGlow)" />
                    <circle cx="40" cy="25" r="3" fill="#06b6d4" stroke="white" strokeWidth="1" />
                  </svg>
                  <defs>
                    <linearGradient id="cyanGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.2"/>
                    </linearGradient>
                  </defs>
                </div>
              </div>
            </div>

            {/* FLOATING CARD 2: Total Sell Card */}
            <div className="absolute top-[36%] -right-10 w-[115px] h-[145px] bg-white shadow-[0_15px_40px_rgba(0,0,0,0.12)] rounded-sm p-3.5 text-left flex flex-col justify-between border border-gray-100/40 z-30">
              <div>
                <span className="text-[10px] text-gray-400 font-medium block mb-0.5">Total Sell</span>
                <span className="text-xl font-bold text-[#1e2a4a] tracking-tight block">$12 564</span>
              </div>
              <div>
                <span className="text-[9px] text-orange-400 font-bold block mb-1">$6 120</span>
                <div className="w-full h-10">
                  <svg className="w-full h-full text-pink-500" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,35 Q30,15 60,30 T100,10" stroke="url(#pinkOrange)" strokeWidth="2" fill="none" />
                    <circle cx="60" cy="30" r="2.5" fill="#f43f5e" stroke="white" strokeWidth="1" />
                  </svg>
                  <defs>
                    <linearGradient id="pinkOrange" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#ec4899"/>
                      <stop offset="100%" stopColor="#f97316"/>
                    </linearGradient>
                  </defs>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}