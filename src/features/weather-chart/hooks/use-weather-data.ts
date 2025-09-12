export interface WeatherForecastDay {
  day: string;
  weatherType: 'sun' | 'cloud' | 'cloudRain' | 'wind';
  temp: string;
  isToday?: boolean;
}

export const useWeatherData = () => {
  const weeklyForecast: WeatherForecastDay[] = [
    { day: 'DOM', weatherType: 'sun', temp: '60°', isToday: true },
    { day: 'LUN', weatherType: 'cloud', temp: '58°' },
    { day: 'MAR', weatherType: 'cloudRain', temp: '67°' },
    { day: 'MIÉ', weatherType: 'cloudRain', temp: '70°' },
    { day: 'JUE', weatherType: 'cloudRain', temp: '58°' },
    { day: 'VIE', weatherType: 'cloudRain', temp: '68°' },
    { day: 'SÁB', weatherType: 'wind', temp: '65°' },
  ];

  const currentWeather = {
    temperature: 64,
    minTemp: '58°',
    maxTemp: '76°',
    condition: 'Parcialmente Soleado',
    feelsLike: '67°',
    rainChance: '49%',
    date: 'Sábado, 26 de marzo',
    location: 'San Francisco, CA'
  };

  return {
    weeklyForecast,
    currentWeather
  };
};
