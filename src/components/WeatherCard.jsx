import React from 'react';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) {
    return (
      <div className="flex justify-center items-center mt-8">
        <div className="text-center text-gray-500 dark:text-gray-400 text-lg">No weather data available</div>
      </div>
    );
  }

  // Handle error responses
  if (weatherData.cod && weatherData.cod !== 200) {
    const isError = typeof weatherData.cod === 'string' || weatherData.cod >= 400;

    if (isError) {
      return (
        <div className="flex justify-center mt-8">
          <div className="max-w-md w-full bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 text-center">
              <div className="text-red-500 mb-2">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-2">
                {weatherData.cod === 404 ? 'City Not Found' :
                 weatherData.cod === 401 ? 'API Key Error' :
                 weatherData.cod === 429 ? 'Rate Limit Exceeded' :
                 'Error'}
              </h3>
              <p className="text-red-600 dark:text-red-400">{weatherData.message}</p>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="flex justify-center mt-8">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
          <h2 className="text-2xl font-bold text-center mb-2">{weatherData.name}</h2>
          <div className="text-center">
            <div className="text-4xl font-bold mb-1">{Math.round(weatherData.main.temp)}°C</div>
            <div className="text-blue-100 capitalize">{weatherData.weather[0].description}</div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Feels Like</div>
              <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">{Math.round(weatherData.main.feels_like)}°C</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Humidity</div>
              <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">{weatherData.main.humidity}%</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Wind Speed</div>
              <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">{weatherData.wind.speed} km/h</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Min/Max Temp</div>
              <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {Math.round(weatherData.main.temp_min)}°/{Math.round(weatherData.main.temp_max)}°
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;