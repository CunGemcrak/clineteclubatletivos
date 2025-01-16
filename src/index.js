import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";



import 'alertifyjs/build/css/alertify.min.css';
import 'alertifyjs/build/css/themes/default.min.css';


import { BrowserRouter } from "react-router-dom"; // Comportamientos de Bootstrap
import { Provider } from "react-redux";
import store from "./Redux/store.js";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
        <App />
    
    </BrowserRouter>
    </Provider>
  </React.StrictMode>



);
