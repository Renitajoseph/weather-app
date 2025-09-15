import React from 'react';
import { Sun, Cloud, CloudRain } from 'lucide-react';

const WelcomeMessage: React.FC = () => {
  return (
    <div className="text-center py-12 max-w-lg mx-auto glass-card rounded-3xl p-8 floating">
      <div className="flex justify-center items-center space-x-4 mb-6">
        <Sun className="text-yellow-300 animate-spin-slow drop-shadow-2xl" size={48} />
        <Cloud className="text-white animate-bounce drop-shadow-2xl" size={48} />
        <CloudRain className="text-blue-300 animate-pulse drop-shadow-2xl" size={48} />
      </div>
      <h2 className="text-2xl font-bold text-white mb-4 drop-shadow-lg text-gradient">
        Welcome to Weather Report
      </h2>
      <p className="text-white/80 leading-relaxed drop-shadow-lg">
        Enter any city name above to get real-time weather information including temperature, 
        humidity, wind speed, and current conditions.
      </p>
      <div className="mt-6 flex justify-center space-x-2">
        <div className="w-3 h-3 bg-white/40 rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
        <div className="w-3 h-3 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
      </div>
    </div>
  );
};

export default WelcomeMessage;