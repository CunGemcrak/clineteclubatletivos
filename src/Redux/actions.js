import { LOGIN } from "./action-types";
import axios from "axios";
import alertify from "alertifyjs";

//const url = 'http://localhost:3001';
const url = 'https://admingemcrak.alwaysdata.net';

export const logueoUser = (email, passwords) => {
  return async (dispatch) => {
    try {
      const endpoint = `${url}/usuario/leer?email=${email}&passwords=${passwords}`;
      
      const response = await axios.get(endpoint);

      // Verificar que la respuesta fue exitosa
      if (response.status !== 200) {
        alertify
          .alert("Error", "Hubo un problema con la respuesta del servidor.", function () {
            alertify.message('OK');
          });
        return false;
      }

      // Verificar si la respuesta contiene los datos esperados
      if (!response.data || !response.data.role_id) {
        alertify
          .alert("Error", "Usuario no registrado", function () {
            alertify.message('OK');
          });
        return false;
      }

      const { role_id, nombre } = response.data;

      if (role_id === '1' || role_id === '2') {
        alertify
          .alert("Bienvenid@", `Hola, ${nombre}, Qué gusto verte`, function () {
            alertify.message('OK');
          });
      } else if (role_id === '0') {
        alertify
          .alert("Error", `Hola ${nombre}, Comunícate pronto con el administrador`, function () {
            alertify.message('OK');
          });
        return false;
      }

      // Dispatch a la acción de login con los datos del usuario
      dispatch({
        type: LOGIN,
        payload: response.data,
      });
      return true;

      // Redirigir al usuario a otra página si es necesario (ejemplo con React Router)
      // history.push('/dashboard');  // Si tienes react-router, puedes redirigir después del login.

    } catch (error) {
      console.error("Error al enviar la información", error.response ? error.response.data : error.message);
      alertify
        .alert("Error", "Hubo un problema al intentar iniciar sesión. Revisa usuario y contraseña.", function () {
          alertify.message('OK');
        });
    }
  };
};



export const registrarUser = (userData) => {
  return async () => {
    try {
      const endpoint = `${url}/usuario/crear`;

      const response = await axios.post(endpoint, userData);

      // Verificar que la respuesta fue exitosa
      if (response.status === 201) {
        alertify
          .alert("Éxito", "Usuario registrado correctamente.", function () {
            alertify.message('OK');
          });
        return true;
      } else {
        alertify
          .alert("Error", "Hubo un problema al registrar el usuario.", function () {
            alertify.message('OK');
          });
        return false;
      }
    } catch (error) {
      console.error("Error al registrar el usuario", error.response ? error.response.data : error.message);
      alertify
        .alert("Error", "Hubo un problema al intentar registrar el usuario. Revisa los datos ingresados.", function () {
          alertify.message('OK');
        });
    }
  };
};



export const modificarUsuario =()=>{

}