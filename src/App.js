
import './App.css';
import { Route, Routes } from 'react-router';
import Logueo from './Componentes/body/Login/Logueo/Logue';
import Registrar from './Componentes/body/Login/Registrar/Registrar';
import Perfilusuario from './Componentes/body/AdminUser/Perfil/Perfilusuario';
import MyNavbar from './Componentes/NavMenu/Navmenu';
import Verequipo from './Componentes/body/Equipos/Verequipo/Verequipo';
import Crearequipo from './Componentes/body/Equipos/Crearequipo/Crearequipo';
import Crearuncampeonato from './Componentes/body/Campeonatos/Crearcampeonato/Crearcampeonato';
import Vercampeonatos from './Componentes/body/Campeonatos/Vercampeonatos/Vercampeonatos';



function App() {
  return (
    <div className="App">
      <MyNavbar/>
       <Routes>
       <Route path="/" element={<Logueo/>} />
       <Route path="/registrarusuario" element={<Registrar/>} />
       <Route path='/perfilusuario' element={<Perfilusuario/>} />
       <Route path='/equipos/verequipo' element={<Verequipo/>}/>
       <Route path='/equipos/crear' element={<Crearequipo/>}/>
       <Route path='/campeonato/crear' element={<Crearuncampeonato/>}/>
       <Route path='/campeonato/ver' element={<Vercampeonatos/>}/>
       
       </Routes>
      
      
    </div>
  );
}

export default App;
