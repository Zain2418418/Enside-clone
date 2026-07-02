import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#1e2226] text-gray-400 font-sans relative">
      
      {/* Upper Main Footer Matrix Container */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 text-left">
        
        {/* COLUMN 1: About Enside */}
        <div className="flex flex-col">
          <h3 className="text-white text-[16px] font-bold tracking-wide mb-6">
            About Enside
          </h3>
          <p className="text-[14px] text-gray-400/90 leading-relaxed font-normal">
            We are the comprehensive design and technology partner for the digital age. 
            We help businesses to stay relevant to their customers in the digital era by 
            touching hearts and minds.
          </p>
        </div>

        {/* COLUMN 2: Recent News */}
        <div className="flex flex-col">
          <h3 className="text-white text-[16px] font-bold tracking-wide mb-6">
            Recent News
          </h3>
          
          {/* News Item 1 */}
          <div className="pb-4 border-b border-gray-700/50">
            <a href="#" className="text-white hover:text-blue-400 text-[14px] font-medium leading-snug block transition-colors">
              Building a Better World with Enside
            </a>
            <span className="text-[11px] text-gray-500 block mt-1">November 29, 2017</span>
          </div>

          {/* News Item 2 */}
          <div className="pt-4">
            <a href="#" className="text-[#4452ff] hover:underline text-[14px] font-medium leading-snug block transition-colors">
              Enside launches new Industries eCommerce Experience
            </a>
            <span className="text-[11px] text-gray-500 block mt-1">November 23, 2017</span>
          </div>
        </div>

        {/* COLUMN 3: Useful Links */}
        <div className="flex flex-col">
          <h3 className="text-white text-[16px] font-bold tracking-wide mb-6">
            Useful Links
          </h3>
          <ul className="flex flex-col gap-y-3 text-[14px] text-gray-400/90 font-normal">
            <li><a href="#about" className="hover:text-white transition-colors">FAQ's</a></li>
            <li><a href="#cases" className="hover:text-white transition-colors">Documentation</a></li>
            <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
            <li><a href="#cases" className="hover:text-white transition-colors">Tutorials</a></li>
            <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
          </ul>
        </div>

        {/* COLUMN 4: Get in Touch & Social Icons */}
        <div className="flex flex-col">
          <h3 className="text-white text-[16px] font-bold tracking-wide mb-6">
            Get in Touch
          </h3>
          <p className="text-[14px] text-gray-400/90 leading-relaxed mb-4">
            Our support available to help you<br />
            24 hours a day, seven days a week.
          </p>
          <div className="text-[14px] text-gray-300 space-y-1 mb-6">
            <p>T: + 1 703 4959 3452</p>
            <p>E: <a href="mailto:test@gmail.com" className="hover:underline">test@gmail.com</a></p>
          </div>
          
          <div className="flex items-center gap-x-4 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition-colors"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-white transition-colors"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-white transition-colors"><i className="fab fa-behance"></i></a>
            <a href="#" className="hover:text-white transition-colors"><i className="fas fa-globe"></i></a>
            <a href="#" className="hover:text-white transition-colors"><i className="fab fa-pinterest-p"></i></a>
          </div>
        </div>

      </div>

      {/* LOWER SUB-FOOTER STRIP */}
      <div className="w-full bg-[#191c1e] py-6 border-t border-gray-800/40 relative">
        <div className="max-w-7xl mx-auto px-8 md:px-16 flex justify-center items-center text-center text-[13px] text-gray-500">
          <p>
            Powered by <span className="text-gray-300 font-medium">Enside - Premium HTML Template</span>
          </p>
        </div>

        {/* Floating Scroll To Top Capsule Right side */}
        <button 
          onClick={scrollToTop}
          className="absolute right-8 md:right-16 -top-6 w-12 h-12 bg-white text-gray-700 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer z-20 group focus:outline-none"
          title="Go to top"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth="3"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>

    </footer>
  );
}