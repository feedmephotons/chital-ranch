import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Herd from './components/Herd';
import ForSale from './components/ForSale';
import Visit from './components/Visit';
import Contact from './components/Contact';
import RanchAI from './components/RanchAI';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/herd" element={<Herd />} />
            <Route path="/sale" element={<ForSale />} />
            <Route path="/visit" element={<Visit />} />
          </Routes>
        </main>
        <Contact />
        <RanchAI />
      </div>
    </Router>
  );
};

export default App;