import React from 'react';
import service1 from '../../assets/servicesection/icons/service_icon1.png';
import service2 from '../../assets/servicesection/icons/service_icon2.png';
import service3 from '../../assets/servicesection/icons/service_icon3.png';

const ServiceCard = ({ highlight, description, index }) => {
  const handleClick = () => {
    alert('Card clicked!');
  };

  const iconSelect = () => {
    const icons = [service1, service2, service3];
    return icons[index % icons.length];
  };

  return (
    <div
      onClick={handleClick}
      role="button"
      className="flex flex-col md:flex-col items-center md:items-start w-full md:w-[376.67px] h-[327px] md:h-[432px] 
                 px-5 md:px-[18px] pt-5 md:pt-5 pb-5 md:pb-[69.166px] rounded-[16px] backdrop-blur-[8.9px]
                 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02] hover:border-green-600 bg-gradient-to-tl from-[#F7C700]/20 to-[#F7C500]/10"
    >
      {/* Icon + Highlight Row */}
      <div className="flex items-center space-x-3 mb-3 w-full">
        <img
          src={iconSelect()}
          alt="icon"
          className="w-[32px] h-[32px] md:w-[54.83px] md:h-[54.83px] object-contain"
        />
        <h3 className="text-left text-[#018002] font-bold leading-[26.4px] underline underline-offset-[2px]
                       text-md md:text-xl">
          {highlight}
        </h3>
      </div>

      {/* Description */}
      <p className="text-[#404040] text-sm md:text-[15px] leading-[26px] text-justify font-normal">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
