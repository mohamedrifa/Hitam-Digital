import React, { lazy, Suspense } from "react";

// ✅ lazy() must also be a function here
const OurClients = lazy(() => import("../components/home/OurClients"));
const FAQSection = lazy(()=>import("../components/home/FAQSection"));

const HomePage = () => {
  return (
    <div>

      <Suspense fallback={<div>Loading clients...</div>}>
        <OurClients />
        <FAQSection/>
      </Suspense>
    </div>
  );
};

export default HomePage;
