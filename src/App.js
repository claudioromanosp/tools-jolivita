import React from "react";
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from "./pages/Home";
import Contador from "./pages/Contador-caracteres";
import Encurtador from "./pages/Encurtador";
import Calculo from "./pages/Calculo-gs";


function App() {
  return (
    <>
    <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Calculo-gs">Calculo</Link></li>
        <li><Link to="/Contador-caracteres">Contador</Link></li>
        <li><Link to="/Encurtador">Encurtador</Link></li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home /> }> </Route>
        <Route path="/Calculo-gs" element={<Calculo />}> </Route>
        <Route path="/Contador-caracteres" element={<Contador />}> </Route>
        <Route path="/Encurtador" element={<Encurtador />}> </Route>
      </Routes>
    </Router>

    </>
  );
}

export default App;
