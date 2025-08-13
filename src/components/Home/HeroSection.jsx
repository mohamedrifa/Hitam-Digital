import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="relative w-full bg-white
                 pt-24 sm:pt-28 md:pt-32  
                 pb-8 sm:pb-12 md:pb-16
                 px-3 sm:px-5 md:px-12 xl:px-16
                 overflow-hidden"
    >
      {/* Left Floral Background */}
      <img
        src="https://ik.imagekit.io/iufkpclvp/Hitam%20Digital/HeroBg-1.png?updatedAt=1754558014536"
        alt="Floral"
        className="absolute -left-24 sm:-left-40 top-[140px]
                   w-[260px] sm:w-[560px] lg:w-[620px]
                   object-contain z-0 pointer-events-none select-none"
      />

      {/* Wrapper */}
      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 lg:gap-3 xl:gap-2">
        {/* LEFT COLUMN */}
        <div
          className="w-full lg:w-[54%]
                     space-y-3 sm:space-y-4 lg:space-y-4
                     lg:pr-2 lg:ml-16 text-center lg:text-left"
        >
          <div>
            <h1 className="text-[28px] sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight">
              <span className="block">Design</span>
              <span className="block">Develop</span>
              <span className="block">Dominate</span>
            </h1>
            <p className="text-sm sm:text-lg text-gray-800 mt-2 font-semibold">
              Your Business, Powered by Smart Creativity.
            </p>
          </div>

          <p className="text-gray-600 max-w-[20rem] sm:max-w-md mx-auto lg:mx-0 text-[13px] sm:text-base">
            We design, develop, and market digital experiences that deliver measurable
            business outcomes — across industries, platforms, and formats.
          </p>

         <div className="flex justify-center lg:justify-start">
          <Link
            to="/contactus"
            className="bg-green-600 hover:bg-green-700 text-white
                      px-4 py-2 sm:px-6 sm:py-3
                      rounded-full flex items-center gap-2 w-fit shadow text-sm sm:text-base"
          >
            Schedule Call <ArrowRight size={18} />
          </Link>
        </div>

          {/* Logos row */}
          <div className="pt-5 sm:pt-8 lg:pt-24">
            <p className="text-[11px] sm:text-sm text-gray-800 mb-3 sm:mb-4 font-medium">
              Trusted by the world’s biggest brands
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-8 flex-wrap">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" className="h-5 sm:h-8" alt="Google" />
              <img src="https://ik.imagekit.io/iufkpclvp/Hitam%20Digital/Company%20logo.png?updatedAt=1754566332375" className="h-5 sm:h-8" alt="Afterpay" />
              <img src="https://ik.imagekit.io/iufkpclvp/Hitam%20Digital/simple-icons_accenture.png?updatedAt=1754566332523" className="h-5 sm:h-8" alt="Accenture" />
              <img src="https://ik.imagekit.io/iufkpclvp/Hitam%20Digital/Company%20logo%20(1).png?updatedAt=1754566332518" className="h-5 sm:h-8" alt="Basecamp" />
              <img src="https://ik.imagekit.io/iufkpclvp/Hitam%20Digital/Company%20logo%20(2).png?updatedAt=1754566332434" className="h-5 sm:h-8" alt="Maze" />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div
          className="w-full lg:w-[46%] relative flex flex-col items-center lg:items-end
                     gap-3 sm:gap-4 lg:gap-4
                     lg:-ml-4 mt-4 sm:mt-6 lg:mt-0"
        >
          {/* Main Row */}
          <div className="flex gap-2 relative items-end scale-[0.90] sm:scale-100">
            <div className="w-[180px] h-[170px] sm:w-[240px] sm:h-[240px] bg-yellow-100 rounded-tl-full shadow-inner z-0" />

            <div className="relative z-10 -ml-[110px] sm:-ml-[200px]  sm:-mt-10">
              <img
                src="https://ik.imagekit.io/iufkpclvp/Hitam%20Digital/HeroBg-2.png?updatedAt=1754558055909"
                alt="Person"
                className="w-[160px] sm:w-[230px] h-36 sm:h-[300px]  sm:-mt-14 -ml-6     object-contain select-none"
                draggable={false}
              />
            </div>

            <div className="w-[180px] sm:w-[260px] h-[170px] sm:h-[240px] bg-yellow-100 rounded-2xl shadow ring-1 ring-black/5 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-4 sm:py-5 z-10">
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-none">230+</h2>
              <p className="text-[11px] sm:text-[13px] text-gray-600 mt-2 leading-snug">
                some big companies that we work with, and trust us very much
              </p>
              <div className="w-full h-2 bg-green-700/90 rounded-full mt-3 relative overflow-hidden">
                {/* static fill to remove animation */}
                <div className="absolute left-2 top-1/2 -translate-y-1/2 h-1 bg-green-200 rounded-full" style={{ width: "58%" }} />
              </div>
            </div>
          </div>

          {/* Chart Box */}
          <div
            className="w-full max-w-[460px] sm:max-w-[560px]
                       rounded-2xl px-5 sm:px-8 py-4 sm:py-7 shadow ring-1 ring-black/5 z-10"
            style={{ background: "linear-gradient(90deg, #FAF3D1 0%, #EAE0A1 100%)" }}
          >
            <div className="flex items-center gap-2 mb-2 sm:mb-4">
              <span className="block h-[1px] w-6 bg-gray-500" />
              <p className="text-[11px] sm:text-xs font-medium text-gray-600 tracking-wide">
                Drive More Traffic and Sales
              </p>
            </div>

            <div className="flex justify-between items-end">
              <p className="text-base sm:text-[22px] md:text-2xl font-bold text-gray-900 leading-snug max-w-[65%]">
                Drive more traffic and product sales
              </p>

              <div className="flex items-end gap-1 sm:gap-2 h-16 sm:h-20">
                <div className="w-[12px] sm:w-[18px] h-8 bg-green-300 rounded-sm" />
                <div className="w-[12px] sm:w-[18px] h-12 bg-green-400 rounded-sm" />
                <div className="w-[12px] sm:w-[18px] h-[3.75rem] bg-green-500 rounded-sm" />
                <div className="w-[12px] sm:w-[18px] h-[4.5rem] bg-green-600 rounded-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
