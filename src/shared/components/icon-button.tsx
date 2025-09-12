import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconButtonProps {
  icon: LucideIcon;
  onClick?: () => void;
  ariaLabel: string;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ 
  icon: Icon, 
  onClick, 
  ariaLabel, 
  className = '' 
}) => {
  return (
    <button 
      className={`flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors group ${className}`}
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <Icon className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
    </button>
  );
};

export default IconButton;
