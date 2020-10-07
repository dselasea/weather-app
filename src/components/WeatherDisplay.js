import React from "react";

function WeatherDisplay() {
  return (
    <div className="col-md-6">
      <div className="card p-5" style={{ border: "0" }}>
        <div className="card-body">
          <h5 className="card-title">city: Accra</h5>
          <h6 className="card-subtitle mb-2 text-muted">Night: 10:05PM</h6>
          <div className="d-flex justify-content-between">
            <h2 className="card-text">5 &#176;C</h2>
            <i className="fas fa-cloud-sun-rain fa-9x text-info"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;
