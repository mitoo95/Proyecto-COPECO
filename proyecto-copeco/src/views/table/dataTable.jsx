import React, { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore, deleteDoc, doc } from 'firebase/firestore';
import '../../firebaseConfig';

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
            HORA: data.hora,
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

  const incidentesFiltrados = incidentes.filter(incidente =>
    incidente['NOMBRE DEL PACIENTE'].toLowerCase().includes(filtro.toLowerCase()) ||
    incidente['LUGAR DEL INCIDENTE'].toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="contenedorPrincipal">
      <div className="container mt-4">
        <h2>Tabla de Incidentes</h2>
        {/* Campo de búsqueda */}
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Buscar por paciente o lugar..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
        <table className="table">
            <thead className="bg-primary">
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
