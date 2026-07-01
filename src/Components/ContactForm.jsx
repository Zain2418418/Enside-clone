import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <section className="w-full bg-white py-24 font-sans border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        
        {/* LEFT COLUMN: */}
        <div className="flex flex-col text-left max-w-[480px] w-full mx-auto lg:mx-0 pt-2">
          <h2 className="text-[38px] font-semibold tracking-tight text-gray-800 lowercase leading-tight mb-1">
            have some questions
          </h2>
          <p className="text-[12px] uppercase tracking-[0.25em] text-gray-400 font-bold mb-5">
            message us
          </p>
          <div className="w-[38px] h-[4px] bg-[#4452ff] rounded-none" />
        </div>

        {/* RIGHT COLUMN:*/}
        <div className="w-full max-w-[520px] mx-auto lg:mx-0 lg:pr-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
            
            {/* Name Input */}
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Name*"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white border border-gray-200 text-gray-700 placeholder-gray-400 font-medium text-[15px] px-4 py-4 focus:outline-none focus:border-blue-500 transition-colors rounded-none"
              />
            </div>

            {/* Email Input */}
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Email*"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white border border-gray-200 text-gray-700 placeholder-gray-400 font-medium text-[15px] px-4 py-4 focus:outline-none focus:border-blue-500 transition-colors rounded-none"
              />
            </div>

            {/* Message Textarea */}
            <div className="relative w-full">
              <textarea
                rows="6"
                placeholder="Message*"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white border border-gray-200 text-gray-700 placeholder-gray-400 font-medium text-[15px] px-4 py-4 focus:outline-none focus:border-blue-500 transition-colors resize-none rounded-none h-[180px]"
              />
            </div>

            {/* Send Button */}
            <button
              type="submit"
              className="w-full bg-[#4452ff] text-white font-bold text-[15px] py-4 shadow-sm hover:bg-[#3543e0] transition-colors duration-200 cursor-pointer rounded-none tracking-wide text-center"
            >
              Send
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}