import { signOut } from 'firebase/auth';
import React from 'react';
import { database } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Topbar = () => {

  const history = useNavigate();

  const handleClick = () =>{
    signOut(database).then(val =>{
        history('/');
    });
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <h1 className="navbar-brand">COPECO</h1>
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
              <a className="nav-link active" aria-current="page" href="/home">
                Bienvenido
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/formulariocopeco">
                Hoja de Servicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/tabla">
                Unidad Emergencias
              </a>
            </li>
          </ul>
        </div>
        <div className="ml-auto">
          <button className="bi bi-person-circle btn-primary btn"
            style={{ fontSize: '2rem', color: 'white', cursor: 'pointer' }}
            onClick={handleClick}
          ></button>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
