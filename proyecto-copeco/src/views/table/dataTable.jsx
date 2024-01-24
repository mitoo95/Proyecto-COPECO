import './dataTable.css';

const DataTable = () => {
  // Supongamos que tienes un array de incidentes
  const incidentes = [
    {
      id: 1,
      fecha: '2024-01-23',
      hora: '14:30',
      unidad: '#AMBULANCIA1',
      lugar: 'Calle Principal',
      paciente: 'Juan Pérez',
      edad: 35,
      genero: 'Masculino',
      diagnostico: 'Lesión leve',
      traslado: true,
      haciaDonde: 'Hospital X',
    },
  ];

  return (
    <div className="contenedorPrincipal">
        <div className="container mt-4">
        <h2>Tabla de Incidentes</h2>
        <table className="table">
            <thead class="bg-primary">
            <tr >
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
            </tr>
            </thead>
            <tbody>
            {incidentes.map((incidente) => (
                <tr key={incidente.id}>
                <th scope="row" className='letrasColumnas'>{incidente.id}</th>
                <td className='letrasColumnas'>{incidente.fecha}</td>
                <td className='letrasColumnas'> {incidente.hora}</td>
                <td className='letrasColumnas'>{incidente.unidad}</td>
                <td className='letrasColumnas'>{incidente.lugar}</td>
                <td className='letrasColumnas'>{incidente.paciente}</td>
                <td className='letrasColumnas'>{incidente.edad}</td>
                <td className='letrasColumnas'>{incidente.genero}</td>
                <td className='letrasColumnas'>{incidente.diagnostico}</td>
                <td className='letrasColumnas'>{incidente.traslado ? 'Sí' : 'No'}</td>
                <td className='letrasColumnas'>{incidente.haciaDonde}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    </div>
  );
};

export default DataTable;
