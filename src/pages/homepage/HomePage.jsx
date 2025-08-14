import React, { lazy, Suspense } from "react";
import HeroSection from "../../components/home/HeroSection";
import HowWeWork from "../../components/home/HowWeWork";
import PortfolioSection from "../../components/home/PortfolioSection";
import CompactBlogSection from "../../components/home/BlogSection";



// ✅ lazy() must also be a function here
const OurClients = lazy(() => import("../../components/home/OurClients"));
const FAQSection = lazy(()=>import("../../components/home/FAQsection"));

const HomePage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading clients...</div>}>
        <HeroSection />
        <HowWeWork />
        <PortfolioSection />
        <OurClients />
        <FAQSection/>
        <CompactBlogSection />
      </Suspense>
    </div>
  );
};

export default HomePage;
