import { useState } from "react";
import "./App.css";
import SearchInput from "./components/SearchInput";
import WeatherCard from "./components/WeatherCard";

function getTheme(weather) {
  const t = weather?.main?.temp;
  if (t == null) return "";
  if (t < 10) return "theme-cold";
  if (t < 25) return "theme-mild";
  if (t < 35) return "theme-warm";
  return "theme-hot";
}

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchWeather(city) {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e8de5dc725e636a8cf68ee9af5b19927&units=metric`,
      );
      const data = await response.json();

      setTimeout(() => {
        if (data.cod === "404") {
          setError("City not found");
          setWeather(null);
        } else {
          setWeather(data);
        }
        setLoading(false);
      }, 400);
    } catch (err) {
      setError("Network connection failed");
      setLoading(false);
    }
  }

  return (
    <div className={`app-root ${getTheme(weather)}`}>
      <h1 className="app-title">
        <span className="title-icon">✨</span> Weather
      </h1>

      <SearchInput onSearch={fetchWeather} />

      {loading ? (
        <div className="glass-panel">
          <div className="loader" />
          <p>Analyzing atmosphere...</p>
        </div>
      ) : error ? (
        <div className="glass-panel error-panel">
          <div className="icon">⚠️</div>
          <p>{error}</p>
        </div>
      ) : (
        <WeatherCard weather={weather} />
      )}
    </div>
  );
}

export default App;
