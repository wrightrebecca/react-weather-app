import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-6">
            <input
              type="Search"
              placeholder="Search for a city..."
              className="form-control"
            />
          </div>
          <div className="col-4">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h2>London</h2>
      <ul>
        <li>Tuesday 26th November, 10:58</li>
        <li>Clear sky</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="clear sky"
          />{" "}
          7°C
        </div>
        <div className="col-6">
          <ul>
            <li> Precipitation: 0%</li>
            <li> Humidity: 82%</li>
            <li> Wind: 5mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
