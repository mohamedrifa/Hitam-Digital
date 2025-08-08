import React from 'react';
import Navbar from './layout/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ServicePage from './pages/servicepage/ServicePage';
import ContactUs from './components/contactus/ContactUs';

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/service" element={<ServicePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
