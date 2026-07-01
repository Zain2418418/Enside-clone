import React, { useState } from 'react';

const SERVICES_DATA = [
  {
    id: 1,
    title: 'Parallax Section',
    description: 'This is how we can be sure that your brand expands according to market goals',
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.43l-1.003.767c-.304.233-.463.607-.447.99.004.07.006.14.006.212c0 .072-.002.141-.006.212-.016.383.143.757.447.99l1.003.767a1.125 1.125 0 0 1 .26 1.43l-1.296 2.247a1.125 1.125 0 0 1-1.37.49l-1.216-.456c-.356-.133-.751-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.43l1.004-.767c.304-.233.463-.607.447-.99a6.446 6.446 0 0 1-.006-.213c0-.072.002-.141.006-.212.016-.383-.143-.757-.447-.99L2.598 9.746a1.125 1.125 0 0 1-.26-1.43L3.634 6.07a1.125 1.125 0 0 1 1.37-.49l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128c.332-.183.582-.495.645-.869L8.484 3.94ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Responsive Design',
    description: 'It is fundamental to have a strategy that takes into consideration the features',
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Optimized Performance',
    description: 'This is how we can be sure that your brand expands according to market goals',
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Featured On Envato',
    description: 'It is fundamental to have a strategy that takes into consideration the features',
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    )
  }
];

export default function Services() {
  const [hoveredId, setHoveredId] = useState(null);

return (
  <section className="w-full bg-white py-20 text-center font-sans">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      
      {/* Section Header */}
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl font-bold tracking-wide text-gray-800 lowercase mb-1">
          services
        </h2>
        <p className="text-sm uppercase tracking-[0.25em] text-gray-400 font-semibold mb-3">
          how can we help
        </p>
        <div className="w-10 h-1 bg-blue-600 rounded-sm" />
      </div>

      {/* 4-Column Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 pt-4">
        {SERVICES_DATA.map((service) => {
          const isHovered = hoveredId === service.id;

          return (
            <div 
              key={service.id} 
              className="group flex flex-col items-center px-4 cursor-pointer select-none"
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div 
                className={`w-24 h-24 rounded-full border-2 border-blue-500 flex items-center justify-center mb-6 bg-white transition-all duration-300 ${
                  isHovered ? 'bg-blue-50/40 opacity-60 -translate-y-2' : 'translate-y-0 opacity-100'
                }`}
                style={{
                  transition: 'transform 0.25s ease-in-out, opacity 0.25s ease-in-out'
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-[17px] font-semibold text-gray-800 mb-3 tracking-wide">
                {service.title}
              </h3>

              <p className="text-[15px] text-gray-500 font-normal leading-relaxed max-w-xs">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>

    </div>
  </section>
);
}