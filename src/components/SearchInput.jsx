import React, { useState } from "react";

function SearchInput({ onSearch }) {
  const [city, setCity] = useState("");

  function handleSearch() {
    if (city.trim()) {
      onSearch(city);
    }
  }

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchInput;