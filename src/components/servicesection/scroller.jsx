import React, { useRef, useEffect } from 'react';
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

const Scroller = () => {
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

    return(
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
    )
}
export default Scroller;