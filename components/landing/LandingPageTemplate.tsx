import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, CheckCircle } from 'lucide-react';

interface LandingPageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  intro: string;
  bulletPoints: string[];
  secondaryTitle: string;
  secondaryContent: string;
  secondaryImage: string;
  calloutTitle: string;
  calloutText: string;
}

const LandingPageTemplate: React.FC<LandingPageProps> = ({
  title,
  subtitle,
  heroImage,
  intro,
  bulletPoints,
  secondaryTitle,
  secondaryContent,
  secondaryImage,
  calloutTitle,
  calloutText,
}) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-ranch-navy">
        <div className="absolute inset-0 opacity-40">
          <img
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-ranch-gold font-serif italic mb-8">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/sale"
              className="px-8 py-4 bg-ranch-gold text-white font-bold uppercase tracking-wider hover:bg-amber-700 transition-all rounded shadow-lg"
            >
              View Available Stock
            </Link>
            <a
              href="tel:2102757107"
              className="px-8 py-4 bg-white text-ranch-navy font-bold uppercase tracking-wider hover:bg-slate-100 transition-all rounded shadow-lg flex items-center justify-center gap-2"
            >
              <Phone size={18} /> (210) 275-7107
            </a>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10">
            {intro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bulletPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="text-ranch-gold flex-shrink-0 mt-1" size={20} />
                <span className="text-slate-700">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Content */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-ranch-navy mb-6">
                {secondaryTitle}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {secondaryContent}
              </p>
              <Link
                to="/herd"
                className="group inline-flex items-center gap-2 text-ranch-navy font-bold uppercase tracking-wide border-b-2 border-ranch-gold pb-1 hover:text-ranch-gold transition-colors"
              >
                Explore Our Genetics <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>
            <div className="relative">
              <img
                src={secondaryImage}
                alt={secondaryTitle}
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Callout Banner */}
      <section className="py-16 bg-ranch-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">{calloutTitle}</h2>
          <p className="text-slate-300 text-lg mb-8">{calloutText}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/visit"
              className="px-8 py-4 bg-ranch-gold text-white font-bold uppercase tracking-wider hover:bg-amber-700 transition-all rounded"
            >
              Schedule a Visit
            </Link>
            <Link
              to="/sale"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-ranch-navy transition-all rounded"
            >
              View Stock
            </Link>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-serif font-bold text-ranch-navy mb-4">Visit CR Fallow</h3>
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="text-ranch-gold flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-slate-700 font-medium">1424 County Rd 329</p>
                    <p className="text-slate-600">Floresville, TX 78114</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-ranch-gold flex-shrink-0" size={20} />
                  <a href="tel:2102757107" className="text-slate-700 font-medium hover:text-ranch-gold transition-colors">
                    (210) 275-7107
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-ranch-navy mb-4">Ready to Talk?</h3>
                <p className="text-slate-600 mb-4">
                  Contact us anytime to discuss herd goals, availability, or breeding plans.
                </p>
                <Link
                  to="/visit"
                  className="inline-flex items-center gap-2 bg-ranch-gold text-white px-6 py-3 rounded font-bold uppercase text-sm hover:bg-amber-700 transition-colors"
                >
                  Contact Us <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPageTemplate;
