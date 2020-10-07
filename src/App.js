import React from "react";
import Search from "./components/Search";
import Header from "./components/Header";
import WeatherDisplay from "./components/WeatherDisplay";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div
      style={{
        background:
          "url(https://images.unsplash.com/photo-1585593777231-e66669194a88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80) no-repeat center center/cover",
        minHeight: "100vh",
      }}
    >
      <div className="container py-1">
        <Header name="Weather App" />
        <Search />
        <div className="row py-4">
          <WeatherDisplay />
          <Login login="Login" />
        </div>
      </div>
    </div>
  );
}

export default App;
