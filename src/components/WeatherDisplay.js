import React, { useState, useEffect } from "react";

function WeatherDisplay() {
  const [weatherInfo, setInfo] = useState({});

  useEffect(() => {
    fetch(
      "http://api.weatherstack.com/current?access_key=457bb76447a0b93e612b3bf4285deea5&query=New%20York"
    )
      .then((response) => response.json())
      .then((data) => setInfo(data));
  }, [weatherInfo]);

  function showweatherData() {
    const time = weatherInfo.current.observation_time;
  }

  return (
    <div className="col-md-6 col">
      <p className=" display-3 text-white">{time}</p>
      <button className="btn btn-info" onClick={showweatherData}>
        Show Weather Data
      </button>
    </div>
  );
}

export default WeatherDisplay;
