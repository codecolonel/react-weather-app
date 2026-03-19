import React from "react";

function capitalizeWords(text) {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function WeatherCard({ weather }) {
  const city = weather?.name ?? "--";
  const temp = weather?.main?.temp ?? "--";
  const humidity = weather?.main?.humidity ?? "--";
  const wind = weather?.wind?.speed ?? "--";
  const description = weather?.weather?.[0]?.description
    ? capitalizeWords(weather.weather[0].description)
    : "--";

  const iconCode = weather?.weather?.[0]?.icon;
  const iconUrl = iconCode
    ? `https://openweathermap.org/img/wn/${iconCode}@4x.png`
    : null;

  if (!weather) {
    return (
      <div className="glass-panel">
        <div className="icon">🌍</div>
        <p>Discover the weather in your city</p>
      </div>
    );
  }

  return (
    <div className="weather-card">
      <h2 className="city-name">{city}</h2>
      <p className="weather-desc">{description}</p>
      
      {iconUrl && (
        <div className="weather-icon-wrapper">
          <div className="weather-icon-glow"></div>
          <img className="weather-icon" src={iconUrl.replace('@2x', '@4x')} alt={description} />
        </div>
      )}

      <div className="temperature">
        {typeof temp === "number" ? Math.round(temp) : temp}
        <span>°C</span>
      </div>

      <div className="stats-container">
        <div className="stat-box">
          <div className="stat-icon">💧</div>
          <div className="stat-info">
            <span className="stat-value">{humidity}%</span>
            <span className="stat-label">Humidity</span>
          </div>
        </div>
        <div className="stat-box">
          <div className="stat-icon">💨</div>
          <div className="stat-info">
            <span className="stat-value">{wind} m/s</span>
            <span className="stat-label">Wind</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;