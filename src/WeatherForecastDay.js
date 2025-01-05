import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°C`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°C`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <img
        className="ForecastIcon"
        src={props.data.condition.icon_url}
        alt={props.data.condition.description}
      />
      <br />
      <span className="WeatherForecast-temperature-max">
        {maxTemperature()} |
      </span>
      <span className="WeatherForecast-temperature-min">
        {minTemperature()}
      </span>
    </div>
  );
}
