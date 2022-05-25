import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Pages/login";
import Users from "./Pages/Users";
import Contato from "./Pages/Contato";
import Perfil from "./Pages/Perfil";
import React from "react";
import { Button } from "./components";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/Perfil" element={<Perfil />} />
      </Routes>
    </Router>
  );
}

export default App;
