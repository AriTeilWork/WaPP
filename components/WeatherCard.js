import React from 'react';

const WeatherCard = ({ day }) => {
  const dateObj = new Date(day.dt * 1000);
  const dayOfWeek = dateObj.toLocaleDateString('en-US', { weekday: 'long' });
  const date = dateObj.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '.');
  const time = dateObj.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

  return (
    <div className="weather-card">
      <div className="day-info">
        <div className="day-name">{dayOfWeek}</div>
        <div className="date">{date}</div>
        <div className="time">{time}</div>
      </div>
      <div className="temperature">
        <img src={`https://openweathermap.org/img/w/${day.weather[0].icon}.png`} alt={day.weather[0].description} />
        <div className="temp-details">{Math.round(day.main.temp)}°C</div>
      </div>
      <div className="additional-info">
        <div className="info-item">
          <img src="https://openweathermap.org/img/wn/50d@2x.png" alt="Wind Speed" />
          <div className="info-text">{day.wind.speed} m/s</div>
        </div>
        <div className="info-item">
          <img src="https://openweathermap.org/img/wn/09d@2x.png" alt="Humidity" />
          <div className="info-text">{day.main.humidity}%</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
