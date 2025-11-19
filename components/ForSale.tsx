import React, { useState } from 'react';
import { Animal } from '../types';
import { Filter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MOCK_ANIMALS: Animal[] = [
  {
    id: '1',
    name: 'Texan King',
    type: 'Buck',
    age: '3 Years',
    price: '$3,500',
    description: 'Exceptional chocolate buck with wide palms and heavy mass. Ready for breeding this season.',
    // More specific prompt
    imageUrl: 'https://image.pollinations.ai/prompt/full%20body%20chocolate%20fallow%20deer%20buck%20standing%20in%20field%20photorealistic?width=600&height=400&nologo=true&seed=401',
    status: 'Available'
  },
  {
    id: '2',
    name: 'Lot #42 Group',
    type: 'Doe',
    age: '2 Years',
    price: '$1,200 ea',
    description: 'Group of 5 exposed chocolate does. Covered by "Midnight", our primary breeder buck.',
    // More specific prompt
    imageUrl: 'https://image.pollinations.ai/prompt/group%20of%20female%20chocolate%20fallow%20deer%20grazing%20in%20pasture%20photorealistic?width=600&height=400&nologo=true&seed=402',
    status: 'Available'
  },
  {
    id: '3',
    name: 'Yearling Bucks',
    type: 'Buck',
    age: '1 Year',
    price: '$800',
    description: 'Promising yearling bucks showing great potential. Perfect for growing out.',
    // More specific prompt
    imageUrl: 'https://image.pollinations.ai/prompt/young%20male%20chocolate%20fallow%20deer%20spike%20antlers%20photorealistic?width=600&height=400&nologo=true&seed=403',
    status: 'Pending'
  },
  {
    id: '4',
    name: 'Apache',
    type: 'Buck',
    age: '4 Years',
    price: '$5,000',
    description: 'Trophy quality breeder. Proven sire with multiple offspring on the ground.',
    // More specific prompt
    imageUrl: 'https://image.pollinations.ai/prompt/majestic%20trophy%20chocolate%20fallow%20buck%20huge%20palmate%20antlers%20photorealistic?width=600&height=400&nologo=true&seed=404',
    status: 'Sold'
  },
  {
    id: '5',
    name: 'Spring Fawns',
    type: 'Fawn',
    age: '6 Months',
    price: 'Inquire',
    description: 'We are now taking deposits for our upcoming spring fawn crop. Chocolate genetics guaranteed.',
    // More specific prompt
    imageUrl: 'https://image.pollinations.ai/prompt/adorable%20baby%20chocolate%20fallow%20deer%20fawn%20spotted%20coat%20grass%20photorealistic?width=600&height=400&nologo=true&seed=405',
    status: 'Available'
  }
];

const ForSale: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Buck' | 'Doe' | 'Fawn'>('All');

  const filteredAnimals = filter === 'All' 
    ? MOCK_ANIMALS 
    : MOCK_ANIMALS.filter(a => a.type === filter);

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="relative py-24 bg-ranch-navy">
        <div className="absolute inset-0 opacity-40">
           <img 
            src="https://image.pollinations.ai/prompt/wide%20shot%20herd%20of%20chocolate%20fallow%20deer%20in%20a%20green%20field%20sunny%20day%20photorealistic?width=1920&height=600&nologo=true&seed=406" 
            alt="Deer in field" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Available Stock</h1>
          <p className="text-slate-200 max-w-2xl mx-auto text-lg">
            Invest in proven genetics. Whether you are looking for breeder bucks, stocker does, or semen straws, we have quality options available.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4 overflow-x-auto">
          <Filter size={20} className="text-ranch-gold flex-shrink-0" />
          <span className="font-bold text-ranch-navy mr-2">Filter:</span>
          {['All', 'Buck', 'Doe', 'Fawn'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type as any)}
              className={`px-4 py-1.5 rounded-full text-sm font-bold transition-colors whitespace-nowrap ${
                filter === type 
                  ? 'bg-ranch-navy text-white' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {type}s
            </button>
          ))}
        </div>
      </div>

      {/* Listings */}
      <section className="py-16 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredAnimals.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-slate-500">No animals currently available in this category.</p>
              <button onClick={() => setFilter('All')} className="mt-4 text-ranch-gold font-bold hover:underline">View All</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAnimals.map((animal) => (
                <div key={animal.id} className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 hover:shadow-xl transition-all duration-300 group flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={animal.imageUrl} 
                      alt={animal.name} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded shadow-md text-xs font-bold uppercase tracking-wide ${
                      animal.status === 'Available' ? 'bg-green-600 text-white' : 
                      animal.status === 'Pending' ? 'bg-yellow-500 text-black' : 'bg-red-600 text-white'
                    }`}>
                      {animal.status}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold font-serif text-ranch-navy">{animal.name}</h3>
                      <span className="text-ranch-gold font-bold text-lg">{animal.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400 uppercase tracking-wider mb-4">
                      <span className="bg-slate-100 px-2 py-1 rounded">{animal.type}</span>
                      <span>•</span>
                      <span>{animal.age}</span>
                    </div>
                    <p className="text-slate-600 text-sm mb-6 flex-1 leading-relaxed">
                      {animal.description}
                    </p>
                    <div className="pt-4 border-t border-slate-100">
                      <Link 
                        to="/contact"
                        className="flex items-center justify-center gap-2 w-full text-center bg-ranch-navy text-white py-3 rounded hover:bg-slate-800 transition-colors text-sm font-bold uppercase tracking-wider"
                      >
                        Inquire Interest <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ranch-gold py-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-2xl font-bold font-serif mb-4">Don't see what you're looking for?</h2>
            <p className="mb-8">We often have stock that hasn't been listed yet. Contact us for the most up-to-date availability.</p>
            <Link to="/contact" className="inline-block bg-white text-ranch-gold px-8 py-3 rounded font-bold uppercase hover:bg-slate-100 transition-colors">
                Contact Us
            </Link>
        </div>
      </section>
    </div>
  );
};

export default ForSale;