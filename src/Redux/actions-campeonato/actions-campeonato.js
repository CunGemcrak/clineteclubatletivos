import { CAMPEONATOS } from "../action-types";

import axios from "axios";
import alertify from "alertifyjs";

// URL base para las solicitudes
const url = 'https://admingemcrak.alwaysdata.net';
//const url ='http://localhost:3001'

export const campeonatoBuscarId = async (dato) => {
  try {
    // Construir el endpoint con el ID en la query string
    const endpoint = `${url}/campeonato/buscar?idcampeonato=${encodeURIComponent(dato)}`;
   //| alert('Endpoint generado:', endpoint);

    // Realizar la solicitud GET
    const response = await axios.get(endpoint);

    // Verificar si el backend devolvió el resultado esperado
    if (response && response.data) {   
        return response.data;
    
    } else {
      alertify.error('Respuesta inesperada del servidor.');
      return false;
    }
  } catch (error) {
    // Manejo de errores
    console.error('Error al buscar el campeonato:', error);
    alertify.error('Ocurrió un error al procesar la solicitud. Por favor, inténtalo más tarde.');
    return false;
  }
};

//! Acción para crear un campeonato
export const CrearCampeonato = async (dato) => {
  try {
    const endpoint = `${url}/campeonato/crear`;
    console.log("Datos enviados al backend:", dato);

    // Realizar la solicitud POST al backend
    const response = await axios.post(endpoint, dato);

    // Verificar si la respuesta es exitosa
    if (response && response.status === 201) {
      alertify.success("El campeonato se ha creado exitosamente.");
      return response.data; // Devuelve el campeonato creado
    } else {
      alertify.error("No se pudo crear el campeonato. Inténtalo nuevamente.");
      return null;
    }
  } catch (error) {
    console.error("Error al crear el campeonato:", error.message);
    alertify.error("Ocurrió un error al procesar la solicitud. Por favor, inténtalo más tarde.");
    return null;
  }
};


//!Ver todos los campeonatos

export const VerListaCampeonatos = (email) => {
  return async (dispatch) => {
    try {
      // Construir el endpoint con el correo organizador en la query string
    //  alert("Entro" + email)
      const endpoint = `${url}/campeonato/campeonatosorganizador?correoorganizador=${encodeURIComponent(email)}`;

      // Realizar la solicitud GET
      const response = await axios.get(endpoint);

      // Verificar si el backend devolvió el resultado esperado
      alert(JSON.stringify(response.data))
      if (response && response.data) {
        // Dispatch para guardar los datos en el store
        dispatch({
          type: CAMPEONATOS,
          payload: response.data,
        });

        // Devolver los datos obtenidos
        return response.data;
      } else {
        // Error si no hay datos en la respuesta
        alertify.error("Respuesta inesperada del servidor.");
        return false;
      }
    } catch (error) {
      // Manejo de errores
      console.error("Error al buscar los campeonatos:", error);
      alertify.error(
        "Ocurrió un error al procesar la solicitud. Por favor, inténtalo más tarde."
      );
      return false;
    }
  };
};

//! Eliminar Campeonato
export const EliminarCampeonato = (idcampeonato, correoorganizador) => { 
  return async (dispatch) => {
    try {
      // Usar encodeURIComponent dos veces para manejar caracteres especiales
      const encodedId = encodeURIComponent(encodeURIComponent(idcampeonato));
      const encodedCorreo = encodeURIComponent(encodeURIComponent(correoorganizador));
      
      const endpoint = `${url}/campeonato/eliminar/${encodedId}/${encodedCorreo}`;

      const response = await axios.delete(endpoint);
      alert(JSON.stringify(response.data))
      dispatch({
        type: CAMPEONATOS,
        payload: response.data.campeonatos,
      });

      alertify.success(response.data.message);
    } catch (error) {
      console.error("Error al eliminar el campeonato:", error.response?.data?.message || error.message);
      alertify.error(error.response?.data?.message || "Error al intentar eliminar el campeonato.");
    }
  };
};