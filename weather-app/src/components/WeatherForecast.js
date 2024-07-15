import React from 'react';
import WeatherCard from './WeatherCard';

const WeatherForecast = ({ forecastData }) => {
  if (!forecastData) return null;

  const sortedData = forecastData.list.sort((a, b) => a.dt - b.dt);

  return (
    <div className="slider-container" id="weatherForecast">
      {sortedData.map(day => (
        <WeatherCard key={day.dt} day={day} />
      ))}
    </div>
  );
};

export default WeatherForecast;
