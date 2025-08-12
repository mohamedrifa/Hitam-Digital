import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import services from '../../utils/servicedata/ServiceCard.json';

const MarketingServices = () => {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    setServiceData(services);
  }, []);

  return (
    <div className="relative bg-white pb-10 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto text-center mt-[60px] sm:mt-[80px] md:mt-[90px]">
      <h2 className="text-[#0B1508] text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-[36px]">
        Hitam Digital Marketing Services
      </h2>

      <p className="mt-4 text-[#404040] font-[Outfit] text-[14px] md:text-[16px] font-normal leading-[24px] md:leading-[28px] max-w-3xl mx-auto">
        Build Brand Recognition as an Industry Leader and Increase Profitability
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-10 mb-12 px-2 sm:px-0">
        {serviceData.map((service, index) => (
          <ServiceCard key={index} {...service} index={index} />
        ))}
      </div>

       <div className="mt-8">
          <button
            onClick={() => console.log('get start')}
            className="inline-flex items-center bg-[#018002] hover:bg-green-600 text-white text-md font-semibold px-10 py-3 rounded-full transition duration-300"
          >
            Get Start Now
          </button>
        </div>
    </div>
  );
};

export default MarketingServices;
