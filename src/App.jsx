import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServicePage from './pages/servicepage/ServicePage';
import RouteLayout from './layout/RouteLayout';
import ContactPage from './pages/contactuspage/ContactUsPage';
import ErrorPage from './pages/errorpage/ErrorPage';
import CareerPage from './pages/careerPage/CareerPage';
import BlogPage from './pages/blogpage/BlogPage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Pages that should show Navbar/CTA/Footer */}
        <Route element={<RouteLayout />}>
          <Route path="/service" element={<ServicePage />} />
          <Route path="/contactus" element={<ContactPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/blogs" element={<BlogPage />} />
        </Route>

        {/* Catch-all 404 WITHOUT layout */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
