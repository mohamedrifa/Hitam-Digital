import React, { lazy, Suspense } from "react";
import HeroSection from "../../components/ahjhj/HeroSection";
import HowWeWork from "../../components/ahjhj/HowWeWork";
import PortfolioSection from "../../components/ahjhj/PortfolioSection";
import CompactBlogSection from "../../components/ahjhj/BlogSection";



// ✅ lazy() must also be a function here
const OurClients = lazy(() => import("../../components/ahjhj/OurClients"));
const FAQSection = lazy(()=>import("../../components/ahjhj/FAQsection"));

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
