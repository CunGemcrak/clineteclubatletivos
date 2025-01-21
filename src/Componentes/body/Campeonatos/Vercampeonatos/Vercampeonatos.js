import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import {
  VerListaCampeonatos,
  EliminarCampeonato,
} from "../../../../Redux/actions-campeonato/actions-campeonato";
import alertify from "alertifyjs";

const Vercampeonatos = () => {
  const [selectedCampeonato, setSelectedCampeonato] = useState(null);
  const [newFechaInicio, setNewFechaInicio] = useState("");

  const dispatch = useDispatch();

  // Obtener el estado del store
  const LOGUEOUSER = useSelector((state) => state.LOGINUSER || null);
  const CAMPEONATOS = useSelector((state) => state.CAMPEONATOS || []);

  // Obtener campeonatos del usuario
  const fetchCampeonatos = async () => {
    if (LOGUEOUSER && LOGUEOUSER.email) {
      try {
        await dispatch(VerListaCampeonatos(LOGUEOUSER.email));
      } catch (error) {
        console.error("Error al obtener campeonatos:", error);
        alertify.error("Error al cargar los campeonatos.");
      }
    }
  };

  useEffect(() => {
    fetchCampeonatos();
  }, [LOGUEOUSER]);

  // Manejar eliminación de campeonato
  const handleEliminar = async (idcampeonato) => {
    //alert(idcampeonato)
    if (!LOGUEOUSER || !LOGUEOUSER.email) {
      alertify.error("Usuario no autenticado.");
      return;
    }

    alertify.confirm(
      "Confirmación",
      "¿Estás seguro de que deseas eliminar este campeonato?",
      async () => {
        await dispatch(EliminarCampeonato(idcampeonato, LOGUEOUSER.email));
      },
      () => {
        alertify.error("Eliminación cancelada.");
      }
    );
  };

  // Manejar clic en Ver Equipos
  const handleVerEquipos = () => {
    alertify.success("Ver equipos");
  };
const handleFinalizar = ()=>{
  alert("Finalizado")
}
  return (
    <MDBContainer>
      <h2 className="text-center my-6">Mis Campeonatos</h2>
      <MDBRow>
        {CAMPEONATOS.length === 0 ? (
          <p className="text-center">No se encontraron campeonatos.</p>
        ) : (
          CAMPEONATOS.map((campeonato) => (
            <MDBCol md="4" className="mb-4 m-2" key={campeonato.idcampeonato}>
              <MDBCard style={{ width: "300px" }}>
                <MDBCardHeader>
                  <h5>{campeonato.nombrecampeonato}</h5>
                  <small>ID: {campeonato.idcampeonato}</small>
                </MDBCardHeader>
                <MDBCardBody>
                  <p>
                    <strong>Costo:</strong> ${campeonato.costotorneo}
                  </p>
                  <p>
                    <strong>Fecha de Inicio:</strong> {campeonato.fechainicio}
                  </p>
                  <p>
                    <strong>Equipos Inscritos:</strong>{" "}
                    {campeonato.cantidadequipos || 0}
                  </p>
                </MDBCardBody>
                <MDBCardFooter className="d-flex justify-content-between" title="Eliminar Campeonato">
                  <MDBBtn
                    color="danger"
                    size="sm"
                    onClick={() => handleEliminar(campeonato.idcampeonato)}
                  >
                    <MDBIcon fas icon="trash" />
                  </MDBBtn>
                  <MDBBtn
                    color="warning"
                    size="sm"
                    onClick={() => {
                      setSelectedCampeonato(campeonato);
                      setNewFechaInicio(campeonato.fechainicio);
                    }}
                    title="Actualizar Fecha de inicio"
                  >
                    <MDBIcon fas icon="edit" />
                  </MDBBtn>
                  <MDBBtn color="danger" size="sm" onClick={handleFinalizar} title="Finalizar Campeonato">
                    <MDBIcon fas icon="flag-checkered" className="me-2" /> 
                  </MDBBtn>

                  <MDBBtn color="info" size="sm" title="Ver Equipos" onClick={handleVerEquipos}>
                    <MDBIcon color="green" size="50" icon="baseball-ball" />
                  </MDBBtn>
                  
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
          ))
        )}
      </MDBRow>

      {/* Modal para actualizar fecha de inicio */}
      {selectedCampeonato && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MDBCard style={{ width: "400px" }}>
            <MDBCardBody>
              <h5>Actualizar Fecha de Inicio</h5>
              <p style={{textAlign:'justify'}}>
                <strong>Campeonato:</strong> {selectedCampeonato.nombrecampeonato}
              </p>
              <p style={{textAlign:'justify'}}>
              Cambio la fecha del campeonato Actualizala aquí:
              </p>
              <MDBInput
                type="date"
                value={newFechaInicio}
                onChange={(e) => setNewFechaInicio(e.target.value)}
                label="Nueva Fecha de Inicio"
              />
              <div className="d-flex justify-content-end mt-4">
                <MDBBtn
                  color="warning"
                  // Implementar funcionalidad para guardar cambios
                  className="me-2"
                >
                  Guardar
                </MDBBtn>
                <MDBBtn
                  color="secondary"
                  onClick={() => setSelectedCampeonato(null)}
                >
                  Cancelar
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </div>
      )}
    </MDBContainer>
  );
};

export default Vercampeonatos;
