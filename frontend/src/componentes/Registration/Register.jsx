import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

const FormRegister = () => {
  const submitForm = async (values) => {
    console.log(values)
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
    <div class="w-full max-w-xs">
       <div>
        <form class="w-328 h-568 bg-gradient-to-b from-green-200 to-neutral-400 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}> 
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="firstName">
        Nombre
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type='text'
          placeholder='Nombre'
          name='firstName'
          value={values.firstName}
          onChange={handleChange}
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="lastName">
        Apellido
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type='text'
          placeholder='Apellido'
          name='lastName'
          value={values.lastName}
          onChange={handleChange}
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type='email'
          placeholder='Correo electrónico'
          name='email'
          value={values.email}
          onChange={handleChange}
          />
        </div>
        <div class="mb-4">
          <label  class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Contraseña
          </label>
          <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type='password'
          placeholder='Contraseña'
          name='password'
          value={values.password}
          onChange={handleChange}
          />
        </div>
        <div class="inline-block relative w-64">
        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name='rol' value={values.rol} onChange={handleChange}>
          <option value='CLIENT'>Cliente</option>
          <option value='PROVIDER'>Proveedor</option>
        </select> 
        </div>
        
        <div class="p-4 flex justify-between shadow-md sticky top-0 z-50">
         <div class="bg-green-200 hover:bg-green-600 rounded-full text-black font-semibold w-max py-3 px-4 shadow-md transition-colors duration-300 ease-in-out flex items-center justify-center">
          <button type='submit'>Registrarse</button>
         </div>
        </div>
      </form> 
    </div>
   </div>     
  );
};


export default FormRegister;