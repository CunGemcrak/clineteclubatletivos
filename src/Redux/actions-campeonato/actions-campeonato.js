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