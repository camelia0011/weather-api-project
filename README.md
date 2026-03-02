#  Weather App

A clean, responsive weather application built with React and Vite. Search for any city to get real-time weather data powered by the OpenWeatherMap API, with a dark mode toggle that persists across sessions.

##  Features

-  **City Search** — Look up current weather for any city worldwide
-  **Weather Details** — Displays temperature, feels like, humidity, wind speed, and min/max temps
-  **Dark Mode** — Toggle between light and dark themes, with preference saved to localStorage
-  **Error Handling** — Friendly messages for invalid cities, bad API keys, and network errors
-  **Fast & Lightweight** — Built with Vite for instant HMR during development

##  Tech Stack

- [React 19](https://react.dev/)
- [Vite 7](https://vite.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [OpenWeatherMap API](https://openweathermap.org/api)

##  Getting Started

### Prerequisites

- An [OpenWeatherMap API key](https://home.openweathermap.org/api_keys) (free tier works)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/weather_app.git
   cd weather_app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root of the project:
   ```env
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── components/
│   ├── Search.jsx        # City search input
│   └── WeatherCard.jsx   # Weather data display
├── utils/
│   └── constants.js      # API key & base URL
├── App.jsx               # Root component with dark mode logic
└── index.css             # Global styles
```

## Environment Variables

| Variable | Description |
|---|---|
| `VITE_WEATHER_API_KEY` | Your OpenWeatherMap API key |

