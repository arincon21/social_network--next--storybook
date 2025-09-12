import React from 'react';
import { Cloud, CloudRain, Sun, Wind, LucideIcon } from 'lucide-react';

interface WeatherIconProps {
  type: 'sun' | 'cloud' | 'cloudRain' | 'wind';
  size?: number;
  className?: string;
  isToday?: boolean;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ 
  type, 
  size = 24, 
  className = '',
  isToday = false 
}) => {
  const iconProps = {
    className: `w-${size/4} h-${size/4} ${className}`,
    style: { width: size, height: size }
  };

  switch (type) {
    case 'sun':
      return <Sun {...iconProps} />;
    
    case 'cloud':
      return <Cloud {...iconProps} fill="white" stroke="none" />;
    
    case 'cloudRain':
      return (
        <div className="relative">
          <Cloud {...iconProps} fill="white" stroke="none" />
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
            <div className="flex gap-0.5">
              <div className="w-0.5 h-2 bg-white rounded-full"></div>
              <div className="w-0.5 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      );
    
    case 'wind':
      return <Wind {...iconProps} />;
    
    default:
      return <Sun {...iconProps} />;
  }
};

export default WeatherIcon;
