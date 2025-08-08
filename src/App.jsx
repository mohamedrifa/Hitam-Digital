import { lazy, Suspense } from "react";
import {  Router, Routes, Route } from "react-router-dom";
import RouteLayout from "./layout/RouteLayout";

// ✅ lazy() must be given a function returning import()
const HomePage = lazy(() => import("./pages/HomePage"));

const App = () => {
  return (
   
      <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
              
          <Route element={<RouteLayout />}>
            <Route path="/" element={<HomePage />} />
            
          </Route>
        
        </Routes>
      </Suspense>
      
      </>
        
     
  
  );
};

export default App;
