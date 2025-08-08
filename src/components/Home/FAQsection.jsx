// FAQSection.jsx
import React, { useState } from "react";
import { faqs } from "../../utils/home";

const Minus = () => (
  <svg viewBox="0 0 24 24" width="18" height="18">
    <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const Plus = () => (
  <svg viewBox="0 0 24 24" width="18" height="18">
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-600">
              We provide a full range of IT solutions including{" "}
              <span className="font-semibold text-gray-800">Digital Marketing</span>,{" "}
              <span className="font-semibold text-gray-800">Web Development</span>, and{" "}
              <span className="font-semibold text-gray-800">Mobile App Development</span>.
              Here are answers to common questions about our services.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-green-700 px-5 py-2.5 text-white text-sm font-medium hover:opacity-90 transition"
              >
                More Questions
              </a>
              <a
                href="/contact"
                className="text-sm font-medium text-gray-800 underline underline-offset-4"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-7">
            <ul className="divide-y divide-gray-200">
              {faqs.map((item, idx) => {
                const isOpen = open === idx;
                return (
                  <li key={idx} className="py-5">
                    <button
                      className="w-full flex items-center justify-between text-left"
                      onClick={() => setOpen(isOpen ? -1 : idx)}
                    >
                      <span className="text-lg md:text-xl font-semibold text-gray-900">
                        {item.q}
                      </span>
                      <span className="shrink-0 ml-6 inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300">
                        {isOpen ? <Minus /> : <Plus />}
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm md:text-base text-gray-600 leading-7 pr-2">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
