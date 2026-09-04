import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight } from 'lucide-react';

const VIDEO_ID = 'V0AYgS6yra8';

// The thumbnail loads from YouTube; maxres is not generated for every upload,
// so fall back to hqdefault, which always exists.
const MAX_RES_THUMB = `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`;
const FALLBACK_THUMB = `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`;

const FeaturedBuckVideo: React.FC = () => {
  // The player is swapped in only once someone asks for it. Embedding the
  // iframe up front would pull roughly a megabyte of YouTube script into
  // every home page visit, whether or not the video is ever watched.
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumb, setThumb] = useState(MAX_RES_THUMB);

  return (
    <section className="py-24 bg-ranch-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-ranch-gold uppercase tracking-widest text-sm font-bold">New Herd Sire</span>
          <h2 className="text-4xl font-serif font-bold text-white mt-2 mb-4">Meet Our Newest Breeder Buck</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Color, frame, and disposition are easier to judge in motion than in a photograph. Take a look.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            {isPlaying ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title="CR Fallow — our newest breeder buck"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                aria-label="Play the video of our newest breeder buck"
                className="group absolute inset-0 w-full h-full"
              >
                <img
                  src={thumb}
                  onError={() => setThumb(FALLBACK_THUMB)}
                  alt="Our newest breeder buck at CR Fallow"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-ranch-gold/90 group-hover:bg-ranch-gold rounded-full p-6 transition-all transform group-hover:scale-110 shadow-xl">
                  <Play className="text-white ml-1" size={40} />
                </span>
              </button>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              to="/sale"
              className="inline-flex items-center justify-center gap-2 bg-ranch-gold text-white px-8 py-4 rounded font-bold uppercase tracking-wide hover:bg-amber-700 transition-colors"
            >
              View Available Stock <ArrowRight size={18} />
            </Link>
            <Link
              to="/visit"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-bold uppercase tracking-wide hover:bg-white/10 transition-colors"
            >
              Schedule a Visit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBuckVideo;
