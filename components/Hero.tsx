import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Shield, Heart, Dna, ArrowRight } from 'lucide-react';
import VideoCarousel from './VideoCarousel';

const Hero: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpg"
            alt="South Texas Ranch Sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ranch-navy/70 via-ranch-navy/40 to-ranch-navy/80"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 mt-16">
          <h2 className="text-ranch-gold uppercase tracking-[0.3em] text-sm md:text-base font-bold mb-6 animate-fade-in-up">
            South Texas
          </h2>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight drop-shadow-2xl">
            CR Fallow
          </h1>
          <p className="text-xl md:text-3xl text-ranch-gold font-serif italic mb-8">
            Chocolate Fallow Deer
          </p>
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto mb-12 font-light leading-relaxed drop-shadow-md">
            Dependable color, solid frames, and the kind of health and temperament that make them easy to work with.
            Built on proven Texas bloodlines.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/sale"
              className="px-10 py-4 bg-ranch-gold text-white font-bold uppercase tracking-wider hover:bg-amber-700 transition-all duration-300 rounded shadow-lg transform hover:-translate-y-1"
            >
              View Available Stock
            </Link>
            <Link
              to="/visit"
              className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-ranch-navy transition-all duration-300 rounded transform hover:-translate-y-1"
            >
              Schedule a Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome / Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-ranch-gold/10 rounded-full -z-10"></div>
              <img
                src="/images/mudslide.jpg"
                alt="Mudslide - Featured Chocolate Fallow Buck"
                className="rounded-lg shadow-2xl w-full object-cover h-[600px]"
              />
              <div className="absolute bottom-8 right-[-20px] bg-white p-6 shadow-xl rounded-lg max-w-xs hidden md:block border-l-4 border-ranch-gold">
                <p className="font-serif text-ranch-navy italic text-lg">"Quality you can see in the pasture."</p>
              </div>
            </div>
            <div>
              <span className="text-ranch-gold font-bold uppercase tracking-widest text-sm">Welcome to CR Fallow</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-ranch-navy mt-4 mb-8">
                Consistent Quality,<br/>
                <span className="text-ranch-gold italic">Proven Genetics</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                At CR Fallow, we focus on raising chocolate fallow deer with dependable color, solid frames, and the kind of health and temperament that make them easy to work with.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Our genetics come from respected Texas bloodlines — including contributions from some of the state's top programs — and we use those strengths to build a herd that is consistent, balanced, and reliable.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Whether you're adding to a breeding program or supplying a hunting ranch, our deer carry forward the qualities we work for every season — clean, healthy animals with predictable results and a strong foundation behind them.
              </p>
              <Link to="/about" className="group inline-flex items-center gap-2 text-ranch-navy font-bold uppercase tracking-wide border-b-2 border-ranch-gold pb-1 hover:text-ranch-gold transition-colors">
                Learn More About Us <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Teaser */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ranch-navy">Explore the Ranch</h2>
            <div className="w-24 h-1 bg-ranch-gold mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Link to="/herd" className="group cursor-pointer block">
              <div className="overflow-hidden rounded-lg mb-6 h-72 shadow-lg relative">
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                 <img
                   src="/images/herd-mixed.jpg"
                   alt="Our Herd"
                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                 />
              </div>
              <h3 className="text-2xl font-serif font-bold text-ranch-navy mb-2 group-hover:text-ranch-gold transition-colors">The Herd</h3>
              <p className="text-slate-600 mb-4">Proven Texas bloodlines with consistent chocolate color and balanced frames.</p>
              <span className="inline-flex items-center text-ranch-gold font-bold uppercase text-sm tracking-wider">
                Explore Genetics <ChevronRight size={16} />
              </span>
            </Link>

            <Link to="/visit" className="group cursor-pointer block">
              <div className="overflow-hidden rounded-lg mb-6 h-72 shadow-lg relative">
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                 <img
                   src="/images/herd-grazing.jpg"
                   alt="Ranch Visit"
                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                 />
              </div>
              <h3 className="text-2xl font-serif font-bold text-ranch-navy mb-2 group-hover:text-ranch-gold transition-colors">Visit Us</h3>
              <p className="text-slate-600 mb-4">See the herd firsthand at our South Texas operation.</p>
              <span className="inline-flex items-center text-ranch-gold font-bold uppercase text-sm tracking-wider">
                Plan Your Trip <ChevronRight size={16} />
              </span>
            </Link>

            <Link to="/sale" className="group cursor-pointer block">
               <div className="overflow-hidden rounded-lg mb-6 h-72 shadow-lg relative">
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                 <img
                   src="/images/does-pasture.jpg"
                   alt="For Sale"
                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                 />
              </div>
              <h3 className="text-2xl font-serif font-bold text-ranch-navy mb-2 group-hover:text-ranch-gold transition-colors">For Sale</h3>
              <p className="text-slate-600 mb-4">Live cover, covered does, yearlings, and breeder bucks available.</p>
              <span className="inline-flex items-center text-ranch-gold font-bold uppercase text-sm tracking-wider">
                View Listings <ChevronRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Carousel */}
      <VideoCarousel />

      {/* Parallax Strip */}
      <section className="py-32 relative bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/images/bucks-water.jpg')" }}>
        <div className="absolute inset-0 bg-ranch-navy/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Genetics That <span className="text-ranch-gold">Deliver</span>
          </h2>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed">
            We emphasize well-rounded genetic quality and use thoughtful outcrossing to continually strengthen the traits we value most.
          </p>
          <Link to="/herd" className="inline-block bg-white text-ranch-navy px-8 py-4 rounded font-bold uppercase hover:bg-ranch-gold hover:text-white transition-colors shadow-lg">
            Explore Our Genetics
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center px-4">
                <div className="w-20 h-20 bg-ranch-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Dna className="w-10 h-10 text-ranch-gold" />
                </div>
                <h3 className="text-xl font-bold text-ranch-navy mb-4">Proven Genetics</h3>
                <p className="text-slate-600">Consistent chocolate coloration, balanced frames, and clean structure from respected Texas bloodlines.</p>
              </div>
              <div className="text-center px-4">
                <div className="w-20 h-20 bg-ranch-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-ranch-gold" />
                </div>
                <h3 className="text-xl font-bold text-ranch-navy mb-4">Herd Health</h3>
                <p className="text-slate-600">Healthy, steady temperaments. Raised with care and managed for long-term quality and reliability.</p>
              </div>
              <div className="text-center px-4">
                <div className="w-20 h-20 bg-ranch-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-ranch-gold" />
                </div>
                <h3 className="text-xl font-bold text-ranch-navy mb-4">Integrity</h3>
                <p className="text-slate-600">Straightforward communication, honest representation of every animal, and a commitment to doing business the right way.</p>
              </div>
           </div>
         </div>
      </section>

      {/* Quote Banner */}
      <section className="py-24 bg-ranch-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <blockquote className="text-2xl md:text-3xl font-serif leading-relaxed mb-8 italic">
            "CR Fallow raises dependable, well-bred chocolate fallow deer with strong genetics, good structure, and a straightforward, honest approach to every sale."
          </blockquote>
          <cite className="text-ranch-gold font-bold tracking-widest uppercase not-italic">
            — Our Promise
          </cite>
        </div>
      </section>
    </div>
  );
};

export default Hero;
