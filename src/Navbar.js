import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  let data = {
    username: localStorage.getItem("username"),
    token: localStorage.getItem("token"),
  };
  const showButton = (e) => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const logout = () => {
    const list = ["username", "token"];
    axios
      .post("logout/", data)
      .then(
        list.forEach((element) => {
          localStorage.removeItem(element);
          window.location = "/";
        })
      )
      .catch((message) => {
        console.log(message);
      });
  };

  useEffect(() => {
    showButton();
  }, []);

  const crearPartida = () => {
    axios
      .post("crearpartida/", data)
      .then((resp) => {
        window.location = "/" + resp.data.codigo;
      })
      .catch((message) => alert("Ya esta en partida!!"));
  };

  window.addEventListener("resize", showButton);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {localStorage.getItem("token") && (
            <li className="nav-item">
              <Link className="nav-links" onClick={crearPartida}>
                Crear Partida
              </Link>
            </li>
          )}
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Partidas
            </Link>
          </li>

          {!localStorage.getItem("token") && (
            <li className="nav-item">
              <Link
                to="/register"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Register
              </Link>
            </li>
          )}
          {localStorage.getItem("token") && (
            <li className="nav-item">
              <Link className="nav-links" onClick={logout}>
                Logout
              </Link>
            </li>
          )}
          {!localStorage.getItem("token") && (
            <li className="nav-item">
              <Link to="/login" className="nav-links">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
