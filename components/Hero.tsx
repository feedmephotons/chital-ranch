import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Shield, Trophy, HeartHandshake, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  // Added seed to ensure unique image generation
  const bgImage = "https://image.pollinations.ai/prompt/south%20texas%20ranch%20landscape%20sunrise%20misty%20mesquite%20trees%20golden%20hour%20photorealistic%20wide%20angle?width=1920&height=1080&nologo=true&seed=101";

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={bgImage}
            alt="South Texas Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ranch-navy/70 via-ranch-navy/40 to-ranch-navy/80"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 mt-16">
          <h2 className="text-ranch-gold uppercase tracking-[0.3em] text-sm md:text-base font-bold mb-6 animate-fade-in-up">
            Floresville, Texas
          </h2>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight drop-shadow-2xl">
            Premium Chocolate<br />
            <span className="text-ranch-gold italic">Fallow Deer</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-100 max-w-3xl mx-auto mb-12 font-light leading-relaxed drop-shadow-md">
            Cultivating superior genetics, consistent quality, and robust health. 
            The premier source for breeders and hunting ranches in South Texas.
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
                src="https://image.pollinations.ai/prompt/majestic%20chocolate%20fallow%20deer%20buck%20standing%20in%20tall%20grass%20south%20texas%20golden%20hour%20photorealistic?width=800&height=1000&nologo=true&seed=102" 
                alt="Majestic Buck" 
                className="rounded-lg shadow-2xl w-full object-cover h-[600px]"
              />
              <div className="absolute bottom-8 right-[-20px] bg-white p-6 shadow-xl rounded-lg max-w-xs hidden md:block border-l-4 border-ranch-gold">
                <p className="font-serif text-ranch-navy italic text-lg">"Quality isn't just a goal, it's our tradition."</p>
              </div>
            </div>
            <div>
              <span className="text-ranch-gold font-bold uppercase tracking-widest text-sm">Welcome to Chital Ranch</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-ranch-navy mt-4 mb-8">
                Setting the Standard for <br/>
                <span className="text-ranch-gold italic">Excellence</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Located in the heart of South Texas, Chital Ranch is dedicated exclusively to the propagation of Chocolate Fallow Deer. We believe that specialization leads to perfection. By focusing our efforts on a single color phase, we have been able to refine our herd's genetics to produce animals with exceptional body weight, impressive antler mass, and docile temperaments.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Whether you are looking to start your own breeding program or add trophy genetics to your hunting ranch, our animals are raised to thrive in the Texas climate.
              </p>
              <Link to="/about" className="group inline-flex items-center gap-2 text-ranch-navy font-bold uppercase tracking-wide border-b-2 border-ranch-gold pb-1 hover:text-ranch-gold transition-colors">
                Read Our Full Story <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
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
                   src="https://image.pollinations.ai/prompt/portrait%20chocolate%20fallow%20deer%20buck%20large%20antlers%20looking%20at%20camera%20photorealistic?width=600&height=400&nologo=true&seed=103" 
                   alt="Breeding Program" 
                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                 />
              </div>
              <h3 className="text-2xl font-serif font-bold text-ranch-navy mb-2 group-hover:text-ranch-gold transition-colors">The Herd</h3>
              <p className="text-slate-600 mb-4">World-class genetics focused on antler mass and body size.</p>
              <span className="inline-flex items-center text-ranch-gold font-bold uppercase text-sm tracking-wider">
                Explore Genetics <ChevronRight size={16} />
              </span>
            </Link>

            <Link to="/visit" className="group cursor-pointer block">
              <div className="overflow-hidden rounded-lg mb-6 h-72 shadow-lg relative">
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                 <img 
                   src="https://image.pollinations.ai/prompt/south%20texas%20ranch%20gate%20limestone%20entrance%20sunset%20bluebonnets%20photorealistic?width=600&height=400&nologo=true&seed=104" 
                   alt="The Ranch" 
                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                 />
              </div>
              <h3 className="text-2xl font-serif font-bold text-ranch-navy mb-2 group-hover:text-ranch-gold transition-colors">Visit Us</h3>
              <p className="text-slate-600 mb-4">Schedule a private tour of our facilities in Floresville.</p>
              <span className="inline-flex items-center text-ranch-gold font-bold uppercase text-sm tracking-wider">
                Plan Your Trip <ChevronRight size={16} />
              </span>
            </Link>

            <Link to="/sale" className="group cursor-pointer block">
               <div className="overflow-hidden rounded-lg mb-6 h-72 shadow-lg relative">
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                 <img 
                   src="https://image.pollinations.ai/prompt/group%20of%20fallow%20deer%20does%20and%20fawns%20grazing%20sunny%20field%20texas%20photorealistic?width=600&height=400&nologo=true&seed=105" 
                   alt="For Sale" 
                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                 />
              </div>
              <h3 className="text-2xl font-serif font-bold text-ranch-navy mb-2 group-hover:text-ranch-gold transition-colors">For Sale</h3>
              <p className="text-slate-600 mb-4">Current listings for breeder bucks, does, and yearlings.</p>
              <span className="inline-flex items-center text-ranch-gold font-bold uppercase text-sm tracking-wider">
                View Listings <ChevronRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Parallax Strip */}
      <section className="py-32 relative bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://image.pollinations.ai/prompt/wide%20panoramic%20shot%20of%20a%20herd%20of%20chocolate%20fallow%20deer%20resting%20under%20oak%20trees%20in%20texas%20summer%20photorealistic?width=1920&height=800&nologo=true&seed=106')" }}>
        <div className="absolute inset-0 bg-ranch-navy/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Genetics That <span className="text-ranch-gold">Deliver</span>
          </h2>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed">
            We don't just sell deer; we provide the foundation for the next generation of trophy animals.
          </p>
          <Link to="/contact" className="inline-block bg-white text-ranch-navy px-8 py-4 rounded font-bold uppercase hover:bg-ranch-gold hover:text-white transition-colors shadow-lg">
            Contact Us Today
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center px-4">
                <div className="w-20 h-20 bg-ranch-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="w-10 h-10 text-ranch-gold" />
                </div>
                <h3 className="text-xl font-bold text-ranch-navy mb-4">Proven Results</h3>
                <p className="text-slate-600">Our sires are selected based on strict antler criteria, ensuring that you are investing in genetics that will produce results in the pasture.</p>
              </div>
              <div className="text-center px-4">
                <div className="w-20 h-20 bg-ranch-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-ranch-gold" />
                </div>
                <h3 className="text-xl font-bold text-ranch-navy mb-4">Herd Health</h3>
                <p className="text-slate-600">We maintain a strict vaccination and nutrition program. Every animal that leaves our ranch is guaranteed healthy and ready to thrive.</p>
              </div>
              <div className="text-center px-4">
                <div className="w-20 h-20 bg-ranch-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HeartHandshake className="w-10 h-10 text-ranch-gold" />
                </div>
                <h3 className="text-xl font-bold text-ranch-navy mb-4">Integrity</h3>
                <p className="text-slate-600">We believe in doing business the right way. We are transparent about our pedigrees and stand behind every animal we sell.</p>
              </div>
           </div>
         </div>
      </section>

      {/* Quote Banner */}
      <section className="py-24 bg-ranch-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-8 text-ranch-gold">
            <Star fill="currentColor" className="h-8 w-8" />
            <Star fill="currentColor" className="h-10 w-10 -mt-4 mx-2" />
            <Star fill="currentColor" className="h-8 w-8" />
          </div>
          <blockquote className="text-3xl md:text-4xl font-serif leading-relaxed mb-8 italic">
            "Our commitment is simple: we don't sell any animal that we wouldn't be proud to keep in our own breeding pens."
          </blockquote>
          <cite className="text-ranch-gold font-bold tracking-widest uppercase not-italic">
            — The Chital Ranch Promise
          </cite>
        </div>
      </section>
    </div>
  );
};

export default Hero;