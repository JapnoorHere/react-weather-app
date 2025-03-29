import React from 'react';

const Loader = () => {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="loader">
          <div className="relative">
            <div className="w-16 h-8 bg-zinc-600 rounded-full animate-pulse"></div>
            <div className="absolute top-3 left-2 w-12 h-6 bg-zinc-300 dark:bg-zinc-600 rounded-full"></div>
            <div className="absolute top-0 left-5 w-10 h-10 bg-zinc-300 dark:bg-zinc-600 rounded-full"></div>
            
            <div className="absolute bottom-0 left-3 w-1 h-3 bg-emerald-400 rounded-full animate-rainDrop"></div>
            <div className="absolute bottom-0 left-7 w-1 h-3 bg-emerald-400 rounded-full animate-rainDrop delay-100"></div>
            <div className="absolute bottom-0 left-11 w-1 h-3 bg-emerald-400 rounded-full animate-rainDrop delay-200"></div>
          </div>
        </div>
        <p className="ml-4 text-lg font-medium text-gray-600 dark:text-gray-300">Loading weather data...</p>
      </div>
    );
  }
  
  export default Loader;
  
