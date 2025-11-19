import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export default function Card({
  children,
  className = '',
  imageUrl,
  imageAlt = '',
}: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}
