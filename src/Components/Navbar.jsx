import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full font-sans antialiased bg-white">
      {/* 1st Container: Top Bar (Grey Shaded) */}
      <div className="bg-[#f8f9fa] text-[13px] text-gray-500 px-6 py-3 md:px-16 border-b border-gray-100 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left Side Info */}

          <div className="flex items-center space-x-6 text-[#828282] text-[14px]">
            <span className="flex items-center gap-1">
              <span className="text-[14px] opacity-70">📞</span> Sales
              Department: <span className="font-light">+ 4235 2342 42</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="text-[14px] opacity-70">✉️</span> Mail:{" "}
              <span className="font-light">test@gmail.com</span>
            </span>
          </div>
          {/* Right Side Info & Social Icons */}
          <div className="flex items-center space-x-8">
            <a
              href="#purchase"
              className="text-gray-400 hover:text-gray-900 transition-colors font-medium"
            >
              Purchase
            </a>
            <div className="flex items-center space-x-5 text-sm text-gray-400 font-normal">
              <a href="#" className="hover:text-blue-600 transition-colors">
                f
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                🐦
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Bē
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                🌐
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                ℗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd Container: Main Navigation (Sticky on scroll with increased height) */}
      <nav className="sticky top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-gray-100 px-6 py-8 md:px-16 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Exact Brand Logo Image from Website */}
          <div className="flex items-center cursor-pointer">
            <img
              src="https://max-themes.net/demos/enside/classic/upload/logo-enside-8-black.png"
              alt="Enside Logo"
              className="h-11 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu - Font weight reduced to match screenshot precisely */}
          <div className="hidden lg:flex items-center space-x-10 font-medium text-[14px] tracking-widest text-gray-800">
            <a href="#about" className="hover:text-blue-600 transition-colors">
              ABOUT
            </a>
            <a href="#cases" className="hover:text-blue-600 transition-colors">
              CASES
            </a>
            <a
              href="#testimonials"
              className="hover:text-blue-600 transition-colors"
            >
              TESTIMONIALS
            </a>
            <a
              href="#features"
              className="hover:text-blue-600 transition-colors"
            >
              FEATURES
            </a>
            <a
              href="#contact"
              className="hover:text-blue-600 transition-colors"
            >
              CONTACT
            </a>

            {/* Exactly Proportioned Pill Button */}
            <a
              href="#purchase"
              className="bg-[#2563eb] text-white font-bold px-9 py-3.5 rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/10 text-[12px] tracking-widest ml-4"
            >
              PURCHASE
            </a>
          </div>

          {/* Mobile Hamburguer Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-800 p-2 focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Sidebar Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 flex flex-col mt-4 pt-4 space-y-4 font-medium text-[13px] tracking-wider pb-4">
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-blue-600 px-2 py-1"
            >
              ABOUT
            </a>
            <a
              href="#cases"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-blue-600 px-2 py-1"
            >
              CASES
            </a>
            <a
              href="#testimonials"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-blue-600 px-2 py-1"
            >
              TESTIMONIALS
            </a>
            <a
              href="#features"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-blue-600 px-2 py-1"
            >
              FEATURES
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-blue-600 px-2 py-1"
            >
              CONTACT
            </a>
            <a
              href="#purchase"
              onClick={() => setIsOpen(false)}
              className="bg-[#2563eb] text-white text-center font-bold py-3.5 rounded-full block text-[12px]"
            >
              PURCHASE
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
