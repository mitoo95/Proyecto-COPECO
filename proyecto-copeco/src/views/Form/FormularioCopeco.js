import React, { Fragment, useState } from "react";
import { v4 } from "uuid";
import "./FormStyle.css";
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage"

const FormularioCopeco = () => {
  const [i_fecha, seti_fecha] = useState("");
  const [i_reporta, seti_reporta] = useState("");
  const [i_enlace, seti_enlace] = useState("");
  const [i_motorista, seti_motorista] = useState("");
  const [i_auxiliar1, seti_auxiliar1] = useState("");
  const [i_auxiliar2, seti_auxiliar2] = useState("");
  const [i_auxiliar3, seti_auxiliar3] = useState("");
  const [i_tipoIncidente, seti_tipoIncidente] = useState("");
  const [priorityChoice1, setpriorityChoice1] = useState("");
  const [i_kmSalida, seti_kmSalida] = useState("");
  const [i_kmEntrada, seti_kmEntrada] = useState("");
  const [i_unidad, seti_unidad] = useState("");
  const [i_tSalida, seti_tSalida] = useState("");
  const [i_tLlegada, seti_tLlegada] = useState("");
  const [i_tAbordaje, seti_tAbordaje] = useState("");
  const [i_tHospital, seti_tHospital] = useState("");
  const [i_tRegreso, seti_tRegreso] = useState("");
  const [i_nombre, seti_nombre] = useState("");
  const [genderChoice1, setgenderChoice1] = useState("");
  const [civilChoice1, setcivilChoice1] = useState("");
  const [i_ocupacion, seti_ocupacion] = useState("");
  const [i_edad, seti_edad] = useState("");
  const [i_telefono, seti_telefono] = useState("");
  const [i_dni, seti_dni] = useState("");
  const [i_direccion, seti_direccion] = useState("");
  const [i_acompañante, seti_acompañante] = useState("");
  const [i_lugarIncidente, seti_lugarIncidente] = useState("");
  const [i_parentesco, seti_parentesco] = useState("");
  const [i_HistoriaIncidente, seti_HistoriaIncidente] = useState("");
  const [i_pa, seti_pa] = useState("");
  const [i_fc, seti_fc] = useState("");
  const [i_temp, seti_temp] = useState("");
  const [i_fr, seti_fr] = useState("");
  const [i_spo2, seti_spo2] = useState("");
  const [i_glucosa, seti_glucosa] = useState("");
  const [i_ublesion, seti_ublesion] = useState("");
  const [i_pupilaD1, seti_pupilaD1] = useState("");
  const [i_pupilaD2, seti_pupilaD2] = useState("");
  const [i_pupilaI1, seti_pupilaI1] = useState("");
  const [i_pupilaI2, seti_pupilaI2] = useState("");
  const [i_trauma, seti_trauma] = useState("");
  const [i_muerteAparente, seti_muerteAparente] = useState(false);
  const [i_trastornoConciencia, seti_trastornoConciencia] = useState(false);
  const [i_ahogamiento, seti_ahogamiento] = useState(false);
  const [i_asfixia, seti_asfixia] = useState(false);
  const [i_evc, seti_evc] = useState(false);
  const [i_diabetes, seti_diabetes] = useState(false);
  const [i_convulsivo, seti_convulsivo] = useState(false);
  const [i_hipertensiva, seti_hipertensiva] = useState(false);
  const [i_asma, seti_asma] = useState(false);
  const [i_envenenamiento, seti_envenenamiento] = useState(false);
  const [i_paroCardio, seti_paroCardio] = useState(false);
  const [i_alergica, seti_alergica] = useState(false);
  const [i_sangradoDigestivo, seti_sangradoDigestivo] = useState(false);
  const [i_ovace, seti_ovace] = useState(false);
  const [i_dolorAbdominal, seti_dolorAbdominal] = useState(false);
  const [i_dolorToracico, seti_dolorToracico] = useState(false);
  const [i_cefalea, seti_cefalea] = useState(false);
  const [i_diarrea, seti_diarrea] = useState(false);
  const [i_vomito, seti_vomito] = useState(false);
  const [i_otros, seti_otros] = useState(false);
  const [i_stv, seti_stv] = useState("");
  const [i_aborto, seti_aborto] = useState("");
  const [i_partoNormal, seti_partoNormal] = useState("");
  const [i_partoAnormal, seti_partoAnormal] = useState("");
  const [i_examenFisico, seti_examenFisico] = useState("");
  const [i_observaciones, seti_observaciones] = useState("");
  const [i_material, seti_material] = useState("");
  const [conditionChoice1, setconditionChoice1] = useState("");
  const [efectosChoice1, setefectosChoice1] = useState("");
  const [i_litros, seti_litros] = useState("");
  const [i_tiempo, seti_tiempo] = useState("");
  const [i_uso, seti_uso] = useState("");
  const [orofaChoice1, setorofaChoice1] = useState("");
  const [collarChoice1, setcollarChoice1] = useState("");
  const [transferChoice1, settransferChoice1] = useState("");
  const [partoChoice1, setpartoChoice1] = useState("");
  const [i_gestacion, seti_gestacion] = useState("");
  const [i_au, seti_au] = useState("");
  const [i_fum, seti_fum] = useState("");
  const [nacidoChoice1, setnacidoChoice1] = useState("");
  const [i_fpp, seti_fpp] = useState("");
  const [i_hora1, seti_hora1] = useState("");
  const [i_hora2, seti_hora2] = useState("");
  const [i_medicamentos1, seti_medicamentos1] = useState("");
  const [i_medicamentos2, seti_medicamentos2] = useState("");
  const [i_dosis1, seti_dosis1] = useState("");
  const [i_dosis2, seti_dosis2] = useState("");
  const [i_via1, seti_via1] = useState("");
  const [i_via2, seti_via2] = useState("");
  const [i_respuesta1, seti_respuesta1] = useState("");
  const [i_respuesta2, seti_respuesta2] = useState("");
  const [i_visual1, seti_visual1] = useState(false);
  const [i_visual2, seti_visual2] = useState(false);
  const [i_visual3, seti_visual3] = useState(false);
  const [i_visual4, seti_visual4] = useState(false);
  const [i_verbal1, seti_verbal1] = useState(false);
  const [i_verbal2, seti_verbal2] = useState(false);
  const [i_verbal3, seti_verbal3] = useState(false);
  const [i_verbal4, seti_verbal4] = useState(false);
  const [i_verbal5, seti_verbal5] = useState(false);
  const [i_motora1, seti_motora1] = useState(false);
  const [i_motora2, seti_motora2] = useState(false);
  const [i_motora3, seti_motora3] = useState(false);
  const [i_motora4, seti_motora4] = useState(false);
  const [i_motora5, seti_motora5] = useState(false);
  const [i_motora6, seti_motora6] = useState(false);
  const [i_nombreMedico, seti_nombreMedico] = useState("");
  const [personalChoice1, setpersonalChoice1] = useState("");
  const [i_hospitalMedico, seti_hospitalMedico] = useState("");
  const [i_areaMedico, seti_areaMedico] = useState("");
  const [i_nombreResponsable, seti_nombreResponsable] = useState("");
  const [i_cargoResponsable, seti_cargoResponsable] = useState("");
  const [i_fechaDescargo, seti_fechaDescargo] = useState("");
  const [i_nombreDescargo, seti_nombreDescargo] = useState("");
  const [i_dniDescargo, seti_dniDescargo] = useState("");
  const [i_testigoDescargo, seti_testigoDescargo] = useState("");
  const [i_copecoDescargo, seti_copecoDescargo] = useState("");
  const [i_dniTestigo, seti_dniTestigo] = useState("");
  const [i_diagnostico, seti_diagnostico] = useState("");
  

  const [i_firmaMedico, seti_firmaMedico] = useState([]);//*
  const [i_firmaResponsable, seti_firmaResponsable] = useState([]);//*
  const [i_firmaDescargo, seti_firmaDescargo] = useState([]);//*
  const [imageUrls, setImageUrls] = useState([]);


  const db = getFirestore();
  const storage = getStorage();

  const handleFileChange = (event, setImageState) => {
    setImageState(Array.from(event.target.files));
  };

  const uploadImage = (files) => {
    files.forEach((file) => {
      const imageRef = ref(storage, `images/${file.name + v4()}`);
      uploadBytes(imageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  };

  const saveDataToFirestore = async (event) => {
    if (event) {
      event.preventDefault(); // Verificar si el evento está definido antes de usar preventDefault
    }
    try{
      await addDoc(collection(db, "myCollectionCopeco"), {
        fecha:i_fecha,
        reporta:i_reporta,
        enlace:i_enlace,
        motorista:i_motorista,
        auxiliar1:i_auxiliar1,
        auxiliar2:i_auxiliar2,
        auxiliar3:i_auxiliar3,
        tipoIncidente:i_tipoIncidente,
        prioridad:priorityChoice1,
        kmSalida:i_kmSalida,
        kmEntrada:i_kmEntrada,
        unidad:i_unidad,
        tSalida:i_tSalida,
        tLlegada:i_tLlegada,
        tAbordaje:i_tAbordaje,
        tHospital:i_tHospital,
        tRegreso:i_tRegreso,
        nombre:i_nombre,
        genero:genderChoice1,
        estado_Civil:civilChoice1,
        ocupacion:i_ocupacion,
        edad:i_edad,
        telefono:i_telefono,
        dni:i_dni,
        direccion:i_direccion,
        acompañante:i_acompañante,
        lugarIncidente:i_lugarIncidente,
        parentesco:i_parentesco,
        historiaIncidente:i_HistoriaIncidente,
        pa:i_pa,
        fc:i_fc,
        temp:i_temp,
        fr:i_fr,
        spo2:i_spo2,
        glucosa:i_glucosa,
        ublesion:i_ublesion,
        pupilaD1:i_pupilaD1,
        pupilaD2:i_pupilaD2,
        pupilaI1:i_pupilaI1,
        pupilaI2:i_pupilaI2,
        trauma:i_trauma,
        muerteAparente:i_muerteAparente,
        trastornoConciencia:i_trastornoConciencia,
        ahogamiento:i_ahogamiento,
        asfixia:i_asfixia,
        evc:i_evc,
        diabetes:i_diabetes,
        convulsivo:i_convulsivo,
        hipertensiva:i_hipertensiva,
        asma:i_asma,
        envenenamiento:i_envenenamiento,
        paroCardio:i_paroCardio,
        alergica:i_alergica,
        sangradoDigestivo:i_sangradoDigestivo,
        ovace:i_ovace,
        dolorAbdominal:i_dolorAbdominal,
        dolorToracico:i_dolorToracico,
        cefalea:i_cefalea,
        diarrea:i_diarrea,
        vomito:i_vomito,
        otrosProblemas:i_otros,
        stv:i_stv,
        aborto:i_aborto,
        partoNormal:i_partoNormal,
        partoAnormal:i_partoAnormal,
        examenFisico:i_examenFisico,
        observaciones:i_observaciones,
        material:i_material,
        condicionPx:conditionChoice1,
        efectos_Personales:efectosChoice1,
        litros:i_litros,
        tiempo:i_tiempo,
        uso:i_uso,
        can_Orofa:orofaChoice1,
        collar_Cervical:collarChoice1,
        forma_Traslado:transferChoice1,
        parto_Ambulancia:partoChoice1,
        gestacion:i_gestacion,
        au:i_au,
        fum:i_fum,
        nacido_Vivo:nacidoChoice1,
        fpp:i_fpp,
        hora1:i_hora1,
        hora2:i_hora2,
        medicamentos1:i_medicamentos1,
        medicamentos2:i_medicamentos2,
        dosis1:i_dosis1,
        dosis2:i_dosis2,
        via1:i_via1,
        via2:i_via2,
        respuesta1:i_respuesta1,
        respuesta2:i_respuesta2,
        visual1:i_visual1,
        visual2:i_visual2,
        visual3:i_visual3,
        visual4:i_visual4,
        verbal1:i_verbal1,
        verbal2:i_verbal2,
        verbal3:i_verbal3,
        verbal4:i_verbal4,
        verbal5:i_verbal5,
        motora1:i_motora1,
        motora2:i_motora2,
        motora3:i_motora3,
        motora4:i_motora4,
        motora5:i_motora5,
        motora6:i_motora6,
        nombreMedico:i_nombreMedico,
        personal_Salud:personalChoice1,
        hospitalMedico:i_hospitalMedico,
        areaMedico:i_areaMedico,
        nombreResponsable:i_nombreResponsable,
        cargoResponsable:i_cargoResponsable,
        fechaDescargo:i_fechaDescargo,
        nombreDescargo:i_nombreDescargo,
        dniDescargo:i_dniDescargo,
        testigoDescargo:i_testigoDescargo,
        copecoDescargo:i_copecoDescargo,
        dniTestigo:i_dniTestigo,
        horaServidor: serverTimestamp(),
        diagnostico: i_diagnostico,
      });
      console.log("Datos guardados con éxito");
      alert("Datos guardados con éxito");
    } catch (error) {
      console.error("Error writing document: ", error);
      alert("An error occurred while saving data to Firestore. Please try again later.");
    }
  };

  const uploadImagesAndSaveData = async () => {
    await Promise.all([
      uploadImage(i_firmaMedico),
      uploadImage(i_firmaResponsable),
      uploadImage(i_firmaDescargo)
    ]);
  
    await saveDataToFirestore();
  };
  
  const handleUploadAndSave = async (event) => {
    event.preventDefault();
    try {
      await uploadImagesAndSaveData();
    } catch (error) {
      console.error("Error uploading images and saving data: ", error);
      alert("An error occurred while uploading images and saving data. Please try again later.");
    }
    window.location.reload();
  };

  return (
    <Fragment>
      <div className="contentf" >
        <div className="contenedorPrincipal">
          
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
                  className="container rounded .col-lg-1"
                >
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
                    value={i_fecha}
                    min="1990-01-01"
                    name="fecha"
                    onChange={(e) => seti_fecha(e.target.value)}
                    
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
                    value={i_reporta}
                    name="reporta"
                    onChange={(e) => seti_reporta(e.target.value)}
                    
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
                    value={i_enlace}
                    name="enlace"
                    onChange={(e) => seti_enlace(e.target.value)}
                    //onChange={handleInputChance}
                    
                  ></input>
                </div>
                
                <div style={{ display: "grid", alignItems: "center", width: "25%" }}
                  className="container rounded .col-lg-2"
                >
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
                      value={i_motorista}
                      name="motorista"
                      onChange={(e) => seti_motorista(e.target.value)}
                      //onChange={handleInputChance}
                      
                  ></input>
                    <input
                      id="i_auxiliar1"
                      type="text"
                      className="form-control rounded"
                      placeholder="Auxiliar1"
                      value={i_auxiliar1}
                      name="auxiliar1"
                      onChange={(e) => seti_auxiliar1(e.target.value)}
                      //onChange={handleInputChance}
                      
                  ></input>
                  <input
                      id="i_auxiliar2"
                      type="text"
                      className="form-control rounded"
                      placeholder="Auxiliar2"
                      value={i_auxiliar2}
                      name="auxiliar2"
                      onChange={(e) => seti_auxiliar2(e.target.value)}
                      //onChange={handleInputChance}
                      
                  ></input>
                  <input
                      id="i_auxiliar3"
                      type="text"
                      className="form-control rounded"
                      placeholder="Auxiliar3"
                      value={i_auxiliar3}
                      name="auxiliar3"
                      onChange={(e) => seti_auxiliar3(e.target.value)}
                      //onChange={handleInputChance}
                      
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
                      value={i_tipoIncidente}
                      name="tipoIncidente"
                      onChange={(e) => seti_tipoIncidente(e.target.value)}
                      //onChange={handleInputChance}
                      
                  ></input>
                </div>
                

                <div style={{ display: "grid", alignItems: "center", width: "25%" }}
                  className="container rounded .col-lg-2"
                  >
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
                          name="prioridad"
                          value="V"
                          onChange={(e) => 
                            setpriorityChoice1(e.target.value)
                          }
                        />
                        <label htmlFor="priorityChoice1" style={{ marginRight: "3%" }} className="letrasFormulario">V</label>

                        <input
                          type="radio"
                          id="priorityChoice2"
                          name="prioridad"
                          value="A"
                          onChange={(e) => 
                            setpriorityChoice1(e.target.value)
                          }
                        />
                        <label htmlFor="priorityChoice2" style={{ marginRight: "3%" }} className="letrasFormulario">A</label>

                        <input
                          type="radio"
                          id="priorityChoice3"
                          name="prioridad"
                          value="R"
                          onChange={(e) => 
                            setpriorityChoice1(e.target.value)
                          }
                        />
                        <label htmlFor="priorityChoice3" style={{ marginRight: "3%" }} className="letrasFormulario">R</label>

                        <input
                          type="radio"
                          id="priorityChoice4"
                          name="prioridad"
                          value="N"
                          onChange={(e) => 
                            setpriorityChoice1(e.target.value)
                          }
                        />
                        <label htmlFor="priorityChoice4" className="letrasFormulario">N</label>
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
                    value={i_kmSalida}
                    name="kmSalida"
                    onChange={(e) => seti_kmSalida(e.target.value)}
                    //onChange={handleInputChance}
                    
                  ></input>
                  <input
                    id="i_kmEntrada"
                    type="text"
                    className="form-control rounded"
                    placeholder="Entrada"
                    value={i_kmEntrada}
                    name="kmEntrada"
                    onChange={(e) => seti_kmEntrada(e.target.value)}
                    //onChange={handleInputChance}
                    
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
                    value={i_unidad}
                    name="unidad"
                    onChange={(e) => seti_unidad(e.target.value)}
                    //onChange={handleInputChance}
                    
                  ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "25%" }}
                  className="container rounded .col-lg-2"
                >
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
                      value={i_tSalida}
                      name="tSalida"
                      onChange={(e) => seti_tSalida(e.target.value)}
                      //onChange={handleInputChance}
                      
                  ></input>
                    <input
                      id="i_tLlegada"
                      type="text"
                      className="form-control rounded"
                      placeholder="Llegada"
                      value={i_tLlegada}
                      name="tLlegada"
                      onChange={(e) => seti_tLlegada(e.target.value)}
                      //onChange={handleInputChance}
                      
                  ></input>
                  <input
                      id="i_tAbordaje"
                      type="text"
                      className="form-control rounded"
                      placeholder="Abordaje"
                      value={i_tAbordaje}
                      name="tAbordaje"
                      onChange={(e) => seti_tAbordaje(e.target.value)}
                      //onChange={handleInputChance}
                      
                  ></input>
                  <input
                      id="i_tHospital"
                      type="text"
                      className="form-control rounded"
                      placeholder="Hospital"
                      value={i_tHospital}
                      name="tHospital"
                      onChange={(e) => seti_tHospital(e.target.value)}
                      //onChange={handleInputChance}
                      
                  ></input>
                  <input
                      id="i_tRegreso"
                      type="text"
                      className="form-control rounded"
                      placeholder="Regreso"
                      value={i_tRegreso}
                      name="tRegreso"
                      onChange={(e) => seti_tRegreso(e.target.value)}
                      //onChange={handleInputChance}
                      
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
                    value={i_nombre}
                    name="nombre"
                    onChange={(e) => seti_nombre(e.target.value)}
                    //onChange={handleInputChance}
                    
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
                        value="Femenino"
                        onChange={(e) => 
                          setgenderChoice1(e.target.value)
                        }
                      />
                      <label htmlFor="genderChoice1" style={{marginRight: "8%"}} className="letrasFormulario">Femenino</label>

                      <input
                        type="radio"
                        id="genderChoice2"
                        name="Genero"
                        value="Masculino"
                        onChange={(e) => 
                          setgenderChoice1(e.target.value)
                        }
                      />
                      <label htmlFor="genderChoice2" className="letrasFormulario">Masculino</label>
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
                        onChange={(e) => 
                          setcivilChoice1(e.target.value)
                        }
                      />
                      <label htmlFor="civilChoice1" style={{marginRight: "3%"}} className="letrasFormulario">S</label>
                      <input
                        type="radio"
                        id="civilChoice2"
                        name="estadoCivil"
                        value="UL"
                        onChange={(e) => 
                          setcivilChoice1(e.target.value)
                        }
                      />
                      <label htmlFor="civilChoice2" style={{marginRight: "3%"}} className="letrasFormulario">UL</label>

                      <input
                        type="radio"
                        id="civilChoice3"
                        name="estadoCivil"
                        value="C"
                        onChange={(e) => 
                          setcivilChoice1(e.target.value)
                        }
                      />
                      <label htmlFor="civilChoice3" style={{marginRight: "3%"}} className="letrasFormulario">C</label>

                      <input
                        type="radio"
                        id="civilChoice4"
                        name="estadoCivil"
                        value="V"
                        onChange={(e) => 
                          setcivilChoice1(e.target.value)
                        }
                      />
                      <label htmlFor="civilChoice4" style={{marginRight: "3%"}} className="letrasFormulario">V</label>

                      <input
                        type="radio"
                        id="civilChoice5"
                        name="estadoCivil"
                        value="D"
                        onChange={(e) => 
                          setcivilChoice1(e.target.value)
                        }
                      />
                      <label htmlFor="civilChoice5" className="letrasFormulario">D</label>

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
                    value={i_ocupacion}
                    name="ocupacion"
                    onChange={(e) => seti_ocupacion(e.target.value)}
                    //onChange={handleInputChance}
                    
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
                    value={i_edad}
                    onChange={(e) => seti_edad(e.target.value)}
                    //onChange={handleInputChance}
                    
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
                    value={i_telefono}
                    name="telefono"
                    onChange={(e) => seti_telefono(e.target.value)}
                    //onChange={handleInputChance}
                    
                  ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "30%" }}>
                  <label
                    htmlFor="inputAddress"
                    className="form-label letrasFormulario"
                  >
                    DNI
                  </label>
                  <input
                    id="i_dni"
                    type="text"
                    className="form-control rounded"
                    placeholder="Eje. 1804198002033"
                    name="dni"
                    pattern="[0-9]{13}"
                    value={i_dni}
                    onChange={(e) => seti_dni(e.target.value)}
                    title="Numero 13 digitos sin guiones"
                    //onChange={handleInputChance}
                    //onBlur={handleDni}
                    autoFocus
                    
                  ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "50%" }}>
                  <label htmlFor="exampleFormControlTextarea1"
                    className="letrasFormulario"
                  >
                    Dirección
                  </label>
                  <textarea
                    id="i_direccion"
                    type="text"
                    className="form-control rounded"
                    name="direccion"
                    rows="2"
                    style={{ resize: "none" }}
                    placeholder="5 calle 8 avenida"
                    value={i_direccion}
                    onChange={(e) => seti_direccion(e.target.value)}
                    //onChange={handleInputChance}
                    
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
                    value={i_acompañante}
                    onChange={(e) => seti_acompañante(e.target.value)}
                    //onChange={handleInputChance}
                    
                  ></input>
                </div>
                
                <div style={{ display: "grid", alignItems: "center", width: "50%" }}>
                  <label htmlFor="exampleFormControlTextarea1"
                    className="letrasFormulario"
                  >
                    Lugar de Incidente
                  </label>
                  <textarea
                    id="i_lugarIncidente"
                    type="text"
                    className="form-control rounded"
                    name="lugarIncidente"
                    rows="2"
                    style={{ resize: "none" }}
                    placeholder="5 calle 8 avenida"
                    pattern="[0-9]{8}"
                    value={i_lugarIncidente}
                    onChange={(e) => seti_lugarIncidente(e.target.value)}
                    //onChange={handleInputChance}
                    
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
                    value={i_parentesco}
                    onChange={(e) => seti_parentesco(e.target.value)}
                    //onChange={handleInputChance}
                    
                  ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "100%" }}>
                  <label htmlFor="exampleFormControlTextarea1"
                    className="letrasFormulario"
                  >
                    Historia del Incidente
                  </label>
                  <textarea
                    id="i_HistoriaIncidente"
                    type="text"
                    className="form-control rounded"
                    name="HistoriaIncidente"
                    rows="4"
                    value={i_HistoriaIncidente}
                    style={{ resize: "none" }}
                    onChange={(e) => seti_HistoriaIncidente(e.target.value)}
                    placeholder="El semaforo estaba en rojo y se lo salto..."
                    //onChange={handleInputChance}
                    
                  ></textarea>
                </div>
                
                <div style={{ display: "flex", alignItems: "center"}}>
                  <label htmlFor="exampleFormControlTextarea1"
                    className="letrasFormulario"
                    style={{width: "8%", marginRight: "1%"}}
                  >
                    Signos Vitales
                  </label>
                  <input
                    id="i_pa"
                    type="text"
                    className="form-control rounded"
                    placeholder="P/A"
                    name="pa"
                    value={i_pa}
                    style={{marginRight: "2%"}}
                    onChange={(e) => seti_pa(e.target.value)}
                    //onChange={handleInputChance}
                    
                  ></input>
                  <input
                    id="i_fc"
                    type="text"
                    className="form-control rounded"
                    placeholder="FC"
                    name="fc"
                    value={i_fc}
                    style={{marginRight: "2%"}}
                    onChange={(e) => seti_fc(e.target.value)}
                    //onChange={handleInputChance}
                    
                  ></input>
                  <input
                    id="i_temp"
                    type="text"
                    className="form-control rounded"
                    placeholder="Temp"
                    name="temp"
                    value={i_temp}
                    onChange={(e) => seti_temp(e.target.value)}
                    //onChange={handleInputChance}
                    
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
                    value={i_fr}
                    onChange={(e) => seti_fr(e.target.value)}
                    style={{marginRight: "2%"}}
                    //onChange={handleInputChance}
                    
                  ></input>
                  <input
                    id="i_spo2"
                    type="text"
                    className="form-control rounded"
                    placeholder="SpO2"
                    name="spo2"
                    value={i_spo2}
                    style={{marginRight: "2%"}}
                    onChange={(e) => seti_spo2(e.target.value)}
                    //onChange={handleInputChance}
                    
                  ></input>
                  <input
                    id="i_glucosa"
                    type="text"
                    className="form-control rounded"
                    placeholder="Glucosa"
                    name="glucosa"
                    value={i_glucosa}
                    onChange={(e) => seti_glucosa(e.target.value)}
                    //onChange={handleInputChance}
                    
                  ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "30%" }}>
                  <label htmlFor="exampleFormControlTextarea1"
                    className="letrasFormulario"
                    
                  >
                    Ubicación de la lesión
                  </label>
                  <textarea
                    id="i_ublesion"
                    type="text"
                    className="form-control rounded"
                    name="ublesion"
                    rows="10"
                    value={i_ublesion}
                    style={{ resize: "none" }}
                    onChange={(e) => seti_ublesion(e.target.value)}
                    placeholder="Cabeza, antebrazo derecho..."
                    //onChange={handleInputChance}
                    
                  ></textarea>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "10%" }}>
                <label htmlFor="exampleFormControlTextarea1"
                      className="letrasFormulario"
                    >
                      Pupilas
                    </label>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "15%" }}>
                    <label htmlFor="exampleFormControlTextarea1"
                      className="letrasFormulario"
                    >
                      D
                    </label>
                    <input
                      id="i_pupilaD1"
                      type="text"
                      className="form-control rounded"
                      placeholder=""
                      value={i_pupilaD1}
                      name="pupilaD1"
                      onChange={(e) => seti_pupilaD1(e.target.value)}
                      //onChange={handleInputChance}
                      
                    ></input>
                    <input
                      id="i_pupilaD2"
                      type="text"
                      className="form-control rounded"
                      placeholder=""
                      value={i_pupilaD2}
                      name="pupilaD2"
                      onChange={(e) => seti_pupilaD2(e.target.value)}
                      //onChange={handleInputChance}
                      
                    ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "15%" }}>
                    <label htmlFor="exampleFormControlTextarea1"
                      className="letrasFormulario"
                    >
                      I
                    </label>
                    <input
                      id="i_pupilaI1"
                      type="text"
                      className="form-control rounded"
                      placeholder=""
                      value={i_pupilaI1}
                      name="pupilaI1"
                      onChange={(e) => seti_pupilaI1(e.target.value)}
                      //onChange={handleInputChance}
                      
                    ></input>
                    <input
                      id="i_pupilaI2"
                      type="text"
                      className="form-control rounded"
                      placeholder=""
                      name="pupilaI2"
                      value={i_pupilaI2}
                      onChange={(e) => seti_pupilaI2(e.target.value)}
                      //onChange={handleInputChance}
                      
                    ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "30%" }}>
                  <label htmlFor="exampleFormControlTextarea1"
                    className="letrasFormulario"
                  >
                    Trauma
                  </label>
                  <textarea
                    id="i_trauma"
                    type="text"
                    className="form-control rounded"
                    name="trauma"
                    rows="10"
                    value={i_trauma}
                    style={{ resize: "none" }}
                    placeholder="Trauma"
                    onChange={(e) => seti_trauma(e.target.value)}
                    //onChange={handleInputChance}
                    
                  ></textarea>
                </div>

                <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                  <label htmlFor="exampleFormControlTextarea1" className="letrasFormulario">
                    Problema Medico
                  </label>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: "10px", width: "100%" }}>
                    <div>
                      <input
                        id="i_muerteAparente"
                        type="checkbox"
                        className="form-check-input"
                        placeholder="Muerte Aparente"
                        checked={i_muerteAparente}
                        name="muerteAparente"
                        onChange={(e) => seti_muerteAparente(e.target.checked)}
                        //onChange={handleInputChance}
                        
                      ></input>
                      <label htmlFor="i_muerteAparente" className="letrasFormulario">
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
                        checked={i_trastornoConciencia}
                        onChange={(e) => seti_trastornoConciencia(e.target.checked)}
                        //onChange={handleInputChance}
                        
                      ></input>
                      <label htmlFor="i_trastornoConciencia" className="letrasFormulario">
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
                        checked={i_ahogamiento}
                        onChange={(e) => seti_ahogamiento(e.target.checked)}
                        //onChange={handleInputChance}
                        
                      ></input>
                      <label htmlFor="i_ahogamiento" className="letrasFormulario">
                        Ahogamiento
                      </label>
                    </div>

                    <div>
                      <input
                        id="i_asfixia"
                        type="checkbox"
                        className="form-check-input"
                        placeholder="Asfixia"
                        checked={i_asfixia}
                        name="asfixia"
                        onChange={(e) => seti_asfixia(e.target.checked)}
                        //onChange={handleInputChance}
                        
                      ></input>
                      <label htmlFor="i_asfixia" className="letrasFormulario">
                        Asfixia
                      </label>
                    </div>

                    <div>
                      <input
                        id="i_evc"
                        type="checkbox"
                        className="form-check-input"
                        placeholder="EVC"
                        checked={i_evc}
                        name="evc"
                        onChange={(e) => seti_evc(e.target.checked)}
                        //onChange={handleInputChance}
                        
                      ></input>
                      <label htmlFor="i_evc" className="letrasFormulario">
                        EVC
                      </label>
                    </div>

                    <div>
                      <input
                        id="i_diabetes"
                        type="checkbox"
                        className="form-check-input"
                        placeholder="Diabetes Militus Desc"
                        checked={i_diabetes}
                        name="diabetes"
                        onChange={(e) => seti_diabetes(e.target.checked)}
                        //onChange={handleInputChance}
                        
                      ></input>
                      <label htmlFor="i_diabetes" className="letrasFormulario">
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
                        checked={i_convulsivo}
                        onChange={(e) => seti_convulsivo(e.target.checked)}
                        //onChange={handleInputChance}
                        
                      ></input>
                      <label htmlFor="i_convulsivo" className="letrasFormulario">
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
                        checked={i_hipertensiva}
                        onChange={(e) => seti_hipertensiva(e.target.checked)}
                        //onChange={handleInputChance}
                        
                      ></input>
                      <label htmlFor="i_hipertensiva" className="letrasFormulario">
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
                        checked={i_asma}
                        onChange={(e) => seti_asma(e.target.checked)}
                        //onChange={handleInputChance}
                        
                      ></input>
                      <label htmlFor="i_asma" className="letrasFormulario">
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
                        checked={i_envenenamiento}
                        onChange={(e) => seti_envenenamiento(e.target.checked)}
                        //onChange={handleInputChance}
                        
                      ></input>
                      <label htmlFor="i_envenenamiento" className="letrasFormulario">
                        Envenenamiento
                      </label>
                    </div>

                    <div>
                      <input
                        id="i_paroCardio"
                        type="checkbox"
                        className="form-check-input"
                        placeholder="Paro Cardio Respiratorio"
                        name="paroCardio"
                        checked={i_paroCardio}
                        onChange={(e) => seti_paroCardio(e.target.checked)}
                        //onChange={handleInputChance}
                        
                      ></input>
                      <label htmlFor="i_paroCardio" className="letrasFormulario">
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
                        checked={i_alergica}
                        onChange={(e) => seti_alergica(e.target.checked)}
                        //onChange={handleInputChance}
                        
                      ></input>
                      <label htmlFor="i_alergica" className="letrasFormulario">
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
                        checked={i_sangradoDigestivo}
                        onChange={(e) => seti_sangradoDigestivo(e.target.checked)}
                        //onChange={handleInputChance}
                        
                      ></input>
                      <label htmlFor="i_sangradoDigestivo" className="letrasFormulario">
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
                        checked={i_ovace}
                        onChange={(e) => seti_ovace(e.target.checked)}
                        //onChange={handleInputChance}
                        
                      ></input>
                      <label htmlFor="i_ovace" className="letrasFormulario">
                        OVACE
                      </label>
                    </div>

                    <div>
                      <input
                        id="i_dolorAbdominal"
                        type="checkbox"
                        className="form-check-input"
                        placeholder="Dolor Abdominal"
                        name="dolorAbdominal"
                        checked={i_dolorAbdominal}
                        onChange={(e) => seti_dolorAbdominal(e.target.checked)}
                        //onChange={handleInputChance}
                        
                      ></input>
                      <label htmlFor="i_dolorAbdominal" className="letrasFormulario">
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
                        checked={i_dolorToracico}
                        style={{marginBottom: "0.5%"}}
                        onChange={(e) => seti_dolorToracico(e.target.checked)}
                        //onChange={handleInputChance}
                        
                      ></input>
                      <label htmlFor="i_dolorToracico" className="letrasFormulario">
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
                        checked={i_cefalea}
                        onChange={(e) => seti_cefalea(e.target.checked)}
                        style={{marginBottom: "0.5%"}}
                        //onChange={handleInputChance}
                        
                      ></input>
                      <label htmlFor="i_cefalea" className="letrasFormulario">
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
                        checked={i_diarrea}
                        onChange={(e) => seti_diarrea(e.target.checked)}
                        style={{marginBottom: "0.5%"}}
                        //onChange={handleInputChance}
                        
                      ></input>
                      <label htmlFor="i_diarrea" className="letrasFormulario">
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
                        checked={i_vomito}
                        onChange={(e) => seti_vomito(e.target.checked)}
                        style={{marginBottom: "0.5%"}}
                        //onChange={handleInputChance}
                        
                      ></input>
                      <label htmlFor="i_vomito" className="letrasFormulario">
                        Vomito
                      </label>
                    </div>

                    <div>
                      <input
                        id="i_otros"
                        type="checkbox"
                        className="form-check-input"
                        placeholder="Otros"
                        name="otros"
                        checked={i_otros}
                        onChange={(e) => seti_otros(e.target.checked)}
                        style={{marginBottom: "0.5%"}}
                        //onChange={handleInputChance}
                        
                      ></input>
                      <label htmlFor="i_otros" className="letrasFormulario">
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
                    value={i_stv}
                    onChange={(e) => seti_stv(e.target.value)}
                    style={{marginBottom: "0.5%"}}
                    //onChange={handleInputChance}
                    
                  ></input>
                  <input
                    id="i_aborto"
                    type="text"
                    className="form-control rounded"
                    placeholder="Aborto"
                    name="aborto"
                    value={i_aborto}
                    onChange={(e) => seti_aborto(e.target.value)}
                    style={{marginBottom: "0.5%"}}
                    //onChange={handleInputChance}
                    
                  ></input>
                  <input
                    id="i_partoNormal"
                    type="text"
                    className="form-control rounded"
                    placeholder="Parto Normal"
                    name="partoNormal"
                    value={i_partoNormal}
                    onChange={(e) => seti_partoNormal(e.target.value)}
                    style={{marginBottom: "0.5%"}}
                    //onChange={handleInputChance}
                    
                  ></input>
                  <input
                    id="i_partoAnormal"
                    type="text"
                    className="form-control rounded"
                    placeholder="Parto Anormal (Espec)"
                    name="partoAnormal"
                    value={i_partoAnormal}
                    onChange={(e) => seti_partoAnormal(e.target.value)}
                    //onChange={handleInputChance}
                    
                  ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "100%" }}>
                  <label htmlFor="exampleFormControlTextarea1"
                    className="letrasFormulario"
                  >
                    Examen Fisico
                  </label>
                  <textarea
                    id="i_examenFisico"
                    type="text"
                    className="form-control rounded"
                    name="examenFisico"
                    rows="4"
                    value={i_examenFisico}
                    style={{ resize: "none" }}
                    placeholder="Examen Fisico"
                    onChange={(e) => seti_examenFisico(e.target.value)}
                    //onChange={handleInputChance}
                    
                  ></textarea>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "100%" }}>
                  <label htmlFor="exampleFormControlTextarea1"
                    className="letrasFormulario"
                  >
                    Observaciones
                  </label>
                  <textarea
                    id="i_observaciones"
                    type="text"
                    className="form-control rounded"
                    name="observaciones"
                    rows="4"
                    value={i_observaciones}
                    style={{ resize: "none" }}
                    placeholder="Observaciones"
                    onChange={(e) => seti_observaciones(e.target.value)}
                    //onChange={handleInputChance}
                    
                  ></textarea>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "100%" }}>
                  <label htmlFor="exampleFormControlTextarea1"
                    className="letrasFormulario"
                  >
                    Material Utilizado
                  </label>
                  <textarea
                    id="i_material"
                    type="text"
                    className="form-control rounded"
                    name="material"
                    rows="3"
                    value={i_material}
                    style={{ resize: "none" }}
                    placeholder="Material Utilizado"
                    onChange={(e) => seti_material(e.target.value)}
                    //onChange={handleInputChance}
                    
                  ></textarea>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "40%" }}>
                  <label htmlFor="exampleFormControlTextarea1"
                    className="letrasFormulario"
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
                        value="Estable"
                        onChange={(e) =>
                          setconditionChoice1(e.target.value)
                        }
                      />
                      <label htmlFor="conditionChoice1" style={{marginRight: "3%"}} className="letrasFormulario">Estable</label>

                      <input
                        type="radio"
                        id="conditionChoice2"
                        name="condicionPx"
                        value="Inestable"
                        onChange={(e) =>
                          setconditionChoice1(e.target.value)
                        }
                      />
                      <label htmlFor="conditionChoice2" style={{marginRight: "3%"}} className="letrasFormulario">Inestable</label>
                      
                      <input
                        type="radio"
                        id="conditionChoice3"
                        name="condicionPx"
                        value="Pot. Inestable"
                        onChange={(e) =>
                          setconditionChoice1(e.target.value)
                        }
                      />
                      <label htmlFor="conditionChoice3" style={{marginRight: "3%"}} className="letrasFormulario">Pot. Inestable</label>

                      <input
                        type="radio"
                        id="conditionChoice4"
                        name="condicionPx"
                        value="Critico"
                        onChange={(e) =>
                          setconditionChoice1(e.target.value)
                        }
                      />
                      <label htmlFor="conditionChoice4" style={{marginRight: "3%"}} className="letrasFormulario">Critico</label>

                      <input
                        type="radio"
                        id="conditionChoice5"
                        name="condicionPx"
                        value="Fallecido"
                        onChange={(e) =>
                          setconditionChoice1(e.target.value)
                        }
                      />
                      <label htmlFor="conditionChoice5" className="letrasFormulario">Fallecido</label>
                    </div>
                  </fieldset>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "30%" }}>
                  <label htmlFor="exampleFormControlTextarea1"
                    className="letrasFormulario"
                  >
                    Efectos Personales
                  </label>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", alignItems: "center", width: "100%" }}></div>
                    <div>
                      <input
                        type="radio"
                        id="efectosChoice1"
                        name="efectospersonales"
                        value="Resguardo"
                        onChange={(e) => 
                          setefectosChoice1(e.target.value)
                        }
                      />
                      <label htmlFor="efectosChoice1" style={{marginRight: "3%"}} className="letrasFormulario">Resguardo</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="efectosChoice2"
                        name="efectospersonales"
                        value="Pol."
                        onChange={(e) => 
                          setefectosChoice1(e.target.value)
                        }
                      />
                      <label htmlFor="efectosChoice2" style={{marginRight: "3%"}} className="letrasFormulario">Pol.</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="efectosChoice3"
                        name="efectospersonales"
                        value="Fam"
                        onChange={(e) => 
                          setefectosChoice1(e.target.value)
                        }
                      />
                      <label htmlFor="efectosChoice3" style={{marginRight: "3%"}} className="letrasFormulario">Fam.</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="efectosChoice4"
                        name="efectospersonales"
                        value="Pers. Hosp."
                        onChange={(e) => 
                          setefectosChoice1(e.target.value)
                        }
                      />
                      <label htmlFor="efectosChoice4" style={{marginRight: "3%"}} className="letrasFormulario">Pers. Hosp.</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="efectosChoice5"
                        name="efectospersonales"
                        value="Otros"
                        onChange={(e) => 
                          setefectosChoice1(e.target.value)
                        }
                      />
                      <label htmlFor="efectosChoice5" style={{marginRight: "3%"}} className="letrasFormulario">Otros</label>
                    </div> 
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "30%" }}>
                  <label htmlFor="exampleFormControlTextarea1"
                    className="letrasFormulario"
                  >
                    Oxigeno
                  </label>
                  <input
                      id="i_litros"
                      type="text"
                      className="form-control rounded"
                      placeholder="Litros"
                      name="litros"
                      value={i_litros}
                      onChange={(e) => seti_litros(e.target.value)}
                      //onChange={handleInputChance}
                      
                  ></input>
                  <input
                      id="i_tiempo"
                      type="text"
                      className="form-control rounded"
                      placeholder="Tiempo"
                      name="tiempo"
                      value={i_tiempo}
                      onChange={(e) => seti_tiempo(e.target.value)}
                      //onChange={handleInputChance}
                      
                  ></input>
                  <input
                      id="i_uso"
                      type="text"
                      className="form-control rounded"
                      placeholder="Uso"
                      name="uso"
                      value={i_uso}
                      onChange={(e) => seti_uso(e.target.value)}
                      //onChange={handleInputChance}
                      
                  ></input>
                  <label htmlFor="exampleFormControlTextarea1"
                    className="letrasFormulario"
                  >
                    Can. Orofa
                  </label>
                  <fieldset>
                    <div>
                      <input
                        type="radio"
                        id="orofaChoice1"
                        name="canOrofa"
                        value="Si"
                        onChange={(e) => 
                          setorofaChoice1(e.target.value)}
                      />
                      <label htmlFor="orofaChoice1" style={{marginRight: "3%"}} className="letrasFormulario">Si</label>

                      <input
                        type="radio"
                        id="orofaChoice2"
                        name="canOrofa"
                        value="No"
                        onChange={(e) => 
                          setorofaChoice1(e.target.value)
                        }
                      />
                      <label htmlFor="orofaChoice2" className="letrasFormulario">No</label>
                    </div>
                  </fieldset>
                  <label htmlFor="exampleFormControlTextarea1"
                    className="letrasFormulario"
                  >
                    Collar Cerv.
                  </label>
                  <fieldset>
                    <div>
                      <input
                        type="radio"
                        id="collarChoice1"
                        name="collarCerv"
                        value="Si"
                        onChange={(e) => 
                          setcollarChoice1(e.target.value)
                        }
                      />
                      <label htmlFor="collarChoice1" style={{marginRight: "3%"}} className="letrasFormulario">Si</label>

                      <input
                        type="radio"
                        id="collarChoice2"
                        name="collarCerv"
                        value="No"
                        onChange={(e) => 
                          setcollarChoice1(e.target.value)
                        }
                      />
                      <label htmlFor="collarChoice2" className="letrasFormulario">No</label>
                    </div>
                  </fieldset>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "100%" }}>
                  <label htmlFor="exampleFormControlTextarea1"
                    className="letrasFormulario"
                  >
                    Forma de Traslado
                  </label>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", alignItems: "center", width: "100%" }}>
                      <div>
                        <input
                          type="radio"
                          id="transferChoice1"
                          name="traslado"
                          value="Traslado Solamente"
                          onChange={(e) => 
                            settransferChoice1(e.target.value)
                          }
                        ></input>
                        <label htmlFor="transferChoice1" className="letrasFormulario">
                          Traslado Solamente
                        </label>
                      </div>
                      
                      <div>
                        <input
                          type="radio"
                          id="transferChoice2"
                          name="traslado"
                          value="Traslado Vehiculo Oficial"
                          onChange={(e) => 
                            settransferChoice1(e.target.value)
                          }
                        ></input>
                        <label htmlFor="transferChoice2" className="letrasFormulario">
                          Traslado Vehiculo Oficial
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          id="transferChoice3"
                          name="traslado"
                          value="Traslado Innecesario"
                          onChange={(e) => 
                            settransferChoice1(e.target.value)
                          }
                        ></input>
                        <label htmlFor="transferChoice3" className="letrasFormulario">
                          Traslado Innecesario
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          id="transferChoice4"
                          name="traslado"
                          value="Traslado Vehiculo Particular"
                          onChange={(e) => 
                            settransferChoice1(e.target.value)
                          }
                        ></input>
                        <label htmlFor="transferChoice4" className="letrasFormulario">
                          Traslado Vehiculo Particular
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          id="transferChoice5"
                          name="traslado"
                          value="Traslado Cancelado"
                          onChange={(e) => 
                            settransferChoice1(e.target.value)
                          }
                        ></input>
                        <label htmlFor="transferChoice5" className="letrasFormulario">
                          Traslado Cancelado
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          id="transferChoice6"
                          name="traslado"
                          value="Traslado Fuera de Ciudad"
                          onChange={(e) => 
                            settransferChoice1(e.target.value)
                          }
                        ></input>
                        <label htmlFor="transferChoice6" className="letrasFormulario">
                          Traslado Fuera de Ciudad
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          id="transferChoice7"
                          name="traslado"
                          value="Traslado Rehusado"
                          onChange={(e) => 
                            settransferChoice1(e.target.value)
                          }
                        ></input>
                        <label htmlFor="transferChoice7" className="letrasFormulario">
                          Traslado Rehusado
                        </label>
                      </div>

                      <div>
                        <input
                        type="radio"
                        id="transferChoice8"
                        name="traslado"
                        value="Falsa Alarma"
                        onChange={(e) => 
                          settransferChoice1(e.target.value)
                        }
                        ></input>
                        <label htmlFor="transferChoice8" className="letrasFormulario">
                          Falsa Alarma
                        </label>
                      </div>
                  </div>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "100%" }}>
                  <label htmlFor="exampleFormControlTextarea1"
                    className="letrasFormulario"
                  >
                    Embarazo
                  </label>
                  <fieldset>
                    <label htmlFor="exampleFormControlTextarea1"
                      className="letrasFormulario"
                    >
                      Parto en Ambulancia
                    </label>
                    <div>
                      <input
                        type="radio"
                        id="partoChoice1"
                        name="partoAmbulancia"
                        value="Si"
                        onChange={(e) => 
                          setpartoChoice1(e.target.value)
                        }
                      />
                      <label htmlFor="partoChoice1" style={{marginRight: "3%"}} className="letrasFormulario">Si</label>

                      <input
                        type="radio"
                        id="partoChoice2"
                        name="partoAmbulancia"
                        value="No"
                        onChange={(e) => 
                          setpartoChoice1(e.target.value)
                        }
                      />
                      <label htmlFor="partoChoice2" className="letrasFormulario">No</label>
                    </div>
                  </fieldset>
                </div>

                <div style={{ display: "flex", alignItems: "center", width: "33%" }}>
                    <label htmlFor="exampleFormControlTextarea1"
                      className="letrasFormulario"
                      style={{marginRight: "1%"}}
                    >
                      Gestación
                    </label>
                    <input
                      id="i_gestacion"
                      type="text"
                      className="form-control rounded"
                      placeholder="Gestación"
                      value={i_gestacion}
                      name="gestacion"
                      onChange={(e) => seti_gestacion(e.target.value)}
                      //onChange={handleInputChance}
                      
                    ></input>
                </div>

                <div style={{ display: "flex", alignItems: "center", width: "33%" }}>
                    <label htmlFor="exampleFormControlTextarea1"
                      className="letrasFormulario"
                      style={{marginRight: "1%"}}
                    >
                      AU
                    </label>
                    <input
                      id="i_au"
                      type="text"
                      className="form-control rounded"
                      placeholder="AU"
                      value={i_au}
                      name="au"
                      onChange={(e) => seti_au(e.target.value)}
                      //onChange={handleInputChance}
                      
                    ></input>
                </div>

                <div style={{ display: "flex", alignItems: "center", width: "34%" }}>
                    <label htmlFor="exampleFormControlTextarea1"
                      className="letrasFormulario"
                      style={{marginRight: "1%"}}
                    >
                      FUM
                    </label>
                    <input
                      id="i_fum"
                      type="text"
                      className="form-control rounded"
                      placeholder="FUM"
                      value={i_fum}
                      name="fum"
                      onChange={(e) => seti_fum(e.target.value)}
                      //onChange={handleInputChance}
                      
                    ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "50%" }}>
                <fieldset>
                    <label htmlFor="exampleFormControlTextarea1"
                      className="letrasFormulario"
                    >
                      Nacido Vivo
                    </label>
                    <div>
                      <input
                        type="radio"
                        id="nacidoChoice1"
                        name="nacidoVivo"
                        value="Si"
                        onChange={(e) => 
                          setnacidoChoice1(e.target.value)
                        }
                      />
                      <label htmlFor="nacidoChoice1" style={{marginRight: "3%"}} className="letrasFormulario">Si</label>

                      <input
                        type="radio"
                        id="nacidoChoice2"
                        name="nacidoVivo"
                        value="No"
                        onChange={(e) => 
                          setnacidoChoice1(e.target.value)
                        }
                      />
                      <label htmlFor="nacidoChoice2" className="letrasFormulario">No</label>
                    </div>
                  </fieldset>
                </div>

                <div style={{ display: "flex", alignItems: "center", width: "50%" }}>
                    <label htmlFor="exampleFormControlTextarea1"
                      className="letrasFormulario"
                      style={{marginRight: "1%"}}
                    >
                      FPP
                    </label>
                    <input
                      id="i_fpp"
                      type="text"
                      className="form-control rounded"
                      placeholder="FPP"
                      value={i_fpp}
                      name="fpp"
                      onChange={(e) => seti_fpp(e.target.value)}
                      //onChange={handleInputChance}
                      
                    ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "20%" }}>
                    <label htmlFor="exampleFormControlTextarea1"
                      className="letrasFormulario"
                    >
                      Hora
                    </label>
                    <input
                      id="i_hora1"
                      type="text"
                      className="form-control rounded"
                      name="resguardo"
                      value={i_hora1}
                      onChange={(e) => seti_hora1(e.target.value)}
                      //onChange={handleInputChance}
                      
                    ></input>
                    <input
                      id="i_hora2"
                      type="text"
                      className="form-control rounded"
                      name="resguardo"
                      value={i_hora2}
                      onChange={(e) => seti_hora2(e.target.value)}
                      //onChange={handleInputChance}
                      
                    ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "20%" }}>
                    <label htmlFor="exampleFormControlTextarea1"
                      className="letrasFormulario"
                    >
                      Medicamentos
                    </label>
                    <input
                      id="i_medicamentos1"
                      type="text"
                      className="form-control rounded"
                      name="resguardo"
                      value={i_medicamentos1}
                      onChange={(e) => seti_medicamentos1(e.target.value)}
                      //onChange={handleInputChance}
                      
                    ></input>
                    <input
                      id="i_medicamentos2"
                      type="text"
                      className="form-control rounded"
                      name="resguardo"
                      value={i_medicamentos2}
                      onChange={(e) => seti_medicamentos2(e.target.value)}
                      //onChange={handleInputChance}
                      
                    ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "20%" }}>
                  <label htmlFor="exampleFormControlTextarea1"
                    className="letrasFormulario"
                  >
                    Dosis
                  </label>
                  <input
                      id="i_dosis1"
                      type="text"
                      className="form-control rounded"
                      name="resguardo"
                      value={i_dosis1}
                      onChange={(e) => seti_dosis1(e.target.value)}
                      //onChange={handleInputChance}
                      
                    ></input>
                    <input
                      id="i_dosis2"
                      type="text"
                      className="form-control rounded"
                      name="resguardo"
                      value={i_dosis2}
                      onChange={(e) => seti_dosis2(e.target.value)}
                      //onChange={handleInputChance}
                      
                    ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "20%" }}>
                  <label htmlFor="exampleFormControlTextarea1"
                    className="letrasFormulario"
                  >
                    Via
                  </label>
                  <input
                      id="i_via1"
                      type="text"
                      className="form-control rounded"
                      name="resguardo"
                      value={i_via1}
                      onChange={(e) => seti_via1(e.target.value)}
                      //onChange={handleInputChance}
                      
                    ></input>
                    <input
                      id="i_via2"
                      type="text"
                      className="form-control rounded"
                      name="resguardo"
                      value={i_via2}
                      onChange={(e) => seti_via2(e.target.value)}
                      //onChange={handleInputChance}
                      
                    ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "20%" }}>
                  <label htmlFor="exampleFormControlTextarea1"
                    className="letrasFormulario"
                  >
                    Respuesta
                  </label>
                  <input
                      id="i_respuesta1"
                      type="text"
                      className="form-control rounded"
                      name="resguardo"
                      value={i_respuesta1}
                      onChange={(e) => seti_respuesta1(e.target.value)}
                      //onChange={handleInputChance}
                      
                  ></input>
                  <input
                      id="i_respuesta2"
                      type="text"
                      className="form-control rounded"
                      name="resguardo"
                      value={i_respuesta2}
                      onChange={(e) => seti_respuesta2(e.target.value)}
                      //onChange={handleInputChance}
                      
                  ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", justifyContent: "center", width: "100%" }}>
                  <label htmlFor="exampleFormControlTextarea1" className="letrasFormulario">
                    GLASGOW
                  </label>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "33%" }}>
                  <label htmlFor="i_visual1" className="letrasFormulario">
                    Respuesta Visual
                  </label>
                  <input
                    id="i_visual1"
                    type="checkbox"
                    className="form-check-input"
                    placeholder=""
                    name="visual1"
                    checked={i_visual1}
                    onChange={(e) => seti_visual1(e.target.checked)}
                  />
                  <label htmlFor="i_visual1" className="letrasFormulario">
                    Nunca abre los ojos
                  </label>
                  <input
                    id="i_visual2"
                    type="checkbox"
                    className="form-check-input"
                    placeholder=""
                    name="visual2"
                    checked={i_visual2}
                    onChange={(e) => seti_visual2(e.target.checked)}
                  />
                  <label htmlFor="i_visual2" className="letrasFormulario">
                    Abre estimulo doloroso
                  </label>
                  <input
                    id="i_visual3"
                    type="checkbox"
                    className="form-check-input"
                    placeholder=""
                    name="visual3"
                    checked={i_visual3}
                    onChange={(e) => seti_visual3(e.target.checked)}
                  />
                  <label htmlFor="i_visual3" className="letrasFormulario">
                    Abre estimulo verbal
                  </label>
                  <input
                    id="i_visual4"
                    type="checkbox"
                    className="form-check-input"
                    placeholder=""
                    name="visual4"
                    checked={i_visual4}
                    onChange={(e) => seti_visual4(e.target.checked)}
                  />
                  <label htmlFor="i_visual4" className="letrasFormulario">
                    Abre espontaneamente
                  </label>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "33%" }}>
                  <label htmlFor="i_verbal1" className="letrasFormulario">
                    Respuesta Verbal
                  </label>
                  <input
                    id="i_verbal1"
                    type="checkbox"
                    className="form-check-input"
                    placeholder=""
                    name="verbal1"
                    checked={i_verbal1}
                    onChange={(e) => seti_verbal1(e.target.checked)}
                  />
                  <label htmlFor="i_verbal1" className="letrasFormulario">
                    No responde
                  </label>
                  <input
                    id="i_verbal2"
                    type="checkbox"
                    className="form-check-input"
                    placeholder=""
                    name="verbal2"
                    checked={i_verbal2}
                    onChange={(e) => seti_verbal2(e.target.checked)}
                  />
                  <label htmlFor="i_verbal2" className="letrasFormulario">
                    Sonidos incomprensibles
                  </label>
                  <input
                    id="i_verbal3"
                    type="checkbox"
                    className="form-check-input"
                    placeholder=""
                    name="verbal3"
                    checked={i_verbal3}
                    onChange={(e) => seti_verbal3(e.target.checked)}
                  />
                  <label htmlFor="i_verbal3" className="letrasFormulario">
                    Palabras no apropiadas
                  </label>
                  <input
                    id="i_verbal4"
                    type="checkbox"
                    className="form-check-input"
                    placeholder=""
                    name="verbal4"
                    checked={i_verbal4}
                    onChange={(e) => seti_verbal4(e.target.checked)}
                  />
                  <label htmlFor="i_verbal4" className="letrasFormulario">
                    Conversa Desorientado
                  </label>
                  <input
                    id="i_verbal5"
                    type="checkbox"
                    className="form-check-input"
                    placeholder=""
                    name="verbal5"
                    checked={i_verbal5}
                    onChange={(e) => seti_verbal5(e.target.checked)}
                  />
                  <label htmlFor="i_verbal5" className="letrasFormulario">
                    Conversa Orientado
                  </label>
                </div>
                
                <div style={{ display: "grid", alignItems: "center", width: "34%" }}>
                  <label htmlFor="i_motora1" className="letrasFormulario">
                    Respuesta Motora
                  </label>
                  <input
                    id="i_motora1"
                    type="checkbox"
                    className="form-check-input"
                    placeholder=""
                    name="motora1"
                    checked={i_motora1}
                    onChange={(e) => seti_motora1(e.target.checked)}
                  />
                  <label htmlFor="i_motora1" className="letrasFormulario">
                    No responde
                  </label>
                  <input
                    id="i_motora2"
                    type="checkbox"
                    className="form-check-input"
                    placeholder=""
                    name="motora2"
                    checked={i_motora2}
                    onChange={(e) => seti_motora2(e.target.checked)}
                  />
                  <label htmlFor="i_motora2" className="letrasFormulario">
                    Resp. descerebración
                  </label>
                  <input
                    id="i_motora3"
                    type="checkbox"
                    className="form-check-input"
                    placeholder=""
                    name="motora3"
                    checked={i_motora3}
                    onChange={(e) => seti_motora3(e.target.checked)}
                  />
                  <label htmlFor="i_motora3" className="letrasFormulario">
                    Resp. descorticación
                  </label>
                  <input
                    id="i_motora4"
                    type="checkbox"
                    className="form-check-input"
                    placeholder=""
                    name="motora4"
                    checked={i_motora4}
                    onChange={(e) => seti_motora4(e.target.checked)}
                  />
                  <label htmlFor="i_motora4" className="letrasFormulario">
                    Se retira del dolor
                  </label>
                  <input
                    id="i_motora5"
                    type="checkbox"
                    className="form-check-input"
                    placeholder=""
                    name="motora5"
                    checked={i_motora5}
                    onChange={(e) => seti_motora5(e.target.checked)}
                  />
                  <label htmlFor="i_motora5" className="letrasFormulario">
                    Localiza el dolor
                  </label>
                  <input
                    id="i_motora6"
                    type="checkbox"
                    className="form-check-input"
                    placeholder=""
                    name="motora6"
                    checked={i_motora6}
                    onChange={(e) => seti_motora6(e.target.checked)}
                  />
                  <label htmlFor="i_motora6" className="letrasFormulario">
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
                      value={i_nombreMedico}
                      onChange={(e) => seti_nombreMedico(e.target.value)}
                      //onChange={handleInputChance}
                      
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
                        value="Enfermera"
                        onChange={(e) => 
                          setpersonalChoice1(e.target.value)
                        }
                      />
                      <label htmlFor="personalChoice1" style={{marginRight: "3%"}} className="letrasFormulario">Enfermera</label>

                      <input
                        type="radio"
                        id="personalChoice2"
                        name="personal"
                        value="Medico Aux Enf"
                        onChange={(e) => 
                          setpersonalChoice1(e.target.value)
                        }
                      />
                      <label htmlFor="personalChoice2" style={{marginRight: "3%"}} className="letrasFormulario">Medico Aux Enf</label>
                      
                      <input
                        type="radio"
                        id="personalChoice3"
                        name="personal"
                        value="Otros"
                        onChange={(e) => 
                          setpersonalChoice1(e.target.value)
                        }
                      />
                      <label htmlFor="personalChoice3" style={{marginRight: "3%"}} className="letrasFormulario">Otros</label>
                    </div>
                  </fieldset>
                  <div style={{ display: "flex", alignItems: "center"}}>
                    <div style={{ display: "grid", alignItems: "center", width: "50%" }}>
                      <label htmlFor="exampleFormControlTextarea1" className="letrasFormulario">
                        Firma
                      </label>
                      <div className="input-group custom-file-button">
                        <label className="input-group-text" htmlFor="i_firmaMedico">Subir Imagen</label>
                        <input id="i_firmaMedico"
                          type="file"
                          className="form-control rounded"
                          name="firmaMedico"
                          onChange={(event) => handleFileChange(event, seti_firmaMedico)}
                          multiple
                        ></input>
                      </div>
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
                          value={i_hospitalMedico}
                          onChange={(e) => seti_hospitalMedico(e.target.value)}
                          //onChange={handleInputChance}
                          
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
                          value={i_areaMedico}
                          onChange={(e) => seti_areaMedico(e.target.value)}
                          //onChange={handleInputChance}
                          
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
                      value={i_nombreResponsable}
                      onChange={(e) => seti_nombreResponsable(e.target.value)}
                      //onChange={handleInputChance}
                      
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
                      value={i_cargoResponsable}
                      onChange={(e) => seti_cargoResponsable(e.target.value)}
                      //onChange={handleInputChance}
                      
                  ></input>
                  <label htmlFor="exampleFormControlTextarea1" className="letrasFormulario">
                    Firma
                  </label>
                  <div className="input-group custom-file-button">
                    <label className="input-group-text" htmlFor="i_firmaResponsable">Subir Imagen</label>
                    <input id="i_firmaResponsable"
                      type="file"
                      className="form-control rounded"
                      name="firmaResponsable"
                      onChange={(event) => handleFileChange(event, seti_firmaResponsable)}
                      multiple
                    ></input>
                  </div>
                </div>

                <div style={{ display: "grid", alignItems: "center", justifyContent: "center", width: "100%" }}>
                  <label htmlFor="exampleFormControlTextarea1" className="letrasFormulario">
                    Hoja de Descargo
                  </label>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "50%" }}
                  className="container rounded .col-lg-1"
                >
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
                    value={i_fechaDescargo}
                    onChange={(e) => seti_fechaDescargo(e.target.value)}
                    //onChange={handleInputChance}
                    
                  ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "50%" }}
                  className="container rounded .col-lg-1"
                  
                >
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "50%" }}
                  className="container rounded .col-lg-1"
                  
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
                      value={i_nombreDescargo}
                      onChange={(e) => seti_nombreDescargo(e.target.value)}
                      //onChange={handleInputChance}
                      
                  ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "50%" }}
                  className="container rounded .col-lg-1"
                  
                >
                  <label
                    htmlFor="inputAddress"
                    className="form-label letrasFormulario"
                  >
                    DNI
                  </label>
                  <input
                    id="i_dniDescargo"
                    type="text"
                    className="form-control rounded"
                    placeholder="Eje. 1804198002033"
                    name="dni"
                    pattern="[0-9]{13}"
                    value={i_dniDescargo}
                    title="Numero 13 digitos sin guiones"
                    onChange={(e) => seti_dniDescargo(e.target.value)}
                    //onChange={handleInputChance}
                    //onBlur={handleDni}
                  ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "100%" }}>
                  <textarea
                    readOnly
                    className="form-control rounded"
                    name="direccion"
                    rows="4"
                    style={{ resize: "none" }}
                    value="he reusado la asistencia del servicio Pre-Hospitalario de la Unidad Medica de Emergencia de la Comision Permanente de Contingencias (COPECO) en pleno conocimiento del perjuicio que me cause, a lo cual descargo de toda responsabilidad a sus Medicos, Tecnicos, APAA, Personal Administrativo y Voluntarios, individualmente o en conjunto por lesión, daño o complicación que pueda resultar directa o indirectamente por haber reusado el tratamiento o traslado. Libero de cualquier responsabilidad de tipo legal o reglamentario y renuncio a todo derecho de acción legal que yo pueda adquirir como resultado de mi negación."
                  >
                  </textarea>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "50%" }}
                  className="container rounded .col-lg-1"
                >
                  <label htmlFor="exampleFormControlTextarea1" className="letrasFormulario">
                    Firma
                  </label>
                  <div className="input-group custom-file-button">
                    <label className="input-group-text" htmlFor="i_firmaDescargo">Subir Imagen</label>
                    <input id="i_firmaDescargo"
                      type="file"
                      className="form-control rounded"
                      name="firmaDescargo"
                      onChange={(event) => handleFileChange(event, seti_firmaDescargo)}
                      multiple
                    ></input>
                  </div>
                  <label htmlFor="exampleFormControlTextarea1" className="letrasFormulario">
                    Testigo
                  </label>
                  <input
                      id="i_testigoDescargo"
                      type="text"
                      className="form-control rounded"
                      name="testigoDescargo"
                      value={i_testigoDescargo}
                      onChange={(e) => seti_testigoDescargo(e.target.value)}
                      //onChange={handleInputChance}
                      
                  ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "50%" }}
                  className="container rounded .col-lg-1"
                  
                >
                  <label htmlFor="exampleFormControlTextarea1" className="letrasFormulario">
                    por COPECO
                  </label>
                  <input
                      id="i_copecoDescargo"
                      type="text"
                      className="form-control rounded"
                      name="copecoDescargo"
                      value={i_copecoDescargo}
                      onChange={(e) => seti_copecoDescargo(e.target.value)}
                      //onChange={handleInputChance}
                      
                  ></input>
                  <label
                    htmlFor="inputAddress"
                    className="form-label letrasFormulario"
                  >
                    DNI
                  </label>
                  <input
                    id="i_dniTestigo"
                    type="text"
                    className="form-control rounded"
                    placeholder="Eje. 1804198002033"
                    name="dniTestigo"
                    pattern="[0-9]{13}"
                    value={i_dniTestigo}
                    title="Numero 13 digitos sin guiones"
                    onChange={(e) => seti_dniTestigo(e.target.value)}
                    //onChange={handleInputChance}
                    
                  ></input>
                </div>

                <div style={{ display: "grid", alignItems: "center", width: "100%" }}>
                  <label htmlFor="exampleFormControlTextarea1"
                    className="letrasFormulario"
                  >
                    Diagnostico
                  </label>
                  <textarea
                    id="i_HistoriaIncidente"
                    type="text"
                    className="form-control rounded"
                    name="HistoriaIncidente"
                    rows="4"
                    value={i_diagnostico}
                    style={{ resize: "none" }}
                    onChange={(e) => seti_diagnostico(e.target.value)}
                    placeholder="El diagnostico del paciente..."
                    //onChange={handleInputChance}
                    
                  ></textarea>
                </div>

                <div className="col-12 offset-lg-5">
                  <button
                    id="b_submit"
                    className="btn btn-primary"
                    style={{ marginBottom: "3%", marginRight: "2%" }}
                    onClick={handleUploadAndSave}
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

export default FormularioCopeco;