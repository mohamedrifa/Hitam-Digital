import React, { lazy, Suspense } from "react";
import BlogSection from "../components/home/BlogSection";
import CTASection from "../components/home/CTASection";
import Footer from "../template/Footer";
import CaseStudySection from "../components/case_study/CaseStudySection";
import CaseStudyContent from "../components/case_study/CaseStudyDetail";

// ✅ lazy() must also be a function here
const OurClients = lazy(() => import("../components/home/OurClients"));
const FAQSection = lazy(()=>import("../components/home/FAQSection"));

const HomePage = () => {
  return (
    <div>

      <Suspense fallback={<div>Loading clients...</div>}>
        <OurClients />
        <FAQSection/>
        <BlogSection/>
        <CTASection/>
     
      </Suspense>
    </div>
  );
};

export default HomePage;
