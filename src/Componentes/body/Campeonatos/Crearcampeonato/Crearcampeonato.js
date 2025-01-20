import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBBtn,
  MDBInput,
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { campeonatoBuscarId, CrearCampeonato } from '../../../../Redux/actions-campeonato/actions-campeonato';
import alertify from "alertifyjs";
const Crearuncampeonato = () => {
  const LOGINUSER = useSelector((state) => state.LOGINUSER || null);
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    idcampeonato: '',
    nombrecampeonato: '',
    nivelcampeonato: '',
    organizador: `${LOGINUSER?.nombre || ''} ${LOGINUSER?.papellido || ''}`.trim(),
    correoorganizador: LOGINUSER?.email || '',
    celularorganizador: LOGINUSER?.celular || '',
    costotorneo: '',
    fechapublicacions: '',
    fechainicio: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleCrearIdCampeonato = async () => {
    const generateRandomString = (charset, length) => {
      return Array.from({ length }, () => charset[Math.floor(Math.random() * charset.length)]).join('');
    };
  
    const numeros = '0123456789';
    const letras = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const especiales = '#$%*';
  
    // Función para generar un ID único
    const generarIdUnico = async () => {
      const codigoFinal =
        generateRandomString(numeros, 3) +
        generateRandomString(letras, 3) +
        generateRandomString(especiales, 3);
  
      // Consultar si el ID ya existe utilizando dispatch
     // alert(codigoFinal)
      const existe = await campeonatoBuscarId(codigoFinal); // Devuelve true si existe, false si no
  
      // Si el ID ya existe, volver a intentarlo
      //alert(JSON.stringify('este '+ JSON.stringify(existe)))
      const {exists} = existe
      //alert(exists)
      if (exists) {
        console.log(`ID ${codigoFinal} ya existe, generando uno nuevo...`);
        return generarIdUnico();
      }
  
      // Si el ID es único, devolverlo
      console.log(`ID generado: ${codigoFinal}`);
      return codigoFinal;
    };
  
    try {
      // Generar el ID único
      const idUnico = await generarIdUnico();
  
      // Actualizar el estado con el ID generado
      setFormData((prevFormData) => ({
        ...prevFormData,
        idcampeonato: idUnico,
      }));
  
      alertify.success('ID único generado y asignado correctamente.');
    } catch (error) {
      console.error('Error al generar el ID del campeonato:', error);
      alertify.error('No se pudo generar un ID único. Inténtalo nuevamente.');
    }
  };
  
  const handleGuardarCampeonato = async () => {
    const campeonatoData = {
      idcampeonato: formData.idcampeonato,
      nombrecampeonato: formData.nombrecampeonato,
      nivelcampeonato: formData.nivelcampeonato,
      organizador: formData.organizador,
      correoorganizador: formData.correoorganizador,
      celularorganizador: formData.celularorganizador,
      costotorneo: formData.costotorneo,
      fechapublicacions: formData.fechapublicacions,
      fechainicio: formData.fechainicio,
    };
  
    try {
      // Llamar a la acción para crear el campeonato
      const nuevoCampeonato = await CrearCampeonato(campeonatoData);
  
      if (nuevoCampeonato) {
        console.log("Campeonato creado:", nuevoCampeonato);
        alertify.success("Campeonato guardado exitosamente.");

        setFormData({
          idcampeonato: '',
          nombrecampeonato: '',
          nivelcampeonato: '',
          organizador: `${LOGINUSER?.nombre || ''} ${LOGINUSER?.papellido || ''}`.trim(),
          correoorganizador: LOGINUSER?.email || '',
          celularorganizador: LOGINUSER?.celular || '',
          costotorneo: '',
          fechapublicacions: '',
          fechainicio: '',
        });










      }
    } catch (error) {
      console.error("Error al guardar el campeonato:", error);
      alertify.error("No se pudo guardar el campeonato.");
    }
  };
  

  return (
    <MDBContainer className="mt-2">
      <MDBRow className="justify-content-center">
        <MDBCol md="8" lg="6">
          <MDBCard className="shadow-lg" style={{ backgroundColor: 'black', color: 'white' }}>
            <MDBCardHeader className="text-center" style={{ backgroundColor: 'red' }}>
              <h4>Crear Campeonato</h4>
            </MDBCardHeader>
            <MDBCardBody>
             
                {/* ID Campeonato */}
                <div className="mb-3">
                  <label htmlFor="idcampeonato" className="form-label text-light">
                    ID Campeonato
                  </label>
                  <div className="d-flex">
                    <MDBInput
                      id="idcampeonato"
                      name="idcampeonato"
                      value={formData.idcampeonato}
                      className="flex-grow-1"
                      style={{ backgroundColor: 'black', color: 'white' }}
                      disabled
                    />
                    
                   
                  </div>
                  <br/>
                  <MDBBtn color="danger" onClick={handleCrearIdCampeonato} className="ms-2">
                      Crear ID
                    </MDBBtn>
                    <br/>
                </div>

                {/* Nombre del Campeonato */}
                <div className="mb-3">
                  <label htmlFor="nombrecampeonato" className="form-label text-light">
                    Nombre del Campeonato
                  </label>
                  <MDBInput
                    id="nombrecampeonato"
                    name="nombrecampeonato"
                    value={formData.nombrecampeonato}
                    onChange={handleChange}
                    style={{ backgroundColor: 'black', color: 'white' }}
                  />
                </div>

                {/* Nivel del Campeonato */}
                <div className="mb-3">
                  <label htmlFor="nivelcampeonato" className="form-label text-light">
                    Nivel del Campeonato
                  </label>
                  <MDBInput
                    id="nivelcampeonato"
                    name="nivelcampeonato"
                    value={formData.nivelcampeonato}
                    onChange={handleChange}
                    style={{ backgroundColor: 'black', color: 'white' }}
                  />
                </div>

                {/* Organizador */}
                <div className="mb-3">
                  <label htmlFor="organizador" className="form-label text-light">
                    Organizador
                  </label>
                  <MDBInput
                    id="organizador"
                    name="organizador"
                    value={formData.organizador}
                    style={{ backgroundColor: 'gray', color: 'white' }}
                    disabled
                  />
                </div>

                {/* Correo del Organizador */}
                <div className="mb-3">
                  <label htmlFor="correoorganizador" className="form-label text-light">
                    Correo del Organizador
                  </label>
                  <MDBInput
                    id="correoorganizador"
                    name="correoorganizador"
                    value={formData.correoorganizador}
                    style={{ backgroundColor: 'gray', color: 'white' }}
                    disabled
                  />
                </div>

                {/* Celular del Organizador */}
                <div className="mb-3">
                  <label htmlFor="celularorganizador" className="form-label text-light">
                    Celular del Organizador
                  </label>
                  <MDBInput
                    id="celularorganizador"
                    name="celularorganizador"
                    value={formData.celularorganizador}
                    style={{ backgroundColor: 'gray', color: 'white' }}
                    disabled
                  />
                </div>

                {/* Costo del Torneo */}
                <div className="mb-3">
                  <label htmlFor="costotorneo" className="form-label text-light">
                    Costo del Torneo
                  </label>
                  <MDBInput
                    id="costotorneo"
                    name="costotorneo"
                    value={formData.costotorneo}
                    onChange={handleChange}
                    style={{ backgroundColor: 'black', color: 'white' }}
                  />
                </div>

                {/* Fecha de Publicación */}
                <div className="mb-3">
                  <label htmlFor="fechapublicacions" className="form-label text-light">
                    Fecha de Publicación
                  </label>
                  <MDBInput
                    id="fechapublicacions"
                    name="fechapublicacions"
                    type="date"
                    value={formData.fechapublicacions}
                    onChange={handleChange}
                    style={{ backgroundColor: 'black', color: 'white' }}
                  />
                </div>

                {/* Fecha de Inicio */}
                <div className="mb-3">
                  <label htmlFor="fechainicio" className="form-label text-light">
                    Fecha de Inicio del Torneo
                  </label>
                  <MDBInput
                    id="fechainicio"
                    name="fechainicio"
                    type="date"
                    value={formData.fechainicio}
                    onChange={handleChange}
                    style={{ backgroundColor: 'black', color: 'white' }}
                  />
                </div>

                <MDBBtn type="submit" color="danger" block onClick={handleGuardarCampeonato}>
                  Crear Campeonato
                </MDBBtn>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <br/>
    </MDBContainer>
  );
};

export default Crearuncampeonato;
