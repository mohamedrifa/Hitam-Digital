import { lazy, Suspense } from "react";
import {  Router, Routes, Route } from "react-router-dom";
import RouteLayout from "./layout/RouteLayout";
import CaseStudyPage from "./pages/CaseStudyPage";
import CaseStudyOverview from "./pages/CaseStudyOverview";
import Testimonial from "./pages/testimonial/Testimonial";

// ✅ lazy() must be given a function returning import()
const HomePage = lazy(() => import("./pages/HomePage"));

const App = () => {
  return (
   
      <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
              
          <Route element={<RouteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<CaseStudyPage/>}/>
            <Route path="/projects/:slug" element={<CaseStudyOverview/>}/>
            <Route path="/testimonial" element={<Testimonial />} />

            
          </Route>
        
        </Routes>
      </Suspense>
      
      </>
        
     
  
  );
};

export default App;

