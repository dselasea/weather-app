import React from "react";
import Search from "./components/Search";
import Header from "./components/Header";
import WeatherDisplay from "./components/WeatherDisplay";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div>
      <div className="container">
        <Header name="Weather App" />
        <Search />
        <div className="row py-5">
          <WeatherDisplay />
          <Login login="Login" />
        </div>
      </div>
    </div>
  );
}

export default App;
