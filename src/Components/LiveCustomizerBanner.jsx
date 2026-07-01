import React from 'react';

export default function LiveCustomizerBanner() {
  return (
  <section 
    className="w-full relative bg-cover bg-center py-24 flex items-center justify-center overflow-hidden"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200')`,
      backgroundAttachment: 'fixed'
    }}
  >
    {/* Centered content block wrapper */}
    <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center z-10">
      
      <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold tracking-wide text-white font-sans mb-5 leading-tight">
        Live customizer included.
      </h2>

      {/* Subtitle / Description Text */}
      <p className="text-[15px] md:text-[16px] text-gray-200 font-light max-w-2xl leading-relaxed mb-8 tracking-wide">
        We are always Taking care of the new product's launch <br className="hidden sm:inline" />
        and initial client and user support.
      </p>

      <button className="flex items-center gap-x-3 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white px-9 py-4 rounded-full font-bold text-[15px] shadow-xl tracking-wider cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_10px_25px_rgba(59,130,246,0.4)] active:scale-[0.98]">
        {/* Custom SVG Play Icon */}
        <svg 
          className="w-4 h-4 fill-current text-white ml-0.5" 
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
        <span>Presentation</span>
      </button>

    </div>
  </section>
);
}