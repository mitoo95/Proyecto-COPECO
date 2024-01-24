import  Topbar from './views/global/topbar';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './views/welcome/welcomePage';
import FormularioCopeco from './views/Form/FormularioCopeco';
import DataTable from './views/table/dataTable';

function App() {
  return (
    <div className="app">
      <main>
        <Topbar />
        <Routes>
          <Route path='/' element={<WelcomePage/>}/>
          <Route path='/formulariocopeco' element={<FormularioCopeco/>}/>
          <Route path='/tabla' element={<DataTable/>}/>
        </Routes>
      </main>
    </div>
  )  
  
}

export default App;
