import React from 'react';

const RecentSearches = ({ searches, onSearchSelect }) => {
    if (!searches || searches.length === 0) {
      return null;
    }
  
    return (
      <div className="bg-white dark:bg-zinc-800 rounded-lg shadow p-4">
        <h3 className="text-sm font-medium text-emerald-700 dark:text-emerald-300 mb-2">Recent Searches</h3>
        <div className="flex flex-wrap gap-2">
          {searches.map((city, index) => (
            <button
              key={`${city}-${index}`}
              onClick={() => onSearchSelect(city)}
              className="bg-emerald-100  cursor-pointer dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-sm hover:bg-emerald-200 dark:hover:bg-emerald-800/40 transition-colors"
            >
              {city}
            </button>
          ))}
        </div>
      </div>
    );
  }
  
  export default RecentSearches;
