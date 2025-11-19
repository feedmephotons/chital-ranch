'use client';

import React, { useState } from 'react';
import Section from './Section';
import Card from './Card';
import Input from './Input';
import Button from './Button';

export default function ForSaleSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/request-availability', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage('Failed to send request. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  const availableStock = [
    {
      title: 'Live Cover Opportunities',
      description: 'Access to proven breeder bucks.',
    },
    {
      title: 'Covered Does',
      description: 'Bred and ready to produce next-season fawns.',
    },
    {
      title: 'Breeder Bucks',
      description: 'Mature, ready-to-breed males available by rotation.',
    },
    {
      title: 'Yearlings & Young Stock',
      description: 'Growing animals showing strong color and frame.',
    },
  ];

  return (
    <Section id="forsale" background="cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-navy mb-8 text-center">
          For Sale
        </h2>

        <div className="mb-12">
          <h3 className="text-2xl font-serif font-bold text-primary-navy mb-6 text-center">
            Animals Available
          </h3>
          <p className="text-lg text-primary-charcoal text-center mb-8 max-w-3xl mx-auto">
            We offer animals throughout the year. Every deer sold comes directly from our ranch and is managed with care and attention to health and development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {availableStock.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                <h4 className="text-lg font-serif font-bold text-primary-navy mb-2">
                  {item.title}
                </h4>
                <p className="text-primary-charcoal text-sm">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
            <h4 className="text-2xl font-serif font-bold text-primary-navy mb-4">
              How to Buy
            </h4>
            <p className="text-primary-charcoal leading-relaxed">
              We handle all sales directly — no middlemen, no confusion.
              Buyers can visit the ranch, review available animals, and complete purchases on-site or by arrangement.
              We're experienced working with both breeders and hunting operations and can help match the right animals to your program.
            </p>
          </div>
        </div>

        {/* Request Availability Form */}
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl max-w-2xl mx-auto">
          <h3 className="text-3xl font-serif font-bold text-primary-navy mb-6 text-center">
            Request Availability
          </h3>

          {status === 'success' ? (
            <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-md text-center">
              <p className="font-semibold">Thank you for your inquiry!</p>
              <p className="mt-2">We'll get back to you soon with availability information.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <Input
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
              <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
              <Input
                label="Phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="(210) 555-1234"
              />
              <Input
                label="Interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
                placeholder="e.g., Breeder bucks, covered does, yearlings"
              />
              <Input
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={4}
                placeholder="Tell us about your program and what you're looking for..."
              />

              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md mb-4">
                  {errorMessage}
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                disabled={status === 'loading'}
                className="w-full"
              >
                {status === 'loading' ? 'Sending...' : 'Send Request'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
