import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Events from './pages/events/Event';
import Home from './pages/home/Home';
import AboutUs from './pages/about/AboutUs'; // adjust path as needed
import Contactus from './pages/contact/Contactus';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contactus />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
