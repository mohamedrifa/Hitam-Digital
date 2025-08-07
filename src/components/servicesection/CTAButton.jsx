import React from 'react';

const CTAButton = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-[42px] px-8 py-4 
        bg-[#018002] text-white text-[16px] font-[700] font-['Plus_Jakarta_Sans'] 
        leading-[140%] tracking-[-0.32px] rounded-[70px] 
        transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_20px_#018002] ${className}`}
    >
      {children}
    </button>
  );
};

export default CTAButton;
