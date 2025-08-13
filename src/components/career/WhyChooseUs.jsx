import React from "react";

const WhyChooseUs = () => {
  const para = `Meaningful Work – What we do makes a real difference in the lives of people in rural and semi-urban India.
  Women-First Leadership – We foster a safe, respectful, and growth-focused work environment that values diversity.
  Flexible Work Options – Our roles are designed to be inclusive, family-friendly, and accessible.
  Learning Opportunities – Gain insights from experts in AI, EdTech, AstroTech, fashion, and digital.`;
  const lines = para.split("\n");
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto mt-10 lg:mt-14">
      {/* Top intro */}
      <p className="text-center text-[#131D12] text-lg font-semibold">
        Hey there! Looking for something interesting?
      </p>
      <h2 className="text-center text-[#131D12] text-[40px] sm:text-[52px] lg:text-[60px] font-semibold leading-tight mt-2">
        Why Choose Us?
      </h2>
      <p className="text-center text-[#131D12] text-[18px] lg:text-[20px] mt-2">
        At Hitam, you won’t just get a job; you’ll discover a whole new adventure!
      </p>

      {/* Main row */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left: curved image card */}
        <div
          className="relative h-full
                     rounded-tr-[1000px] rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px]
                     border border-black/25 overflow-hidden
                     bg-[linear-gradient(129deg,rgba(247,197,0,0.16)_1.9%,rgba(247,197,0,0.40)_98.62%),radial-gradient(112.03%_35.66%_at_33.89%_-8.16%,rgba(148,148,148,0.10)_0%,rgba(24,24,24,0.10)_63.52%,rgba(29,29,29,0.10)_100%)]
                     backdrop-blur-[8.9px]"
                     >
          <img
            src="https://ik.imagekit.io/iufkpclvp/Hitam%20Digital/careers/carreer1.png?updatedAt=1754738057933"
            alt="Careers"
            className="absolute bottom-0 left-0 w-full object-cover rounded-[8px] z-0 
             transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>

        {/* Right: heading + two lines + CTA */}
        <div className="text-left ml-[30px] h-px]">
          <h3 className="text-[#131D12] font-['Outfit'] text-[28px] sm:text-[34px] md:text-[40px] font-bold tracking-[0.2px] leading-normal">
            Join us and be part of something great!
        </h3>


          <p className="mt-4 text-[16px] sm:text-[17px] text-[#0F2A10] whitespace-pre-line">
            {lines.map((line, i) => {
              const [title, ...rest] = line.split("–");
              return (
                <span key={i} className="block mb-2">
                  <span className="font-semibold">{title.trim()} –</span> {rest.join("–").trim()}
                </span>
              );
            })}
          </p>

          <div className="mt-8">
          <button
            onClick={() => console.log('get start')}
            className="inline-flex items-center bg-[#018002] hover:bg-green-600 text-white text-md font-semibold px-10 py-3 rounded-full transition duration-300"
          >
            Let’s Schedule a Call!
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
