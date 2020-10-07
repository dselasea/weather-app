import React from "react";

function Login() {
  return (
    <div className="col-md-6">
      <form className="form">
        <h3 className="text-center text-info">Login</h3>
        <div className="form-group">
          <label htmlFor="username" className="text-info">
            Username:
          </label>
          <br />
          <input
            type="text"
            name="username"
            id="username"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="text-info">
            Password:
          </label>
          <br />
          <input
            type="text"
            name="password"
            id="password"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="remember-me" className="text-info">
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
  );
}

export default Login;
