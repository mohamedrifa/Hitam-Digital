import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import ServiceAboutData from "../../utils/ServiceAboutData.json";
import GoogleLogo from "../../assets/servicesection/google.png";
import ClutchLogo from "../../assets/servicesection/clutch.png";
import UpCityLogo from "../../assets/servicesection/upcity.png";

const reviews = [
  { platform: "Google", reviews: "150+ REVIEWS", stars: 5, logo: GoogleLogo },
  { platform: "Clutch", reviews: "50+ REVIEWS", stars: 5, logo: ClutchLogo },
  { platform: "UpCity", reviews: "50+ REVIEWS", stars: 5, logo: UpCityLogo },
];

const textClass =
  "text-[#404040] text-[16px] font-normal leading-[28px] text-justify";

const MarketingInfo = () => {
  const scrollRef = useRef(null);
  const currentIndex = useRef(0);
  const location = useLocation();
  const [aboutContent, setAboutContent] = useState(null);

  // Always runs, no conditional hook
  useEffect(() => {
    const path = location.pathname.replace("/", "") || "homepage";
    const matched = ServiceAboutData.find((item) => item.page === path);
    setAboutContent(matched || null);
  }, [location]);

  // Auto-scroll reviews
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        currentIndex.current = (currentIndex.current + 1) % reviews.length;
        container.scrollTo({
          left: container.clientWidth * currentIndex.current,
          behavior: "smooth",
        });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!aboutContent) {
    return (
      <section className="py-24 text-center">
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="mt-2 text-gray-500">
          We couldn't find content for this section.
        </p>
      </section>
    );
  }

  const { content_one, content_two } = aboutContent;

  return (
    <>
      <div className="relative bg-white pb-10 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start font-[Outfit]">
        <div className="space-y-4 order-1 lg:order-none whitespace-pre-line">
          <p className={textClass}>{content_one}</p>
        </div>

        <div className="overflow-hidden rounded-[16px] w-full order-2 lg:order-none">
          <img
            src="https://ik.imagekit.io/iufkpclvp/Hitam%20Digital/service/digital1.png?updatedAt=1754555509101"
            alt="Thumbs Up Executive"
            className="w-full object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="overflow-hidden rounded-[16px] w-full order-4 lg:order-none p-0 md:pb-10 md:pl-10 ml-0 md:-ml-10">
          <img
            src="https://ik.imagekit.io/iufkpclvp/Hitam%20Digital/service/twoperson.png?updatedAt=1754555509705"
            alt="Team Members"
            className="w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="space-y-6 order-3 lg:order-none whitespace-pre-line">
          <p className={textClass}>{content_two}</p>
        </div>
      </div>
      <div
        className="w-full h-[114px] px-4 sm:px-6 lg:px-[390px] py-[20px] flex justify-center items-center"
        style={{
          background:
            "linear-gradient(129deg, rgba(247, 197, 0, 0.16) 1.9%, rgba(247, 197, 0, 0.40) 98.62%)",
          backdropFilter: "blur(8.9px)",
          WebkitBackdropFilter: "blur(8.9px)",
          flexShrink: 0,
        }}
      >
        <div
          ref={scrollRef}
          className="w-full overflow-x-auto md:overflow-x-visible snap-x snap-mandatory scroll-smooth flex md:justify-around items-center gap-8 md:gap-0 px-4 md:px-0 scrollbar-hide"
        >
          {reviews.map((item, index) => (
            <div
              key={index}
              className="min-w-full md:min-w-0 flex-shrink-0 snap-center flex flex-col items-center space-y-2 text-center px-6"
            >
              <img
                src={item.logo}
                alt={item.platform}
                className="h-8 md:h-10 object-contain mb-1"
              />
              <div className="flex text-green-600">
                {[...Array(item.stars)].map((_, i) => (
                  <FaStar key={i} className="h-4 w-4 md:h-5 md:w-5" />
                ))}
              </div>
              <p className="text-green-700 font-semibold text-sm">
                {item.reviews}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MarketingInfo;
