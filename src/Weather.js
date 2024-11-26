import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="Search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
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
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="clear sky"
              className="float-left"
            />{" "}
            <div className="float-left">
              <span className="temperature">7</span>
              <span className="unit">°C</span>
            </div>
          </div>
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
