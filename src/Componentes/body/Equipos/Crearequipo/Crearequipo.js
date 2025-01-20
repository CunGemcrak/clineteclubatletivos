import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
  MDBInput,
} from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';

const Crearequipo = () => {
const LOGINUSER = useSelector((store)=>store.LOGINUSER || null)
  const [equipo, setEquipo] = useState({
    idequipo: '',
    nombre: '',
    escudo: '',
    campeonato: '',
    delegado: LOGINUSER?.nombre + ' '+ LOGINUSER?.papellido || '',
    emaildelegado: LOGINUSER?.email || '',
    celulardelegado: LOGINUSER?.celular || '',
    organizadorcampeonato: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEquipo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/equipos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(equipo),
      });
      if (response.ok) {
        alert('Equipo creado exitosamente');
        // Limpiar el formulario o redirigir
      } else {
        alert('Error al crear el equipo');
      }
    } catch (error) {
      console.error('Error al crear equipo:', error);
      alert('Error al crear el equipo');
    }
  };
  const handleGenerar = () => {
    const numeros = '0123456789';
    const letras = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const caracteresEspeciales = '#$%*';
  
    // Función para generar un valor aleatorio de una cadena dada
    const generarAleatorio = (cadena, longitud) => {
      let resultado = '';
      for (let i = 0; i < longitud; i++) {
        const indice = Math.floor(Math.random() * cadena.length);
        resultado += cadena[indice];
      }

   
      return resultado;
    };
  
    // Generar las 3 secciones del código
    const codigoNumeros = generarAleatorio(numeros, 3);
    const codigoLetras = generarAleatorio(letras, 3);
    const codigoEspeciales = generarAleatorio(caracteresEspeciales, 3);
  
    // Combinar todo
    const codigoFinal = codigoNumeros + codigoLetras + codigoEspeciales;
  
    // Mostrar el código generado
    alert('Código generado: ' + codigoFinal);
    setEquipo({idequipo:codigoFinal})
  };

  return (
    <MDBContainer className="d-block justify-content-center align-items-center w-100">
      <MDBRow>
        <MDBCol style={{padding:'20px'}}>
          <MDBCard className="shadow-5 w-100 p-2" >
            <MDBCardHeader style={{ backgroundColor: 'red', color: 'white', textAlign: 'center', width:'100%', padding:'10px' }}>
              <h5 className="mb-0 text-light">Identifica tu equipo</h5>
            </MDBCardHeader>
            <MDBCardBody style={{ backgroundColor: 'black', color: 'white', padding: '5px' }}>
              
              <div className="mb-3 d-flex flex-column align-items-start gap-2" style={{ textAlign: 'left' }}>
                <label htmlFor="idequipo" className="form-label w-100 w-lg-25 text-light">
                    ID Equipo
                </label>
                <MDBInput
                    contrast
                    className="w-100 w-lg-25"
                    id="idequipo"
                    name="idequipo"
                    value={equipo.idequipo}
                    disabled
                />
                <MDBBtn color="danger" onClick={handleGenerar} className="w-100 w-lg-25">
                    Código
                </MDBBtn>
                </div>

                <div className="mb-3 d-flex" style={{ textAlign: 'justify' }}>
                  <label htmlFor="campeonato" className="form-label  text-light w-25">Campeonato</label>
                  <MDBInput contrast id="campeonato" name="campeonato" value={equipo.campeonato} onChange={handleChange} />
                </div>

                <div className="mb-3 d-flex" style={{ textAlign: 'justify' }}>
                  <label htmlFor="organizadorcampeonato" className="form-label text-light w-25">Organizador</label>
                  <MDBInput contrast id="organizadorcampeonato" name="organizadorcampeonato" value={equipo.organizadorcampeonato} disabled />
                </div>




            




                <div className="mb-3 d-flex" style={{ textAlign: 'justify' }}>
                  <label htmlFor="nombre" className="form-label  text-light w-25">Nombre</label>
                  <MDBInput contrast id="nombre" name="nombre" value={equipo.nombre} onChange={handleChange} />
                </div>
                <div className="mb-3 d-flex" style={{ textAlign: 'justify' }}>
                  <label htmlFor="escudo" className="form-label  text-light w-25">Escudo</label>
                  <MDBInput contrast id="escudo" name="escudo" value={equipo.escudo} onChange={handleChange} />
                </div>
              



                <MDBCardHeader style={{ backgroundColor: 'red', color: 'white', textAlign: 'center', width:'100%', padding:'10px' }}>
              <h5 className="mb-0 text-light">Datos Delegado</h5>
            </MDBCardHeader>
            <br/>









                <div className="mb-3 d-flex" style={{ textAlign: 'justify' }}>
                  <label htmlFor="delegado" className="form-label  text-light w-25">Delegado</label>
                  <MDBInput contrast id="delegado" name="delegado" value={equipo.delegado}  disabled />
                </div>
                <div className="mb-3 d-flex" style={{ textAlign: 'justify' }}>
                  <label htmlFor="emaildelegado" className="form-label text-light w-25">Email</label>
                  <MDBInput contrast id="emaildelegado" name="emaildelegado" value={equipo.emaildelegado} disabled />
                </div>
                <div className="mb-3 d-flex" style={{ textAlign: 'justify' }}>
                  <label htmlFor="celulardelegado" className="form-label text-light w-25 ">Celular</label>
                  <MDBInput contrast id="celulardelegado" name="celulardelegado" value={equipo.celulardelegado} disabled />
                </div>
               
            
            </MDBCardBody>
            <MDBCardFooter style={{ backgroundColor: 'black', padding: '20px' }}>
              <MDBBtn color="danger" className="w-50 mt-3" onClick={handleSubmit}>Nuevo Equipo</MDBBtn>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Crearequipo;