import React, { lazy, Suspense } from "react";
import BlogSection from "../components/home/BlogSection";
import CTASection from "../components/home/CTASection";
import HeroSection from "../components/Home/HeroSection";
import HowWeWork from "../components/Home/HowWeWork";
import PortfolioSection from "../components/Home/PortfolioSection";

// ✅ lazy() must also be a function here
const OurClients = lazy(() => import("../components/home/OurClients"));
const FAQSection = lazy(()=>import("../components/home/FAQSection"));

const HomePage = () => {
  return (
    <div>

      <Suspense fallback={<div>Loading clients...</div>}>
        <HeroSection/>
        <HowWeWork />
        <PortfolioSection />
        <OurClients />
        <FAQSection/>
        <BlogSection/>
        <CTASection/>
     
      </Suspense>
    </div>
  );
};

export default HomePage;
