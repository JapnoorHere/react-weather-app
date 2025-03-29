import React from 'react';

const ForecastSection = ({ data }) => {
    if (!data || !data.list) return null;
  
    const groupedByDay = data.list.reduce((acc, item) => {
      const date = new Date(item.dt * 1000).toISOString().split('T')[0];
      
      if (!acc[date]) {
        acc[date] = [];
      }
      
      acc[date].push(item);
      return acc;
    }, {});
  
    const dailyForecasts = Object.keys(groupedByDay).map(date => {
      const dayData = groupedByDay[date];
      const noonForecast = dayData.find(item => {
        const hour = new Date(item.dt * 1000).getHours();
        return hour >= 11 && hour <= 13;
      }) || dayData[0]; 
      
      return noonForecast;
    }).slice(0, 5);
  
    return (
      <div className="bg-zinc-800 rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">5-Day Forecast</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {dailyForecasts.map((forecast) => {
            const date = new Date(forecast.dt * 1000);
            const day = date.toLocaleDateString('en-US', { weekday: 'short' });
            const dayMonth = date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
            
            return (
              <div 
                key={forecast.dt} 
                className="bg-zinc-700 rounded-lg p-4 flex flex-col items-center transition-transform hover:scale-105"
              >
                <p className="font-medium text-white">{day}</p>
                <p className="text-sm text-white mb-2">{dayMonth}</p>
                
                <img 
                  src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} 
                  alt={forecast.weather[0].description}
                  className="w-16 h-16" 
                />
                
                <p className="text-lg font-bold text-white mt-1">
                  {Math.round(forecast.main.temp)}°C
                </p>
                
                <p className="text-xs text-white capitalize text-center mt-1">
                  {forecast.weather[0].description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  
  export default ForecastSection;
