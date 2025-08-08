// TestimonialSlider.jsx
import React, { useState } from "react";
import { TESTIMONIALS } from "../../utils/home";

const pad = (n) => String(n).padStart(2, "0");

const ArrowLeft = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
    <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowRight = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
    <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function TestimonialSlider() {
  const [i, setI] = useState(0);
  const total = TESTIMONIALS.length;
  const t = TESTIMONIALS[i];

  const prev = () => setI((p) => (p - 1 + total) % total);
  const next = () => setI((p) => (p + 1) % total);

  return (
    <section className="relative w-full max-w-6xl mx-auto py-12 md:py-20 px-4 md:px-6 ">
      {/* Quote */}
      <p className="text-lg md:text-2xl leading-8 md:leading-[2.1rem] text-black max-w-full ">
        <span className="text-3xl md:text-4xl mr-2">“</span>
        {t.quote}
        <span className="text-3xl md:text-4xl ml-1">”</span>
      </p>

      {/* Bottom Row */}
      <div className="mt-8  flex items-end justify-between">
        {/* Author */}
        <div className="flex items-center gap-3">
          <img
            src={t.avatar}
            alt={t.name}
            className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover"
          />
          <div className="leading-tight">
            <div className="text-sm md:text-base font-semibold ">{t.name}</div>
            <div className="text-xs md:text-sm text-gray-500">{t.role}</div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="h-10 w-10 md:h-11 md:w-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition"
          >
            <ArrowLeft />
          </button>

          <span className="text-xs md:text-sm text-gray-600 min-w-[3.5rem] text-center">
            {pad(i + 1)}/{pad(total)}
          </span>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="h-10 w-10 md:h-11 md:w-11 rounded-full bg-green-700 text-white flex items-center justify-center hover:opacity-90 transition"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}