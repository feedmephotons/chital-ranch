import React from 'react';
import Button from './Button';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 35, 50, 0.7), rgba(26, 35, 50, 0.7)), url('/images/backgrounds/hero-ranch.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="section-container text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-balance">
          Chital Ranch
        </h1>
        <h2 className="text-2xl md:text-4xl font-serif mb-8 text-primary-gold">
          Texas-Bred Chocolate Fallow Deer
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          Located in South Texas, Chital Ranch breeds high-quality chocolate fallow deer known for color, structure, and genetics.
          We supply breeder bucks, covered does, and stock for hunting ranches — strong, healthy deer that perform well wherever they go.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="#herd" variant="primary">
            View the Herd
          </Button>
          <Button href="#contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#welcome" aria-label="Scroll down">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
