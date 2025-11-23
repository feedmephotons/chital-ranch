import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';

const landingPages = [
  {
    title: 'Chocolate Fallow Deer for Sale Texas',
    path: '/chocolate-fallow-deer-for-sale-texas',
    description: 'Quality chocolate fallow deer available from proven Texas bloodlines.',
  },
  {
    title: 'Chocolate Fallow Deer Breeders Texas',
    path: '/chocolate-fallow-deer-breeders-texas',
    description: 'Dedicated chocolate fallow specialists with structured breeding programs.',
  },
  {
    title: 'Fallow Deer Breeding Stock Texas',
    path: '/fallow-deer-breeding-stock-texas',
    description: 'Foundation genetics for serious breeding programs.',
  },
  {
    title: 'Fallow Deer for Hunting Ranches Texas',
    path: '/fallow-deer-for-hunting-ranches-texas',
    description: 'Quality deer for hunting ranch stocking operations.',
  },
  {
    title: 'Chocolate Fallow Bucks for Sale',
    path: '/chocolate-fallow-bucks-for-sale',
    description: 'Proven breeder bucks with wide palmation and solid frames.',
  },
  {
    title: 'Chocolate Fallow Does for Sale',
    path: '/chocolate-fallow-does-for-sale',
    description: 'Foundation does with proven maternal genetics.',
  },
  {
    title: 'South Texas Fallow Deer Ranch',
    path: '/south-texas-fallow-deer-ranch',
    description: 'Located in Floresville, TX - serving South Texas ranches.',
  },
  {
    title: 'Fallow Deer Genetics Texas',
    path: '/fallow-deer-genetics-texas',
    description: 'Proven bloodlines with consistent results generation after generation.',
  },
  {
    title: 'Buy Fallow Deer Texas',
    path: '/buy-fallow-deer-texas',
    description: 'Quality chocolate fallow deer available for purchase.',
  },
  {
    title: 'Texas Exotic Deer Breeders',
    path: '/texas-exotic-deer-breeders',
    description: 'Professional exotic deer breeding operation in Texas.',
  },
  {
    title: 'Fallow Deer Yearlings for Sale Texas',
    path: '/fallow-deer-yearlings-for-sale-texas',
    description: 'Young stock with steady development from proven genetics.',
  },
  {
    title: 'Breeder Bucks Fallow Deer Texas',
    path: '/breeder-bucks-fallow-deer-texas',
    description: 'Proven sires for your breeding program.',
  },
  {
    title: 'Chocolate Fallow Deer Floresville TX',
    path: '/chocolate-fallow-deer-floresville-tx',
    description: 'Local South Texas fallow deer operation.',
  },
  {
    title: 'Fallow Deer Stocking Texas Ranches',
    path: '/fallow-deer-stocking-texas-ranches',
    description: 'Quality deer for ranch stocking operations.',
  },
  {
    title: 'Quality Fallow Deer Bloodlines Texas',
    path: '/quality-fallow-deer-bloodlines-texas',
    description: 'Proven genetics from respected Texas programs.',
  },
];

const LandingPagesIndex: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="relative py-20 bg-ranch-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-ranch-gold/20 px-4 py-2 rounded-full mb-6">
            <Search size={18} className="text-ranch-gold" />
            <span className="text-ranch-gold font-medium text-sm">SEO Landing Pages</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Browse Our Pages
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Find information about chocolate fallow deer for sale, breeding stock, genetics, and more.
          </p>
        </div>
      </div>

      {/* Landing Pages Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {landingPages.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className="group bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-ranch-gold hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-serif font-bold text-ranch-navy mb-2 group-hover:text-ranch-gold transition-colors">
                  {page.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {page.description}
                </p>
                <span className="inline-flex items-center gap-1 text-ranch-gold font-medium text-sm group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Pages */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-ranch-navy mb-8 text-center">Main Site Pages</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/" className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow border border-slate-100">
              <span className="font-bold text-ranch-navy">Home</span>
            </Link>
            <Link to="/about" className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow border border-slate-100">
              <span className="font-bold text-ranch-navy">About</span>
            </Link>
            <Link to="/herd" className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow border border-slate-100">
              <span className="font-bold text-ranch-navy">The Herd</span>
            </Link>
            <Link to="/sale" className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow border border-slate-100">
              <span className="font-bold text-ranch-navy">For Sale</span>
            </Link>
            <Link to="/visit" className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow border border-slate-100">
              <span className="font-bold text-ranch-navy">Visit</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPagesIndex;
