import { useState } from "react";

const SLIDES = [
  {
    id: 1,
    bgImage:
      "https://www.shutterstock.com/image-photo/woman-phone-call-talking-smile-260nw-2526834943.jpg",
    title: "Meets Technology",
    description: (
      <>
        We help businesses to stay relevant to
        <br />
        their customers in the digital era
      </>
    ),
    buttonText: "Discover More",
  },
  {
    id: 2,
    bgImage:
      "https://thumbs.dreamstime.com/b/business-people-walk-road-take-notebook-coffee-hong-kong-76467080.jpg",
    title: "Full Digital service",
    description: (
      <>
        We help busniess to stay relevant to
        <br />
        their customers in the digital era
      </>
    ),
    buttonText: "Discover More",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSlideChange = (nextIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setCurrent(nextIndex);
      setIsAnimating(false);
    }, 600);
  };

  const nextSlide = () => {
    const next = current === SLIDES.length - 1 ? 0 : current + 1;
    handleSlideChange(next);
  };

  const prevSlide = () => {
    const next = current === 0 ? SLIDES.length - 1 : current - 1;
    handleSlideChange(next);
  };

  return (
    <section id="about" className="relative w-full h-[75xvh] min-h-[480px] overflow-hidden bg-black font-sans">
      {/* Slide Container */}
      {SLIDES.map((slide, index) => {
        const isActive = index === current;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image */}
            <div
              className={`absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 cubic-bezier(0.25, 1, 0.5, 1) ${
                isActive
                  ? "translate-y-0 scale-100"
                  : "-translate-y-full scale-105"
              }`}
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              <div className="absolute inset-0 bg-black/45" />
            </div>

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">
              <div
                className={`transition-all duration-1000 delay-100 transform ${
                  isActive
                    ? "translate-y-0 opacity-100"
                    : "translate-y-16 opacity-0"
                }`}
              >
                {/* Main Heading Text */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-6 drop-shadow-sm">
                  {slide.title}
                </h1>

                {/* Subtitle / Description */}
                <p className="text-gray-200/90 text-sm sm:text-[18px] max-w-xl mx-auto mb-10 font-light tracking-wide leading-relaxed">
                  {slide.description}
                </p>

                {/* Sky Blue/Blue Gradient Button */}
                <button className="bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 text-white font-medium text-sm sm:text-base px-9 py-3.5 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/20 tracking-wide">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        );
      })}
{/* Left Navigation Arrow */}
      <button 
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 md:left-12 lg:left-20 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 hidden min-[375px]:flex items-center justify-center text-white transition-all backdrop-blur-sm group active:scale-95"
        aria-label="Previous Slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Navigation Arrow */}
      <button 
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 md:right-12 lg:right-20 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 hidden min-[375px]:flex items-center justify-center text-white transition-all backdrop-blur-sm group active:scale-95"
        aria-label="Next Slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
