import React from "react";

function Search() {
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2 my-5">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search Cities"
          />
          <div className="input-group-append">
            <button className="btn btn-secondary" type="button">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
