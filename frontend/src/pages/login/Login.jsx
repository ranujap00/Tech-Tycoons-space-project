import React, { useState } from "react";
import axios from "axios";

function Login() {
  // const baseUrl = process.env.BACKEND_URL;
  let id = "64de63473aaa6865292d227d"; //get from session

  // form input
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  const userCredentials = {
    username,
    password,
  };

  function authenticateUser() {
    console.log("Executing user auth");
    axios
      .post(`http://localhost:8070/user/authenticateUser`, userCredentials)
      .then((res) => {
        if (res.data) {
          console.log("Login successfull");
          alert("Login successfull");

          // Move to next page
        } else {
          alert("Username or password is incorrect");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    authenticateUser();
  };

  return (
    <>
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
