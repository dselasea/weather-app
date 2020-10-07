import React from "react";

function Search() {
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2 py-2">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search Cities"
            style={{
              background: "rgba(0,0,0,0.6",
              padding: "1.5rem",
              color: "white",
            }}
          />
          <div className="input-group-append">
            <button className="btn btn-dark px-4" type="button">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
