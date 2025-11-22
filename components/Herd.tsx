import React from 'react';
import { Dna, Scale, Activity, Heart, Shield, Target } from 'lucide-react';

const Herd: React.FC = () => {
  return (
    <div className="pt-20">
       {/* Header */}
       <div className="relative py-24 bg-ranch-charcoal">
        <div className="absolute inset-0 opacity-40">
           <img
            src="/images/herd-grazing.jpg"
            alt="Herd Grazing"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold text-white mb-4">Our Genetics</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Texas bloodlines. Proven performance. Consistent results.</p>
        </div>
      </div>

      {/* Main Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
             <div className="order-2 md:order-1">
               <img
                 src="/images/buck-featured.jpg"
                 alt="Trophy Chocolate Fallow Buck"
                 className="rounded-xl shadow-2xl"
               />
             </div>
             <div className="order-1 md:order-2">
               <h2 className="text-3xl font-serif font-bold text-ranch-navy mb-6">What Sets Our Genetics Apart</h2>
               <p className="text-slate-600 text-lg leading-relaxed mb-6">
                 From our foundation stock to our current breeding lineup, every animal at Chital Ranch has been selected with one goal in mind: producing offspring that perform. We focus on dependable chocolate color, solid frames, and animals that are built to thrive in South Texas conditions.
               </p>
               <p className="text-slate-600 text-lg leading-relaxed mb-6">
                 Our program emphasizes bucks with wide, heavy palmation and does with proven maternal instincts. We believe that a great trophy starts with a great mother, and we're committed to producing animals that deliver consistent results year after year.
               </p>
               <p className="text-slate-600 text-lg leading-relaxed">
                 Whether you're looking for breeder bucks, stocker does, or foundation genetics to build your own program, you'll find animals here that have been developed with care and purpose.
               </p>
             </div>
          </div>

          {/* Breeding Pillars */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-ranch-navy mb-4">Our Breeding Philosophy</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Three pillars guide every decision we make in our breeding program.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center shadow-sm mb-6">
                <Dna className="text-ranch-gold" size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-ranch-navy mb-3">Proven Genetics</h3>
              <p className="text-slate-600">
                Our bloodlines come from respected Texas breeders with documented track records. We don't chase trends—we build on genetics that consistently produce quality offspring generation after generation.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center shadow-sm mb-6">
                <Scale className="text-ranch-gold" size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-ranch-navy mb-3">Solid Frames</h3>
              <p className="text-slate-600">
                Antlers are important, but body size supports them. We select for large-framed animals that can withstand the South Texas heat and produce robust offspring that perform well on any ranch.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center shadow-sm mb-6">
                <Heart className="text-ranch-gold" size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-ranch-navy mb-3">Herd Health</h3>
              <p className="text-slate-600">
                We maintain a comprehensive health protocol including regular veterinary oversight, quality nutrition programs, and strict biosecurity measures. Healthy animals produce healthy offspring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="py-24 bg-ranch-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white">Featured Bucks</h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">The foundation of our breeding program. These bucks represent the quality and consistency we're known for.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-2xl">
              <div className="h-80 overflow-hidden">
                <img
                  src="/images/buck-featured.jpg"
                  alt="Featured Buck"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-serif font-bold text-ranch-gold">Breeder Buck</h3>
                  <span className="bg-slate-700 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">Foundation Sire</span>
                </div>
                <ul className="space-y-2 text-slate-300 mb-6">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-ranch-gold rounded-full"></span> Wide Palmation</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-ranch-gold rounded-full"></span> Deep Chocolate Color</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-ranch-gold rounded-full"></span> Exceptional Frame</li>
                </ul>
                <p className="text-slate-400 italic">Known for passing on exceptional palm width and consistent chocolate coloring.</p>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-2xl">
              <div className="h-80 overflow-hidden">
                <img
                  src="/images/buck-front.png"
                  alt="Trophy Buck"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-serif font-bold text-ranch-gold">Herd Sire</h3>
                  <span className="bg-slate-700 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">Active Breeder</span>
                </div>
                <ul className="space-y-2 text-slate-300 mb-6">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-ranch-gold rounded-full"></span> Heavy Mass Genetics</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-ranch-gold rounded-full"></span> Proven Performance</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-ranch-gold rounded-full"></span> South Texas Hardy</li>
                </ul>
                <p className="text-slate-400 italic">Produces offspring with solid frames and dependable chocolate color.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-ranch-navy mb-4">Around the Ranch</h2>
            <p className="text-slate-600">A glimpse of our herd in their natural South Texas habitat.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src="/images/herd-grazing.jpg" alt="Herd grazing" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src="/images/bucks-water.jpg" alt="Bucks at water" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src="/images/does-pasture.jpg" alt="Does in pasture" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src="/images/deer-grazing.jpg" alt="Deer grazing" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Herd;