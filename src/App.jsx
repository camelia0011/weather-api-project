import { useState, StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Search from './components/Search';
import WeatherCard from './components/WeatherCard';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isDark, setIsDark] = useState(false); // dark mode state

  // initialize from localStorage so the preference persists across reloads
  useEffect(() => {
    const saved = localStorage.getItem('isDark');
    if (saved === 'true') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(prev => {
      const next = !prev;
      localStorage.setItem('isDark', next);
      return next;
    });
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`flex items-center flex-col min-h-screen bg-gray-100 dark:bg-gray-900 ${isDark ? 'dark' : ''}`}>
      <h1 className='text-3xl font-bold text-center text-blue-600 dark:text-blue-300'>Weather App</h1>
      <button 
        onClick={toggleDarkMode}
        className="mt-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200"
      >
        {isDark ? '☀️ Light' : '🌙 Dark'}
      </button>
      <Search setWeatherData={setWeatherData} />
      <WeatherCard weatherData={weatherData} />
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
