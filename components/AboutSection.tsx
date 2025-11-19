import React from 'react';
import Section from './Section';

export default function AboutSection() {
  return (
    <Section
      id="about"
      background="cream"
      backgroundImage="/images/backgrounds/about-bg.jpg"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 text-center">
          About Us
        </h2>
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 md:p-12 shadow-2xl space-y-6 text-lg text-primary-charcoal leading-relaxed">
          <p>
            Chital Ranch grew from years of ranching and wildlife experience into a focused fallow deer program centered on the chocolate line.
          </p>
          <p>
            We've built a herd with strong color, balanced frames, and sound bloodlines by combining hands-on management with proven genetics from respected Texas breeders.
          </p>
          <p>
            Every animal represents our standard for quality — healthy, and true to type.
          </p>
          <p>
            We work with buyers and other ranches to match them with the right deer for their goals.
          </p>
          <p className="font-semibold text-primary-navy">
            Integrity and reliability drive every decision, from breeding to sale.
          </p>
        </div>
      </div>
    </Section>
  );
}
