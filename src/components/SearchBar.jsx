import React from 'react';
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex relative">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="w-full px-4 py-3 rounded-l-lg border-2 border-emerald-300 focus:border-emerald-500 focus:outline-none shadow-sm dark:bg-zinc-800 dark:border-emerald-700 dark:text-white"
        />
        <button
          type="submit"
          className="bg-emerald-500 hover:bg-emerald-600 cursor-pointer text-white px-6 py-3 rounded-r-lg transition-colors duration-300 shadow-sm"
        >
          <FaSearch />
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
