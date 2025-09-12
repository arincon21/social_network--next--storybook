import React from 'react';
import WeatherIcon from './weather-icon';

interface WeatherForecastItemProps {
  day: string;
  weatherType: 'sun' | 'cloud' | 'cloudRain' | 'wind';
  temperature: string;
  isToday?: boolean;
}

const WeatherForecastItem: React.FC<WeatherForecastItemProps> = ({
  day,
  weatherType,
  temperature,
  isToday = false
}) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-xs font-medium mb-3 opacity-90">{day}</span>
      <div className="mb-3">
        <WeatherIcon type={weatherType} size={24} isToday={isToday} />
      </div>
      <span className="text-sm font-medium">{temperature}</span>
    </div>
  );
};

export default WeatherForecastItem;
