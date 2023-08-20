import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  // form input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userCredentials = {
    username,
    password,
  };

  function authenticateUser() {
    console.log("Executing user auth");
    axios
      .post(`http://localhost:8070/user/authenticateUser`, userCredentials)
      .then((res) => {
        if (res.data != "") {
          console.log("Login successfull");
          alert(`Login successfull`);
          sessionStorage.setItem("userId", res.data);

          // Move to next page
          navigate("/innerouter");
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
      <div className="loginContainer">
        <h2 className="loginTopic">Gemenide Login</h2>
        <form onSubmit={handleSubmit} className="loginForm">
          <div>
            <input
              id="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              placeholder="Gemenide ID"
              className="loginInput"
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="loginInput"
              placeholder="Passowrd"
              required
            />
          </div>
          <div className="loginForgotPassword">
            Forgot Password? <a href="/forgotPassword">Click Here</a>
          </div>
          <button type="submit" className="loginButton">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
