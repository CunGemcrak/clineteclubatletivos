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

const Perfilusuario = ()=> {
  const ESTADOUSER = useSelector((state)=>state.USER || null)
  const LOGUEOUSER = useSelector((state)=>state.LOGINUSER || null)

  const [fields, setFields] = useState({
    fullName: { value: "Johnatan Smith", isEditing: false },
    email: { value: "example@example.com", isEditing: false },
    phone: { value: "(097) 234-5678", isEditing: false },
    mobile: { value: "(098) 765-4321", isEditing: false },
    address: { value: "Bay Area, San Francisco, CA", isEditing: false },
  });

  const handleEditToggle = (field) => {
    setFields({
      ...fields,
      [field]: { ...fields[field], isEditing: !fields[field].isEditing },
    });
  };

  const handleChange = (e, field) => {
    setFields({
      ...fields,
      [field]: { ...fields[field], value: e.target.value },
    });
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
                  src={LOGUEOUSER.imagen}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                  <p className="text-muted mb-1"> {LOGUEOUSER.nombre} {LOGUEOUSER.papellido} {LOGUEOUSER.sapellido}</p>
                  <p className="text-muted mb-1">Nivel: {LOGUEOUSER.nivel_jugador}</p>
                  <p className="text-muted mb-4">Posicion: {LOGUEOUSER.posicion_jugador}</p>
                
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Editar</MDBBtn>
                  <MDBBtn outline className="ms-1">Buscar</MDBBtn>
                </div>
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
      <MDBCardBody>
        {Object.keys(fields).map((field, index) => (
          <React.Fragment key={index}>
            <MDBRow>
              <MDBCol sm="3">
                <MDBCardText>{field.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}</MDBCardText>
              </MDBCol>
              <MDBCol sm="6">
                {fields[field].isEditing ? (
                  <input
                    type="text"
                    className="form-control"
                    value={fields[field].value}
                    onChange={(e) => handleChange(e, field)}
                  />
                ) : (
                  <MDBCardText className="text-muted">{fields[field].value}</MDBCardText>
                )}
              </MDBCol>
              <MDBCol sm="3">
                <MDBBtn size="sm" onClick={() => handleEditToggle(field)}>
                  {fields[field].isEditing ? "Actualizar" : "Editar"}
                </MDBBtn>
              </MDBCol>
            </MDBRow>
            <hr />
          </React.Fragment>
        ))}
      </MDBCardBody>
    </MDBCard>


            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress>
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