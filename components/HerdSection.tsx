import React from 'react';
import Section from './Section';

export default function HerdSection() {
  return (
    <Section id="herd" background="light">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-navy mb-8 text-center">
          The Herd
        </h2>

        <div className="space-y-8 text-lg text-primary-charcoal leading-relaxed">
          <p className="text-center max-w-3xl mx-auto">
            Our herd is built around consistent chocolate fallow genetics.
            Each pairing is selected to maintain color quality, frame strength, and herd diversity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-neutral-cream p-8 rounded-lg">
              <h3 className="text-2xl font-serif font-bold text-primary-navy mb-4">
                Breeding Program
              </h3>
              <p>
                We focus on predictable results — deer that reproduce well, hold their color, and build long-term value for breeding and hunting operations alike.
              </p>
              <p className="mt-4">
                Current sires include proven Texas bloodlines with strong performance and color traits.
              </p>
            </div>

            <div className="bg-neutral-cream p-8 rounded-lg">
              <h3 className="text-2xl font-serif font-bold text-primary-navy mb-4">
                Animal Development
              </h3>
              <p>
                We raise bucks and does from fawn through maturity, ensuring every animal is well-conditioned and ready to move when sold.
              </p>
              <p className="mt-4">
                Every deer sold comes directly from our ranch and is managed with care and attention to health and development.
              </p>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="mt-16">
            <h3 className="text-3xl font-serif font-bold text-primary-navy mb-8 text-center">
              Gallery
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div
                  key={num}
                  className="aspect-[3/2] bg-neutral-tan rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <img
                    src={`/images/gallery/deer_${num}.jpg`}
                    alt={`Chocolate fallow deer ${num}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
