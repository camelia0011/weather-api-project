export const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
export const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

console.log("KEY:", API_KEY);