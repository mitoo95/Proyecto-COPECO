import { Routes, Route, useLocation } from 'react-router-dom';
import WelcomePage from './views/welcome/welcomePage';
import FormularioCopeco from './views/Form/FormularioCopeco';
import DataTable from './views/table/dataTable';
import RegisterandLogin from './views/registerandlogin/registerandlogin';
import Topbar from './views/global/topbar';
import ForgotPassword from './views/forgotPassword/ForgotPassword';

function App() {
  const location = useLocation();

  // Define an array of paths where the Topbar should not appear
  const pathsWithoutTopbar = ['/', '/reset'];

  // Check if the current location path is in the pathsWithoutTopbar array
  const shouldShowTopbar = !pathsWithoutTopbar.includes(location.pathname);

  return (
    <div className="app">
      <main>
          {shouldShowTopbar && <Topbar/>}
          <Routes>
            <Route path='/' element={<RegisterandLogin/>}/>
            <Route path='/home' element={<WelcomePage/>}/>
            <Route path='/formulariocopeco' element={<FormularioCopeco/>}/>
            <Route path='/tabla' element={<DataTable/>}/>
            <Route path='/reset' element={<ForgotPassword/>}/>
          </Routes>
      </main>
    </div>
  )  
}

export default App;
