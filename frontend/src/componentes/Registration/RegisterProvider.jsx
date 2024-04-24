import React, { useContext } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserContext  from './UserContext' // Importar el contexto de usuario como valor predeterminado


export const RegisterProvider = () => {
  const { userData } = useContext(UserContext); // Obtener los datos del usuario del contexto
  const history = useNavigate();

  const submitForm = async (values) => {
    
    try {
      // Combinar los datos del primer y segundo formulario
      const combinedValues = { 
        ...userData, 
        ...values,
        availability_schedule: values.availability_schedule[0],
        service_type: values.service_type[0],
        type_of_payment: values.type_of_payment[0]
      };
      console.log(combinedValues)
      // Enviar los datos del cliente al backend
      await axios.post('https://s14-06-t-node-react.onrender.com/api/users/register', combinedValues);
      alert('Registro exitoso');
      history(`/`);
    } catch (error) {
      console.error('Error al registrar:', error);
    }
  };

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      city: '',
      phone: '',
      address: '',
      service_type: '',
      type_of_payment: '',
      availability_schedule:'',
    },
    onSubmit: submitForm,
  });

  return (
      <div className="w-full mt-4 flex items-center justify-center ">
       <div >
        <form className="w-full h-568 bg-gradient-to-b from-green-200 to-customGreen shadow-md rounded px-8 pt-6 pb-8 mb-4 " onSubmit={handleSubmit}> 
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">Ciudad</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Ciudad"
              name="city"
              value={values.city}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Teléfono</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type='phone'
              placeholder='Teléfono'
              name='phone'
              value={values.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label  className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Dirección</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type='text'
              placeholder='Dirección'
              name='address'
              value={values.address}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="service_type">Tipo de servicio</label>
            <select
              multiple
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              name="service_type"
              value={values.service_type}
              onChange={handleChange}
            >
              <option value="Limpieza">Limpieza</option>
              <option value="Cuidado de Adultos">Cuidado de Adultos</option>
              <option value="Niñera">Niñera</option>
              <option value="Techista">Techista</option>
              <option value="Jardinero">Jardinero</option>
              <option value="Electricista">Electricista</option>
              <option value="Albañil">Albañil</option>
              <option value="Carpintero">Carpintero</option>
              <option value="Plomero">Plomero</option>
              <option value="Pintor">Pintor</option>
              <option value="Cerrajero">Cerrajero</option>
              <option value="Flete">Flete</option>
              <option value="Gasista">Gasista</option>
              <option value="Servicio a/a">Servicio a/a</option>
              <option value="Pintor">Pintor</option>
              <option value="Herrero">Herrero</option>
              <option value="Vidriero">Vidriero</option> 
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type_of_payment">Tipo de pago</label>
            <select
              multiple
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              name="type_of_payment"
              value={values.type_of_payment}
              onChange={handleChange}
            >
              <option value="Debito">Débito</option>
              <option value="Efectivo">Efectivo</option>
              <option value="Credito">Crédito</option> 
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="availability_schedule">Disponibilidad horaria</label>
            <select
              multiple
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              name="availability_schedule"
              value={values.availability_schedule}
              onChange={handleChange}
            >
              <option value="full-time">full-time</option>
              <option value="part-time">part-time</option>
              <option value="flexible">flexible</option> 
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





 