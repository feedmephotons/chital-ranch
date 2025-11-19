'use client';

import React, { useState } from 'react';
import Section from './Section';
import Input from './Input';
import Button from './Button';

export default function VisitSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
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
      const response = await fetch('/api/schedule-visit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', preferredDate: '', preferredTime: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage('Failed to schedule visit. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <Section
      id="visit"
      background="light"
      backgroundImage="/images/backgrounds/visit-bg.jpg"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-navy mb-6">
              Visit the Ranch
            </h2>
            <div className="space-y-4 text-lg text-primary-charcoal leading-relaxed">
              <p>
                Visitors are welcome by appointment.
              </p>
              <p>
                We encourage buyers to see the herd firsthand, view available stock, and talk genetics and goals with us directly.
              </p>
              <p className="font-semibold text-primary-navy">
                Appointments can be scheduled year-round.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-lg shadow-xl">
            <h3 className="text-2xl font-serif font-bold text-primary-navy mb-6">
              Schedule a Visit
            </h3>

            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-md text-center">
                <p className="font-semibold">Visit Requested!</p>
                <p className="mt-2">We'll contact you shortly to confirm your appointment.</p>
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
                  label="Preferred Date"
                  name="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Preferred Time"
                  name="preferredTime"
                  type="time"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Additional Notes"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                  rows={3}
                  placeholder="Any specific animals or questions?"
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
                  {status === 'loading' ? 'Sending...' : 'Request Appointment'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
