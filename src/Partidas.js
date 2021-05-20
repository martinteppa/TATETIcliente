import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
        console.log(data);
      })
      .catch((error) => console.error("error"));
  };

  useEffect(() => {
    loadPartidas();
  }, []);

  return (
    <div className="listadopartidas">
      <ul>
        {data.map((element) => (
          <li>
            <Link key={element}>{element}</Link>
            agregar un to al link
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Partidas;
