import React from 'react';

export default function PurchaseBanner() {
  return (
    <section className="w-full relative py-28 overflow-hidden font-sans">
      
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200')`
        }}
      />
      
      {/* Translucent Royal Blue to Dark Navy Tint Matrix overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb]/90 via-[#1d4ed8]/95 to-[#1e1b4b]/95 mix-blend-multiply" />

      {/* Content Layer (Centered strictly vertically & horizontally) */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Main Header Match */}
        <h2 className="text-white text-3xl md:text-[36px] font-normal tracking-wide mb-4">
          Want to get started?
        </h2>

        {/* 2-line targeted description block split */}
        <p className="text-gray-200/90 text-[14px] md:text-[15px] font-light leading-relaxed max-w-[520px] mb-8">
          We are always taking care of the new product's launch and initial client and user support.
        </p>

        {/* Premium Capsule Action Button with dynamic gradient pull */}
        <button className="bg-gradient-to-r from-[#256bf3] to-[#00d2fe] text-white font-medium text-[15px] px-9 py-3.5 rounded-full shadow-[0_10px_25px_rgba(0,210,254,0.3)] hover:brightness-110 hover:scale-[1.02] transition-all duration-200 cursor-pointer select-none">
          Purchase Theme
        </button>

      </div>
    </section>
  );
}