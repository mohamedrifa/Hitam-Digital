import React, { useRef, useEffect } from "react";
import { FaStar } from 'react-icons/fa';
import GoogleLogo from '../../assets/servicesection/google.png';
import ClutchLogo from '../../assets/servicesection/clutch.png';
import UpCityLogo from '../../assets/servicesection/upcity.png';

const reviews = [
  {
    platform: 'Google',
    reviews: '150+ REVIEWS',
    stars: 5,
    logo: GoogleLogo,
  },
  {
    platform: 'Clutch',
    reviews: '50+ REVIEWS',
    stars: 5,
    logo: ClutchLogo,
  },
  {
    platform: 'UpCity',
    reviews: '50+ REVIEWS',
    stars: 5,
    logo: UpCityLogo,
  },
];


const textClass =
  'text-[#404040] text-[16px] font-normal leading-[28px] text-justify';

const highlightClass =
  'text-[#018002] font-bold underline decoration-solid';

const MarketingInfo = () => {
  const scrollRef = useRef(null);
  const currentIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        currentIndex.current = (currentIndex.current + 1) % reviews.length;
        const scrollAmount = container.clientWidth * currentIndex.current;
        container.scrollTo({
          left: scrollAmount,
          behavior: 'smooth',
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
      <div
        ref={scrollRef}
        className="w-full overflow-x-auto md:overflow-x-visible snap-x snap-mandatory scroll-smooth flex md:justify-around items-center gap-8 md:gap-0 px-4 md:px-0 scrollbar-hide "
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
            <p className="text-green-700 font-semibold text-sm">{item.reviews}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default MarketingInfo;


