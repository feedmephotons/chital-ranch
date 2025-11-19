import React from 'react';
import Section from './Section';
import Card from './Card';

export default function WelcomeSection() {
  const highlights = [
    {
      title: 'Chocolate Line Focus',
      description: 'Deep color and consistent patterning across generations.',
      icon: '🦌',
    },
    {
      title: 'Proven Genetics',
      description: 'Solid bloodlines and dependable offspring.',
      icon: '🧬',
    },
    {
      title: 'Ready to Perform',
      description: 'Strong, healthy animals raised to thrive in any setting.',
      icon: '⭐',
    },
  ];

  return (
    <>
      {/* Welcome Section */}
      <Section id="welcome" background="cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-navy mb-8">
            Welcome to Chital Ranch
          </h2>
          <div className="space-y-6 text-lg text-primary-charcoal leading-relaxed">
            <p>
              Chital Ranch is focused on producing consistent chocolate fallow deer backed by proven Texas genetics.
            </p>
            <p>
              Our herd combines color, frame, and calm temperament — traits that carry through each generation.
            </p>
            <p>
              Whether you're expanding a breeding program or improving a hunting property, our deer are bred to make an impact from the start.
            </p>
          </div>
        </div>
      </Section>

      {/* Highlights Section */}
      <Section background="light" className="bg-gradient-to-b from-neutral-cream to-white">
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary-navy text-center mb-12">
          Why Choose Chital Ranch
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">{highlight.icon}</div>
              <h4 className="text-xl font-serif font-bold text-primary-navy mb-3">
                {highlight.title}
              </h4>
              <p className="text-primary-charcoal">
                {highlight.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Quote Banner */}
      <Section background="navy">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-serif italic text-neutral-cream mb-4">
            "We breed dependable fallow deer — proven genetics, strong color, and quality you can see."
          </blockquote>
          <p className="text-primary-gold font-semibold">— Chital Ranch</p>
        </div>
      </Section>
    </>
  );
}
