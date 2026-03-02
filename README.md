# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

dark mode implementation
Here's the simplest way to add dark mode toggle:

1. First update `tailwind.config.js`:

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class', // Add this line
  theme: {
    extend: {},
  },
  plugins: [],
}

2. Modify `WeatherApp.js` to add toggle button:

import { useState, useEffect } from "react"; // Add useEffect

const WeatherApp = () => {
  const [info, setInfo] = useState({});
  const [isDark, setIsDark] = useState(false); // Add dark mode state

  // Add dark mode toggle handler
  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`flex items-center flex-col min-h-screen ${isDark ? 'dark' : ''}`}>
      <button 
        onClick={toggleDarkMode}
        className="mt-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-lg"
      >
        {isDark ? '☀️ Light' : '🌙 Dark'}
      </button>
      <SearchBox setInfo={setInfo} />
      <WeatherCard info={info} />
    </div>
  );
};

3. Update components to use dark-aware backgrounds:

In `SearchBox.jsx`:
<div className="search-container p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">

In `WeatherCard.js`:
<div className="weather-card-container p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mt-4">

Explanation:
- Added `darkMode: 'class'` in config to enable class-based dark mode
- Created a toggle button that adds/removes 'dark' class from HTML element
- Added dark mode variants to background colors using `dark:bg-{color}`
- The existing text color classes (`dark:text-white`) will automatically work with dark mode
- Added simple emoji toggle button with conditional rendering

All existing dark mode styles in your components (like `dark:text-white`) will now work with the toggle. The background colors will switch between light and dark themes when toggling.
