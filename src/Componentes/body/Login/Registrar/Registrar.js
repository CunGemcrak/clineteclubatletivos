import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { registrarUser } from '../../../../Redux/actions';
import { Link } from 'react-router-dom';  // Importa Link para redirigir

const Registrar = () => {
  const dispatch = useDispatch();

  // Estado del formulario
  const [formData, setFormData] = useState({
    tdocumento: '',
    idusuario: '',
    nombre: '',
    papellido: '',
    sapellido: '',
    email: '',
    passwords: '',
    imagen: 'https://res.cloudinary.com/dss2hdisa/image/upload/Super_Mario_Maker_for_Nintendo_3DS__JP_website_open_footage_commercials_more_xrnxvc.jpg',
    celular: '',
    role_id: '',
  });

  // Estado de errores
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Validación del formulario
  const validate = (data) => {
    const errors = {};
    if (!data.tdocumento) errors.tdocumento = 'El tipo de documento es obligatorio.';
    if (!data.idusuario) errors.idusuario = 'El número de documento es obligatorio.';
    if (!data.nombre) errors.nombre = 'El nombre es obligatorio.';
    if (!data.papellido) errors.papellido = 'El primer apellido es obligatorio.';
    if (!data.email) errors.email = 'El correo electrónico es obligatorio.';
    else if (!/\S+@\S+\.\S+/.test(data.email)) errors.email = 'El correo no es válido.';
    if (!data.passwords) errors.passwords = 'La contraseña es obligatoria.';
    if (!data.role_id) errors.role_id = 'El rol es obligatorio.';
    if (!data.celular) errors.celular = 'El celular es obligatorio.';
    return errors;
  };

  // Manejador de cambios en los campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejador de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      dispatch(registrarUser(formData))
        .then(() => {
          setSuccess(true);
        })
        .catch((error) => {
          console.error('Error al crear usuario:', error);
          setSuccess(false);
        });
    }
  };

  return (
    <Card className="mt-2 mx-auto" style={{ maxWidth: '600px' }}>
      <Card.Header>Registrar Usuario</Card.Header>
      <Card.Body>
        {success && <Alert variant="success">Usuario creado con éxito.</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Tipo de Documento</Form.Label>
            <Form.Control
              as="select"
              name="tdocumento"
              value={formData.tdocumento}
              onChange={handleChange}
              isInvalid={!!errors.tdocumento}
            >
              <option value="">Seleccione un tipo de documento</option>
              <option value="CC">Cédula de Ciudadanía</option>
              <option value="NIT">NIT</option>
              <option value="RUT">RUT</option>
              <option value="Registro">Registro</option>
              <option value="Otro">Otro</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">{errors.tdocumento}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Número de Documento</Form.Label>
            <Form.Control
              type="text"
              name="idusuario"
              value={formData.idusuario}
              onChange={handleChange}
              isInvalid={!!errors.idusuario}
            />
            <Form.Control.Feedback type="invalid">{errors.idusuario}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              isInvalid={!!errors.nombre}
            />
            <Form.Control.Feedback type="invalid">{errors.nombre}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Primer Apellido</Form.Label>
            <Form.Control
              type="text"
              name="papellido"
              value={formData.papellido}
              onChange={handleChange}
              isInvalid={!!errors.papellido}
            />
            <Form.Control.Feedback type="invalid">{errors.papellido}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Segundo Apellido</Form.Label>
            <Form.Control
              type="text"
              name="sapellido"
              value={formData.sapellido}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="passwords"
              value={formData.passwords}
              onChange={handleChange}
              isInvalid={!!errors.passwords}
            />
            <Form.Control.Feedback type="invalid">{errors.passwords}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Celular</Form.Label>
            <Form.Control
              type="text"
              name="celular"
              value={formData.celular}
              onChange={handleChange}
              isInvalid={!!errors.celular}
            />
            <Form.Control.Feedback type="invalid">{errors.celular}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Rol</Form.Label>
            <Form.Control
              as="select"
              name="role_id"
              value={formData.role_id}
              onChange={handleChange}
              isInvalid={!!errors.role_id}
            >
              <option value="">Seleccione un rol</option>
              <option value="Jugador">Jugador</option>
              <option value="Organizador">Organizador</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">{errors.role_id}</Form.Control.Feedback>
          </Form.Group>

          {/* Botón con gradiente */}
          <Button
            variant="primary"
            type="submit"
            style={{
              background: 'linear-gradient(to right, red, darkred)',
              border: 'none',
              transition: 'background 0.3s ease',
            }}
            onMouseEnter={(e) => e.target.style.background = 'darkred'}
            onMouseLeave={(e) => e.target.style.background = 'linear-gradient(to right, red, darkred)'}
          >
            Registrar
          </Button>
        </Form>

        {/* Link debajo del formulario */}
        <div className="mt-3">
          <Link to="/" style={{ color: '#007bff', textDecoration: 'none' }}>
            ¡Ya tienes cuenta? Loguéate.
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Registrar;
