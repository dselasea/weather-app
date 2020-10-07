import React, { useState } from "react";

function WeatherDisplay() {
  const [time, setTime] = useState("10:05PM");
  const [date, setDate] = useState("Wednesday, 7 October 2020");
  const [city, setCity] = useState("Accra");
  const [country, setCountry] = useState("Ghana");
  const [temperature, setTemperature] = useState("5");

  return (
    <div className="col-md-6 col">
      <p className=" display-3 text-white">{time}</p>
      <p className="display-5 text-white">{date}</p>
      <p className="display-5 text-white">{country}</p>
      <p className="display-4 text-white">{city}</p>
      <p className="display-2 text-white">{temperature} &#176; C</p>
    </div>
  );
}

export default WeatherDisplay;
