
import './App.css';
import { Route, Routes } from 'react-router';
import Logueo from './Componentes/body/Login/Logueo/Logue';
import Registrar from './Componentes/body/Login/Registrar/Registrar';
import Perfilusuario from './Componentes/body/AdminUser/Perfil/Perfilusuario';
import MyNavbar from './Componentes/NavMenu/Navmenu';


function App() {
  return (
    <div className="App">
      <MyNavbar/>
       <Routes>
       <Route path="/" element={<Logueo/>} />
       <Route path="/registrarusuario" element={<Registrar/>} />
       <Route path='/perfilusuario' element={<Perfilusuario/>} />
       </Routes>
      
      
    </div>
  );
}

export default App;
