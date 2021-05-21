import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function Partidas() {
  const [data, setdata] = useState(Array);

  const loadPartidas = () => {
    axios

      .get("")
      .then((response) => {
        const allPartidas = response.data;
        let newArray = [];
        allPartidas.forEach((element) => {
          newArray.push(element.codigo);
        });
        setdata(newArray);
      })
      .catch((error) => console.error("error"));
  };

  useEffect(() => {
    loadPartidas();
  }, []);

  const entrarAPartida = (e) => {
    e.preventDefault();
    let data = {
      username: localStorage.getItem("username"),
      token: localStorage.getItem("token"),
    };

    if (data.username != null && data.token != null) {
      let newUrl = e.target.id + "/";
      console.log(newUrl);
      axios.post(newUrl, data).then((resp) => {
        window.location = "/" + e.target.id;
      });
    } else {
      alert("debes loguearte antes");
    }
  };

  return (
    <div className="listadopartidas">
      <ul>
        {data.map((element) => (
          <li key={element}>
            <a href="" onClick={entrarAPartida} id={element}>
              entrar a {element}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Partidas;
