import React, { useState, useEffect } from 'react';
import { HomeIcon } from '@heroicons/react/24/outline';
import { useLocation, Link } from 'react-router-dom';
import ServiceData from '../../utils/serviceData.json';
import vector1 from '../../assets/servicesection/vector_1.png';
import vector2 from '../../assets/servicesection/vector_2.png';

const HeroSectionOne = () => {
  const location = useLocation();
  const [heroContent, setHeroContent] = useState(null);

  useEffect(() => {
    const path = location.pathname.replace("/", "") || "homepage";
    const matched = ServiceData.find((item) => item.page === path);
    setHeroContent(matched);
  }, [location]);

  if (!heroContent) {
    return (
      <section className="py-24 text-center">
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="mt-2 text-gray-500">We couldn't find content for this section.</p>
      </section>
    );
  }

  const { title, subtitle,page } = heroContent;

  return (
    <section className="relative bg-white overflow-hidden space-y-44 pt-24 pb-16">
      {/* Decorative Background Images */}
      <img
        src={vector2}
        alt="decorative vector"
        className="absolute -top-24 -right-28 w-72 md:w-[400px] opacity-80 pointer-events-none select-none"
      />
      <img
        src={vector1}
        alt="decorative vector"
        className="absolute -bottom-40 -left-28 w-72 md:w-[400px] opacity-80 pointer-events-none select-none"
      />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-6xl font-semibold leading-snug whitespace-pre-line">
          {title}
        </h1>
        <p className="mt-4 text-sm font-medium text-gray-600">{subtitle}</p>

        <div className="mt-8">
          <button
            onClick={() => console.log('Schedule call clicked')}
            className="inline-flex items-center bg-[#018002] hover:bg-green-600 text-white text-sm font-semibold px-6 py-2 rounded-full transition duration-300"
          >
            Schedule Call
            <span className="ml-3 text-lg">→</span>
          </button>
        </div>
      </div>

      {/* Breadcrumb Section */}
      <div className="w-full h-12 bg-gradient-to-br from-[#F7c500]/20 to-[#F7C500] flex items-center justify-center space-x-1 text-gray-700 ">
        <Link to="/" className="flex items-center space-x-1 text-gray-700 hover:underline">
          <HomeIcon className="w-5 h-5 text-gray-600" />
          <span className="font-medium">Home /</span>
        </Link>
        <span className="font-medium text-[#018002]">{page}</span>
      </div>
    </section>
  );
};

export default HeroSectionOne;
