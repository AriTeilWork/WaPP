import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherInfo from './components/WeatherInfo';
import WeatherForecast from './components/WeatherForecast';
import MyMap from './components/Map';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [coords, setCoords] = useState({ lat: 51.505, lon: -0.09 });

  const apiKey = '36aa82a0a89fb8e313e0af79be98237c';

  useEffect(() => {
    if (coords) {
      getWeatherByCoords(coords.lat, coords.lon);
      getWeeklyForecast(coords.lat, coords.lon);
    }
  }, [coords]);

  const getWeatherByCoords = async (lat, lon) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getWeeklyForecast = async (lat, lon) => {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`;
    try {
      const response = await fetch(forecastUrl);
      const data = await response.json();
      setForecastData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getWeatherByCity = async (city) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${encodeURIComponent(city)}&appid=${apiKey}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setWeatherData(data);
      setCoords({ lat: data.coord.lat, lon: data.coord.lon });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="cards">
      <div className="sticky">
        <SearchBar onSearch={getWeatherByCity} />
      </div>
      <MyMap setCoords={setCoords} />
      <WeatherInfo weatherData={weatherData} />
      <WeatherForecast forecastData={forecastData} />
    </div>
  );
};

export default App;
