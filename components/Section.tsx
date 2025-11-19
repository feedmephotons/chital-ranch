import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'light' | 'dark' | 'cream' | 'navy';
  backgroundImage?: string;
  containerClassName?: string;
}

export default function Section({
  id,
  children,
  className = '',
  background = 'light',
  backgroundImage,
  containerClassName = '',
}: SectionProps) {
  const bgStyles = {
    light: 'bg-white',
    dark: 'bg-primary-charcoal text-white',
    cream: 'bg-neutral-cream',
    navy: 'bg-primary-navy text-white',
  };

  const sectionStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }
    : {};

  return (
    <section
      id={id}
      className={`${bgStyles[background]} ${className}`}
      style={sectionStyle}
    >
      <div className={`section-container ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
