import React, { useState, useEffect } from 'react';
import { Cloud } from 'lucide-react';
import { fetchWeatherData, WeatherData } from './services/weatherService';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchedCity, setSearchedCity] = useState<string>('');

  const handleSearch = async (city: string) => {
    setLoading(true);
    setError(null);
    setSearchedCity(city);
    
    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    if (searchedCity) {
      handleSearch(searchedCity);
    }
  };

  // Load default city on first render
  useEffect(() => {
    handleSearch('London');
  }, []);

  return (
    <div className="min-h-screen animated-bg p-4 relative overflow-hidden">
      {/* Floating Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <header className="text-center py-8 mb-8 relative z-10">
          <div className="flex items-center justify-center mb-4">
            <Cloud className="text-white mr-4 drop-shadow-2xl floating" size={48} />
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl text-gradient">
              Weather Report
            </h1>
          </div>
          <p className="text-white/80 text-lg drop-shadow-lg">
            Get real-time weather information for any city worldwide
          </p>
        </header>

        {/* Search Bar */}
        <div className="relative z-10">
          <SearchBar onSearch={handleSearch} isLoading={loading} />
        </div>

        {/* Content */}
        <main className="pb-8 relative z-10">
          {loading && <LoadingSpinner />}
          
          {error && !loading && (
            <ErrorMessage message={error} onRetry={handleRetry} />
          )}
          
          {weatherData && !loading && !error && (
            <WeatherCard weatherData={weatherData} />
          )}
          
          {!weatherData && !loading && !error && (
            <WelcomeMessage />
          )}
        </main>

        {/* Footer */}
        <footer className="text-center py-6 text-white/60 relative z-10">
          <p className="text-sm">
            Powered by OpenWeatherMap API • Built with React & Creative Design
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;