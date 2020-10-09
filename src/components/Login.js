import React, { useState } from "react";
import Weather from "./Weather";
import userDetails from "./userDetails.json";

function Login() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function validateEmail(e) {
    setEmail(e.target.value);
  }

  function validatePassword(e) {
    setPassword(e.target.value);
  }

  function validateLogIn(e) {
    if (email === userDetails.email && password === userDetails.password) {
      setLoggedIn(true);
      e.preventDefault();
    }
  }

  return (
    <div>
      {loggedIn === true ? (
        <div className="form-container">
          <Weather />
        </div>
      ) : (
        <div className="form-container">
          <h1>Log In</h1>
          <form className="login">
            <div>
              <label>Name</label>
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={validateEmail}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={validatePassword}
              />
            </div>
            <button onClick={validateLogIn}>Log In</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
