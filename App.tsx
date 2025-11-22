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

// SEO Landing Pages
import {
  ChocolateFallowDeerForSaleTexas,
  ChocolateFallowDeerBreedersTexas,
  FallowDeerBreedingStockTexas,
  FallowDeerForHuntingRanchesTexas,
  ChocolateFallowBucksForSale,
  ChocolateFallowDoesForSale,
  SouthTexasFallowDeerRanch,
  FallowDeerGeneticsTexas,
  BuyFallowDeerTexas,
  TexasExoticDeerBreeders,
  FallowDeerYearlingsForSaleTexas,
  BreederBucksFallowDeerTexas,
  ChocolateFallowDeerFloresvilleTX,
  FallowDeerStockingTexasRanches,
  QualityFallowDeerBloodlinesTexas,
} from './components/landing';

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

            {/* SEO Landing Pages */}
            <Route path="/chocolate-fallow-deer-for-sale-texas" element={<ChocolateFallowDeerForSaleTexas />} />
            <Route path="/chocolate-fallow-deer-breeders-texas" element={<ChocolateFallowDeerBreedersTexas />} />
            <Route path="/fallow-deer-breeding-stock-texas" element={<FallowDeerBreedingStockTexas />} />
            <Route path="/fallow-deer-for-hunting-ranches-texas" element={<FallowDeerForHuntingRanchesTexas />} />
            <Route path="/chocolate-fallow-bucks-for-sale" element={<ChocolateFallowBucksForSale />} />
            <Route path="/chocolate-fallow-does-for-sale" element={<ChocolateFallowDoesForSale />} />
            <Route path="/south-texas-fallow-deer-ranch" element={<SouthTexasFallowDeerRanch />} />
            <Route path="/fallow-deer-genetics-texas" element={<FallowDeerGeneticsTexas />} />
            <Route path="/buy-fallow-deer-texas" element={<BuyFallowDeerTexas />} />
            <Route path="/texas-exotic-deer-breeders" element={<TexasExoticDeerBreeders />} />
            <Route path="/fallow-deer-yearlings-for-sale-texas" element={<FallowDeerYearlingsForSaleTexas />} />
            <Route path="/breeder-bucks-fallow-deer-texas" element={<BreederBucksFallowDeerTexas />} />
            <Route path="/chocolate-fallow-deer-floresville-tx" element={<ChocolateFallowDeerFloresvilleTX />} />
            <Route path="/fallow-deer-stocking-texas-ranches" element={<FallowDeerStockingTexasRanches />} />
            <Route path="/quality-fallow-deer-bloodlines-texas" element={<QualityFallowDeerBloodlinesTexas />} />
          </Routes>
        </main>
        <Contact />
        <RanchAI />
      </div>
    </Router>
  );
};

export default App;