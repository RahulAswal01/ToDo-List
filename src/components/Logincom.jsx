import React from "react";
import { useState } from "react";

const Logincom = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const reset = () => {
    setPassword("");
    setUsername("");
  };
  return (
    <div className="page_container">
      <h1 className="main_heading">TODO X</h1>
      <div className="container">
        <form action="#">
          <h3 className="login_heading">Login Page</h3>
          <div className="input_field">
            <label htmlFor="username" className="label">
              Username :{" "}
            </label>
            <input
              className="input"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="off"
              required
            />
            <br />
            <br />
            <label htmlFor="password" className="label">
              Password :{" "}
            </label>
            <input
              className="input"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
              required
            />
            <br />
            <br />
            <button type="submit" className="submit_btn">
              Login
            </button>
            <button className="reset" onClick={reset}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Logincom;
