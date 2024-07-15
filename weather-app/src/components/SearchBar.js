import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city) {
      onSearch(city);
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter city name"
        spellCheck="false"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <div className="buttons">
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
