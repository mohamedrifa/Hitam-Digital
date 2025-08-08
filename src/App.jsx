// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ServicePage from './pages/servicepage/ServicePage';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/service" element={<ServicePage />} />
//       </Routes>
//     </Router>
//   );
// };
import React from 'react'
import Navbar from './layout/Navbar'
import HeroSection from './components/homepage/HeroSection'
import HowWeWork from './components/homepage/HowWeWork'
import PortfolioSection from './components/homepage/PortfolioSection'


const App = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <HowWeWork />
    <PortfolioSection />
    </>
  )
}

export default App;
