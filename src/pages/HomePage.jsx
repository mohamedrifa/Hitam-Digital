import React, { lazy, Suspense } from "react";

// ✅ lazy() must also be a function here
const OurClients = lazy(() => import("../components/Home/OurClients"));

const HomePage = () => {
  return (
    <div>

      <Suspense fallback={<div>Loading clients...</div>}>
        <OurClients />
      </Suspense>
    </div>
  );
};

export default HomePage;
