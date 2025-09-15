import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

interface SearchBarProps {
  onSearch: (city: string) => void;
  isLoading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mb-8">
      <div className="relative search-container">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <MapPin className="h-5 w-5 text-white/60 drop-shadow-lg" />
        </div>
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter city name..."
          disabled={isLoading}
          className="w-full pl-12 pr-16 py-4 text-lg glass-card border-2 border-white/20 rounded-2xl focus-ring outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-white placeholder-white/60 shadow-2xl"
        />
        <button
          type="submit"
          disabled={isLoading || !city.trim()}
          className="absolute inset-y-0 right-0 px-6 flex items-center justify-center btn-primary disabled:opacity-50 disabled:cursor-not-allowed rounded-r-2xl transition-all duration-300 group shadow-lg"
        >
          <Search 
            className={`h-5 w-5 text-white drop-shadow-lg transition-transform duration-200 ${
              isLoading ? 'animate-pulse' : 'group-hover:scale-110'
            }`} 
          />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;