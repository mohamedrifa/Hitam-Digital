import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-white py-16 px-6 md:px-16 overflow-hidden">
      {/* Left Floral Background */}
      <img
        src="https://ik.imagekit.io/iufkpclvp/Hitam%20Digital/HeroBg-1.png?updatedAt=1754558014536"
        alt="Floral"
        className="absolute -left-44 top-[100px] w-[650px] lg:w-[700px] object-contain z-0 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* LEFT COLUMN */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              <span className="block">Design</span>
              <span className="block">Develop</span>
              <span className="block">Dominate</span>
            </h1>
            <p className="text-lg text-gray-700 mt-2 font-semibold">
              Your Business, Powered by Smart Creativity.
            </p>
          </div>

          <p className="text-gray-600 max-w-md">
            We design, develop, and market digital experiences that deliver measurable
            business outcomes — across industries, platforms, and formats.
          </p>

          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center gap-2 w-fit shadow">
            Schedule Call <ArrowRight size={18} />
          </button>

          <div className="pt-6">
            <p className="text-sm text-gray-500 mb-2 font-medium">
              Trusted by the world’s biggest brands
            </p>
            <div className="flex items-center gap-6 flex-wrap">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" className="h-6" alt="Google" />
              <img src="https://ik.imagekit.io/iufkpclvp/Hitam%20Digital/Company%20logo.png?updatedAt=1754566332375" className="h-6" alt="Afterpay" />
              <img src="https://ik.imagekit.io/iufkpclvp/Hitam%20Digital/simple-icons_wipro.png?updatedAt=1754566332432" className="h-6" alt="wipro" />
              <img src="https://ik.imagekit.io/iufkpclvp/Hitam%20Digital/simple-icons_accenture.png?updatedAt=1754566332523" className="h-6" alt="accenture" />
              <img src="https://ik.imagekit.io/iufkpclvp/Hitam%20Digital/Company%20logo%20(1).png?updatedAt=1754566332518" />
              <img src="https://ik.imagekit.io/iufkpclvp/Hitam%20Digital/Company%20logo%20(2).png?updatedAt=1754566332434" className="h-5" alt="Maze" />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full lg:w-1/2 relative flex flex-col items-center lg:items-end gap-6">
          {/* Up Arrow Icon Circle */}
          {/* <div className="absolute top-0 right-[140px] z-30 bg-yellow-200 p-3 rounded-full shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </div> */}

          {/* Main Row: Half Circle + Person + Stat Box */}
          <div className="flex gap-4 relative items-end">
            {/* Half Circle */}
            <div className="w-[220px] h-[220px] bg-yellow-100 rounded-tl-full shadow-inner z-0" />

            {/* Person Image */}
            <div className="relative z-10 -ml-[260px] -mt-10">
              <img
                src="https://ik.imagekit.io/iufkpclvp/Hitam%20Digital/HeroBg-2.png?updatedAt=1754558055909"
                alt="Person"
                className="w-[240px] h-auto object-contain"
              />
            </div>

            {/* Stats Box */}
            <div className="w-[220px] h-[220px] bg-yellow-100 rounded-xl shadow flex flex-col items-center justify-center text-center px-5 py-4 z-10">
              <h2 className="text-5xl font-bold text-gray-900">230+</h2>
              <p className="text-sm text-gray-600 mt-2">
                some big companies that we work with, and trust us very much
              </p>
              <div className="w-full h-2 bg-green-700 rounded-full mt-3 relative">
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-[55%] h-1 bg-green-200 rounded-full" />
              </div>
            </div>
          </div>

          {/* Chart Box */}
          <div className="w-[460px] bg-yellow-100 rounded-xl px-6 py-6 shadow mt-2 z-10">
            <p className="text-sm font-semibold text-gray-600 mb-1">
              Drive More Traffic and Sales
            </p>
            <p className="text-2xl font-bold text-gray-900">
              Drive more traffic and product sales
            </p>
            <div className="flex items-end gap-2 mt-4 h-24">
              <div className="w-5 bg-green-300 h-10 rounded" />
              <div className="w-5 bg-green-400 h-16 rounded" />
              <div className="w-5 bg-green-500 h-20 rounded" />
              <div className="w-5 bg-green-600 h-24 rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
