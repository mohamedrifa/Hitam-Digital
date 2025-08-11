// src/components/ProgressBanner.jsx
import React from "react";
import statue from "../../assets/errorpage/statue.png";
import logo from "../../assets/errorpage/digital_logo.png";
import Navbar from "../../layout/Navbar";

export default function ErrorPage() {
  return (
    <>
      <Navbar />
      <div className="relative w-full h-[660px] md:h-[670px] bg-[linear-gradient(129deg,rgba(247,197,0,0.16)_1.9%,rgba(247,197,0,0.40)_98.62%)] backdrop-blur-sm overflow-hidden border border-black/25">
        {/* Text */}
        <h1 className="absolute z-10 top-40 left-5 right-5 text-2xl font-bold text-black md:text-5xl md:left-[304px] md:right-auto md:top-1/2 md:-translate-y-1/2">
          <span className="block">We’re Currently</span>
          <span className="block">
            Making <span className="text-[#018002]">Progress</span> On it
          </span>
        </h1>

        {/* Big “D” logo background */}
        <img
          src={logo}
          alt="logo"
          className="absolute z-0 top-6 left-3 h-[58%] opacity-95 md:h-full md:top-0 md:left-[320.02px]"
          loading="eager"
        />

        {/* Statue at bottom */}
        <img
          src={statue}
          alt="Thinking statue using a laptop"
          className="absolute z-10 bottom-0 left-0 w-full md:w-auto md:h-[90%] md:bottom-0 md:left-auto md:right-0 object-contain"
          loading="eager"
        />
      </div>
    </>
  );
}
