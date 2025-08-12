import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ServiceDetailsJSON from "../../utils/servicedata/ServiceDetail.json";

const ServiceDetail = () => {
  const location = useLocation();
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    const path = location.pathname.replace("/", "") || "homepage";
    const matched = ServiceDetailsJSON.find((item) => item.page === path);
    setServiceData(matched || null);
  }, [location]);

  if (!serviceData) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  const { title, subtitle, content, img } = serviceData;

  return (
    <div className="relative bg-white mb-[60px] max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      {/* Title Section */}
      <div className="text-center mt-10">
        <h1 className="text-[#0B1508] text-[32px] md:text-[40px] lg:text-4xl font-semibold leading-[36px] md:leading-[48px]">
          {title}
        </h1>
        <p className="text-gray-900 text-[14px] lg:text-sm font-semibold mt-[14px]">
          {subtitle}
        </p>
      </div>

      {/* Content Section */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 items-start gap-2 mt-10">
        {/* Text Content */}
        <div className="relative z-10">
          <div className="text-[#404040] lg:min-w-2xl text-sm font-medium text-justify p-4">
            {content?.split("\n").map((para, index) => (
              <p key={index} className="mb-4">
                {para.trim()}
              </p>
            ))}
          </div>

          {/* Button */}
          <div className="mt-8 flex justify-center lg:justify-start">
            <button
              onClick={() => console.log("Schedule call clicked")}
              className="inline-flex items-center bg-[#018002] hover:bg-green-600 text-white text-sm font-semibold px-6 py-2 rounded-full transition duration-300"
            >
              Schedule Call
              <span className="ml-3 text-lg">→</span>
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="hidden lg:block relative">
          <img
            src={img}
            alt="Service visual"
            className="absolute top-0 right-[-50px] h-auto object-contain drop-shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
