import React from 'react';

const WeatherInfo = ({ weatherData }) => {
  if (!weatherData) return null;

  return (
    <div className="weather">
      <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} className="weather-icon" alt="Weather Icon" />
      <h1 className="temp">{Math.round(weatherData.main.temp)}°C</h1>
      <h2 className="city">{`${weatherData.name}, ${weatherData.sys.country}`}</h2>
      <div className="details">
        <div className="col">
          <img src="https://openweathermap.org/img/wn/09d@2x.png" alt="Humidity Icon" />
          <div>
            <p className="humidity">{weatherData.main.humidity}%</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className="col">
          <img src="https://openweathermap.org/img/wn/50d@2x.png" alt="Wind Speed Icon" />
          <div>
            <p className="wind">{weatherData.wind.speed} m/s</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
