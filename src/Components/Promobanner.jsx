import React from 'react';

export default function PromoBanner() {
  return (
    <section 
      className="w-full relative bg-cover bg-center py-28 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(20, 30, 48, 0.85), rgba(36, 59, 85, 0.9)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200')`,
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Safe container grid inside banner boundaries */}
      <div className="max-w-7xl mx-auto px-6 text-center z-10">
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-white font-sans opacity-95">
          Opening the World to Something New
        </h2>

      </div>
    </section>
  );
}