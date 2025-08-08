import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const OurClients = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Soft radial highlight */}
      <div className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(900px_500px_at_85%_10%,#EAF7EE_0%,transparent_60%)]" />

      {/* Subtle dot pattern on the right */}
      <div className="pointer-events-none absolute -z-10 right-[-60px] top-24 opacity-30">
        <svg width="420" height="420" viewBox="0 0 420 420" fill="none">
          <defs>
            <pattern id="dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#cbd5e1" />
            </pattern>
          </defs>
          <rect width="420" height="420" fill="url(#dots)" />
        </svg>
      </div>

      {/* Light diagonal gradient wash */}
      <div className="pointer-events-none absolute -z-10 inset-0 bg-gradient-to-br from-transparent via-transparent to-green-50" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-900">
            What Our Clients Are Saying
          </h1>
          <p className="mt-3 text-sm md:text-base text-gray-600">
            As a leading digital services provider, we share real client feedback and helpful insights
            to guide your decisions.
          </p>
        </div>

        {/* Content card area (optional subtle card look) */}
        <div className="mt-10">
          <div className="p-4 sm:p-6 md:p-10">
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
