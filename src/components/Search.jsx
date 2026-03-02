import React from 'react';
import { useState, useEffect } from 'react';
import { API_KEY, BASE_URL } from '../utils/constants';

const Search = ({ setWeatherData }) => {
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(city.trim() !== '') {
            fetchWeatherData();
        }
    }, []);

    const fetchWeatherData = async () => {
        if (!city.trim()) return;

        setLoading(true);
        try {
            const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);

            if (!response.ok) {
                if (response.status === 404) {
                    setWeatherData({
                        cod: 404,
                        message: 'City not found. Please check the spelling and try again.'
                    });
                } else if (response.status === 401) {
                    setWeatherData({
                        cod: 401,
                        message: 'Invalid API key. Please check your configuration.'
                    });
                } else if (response.status === 429) {
                    setWeatherData({
                        cod: 429,
                        message: 'Too many requests. Please try again later.'
                    });
                } else {
                    setWeatherData({
                        cod: response.status,
                        message: `Error: ${response.status} ${response.statusText}`
                    });
                }
                return;
            }

            const jsonResponse = await response.json();
            setWeatherData(jsonResponse);
        } catch (error) {
            console.error('Network error fetching weather data:', error);
            setWeatherData({
                cod: 'network_error',
                message: 'Network error. Please check your internet connection and try again.'
            });
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeatherData();
        setCity('');
    };

    const handleOnChange = (e) => {
        setCity(e.target.value);
    };

    return (
        <div className="flex justify-center mt-8 mb-8">
            <div className="w-full max-w-md">
                <form onSubmit={handleSubmit} className="relative">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search for a city..."
                            value={city}
                            onChange={handleOnChange}
                            className="w-full px-6 py-4 pr-16 text-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 shadow-sm hover:shadow-md"
                            disabled={loading}
                        />
                        <button
                            type="submit"
                            disabled={loading || !city.trim()}
                            className="absolute right-2 top-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white p-2 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg"
                        >
                            {loading ? (
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            )}
                        </button>
                    </div>
                </form>
                {city && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
                        Press Enter or click search to get weather for "{city}"
                    </p>
                )}
            </div>
        </div>
    );
};

export default Search;