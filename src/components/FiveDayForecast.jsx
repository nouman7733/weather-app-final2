import React from "react";
import './FiveDayForecast.css';

// const cityName = {
//   textAlign: "left",
//   fontSize: "1.5rem",
//   fontWeight: "light",
//   color: "#333",
// };

function FiveDayForecast({ forecast }) {
  if (!forecast || forecast.length === 0) {
    return <div>Loading forecast...</div>;
  }

  return (
    <div className="forecast-container">
      {forecast.map((day, index) => (
        <div key={index} className="forecast-card">
          <p className="day-name">{new Date(day.dt_txt).toLocaleDateString("en-US", { weekday: "short" })}</p>
          <p className="temperature">{day.main.temp.toFixed()}°F</p>
        </div>
      ))}
    </div>
  );
}

export default FiveDayForecast;