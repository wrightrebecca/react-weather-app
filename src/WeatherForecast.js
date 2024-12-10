import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "37e9da10fet0ob8e3fe3769dc4fd8d70";
  let latitude = props.coordinates.latitude;
  let longitude = props.coordinates.longitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Wednesday</div>
          <img
            className="ForecastIcon"
            src={props.data.icon}
            alt={props.data.description}
          />
          <br />
          <span className="WeatherForecast-temperature-max">9°C |</span>
          <span className="WeatherForecast-temperature-min">3°C</span>
        </div>
      </div>
    </div>
  );
}
