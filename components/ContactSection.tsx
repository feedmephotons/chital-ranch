'use client';

import React, { useState } from 'react';
import Section from './Section';
import Input from './Input';
import Button from './Button';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <Section
      id="contact"
      background="dark"
      backgroundImage="/images/backgrounds/contact-bg.jpg"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 text-center">
          Contact Us
        </h2>
        <p className="text-xl text-neutral-cream text-center mb-12 max-w-2xl mx-auto">
          We're ready to help with your next addition.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-serif font-bold text-primary-gold mb-6">
                Get In Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">📍</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Location</h4>
                    <p className="text-neutral-cream">
                      1424 County Rd 329<br />
                      Floresville, TX 78114<br />
                      South Texas
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-3xl mr-4">📞</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <a
                      href="tel:+12102757107"
                      className="text-primary-gold hover:text-accent-gold-light transition-colors text-lg"
                    >
                      (210) 275-7107
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-3xl mr-4">⏰</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Availability</h4>
                    <p className="text-neutral-cream">
                      Visits by appointment<br />
                      Year-round scheduling available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h4 className="text-xl font-serif font-bold text-primary-gold mb-4">
                Why Contact Us?
              </h4>
              <ul className="space-y-2 text-neutral-cream">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Inquire about available animals</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Discuss breeding programs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Schedule a ranch visit</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ask about genetics and bloodlines</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-lg shadow-xl">
            <h3 className="text-2xl font-serif font-bold text-primary-navy mb-6">
              Send a Message
            </h3>

            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-md text-center">
                <p className="font-semibold">Message Sent Successfully!</p>
                <p className="mt-2">We'll get back to you as soon as possible.</p>
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
                  placeholder="(210) 555-1234"
                />
                <Input
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this regarding?"
                />
                <Input
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  multiline
                  rows={5}
                  placeholder="Tell us how we can help you..."
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
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
