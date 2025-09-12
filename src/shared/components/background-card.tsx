import React from 'react';
import Image from 'next/image';

interface BackgroundCardProps {
  children: React.ReactNode;
  backgroundImage: string;
  alt: string;
  className?: string;
}

const BackgroundCard: React.FC<BackgroundCardProps> = ({ 
  children, 
  backgroundImage, 
  alt, 
  className = '' 
}) => {
  return (
    <div 
      className={`relative max-w-md mx-auto p-8 text-white rounded-sm overflow-hidden ${className}`}
      style={{ 
        backgroundImage: `url('${backgroundImage}')`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      <Image
        src={backgroundImage}
        alt={alt}
        fill
        className="-z-10 object-cover"
      />
      {children}
    </div>
  );
};

export default BackgroundCard;
