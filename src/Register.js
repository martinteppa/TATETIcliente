import React, { useState } from "react";
import "./App.css";

import axios from "axios";
import { Redirect } from "react-router-dom";

function Register() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      username: username,
      password: password,
    };

    axios
      .post("register/", data)
      .then((resp) => {
        localStorage.setItem("token", resp.data.token);
        localStorage.setItem("username", resp.data.username);
        console.log(localStorage.getItem("token"));
        window.location = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!localStorage.getItem("token")) {
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
  } else {
    return <Redirect exact to="/" />;
  }
}

export default Register;
