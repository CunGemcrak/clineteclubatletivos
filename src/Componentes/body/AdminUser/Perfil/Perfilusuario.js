import React, { useEffect, useState } from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const Perfilusuario = ()=> {
  const ESTADOUSER = useSelector((state)=>state.USER || null)
  const LOGUEOUSER = useSelector((state)=>state.LOGINUSER || null)
  const navigate = useNavigate();
  useEffect(() => {
    if (!ESTADOUSER || !LOGUEOUSER) {
      navigate("/");
    }
  }, [ESTADOUSER, LOGUEOUSER, navigate]);



 



  const [nombres, setNombres] = useState({ value: LOGUEOUSER.nombre, isEditing: false });
  const [papellido, setPApellido] = useState({ value: LOGUEOUSER.papellido, isEditing: false });
  const [sapellido, setSApellido] = useState({ value: LOGUEOUSER.sapellido, isEditing: false });
  const [posicionjugador, setPosicionjugador] = useState({ value: LOGUEOUSER.posicion_jugador, isEditing: false });
 
  


   // Función para manejar cambios en los campos
   const handleChange = (e, fieldSetter) => {
    fieldSetter((prev) => ({ ...prev, value: e.target.value }));
  };

  // Función para alternar el modo de edición
  const handleEditToggle = (fieldSetter) => {
    fieldSetter((prev) => ({ ...prev, isEditing: !prev.isEditing }));
  };


  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
       { /*<MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href='#'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#">User</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>*/}

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={LOGUEOUSER.imagen || 'https://res.cloudinary.com/dss2hdisa/image/upload/Toadette_Super_Mario_Bros._Wonder_yd1dop.webp'}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                  <p className="text-muted mb-1"> {LOGUEOUSER.nombre} {LOGUEOUSER.papellido} {LOGUEOUSER.sapellido}</p>
                  <p className="text-muted mb-1">Nivel: {LOGUEOUSER.nivel_jugador}</p>
                  <p className="text-muted mb-4">Posicion: {LOGUEOUSER.posicion_jugador}</p>
              </MDBCardBody>
            </MDBCard>

{
  //!revisando 
}
<MDBCard className="mb-4 mb-lg-0">
  <MDBCardBody className="p-0">
    <MDBListGroup flush className="rounded-3">
      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
        <MDBIcon fas icon="baseball-bat-ball fa-lg text-danger" />
        <MDBCardText>Codigo: {LOGUEOUSER.code_jugador}</MDBCardText>
      </MDBListGroupItem>
      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
        <MDBIcon fas icon="envelope fa-lg text-primary" />
        <MDBCardText>Correo: {LOGUEOUSER.email} </MDBCardText>
      </MDBListGroupItem>
      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
        <MDBIcon fas icon="phone fa-lg text-success" />
        <MDBCardText>Celular {LOGUEOUSER.celular}</MDBCardText>
      </MDBListGroupItem>
      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
        <MDBIcon fas icon="users fa-lg text-warning" />
        <MDBCardText>Equipo Base: sin asignar</MDBCardText>
      </MDBListGroupItem>
    </MDBListGroup>
  </MDBCardBody>
</MDBCard>


          </MDBCol>
          <MDBCol lg="8">
          <MDBCard className="mb-4">
{
  //!sdfsdf
}
<MDBCardBody>
        {/* Campo 1 */}
        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>Nombre</MDBCardText>
          </MDBCol>
          <MDBCol sm="6">
            {nombres.isEditing ? (
              <input
                type="text"
                className="form-control"
                value={nombres.value}
                onChange={(e) => handleChange(e, setNombres)}
              />
            ) : (
              <MDBCardText className="text-muted">{nombres.value}</MDBCardText>
            )}
          </MDBCol>
          <MDBCol sm="3">
            <MDBBtn size="sm" onClick={() => handleEditToggle(setNombres)}>
              {nombres.isEditing ? 'Actualizar' : 'Editar'}
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <hr />

        {/* Campo 2 */}
        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>Primer Apellido</MDBCardText>
          </MDBCol>
          <MDBCol sm="6">
            {papellido.isEditing ? (
              <input
                type="text"
                className="form-control"
                value={papellido.value}
                onChange={(e) => handleChange(e, setPApellido)}
              />
            ) : (
              <MDBCardText className="text-muted">{papellido.value}</MDBCardText>
            )}
          </MDBCol>
          <MDBCol sm="3">
            <MDBBtn size="sm" onClick={() => handleEditToggle(setPApellido)}>
              {papellido.isEditing ? 'Actualizar' : 'Editar'}
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <hr />

        {/* Campo 3 */}
        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>Segundo Apellido</MDBCardText>
          </MDBCol>
          <MDBCol sm="6">
            {sapellido.isEditing ? (
              <input
                type="text"
                className="form-control"
                value={sapellido.value}
                onChange={(e) => handleChange(e, setSApellido)}
              />
            ) : (
              <MDBCardText className="text-muted">{sapellido.value}</MDBCardText>
            )}
          </MDBCol>
          <MDBCol sm="3">
            <MDBBtn size="sm" onClick={() => handleEditToggle(setSApellido)}>
              {sapellido.isEditing ? 'Actualizar' : 'Editar'}
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <hr />

        {/* Campo 4 */}
        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>Jugador</MDBCardText>
          </MDBCol>
          <MDBCol sm="6">
            {posicionjugador.isEditing ? (
              <input
                type="text"
                className="form-control"
                value={posicionjugador.value}
                onChange={(e) => handleChange(e, setPosicionjugador)}
              />
            ) : (
              <MDBCardText className="text-muted">{posicionjugador.value}</MDBCardText>
            )}
          </MDBCol>
          <MDBCol sm="3">
            <MDBBtn size="sm" onClick={() => handleEditToggle(setPosicionjugador)}>
              {posicionjugador.isEditing ? 'Actualizar' : 'Editar'}
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <hr />

        
      </MDBCardBody>
      {
      //!final
      }




      
    </MDBCard>


            <MDBRow>
            <MDBCol md="6">
              <MDBCard className="mb-4 mb-md-0">
                <MDBCardBody>
                  <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Jugador:</span> Estadísticas en Campeonato de Béisbol</MDBCardText>

                  <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Promedio de Bateo (BA)</MDBCardText>
                  <MDBProgress className="rounded">
                    <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                  </MDBProgress>
                  <div className="text-end" style={{ fontSize: '.77rem' }}>0.320 (102 hits en 319 turnos al bate)</div>

                  <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Carreras Anotadas (R)</MDBCardText>
                  <MDBProgress className="rounded">
                    <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                  </MDBProgress>
                  <div className="text-end" style={{ fontSize: '.77rem' }}>80 carreras</div>

                  <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Home Runs (HR)</MDBCardText>
                  <MDBProgress className="rounded">
                    <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                  </MDBProgress>
                  <div className="text-end" style={{ fontSize: '.77rem' }}>40 home runs</div>

                  <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Carreras Impulsadas (RBI)</MDBCardText>
                  <MDBProgress className="rounded">
                    <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                  </MDBProgress>
                  <div className="text-end" style={{ fontSize: '.77rem' }}>120 RBI</div>

                  <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Promedio de Fildeo (FPCT)</MDBCardText>
                  <MDBProgress className="rounded">
                    <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                  </MDBProgress>
                  <div className="text-end" style={{ fontSize: '.77rem' }}>0.980 (65 de 66 intentos de fildeo exitosos)</div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            
            <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Jugador:</span> Estadísticas en Campeonato de Béisbol</MDBCardText>

                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Promedio de Bateo (BA)</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>
                    <div className="text-end" style={{ fontSize: '.77rem' }}>0.320 (102 hits en 319 turnos al bate)</div>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Carreras Anotadas (R)</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>
                    <div className="text-end" style={{ fontSize: '.77rem' }}>80 carreras</div>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Home Runs (HR)</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>
                    <div className="text-end" style={{ fontSize: '.77rem' }}>40 home runs</div>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Carreras Impulsadas (RBI)</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>
                    <div className="text-end" style={{ fontSize: '.77rem' }}>120 RBI</div>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Promedio de Fildeo (FPCT)</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress>
                    <div className="text-end" style={{ fontSize: '.77rem' }}>0.980 (65 de 66 intentos de fildeo exitosos)</div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default Perfilusuario;