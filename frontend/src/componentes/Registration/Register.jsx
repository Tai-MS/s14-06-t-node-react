import  { useContext } from 'react'; // Importa useContext
import { useFormik } from 'formik';
import Swal from 'sweetalert2'

import { useNavigate } from 'react-router-dom';
import UserContext from './UserContext'; // Agrega la importación de UserProvider
import axios from 'axios';
const FormRegister = () => {
  const { userData, setUserData } = useContext(UserContext); // Elimina userData, no lo necesitamos aquí
  const history = useNavigate();

  const submitForm = async (values) => {
    try {
      // Guardar los datos del usuario en el contexto de usuario
      setUserData(values);
      // Redirigir al segundo formulario si el usuario es proveedor
      if (values.rol === 'PROVIDER') {
        history(`/registro-proveedor`);
      } else {
        const combinedValues = { 
          ...userData, 
          ...values,
        }
        await axios.post(`${import.meta.env.VITE_API_URL}/users/register`, combinedValues);
        Swal.fire('Registro exitoso, ahora puedes iniciar sesión!')

        history(`/`);
      }
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
    <div className="w-full mt-4 flex items-center justify-center ">
       <div>
        <form className="w-full h-568 bg-gradient-to-b from-green-200 to-customGreen shadow-md rounded px-8 pt-6 pb-8 mb-4 " onSubmit={handleSubmit}> 
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
        Nombre
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type='text'
          placeholder='Nombre'
          name='firstName'
          value={values.firstName}
          onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
        Apellido
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type='text'
          placeholder='Apellido'
          name='lastName'
          value={values.lastName}
          onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type='email'
          placeholder='Correo electrónico'
          name='email'
          value={values.email}
          onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label  className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Contraseña
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type='password'
          placeholder='Contraseña'
          name='password'
          value={values.password}
          onChange={handleChange}
          />
        </div>
        <div className="inline-block relative w-64">
        <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name='rol' value={values.rol} onChange={handleChange}>
          <option value='CLIENT'>Cliente</option>
          <option value='PROVIDER'>Proveedor</option>
        </select> 
        </div>
        
        <div className="p-4 flex justify-between mt-14 sticky top-0 z-50">
         <div className="bg-green-200 hover:bg-green-600 rounded-full text-black font-semibold w-full py-3 px-4 shadow-md transition-colors duration-300 ease-in-out flex items-center justify-center">
          <button type='submit'>Registrarse</button>
         </div>
        </div>
        </form>
      </div>
   </div>   
  );
};

export default FormRegister;
