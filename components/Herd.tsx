import React from 'react';
import { Dna, Scale, Activity } from 'lucide-react';

const Herd: React.FC = () => {
  return (
    <div className="pt-20">
       {/* Header */}
       <div className="relative py-24 bg-ranch-charcoal">
        <div className="absolute inset-0 opacity-30">
           <img 
            src="https://image.pollinations.ai/prompt/herd%20of%20dark%20fallow%20deer%20grazing%20under%20oak%20trees%20panorama%20photorealistic?width=1920&height=600&nologo=true&seed=601" 
            alt="Herd Grazing" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold text-white mb-4">The Herd</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Genetics refined for the discerning breeder.</p>
        </div>
      </div>

      {/* Main Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
             <div className="order-2 md:order-1">
               <img 
                 src="https://image.pollinations.ai/prompt/close%20up%20of%20chocolate%20fallow%20buck%20head%20large%20antlers%20photorealistic?width=800&height=600&nologo=true&seed=602" 
                 alt="Trophy Buck" 
                 className="rounded-xl shadow-2xl"
               />
             </div>
             <div className="order-1 md:order-2">
               <h2 className="text-3xl font-serif font-bold text-ranch-navy mb-6">The Chocolate Advantage</h2>
               <p className="text-slate-600 text-lg leading-relaxed mb-6">
                 At Chital Ranch, we specialize exclusively in the Chocolate color phase of Fallow Deer (Dama dama). This rich, dark coat changes with the seasons—from a deep, glossy cocoa in the summer to a shaggy, grayish-brown in the winter—but always retains that distinctive character.
               </p>
               <p className="text-slate-600 text-lg leading-relaxed">
                 Our program focuses on producing bucks with wide, heavy palmation and does with superior maternal instincts. We believe that a great trophy starts with a great mother.
               </p>
             </div>
          </div>

          {/* Breeding Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center shadow-sm mb-6">
                <Dna className="text-ranch-gold" size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-ranch-navy mb-3">Genetic Diversity</h3>
              <p className="text-slate-600">
                We regularly introduce new bloodlines from top breeders across the nation to ensure vigor and prevent inbreeding depression. Our pedigrees are meticulously tracked.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center shadow-sm mb-6">
                <Scale className="text-ranch-gold" size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-ranch-navy mb-3">Body Conformation</h3>
              <p className="text-slate-600">
                Antlers are important, but body size supports them. We select for large-framed animals that can withstand the South Texas heat and produce robust offspring.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center shadow-sm mb-6">
                <Activity className="text-ranch-gold" size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-ranch-navy mb-3">Health & Nutrition</h3>
              <p className="text-slate-600">
                Our herd is on a strict supplementary protein program year-round. We work closely with wildlife veterinarians to maintain a disease-free status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="py-24 bg-ranch-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white">Reference Sires</h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">The foundation of our current calf crop. These bucks represent the pinnacle of our breeding achievements.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-2xl">
              <div className="h-80 overflow-hidden">
                <img 
                  src="https://image.pollinations.ai/prompt/massive%20chocolate%20fallow%20deer%20buck%20standing%20tall%20photorealistic?width=800&height=600&nologo=true&seed=603" 
                  alt="Sire Titan" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-serif font-bold text-ranch-gold">Titan</h3>
                  <span className="bg-slate-700 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">Primary Sire</span>
                </div>
                <ul className="space-y-2 text-slate-300 mb-6">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-ranch-gold rounded-full"></span> 5 Years Old</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-ranch-gold rounded-full"></span> 240" B&C Score (Unofficial)</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-ranch-gold rounded-full"></span> 32" Outside Spread</li>
                </ul>
                <p className="text-slate-400 italic">Known for passing on exceptional palm width and calm temperament.</p>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-2xl">
              <div className="h-80 overflow-hidden">
                <img 
                  src="https://image.pollinations.ai/prompt/dark%20fallow%20deer%20buck%20in%20shadows%20photorealistic?width=800&height=600&nologo=true&seed=604" 
                  alt="Sire Midnight" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-serif font-bold text-ranch-gold">Midnight</h3>
                  <span className="bg-slate-700 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">Junior Sire</span>
                </div>
                <ul className="space-y-2 text-slate-300 mb-6">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-ranch-gold rounded-full"></span> 3 Years Old</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-ranch-gold rounded-full"></span> Heavy Mass Genetics</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-ranch-gold rounded-full"></span> Deep Chocolate Coat</li>
                </ul>
                <p className="text-slate-400 italic">Produces offspring with incredibly dark coats and heavy bases.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Herd;