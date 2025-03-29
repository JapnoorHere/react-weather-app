import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import RecentSearches from './components/RecentSearches';
import ThemeToggle from './components/ThemeToggle';
import ForecastSection from './components/ForecastSection';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const [recentSearches, setRecentSearches] = useState(() => {
    const storedSearches = localStorage.getItem('recentSearches');
    return storedSearches ? JSON.parse(storedSearches) : [];
  });

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme ? JSON.parse(savedTheme) : true;
  });

  useEffect(() => {
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
  }, [recentSearches]);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const fetchWeatherData = async (city) => {
    setLoading(true);
    setError(null);

    try {
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      
      if (!weatherRes.ok) throw new Error('City not found or API error');
      const weatherInfo = await weatherRes.json();
      setWeatherData(weatherInfo);
      updateRecentSearches(city);

      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      
      if (!forecastRes.ok) throw new Error('Failed to fetch forecast data');
      const forecastInfo = await forecastRes.json();
      setForecastData(forecastInfo);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateRecentSearches = (city) => {
    setRecentSearches(prev => {
      const filtered = prev.filter(item => item.toLowerCase() !== city.toLowerCase());
      return [city, ...filtered].slice(0, 5);
    });
  };

  const toggleDarkMode = () => setDarkMode(prev => !prev);
  
  const handleRefresh = () => {
    if (weatherData) fetchWeatherData(weatherData.name);
  };
  
  const handleSearchSelection = (city) => fetchWeatherData(city);

  return (
    <div className={`min-h-screen py-8 px-4 transition-colors duration-300 ${darkMode ? 'dark:bg-emerald-900 dark:text-white' : 'bg-emerald-100 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Weather Dashboard</h1>
          <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </header>
        
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="md:col-span-2">
            <SearchBar onSearch={fetchWeatherData} />
            <p className='opacity-30'>Once you search, your recent searches will appear.</p>
          </div>
          <div className="md:col-span-1">
            <RecentSearches searches={recentSearches} onSearchSelect={handleSearchSelection} />
          </div>
        </section>
        
        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}
        
        {weatherData && !loading && !error && (
          <>
            <div className="mb-6">
              <WeatherCard data={weatherData} onRefresh={handleRefresh} />
            </div>
            {forecastData && (
              <div className="mb-6">
                <ForecastSection data={forecastData} />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
