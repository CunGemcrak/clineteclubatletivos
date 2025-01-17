import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from 'mdb-react-ui-kit';
import './Logueo.css';

import { logueoUser } from '../../../../Redux/actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const Logueo = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleValidation = () => {
    if (!email || !password) {
      setErrorMessage('Por favor, complete todos los campos.');
      return false;
    }

    // Validación básica de formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Ingrese un correo electrónico válido.');
      return false;
    }

    // Si todo está bien, borrar mensajes de error
    setErrorMessage('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del botón
    if (handleValidation()) {
      // Aquí puedes manejar el envío de datos, como llamar a una API
      //alert('Inicio de sesión exitoso');
      const validar = await  dispatch(logueoUser(email,password))
      if(validar === true){
       // alert('redireccionar')
        navigate('/perfilusuario')
      }
    }
  };
const handleregistrar = ()=>{
navigate('/registrarusuario')
}
  return (
    <MDBContainer className="my-1 gradient-form border-5 shadow-lg p-4">
      <MDBRow>
      <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">Bienvenido </h4>
              <h1 className="mb-4 bg-gradient-black-red">Club Atleticos </h1>
              <p className="small mb-0">
              ¡Únete al Club Atleticos y lleva tu pasión por el deporte al siguiente nivel!

Ingresa a un mundo lleno de acción y energía donde podrás compartir con deportistas como tú. En el Club Atleticos, no solo podrás practicar diversos deportes, sino también aprender, mejorar y participar en competencias emocionantes. ¡Haz que cada entrenamiento sea una experiencia única y forma parte de nuestra comunidad deportiva!
              </p>
            </div>
          </div>
        </MDBCol>
        <MDBCol col="6" className="mb-2">
          <div className="d-flex flex-column ms-2">
            <div className="text-center">
              <img
                src="https://res.cloudinary.com/dss2hdisa/image/upload/v1736888004/iconofecha_r4qiom.png"
                style={{ width: '350px' }}
                alt="logo"
              />
              <h4 className="mt-1 mb-2 pb-1 text-danger" style={{ color: 'white' }}>
                Club Atletivos
              </h4>
            </div>

            <p style={{ color: 'black' }}>Por favor, inicie sesión en su cuenta</p>

            <MDBInput
              wrapperClass="mb-4"
              label="Correo"
              id="form1"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Contraseña"
              id="form2"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {errorMessage && (
              <p style={{ color: 'red', fontSize: '0.9rem' }}>{errorMessage}</p>
            )}

            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn
                className="mb-4 w-100 btn-gradient-red-black"
                onClick={handleSubmit}
              >
                Iniciar
              </MDBBtn>
              <a className="text-muted text-dark" href="#!">
                ¿Has olvidado tu contraseña?
              </a>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0 text-dark">¿No tienes Cuenta?</p>
              <MDBBtn outline className="mx-2" color="danger" onClick={handleregistrar}>
                Nueva Cuenta
              </MDBBtn>
            </div>
          </div>
        </MDBCol>

        
      </MDBRow>
    </MDBContainer>
  );
};

export default Logueo;
