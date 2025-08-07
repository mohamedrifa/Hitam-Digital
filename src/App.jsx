import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServicePage from './pages/servicepage/ServicePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<ServicePage />} />
      </Routes>
    </Router>
  );
};

export default App;
