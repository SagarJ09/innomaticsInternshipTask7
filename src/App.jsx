import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import ServiceDetails from './components/ServicesDetails';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div>
        
        <nav>
          <NavLink to="/" end activeClassName="active">Home</NavLink>
          <NavLink to="/about" activeClassName="active">About</NavLink>
          <NavLink to="/services" activeClassName="active">Service</NavLink>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/*" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
