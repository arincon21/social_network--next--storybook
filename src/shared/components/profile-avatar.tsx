import React from 'react';
import Image from 'next/image';

interface ProfileAvatarProps {
  src: string;
  alt: string;
  size?: number;
  borderColor?: string;
  borderWidth?: number;
  className?: string;
  unoptimized?: boolean;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ 
  src, 
  alt, 
  size = 64,
  borderColor = 'border-white/30',
  borderWidth = 2,
  className = '',
  unoptimized = false
}) => {
  return (
    <div 
      className={`rounded-full border-${borderWidth} ${borderColor} overflow-hidden relative ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        unoptimized={unoptimized}
      />
    </div>
  );
};

export default ProfileAvatar;
