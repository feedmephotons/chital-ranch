import React from 'react';
import { Target, ShieldCheck, Leaf, Map, History, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="relative py-24 bg-ranch-charcoal">
        <div className="absolute inset-0 opacity-30">
           <img 
            src="https://image.pollinations.ai/prompt/south%20texas%20brush%20country%20panorama%20stormy%20sky%20green%20vegetation%20photorealistic?width=1920&height=600&nologo=true&seed=501" 
            alt="Ranch Panorama" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Stewards of the land, guardians of the breed.</p>
        </div>
      </div>

      {/* History Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-ranch-gold"></div>
                <span className="text-ranch-gold uppercase tracking-widest text-sm font-bold">Our History</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-ranch-navy mb-6">
                Rooted in <span className="italic text-ranch-gold">Texas Soil</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Established in Floresville, Texas, Chital Ranch began as a passion project that evolved into one of the state's premier breeding operations for Chocolate Fallow Deer. What started with a single trio of high-pedigree animals has grown into a carefully managed herd representing the finest genetics available.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Our founders recognized a gap in the market for consistent, high-quality chocolate fallow genetics. Too often, breeders were sacrificing hardiness for antler growth, or vice versa. At Chital Ranch, we proved you could have both.
              </p>
              
              <div className="flex gap-8 mt-8">
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-bold text-ranch-gold font-serif">10+</span>
                    <span className="text-sm uppercase tracking-wider text-slate-500 mt-2">Years Breeding</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-bold text-ranch-gold font-serif">500+</span>
                    <span className="text-sm uppercase tracking-wider text-slate-500 mt-2">Acres Managed</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-bold text-ranch-gold font-serif">100%</span>
                    <span className="text-sm uppercase tracking-wider text-slate-500 mt-2">Satisfaction</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-ranch-gold opacity-20 rounded-lg transform rotate-2"></div>
              <img 
                src="https://image.pollinations.ai/prompt/portrait%20of%20a%20rugged%20texas%20rancher%20looking%20out%20at%20sunrise%20photorealistic?width=800&height=1000&nologo=true&seed=502" 
                alt="Rancher overlooking herd" 
                className="w-full rounded-lg shadow-xl relative z-10" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-serif font-bold text-ranch-navy">Our Core Values</h2>
                <div className="w-24 h-1 bg-ranch-gold mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border-b-4 border-ranch-gold hover:-translate-y-2 transition-transform duration-300">
                    <div className="bg-ranch-navy/5 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <Target className="h-8 w-8 text-ranch-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-ranch-navy text-center mb-4">Genetic Excellence</h3>
                    <p className="text-slate-600 text-center leading-relaxed">
                        We utilize data-driven breeding decisions to continually improve antler mass, body conformation, and disease resistance in our herd.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border-b-4 border-ranch-gold hover:-translate-y-2 transition-transform duration-300">
                    <div className="bg-ranch-navy/5 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <ShieldCheck className="h-8 w-8 text-ranch-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-ranch-navy text-center mb-4">Integrity First</h3>
                    <p className="text-slate-600 text-center leading-relaxed">
                        In an industry built on reputation, we stand by ours. Honest representation of our animals and transparent business practices are non-negotiable.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border-b-4 border-ranch-gold hover:-translate-y-2 transition-transform duration-300">
                    <div className="bg-ranch-navy/5 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <Leaf className="h-8 w-8 text-ranch-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-ranch-navy text-center mb-4">Land Stewardship</h3>
                    <p className="text-slate-600 text-center leading-relaxed">
                        We believe that healthy soil creates healthy animals. Our rotational grazing and habitat management practices ensure a sustainable future.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="grid grid-cols-2 md:grid-cols-4">
        <img src="https://image.pollinations.ai/prompt/macro%20shot%20of%20deer%20fur%20texture%20chocolate%20brown%20photorealistic?width=600&height=600&nologo=true&seed=503" alt="Deer Texture" className="w-full h-64 object-cover hover:opacity-90 transition-opacity" />
        <img src="https://image.pollinations.ai/prompt/field%20of%20bluebonnets%20flowers%20in%20texas%20sunny%20day%20photorealistic?width=600&height=600&nologo=true&seed=504" alt="Texas Wildflowers" className="w-full h-64 object-cover hover:opacity-90 transition-opacity" />
        <img src="https://image.pollinations.ai/prompt/barbed%20wire%20fence%20post%20close%20up%20sunset%20bokeh%20photorealistic?width=600&height=600&nologo=true&seed=505" alt="Fence Line" className="w-full h-64 object-cover hover:opacity-90 transition-opacity" />
        <img src="https://image.pollinations.ai/prompt/two%20bucks%20locking%20antlers%20in%20field%20photorealistic?width=600&height=600&nologo=true&seed=506" alt="Bucks Sparring" className="w-full h-64 object-cover hover:opacity-90 transition-opacity" />
      </section>
    </div>
  );
};

export default About;