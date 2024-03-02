import React, { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore, deleteDoc, doc } from 'firebase/firestore';
import json2csv from 'json2csv';
import { saveAs } from 'file-saver';
import '../../firebaseConfig';
import './dataTable.css'

const DataTable = () => {
  const [incidentes, setIncidentes] = useState([]);
  const [filtro, setFiltro] = useState('');

  const db = getFirestore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "myCollectionCopeco"));
        const incidentesData = [];
        querySnapshot.forEach(doc => {
          const data = doc.data();
          const incidente = {
            NO: doc.id,
            FECHA: data.fecha,
            HORA: data.horaServidor ? data.horaServidor.toDate().toLocaleTimeString() : '',
            UNIDAD: data.unidad,
            'LUGAR DEL INCIDENTE': data.lugarIncidente,
            'NOMBRE DEL PACIENTE': data.nombre,
            EDAD: data.edad,
            GÉNERO: data.Genero,
            DIAGNÓSTICO: data.diagnostico,
            TRASLADO: data.Forma_Traslado,
            'HACIA DONDE': data.hospitalMedico
          };
          incidentesData.push(incidente);
        });
        setIncidentes(incidentesData);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
  
    fetchData();
  }, [db]);
  
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "myCollectionCopeco", id));
      setIncidentes(prevIncidentes => prevIncidentes.filter(incidente => incidente.NO !== id));
    } catch (error) {
      console.error('Error al eliminar el registro:', error);
    }
  };

  const handleExportCSV = () => {
    const csvData = json2csv.parse(incidentes, { fields: Object.keys(incidentes[0]) });
    const blob = new Blob([csvData], { type: 'text/csv' });
    saveAs(blob, 'incidentes.csv');
  };

  const incidentesFiltrados = incidentes.filter(incidente =>
    incidente['NOMBRE DEL PACIENTE'].toLowerCase().includes(filtro.toLowerCase()) ||
    incidente['LUGAR DEL INCIDENTE'].toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="contenedorPrincipal">
      <div className="container mt-4">
        <h2 
          style={{
            width: "100%",
            textAlign: "center",
            marginTop: "1%",
            marginBottom: "20px",
            borderBottom: "2px solid black",
            color: "#363a84"
          }}        
        >Tabla de Incidentes</h2>        
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Buscar por paciente o lugar..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
        <button onClick={handleExportCSV} className="btn custom-btn mb-3">Exportar a CSV</button>
        <table className="table">
            <thead className="custom-table">
            <tr>
                <th scope="col" className="letrasCabecera">NO.</th>
                <th scope="col" className="letrasCabecera">FECHA</th>
                <th scope="col" className="letrasCabecera">HORA</th>
                <th scope="col" className="letrasCabecera">UNIDAD (#AMBULANCIA)</th>
                <th scope="col" className="letrasCabecera">LUGAR DEL INCIDENTE</th>
                <th scope="col" className="letrasCabecera">NOMBRE DEL PACIENTE</th>
                <th scope="col" className="letrasCabecera">EDAD</th>
                <th scope="col" className="letrasCabecera">GÉNERO</th>
                <th scope="col" className="letrasCabecera">DIAGNÓSTICO</th>
                <th scope="col" className="letrasCabecera">TRASLADO</th>
                <th scope="col" className="letrasCabecera">HACIA DONDE</th>
                <th scope="col" className="letrasCabecera">Acciones</th> {/* Nueva columna para el botón de eliminación */}
            </tr>
            </thead>
            <tbody>
            {incidentesFiltrados.map((incidente) => (
                <tr key={incidente.NO}>
                <th scope="row" className='letrasColumnas'>{incidente.NO}</th>
                <td className='letrasColumnas'>{incidente.FECHA}</td>
                <td className='letrasColumnas'>{incidente.HORA}</td>
                <td className='letrasColumnas'>{incidente.UNIDAD}</td>
                <td className='letrasColumnas'>{incidente['LUGAR DEL INCIDENTE']}</td>
                <td className='letrasColumnas'>{incidente['NOMBRE DEL PACIENTE']}</td>
                <td className='letrasColumnas'>{incidente.EDAD}</td>
                <td className='letrasColumnas'>{incidente.GÉNERO}</td>
                <td className='letrasColumnas'>{incidente.DIAGNÓSTICO}</td>
                <td className='letrasColumnas'>{incidente.TRASLADO}</td>
                <td className='letrasColumnas'>{incidente['HACIA DONDE']}</td>
                <td className='letrasColumnas'>
                  <button onClick={() => handleDelete(incidente.NO)} className="btn btn-danger">Eliminar</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
