
import './App.css';
import { Route, Routes } from 'react-router';
import Logueo from './Componentes/body/Login/Logueo/Logue';
import Registrar from './Componentes/body/Login/Registrar/Registrar';


function App() {
  return (
    <div className="App">
       <Routes>
       <Route path="/" element={<Logueo/>} />
       <Route path="/registrarusuario" element={<Registrar/>} />
       </Routes>
      
      
    </div>
  );
}

export default App;
