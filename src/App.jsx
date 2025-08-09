import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServicePage from './pages/servicepage/ServicePage';
import RouteLayout from './layout/RouteLayout';
import ContactPage from './pages/contactuspage/ContactUsPage';
import ErrorPage from './pages/errorpage/ErrorPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<RouteLayout />}>
          <Route path="/service" element={<ServicePage />} />
          <Route path="/contactus" element={<ContactPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
