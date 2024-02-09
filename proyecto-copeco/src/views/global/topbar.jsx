import { signOut } from 'firebase/auth';
import React from 'react';
import { database } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Unidad-Medica-de-Emergencias.png';
import './topbar.css'

const Topbar = () => {

  const history = useNavigate();

  const handleClick = () =>{
    signOut(database).then(val =>{
        history('/');
    });
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container-fluid">
      <img src={logo} alt="COPECO logo" className="navbar-brand" style={{ width: '80px', height: '80px' }} />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active links" aria-current="page" href="/home">
                Bienvenido
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active links" href="/formulariocopeco">
                Hoja de Servicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active links" href="/tabla">
                Unidad Emergencias
              </a>
            </li>
          </ul>
        </div>
        <div className="ml-auto">
          <button className="bi bi-person-circle btn logout"
            style={{ fontSize: '2rem', color: 'white', cursor: 'pointer' }}
            onClick={handleClick}
          ></button>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
