import React from 'react';
import { FiRefreshCw } from 'react-icons/fi';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { FaWind } from 'react-icons/fa';
import { WiHumidity } from 'react-icons/wi';

const WeatherCard = ({ data, onRefresh }) => {
  if (!data) return null;

  const { name, sys, weather, main, wind } = data;

  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}.png`;

  const today = new Date();
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const formattedDate = today.toLocaleDateString('en-US', dateOptions);

  return (
    <div className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.01]">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {name}, {sys.country}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">{formattedDate}</p>
          </div>
          <button
            onClick={onRefresh}
            className="p-2 rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Refresh weather data"
          >
            <FiRefreshCw />
          </button>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center justify-center">
            <img src={iconUrl} alt={weather[0].description} className="w-20 h-20" />
            <div className="ml-2">
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
                {Math.round(main.temp)}°C
              </h3>
              <p className="text-gray-500 dark:text-gray-400 capitalize">
                {weather[0].description}
              </p>
            </div>
          </div>

          <div className="mt-4 md:mt-0 md:ml-auto flex flex-col sm:flex-row gap-4">
            <div className="flex items-center">
              <div className="bg-emerald-50 dark:bg-emerald-900/30 p-2 rounded-full">
                <MdKeyboardArrowUp className="h-5 w-5 text-emerald-500" />
              </div>
              <div className="ml-2">
                <p className="text-xs text-gray-500 dark:text-gray-400">Feels Like</p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {Math.round(main.feels_like)}°C
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-emerald-50 dark:bg-emerald-900/30 p-2 rounded-full">
                <FaWind className="h-5 w-5 text-emerald-500" />
              </div>
              <div className="ml-2">
                <p className="text-xs text-gray-500 dark:text-gray-400">Wind Speed</p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {Math.round(wind.speed * 3.6)} km/h
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-emerald-50 dark:bg-emerald-900/30 p-2 rounded-full">
                <WiHumidity className="h-5 w-5 text-emerald-500" />
              </div>
              <div className="ml-2">
                <p className="text-xs text-gray-500 dark:text-gray-400">Humidity</p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {main.humidity}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
