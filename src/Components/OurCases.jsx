import React from 'react';

const CASES_DATA = [
  {
    id: 1,
    title: 'Brand Development',
    description: (
      <>
        Our energy and expertise are focus in <br />
        inspiring projects, activation <br />
        campaigns and influence strategies <br />
        with our brands
      </>
    ),
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600',
  },
  {
    id: 2,
    title: 'Content Strategy',
    description: (
      <>
        We believe in a collaborative <br />
        partnership where we work with you <br />
        and your brand to create the perfect <br />
        solution
      </>
    ),
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600',
  },
  {
    id: 3,
    title: 'Ecommerce & Technology',
    description: (
      <>
        Development and Design – every <br />
        solution needs a conceptual design <br />
        that the further work will be based <br />
        on.
      </>
    ),
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600',
  }
];

export default function OurCases() {
  return (
    <section id="cases" className="w-full bg-white py-24 text-center font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold tracking-wide text-gray-800 lowercase mb-1">
            our cases
          </h2>
          <p className="text-sm uppercase tracking-[0.25em] text-gray-400 font-semibold mb-3">
            solutions
          </p>
          <div className="w-10 h-1 bg-blue-600 rounded-sm" />
        </div>

        {/* 3-Column Static Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {CASES_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-100 shadow-sm rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
            >
              {/* Card Image Container */}
              <div className="w-full h-64 overflow-hidden bg-gray-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content Box */}
              <div className="p-8 pb-12 flex flex-col flex-grow">
                <h3 className="text-[19px] font-bold text-gray-800 mb-4 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-[15px] text-gray-400 font-normal leading-relaxed tracking-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}