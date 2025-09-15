import React from 'react';
import { Cloud, Droplets, Wind, Thermometer, MapPin, Eye, Gauge } from 'lucide-react';
import { WeatherData } from '../services/weatherService';

interface WeatherCardProps {
  weatherData: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData }) => {
  const { name, main, weather, wind, sys } = weatherData;
  const currentWeather = weather[0];
  
  const getWeatherIcon = (iconCode: string) => {
    return `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
  };

  const capitalizeDescription = (description: string) => {
    return description.replace(/\b\w/g, char => char.toUpperCase());
  };

  const getWeatherTheme = (weatherMain: string) => {
    switch (weatherMain.toLowerCase()) {
      case 'clear':
        return 'sunny-bg';
      case 'clouds':
        return 'cloudy-bg';
      case 'rain':
      case 'drizzle':
        return 'rainy-bg';
      case 'snow':
        return 'snowy-bg';
      default:
        return '';
    }
  };

  return (
    <div className={`glass-card weather-card rounded-3xl p-8 max-w-md w-full mx-auto floating success-enter ${getWeatherTheme(currentWeather.main)}`}>
      {/* Header */}
      <div className="flex items-center justify-center mb-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full blur-xl"></div>
        <MapPin className="text-white drop-shadow-lg mr-2 z-10" size={24} />
        <h2 className="text-2xl font-bold text-white drop-shadow-lg z-10">
          {name}, {sys.country}
        </h2>
      </div>

      {/* Weather Icon and Temperature */}
      <div className="text-center mb-8 relative">
        <img
          src={getWeatherIcon(currentWeather.icon)}
          alt={currentWeather.description}
          className="mx-auto w-32 h-32 drop-shadow-2xl weather-icon-enter"
        />
        <div className="flex items-center justify-center mt-4 relative">
          <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl scale-150"></div>
          <span className="text-6xl font-bold text-white drop-shadow-lg temperature-display z-10">
            {Math.round(main.temp)}
          </span>
          <span className="text-2xl text-white/80 ml-2 drop-shadow-lg z-10">°C</span>
        </div>
        <p className="text-xl text-white/90 capitalize mt-2 drop-shadow-lg font-medium">
          {capitalizeDescription(currentWeather.description)}
        </p>
        <p className="text-sm text-white/70 mt-1 drop-shadow-lg">
          Feels like {Math.round(main.feels_like)}°C
        </p>
      </div>

      {/* Weather Details */}
      <div className="grid grid-cols-2 gap-4">
        <div className="glass-card p-4 rounded-2xl pulse-glow border border-white/20">
          <div className="flex items-center justify-center">
            <Droplets className="text-white mr-3 drop-shadow-lg" size={24} />
            <div>
              <p className="text-sm text-white/70">Humidity</p>
              <p className="text-lg font-semibold text-white drop-shadow-lg">{main.humidity}%</p>
            </div>
          </div>
        </div>

        <div className="glass-card p-4 rounded-2xl pulse-glow border border-white/20">
          <div className="flex items-center justify-center">
            <Wind className="text-white mr-3 drop-shadow-lg" size={24} />
            <div>
              <p className="text-sm text-white/70">Wind Speed</p>
              <p className="text-lg font-semibold text-white drop-shadow-lg">{wind.speed} m/s</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional Weather Info */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="glass-card p-3 rounded-xl border border-white/20">
          <div className="flex items-center justify-center">
            <Thermometer className="text-white mr-2 drop-shadow-lg" size={20} />
            <div>
              <p className="text-xs text-white/70">Feels Like</p>
              <p className="text-sm font-semibold text-white drop-shadow-lg">{Math.round(main.feels_like)}°C</p>
            </div>
          </div>
        </div>
        
        <div className="glass-card p-3 rounded-xl border border-white/20">
          <div className="flex items-center justify-center">
            <Gauge className="text-white mr-2 drop-shadow-lg" size={20} />
            <div>
              <p className="text-xs text-white/70">Condition</p>
              <p className="text-sm font-semibold text-white drop-shadow-lg capitalize">{currentWeather.main}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;