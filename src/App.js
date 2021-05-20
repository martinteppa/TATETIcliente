import React from "react";
import Register from "./Register";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Partidas from "./Partidas";
import Navbar from "./Navbar";
import Login from "./Login";
import LaPartida from "./LaPartida";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Partidas}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>

        <Route path="/:codigo" component={LaPartida} />
      </Switch>
    </Router>
  );
}
export default App;
