# zynetic-weather-app-dashboard
A Weather Dashboard app built with React.js that allows users to search for any city and view its current weather information along with a 5-day forecast.



- Features:
  - City Search
  - Display Weather information
  - 5 Day Weather Forecast
  - 5 Recent Searches
  - Refresh Button for weather
  - Dark/Light Theme Toggle
  - Loading States (using css animation)

- Tech Stack Used
    - React.js (Vite)
    - Tailwind CSS
    - OpenWeatherMap API
    - Deployment: Vercel

-Installation
  <ol>
    <li>Clone the repository</li>
    <li>Run: npm i</li>
    <li>Create .env file and add this:</li>
            
      VITE_WEATHER_API_KEY = YOUR_API_KEY

  <li>Run command to start: npm run dev</li>
    
  </ol>


  - API Details:
    - Current Weather API: https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
    - 5-Day Forecast API: https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}&units=metric
