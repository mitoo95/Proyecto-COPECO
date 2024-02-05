import React, { useState } from 'react'
import { database } from '../../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function RegisterandLogin() {

    const [login, setLogin] = useState(false)

    const history = useNavigate()

    const handleSubmit = (e, type) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (type === "registrarse") {
          createUserWithEmailAndPassword(database, email, password)
            .then((data) => {
              console.log(data, "authData");
              history("/home");
            })
            .catch((err) => {
              alert("Correo ya registrado!!");
              setLogin(true);
            });
        } else {
          signInWithEmailAndPassword(database, email, password)
            .then((data) => {
              console.log(data, "authData");
              history("/home");
            })
            .catch((err) => {
              alert("Credenciales invalidas!!");
            });
        }
      };

      const handleReset = () =>{
        history("/reset");
      }

    return (
        <div class="contentf" >
            <div className="contenedorPrincipal">
            <div style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1%"
            }}>
                <div className={login === false ? "activeColor" : "pointer"} style={{ marginRight: "10px" }} onClick={() => setLogin(false)}>
                    Registrarse
                </div>
                <div className={login === true ? "activeColor" : "pointer"} onClick={() => setLogin(true)}>
                    Acceder
                </div>
            </div>

                <h2
                    style={{
                    width: "100%",
                    textAlign: "center",
                    marginTop: "1%",
                    marginBottom: "20px",
                    borderBottom: "2px solid black"
                    }}
                >
                {login?'Acceder':'Registrarse'}
            </h2>
                <div
                    style={{ width: "30%"}}
                    className="container rounded contenedorFormulario"
                >
                    <form onSubmit={(e)=>handleSubmit(e, login?"acceder":"registrarse")} className="row g-3">
                        <input name='email'
                            placeholder='Email'
                            type='email'
                            className="form-control rounded"
                        />
                        <br/>
                        <input name='password'
                            type='password'
                            placeholder='Password'
                            className="form-control rounded"
                        />
                        <br/>
                        <p onClick={handleReset}>Olvidaste Contraseña?</p>
                        <br/>
                        <button className="btn btn-primary">{login?'Acceder':'Registrarse'}</button>
                    </form>
                </div>    
            </div>
        </div>
    )
}

export default RegisterandLogin;