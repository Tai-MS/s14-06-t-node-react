import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

const FormRegister = () => {
  const submitForm = async (values) => {
    try {
      await axios.post('http://localhost:8080/api/users/register', values);
      alert('Registro exitoso');
    } catch (error) {
      console.error('Error al registrar:', error);
    }
  };

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      rol: 'CLIENT', // Valor por defecto CLIENT
    },
    onSubmit: submitForm,
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Nombre'
          name='firstName'
          value={values.firstName}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Apellido'
          name='lastName'
          value={values.lastName}
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='Correo electrónico'
          name='email'
          value={values.email}
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Contraseña'
          name='password'
          value={values.password}
          onChange={handleChange}
        />
        <select name='rol' value={values.rol} onChange={handleChange}>
          <option value='CLIENT'>Cliente</option>
          <option value='PROVIDER'>Proveedor</option>
        </select>
        <button type='submit'>Registrarse</button>
      </form>
    </div>
  );
};


export default FormRegister;