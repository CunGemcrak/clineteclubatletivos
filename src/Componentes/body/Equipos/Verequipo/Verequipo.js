import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
} from 'mdb-react-ui-kit';

const Verequipo = () => {
  return (
    <MDBContainer fluid className="d-flex justify-content-center align-items-center vw-100 mt-4" style={{ backgroundColor: 'white' }}>
      <MDBCard style={{ width: '80%', borderRadius: '10px', backgroundColor: 'black', color:'white' }}>
        {/* Header */}
        <MDBCardHeader className="d-flex justify-content-between align-items-center" style={{ backgroundColor: 'black', color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>
          <span>Nombre del Equipo</span>
          <span>Código del Equipo</span>
        </MDBCardHeader>

        {/* Body */}
        <MDBCardBody>
          <MDBRow>
            {/* Columna izquierda */}
           
            <MDBCol md="6" style={{ backgroundColor: 'white', color: 'black', padding: '20px' }}>
              <p><strong>Campeonato:</strong> Nombre del Campeonato</p>
              <p><strong>Organizador:</strong> Nombre del Organizador</p>
              <p><strong>Delegado:</strong> Nombre del Delegado</p>
              <p><strong>Jugadores:</strong> Número de Jugadores</p>
              <p><strong>Averaje:</strong> 0.00</p>
              <p><strong>Posición:</strong> 0</p>
            </MDBCol>

            {/* Columna derecha */}

            <MDBCol md="6" className="text-center d-flex flex-column align-items-center bg-light"
            >
              <img
                src="https://res.cloudinary.com/dss2hdisa/image/upload/v1736888004/iconofecha_r4qiom.png"
                alt="Escudo del equipo"
                style={{ maxWidth: '70%', borderRadius: '10px', marginBottom: '20px', padding:'20px'}}
              />
              <div className="d-flex justify-content-around w-75">
                <MDBBtn color="danger" size="sm">Eliminar</MDBBtn>
                <MDBBtn color="danger" size="sm">Jugadores</MDBBtn>
                <MDBBtn color="danger" size="sm">Actualizar</MDBBtn>
              </div>
              <br/>
            </MDBCol>

            
          </MDBRow>
        </MDBCardBody>

        {/* Footer */}
        <MDBCardFooter className="d-flex justify-content-between " style={{ backgroundColor: 'black' }}>
          <MDBBtn color="danger" size="sm">&lt;</MDBBtn>
          <MDBBtn color="danger" size="sm">&gt;</MDBBtn>
        </MDBCardFooter>
      </MDBCard>
    </MDBContainer>
  );
};

export default Verequipo;
