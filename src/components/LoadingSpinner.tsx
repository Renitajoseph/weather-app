import React from 'react';
import { Cloud } from 'lucide-react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 loading-spinner">
      <div className="relative floating">
        <Cloud 
          className="text-white drop-shadow-2xl animate-bounce" 
          size={64}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-white/60 rounded-full animate-ping opacity-30"></div>
      </div>
      <p className="text-lg text-white/90 mt-4 animate-pulse drop-shadow-lg font-medium">
        Fetching weather data...
      </p>
      <div className="mt-4 flex space-x-1">
        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;