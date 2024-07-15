import React from 'react';

const WeatherInfo = ({ weatherData }) => {
  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const {
    name,
    main: { temp, humidity },
    weather,
    wind: { speed },
  } = weatherData;

  const weatherDescription = weather[0].description;
  const weatherIcon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="weather">
      <h2 className="city">{name}</h2>
      <img className="weather-icon" src={weatherIcon} alt="weather icon" />
      <h1 className="temp">{Math.round(temp)}°C</h1>
      <div className="details">
        <div className="col">
          <img src="https://img.icons8.com/ios/50/000000/humidity.png" alt="humidity icon" />
          <p>{humidity}%</p>
        </div>
        <div className="col">
          <img src="https://img.icons8.com/ios/50/000000/wind.png" alt="wind speed icon" />
          <p>{speed} m/s</p>
        </div>
      </div>
      <p>{weatherDescription}</p>
    </div>
  );
};

export default WeatherInfo;
