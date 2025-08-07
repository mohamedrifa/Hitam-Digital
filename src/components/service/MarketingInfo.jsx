import React from 'react';
import TwoPersonImg from '../../assets/images/service/twoperson.png';
import DigitalImg from '../../assets/images/service/digital1.png';

const MarketingInfo = () => {
  return (
    <div className="relative bg-white py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start font-[Outfit]">
      {/* Left Content */}
      <div className="space-y-4 text-gray-700">
        <p>
          <strong>Hitam Internet Marketing Agency</strong> is a dynamic, versatile and <span className="text-green-600 font-semibold">full-service digital marketing agency</span> that doesn’t rely on smoke and mirrors to attract new clients. Instead, Thrive trusts its own search engine optimization (SEO) and marketing skills to drive new customers to our website.
        </p>
        <p>
          We’re not a static company. We don’t limit ourselves to specific industries. Thrive has the experience and professionals to build a custom website and use multiple digital marketing services to assist any size company in <span className="text-green-600 font-semibold">any industry</span>.
        </p>
        <p>
          So many other agencies rely on a one-size-fits-all approach, offering you the same cookie-cutter website and strategies as your competitor down the street.
        </p>
      </div>

      {/* Image 1 */}
      <div className="overflow-hidden rounded-[16px]">
  <img
    src={DigitalImg}
    alt="Thumbs Up Executive"
    className="flex-1 mx-auto mb-4 object-contain transition-transform duration-300 hover:scale-105"
  />
</div>

      {/* Image 2 */}
      <div className="overflow-hidden rounded-[16px]">
  <img
    src={TwoPersonImg}
    alt="Team Members"
    className="flex-1 object-cover transition-transform duration-300 hover:scale-105"
  />
</div>

      {/* Info Box */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Hitam Digital<br />Digital Marketing Agency</h3>
        <p className="text-[16px] text-[#404040] font-[400] leading-[28px] font-[Outfit]">
          Thrive works with you to produce customized internet marketing services and a plan that aligns with your unique business needs. We become an extension of your team, a partner that understands your market and goals, rather than just an agency that executes strategies blindly.
        </p>
        <p className="text-[16px] text-[#404040] font-[400] leading-[28px] font-[Outfit] mt-2">
          Unlike so many other agencies that use glitz and glamour to close sales and then fail to execute, Thrive focuses on client relationships and results. We always deliver substance, not false promises, ensuring we maximize your budget, so you get the most return on investment (ROI).
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Our <span className="text-[#018002] font-[700] underline underline-offset-auto decoration-solid">reviews and testimonials</span> speak volumes. We earn your business every day with month-to-month contracts. Take a look below at the wide variety of digital marketing services Thrive offers. <span className="text-[#018002] font-[700] underline underline-offset-auto decoration-solid">Contact us today</span> to learn more about how we can help your business!
        </p>
      </div>
    </div>
  );
};

export default MarketingInfo;
