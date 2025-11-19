import React, { useState } from 'react';
import { VisitFormData } from '../types';
import { Calendar, Users, Clock, MapPin, CheckCircle } from 'lucide-react';

const Visit: React.FC = () => {
  const [formData, setFormData] = useState<VisitFormData>({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    partySize: 1
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', preferredDate: '', partySize: 1 });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="pt-20">
       {/* Header */}
       <div className="relative py-24 bg-ranch-navy">
        <div className="absolute inset-0 opacity-40">
           <img 
            src="https://image.pollinations.ai/prompt/rustic%20luxury%20ranch%20lodge%20fireplace%20leather%20furniture%20texas%20interior%20photorealistic?width=1920&height=600&nologo=true" 
            alt="Ranch Lodge" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold text-white mb-4">Visit Chital Ranch</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Experience the quality firsthand.</p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Info Column */}
            <div>
              <span className="text-ranch-gold uppercase tracking-widest text-sm font-bold">Plan Your Trip</span>
              <h2 className="text-4xl font-serif font-bold text-ranch-navy mt-2 mb-6">Private Tours & Appointments</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                We welcome serious breeders, ranch owners, and wildlife enthusiasts to visit Chital Ranch. Seeing the animals in their natural South Texas habitat is the best way to appreciate the quality of our herd.
              </p>
              
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-8">
                <h3 className="font-bold text-ranch-navy text-xl mb-4">What to Expect</h3>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="text-ranch-gold shrink-0 mt-1" size={20} />
                        <span className="text-slate-600">Guided tour of breeding pens and open pasture</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="text-ranch-gold shrink-0 mt-1" size={20} />
                        <span className="text-slate-600">Up-close viewing of sire bucks and foundation does</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="text-ranch-gold shrink-0 mt-1" size={20} />
                        <span className="text-slate-600">Consultation on genetics and herd management</span>
                    </li>
                </ul>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-ranch-gold/10 p-3 rounded-full text-ranch-gold">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-ranch-navy text-lg">By Appointment Only</h4>
                    <p className="text-slate-600">Please schedule at least 48 hours in advance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-ranch-gold/10 p-3 rounded-full text-ranch-gold">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-ranch-navy text-lg">Visiting Hours</h4>
                    <p className="text-slate-600">Monday - Saturday: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-ranch-gold/10 p-3 rounded-full text-ranch-gold">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-ranch-navy text-lg">Location</h4>
                    <p className="text-slate-600">1424 County Rd 329, Floresville, TX 78114</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="bg-white p-8 rounded-xl shadow-2xl border border-slate-100 relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-ranch-navy to-ranch-gold rounded-t-xl"></div>
              <h3 className="text-2xl font-serif font-bold text-ranch-navy mb-2">Request Appointment</h3>
              <p className="text-slate-500 mb-8">Fill out the form below and we will confirm your visit shortly.</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded border border-slate-300 focus:border-ranch-gold focus:ring-1 focus:ring-ranch-gold outline-none transition-all bg-slate-50"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 rounded border border-slate-300 focus:border-ranch-gold focus:ring-1 focus:ring-ranch-gold outline-none transition-all bg-slate-50"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Phone</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-4 py-3 rounded border border-slate-300 focus:border-ranch-gold focus:ring-1 focus:ring-ranch-gold outline-none transition-all bg-slate-50"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Preferred Date</label>
                    <input 
                      type="date" 
                      required
                      className="w-full px-4 py-3 rounded border border-slate-300 focus:border-ranch-gold focus:ring-1 focus:ring-ranch-gold outline-none transition-all bg-slate-50"
                      value={formData.preferredDate}
                      onChange={e => setFormData({...formData, preferredDate: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Party Size</label>
                    <select 
                      className="w-full px-4 py-3 rounded border border-slate-300 focus:border-ranch-gold focus:ring-1 focus:ring-ranch-gold outline-none transition-all bg-slate-50"
                      value={formData.partySize}
                      onChange={e => setFormData({...formData, partySize: parseInt(e.target.value)})}
                    >
                      {[1,2,3,4,5,6].map(num => <option key={num} value={num}>{num}</option>)}
                      <option value="7">7+</option>
                    </select>
                  </div>
                </div>
                <button 
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className={`w-full py-4 mt-4 rounded shadow-lg font-bold uppercase tracking-wide transition-all transform active:scale-95 ${
                    status === 'success' ? 'bg-green-600 text-white' : 'bg-ranch-gold text-white hover:bg-amber-700'
                  }`}
                >
                  {status === 'submitting' ? 'Sending Request...' : status === 'success' ? 'Request Sent Successfully!' : 'Request Appointment'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Visit;