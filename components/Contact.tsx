import React, { useState } from 'react';
import { ContactFormData } from '../types';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'General Inquiry'
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '', interest: 'General Inquiry' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <footer id="contact" className="bg-ranch-navy text-white pt-24 border-t-4 border-ranch-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pb-16">
          
          {/* Info Column */}
          <div>
            <div className="mb-8">
               <Link to="/" className="inline-block mb-6">
                <img src="/images/cr-fallow-logo.svg" alt="CR Fallow" className="h-24 w-auto" />
              </Link>
              <p className="text-slate-400 text-lg max-w-md">
                Quality chocolate fallow deer from proven Texas bloodlines. Dependable color, solid frames, and genetics built for South Texas conditions.
              </p>
            </div>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-ranch-gold mt-1" size={24} />
                <div>
                  <h4 className="font-bold uppercase text-sm tracking-wider mb-1">Location</h4>
                  <p className="text-slate-300">1424 County Rd 329<br />Floresville, TX 78114</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-ranch-gold mt-1" size={24} />
                <div>
                  <h4 className="font-bold uppercase text-sm tracking-wider mb-1">Phone</h4>
                  <a href="tel:2102757107" className="text-slate-300 hover:text-white transition-colors">(210) 275-7107</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-ranch-gold mt-1" size={24} />
                <div>
                  <h4 className="font-bold uppercase text-sm tracking-wider mb-1">Email</h4>
                  <a href="mailto:info@crfallow.com" className="text-slate-300 hover:text-white transition-colors">info@crfallow.com</a>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-ranch-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-ranch-gold transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 shadow-xl">
            <h3 className="text-2xl font-serif font-bold text-white mb-2">Ready to Talk?</h3>
            <p className="text-slate-400 mb-6">Contact us anytime to discuss herd goals, availability, or breeding plans.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Name"
                  required
                  className="bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded focus:border-ranch-gold outline-none"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
                <input 
                  type="email" 
                  placeholder="Email"
                  required
                  className="bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded focus:border-ranch-gold outline-none"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <input 
                type="tel" 
                placeholder="Phone"
                required
                className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded focus:border-ranch-gold outline-none"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
              />
              <select 
                className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded focus:border-ranch-gold outline-none"
                value={formData.interest}
                onChange={e => setFormData({...formData, interest: e.target.value})}
              >
                <option>General Inquiry</option>
                <option>Buying Breeder Bucks</option>
                <option>Buying Does</option>
                <option>Semen Sales</option>
              </select>
              <textarea 
                placeholder="How can we help you?"
                rows={4}
                required
                className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded focus:border-ranch-gold outline-none"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
              ></textarea>
              <button 
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className={`w-full py-3 rounded font-bold uppercase tracking-wide transition-colors ${
                  status === 'success' ? 'bg-green-600 text-white' : 'bg-ranch-gold text-white hover:bg-amber-700'
                }`}
              >
                {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} CR Fallow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;