import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Tablero.css";

function LaPartida() {
  const { codigo } = useParams();
  const url = codigo + "/";
  const [partida, setpartida] = useState({
    id: null,
    codigo: null,
    finished: false,
    message: "",
    turno: null,
    tablero: null,
    cantidad: null,
    jugadorX: null,
    jugadorO: null,
  });

  const [tablero, settablero] = useState([
    "s",
    "s",
    "s",
    "s",
    "s",
    "s",
    "s",
    "s",
    "s",
  ]);

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        console.log(resp.data.codigo);
        setpartida({
          id: resp.data.id,
          codigo: resp.data.codigo,
          finished: resp.data.finished,
          message: resp.data.message,
          turno: resp.data.turno,
          tablero: resp.data.tablero,
          cantidad: resp.data.cantidad,
          jugadorX: resp.data.jugadorX,
          jugadorO: resp.data.jugadorO,
        });

        demountTablero(resp.data.tablero);
      })
      .catch((err) => {
        console.log(err);
      });
    setTimeout(() => {
      window.location.reload(false);
    }, 2000);
  }, []);

  const demountTablero = (a) => {
    let b = a.substring(1, a.length - 1);
    b = b.split(",");
    settablero(b);
  };
  const mountTablero = (event) => {
    console.log(event.target.id);
    let putJson = {
      username: localStorage.getItem("username"),
      token: localStorage.getItem("token"),
      lastMovement: parseInt(event.target.id),
    };
    console.log(putJson);
    axios
      .put(url, putJson)
      .then((resp) => {})
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="board">
        <div className="squares elem1" onClick={mountTablero} id={1}>
          {tablero[0] === "s" ? " " : tablero[0]}
        </div>
        <div className="squares elem2" onClick={mountTablero} id={2}>
          {tablero[1] === "s" ? " " : tablero[1]}
        </div>
        <div className="squares elem3" onClick={mountTablero} id={3}>
          {tablero[2] === "s" ? " " : tablero[2]}
        </div>
        <div className="squares elem4" onClick={mountTablero} id={4}>
          {tablero[3] === "s" ? " " : tablero[3]}
        </div>
        <div className="squares elem5" onClick={mountTablero} id={5}>
          {tablero[4] === "s" ? " " : tablero[4]}
        </div>
        <div className="squares elem6" onClick={mountTablero} id={6}>
          {tablero[5] === "s" ? " " : tablero[5]}
        </div>
        <div className="squares elem7" onClick={mountTablero} id={7}>
          {tablero[6] === "s" ? " " : tablero[6]}
        </div>
        <div className="squares elem8" onClick={mountTablero} id={8}>
          {tablero[7] === "s" ? " " : tablero[7]}
        </div>
        <div className="squares elem9" onClick={mountTablero} id={9}>
          {tablero[8] === "s" ? " " : tablero[8]}
        </div>
      </div>
      {partida.message}
      {tablero}
    </>
  );
}

export default LaPartida;
