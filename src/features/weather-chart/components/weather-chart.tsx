import React from 'react';
import { Cloud, Sun, MoreHorizontal } from 'lucide-react';
import BackgroundCard from '@/shared/components/background-card';
import IconButton from '@/shared/components/icon-button';
import WeatherForecastItem from '@/shared/components/weather-forecast-item';
import { useWeatherData } from '../hooks/use-weather-data';

const WeatherChart: React.FC = () => {
  const { weeklyForecast, currentWeather } = useWeatherData();

  return (
    <div>
      <BackgroundCard 
        backgroundImage="/assets/bg/bg-wethear.jpg"
        alt="Fondo del clima"
        className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600"
      >

        {/* Main temperature display */}
        <div className="relative z-10 mb-6">
          <div className="flex items-start justify-between">
            <div className="flex gap-1">
              <div className="flex items-baseline">
                <span className="text-7xl font-thin">{currentWeather.temperature}</span>
                <span className="text-[70px] flex items-top justify-top">°</span>
              </div>
              <div className="flex flex-col justify-end">
                <span className="text-lg opacity-90">{currentWeather.minTemp}</span>
                <span className="text-lg opacity-90">{currentWeather.maxTemp}</span>
              </div>
            </div>
            
            {/* Weather icon */}
            <div className="relative">
              <Cloud className="w-16 h-16" fill="white" stroke="none" />
              <Sun className="w-8 h-8 absolute -top-2 -right-2" />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current conditions */}
        <div className="relative z-10 mb-8 text-center">
          <h2 className="text-2xl font-light mb-3">{currentWeather.condition}</h2>
          <div className="flex justify-between text-sm opacity-90 text-[14px]">
            <span>Sensación térmica: {currentWeather.feelsLike}</span>
            <span>Probabilidad de lluvia: {currentWeather.rainChance}</span>
          </div>
        </div>

        {/* Weekly forecast */}
        <div className="relative z-10 mb-6 bg-white/20 -mx-6 px-6 py-2">
          <div className="grid grid-cols-7 gap-2">
            {weeklyForecast.map((day, index) => (
              <WeatherForecastItem
                key={index}
                day={day.day}
                weatherType={day.weatherType}
                temperature={day.temp}
                isToday={day.isToday}
              />
            ))}
          </div>
        </div>

        {/* Date and location */}
        <div className="relative z-10 text-center">
          <h3 className="text-xl font-light mb-1">{currentWeather.date}</h3>
          <p className="text-sm opacity-75">{currentWeather.location}</p>
        </div>
      </BackgroundCard>
    </div>
  );
};

export default WeatherChart;
