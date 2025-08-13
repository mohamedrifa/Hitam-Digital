import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import servicesJson from "../../utils/servicedata/ServiceCard.json"; // path to your JSON file

const ServiceCard = ({ logo, title, content }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
    className="flex flex-col items-center md:items-start w-full md:w-[376.67px] h-[327px] md:h-[432px]
               px-5 md:px-[18px] pt-5 pb-5 rounded-[16px] backdrop-blur-[8.9px]
               transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02] hover:border-green-600
               bg-gradient-to-tl from-[#F7C700]/20 to-[#F7C500]/10 cursor-pointer"
  >
    {/* Icon + Title */}
    <div className="flex items-center space-x-3 mb-3 w-full">
      <img
        src={logo}
        alt={title}
        className="w-[32px] h-[32px] md:w-[54.83px] md:h-[54.83px] object-contain"
      />
      <h3 className="text-left text-[#018002] font-bold leading-[26.4px] underline underline-offset-[2px]
                     text-md md:text-xl">
        {title}
      </h3>
    </div>

    {/* Description */}
    <p className="text-[#404040] text-sm md:text-[15px] leading-[26px] text-justify font-normal">
      {content}
    </p>
  </motion.div>
);

const ServiceSection = () => {
  const location = useLocation();

  // Extract the key after "/service/"
  const pathKey = location.pathname.replace("/service/", ""); 
  const serviceData = servicesJson[pathKey] || [];

  const [visibleCount, setVisibleCount] = useState(9);

  return (
    <section className="relative bg-white pb-10 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto text-center mt-[60px] sm:mt-[80px] md:mt-[90px]">
      {/* Title */}
      <h2 className="text-[#0B1508] text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-[36px]">
        Our Services
      </h2>

      {/* Subtitle */}
      <p className="mt-4 text-[#404040] font-[Outfit] text-[14px] md:text-[16px] font-normal leading-[24px] md:leading-[28px] max-w-3xl mx-auto">
        Build Brand Recognition as an Industry Leader and Increase Profitability
      </p>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-10 mb-12 px-2 sm:px-0">
        {serviceData.slice(0, visibleCount).map((service) => (
          <ServiceCard
            key={service.id}
            logo={service.logo}
            title={service.title}
            content={service.content}
          />
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < serviceData.length && (
        <div className="mt-8">
          <button
            onClick={() => setVisibleCount((prev) => prev + 9)}
            className="inline-flex items-center bg-[#018002] hover:bg-green-600 text-white text-md font-semibold px-10 py-3 rounded-full transition duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default ServiceSection;
