import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };

    axios
      .post("login/", data)
      .then((resp) => {
        localStorage.setItem("token", resp.data.token);
        localStorage.setItem("username", username);
        console.log(localStorage.getItem("token"));
        window.location = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} method="POST">
        <label>
          username:
          <input
            name="username"
            type="text"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Login;
