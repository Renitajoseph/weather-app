const API_KEY = 'f6cb9ea3631b507b599a4b97695b1223';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
  sys: {
    country: string;
  };
}

export const fetchWeatherData = async (city: string): Promise<WeatherData> => {
  if (!city.trim()) {
    throw new Error('City name is required');
  }

  const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
  
  const response = await fetch(url);
  
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('City not found. Please check the spelling and try again.');
    } else if (response.status === 401) {
      throw new Error('API key is invalid.');
    } else {
      throw new Error('Failed to fetch weather data. Please try again later.');
    }
  }
  
  const data = await response.json();
  return data;
};