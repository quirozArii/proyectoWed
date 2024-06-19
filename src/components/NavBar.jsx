import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Asegúrate de crear e importar este archivo CSS

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <Link className="navbar-brand" to="/Inicio">VETERINARIA KIVET</Link>
          <li className="nav-item active">
            <Link className="nav-link" to="/Home">SERVICIOS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Galeria">VETERINARIOS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Introduccion">CONSULTAS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Contact">CONTACTANOS</Link>
          </li>
        </ul>
      </div>
    </nav>
    
  );
  
};

export default Navbar;