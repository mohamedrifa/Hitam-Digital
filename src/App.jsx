// src/App.jsx
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader"; // your SimpleLoader default export

// Lazy-load pages
const ServicePage       = lazy(() => import("./pages/servicepage/ServicePage"));
const RouteLayout       = lazy(() => import("./layout/RouteLayout"));
const ContactPage       = lazy(() => import("./pages/contactuspage/ContactUsPage"));
const ErrorPage         = lazy(() => import("./pages/errorpage/ErrorPage"));
const CareerPage        = lazy(() => import("./pages/careerPage/CareerPage"));
const BlogPage          = lazy(() => import("./pages/blogpage/BlogPage"));
const HomePage          = lazy(() => import("./pages/homepage/HomePage"));
const CaseStudyPage     = lazy(() => import("./pages/casestudy/CaseStudyPage"));
const CaseStudyOverview = lazy(() => import("./pages/casestudy/CaseStudyOverview"));
const Testimonial       = lazy(() => import("./pages/testimonial/Testimonial"));
const Aboutus           = lazy(() => import("./pages/about_us/Aboutus"));

const App = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-white">
            <Loader
              size={90}
              color="transparent"   // primary (transparent)
              accent="#018002"      // sharp accent band
              speed={2}             // rotation speed of the stroke color
              label="Loading..."
            />
          </div>
        }
      >
        <Routes>
          {/* Pages that should show Navbar/CTA/Footer */}
          <Route element={<RouteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/contactus" element={<ContactPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/projects" element={<CaseStudyPage />} />
            <Route path="/projects/:slug" element={<CaseStudyOverview />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/about_us" element={<Aboutus />} />
          </Route>

          {/* Catch-all 404 WITHOUT layout */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;