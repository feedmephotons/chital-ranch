import React from 'react';
import { Target, ShieldCheck, Leaf } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="relative py-24 bg-ranch-charcoal">
        <div className="absolute inset-0 opacity-30">
           <img
            src="/images/herd-grazing.jpg"
            alt="Herd Grazing"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">A South Texas fallow operation focused on consistent chocolate genetics.</p>
        </div>
      </div>

      {/* History Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-ranch-gold"></div>
                <span className="text-ranch-gold uppercase tracking-widest text-sm font-bold">Our Story</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-ranch-navy mb-6">
                Built on <span className="italic text-ranch-gold">Purpose & Integrity</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Chital Ranch is a South Texas fallow operation focused on consistent chocolate genetics and dependable herd development. We raise our deer with close attention to health, temperament, and long-term quality.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Our genetics come from respected Texas bloodlines — including contributions from some of the state's top programs — and we use those strengths to build a herd that is consistent, balanced, and reliable.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                We work with buyers and other ranches to match them with the right deer for their goals. Integrity and reliability drive every decision, from breeding to sale.
              </p>

              <div className="flex gap-8 mt-8">
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-bold text-ranch-gold font-serif">TX</span>
                    <span className="text-sm uppercase tracking-wider text-slate-500 mt-2">South Texas</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-bold text-ranch-gold font-serif">100%</span>
                    <span className="text-sm uppercase tracking-wider text-slate-500 mt-2">Chocolate Focus</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-bold text-ranch-gold font-serif">Proven</span>
                    <span className="text-sm uppercase tracking-wider text-slate-500 mt-2">Bloodlines</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 border-2 border-ranch-gold opacity-20 rounded-lg transform rotate-2"></div>
              <img
                src="/images/buck-front.png"
                alt="Chocolate Fallow Buck"
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
                <h2 className="text-3xl font-serif font-bold text-ranch-navy">What We Stand For</h2>
                <div className="w-24 h-1 bg-ranch-gold mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border-b-4 border-ranch-gold hover:-translate-y-2 transition-transform duration-300">
                    <div className="bg-ranch-navy/5 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <Target className="h-8 w-8 text-ranch-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-ranch-navy text-center mb-4">Genetic Excellence</h3>
                    <p className="text-slate-600 text-center leading-relaxed">
                        Our breeding program focuses on well-rounded chocolate fallow genetics, using structured pairings and selective outcrossing to strengthen color, structure, and long-term herd health.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border-b-4 border-ranch-gold hover:-translate-y-2 transition-transform duration-300">
                    <div className="bg-ranch-navy/5 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <ShieldCheck className="h-8 w-8 text-ranch-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-ranch-navy text-center mb-4">Integrity First</h3>
                    <p className="text-slate-600 text-center leading-relaxed">
                        We stand behind what we sell with honest representation and a commitment to helping buyers find the right fit for their goals. Straightforward communication, no exceptions.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border-b-4 border-ranch-gold hover:-translate-y-2 transition-transform duration-300">
                    <div className="bg-ranch-navy/5 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <Leaf className="h-8 w-8 text-ranch-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-ranch-navy text-center mb-4">Consistent Management</h3>
                    <p className="text-slate-600 text-center leading-relaxed">
                        Every animal represents our standard for quality — healthy, and true to type. Raised with care and managed for reliable results across each generation.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="grid grid-cols-2 md:grid-cols-4">
        <img src="/images/two-deer.jpg" alt="Deer" className="w-full h-64 object-cover hover:opacity-90 transition-opacity" />
        <img src="/images/deer-grazing.jpg" alt="Grazing" className="w-full h-64 object-cover hover:opacity-90 transition-opacity" />
        <img src="/images/bucks-water.jpg" alt="Bucks at Water" className="w-full h-64 object-cover hover:opacity-90 transition-opacity" />
        <img src="/images/herd-mixed.jpg" alt="Mixed Herd" className="w-full h-64 object-cover hover:opacity-90 transition-opacity" />
      </section>
    </div>
  );
};

export default About;
