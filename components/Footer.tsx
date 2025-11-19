import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-serif font-bold text-primary-gold mb-4">
              Chital Ranch
            </h3>
            <p className="text-neutral-cream mb-4">
              Quality chocolate fallow deer breeding operation in South Texas.
              Proven genetics, strong color, and dependable results.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-neutral-cream hover:text-primary-gold transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#herd"
                  className="text-neutral-cream hover:text-primary-gold transition-colors"
                >
                  The Herd
                </a>
              </li>
              <li>
                <a
                  href="#forsale"
                  className="text-neutral-cream hover:text-primary-gold transition-colors"
                >
                  For Sale
                </a>
              </li>
              <li>
                <a
                  href="#visit"
                  className="text-neutral-cream hover:text-primary-gold transition-colors"
                >
                  Visit the Ranch
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-neutral-cream hover:text-primary-gold transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-3 text-neutral-cream">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>
                  1424 County Rd 329<br />
                  Floresville, TX 78114
                </span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <a
                  href="tel:+12102757107"
                  className="hover:text-primary-gold transition-colors"
                >
                  (210) 275-7107
                </a>
              </li>
              <li>
                <p className="text-sm">South Texas - Visits by appointment</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-charcoal mt-8 pt-8 text-center text-neutral-cream text-sm">
          <p>
            &copy; {currentYear} Chital Ranch. All rights reserved. | Quality Chocolate Fallow Deer & Proven Genetics
          </p>
        </div>
      </div>
    </footer>
  );
}
