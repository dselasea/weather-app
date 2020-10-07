import React from "react";

function Login(props) {
  return (
    <div
      className="col-md-6 d-flex flex-column justify-content-center align-items-center"
      style={{ background: "rgba(0,0,0,0.6)", padding: "4rem" }}
    >
      <div className="align-self-stretch">
        <form className="form">
          <h3 className="text-center text-white">{props.login}</h3>
          <div className="form-group">
            <label htmlFor="username" className="text-white">
              Username:
            </label>
            <br />
            <input
              type="text"
              name="username"
              id="username"
              className="form-control"
              style={{ background: "rgba(0,0,0,0.6)", color: "white" }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="text-white">
              Password:
            </label>
            <br />
            <input
              type="text"
              name="password"
              id="password"
              className="form-control"
              style={{ background: "rgba(0,0,0,0.6)", color: "white" }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="remember-me" className="text-white">
              <span>Remember me</span> 
              <span>
                <input id="remember-me" name="remember-me" type="checkbox" />
              </span>
            </label>
            <br />
            <input
              type="submit"
              name="submit"
              className="btn btn-info btn-block"
              value="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
