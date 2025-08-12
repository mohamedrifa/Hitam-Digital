import React, { lazy, Suspense } from "react";
import HeroSection from "../../components/Home/HeroSection";
import CTASection from "../../components/Home/CTASection";
import HowWeWork from "../../components/Home/HowWeWork";
import PortfolioSection from "../../components/Home/PortfolioSection";
import CompactBlogSection from "../../components/Home/BlogSection";



// ✅ lazy() must also be a function here
const OurClients = lazy(() => import("../../components/home/OurClients"));
const FAQSection = lazy(()=>import("../../components/home/FAQSection"));

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
        <CTASection/>
      </Suspense>
    </div>
  );
};

export default HomePage;
