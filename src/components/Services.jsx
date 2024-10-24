import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';


const Services = () => {
  return (
    <div>
      <h1>Our Services</h1>
      <ul>
        <li><Link to="design">Design</Link></li>
        <li><Link to="development">Development</Link></li>
      </ul>

      <Routes>
        <Route path="design" element={<ServiceDetails serviceName="Design" />} />
        <Route path="development" element={<ServiceDetails serviceName="Development" />} />
      </Routes>
    </div>
  );
};

export default Services;
