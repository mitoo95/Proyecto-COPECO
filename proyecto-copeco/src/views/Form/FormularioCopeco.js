import React, { Fragment } from "react";
import "./FormStyle.css";
const formularioCopeco = () => {
  return (
    <Fragment>
      <div class="contentf">
        <div className="contenedorPrincipal">
          <h1
            style={{
              width: "100%",
              textAlign: "center",
              marginTop: "1%",
              marginBottom: "20px",
            }}
          >
            COPECO
          </h1>
          <h2
            style={{
              width: "100%",
              textAlign: "center",
              marginTop: "1%",
              marginBottom: "20px",
              borderBottom: "2px solid black",
            }}
          >
            Unidad Medica de Emergencias
          </h2>
          <div
            style={{ width: "90%" }}
            className="container rounded contenedorFormulario"
          >
            <div>
              
              <form className="row g-3">
                
                <div className="col-md-3">
                  <label
                    htmlFor="inputAddress"
                    className="form-label letrasFormulario"
                    style={{ marginTop: "5%" }}
                  >
                    Nombre del Paciente
                  </label>
                  <input
                    id="i_nombre"
                    type="text"
                    className="form-control rounded"
                    placeholder="Eje. Carlos Flores"
                    name="nombre"
                    //onChange={handleInputChance}
                    required
                  ></input>
                </div>
                <div className="col-md-1">
                  <label
                    htmlFor="inputAddress"
                    className="form-label letrasFormulario"
                    style={{ marginTop: "5%" }}
                  >
                    Genero
                  </label>
                  <fieldset>
                    <div>
                      <input
                        type="radio"
                        id="contactChoice1"
                        name="Genero"
                        value="M"
                      />
                      <label for="contactChoice1">Masculino</label>

                      <input
                        type="radio"
                        id="contactChoice2"
                        name="Genero"
                        value="F"
                      />
                      <label for="contactChoice2">Femenino</label>
                    </div>
                  </fieldset>
                </div>
                <div className="col-md-3">
                  <label
                    htmlFor="inputAddress"
                    className="form-label letrasFormulario"
                    style={{ marginTop: "5%" }}
                  >
                    Estado Civil
                  </label>
                  <fieldset>
                    <div>
                      <input
                        type="radio"
                        id="contactChoice1"
                        name="estadoCivil"
                        value="S"
                      />
                      <label for="contactChoice1">S</label>

                      <input
                        type="radio"
                        id="contactChoice2"
                        name="estadoCivil"
                        value="UL"
                      />
                      <label for="contactChoice3">UL</label>
                      
                      <input
                        type="radio"
                        id="contactChoice3"
                        name="estadoCivil"
                        value="C"
                      />
                      <label for="contactChoice3">C</label>

                      <input
                        type="radio"
                        id="contactChoice4"
                        name="estadoCivil"
                        value="V"
                      />
                      <label for="contactChoice4">V</label>

                      <input
                        type="radio"
                        id="contactChoice5"
                        name="estadoCivil"
                        value="D"
                      />
                      <label for="contactChoice5">D</label>

                    </div>
                  </fieldset>
                </div>
                <div className="col-md-4">
                  <label
                    for="inputAddress"
                    className="form-label letrasFormulario"
                    style={{ marginTop: "8%" }}
                  >
                    Correo Electronico
                  </label>
                  <input
                    id="i_email"
                    type="email"
                    className="form-control rounded"
                    placeholder="Eje. test@mail.com"
                    //onChange={handleInputChance}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    title="Formato: ejemplo.123@ejemplo.com"
                    name="correo"
                    autoFocus
                    required
                  ></input>
                </div>
                <div className="col-5">
                  <label
                    for="inputAddress"
                    className="form-label letrasFormulario"
                  >
                    DNI
                  </label>
                  <input
                    id="i_dni"
                    type="text"
                    class="form-control rounded"
                    placeholder="Eje. 1804198002033"
                    name="dni"
                    pattern="[0-9]{13}"
                    title="Numero 13 digitos sin guiones"
                    //onChange={handleInputChance}
                    //onBlur={handleDni}
                    autoFocus
                    required
                  ></input>
                </div>
                <div class="col-5">
                  <label for="inputAddress" class="form-label letrasFormulario">
                    N.Telefono
                  </label>
                  <input
                    id="i_telefono"
                    type="text"
                    class="form-control rounded"
                    name="numero"
                    placeholder="Eje. 9940-1110"
                    pattern="[0-9]{8}"
                    title="Numero 8 digitos sin nada extra"
                    //onChange={handleInputChance}
                    required
                  ></input>
                </div>
                <div class="col-md-10">
                  <label
                    for="exampleFormControlTextarea1"
                    class="letrasFormulario"
                  >
                    Direccion
                  </label>
                  <textarea
                    id="i_dirrecion"
                    class="form-control rounded"
                    style={{ resize: "none" }}
                    name="direccion"
                    rows="3"
                    //onChange={handleInputChance}
                    required
                    placeholder="Direccion donde reside el empleado"
                  ></textarea>
                </div>

                <div class="col-12 offset-lg-5">
                  <button
                    id="b_submit"
                    type="submit"
                    class="btn btn-primary"
                    style={{ marginBottom: "3%", marginRight: "2%" }}
                    // onClick={(e) => handleSubmit(e.preventDefault())}
                  >
                    Registrar Caso
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default formularioCopeco;
