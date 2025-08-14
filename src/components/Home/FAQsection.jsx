import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

// animation variants
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-50 via-white to-green-50" />
      {/* Decorative dot pattern */}
      <div className="absolute top-0 right-0 -z-10 opacity-20">
        <svg width="400" height="400" viewBox="0 0 200 200" fill="none">
          <defs>
            <pattern id="smallDots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#10B981" />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#smallDots)" />
        </svg>
      </div>
      {/* Curved wave bottom */}
      <div className="absolute bottom-0 left-0 w-full -z-10">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path
            fill="#FEF9C3"
            fillOpacity="1"
            d="M0,192L48,192C96,192,192,192,288,181.3C384,171,480,149,576,133.3C672,117,768,107,864,128C960,149,1056,203,1152,229.3C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
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
                href="/contactus"
                className="inline-flex items-center justify-center rounded-full bg-green-700 px-5 py-2.5 text-white text-sm font-medium hover:opacity-90 transition"
              >
                More Questions
              </a>
              <a
                href="/contactus"
                className="text-sm font-medium text-gray-800 underline underline-offset-4"
              >
                Contact Us
              </a>
            </div>
          </motion.div>

          {/* Right */}
          <motion.ul
            className="lg:col-span-7 divide-y divide-gray-200"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {faqs.map((item, idx) => {
              const isOpen = open === idx;
              return (
                <motion.li key={idx} variants={item} className="py-5">
                  <button
                    className="w-full flex items-center justify-between text-left"
                    onClick={() => setOpen(isOpen ? -1 : idx)}
                  >
                    <span className="text-lg md:text-xl font-semibold text-gray-900">
                      {item.q}
                    </span>
                    <motion.span
                      className="shrink-0 ml-6 inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      {isOpen ? <Minus /> : <Plus />}
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 text-sm md:text-base text-gray-600 leading-7 pr-2">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
