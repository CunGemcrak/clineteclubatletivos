import {
  LOGIN, CERRARSESION
} from "../Redux/action-types";

const initialState = {
  ESTADO: false,
  USER:null
};

const reducer = (state = initialState, { type, payload }) => {
  // console.log("entro al reducer la informacion" + payload);
 

  switch (type) {
    case CERRARSESION:
      return {
        ...state,
        USER: null,
        STATUS:false
       
      }




      case LOGIN:
        // Asegurarse de que el payload sea un objeto, si no lo es, intenta parsearlo
        const parsedPayload = typeof payload === 'string' ? JSON.parse(payload) : payload;
      
        // Verificamos que el objeto tenga la propiedad 'message' antes de hacer la comparación
        if (parsedPayload.message === "Usuario no encontrado") {
          alert("Usuario no encontrado"); // Mostramos el mensaje de alerta
          return {
            ...state,
            USER: false,  // Establecemos USER a false si el mensaje es "Usuario no encontrado"
          };
        }
      
        // Si el usuario es encontrado, guardamos los datos del usuario en LOGINUSER
        return {
          ...state,
          LOGINUSER: parsedPayload,  // Guardamos los datos del usuario
          USER: true,  // Establecemos que el usuario está autenticado
        };
      

      
    default:
      return { ...state };
  }
};

export default reducer;

