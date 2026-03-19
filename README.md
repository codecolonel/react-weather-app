# Pastel Weather App 🌤️

A beautiful, minimal, and eye-soothing weather application built with React and Vite. It provides real-time weather data with dynamic, pastel-themed backgrounds that change based on the current temperature.

## Live Demo 🌐

https://react-weather-app-one-peach.vercel.app/

## Features ✨

- **Real-time Weather Data:** Fetches current weather conditions including temperature, humidity, and wind speed using the OpenWeatherMap API.
- **Dynamic Pastel Themes:** The app background changes its theme smoothly based on the temperature:
  - ❄️ **Cold** (< 10°C)
  - 🍃 **Mild** (10°C - 24°C)
  - ☀️ **Warm** (25°C - 34°C)
  - 🔥 **Hot** (≥ 35°C)
- **Clean UI:** Soft pastel color scheme, subtle shadows, rounded corners, and ample spacing.
- **Responsive Design:** Completely mobile-friendly, seamlessly centering the weather card on any screen size.
- **Search Functionality:** Easily search for any city to see its current conditions, complete with loading states and error handling for not found cities.

## Tech Stack 🛠️

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** Vanilla CSS 
- **API:** [OpenWeatherMap](https://openweathermap.org/)

## Getting Started 🚀

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation
1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd Weather-App
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Scripts

- `npm run dev` - Starts the development server.
- `npm run lint` - Runs ESLint to check code quality.
- `npm run build` - Builds the app for production.
- `npm run preview` - Previews the production build locally.

## Project Structure 📁

- `src/App.jsx` - Main application logic, API fetching, and dynamic theme switching.
- `src/components/SearchInput.jsx` - Reusable search bar component for city lookups.
- `src/components/WeatherCard.jsx` - Display component for rendering weather data and statistics.
- `src/App.css` - Application-specific styles and pastel themes.
- `src/index.css` - Global styles and resets.

---
*Built to keep weather checking calm and beautiful.*
