import React, { Fragment } from "react";
import "./FormStyle.css";
const formularioCopeco = () => {
  return (
    <Fragment>
      <div class="contentf" >
        <div className="contenedorPrincipal">
          {/* <h1
            style={{
              width: "100%",
              textAlign: "center",
              marginTop: "1%",
              marginBottom: "20px",
            }}
          >
            COPECO
          </h1> */}
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
            style={{ width: "90%"}}
            className="container rounded contenedorFormulario"
          >
            <div>
              
              <form className="row g-3">

                <div style={{ display: "grid", alignItems: "center", width: "25%" }}
                  className="container rounded"
                  class=".col-lg-1">
                  <label
                    htmlFor="inputAddress"
                    className="form-label letrasFormulario"
                    style={{marginRight: "1%"}}>
                    Fecha
                  </label>
                  <input
                    id="i_fecha"
                    type="date"
                    className="form-control rounded"
                    min="1990-01-01"
                    name="fecha"
                    //onChange={handleInputChance}
                    required
                  ></input>
                  <label
                    htmlFor="inputAddress"
                    className="form-label letrasFormulario"
                    style={{marginRight: "1%"}}>
                    Reporta
                  </label>
                  <input
                    id="i_reporta"
                    type="text"
                    className="form-control rounded"
                    placeholder="Eje. Carlos Flores"
                    name="reporta"
                    //onChange={handleInputChance}
                    required
                  ></input>
                  <label
                    htmlFor="inputAddress"
                    className="form-label letrasFormulario"
                    style={{marginRight: "1%"}}>
                    Enlace
                  </label>
                  <input
                    id="i_enlace"
                    type="text"
                    className="form-control rounded"
                    placeholder="Eje. Carlos Flores"
                    name="enlace"
                    //onChange={handleInputChance}
                    required
                  ></input>
                </div>
                
                <div style={{ display: "grid", alignItems: "center", width: "25%" }}
                  className="container rounded"
                  class=".col-lg-2">
                    <label
                      htmlFor="inputAddress"
                      className="form-label letrasFormulario"
                      style={{marginRight: "1%"}}>
                      Personal de Ambulancia
                    </label>
                    <input
                      id="i_motorista"
                      type="text"
                      className="form-control rounded"
                      placeholder="Motorista"
                      name="motorista"
                      //onChange={handleInputChance}
                      required
                  ></input>
                    <input
                      id="i_auxiliar1"
                      type="text"
                      className="form-control rounded"
                      placeholder="Auxiliar1"
                      name="auxiliar1"
                      //onChange={handleInputChance}
                      required
                  ></input>
                  <input
                      id="i_auxiliar2"
                      type="text"
                      className="form-control rounded"
                      placeholder="Auxiliar2"
                      name="auxiliar2"
                      //onChange={handleInputChance}
                      required
                  ></input>
                  <input
                      id="i_auxiliar3"
                      type="text"
                      className="form-control rounded"
                      placeholder="Auxiliar3"
                      name="auxiliar3"
                      //onChange={handleInputChance}
                      required
                  ></input>
                  <label
                      htmlFor="inputAddress"
                      className="form-label letrasFormulario"
                      style={{marginRight: "1%"}}>
                      Tipo de Incidente
                    </label>
                  <input
                      id="i_tipoIncidente"
                      type="text"
                      className="form-control rounded"
                      placeholder="Vehicular"
                      name="tipoIncidente"
                      //onChange={handleInputChance}
                      required
                  ></input>
                </div>
                

                <div style={{ display: "grid", alignItems: "center", width: "25%" }}
                  className="container rounded"
                  class=".col-lg-2">
                    <label
                      htmlFor="inputAddress"
                      className="form-label letrasFormulario"
                      style={{ marginTop: "5%" }}>
                      Prioridad
                    </label>
                  <fieldset>
                    <div>
                      <input
                        type="radio"
                        id="priorityChoice1"
                        name="estadoCivil"
                        value="V"
                      />
                      <label for="priorityChoice1" style={{marginRight: "3%"}} class="letrasFormulario">V</label>

                      <input
                        type="radio"
                        id="priorityChoice2"
                        name="estadoCivil"
                        value="A"
                      />
                      <label for="priorityChoice2" style={{marginRight: "3%"}} class="letrasFormulario">A</label>
                      
                      <input
                        type="radio"
                        id="priorityChoice3"
                        name="estadoCivil"
                        value="R"
                      />
                      <label for="priorityChoice3" style={{marginRight: "3%"}} class="letrasFormulario">R</label>

                      <input
                        type="radio"
                        id="priorityChoice4"
                        name="estadoCivil"
                        value="N"
                      />
                      <label for="priorityChoice4" class="letrasFormulario">N</label>
                    </div>
                  </fieldset>
                  <label
                    htmlFor="inputAddress"
                    className="form-label letrasFormulario"
                    style={{marginRight: "1%"}}>
                    Kilometraje
                  </label>
                  <input
                    id="i_kmSalida"
                    type="text"
                    className="form-control rounded"
                    placeholder="Salida"
                    name="kmSalida"
                    //onChange={handleInputChance}
                    required
                  ></input>
                  <input
                    id="i_kmEntrada"
                    type="text"
                    className="form-control rounded"
                    placeholder="Entrada"
                    name="kmEntrada"
                    //onChange={handleInputChance}
                    required
                  ></input>
                  <label
                    htmlFor="inputAddress"
                    className="form-label letrasFormulario"
                    style={{marginRight: "1%"}}>
                    Unidad
                  </label>
                  <input
                    id="i_unidad"
                    type="text"
                    className="form-control rounded"
                    placeholder="Unidad"
                    name="unidad"
                    //onChange={handleInputChance}
                    required
                  ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "25%" }}
                  className="container rounded"
                  class=".col-lg-2">
                    <label
                      htmlFor="inputAddress"
                      className="form-label letrasFormulario"
                      style={{marginRight: "1%"}}>
                      Tiempo de Reacción
                    </label>
                    <input
                      id="i_tSalida"
                      type="text"
                      className="form-control rounded"
                      placeholder="Salida"
                      name="tSalida"
                      //onChange={handleInputChance}
                      required
                  ></input>
                    <input
                      id="i_tLlegada"
                      type="text"
                      className="form-control rounded"
                      placeholder="Llegada"
                      name="tLlegada"
                      //onChange={handleInputChance}
                      required
                  ></input>
                  <input
                      id="i_tAbordaje"
                      type="text"
                      className="form-control rounded"
                      placeholder="Abordaje"
                      name="tAbordaje"
                      //onChange={handleInputChance}
                      required
                  ></input>
                  <input
                      id="i_tHospital"
                      type="text"
                      className="form-control rounded"
                      placeholder="Hospital"
                      name="tHospital"
                      //onChange={handleInputChance}
                      required
                  ></input>
                  <input
                      id="i_tRegreso"
                      type="text"
                      className="form-control rounded"
                      placeholder="Regreso"
                      name="tRegreso"
                      //onChange={handleInputChance}
                      required
                  ></input>
                </div>
                
                
                <div style={{ display: "grid", alignItems: "center", width: "50%" }}>
                  <label
                    htmlFor="inputAddress"
                    className="form-label letrasFormulario"
                    style={{ marginTop: "5%" }}>
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

                <div style={{ display: "grid", alignItems: "center", width: "25%" }}>
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
                        id="genderChoice1"
                        name="Genero"
                        value="M"
                      />
                      <label for="genderChoice1" style={{marginRight: "8%"}} class="letrasFormulario">Femenino</label>

                      <input
                        type="radio"
                        id="genderChoice2"
                        name="Genero"
                        value="F"
                      />
                      <label for="genderChoice2" class="letrasFormulario">Masculino</label>
                    </div>
                  </fieldset>
                </div>
                <div style={{ display: "grid", alignItems: "center", width: "25%" }}>
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
                        id="civilChoice1"
                        name="estadoCivil"
                        value="S"
                      />
                      <label for="civilChoice1" style={{marginRight: "3%"}} class="letrasFormulario">S</label>
                      <input
                        type="radio"
                        id="civilChoice2"
                        name="estadoCivil"
                        value="UL"
                      />
                      <label for="civilChoice2" style={{marginRight: "3%"}} class="letrasFormulario">UL</label>

                      <input
                        type="radio"
                        id="civilChoice3"
                        name="estadoCivil"
                        value="C"
                      />
                      <label for="civilChoice3" style={{marginRight: "3%"}} class="letrasFormulario">C</label>

                      <input
                        type="radio"
                        id="civilChoice4"
                        name="estadoCivil"
                        value="V"
                      />
                      <label for="civilChoice4" style={{marginRight: "3%"}} class="letrasFormulario">V</label>

                      <input
                        type="radio"
                        id="civilChoice5"
                        name="estadoCivil"
                        value="D"
                      />
                      <label for="civilChoice5" class="letrasFormulario">D</label>

                    </div>
                  </fieldset>
                </div>
                
                <div style={{ display: "grid", alignItems: "center", width: "30%" }}>
                  <label
                    htmlFor="inputAddress"
                    className="form-label letrasFormulario"
                    style={{marginRight: "1%"}}>
                    Ocupación
                  </label>
                  <input
                    id="i_ocupacion"
                    type="text"
                    className="form-control rounded"
                    placeholder="Lic. en Matematicas"
                    name="ocupacion"
                    //onChange={handleInputChance}
                    required
                  ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "10%" }}>
                  <label
                    htmlFor="inputAddress"
                    className="form-label letrasFormulario"
                    style={{marginRight: "1%"}}>
                    Edad
                  </label>
                  <input
                    id="i_edad"
                    type="number"
                    className="form-control rounded"
                    placeholder="30"
                    name="edad"
                    min="1"
                    max="99"
                    //onChange={handleInputChance}
                    required
                  ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "30%" }}>
                  <label
                    htmlFor="inputAddress"
                    className="form-label letrasFormulario"
                    style={{marginRight: "1%"}}>
                    Telefono
                  </label>
                  <input
                    id="i_telefono"
                    type="text"
                    className="form-control rounded"
                    placeholder="Eje. 9940-1110"
                    pattern="[0-9]{8}"
                    name="telefono"
                    //onChange={handleInputChance}
                    required
                  ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "30%" }}>
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

                <div style={{ display: "grid", alignItems: "center", width: "50%" }}>
                  <label for="exampleFormControlTextarea1"
                    class="letrasFormulario"
                  >
                    Dirección
                  </label>
                  <textarea
                    id="i_direccion"
                    type="text"
                    class="form-control rounded"
                    name="direccion"
                    rows="2"
                    style={{ resize: "none" }}
                    placeholder="5 calle 8 avenida"
                    //onChange={handleInputChance}
                    required
                  ></textarea>
                  <label
                    htmlFor="inputAddress"
                    className="form-label letrasFormulario"
                    style={{marginRight: "1%"}}>
                    Acompañante
                  </label>
                  <input
                    id="i_acompañante"
                    type="text"
                    className="form-control rounded"
                    placeholder="Eje. Carlos Flores"
                    name="acompañante"
                    //onChange={handleInputChance}
                    required
                  ></input>
                </div>
                
                <div style={{ display: "grid", alignItems: "center", width: "50%" }}>
                  <label for="exampleFormControlTextarea1"
                    class="letrasFormulario"
                  >
                    Lugar de Incidente
                  </label>
                  <textarea
                    id="i_lugarIncidente"
                    type="text"
                    class="form-control rounded"
                    name="lugarIncidente"
                    rows="2"
                    style={{ resize: "none" }}
                    placeholder="5 calle 8 avenida"
                    pattern="[0-9]{8}"
                    //onChange={handleInputChance}
                    required
                  ></textarea>
                  <label
                    htmlFor="inputAddress"
                    className="form-label letrasFormulario"
                    style={{marginRight: "1%"}}>
                    Parentesco
                  </label>
                  <input
                    id="i_parentesco"
                    type="text"
                    className="form-control rounded"
                    placeholder="Hermano/a"
                    name="parentesco"
                    //onChange={handleInputChance}
                    required
                  ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "100%" }}>
                  <label for="exampleFormControlTextarea1"
                    class="letrasFormulario"
                  >
                    Historia del Incidente
                  </label>
                  <textarea
                    id="i_HistoriaIncidente"
                    type="text"
                    class="form-control rounded"
                    name="HistoriaIncidente"
                    rows="4"
                    style={{ resize: "none" }}
                    placeholder="El semaforo estaba en rojo y se lo salto..."
                    //onChange={handleInputChance}
                    required
                  ></textarea>
                </div>
                
                <div style={{ display: "flex", alignItems: "center"}}>
                  <label for="exampleFormControlTextarea1"
                    class="letrasFormulario"
                    style={{width: "8%", marginRight: "1%"}}
                  >
                    Signos Vitales
                  </label>
                  <input
                    id="i_p/a"
                    type="text"
                    className="form-control rounded"
                    placeholder="P/A"
                    name="p/a"
                    style={{marginRight: "2%"}}
                    //onChange={handleInputChance}
                    required
                  ></input>
                  <input
                    id="i_fc"
                    type="text"
                    className="form-control rounded"
                    placeholder="FC"
                    name="fc"
                    style={{marginRight: "2%"}}
                    //onChange={handleInputChance}
                    required
                  ></input>
                  <input
                    id="i_temp"
                    type="text"
                    className="form-control rounded"
                    placeholder="Temp"
                    name="temp"
                    //onChange={handleInputChance}
                    required
                  ></input>
                </div>

                <div style={{ display: "flex", alignItems: "center"}}>
                  <div style={{width: "17%"}}>
                  </div>
                  <input
                    id="i_fr"
                    type="text"
                    className="form-control rounded"
                    placeholder="FR"
                    name="fr"
                    style={{marginRight: "2%"}}
                    //onChange={handleInputChance}
                    required
                  ></input>
                  <input
                    id="i_spo2"
                    type="text"
                    className="form-control rounded"
                    placeholder="SpO2"
                    name="spo2"
                    style={{marginRight: "2%"}}
                    //onChange={handleInputChance}
                    required
                  ></input>
                  <input
                    id="i_glucosa"
                    type="text"
                    className="form-control rounded"
                    placeholder="Glucosa"
                    name="glucosa"
                    //onChange={handleInputChance}
                    required
                  ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "30%" }}>
                  <label for="exampleFormControlTextarea1"
                    class="letrasFormulario"
                    
                  >
                    Ubicación de la lesión
                  </label>
                  <textarea
                    id="i_ublesion"
                    type="text"
                    class="form-control rounded"
                    name="ublesion"
                    rows="10"
                    style={{ resize: "none" }}
                    placeholder="Cabeza, antebrazo derecho..."
                    //onChange={handleInputChance}
                    required
                  ></textarea>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "10%" }}>
                <label for="exampleFormControlTextarea1"
                      class="letrasFormulario"
                    >
                      Pupilas
                    </label>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "15%" }}>
                    <label for="exampleFormControlTextarea1"
                      class="letrasFormulario"
                    >
                      D
                    </label>
                    <input
                      id="i_pupilaD1"
                      type="text"
                      className="form-control rounded"
                      placeholder=""
                      name="pupilaD1"
                      //onChange={handleInputChance}
                      required
                    ></input>
                    <input
                      id="i_pupilaD2"
                      type="text"
                      className="form-control rounded"
                      placeholder=""
                      name="pupilaD2"
                      //onChange={handleInputChance}
                      required
                    ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "15%" }}>
                    <label for="exampleFormControlTextarea1"
                      class="letrasFormulario"
                    >
                      I
                    </label>
                    <input
                      id="i_pupilaI1"
                      type="text"
                      className="form-control rounded"
                      placeholder=""
                      name="pupilaI1"
                      //onChange={handleInputChance}
                      required
                    ></input>
                    <input
                      id="i_pupilaI2"
                      type="text"
                      className="form-control rounded"
                      placeholder=""
                      name="pupilaI2"
                      //onChange={handleInputChance}
                      required
                    ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "30%" }}>
                  <label for="exampleFormControlTextarea1"
                    class="letrasFormulario"
                  >
                    Trauma
                  </label>
                  <textarea
                    id="i_trauma"
                    type="text"
                    class="form-control rounded"
                    name="trauma"
                    rows="10"
                    style={{ resize: "none" }}
                    placeholder="Trauma"
                    //onChange={handleInputChance}
                    required
                  ></textarea>
                </div>

                <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                  <label for="exampleFormControlTextarea1" class="letrasFormulario">
                    Problema Medico
                  </label>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: "10px", width: "100%" }}>
                    <div>
                      <input
                        id="i_muerteAparente"
                        type="checkbox"
                        className="form-check-input"
                        placeholder="Muerte Aparente"
                        name="muerteAparente"
                        //onChange={handleInputChance}
                        required
                      ></input>
                      <label for="i_muerteAparente" class="letrasFormulario">
                        Muerte Aparente
                      </label>
                    </div>
                    
                    <div>
                      <input
                        id="i_trastornoConciencia"
                        type="checkbox"
                        className="form-check-input"
                        placeholder="Trastorno de Conciencia"
                        name="trastornoConciencia"
                        //onChange={handleInputChance}
                        required
                      ></input>
                      <label for="i_trastornoConciencia" class="letrasFormulario">
                        Trastorno de Conciencia
                      </label>
                    </div>

                    <div>
                      <input
                        id="i_ahogamiento"
                        type="checkbox"
                        className="form-check-input"
                        placeholder="Ahogamiento"
                        name="ahogamiento"
                        //onChange={handleInputChance}
                        required
                      ></input>
                      <label for="i_ahogamiento" class="letrasFormulario">
                        Ahogamiento
                      </label>
                    </div>

                    <div>
                      <input
                        id="i_asfixia"
                        type="checkbox"
                        className="form-check-input"
                        placeholder="Asfixia"
                        name="asfixia"
                        //onChange={handleInputChance}
                        required
                      ></input>
                      <label for="i_asfixia" class="letrasFormulario">
                        Asfixia
                      </label>
                    </div>

                    <div>
                      <input
                        id="i_evc"
                        type="checkbox"
                        className="form-check-input"
                        placeholder="EVC"
                        name="evc"
                        //onChange={handleInputChance}
                        required
                      ></input>
                      <label for="i_evc" class="letrasFormulario">
                        EVC
                      </label>
                    </div>

                    <div>
                      <input
                        id="i_diabetes"
                        type="checkbox"
                        className="form-check-input"
                        placeholder="Diabetes Militus Desc"
                        name="diabetes"
                        //onChange={handleInputChance}
                        required
                      ></input>
                      <label for="i_diabetes" class="letrasFormulario">
                        Diabetes Militus Desc
                      </label>
                    </div>

                    <div>
                      <input
                        id="i_convulsivo"
                        type="checkbox"
                        className="form-check-input"
                        placeholder="Sindrome Convulsivo"
                        name="convulsivo"
                        //onChange={handleInputChance}
                        required
                      ></input>
                      <label for="i_convulsivo" class="letrasFormulario">
                        Sindrome Convulsivo
                      </label>
                    </div>

                    <div>
                      <input
                        id="i_hipertensiva"
                        type="checkbox"
                        className="form-check-input"
                        placeholder="Crisis Hipertensiva"
                        name="hipertensiva"
                        //onChange={handleInputChance}
                        required
                      ></input>
                      <label for="i_hipertensiva" class="letrasFormulario">
                        Crisis Hipertensiva
                      </label>
                    </div>

                    <div>
                      <input
                        id="i_asma"
                        type="checkbox"
                        className="form-check-input"
                        placeholder="Asma"
                        name="asma"
                        //onChange={handleInputChance}
                        required
                      ></input>
                      <label for="i_Asma" class="letrasFormulario">
                        Asma
                      </label>
                    </div>

                    <div>
                      <input
                        id="i_envenenamiento"
                        type="checkbox"
                        className="form-check-input"
                        placeholder="Envenenamiento"
                        name="envenenamiento"
                        //onChange={handleInputChance}
                        required
                      ></input>
                      <label for="i_envenamiento" class="letrasFormulario">
                        Envenenamiento
                      </label>
                    </div>

                    <div>
                      <input
                        id="i_paroCardioRes"
                        type="checkbox"
                        className="form-check-input"
                        placeholder="Paro Cardio Respiratorio"
                        name="paroCardioRes"
                        //onChange={handleInputChance}
                        required
                      ></input>
                      <label for="i_paroCardioRes" class="letrasFormulario">
                        Paro Cardio Respiratorio
                      </label>
                    </div>

                    <div>
                      <input
                        id="i_alergica"
                        type="checkbox"
                        className="form-check-input"
                        placeholder="Reacción Alergica"
                        name="alergica"
                        //onChange={handleInputChance}
                        required
                      ></input>
                      <label for="i_alergica" class="letrasFormulario">
                        Reacción Alergica
                      </label>
                    </div>

                    <div>
                      <input
                        id="i_sangradoDigestivo"
                        type="checkbox"
                        className="form-check-input"
                        placeholder="Sangrado Digestivo"
                        name="sangradoDigestivo"
                        //onChange={handleInputChance}
                        required
                      ></input>
                      <label for="i_sangradoDigestivo" class="letrasFormulario">
                        Sangrado Digestivo
                      </label>
                    </div>

                    <div>
                      <input
                        id="i_ovace"
                        type="checkbox"
                        className="form-check-input"
                        placeholder="OVACE"
                        name="ovace"
                        //onChange={handleInputChance}
                        required
                      ></input>
                      <label for="i_ovace" class="letrasFormulario">
                        OVACE
                      </label>
                    </div>

                    <div>
                      <input
                        id="i_dolorAbdominal"
                        type="checkbox"
                        className="form-check-input"
                        placeholder="Dolor Abdominal"
                        name="stv"
                        //onChange={handleInputChance}
                        required
                      ></input>
                      <label for="i_dolorAbdominal" class="letrasFormulario">
                        Dolor Abdominal
                      </label>
                    </div>

                    <div>
                      <input
                        id="i_dolorToracico"
                        type="checkbox"
                        className="form-check-input"
                        placeholder="Dolor Toracico"
                        name="dolortoracico"
                        style={{marginBottom: "0.5%"}}
                        //onChange={handleInputChance}
                        required
                      ></input>
                      <label for="i_dolorToracico" class="letrasFormulario">
                        Dolor Toracico
                      </label>
                    </div>

                    <div>
                      <input
                        id="i_cefalea"
                        type="checkbox"
                        className="form-check-input"
                        placeholder="Cefalea"
                        name="cefalea"
                        style={{marginBottom: "0.5%"}}
                        //onChange={handleInputChance}
                        required
                      ></input>
                      <label for="i_cefalea" class="letrasFormulario">
                        Cefalea
                      </label>
                    </div>

                    <div>
                      <input
                        id="i_diarrea"
                        type="checkbox"
                        className="form-check-input"
                        placeholder="Diarrea"
                        name="diarrea"
                        style={{marginBottom: "0.5%"}}
                        //onChange={handleInputChance}
                        required
                      ></input>
                      <label for="i_hipertensiva" class="letrasFormulario">
                        Diarrea
                      </label>
                    </div>

                    <div>
                      <input
                        id="i_vomito"
                        type="checkbox"
                        className="form-check-input"
                        placeholder="Vomito"
                        name="vomito"
                        style={{marginBottom: "0.5%"}}
                        //onChange={handleInputChance}
                        required
                      ></input>
                      <label for="i_vomito" class="letrasFormulario">
                        Vomito
                      </label>
                    </div>

                    <div>
                      <input
                        id="i_otros"
                        type="checkbox"
                        className="form-check-input"
                        placeholder="Otros"
                        name="ot"
                        style={{marginBottom: "0.5%"}}
                        //onChange={handleInputChance}
                        required
                      ></input>
                      <label for="i_otros" class="letrasFormulario">
                        Otros
                      </label>
                    </div>  
                  </div>
                </div>


                <div style={{ display: "grid", alignItems: "center", width: "100%" }}>
                  <label
                    htmlFor="inputAddress"
                    className="form-label letrasFormulario"
                    style={{marginRight: "1%"}}>
                    Ginecologia/Obstreta
                  </label>
                  <input
                    id="i_stv"
                    type="text"
                    className="form-control rounded"
                    placeholder="STV"
                    name="stv"
                    style={{marginBottom: "0.5%"}}
                    //onChange={handleInputChance}
                    required
                  ></input>
                  <input
                    id="i_aborto"
                    type="text"
                    className="form-control rounded"
                    placeholder="Aborto"
                    name="aborto"
                    style={{marginBottom: "0.5%"}}
                    //onChange={handleInputChance}
                    required
                  ></input>
                  <input
                    id="i_partoNormal"
                    type="text"
                    className="form-control rounded"
                    placeholder="Parto Normal"
                    name="partoNormal"
                    style={{marginBottom: "0.5%"}}
                    //onChange={handleInputChance}
                    required
                  ></input>
                  <input
                    id="i_partoAnormal"
                    type="text"
                    className="form-control rounded"
                    placeholder="Parto Anormal (Espec)"
                    name="partoAnormal"
                    //onChange={handleInputChance}
                    required
                  ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "100%" }}>
                  <label for="exampleFormControlTextarea1"
                    class="letrasFormulario"
                  >
                    Examen Fisico
                  </label>
                  <textarea
                    id="i_examenFisico"
                    type="text"
                    class="form-control rounded"
                    name="examenFisico"
                    rows="4"
                    style={{ resize: "none" }}
                    placeholder="Examen Fisico"
                    //onChange={handleInputChance}
                    required
                  ></textarea>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "100%" }}>
                  <label for="exampleFormControlTextarea1"
                    class="letrasFormulario"
                  >
                    Observaciones
                  </label>
                  <textarea
                    id="i_observaciones"
                    type="text"
                    class="form-control rounded"
                    name="observaciones"
                    rows="4"
                    style={{ resize: "none" }}
                    placeholder="Observaciones"
                    //onChange={handleInputChance}
                    required
                  ></textarea>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "100%" }}>
                  <label for="exampleFormControlTextarea1"
                    class="letrasFormulario"
                  >
                    Material Utilizado
                  </label>
                  <textarea
                    id="i_material"
                    type="text"
                    class="form-control rounded"
                    name="material"
                    rows="3"
                    style={{ resize: "none" }}
                    placeholder="Material Utilizado"
                    //onChange={handleInputChance}
                    required
                  ></textarea>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "40%" }}>
                  <label for="exampleFormControlTextarea1"
                    class="letrasFormulario"
                    style={{marginTop: "-13%"}}
                  >
                    Condiciones de Px
                  </label>
                  <fieldset style={{marginTop: "-40%"}}>
                    <div>
                      <input
                        type="radio"
                        id="conditionChoice1"
                        name="condicionPx"
                        value="estable"
                      />
                      <label for="conditionChoice1" style={{marginRight: "3%"}} class="letrasFormulario">Estable</label>

                      <input
                        type="radio"
                        id="conditionChoice2"
                        name="condicionPx"
                        value="inestable"
                      />
                      <label for="conditionChoice2" style={{marginRight: "3%"}} class="letrasFormulario">Inestable</label>
                      
                      <input
                        type="radio"
                        id="conditionChoice3"
                        name="condicionPx"
                        value="potInestable"
                      />
                      <label for="conditionChoice3" style={{marginRight: "3%"}} class="letrasFormulario">Pot. Inestable</label>

                      <input
                        type="radio"
                        id="conditionChoice4"
                        name="condicionPx"
                        value="critico"
                      />
                      <label for="conditionChoice4" style={{marginRight: "3%"}} class="letrasFormulario">Critico</label>

                      <input
                        type="radio"
                        id="conditionChoice5"
                        name="condicionPx"
                        value="fallecido"
                      />
                      <label for="conditionChoice5" class="letrasFormulario">Fallecido</label>
                    </div>
                  </fieldset>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "30%" }}>
                  <label for="exampleFormControlTextarea1"
                    class="letrasFormulario"
                  >
                    Efectos Personales
                  </label>
                  <input
                      id="i_resguardo"
                      type="text"
                      className="form-control rounded"
                      placeholder="Resguardo"
                      name="resguardo"
                      //onChange={handleInputChance}
                      required
                  ></input>
                    <input
                      id="i_pol"
                      type="text"
                      className="form-control rounded"
                      placeholder="Pol."
                      name="pol"
                      //onChange={handleInputChance}
                      required
                  ></input>
                  <input
                      id="i_fam"
                      type="text"
                      className="form-control rounded"
                      placeholder="Fam."
                      name="fam"
                      //onChange={handleInputChance}
                      required
                  ></input>
                  <input
                      id="i_persHosp"
                      type="text"
                      className="form-control rounded"
                      placeholder="Pers. Hosp."
                      name="persHosp"
                      //onChange={handleInputChance}
                      required
                  ></input>
                  <input
                      id="i_otros"
                      type="text"
                      className="form-control rounded"
                      placeholder="Otros"
                      name="otros"
                      //onChange={handleInputChance}
                      required
                  ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "30%" }}>
                  <label for="exampleFormControlTextarea1"
                    class="letrasFormulario"
                  >
                    Oxigeno
                  </label>
                  <input
                      id="i_litros"
                      type="text"
                      className="form-control rounded"
                      placeholder="Litros"
                      name="litros"
                      //onChange={handleInputChance}
                      required
                  ></input>
                  <input
                      id="i_tiempo"
                      type="text"
                      className="form-control rounded"
                      placeholder="Tiempo"
                      name="tiempo"
                      //onChange={handleInputChance}
                      required
                  ></input>
                  <input
                      id="i_uso"
                      type="text"
                      className="form-control rounded"
                      placeholder="Uso"
                      name="uso"
                      //onChange={handleInputChance}
                      required
                  ></input>
                  <label for="exampleFormControlTextarea1"
                    class="letrasFormulario"
                  >
                    Can. Orofa
                  </label>
                  <fieldset>
                    <div>
                      <input
                        type="radio"
                        id="orofaChoice1"
                        name="canOrofa"
                        value="si"
                      />
                      <label for="orofaChoice1" style={{marginRight: "3%"}} class="letrasFormulario">Si</label>

                      <input
                        type="radio"
                        id="orofaChoice2"
                        name="canOrofa"
                        value="no"
                      />
                      <label for="orofaChoice2" class="letrasFormulario">No</label>
                    </div>
                  </fieldset>
                  <label for="exampleFormControlTextarea1"
                    class="letrasFormulario"
                  >
                    Collar Cerv.
                  </label>
                  <fieldset>
                    <div>
                      <input
                        type="radio"
                        id="collarChoice1"
                        name="collarCerv"
                        value="si"
                      />
                      <label for="collarChoice1" style={{marginRight: "3%"}} class="letrasFormulario">Si</label>

                      <input
                        type="radio"
                        id="collarChoice2"
                        name="collarCerv"
                        value="no"
                      />
                      <label for="collarChoice2" class="letrasFormulario">No</label>
                    </div>
                  </fieldset>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "100%" }}>
                  <label for="exampleFormControlTextarea1"
                    class="letrasFormulario"
                  >
                    Forma de Traslado
                  </label>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", alignItems: "center", width: "100%" }}>
                      <div>
                        <input
                          type="radio"
                          id="transferChoice1"
                          name="traslado"
                          value="trasladoSolamente"
                          required
                        ></input>
                        <label for="transferChoice1" class="letrasFormulario">
                          Traslado Solamente
                        </label>
                      </div>
                      
                      <div>
                        <input
                          type="radio"
                          id="transferChoice2"
                          name="traslado"
                          value="trasladoVehiOfi"
                          required
                        ></input>
                        <label for="transferChoice2" class="letrasFormulario">
                          Traslado Vehiculo Oficial
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          id="transferChoice3"
                          name="traslado"
                          value="trasladoInnecesario"
                          required
                        ></input>
                        <label for="transferChoice3" class="letrasFormulario">
                          Traslado Innecesario
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          id="transferChoice4"
                          name="traslado"
                          value="trasladoVehiPart"
                          required
                        ></input>
                        <label for="transferChoice4" class="letrasFormulario">
                          Traslado Vehiculo Particular
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          id="transferChoice5"
                          name="traslado"
                          value="trasladoCancelado"
                          required
                        ></input>
                        <label for="transferChoice5" class="letrasFormulario">
                          Traslado Cancelado
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          id="transferChoice6"
                          name="traslado"
                          value="trasladoFueraCiudad"
                          required
                        ></input>
                        <label for="transferChoice6" class="letrasFormulario">
                          Traslado Fuera de Ciudad
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          id="transferChoice7"
                          name="traslado"
                          value="trasladoRehusado"
                          required
                        ></input>
                        <label for="transferChoice7" class="letrasFormulario">
                          Traslado Rehusado
                        </label>
                      </div>

                      <div>
                        <input
                        type="radio"
                        id="transferChoice8"
                        name="traslado"
                        value="falsaAlarma"
                        required
                        ></input>
                        <label for="transferChoice8" class="letrasFormulario">
                          Falsa Alarma
                        </label>
                      </div>
                  </div>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "100%" }}>
                  <label for="exampleFormControlTextarea1"
                    class="letrasFormulario"
                  >
                    Embarazo
                  </label>
                  <fieldset>
                    <label for="exampleFormControlTextarea1"
                      class="letrasFormulario"
                    >
                      Parto en Ambulancia
                    </label>
                    <div>
                      <input
                        type="radio"
                        id="partoChoice1"
                        name="partoAmbulancia"
                        value="si"
                      />
                      <label for="partoChoice1" style={{marginRight: "3%"}} class="letrasFormulario">Si</label>

                      <input
                        type="radio"
                        id="partoChoice2"
                        name="partoAmbulancia"
                        value="no"
                      />
                      <label for="partoChoice2" class="letrasFormulario">No</label>
                    </div>
                  </fieldset>
                </div>

                <div style={{ display: "flex", alignItems: "center", width: "33%" }}>
                    <label for="exampleFormControlTextarea1"
                      class="letrasFormulario"
                      style={{marginRight: "1%"}}
                    >
                      Gestación
                    </label>
                    <input
                      id="i_gestacion"
                      type="text"
                      className="form-control rounded"
                      placeholder="Gestación"
                      name="gestacion"
                      //onChange={handleInputChance}
                      required
                    ></input>
                </div>

                <div style={{ display: "flex", alignItems: "center", width: "33%" }}>
                    <label for="exampleFormControlTextarea1"
                      class="letrasFormulario"
                      style={{marginRight: "1%"}}
                    >
                      AU
                    </label>
                    <input
                      id="i_au"
                      type="text"
                      className="form-control rounded"
                      placeholder="AU"
                      name="au"
                      //onChange={handleInputChance}
                      required
                    ></input>
                </div>

                <div style={{ display: "flex", alignItems: "center", width: "34%" }}>
                    <label for="exampleFormControlTextarea1"
                      class="letrasFormulario"
                      style={{marginRight: "1%"}}
                    >
                      FUM
                    </label>
                    <input
                      id="i_fum"
                      type="text"
                      className="form-control rounded"
                      placeholder="FUM"
                      name="fum"
                      //onChange={handleInputChance}
                      required
                    ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "50%" }}>
                <fieldset>
                    <label for="exampleFormControlTextarea1"
                      class="letrasFormulario"
                    >
                      Nacido Vivo
                    </label>
                    <div>
                      <input
                        type="radio"
                        id="nacidoChoice1"
                        name="nacidoVivo"
                        value="si"
                      />
                      <label for="nacidoChoice1" style={{marginRight: "3%"}} class="letrasFormulario">Si</label>

                      <input
                        type="radio"
                        id="nacidoChoice2"
                        name="nacidoVivo"
                        value="no"
                      />
                      <label for="nacidoChoice2" class="letrasFormulario">No</label>
                    </div>
                  </fieldset>
                </div>

                <div style={{ display: "flex", alignItems: "center", width: "50%" }}>
                    <label for="exampleFormControlTextarea1"
                      class="letrasFormulario"
                      style={{marginRight: "1%"}}
                    >
                      FPP
                    </label>
                    <input
                      id="i_fpp"
                      type="text"
                      className="form-control rounded"
                      placeholder="FPP"
                      name="fpp"
                      //onChange={handleInputChance}
                      required
                    ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "20%" }}>
                    <label for="exampleFormControlTextarea1"
                      class="letrasFormulario"
                    >
                      Hora
                    </label>
                    <input
                      id="i_hora1"
                      type="text"
                      className="form-control rounded"
                      name="resguardo"
                      //onChange={handleInputChance}
                      required
                    ></input>
                    <input
                      id="i_hora2"
                      type="text"
                      className="form-control rounded"
                      name="resguardo"
                      //onChange={handleInputChance}
                      required
                    ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "20%" }}>
                    <label for="exampleFormControlTextarea1"
                      class="letrasFormulario"
                    >
                      Medicamentos
                    </label>
                    <input
                      id="i_medicamentos1"
                      type="text"
                      className="form-control rounded"
                      name="resguardo"
                      //onChange={handleInputChance}
                      required
                    ></input>
                    <input
                      id="i_medicamentos2"
                      type="text"
                      className="form-control rounded"
                      name="resguardo"
                      //onChange={handleInputChance}
                      required
                    ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "20%" }}>
                  <label for="exampleFormControlTextarea1"
                    class="letrasFormulario"
                  >
                    Dosis
                  </label>
                  <input
                      id="i_dosis1"
                      type="text"
                      className="form-control rounded"
                      name="resguardo"
                      //onChange={handleInputChance}
                      required
                    ></input>
                    <input
                      id="i_dosis2"
                      type="text"
                      className="form-control rounded"
                      name="resguardo"
                      //onChange={handleInputChance}
                      required
                    ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "20%" }}>
                  <label for="exampleFormControlTextarea1"
                    class="letrasFormulario"
                  >
                    Via
                  </label>
                  <input
                      id="i_via1"
                      type="text"
                      className="form-control rounded"
                      name="resguardo"
                      //onChange={handleInputChance}
                      required
                    ></input>
                    <input
                      id="i_via2"
                      type="text"
                      className="form-control rounded"
                      name="resguardo"
                      //onChange={handleInputChance}
                      required
                    ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "20%" }}>
                  <label for="exampleFormControlTextarea1"
                    class="letrasFormulario"
                  >
                    Respuesta
                  </label>
                  <input
                      id="i_respuesta1"
                      type="text"
                      className="form-control rounded"
                      name="resguardo"
                      //onChange={handleInputChance}
                      required
                  ></input>
                  <input
                      id="i_respuesta2"
                      type="text"
                      className="form-control rounded"
                      name="resguardo"
                      //onChange={handleInputChance}
                      required
                  ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", justifyContent: "center", width: "100%" }}>
                  <label htmlFor="exampleFormControlTextarea1" className="letrasFormulario">
                    GLASGOW
                  </label>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "33%" }}>
                  <label htmlFor="exampleFormControlTextarea1" className="letrasFormulario">
                    Respuesta Visual
                  </label>
                  <input
                    id="i_visual1"
                    type="checkbox"
                    className="form-check-input"
                    placeholder=""
                    name="visual1"
                    //onChange={handleInputChance}
                    required
                  ></input>
                  <label for="i_visual1" class="letrasFormulario">
                    Nunca abre los ojos
                  </label>
                  <input
                    id="i_visual2"
                    type="checkbox"
                    className="form-check-input"
                    placeholder=""
                    name="visual2"
                    //onChange={handleInputChance}
                    required
                  ></input>
                  <label for="i_visual2" class="letrasFormulario">
                    Abre estimulo doloroso
                  </label>
                  <input
                    id="i_visual3"
                    type="checkbox"
                    className="form-check-input"
                    placeholder=""
                    name="visual3"
                    //onChange={handleInputChance}
                    required
                  ></input>
                  <label for="i_visual3" class="letrasFormulario">
                    Abre estimulo verbal
                  </label>
                  <input
                    id="i_visual4"
                    type="checkbox"
                    className="form-check-input"
                    placeholder=""
                    name="visual4"
                    //onChange={handleInputChance}
                    required
                  ></input>
                  <label for="i_visual4" class="letrasFormulario">
                    Abre espontaneamente
                  </label>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "33%" }}>
                  <label htmlFor="exampleFormControlTextarea1" className="letrasFormulario">
                    Respuesta Verbal
                  </label>
                  <input
                    id="i_verbal1"
                    type="checkbox"
                    className="form-check-input"
                    placeholder=""
                    name="verbal1"
                    //onChange={handleInputChance}
                    required
                  ></input>
                  <label for="i_verbal1" class="letrasFormulario">
                    No responde
                  </label>
                  <input
                    id="i_verbal2"
                    type="checkbox"
                    className="form-check-input"
                    placeholder=""
                    name="verbal2"
                    //onChange={handleInputChance}
                    required
                  ></input>
                  <label for="i_verbal2" class="letrasFormulario">
                    Sonidos incomprensibles
                  </label>
                  <input
                    id="i_verbal3"
                    type="checkbox"
                    className="form-check-input"
                    placeholder=""
                    name="verbal3"
                    //onChange={handleInputChance}
                    required
                  ></input>
                  <label for="i_verbal3" class="letrasFormulario">
                    Palabras no apropiadas
                  </label>
                  <input
                    id="i_verbal4"
                    type="checkbox"
                    className="form-check-input"
                    placeholder=""
                    name="verbal4"
                    //onChange={handleInputChance}
                    required
                  ></input>
                  <label for="i_verbal4" class="letrasFormulario">
                    Conversa Desorientado
                  </label>
                  <input
                    id="i_verbal5"
                    type="checkbox"
                    className="form-check-input"
                    placeholder=""
                    name="verbal5"
                    //onChange={handleInputChance}
                    required
                  ></input>
                  <label for="i_verbal5" class="letrasFormulario">
                    Conversa Orientado
                  </label>
                </div>
                
                <div style={{ display: "grid", alignItems: "center", width: "34%" }}>
                  <label htmlFor="exampleFormControlTextarea1" className="letrasFormulario">
                    Respuesta Motora
                  </label>
                  <input
                    id="i_motora1"
                    type="checkbox"
                    className="form-check-input"
                    placeholder=""
                    name="motora1"
                    //onChange={handleInputChance}
                    required
                  ></input>
                  <label for="i_motora1" class="letrasFormulario">
                    No responde
                  </label>
                  <input
                    id="i_motora2"
                    type="checkbox"
                    className="form-check-input"
                    placeholder=""
                    name="motora2"
                    //onChange={handleInputChance}
                    required
                  ></input>
                  <label for="i_motora2" class="letrasFormulario">
                    Resp. descerebración
                  </label>
                  <input
                    id="i_motora3"
                    type="checkbox"
                    className="form-check-input"
                    placeholder=""
                    name="motora3"
                    //onChange={handleInputChance}
                    required
                  ></input>
                  <label for="i_motora3" class="letrasFormulario">
                    Resp. descorticación
                  </label>
                  <input
                    id="i_motora4"
                    type="checkbox"
                    className="form-check-input"
                    placeholder=""
                    name="motora4"
                    //onChange={handleInputChance}
                    required
                  ></input>
                  <label for="i_motora4" class="letrasFormulario">
                    Se retira del dolor
                  </label>
                  <input
                    id="i_motora5"
                    type="checkbox"
                    className="form-check-input"
                    placeholder=""
                    name="motora5"
                    //onChange={handleInputChance}
                    required
                  ></input>
                  <label for="i_motora5" class="letrasFormulario">
                    Localiza el dolor
                  </label>
                  <input
                    id="i_motora6"
                    type="checkbox"
                    className="form-check-input"
                    placeholder=""
                    name="motora6"
                    //onChange={handleInputChance}
                    required
                  ></input>
                  <label for="i_motora6" class="letrasFormulario">
                    Obedece Ordenes
                  </label>
                </div>

                <div style={{ display: "grid", alignItems: "center", justifyContent: "center", width: "70%" }}>
                  <label htmlFor="exampleFormControlTextarea1" className="letrasFormulario">
                    Medico que recibe
                  </label>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "70%" }}>
                  <label htmlFor="exampleFormControlTextarea1" className="letrasFormulario">
                    Nombre
                  </label>
                  <input
                      id="i_nombreMedico"
                      type="text"
                      className="form-control rounded"
                      placeholder="Nombre"
                      name="nombreMedico"
                      //onChange={handleInputChance}
                      required
                  ></input>
                  <label
                      htmlFor="inputAddress"
                      className="form-label letrasFormulario"
                      style={{ marginTop: "5%" }}>
                      Personal de Salud
                    </label>
                  <fieldset>
                    <div>
                      <input
                        type="radio"
                        id="personalChoice1"
                        name="personal"
                        value="enfermera"
                      />
                      <label for="personalChoice1" style={{marginRight: "3%"}} class="letrasFormulario">Enfermera</label>

                      <input
                        type="radio"
                        id="personalChoice2"
                        name="personal"
                        value="medicoAux"
                      />
                      <label for="personalChoice2" style={{marginRight: "3%"}} class="letrasFormulario">Medico Aux Enf</label>
                      
                      <input
                        type="radio"
                        id="personalChoice3"
                        name="personal"
                        value="otros"
                      />
                      <label for="personalChoice3" style={{marginRight: "3%"}} class="letrasFormulario">Otros</label>
                    </div>
                  </fieldset>
                  <div style={{ display: "flex", alignItems: "center"}}>
                    <div style={{ display: "grid", alignItems: "center", width: "50%" }}>
                      <input
                          id="i_firmaMedico"
                          type="text"
                          className="form-control rounded"
                          placeholder="Firma"
                          name="firmaMedico"
                          //onChange={handleInputChance}
                          required
                      ></input>
                      <label htmlFor="exampleFormControlTextarea1" className="letrasFormulario text-center">
                        Firma
                      </label>
                    </div>
                    <div style={{ display: "grid", alignItems: "center", width: "50%", marginLeft: "2%" }}>
                      <label htmlFor="exampleFormControlTextarea1" 
                        className="letrasFormulario"
                      >
                        Hospital
                      </label>
                      <input
                          id="i_hospitalMedico"
                          type="text"
                          className="form-control rounded"
                          placeholder="Hospital"
                          name="hospitalMedico"
                          //onChange={handleInputChance}
                          required
                      ></input>
                      <label htmlFor="exampleFormControlTextarea1" className="letrasFormulario">
                        Area
                      </label>
                      <input
                          id="i_areaMedico"
                          type="text"
                          className="form-control rounded"
                          placeholder="Area"
                          name="areaMedico"
                          //onChange={handleInputChance}
                          required
                      ></input>
                    </div>
                  </div>
                </div>

                <div style={{ display: "grid", alignItems: "center", justifyContent: "center", width: "30%" }}>
                  <label htmlFor="exampleFormControlTextarea1" className="letrasFormulario">
                    Responsable de la Hoja
                  </label>
                  <label htmlFor="exampleFormControlTextarea1" className="letrasFormulario">
                    Nombre
                  </label>
                  <input
                      id="i_nombreResponsable"
                      type="text"
                      className="form-control rounded"
                      placeholder="Nombre"
                      name="nombreResponsable"
                      //onChange={handleInputChance}
                      required
                  ></input>
                  <label htmlFor="exampleFormControlTextarea1" className="letrasFormulario">
                    Cargo
                  </label>
                  <input
                      id="i_cargoResponsable"
                      type="text"
                      className="form-control rounded"
                      placeholder="Cargo"
                      name="cargoResponsable"
                      //onChange={handleInputChance}
                      required
                  ></input>
                  <input
                      id="i_firmaResponsable"
                      type="text"
                      className="form-control rounded"
                      placeholder="Firma"
                      name="firmaResponsable"
                      //onChange={handleInputChance}
                      required
                  ></input>
                  <label htmlFor="exampleFormControlTextarea1" className="letrasFormulario text-center">
                    Firma
                  </label>
                </div>

                <div style={{ display: "grid", alignItems: "center", justifyContent: "center", width: "100%" }}>
                  <label htmlFor="exampleFormControlTextarea1" className="letrasFormulario">
                    Hoja de Descargo
                  </label>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "50%" }}
                  className="container rounded"
                  class=".col-lg-1">
                  <label
                    htmlFor="inputAddress"
                    className="form-label letrasFormulario"
                    style={{marginRight: "1%"}}>
                    Fecha
                  </label>
                  <input
                    id="i_fechaDescargo"
                    type="date"
                    className="form-control rounded"
                    min="1990-01-01"
                    name="fechaDescargo"
                    //onChange={handleInputChance}
                    required
                  ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "50%" }}
                  className="container rounded"
                  class=".col-lg-1"
                >

                </div>

                <div style={{ display: "grid", alignItems: "center", width: "50%" }}
                  className="container rounded"
                  class=".col-lg-1"
                >
                  <label htmlFor="exampleFormControlTextarea1" className="letrasFormulario">
                    Yo
                  </label>
                  <input
                      id="i_nombreDescargo"
                      type="text"
                      className="form-control rounded"
                      placeholder="Nombre"
                      name="nombreDescargo"
                      //onChange={handleInputChance}
                      required
                  ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "50%" }}
                  className="container rounded"
                  class=".col-lg-1"
                >
                  <label
                    for="inputAddress"
                    className="form-label letrasFormulario"
                  >
                    DNI
                  </label>
                  <input
                    id="i_dniDescargo"
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

                <div style={{ display: "grid", alignItems: "center", width: "100%" }}>
                  <textarea
                    readOnly
                    class="form-control rounded"
                    name="direccion"
                    rows="4"
                    style={{ resize: "none" }}
                  >
                    he reusado la asistencia del servicio Pre-Hospitalario de la Unidad Medica de Emergencia
                    de la Comision Permanente de Contingencias (COPECO) en pleno conocimiento del perjuicio
                    que me cause, a lo cual descargo de toda responsabilidad a sus Medicos, Tecnicos, APAA,
                    Personal Administrativo y Voluntarios, individualmente o en conjunto por lesión, daño
                    o complicación que pueda resultar directa o indirectamente por haber reusado el tratamiento
                    o traslado.
                    Libero de cualquier responsabilidad de tipo legal o reglamentario y renuncio a todo derecho
                    de acción legal que yo pueda adquirir como resultado de mi negación.
                  </textarea>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "50%" }}
                  className="container rounded"
                  class=".col-lg-1"
                >
                  <label htmlFor="exampleFormControlTextarea1" className="letrasFormulario">
                    Firma
                  </label>
                  <input
                      id="i_firmaDescargo"
                      type="text"
                      className="form-control rounded"
                      name="firmaDescargo"
                      //onChange={handleInputChance}
                      required
                  ></input>

                  <label htmlFor="exampleFormControlTextarea1" className="letrasFormulario">
                    Testigo
                  </label>
                  <input
                      id="i_testigoDescargo"
                      type="text"
                      className="form-control rounded"
                      
                      name="testigoDescargo"
                      //onChange={handleInputChance}
                      required
                  ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "50%" }}
                  className="container rounded"
                  class=".col-lg-1"
                >
                  <label htmlFor="exampleFormControlTextarea1" className="letrasFormulario">
                    por COPECO
                  </label>
                  <input
                      id="i_copecoDescargo"
                      type="text"
                      className="form-control rounded"
                      name="copecoDescargo"
                      //onChange={handleInputChance}
                      required
                  ></input>
                  <label
                    for="inputAddress"
                    className="form-label letrasFormulario"
                  >
                    DNI
                  </label>
                  <input
                    id="i_dniTestigo"
                    type="text"
                    class="form-control rounded"
                    placeholder="Eje. 1804198002033"
                    name="dniTestigo"
                    pattern="[0-9]{13}"
                    title="Numero 13 digitos sin guiones"
                    //onChange={handleInputChance}
                    //onBlur={handleDni}
                    autoFocus
                    required
                  ></input>
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
