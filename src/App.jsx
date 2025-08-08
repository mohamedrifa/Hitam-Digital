import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServicePage from './pages/servicepage/ServicePage';
import ContactUs from './pages/contactuspage/ContactUs';


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/service" element={<ServicePage />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
