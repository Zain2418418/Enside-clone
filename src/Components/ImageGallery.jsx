import React from 'react';

const GALLERY_DATA = [
  {
    id: 1,
    categories: 'AGENCY / APP DESIGN / SERVICES',
    title: 'Product Design',
    subtitle: 'Creative Ring',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=500'
  },
  {
    id: 2,
    categories: 'MARKETING / STRATEGY',
    title: 'Financial Growth',
    subtitle: 'Business Team',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=500'
  },
  {
    id: 3,
    categories: 'DEVELOPMENT / WEB',
    title: 'Digital Workspace',
    subtitle: 'Live Interface',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=500'
  },
  {
    id: 4,
    categories: 'CORPORATE / BRANDING',
    title: 'Executive Walk',
    subtitle: 'Partnership',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=500'
  },
  {
    id: 5,
    categories: 'CONSULTING / IDEA',
    title: 'Client Relations',
    subtitle: 'Communication',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500'
  }
];

export default function ImageGallery() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 w-full h-[280px]">
        
        {GALLERY_DATA.map((item) => (
          <div 
            key={item.id} 
            className="group relative w-full h-full overflow-hidden cursor-pointer select-none"
          >
            {/* Background Gallery Image */}
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Dark Smooth Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out" />

            {/* Slide up content container */}
            <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col items-center text-center translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out z-10">
              
              {/* Category tags text header */}
              <span className="text-[9px] font-bold text-gray-300 tracking-[0.18em] uppercase mb-1">
                {item.categories}
              </span>

              {/* Main Product Title Label */}
              <h3 className="text-xl font-bold text-white mb-0.5 tracking-wide">
                {item.title}
              </h3>

              {/* Sub-brand / Team text */}
              <span className="text-xs font-light text-gray-300 italic mb-4">
                {item.subtitle}
              </span>

              {/* View more Oval Button */}
              <button className="bg-white text-gray-800 text-[11px] font-bold px-5 py-2 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-colors duration-300 transform active:scale-95">
                View more
              </button>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}