import React from "react";
import Scroller from "./scroller";



const textClass =
  'text-[#404040] text-[16px] font-normal leading-[28px] text-justify';

const highlightClass =
  'text-[#018002] font-bold underline decoration-solid';

const MarketingInfo = () => {


  return (
    <>
    <div className="relative bg-white pb-10 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start font-[Outfit]">
      {/* Text Block - Top */}
      <div className="space-y-4 order-1 lg:order-none">
        <p className={textClass}>
          Hitam Internet Marketing Agency is a dynamic, versatile and{" "}
          <span className={highlightClass}>full-service digital marketing agency</span>{" "}
          that doesn’t rely on smoke and mirrors to attract new clients.
          Instead, Thrive trusts its own search engine optimization (SEO) and
          marketing skills to drive new customers to our website.
        </p>
        <p className={textClass}>
          We’re not a static company. We don’t limit ourselves to specific
          industries. Thrive has the experience and professionals to build a
          custom website and use multiple digital marketing services to assist
          any size company in{" "}
          <span className={highlightClass}>any industry</span>.
        </p>
        <p className={textClass}>
          So many other agencies rely on a one-size-fits-all approach, offering
          you the same cookie-cutter website and strategies as your competitor
          down the street.
        </p>
      </div>

      {/* Image 1 */}
      <div className="overflow-hidden rounded-[16px] w-full order-2 lg:order-none">
        <img
          src= 'https://ik.imagekit.io/iufkpclvp/Hitam%20Digital/service/digital1.png?updatedAt=1754555509101'
          alt="Thumbs Up Executive"
          className="w-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Image 2 */}
      <div className="overflow-hidden rounded-[16px] w-full order-4 lg:order-none p-0 md:pb-10 md:pl-10 ml-0 md:-ml-10">
        <img
          src= 'https://ik.imagekit.io/iufkpclvp/Hitam%20Digital/service/twoperson.png?updatedAt=1754555509705'
          alt="Team Members"
          className="w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Text Block - Bottom */}
      <div className="space-y-6 order-3 lg:order-none">
        <p className={textClass}>
          Thrive works with you to produce customized internet marketing
          services and a plan that aligns with your unique business needs. We
          become an extension of your team, a partner that understands your
          market and goals, rather than just an agency that executes strategies
          blindly.
        </p>
        <p className={textClass}>
          Unlike so many other agencies that use glitz and glamour to close
          sales and then fail to execute, Thrive focuses on client
          relationships and results. We always deliver substance, not false
          promises, ensuring we maximize your budget, so you get the most
          return on investment (ROI).
        </p>
        <p className={textClass}>
          Our{" "}
          <span className={highlightClass}>reviews and testimonials</span>{" "}
          speak volumes. We earn your business every day with month-to-month
          contracts. Take a look below at the wide variety of digital marketing
          services Thrive offers.{" "}
          <span className={highlightClass}>Contact us today</span>{" "}
          to learn more about how we can help your business!
        </p>
      </div>
    </div>
    <div
      className="w-full h-[114px] px-4 sm:px-6 lg:px-[390px] py-[20px] flex justify-center items-center"
      style={{
        background:
          'linear-gradient(129deg, rgba(247, 197, 0, 0.16) 1.9%, rgba(247, 197, 0, 0.40) 98.62%)',
        backdropFilter: 'blur(8.9px)',
        WebkitBackdropFilter: 'blur(8.9px)',
        flexShrink: 0,
      }}
    >
    <Scroller/>
    </div>
    </>
  );
};

export default MarketingInfo;


